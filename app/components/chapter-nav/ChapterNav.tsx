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
  /** Where each chapter starts, as a fraction of the article height */
  markers: number[];
  /** How far the reader has come, as a fraction of the article height */
  progress: number;
  active: number;
}

// Space the fixed navbar takes up, so a chapter never ends up underneath it
const SCROLL_OFFSET = 112;
// The reader is "in" a chapter once its start passes this share of the viewport
const READING_LINE = 0.35;

const pad = (n: number) => String(n).padStart(2, "0");

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
      const clamp = (n: number) => Math.min(Math.max(n, 0), 1);
      setLayout({
        markers: tops.map((top) => clamp((top - areaTop) / areaRect.height)),
        progress: clamp((line - areaTop) / areaRect.height),
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
                  style={{ top: `${layout.markers[i] * 100}%` }}
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
                    <span className="chapter-nav-label">
                      {pad(i)}
                      {state === "active" && (
                        <span className="chapter-nav-name">
                          {chapter.label}
                        </span>
                      )}
                    </span>
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
