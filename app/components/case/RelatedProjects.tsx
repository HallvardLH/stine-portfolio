import "./Case.css";
import { useRef } from "react";
import { Link } from "@remix-run/react";
import ThumbnailImage from "../card/ThumbnailImage";
import type { Thumbnail } from "~/data/thumbnails";

interface RelatedProject {
  thumbnail: Thumbnail;
  title: string;
  link: string;
}

interface RelatedProjectsProps {
  projects: RelatedProject[];
}

// A row of other projects at the end of a case, scrolling sideways
export default function RelatedProjects({ projects }: RelatedProjectsProps) {
  const listRef = useRef<HTMLUListElement>(null);

  const scrollNext = () => {
    const list = listRef.current;
    if (!list) return;
    const card = list.firstElementChild as HTMLElement | null;
    list.scrollBy({
      left: (card?.offsetWidth ?? 300) + 40,
      behavior: "smooth",
    });
  };

  return (
    <section className="case-related">
      <h2 className="case-related-heading">Andre lignende prosjekter</h2>
      <div className="case-related-list-wrapper">
        <ul className="case-related-list" ref={listRef}>
          {projects.map((project) => (
            <li key={project.link} className="case-related-item">
              <Link to={project.link} className="case-related-link">
                <ThumbnailImage thumbnail={project.thumbnail} />
                <div className="case-related-footer">
                  <p className="case-related-title">{project.title}</p>
                  <span className="case-related-cta" aria-hidden="true">
                    Les case
                    <img src="/icons/arrow.svg" alt="" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <button
          className="case-related-next"
          onClick={scrollNext}
          aria-label="Se flere prosjekter"
        >
          <img src="/icons/arrow.svg" alt="" className="icon" />
        </button>
      </div>
    </section>
  );
}
