import { useEffect, useRef, useState, type ReactNode } from "react";
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

const span = chartEnd - chartStart;
const share = (year: number) => ((year - chartStart) / span) * 100;
const gridYears = Array.from(
  { length: Math.floor(chartEnd) - Math.ceil(chartStart) + 1 },
  (_, i) => Math.ceil(chartStart) + i,
);

// Where the chart is scrolled to, and what that means for the controls
interface View {
  label: string;
  atStart: boolean;
  atEnd: boolean;
  todayVisible: boolean;
}

// The journey on a shared time axis: a bar per experience. The chart is wider
// than the screen and is moved sideways by dragging, scrolling, the arrows or
// a swipe. A bar takes you to the entry in the list.
export default function TimelineOverview({
  filter,
  onSelect,
  filters,
}: TimelineOverviewProps) {
  const today = currentYear();
  const cardRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const positioned = useRef(false);
  const [ready, setReady] = useState(false);
  const [view, setView] = useState<View>({
    label: "",
    atStart: true,
    atEnd: false,
    todayVisible: true,
  });

  // The chart in pixels: how wide a year is, and how many years are in view
  const measure = () => {
    const el = scrollerRef.current;
    if (!el || el.clientWidth === 0) return null;
    const labelWidth =
      el.querySelector<HTMLElement>(".timeline-axis-cover")?.offsetWidth ?? 0;
    const perYear = (el.scrollWidth - labelWidth) / span;
    return {
      el,
      perYear,
      viewWidth: el.clientWidth - labelWidth,
      viewYears: (el.clientWidth - labelWidth) / perYear,
      max: el.scrollWidth - el.clientWidth,
    };
  };

  const update = () => {
    const m = measure();
    if (!m) return;
    const from = chartStart + m.el.scrollLeft / m.perYear;
    const to = from + m.viewYears;
    const next: View = {
      label: `${Math.floor(from)}–${Math.floor(to)}`,
      atStart: m.el.scrollLeft <= 1,
      atEnd: m.el.scrollLeft >= m.max - 1,
      todayVisible: today >= from && today <= to,
    };
    setView((prev) =>
      prev.label === next.label &&
      prev.atStart === next.atStart &&
      prev.atEnd === next.atEnd &&
      prev.todayVisible === next.todayVisible
        ? prev
        : next,
    );
  };

  const scrollTo = (left: number, smooth: boolean) => {
    const m = measure();
    if (!m) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    m.el.scrollTo({
      left: Math.min(Math.max(left, 0), m.max),
      behavior: smooth && !reduced.matches ? "smooth" : "auto",
    });
  };

  // Today a little right of the middle: some of what came before, a little of what is next
  const showToday = (smooth: boolean) => {
    const m = measure();
    if (!m) return;
    scrollTo((today - chartStart - m.viewYears * 0.65) * m.perYear, smooth);
  };

  const pan = (direction: number) => {
    const m = measure();
    if (m) scrollTo(m.el.scrollLeft + direction * m.viewWidth * 0.8, true);
  };

  // It opens on today, and keeps up when the window changes size
  useEffect(() => {
    const place = () => {
      if (!positioned.current && measure()) {
        positioned.current = true;
        showToday(false);
      }
      update();
    };
    place();
    setReady(true);
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Picking a category brings up the stretch of time where it mostly is
  useEffect(() => {
    if (filter === "alle") return;
    const m = measure();
    if (!m) return;
    let best = chartStart;
    let bestYears = -1;
    for (
      let from = chartStart;
      from <= chartEnd - m.viewYears + 1e-9;
      from += 0.1
    ) {
      const to = from + m.viewYears;
      const years = timeline
        .filter((entry) => entry.category === filter)
        .reduce((sum, entry) => {
          const end = entry.end ?? entry.plannedEnd ?? today;
          return (
            sum + Math.max(Math.min(end, to) - Math.max(entry.start, from), 0)
          );
        }, 0);
      if (years >= bestYears) {
        best = from;
        bestYears = years;
      }
    }
    scrollTo((best - chartStart) * m.perYear, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  // Dragging with the mouse moves the chart; a touch screen and the
  // trackpad already scroll it
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let startX = 0;
    let startLeft = 0;
    let down = false;
    let moved = false;

    const onDown = (event: MouseEvent) => {
      if (event.button !== 0) return;
      down = true;
      moved = false;
      startX = event.clientX;
      startLeft = el.scrollLeft;
    };
    const onMove = (event: MouseEvent) => {
      if (!down) return;
      const dx = event.clientX - startX;
      if (Math.abs(dx) > 4) {
        moved = true;
        el.classList.add("is-dragging");
      }
      if (moved) el.scrollLeft = startLeft - dx;
    };
    const onUp = () => {
      down = false;
      el.classList.remove("is-dragging");
    };
    // A drag that ends on a bar should not open it
    const onClick = (event: MouseEvent) => {
      if (!moved) return;
      event.preventDefault();
      event.stopPropagation();
      moved = false;
    };
    const onDragStart = (event: Event) => event.preventDefault();

    el.addEventListener("mousedown", onDown);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    el.addEventListener("click", onClick, true);
    el.addEventListener("dragstart", onDragStart);
    return () => {
      el.removeEventListener("mousedown", onDown);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      el.removeEventListener("click", onClick, true);
      el.removeEventListener("dragstart", onDragStart);
    };
  }, []);

  // The name tooltip opens towards the middle of the chart, so it is not cut off
  const placeTip = (element: HTMLElement) => {
    const card = cardRef.current?.getBoundingClientRect();
    if (!card) return;
    const bar = element.getBoundingClientRect();
    element.dataset.tip =
      bar.left - card.left > card.width / 2 ? "end" : "start";
  };

  return (
    <>
      <div className="timeline-toolbar">{filters}</div>

      <div className="timeline-chart-card" ref={cardRef}>
        <div
          className={`timeline-chart ${ready ? "" : "is-hidden"}`}
          ref={scrollerRef}
          onScroll={update}
          role="group"
          aria-label="Oversikt over erfaringene mine"
        >
          <div
            className="timeline-chart-inner"
            style={{
              minWidth: `calc(var(--timeline-label-width) + ${span} * var(--timeline-year-width))`,
            }}
          >
            <div className="timeline-chart-axis-row" aria-hidden="true">
              <div className="timeline-axis-cover" />
              <div className="timeline-chart-axis">
                {gridYears
                  // A year right next to the today dot gives way to it
                  .filter((year) => Math.abs(year - today) > 0.12)
                  .map((year) => (
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
                />
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
                        const end = entry.end ?? entry.plannedEnd ?? today;
                        const left = share(entry.start);
                        const width = Math.max(share(end) - left, 0.5);
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
                              className={`timeline-bar timeline-bar-${entry.category} ${dimmed ? "is-dim" : ""}`}
                              aria-label={`${entry.title}, ${entry.org}, ${entry.dateLabel}`}
                              onMouseEnter={(event) =>
                                placeTip(event.currentTarget)
                              }
                              onFocus={(event) => placeTip(event.currentTarget)}
                              onClick={(event) => {
                                event.preventDefault();
                                onSelect(entry.id);
                              }}
                            >
                              {entry.barLabel && !lane.notes && (
                                <span className="timeline-bar-label">
                                  {entry.barLabel}
                                </span>
                              )}
                              <span className="timeline-tip" aria-hidden="true">
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
        </div>

        <div className="timeline-chart-footer">
          <div
            className="timeline-steps"
            role="group"
            aria-label="Flytt tidslinjen"
          >
            <button
              className="timeline-step"
              aria-label="Tidligere"
              disabled={view.atStart}
              onClick={() => pan(-1)}
            >
              <Chevron direction="left" />
            </button>
            <span className="timeline-steps-label">{view.label}</span>
            <button
              className="timeline-step"
              aria-label="Senere"
              disabled={view.atEnd}
              onClick={() => pan(1)}
            >
              <Chevron direction="right" />
            </button>
          </div>
          <button
            className="timeline-today-button"
            disabled={view.todayVisible}
            onClick={() => showToday(true)}
          >
            I dag
          </button>
        </div>
      </div>
    </>
  );
}
