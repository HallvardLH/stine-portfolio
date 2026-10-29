import type { MetaFunction } from "@remix-run/node";
import { useEffect, useRef, useState } from "react";
import "~/components/case/Case.css";
import "~/components/timeline/Timeline.css";
import TimelineItem from "~/components/timeline/TimelineItem";
import ImageLightbox from "~/components/general/ImageLightbox";
import TimelineOverview from "~/components/timeline/TimelineOverview";
import {
  categories,
  lastYear,
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

  // The filter you picked is brought into view in the row of filters. Only the
  // row moves, never the page.
  useEffect(() => {
    const row = document.querySelector<HTMLElement>(
      ".timeline-filter-sticky .timeline-chips",
    );
    const chip = row?.querySelector<HTMLElement>("[aria-pressed=true]");
    if (!row || !chip) return;
    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    // Not under "Alle", which stays in place at the left
    const left = chip.offsetLeft - 5.5 * rem;
    const right = chip.offsetLeft + chip.offsetWidth - row.clientWidth;
    if (left < row.scrollLeft) row.scrollLeft = Math.max(left, 0);
    else if (right > row.scrollLeft) row.scrollLeft = right;
  }, [filter]);

  // The highlight fades by itself
  useEffect(() => {
    if (!highlighted) return;
    const timer = setTimeout(() => setHighlighted(null), 2200);
    return () => clearTimeout(timer);
  }, [highlighted]);

  // On small screens the filters follow the list, so a pick takes you back to
  // the top of what it left, instead of somewhere in the middle of nothing
  const pick = (next: Filter) => {
    setFilter(next);
    if (!window.matchMedia("(max-width: 699px)").matches) return;
    const top = document
      .querySelector(".timeline-filter")
      ?.getBoundingClientRect().top;
    // Below the menu and the filter bar
    const stuck =
      8.5 * parseFloat(getComputedStyle(document.documentElement).fontSize);
    if (top !== undefined && top < stuck) {
      window.scrollTo({ top: window.scrollY + top - stuck, behavior: "auto" });
    }
  };

  const chips = (
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
            onClick={() => pick(category.id)}
          >
            {category.label}
            <span>{count(category.id)}</span>
          </button>
        ),
      )}
    </div>
  );

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
            Hva jeg har gjort til nå: studier, ulike jobber, internships og
            frivillig arbeid.{" "}
            <span className="timeline-lead-wide">
              Trykk på elementer i tidslinjen eller bla
            </span>
            <span className="timeline-lead-narrow">Bla</span> ned for å se
            hvordan jeg har kommet dit jeg er i dag.
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
                Jeg holder på med masterprosjektet mitt, er læreassistent på
                universitetet og eksperimenterer med Claude.
              </p>
              <ul className="timeline-now-tags">
                {[
                  { id: "master", label: "Master" },
                  { id: "mix301", label: "Læreassistent MIX301" },
                  { id: "freelance", label: "Freelance" },
                ].map((tag) => (
                  <li key={tag.id}>
                    <button
                      className="timeline-now-tag"
                      onClick={() => jumpTo(tag.id)}
                    >
                      {tag.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="oversikt"
        className="case-section case-soft timeline-overview"
        data-surface="soft"
      >
        <div className="case-container">
          <div className="case-row timeline-overview-head">
            <div className="case-margin">
              <h2 className="case-margin-title">Oversikt</h2>
              <p className="timeline-help">
                Dra eller bla på tidslinjen, og trykk på elementer for å lese
                mer.
              </p>
            </div>
          </div>
          <TimelineOverview filter={filter} onSelect={jumpTo} filters={chips} />
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
          {/* Small screens have no chart, so the filters follow the list instead */}
          <div className="timeline-filter-sticky">{chips}</div>
          <div className="timeline-filter">
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
              // What started earlier and was still going on that year
              const alsoActive = visible.filter(
                (entry) =>
                  Number(entry.year) < Number(year) &&
                  lastYear(entry) >= Number(year),
              );
              return (
                <div key={year} id={`ar-${year}`} className="timeline-year">
                  <div className="case-row">
                    <div className="timeline-year-margin">
                      <h2 className="timeline-year-title">{year}</h2>
                      <p>
                        {entries.length}{" "}
                        {entries.length === 1 ? "erfaring" : "erfaringer"}
                      </p>
                      {alsoActive.length > 0 && (
                        <div className="timeline-year-also">
                          <span>Samtidig</span>
                          <ul>
                            {alsoActive.map((entry) => (
                              <li key={entry.id}>
                                <a
                                  href={`#erfaring-${entry.id}`}
                                  onClick={(event) => {
                                    event.preventDefault();
                                    jumpTo(entry.id);
                                  }}
                                >
                                  {entry.barLabel ?? entry.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
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
        <ImageLightbox
          label={`Bilder fra ${open.entry.title}`}
          images={open.entry.photos}
          index={open.index}
          onClose={() => setOpen(null)}
        />
      )}
    </main>
  );
}
