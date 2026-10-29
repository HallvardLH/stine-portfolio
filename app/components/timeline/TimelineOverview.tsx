import { useEffect, useRef } from "react";
import {
  chartEnd,
  chartStart,
  currentYear,
  lanes,
  timeline,
  type TimelineCategory,
  type TimelineEntry,
} from "~/data/timeline";

interface TimelineOverviewProps {
  /** Only this category is in full colour, the rest is dimmed */
  filter: TimelineCategory | "alle";
  onSelect: (id: string) => void;
}

const share = (year: number) =>
  ((year - chartStart) / (chartEnd - chartStart)) * 100;

const gridYears = Array.from(
  { length: Math.ceil(chartEnd) - Math.ceil(chartStart) },
  (_, i) => Math.ceil(chartStart) + i,
);

function tooltip(entry: TimelineEntry) {
  const org = entry.org.split(" · ")[0];
  return entry.title.includes(org) ? entry.title : `${entry.title} · ${org}`;
}

// The whole journey on one screen: a bar per experience on a shared time axis.
// A bar takes you to the entry in the list.
export default function TimelineOverview({
  filter,
  onSelect,
}: TimelineOverviewProps) {
  const today = Math.min(currentYear(), chartEnd);
  const scroller = useRef<HTMLDivElement>(null);
  // Dragging with the mouse scrolls it sideways; a drag is not a click on a bar
  const drag = useRef<{ x: number; left: number; moved: boolean } | null>(null);

  // The chart is wider than most screens, so it opens on the latest years with
  // today about two thirds of the way across
  useEffect(() => {
    const element = scroller.current;
    const marker = element?.querySelector<HTMLElement>(".timeline-chart-today");
    if (!element || !marker) return;
    const position =
      marker.getBoundingClientRect().left -
      element.getBoundingClientRect().left +
      element.scrollLeft;
    element.scrollLeft = Math.max(0, position - element.clientWidth * 0.67);
  }, []);

  return (
    <div
      ref={scroller}
      className="timeline-chart"
      role="group"
      aria-label="Oversikt over erfaringene mine, fra 2019 til nå"
      onPointerDown={(event) => {
        if (event.pointerType !== "mouse" || event.button !== 0) return;
        drag.current = {
          x: event.clientX,
          left: event.currentTarget.scrollLeft,
          moved: false,
        };
      }}
      onPointerMove={(event) => {
        const state = drag.current;
        if (!state) return;
        const distance = event.clientX - state.x;
        if (!state.moved && Math.abs(distance) < 5) return;
        if (!state.moved) {
          state.moved = true;
          event.currentTarget.setPointerCapture(event.pointerId);
          event.currentTarget.classList.add("is-dragging");
        }
        event.currentTarget.scrollLeft = state.left - distance;
      }}
      onPointerUp={(event) => {
        event.currentTarget.classList.remove("is-dragging");
        // Keep `moved` until the click that follows has been swallowed
        if (drag.current && !drag.current.moved) drag.current = null;
      }}
      onClickCapture={(event) => {
        if (drag.current?.moved) {
          event.preventDefault();
          event.stopPropagation();
        }
        drag.current = null;
      }}
    >
      <div className="timeline-chart-inner">
        <div className="timeline-chart-axis-row" aria-hidden="true">
          <span className="timeline-axis-cover" />
          <div className="timeline-chart-axis">
            {gridYears.map((year) => (
              <span key={year} style={{ left: `${share(year)}%` }}>
                {year}
              </span>
            ))}
          </div>
        </div>

        <div className="timeline-chart-lanes">
          <div className="timeline-chart-grid" aria-hidden="true">
            {gridYears.map((year) => (
              <span key={year} style={{ left: `${share(year)}%` }} />
            ))}
            <span
              className="timeline-chart-today"
              style={{ left: `${share(today)}%` }}
            >
              <b>I dag</b>
            </span>
          </div>

          {lanes.map((lane, index) => (
            <div
              className={`timeline-lane ${lane.tall ? "timeline-lane-tall" : ""} ${lane.featured ? "timeline-lane-featured" : ""}`}
              key={index}
            >
              <span className="timeline-lane-label">{lane.label}</span>
              <div className="timeline-track">
                {timeline
                  .filter((entry) => entry.lane === index)
                  .map((entry) => {
                    // A bar still going runs to where it is planned to end, or to today
                    const end = entry.end ?? entry.plannedEnd ?? today;
                    // Started before the chart does: the bar runs in from the left edge
                    const clipped = entry.start < chartStart;
                    const left = clipped ? 0 : share(entry.start);
                    const width = Math.max(share(end) - left, 0.9);
                    const dimmed =
                      filter !== "alle" && entry.category !== filter;
                    return (
                      <span
                        key={entry.id}
                        className="timeline-bar-wrap"
                        style={{ left: `${left}%`, width: `${width}%` }}
                      >
                        <a
                          href={`#erfaring-${entry.id}`}
                          className={`timeline-bar timeline-bar-${entry.category} ${clipped ? "is-clipped" : ""} ${dimmed ? "is-dim" : ""}`}
                          aria-label={`${entry.title}, ${entry.org}, ${entry.dateLabel}`}
                          onClick={(event) => {
                            event.preventDefault();
                            onSelect(entry.id);
                          }}
                        >
                          {entry.barLabel && !lane.notes && (
                            <span className="timeline-bar-label">
                              {entry.barLabel}
                              {clipped && ` · siden ${Math.floor(entry.start)}`}
                            </span>
                          )}
                          <span
                            className={`timeline-tip ${left > 55 ? "timeline-tip-end" : ""}`}
                            aria-hidden="true"
                          >
                            <b>{tooltip(entry)}</b>
                            <span>
                              {entry.dateLabel} · Trykk for å lese mer
                            </span>
                          </span>
                        </a>
                        {lane.notes && (
                          <span
                            className={`timeline-bar-note ${dimmed ? "is-dim" : ""}`}
                            aria-hidden="true"
                          >
                            <b>{entry.barLabel}</b> {entry.dateLabel}
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
    </div>
  );
}
