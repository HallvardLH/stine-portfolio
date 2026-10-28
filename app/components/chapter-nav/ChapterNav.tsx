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
  /** How far the reader has come, as a fraction of the nav's height */
  progress: number;
  active: number;
}

// Space the fixed navbar takes up, so a chapter never ends up underneath it
const SCROLL_OFFSET = 112;
// The reader is "in" a chapter once its start passes this share of the viewport
const READING_LINE = 0.35;

export default function ChapterNav({ chapters }: ChapterNavProps) {
  const [layout, setLayout] = useState<Layout | null>(null);
  const areaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // The area spans the article text, from where it starts to just before
    // the footer. The nav sticks inside it, so it never leaves that stretch.
    const update = () => {
      const area = areaRef.current;
      if (!area) return;
      const areaRect = area.getBoundingClientRect();
      const areaTop = areaRect.top + window.scrollY;
      const tops = chapters.map(({ id }, i) => {
        const el = document.getElementById(id);
        if (!el || i === 0) return areaTop;
        return el.getBoundingClientRect().top + window.scrollY;
      });
      // The reading line drifts down to the bottom edge as the page runs out,
      // so the nav is completely filled once the reader reaches the end
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const t = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 1;
      const line =
        window.scrollY +
        window.innerHeight * (READING_LINE + (1 - READING_LINE) * t ** 2);
      let active = 0;
      tops.forEach((top, i) => {
        if (top <= line) active = i;
      });
      // Chapters are spaced evenly in the nav, however long they are, and the
      // last one gets the final stretch. So progress is measured chapter by
      // chapter: how far through the current one, plus the ones before it.
      const ends = [...tops.slice(1), areaTop + areaRect.height];
      const through = (line - tops[active]) / (ends[active] - tops[active]);
      const progress =
        line < areaTop ? 0 : (active + Math.min(through, 1)) / chapters.length;
      setLayout({ progress, active });
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
    <div className="chapter-nav-area" ref={areaRef}>
      {layout && (
        <nav className="chapter-nav" aria-label="Kapitler">
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
                  style={{ top: `${(i / chapters.length) * 100}%` }}
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
  );
}
