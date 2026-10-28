import "./ChapterNav.css";
import { useEffect, useRef, useState } from "react";

export interface Chapter {
  /** id of the element where the chapter starts */
  id: string;
  label: string;
}

interface ChapterNavProps {
  chapters: Chapter[];
}

interface Layout {
  /** The kind of background the nav sits over, which sets its colours */
  tone: string;
  /** How far the reader has come, as a fraction of the nav's height */
  progress: number;
  active: number;
}

// Space the fixed navbar takes up, so a chapter never ends up underneath it
const SCROLL_OFFSET = 72;
// Where the last step stops, measured from the top of the last chapter's margin
// (half a line of the chapter number, so the dot sits beside it)
const STOP_OFFSET = 8;
// The reader is "in" a chapter once its start passes this share of the viewport
const READING_LINE = 0.35;

export default function ChapterNav({ chapters }: ChapterNavProps) {
  const [layout, setLayout] = useState<Layout | null>(null);
  const areaRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // The area runs from where the article text starts to the last chapter's
    // heading. The nav sticks inside it, so it stops with its last step beside
    // that heading and scrolls away with the page from there.
    const update = () => {
      const area = areaRef.current;
      if (!area) return;
      const areaTop = area.getBoundingClientRect().top + window.scrollY;
      const tops = chapters.map(({ id }, i) => {
        const el = document.getElementById(id);
        if (!el || i === 0) return areaTop;
        return el.getBoundingClientRect().top + window.scrollY;
      });
      const last = document
        .getElementById(chapters[chapters.length - 1].id)
        ?.querySelector(".case-margin");
      if (last) {
        const stop =
          last.getBoundingClientRect().top + window.scrollY + STOP_OFFSET;
        area.style.height = `${Math.max(stop - areaTop, 0)}px`;
      }
      const line = window.scrollY + window.innerHeight * READING_LINE;
      let active = 0;
      tops.forEach((top, i) => {
        if (top <= line) active = i;
      });
      // Steps are spaced evenly in the nav, however long the chapters are, and
      // the last step is the end of the bar. So progress is measured chapter by
      // chapter: how far through the current one, plus the ones before it.
      const lastIndex = chapters.length - 1;
      const through =
        active < lastIndex
          ? (line - tops[active]) / (tops[active + 1] - tops[active])
          : 1;
      const progress =
        line < areaTop ? 0 : (active + Math.min(through, 1)) / lastIndex;
      // Chapters sit on different backgrounds, so the nav takes its colours
      // from whichever one is behind it right now
      const navRect = navRef.current?.getBoundingClientRect();
      const probe = navRect
        ? document.elementsFromPoint(
            navRect.left + 8,
            navRect.top + navRect.height / 2,
          )
        : [];
      const surface = probe
        .map((el) => el.closest<HTMLElement>("[data-surface]"))
        .find(Boolean);
      setLayout({
        tone: surface?.dataset.surface ?? "light",
        progress,
        active,
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    // Images and fonts change the page height after the first render
    const observer = new ResizeObserver(update);
    observer.observe(document.body);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      observer.disconnect();
    };
  }, [chapters]);

  const goTo = (event: React.MouseEvent, index: number) => {
    event.preventDefault();
    const el = document.getElementById(chapters[index].id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <>
      <div className="chapter-nav-area" ref={areaRef}>
        {layout && (
          <nav
            className="chapter-nav"
            aria-label="Kapitler"
            data-tone={layout.tone}
            ref={navRef}
          >
            <div className="chapter-nav-track" aria-hidden="true">
              <div
                className="chapter-nav-fill"
                style={{ height: `${layout.progress * 100}%` }}
              />
            </div>
            <ol className="chapter-nav-list">
              {chapters.map((chapter, i) => {
                const state =
                  i < layout.active
                    ? "done"
                    : i === layout.active
                      ? "active"
                      : "todo";
                return (
                  <li
                    key={chapter.id}
                    className={`chapter-nav-item chapter-nav-${state}`}
                    style={{ top: `${(i / (chapters.length - 1)) * 100}%` }}
                  >
                    <a
                      href={`#${chapter.id}`}
                      className="chapter-nav-link"
                      aria-current={state === "active" ? "step" : undefined}
                      aria-label={chapter.label}
                      title={chapter.label}
                      onClick={(event) => goTo(event, i)}
                    >
                      <span className="chapter-nav-dot" />
                      <span className="chapter-nav-label">{chapter.label}</span>
                    </a>
                  </li>
                );
              })}
            </ol>
          </nav>
        )}
      </div>
    </>
  );
}
