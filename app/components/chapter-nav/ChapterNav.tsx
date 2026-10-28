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
  /** How far the reader has come between the first and the last step, 0 to 1 */
  progress: number;
  /** How far through the line after the last step, 0 to 1 */
  tail: number;
  /** Pixels at the lower end of the nav that are cut off */
  clip: number;
  /** Whether the reader has reached the start of the article text */
  started: boolean;
  active: number;
}

// Space the fixed navbar takes up, so a chapter never ends up underneath it
const SCROLL_OFFSET = 72;
// The reader is "in" a chapter once its start passes this share of the viewport
const READING_LINE = 0.35;

export default function ChapterNav({ chapters }: ChapterNavProps) {
  const [layout, setLayout] = useState<Layout | null>(null);
  const areaRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // The area runs from where the article text starts to a little past the end
    // of the last chapter, so the nav stays where it is on the screen through
    // that whole chapter. Once the chapter ends, the nav is cut off at its
    // edge instead of following the screen over what comes after.
    const update = () => {
      const area = areaRef.current;
      if (!area) return;
      const areaTop = area.getBoundingClientRect().top + window.scrollY;
      const tops = chapters.map(({ id }, i) => {
        const el = document.getElementById(id);
        if (!el || i === 0) return areaTop;
        return el.getBoundingClientRect().top + window.scrollY;
      });
      const last = document.getElementById(chapters[chapters.length - 1].id);
      const nav = navRef.current;
      const navHeight = nav?.offsetHeight ?? window.innerHeight / 2;
      const navTop = nav ? parseFloat(getComputedStyle(nav).top) || 0 : 0;
      let areaEnd = areaTop;
      if (last) {
        areaEnd = last.getBoundingClientRect().bottom + window.scrollY;
        area.style.height = `${Math.max(areaEnd - areaTop + navHeight, 0)}px`;
      }
      const line = window.scrollY + window.innerHeight * READING_LINE;
      let active = 0;
      tops.forEach((top, i) => {
        if (top <= line) active = i;
      });
      // Steps are spaced evenly in the nav, however long the chapters are, and
      // the last step is where the last chapter starts. So progress is measured
      // chapter by chapter: how far through the current one, plus the ones
      // before it. The extra line after the last step is that chapter itself.
      const lastIndex = chapters.length - 1;
      const through =
        (line - tops[active]) /
        ((active < lastIndex ? tops[active + 1] : areaEnd) - tops[active]);
      const clamped = Math.min(Math.max(through, 0), 1);
      const started = line >= areaTop;
      const progress = !started
        ? 0
        : active < lastIndex
          ? (active + clamped) / lastIndex
          : 1;
      // The line after the last step fills while the last chapter scrolls by,
      // and is full when the nav comes to rest at the end of that chapter
      const tailStart = tops[lastIndex] - window.innerHeight * READING_LINE;
      const tailEnd = areaEnd - (navTop + navHeight);
      const tail =
        started && active === lastIndex
          ? Math.min(
              Math.max(
                (window.scrollY - tailStart) / Math.max(tailEnd - tailStart, 1),
                0,
              ),
              1,
            )
          : 0;
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
      // How much of the nav's lower end lies past the end of the last chapter
      const clip = Math.max(0, navTop + navHeight - (areaEnd - window.scrollY));
      setLayout({
        clip,
        tone: surface?.dataset.surface ?? "light",
        progress,
        tail,
        started,
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
            style={{
              clipPath:
                layout.clip > 0 ? `inset(0 0 ${layout.clip}px 0)` : undefined,
            }}
            ref={navRef}
          >
            <div className="chapter-nav-track" aria-hidden="true">
              <div
                className="chapter-nav-fill"
                style={{
                  height: layout.started
                    ? `calc(var(--chapter-nav-tail) + ${layout.progress} * (100% - 2 * var(--chapter-nav-tail)) + ${layout.tail} * var(--chapter-nav-tail))`
                    : "0",
                }}
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
                    style={{
                      top: `calc(var(--chapter-nav-tail) + ${i / (chapters.length - 1)} * (100% - 2 * var(--chapter-nav-tail)))`,
                    }}
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
