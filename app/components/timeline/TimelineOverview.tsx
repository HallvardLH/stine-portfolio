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
  // The year the pills point at: the one just chosen, or else the year at the
  // left of what is shown
  const [activeYear, setActiveYear] = useState<number | null>(null);
  const chosen = useRef<number | null>(null);

  const behavior = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth";

  // Where the years sit on screen: the first column of the chart is the row
  // names, which stay put, so the years are measured from the track
  const trackBox = () => {
    const element = scroller.current;
    const grid = element?.querySelector<HTMLElement>(".timeline-chart-grid");
    if (!element || !grid) return null;
    const box = element.getBoundingClientRect();
    const track = grid.getBoundingClientRect();
    // The row names stay put at the left, so the track shows from their edge
    const cover = element.querySelector<HTMLElement>(".timeline-axis-cover");
    const names = cover ? cover.getBoundingClientRect().right : box.left;
    // Visible part of the track, in screen pixels
    const left = Math.max(track.left, names);
    return {
      element,
      box,
      track,
      left,
      right: Math.min(track.right, box.right),
    };
  };

  const updateEdges = () => {
    const element = scroller.current;
    if (!element) return;
    setCanLeft(element.scrollLeft > 4);
    setCanRight(
      element.scrollLeft + element.clientWidth < element.scrollWidth - 4,
    );
    if (chosen.current !== null) return;
    const view = trackBox();
    if (!view) return;
    const year =
      chartStart +
      ((view.left + 48 - view.track.left) / view.track.width) *
        (chartEnd - chartStart);
    setActiveYear(
      Math.min(Math.max(Math.floor(year), gridYears[0]), gridYears.at(-1)!),
    );
  };

  // Brings a year to the left of the visible part of the chart
  const showYear = (year: number) => {
    const view = trackBox();
    if (!view) return;
    chosen.current = year;
    setActiveYear(year);
    const yearX = view.track.left + (share(year) / 100) * view.track.width;
    view.element.scrollBy({
      left: yearX - view.left - 24,
      behavior: behavior(),
    });
  };

  // Today about two thirds of the way across
  const showToday = (smooth: boolean) => {
    chosen.current = null;
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
    // Only reads refs, so the first copy of the function is fine
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="timeline-chart-wrap">
      <div className="timeline-chart-controls">
        <div className="timeline-chart-years">
          {!fit &&
            gridYears.map((year) => (
              <button
                key={year}
                className={`timeline-chart-button ${year === activeYear ? "is-active" : ""}`}
                aria-current={year === activeYear ? "true" : undefined}
                aria-label={`Gå til ${year}`}
                onClick={() => showYear(year)}
              >
                {year}
              </button>
            ))}
        </div>
        <div className="timeline-chart-actions">
          {!fit && (
            <button
              className="timeline-chart-button"
              onClick={() => showToday(true)}
            >
              Til i dag
            </button>
          )}
          <button
            className="timeline-chart-button"
            aria-pressed={fit}
            onClick={() => setFit((value) => !value)}
          >
            {fit ? "Zoom inn" : "Vis alt"}
          </button>
        </div>
      </div>
      <div
        className={`timeline-chart-frame ${canLeft ? "has-left" : ""} ${canRight ? "has-right" : ""}`}
      >
        <div
          ref={scroller}
          className={`timeline-chart ${fit ? "is-fit" : ""}`}
          onScroll={updateEdges}
          onWheel={() => (chosen.current = null)}
          onTouchStart={() => (chosen.current = null)}
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
