import "./Case.css";
import ProjectCard from "~/components/card/ProjectCard";
import { allProjects } from "~/data/projects";

interface RelatedProject {
  link: string;
  /** Not used any more, the card is built from the project data */
  title?: string;
  thumbnail?: unknown;
}

interface RelatedProjectsProps {
  projects: RelatedProject[];
}

// Other projects at the end of a case, as the same cards the home page uses
export default function RelatedProjects({ projects }: RelatedProjectsProps) {
  const related = projects
    .map(({ link }) => allProjects.find((project) => project.link === link))
    .filter((project) => project !== undefined);

  return (
    <section
      className="case-section case-related"
      data-surface="light"
      aria-labelledby="andre-prosjekter"
    >
      <div className="case-container">
        <div className="case-row">
          <h2 id="andre-prosjekter" className="case-related-title">
            Andre lignende prosjekter
          </h2>
          <ul className="case-related-grid">
            {related.map((project) => (
              <li key={project.link}>
                <ProjectCard {...project} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
