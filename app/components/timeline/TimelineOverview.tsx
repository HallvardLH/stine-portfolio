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
  return `${entry.title} · ${entry.org.split(" · ")[0]}`;
}

// The whole journey on one screen: a bar per experience on a shared time axis.
// A bar takes you to the entry in the list.
export default function TimelineOverview({
  filter,
  onSelect,
}: TimelineOverviewProps) {
  const today = Math.min(currentYear(), chartEnd);
  const featured = timeline.filter((entry) => entry.featured);
  // The highlighted experiences stay in full colour when their kind is chosen
  const featuredShown = filter === "alle" || filter === "sommer";

  return (
    <div
      className="timeline-chart"
      role="group"
      aria-label="Oversikt over erfaringene mine, fra 2019 til nå"
    >
      <div className="timeline-chart-featured" aria-hidden="true">
        {featured.map((entry) => {
          const end = entry.end ?? today;
          return (
            <span
              key={entry.id}
              className={`timeline-chart-name ${featuredShown ? "" : "is-dim"}`}
              style={
                entry.labelSide === "end"
                  ? { right: `${100 - share(end)}%` }
                  : { left: `${share(entry.start)}%` }
              }
            >
              {entry.barLabel}
            </span>
          );
        })}
      </div>

      <div className="timeline-chart-axis" aria-hidden="true">
        {gridYears.map((year) => (
          <span key={year} style={{ left: `${share(year)}%` }}>
            {year}
          </span>
        ))}
      </div>

      <div className="timeline-chart-lanes">
        <div className="timeline-chart-grid" aria-hidden="true">
          {featured.map((entry) => (
            <span
              key={entry.id}
              className={`timeline-chart-band ${featuredShown ? "" : "is-dim"}`}
              style={{
                left: `${share(entry.start)}%`,
                width: `${share(entry.end ?? today) - share(entry.start)}%`,
              }}
            />
          ))}
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
          <div className="timeline-lane" key={index}>
            <span className="timeline-lane-label">{lane.label}</span>
            <div className="timeline-track">
              {timeline
                .filter((entry) => entry.lane === index)
                .map((entry) => {
                  const end = entry.end ?? today;
                  const left = share(entry.start);
                  const width = Math.max(share(end) - left, 0.9);
                  const planned = entry.plannedEnd
                    ? share(entry.plannedEnd) - left - width
                    : 0;
                  const dimmed = filter !== "alle" && entry.category !== filter;
                  return (
                    <span
                      key={entry.id}
                      className="timeline-bar-wrap"
                      style={{ left: `${left}%`, width: `${width + planned}%` }}
                    >
                      <a
                        href={`#erfaring-${entry.id}`}
                        className={`timeline-bar timeline-bar-${entry.category} ${dimmed ? "is-dim" : ""}`}
                        style={{
                          width: `${(width / (width + planned)) * 100}%`,
                        }}
                        aria-label={`${entry.title}, ${entry.org}, ${entry.dateLabel}`}
                        onClick={(event) => {
                          event.preventDefault();
                          onSelect(entry.id);
                        }}
                      >
                        {entry.barLabel && !entry.featured && (
                          <span className="timeline-bar-label">
                            {entry.barLabel}
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
                      {planned > 0 && (
                        <span
                          className="timeline-bar-planned"
                          style={{
                            width: `${(planned / (width + planned)) * 100}%`,
                          }}
                          aria-hidden="true"
                        />
                      )}
                    </span>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
