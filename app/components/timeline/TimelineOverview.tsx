import { useState, type ReactNode } from "react";
import {
  currentYear,
  lanes,
  steps,
  timeline,
  type TimelineCategory,
  type TimelineEntry,
} from "~/data/timeline";

interface TimelineOverviewProps {
  /** Only this category is in full colour, the rest is dimmed */
  filter: TimelineCategory | "alle";
  onSelect: (id: string) => void;
  /** The category filters, shown above the chart */
  filters: ReactNode;
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d={direction === "left" ? "M15 4 7 12l8 8" : "M9 4l8 8-8 8"} />
    </svg>
  );
}

function tooltip(entry: TimelineEntry) {
  const org = entry.org.split(" · ")[0];
  return entry.title.includes(org) ? entry.title : `${entry.title} · ${org}`;
}

// The first lane of each group of lanes carries the group's name
const groupStart = lanes.map((_, index) => {
  let start = index;
  while (start > 0 && !lanes[start].label) start--;
  return start;
});

// The journey on a shared time axis, a stretch of time at a time: a bar per
// experience. A bar takes you to the entry in the list.
export default function TimelineOverview({
  filter,
  onSelect,
  filters,
}: TimelineOverviewProps) {
  const today = currentYear();
  // The stretch with today in it, which is where the chart opens
  const todayStep = Math.max(
    steps.findIndex((item) => today >= item.from && today < item.to),
    0,
  );
  const [step, setStep] = useState(todayStep);
  const { from, to } = steps[step];

  const share = (year: number) => ((year - from) / (to - from)) * 100;
  const gridYears = Array.from(
    { length: Math.max(Math.ceil(to) - Math.ceil(from), 0) },
    (_, i) => Math.ceil(from) + i,
  );

  // The bars that fall in this stretch, cut at its edges
  const shown = timeline.flatMap((entry) => {
    const end = entry.end ?? entry.plannedEnd ?? today;
    if (end <= from || entry.start >= to) return [];
    const cutLeft = entry.start < from;
    const cutRight = end > to;
    const first = Math.max(entry.start, from);
    const last = Math.min(end, to);
    // A sliver of something that mostly belongs to another stretch is left out
    if ((cutLeft || cutRight) && (last - first) / (to - from) < 0.1) return [];
    return [
      {
        entry,
        cutLeft,
        cutRight,
        left: share(first),
        width: Math.max(share(last) - share(first), 0.9),
      },
    ];
  });

  // Rows with nothing in this stretch are left out; the group name goes on the
  // first row that is left
  const named = new Set<number>();
  const rows = lanes.flatMap((lane, index) => {
    const items = shown.filter((item) => item.entry.lane === index);
    if (items.length === 0) return [];
    const group = groupStart[index];
    const label = named.has(group) ? undefined : lanes[group].label;
    named.add(group);
    return [{ lane, index, items, label }];
  });

  return (
    <>
      <div className="timeline-toolbar">{filters}</div>

      <div
        className="timeline-chart"
        role="group"
        aria-label={`Oversikt over erfaringene mine, ${steps[step].label}`}
      >
        <div className="timeline-chart-axis" aria-hidden="true">
          {gridYears.map((year) => (
            <span key={year} style={{ left: `${share(year)}%` }}>
              {year}
            </span>
          ))}
        </div>

        <div className="timeline-chart-lanes">
          <div className="timeline-chart-grid" aria-hidden="true">
            {gridYears.map((year) => (
              <span key={year} style={{ left: `${share(year)}%` }} />
            ))}
            {today > from && today < to && (
              <span
                className="timeline-chart-today"
                style={{ left: `${share(today)}%` }}
              >
                <b>I dag</b>
              </span>
            )}
          </div>

          {rows.map(({ lane, index, items, label }) => (
            <div
              className={`timeline-lane ${lane.tall ? "timeline-lane-tall" : ""} ${lane.featured ? "timeline-lane-featured" : ""}`}
              key={index}
            >
              <span className="timeline-lane-label">{label}</span>
              <div className="timeline-track">
                {items.map(({ entry, cutLeft, cutRight, left, width }) => {
                  const dimmed = filter !== "alle" && entry.category !== filter;
                  return (
                    <span
                      key={entry.id}
                      className="timeline-bar-wrap"
                      style={{ left: `${left}%`, width: `${width}%` }}
                    >
                      <a
                        href={`#erfaring-${entry.id}`}
                        className={`timeline-bar timeline-bar-${entry.category} ${cutLeft ? "is-cut-left" : ""} ${cutRight ? "is-cut-right" : ""} ${dimmed ? "is-dim" : ""}`}
                        aria-label={`${entry.title}, ${entry.org}, ${entry.dateLabel}`}
                        onClick={(event) => {
                          event.preventDefault();
                          onSelect(entry.id);
                        }}
                      >
                        {entry.barLabel && !lane.notes && (
                          <span className="timeline-bar-label">
                            {entry.barLabel}
                            {cutLeft && ` · siden ${Math.floor(entry.start)}`}
                          </span>
                        )}
                        <span
                          className={`timeline-tip ${left > 55 ? "timeline-tip-end" : ""}`}
                          aria-hidden="true"
                        >
                          <b>{tooltip(entry)}</b>
                          <span>{entry.dateLabel} · Trykk for å lese mer</span>
                        </span>
                      </a>
                      {lane.notes && (
                        <span
                          className={`timeline-bar-note ${dimmed ? "is-dim" : ""}`}
                          aria-hidden="true"
                        >
                          {entry.barLabel}
                        </span>
                      )}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="timeline-chart-footer">
        <div className="timeline-steps" role="group" aria-label="Tidsrom">
          <button
            className="timeline-step"
            aria-label="Tidligere tidsrom"
            disabled={step === 0}
            onClick={() => setStep(step - 1)}
          >
            <Chevron direction="left" />
          </button>
          <span className="timeline-steps-label" aria-live="polite">
            {steps[step].label}
          </span>
          <button
            className="timeline-step"
            aria-label="Senere tidsrom"
            disabled={step === steps.length - 1}
            onClick={() => setStep(step + 1)}
          >
            <Chevron direction="right" />
          </button>
        </div>
        <button
          className="timeline-today-button"
          disabled={step === todayStep}
          onClick={() => setStep(todayStep)}
        >
          I dag
        </button>
      </div>
    </>
  );
}
