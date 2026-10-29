import type { MetaFunction } from "@remix-run/node";
import { useEffect, useRef, useState } from "react";
import "~/components/case/Case.css";
import "~/components/timeline/Timeline.css";
import TimelineItem from "~/components/timeline/TimelineItem";
import TimelineLightbox from "~/components/timeline/TimelineLightbox";
import TimelineOverview from "~/components/timeline/TimelineOverview";
import {
  categories,
  timeline,
  years,
  type TimelineCategory,
  type TimelineEntry,
} from "~/data/timeline";

export const meta: MetaFunction = () => {
  return [
    { title: "Tidslinje - Stine Knutsen" },
    {
      name: "description",
      content:
        "Reisen min så langt: studier, jobber og frivillig arbeid, med bilder fra underveis.",
    },
  ];
};

type Filter = TimelineCategory | "alle";

export default function TimelineRoute() {
  const [filter, setFilter] = useState<Filter>("alle");
  const [highlighted, setHighlighted] = useState<string | null>(null);
  const [open, setOpen] = useState<{
    entry: TimelineEntry;
    index: number;
  } | null>(null);
  // An entry to scroll to once the list has been shown in full again
  const pending = useRef<string | null>(null);

  const visible = timeline.filter(
    (entry) => filter === "alle" || entry.category === filter,
  );
  const count = (category: Filter) =>
    category === "alle"
      ? timeline.length
      : timeline.filter((entry) => entry.category === category).length;

  const scrollToEntry = (id: string) => {
    const element = document.getElementById(`erfaring-${id}`);
    if (!element) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    element.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "center",
    });
    setHighlighted(id);
  };

  const jumpTo = (id: string) => {
    const entry = timeline.find((item) => item.id === id);
    if (entry && filter !== "alle" && entry.category !== filter) {
      pending.current = id;
      setFilter("alle");
    } else {
      scrollToEntry(id);
    }
  };

  useEffect(() => {
    if (pending.current) {
      scrollToEntry(pending.current);
      pending.current = null;
    }
  }, [filter]);

  // The highlight fades by itself
  useEffect(() => {
    if (!highlighted) return;
    const timer = setTimeout(() => setHighlighted(null), 2200);
    return () => clearTimeout(timer);
  }, [highlighted]);

  return (
    <main className="case timeline">
      <section
        id="intro"
        className="case-section timeline-intro"
        data-surface="light"
      >
        <div className="case-container">
          <h1 className="case-title-heading">Tidslinje</h1>
          <p className="timeline-lead">
            Her er reisen min så langt: studier, jobber og frivillig arbeid.
            Trykk på et bilde for å se mer, eller velg en kategori for å se bare
            det du er nysgjerrig på.
          </p>
        </div>
      </section>

      <section className="case-section case-dark" data-surface="dark">
        <div className="case-container">
          <div className="case-row">
            <div className="case-margin">
              <span className="case-margin-number timeline-now-label">
                <span className="timeline-dot" aria-hidden="true" />
                Akkurat nå
              </span>
            </div>
            <div className="case-text">
              <p className="case-statement">
                Jeg holder på med masterprosjektet, er læreassistent i MIX301 og
                eksperimenterer litt med Claude.
              </p>
              <ul className="timeline-now-tags">
                <li>Master</li>
                <li>Læreassistent MIX301</li>
                <li>Frilans</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="oversikt" className="case-section timeline-overview">
        <div className="case-container">
          <div className="case-row timeline-overview-head">
            <div className="case-margin">
              <h2 className="case-margin-title">Oversikt</h2>
              <p className="timeline-help">
                Hele reisen på ett blikk. Trykk på en strek for å hoppe til den.
              </p>
            </div>
          </div>
          <TimelineOverview filter={filter} onSelect={jumpTo} />
          <nav className="timeline-year-jump" aria-label="Hopp til år">
            <span>Hopp til</span>
            {years.map((year) => (
              <a key={year} href={`#ar-${year}`}>
                {year}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section id="erfaringer" className="case-section timeline-list">
        <div className="case-container">
          <div className="timeline-filter">
            <div
              className="timeline-chips"
              role="group"
              aria-label="Filtrer etter kategori"
            >
              {[{ id: "alle" as const, label: "Alle" }, ...categories].map(
                (category) => (
                  <button
                    key={category.id}
                    className="timeline-chip"
                    aria-pressed={filter === category.id}
                    onClick={() => setFilter(category.id)}
                  >
                    {category.label}
                    <span>{count(category.id)}</span>
                  </button>
                ),
              )}
            </div>
            <p className="timeline-filter-status" aria-live="polite">
              {filter === "alle" ? (
                `${timeline.length} erfaringer · nyeste først`
              ) : (
                <>
                  {visible.length} av {timeline.length} erfaringer vises ·{" "}
                  <button onClick={() => setFilter("alle")}>
                    Nullstill filter
                  </button>
                </>
              )}
            </p>
          </div>

          <div className="timeline-years">
            {years.map((year) => {
              const entries = visible.filter((entry) => entry.year === year);
              if (entries.length === 0) return null;
              return (
                <div key={year} id={`ar-${year}`} className="timeline-year">
                  <div className="case-row">
                    <div className="timeline-year-margin">
                      <h2 className="timeline-year-title">{year}</h2>
                      <p>
                        {entries.length}{" "}
                        {entries.length === 1 ? "erfaring" : "erfaringer"}
                      </p>
                    </div>
                    <ul className="timeline-items">
                      {entries.map((entry) => (
                        <TimelineItem
                          key={entry.id}
                          entry={entry}
                          highlighted={highlighted === entry.id}
                          onOpenPhotos={(item) =>
                            setOpen({ entry: item, index: 0 })
                          }
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {open && open.entry.photos && (
        <TimelineLightbox
          title={`${open.entry.title} · ${open.entry.org.split(" · ")[0]}`}
          photos={open.entry.photos}
          index={open.index}
          onIndex={(index) => setOpen({ ...open, index })}
          onClose={() => setOpen(null)}
        />
      )}
    </main>
  );
}
