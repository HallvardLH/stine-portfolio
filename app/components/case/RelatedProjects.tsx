import "./Case.css";
import { useRef } from "react";
import { Link } from "@remix-run/react";
import ThumbnailImage from "../card/ThumbnailImage";
import { allProjects, archiveByYear } from "~/data/projects";

interface RelatedProject {
  link: string;
  /** Not used, the card is built from the project data */
  title?: string;
  thumbnail?: unknown;
}

interface RelatedProjectsProps {
  projects: RelatedProject[];
}

const archived = new Set(
  archiveByYear.flatMap(({ projects }) => projects.map(({ link }) => link)),
);

// A row of other projects at the end of a case, scrolling sideways. What is in
// the archive is left out.
export default function RelatedProjects({ projects }: RelatedProjectsProps) {
  const listRef = useRef<HTMLUListElement>(null);

  const related = projects
    .filter(({ link }) => !archived.has(link))
    .map(({ link }) => allProjects.find((project) => project.link === link))
    .filter((project) => project !== undefined);

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
    <section className="case-related" data-surface="light">
      <h2 className="case-related-heading">Andre lignende prosjekter</h2>
      <div className="case-related-list-wrapper">
        <ul className="case-related-list" ref={listRef}>
          {related.map((project) => (
            <li key={project.link} className="case-related-item">
              <Link to={project.link} className="case-related-link">
                <ThumbnailImage thumbnail={project.thumbnail} />
                <div className="case-related-footer">
                  <p className="case-related-title">{project.title}</p>
                  <span className="case-related-cta" aria-hidden="true">
                    Les om prosjektet
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
