import { useEffect, useRef, useState } from "react";
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

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
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

  // Whether there is more to see on each side, and the fit-to-screen choice
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);
  const [fit, setFit] = useState(false);

  const behavior = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth";

  const updateEdges = () => {
    const element = scroller.current;
    if (!element) return;
    setCanLeft(element.scrollLeft > 4);
    setCanRight(
      element.scrollLeft + element.clientWidth < element.scrollWidth - 4,
    );
  };

  // Today about two thirds of the way across
  const showToday = (smooth: boolean) => {
    const element = scroller.current;
    const marker = element?.querySelector<HTMLElement>(".timeline-chart-today");
    if (!element || !marker) return;
    const position =
      marker.getBoundingClientRect().left -
      element.getBoundingClientRect().left +
      element.scrollLeft;
    element.scrollTo({
      left: Math.max(0, position - element.clientWidth * 0.67),
      behavior: smooth ? behavior() : "auto",
    });
  };

  const page = (direction: number) =>
    scroller.current?.scrollBy({
      left: direction * scroller.current.clientWidth * 0.6,
      behavior: behavior(),
    });

  // The chart is wider than most screens, so it opens on the latest years
  useEffect(() => {
    if (!fit) showToday(false);
    updateEdges();
    // The helpers only read refs; this should run when `fit` changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fit]);

  useEffect(() => {
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, []);

  return (
    <div className="timeline-chart-wrap">
      <div className="timeline-chart-controls">
        {!fit && (
          <>
            <button
              className="timeline-chart-button is-round"
              aria-label="Tidligere"
              disabled={!canLeft}
              onClick={() => page(-1)}
            >
              <Arrow direction="left" />
            </button>
            <button
              className="timeline-chart-button is-round"
              aria-label="Senere"
              disabled={!canRight}
              onClick={() => page(1)}
            >
              <Arrow direction="right" />
            </button>
            <button
              className="timeline-chart-button"
              onClick={() => showToday(true)}
            >
              Til i dag
            </button>
          </>
        )}
        <button
          className="timeline-chart-button"
          aria-pressed={fit}
          onClick={() => setFit((value) => !value)}
        >
          {fit ? "Zoom inn" : "Vis alt"}
        </button>
      </div>
      <div
        className={`timeline-chart-frame ${canLeft ? "has-left" : ""} ${canRight ? "has-right" : ""}`}
      >
        <div
          ref={scroller}
          className={`timeline-chart ${fit ? "is-fit" : ""}`}
          onScroll={updateEdges}
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
                                  {clipped &&
                                    ` · siden ${Math.floor(entry.start)}`}
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
      </div>
    </div>
  );
}
