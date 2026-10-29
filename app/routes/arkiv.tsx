import type { MetaFunction } from "@remix-run/node";
import "~/components/case/Case.css";
import "~/components/archive/Archive.css";
import { Link } from "@remix-run/react";
import ThumbnailImage from "~/components/card/ThumbnailImage";
import Button from "~/components/general/Button";
import { archiveByYear, projectStatusLabels } from "~/data/projects";

export const meta: MetaFunction = () => {
  return [
    { title: "Arkiv - Stine Knutsen" },
    {
      name: "description",
      content: "Prosjekter som har hjulpet meg komme dit jeg er i dag.",
    },
  ];
};

export default function ArchiveRoute() {
  return (
    <main className="case archive">
      <section
        id="intro"
        className="case-section archive-intro"
        data-surface="light"
      >
        <div className="case-container">
          <Link to="/#arkiv" className="archive-back">
            <Button label="Tilbake" arrowDirection="left" />
          </Link>
          <h1 className="case-title-heading">Arkiv</h1>
          <p className="archive-lead">
            Prosjekter som har hjulpet meg komme dit jeg er i dag.
          </p>
        </div>
      </section>

      <section className="case-section archive-list" data-surface="light">
        <div className="case-container">
          {archiveByYear.flatMap(({ year, projects }) =>
            projects.map((project) => (
              <article key={project.link} className="archive-feature">
                <div className="case-row">
                  <div className="archive-feature-margin">
                    <h2 className="archive-feature-year">{year}</h2>
                  </div>
                  <div className="archive-feature-body">
                    <Link
                      to={project.link}
                      className="archive-feature-image"
                      aria-label={project.title}
                    >
                      <ThumbnailImage thumbnail={project.thumbnail} />
                    </Link>
                    <div className="archive-feature-text">
                      <ul className="home-tags">
                        {projectStatusLabels[project.status] && (
                          <li className={`home-tag home-tag-${project.status}`}>
                            {projectStatusLabels[project.status]}
                          </li>
                        )}
                        {project.tags.map((tag) => (
                          <li key={tag} className="home-tag">
                            {tag}
                          </li>
                        ))}
                      </ul>
                      <h3 className="archive-feature-title">{project.title}</h3>
                      <p className="archive-feature-description">
                        {project.description}
                      </p>
                      <p className="archive-feature-meta">
                        {project.date} · {project.platformInfo}
                      </p>
                      <Link to={project.link} className="case-button">
                        Les om prosjektet
                        <img src="/icons/arrow.svg" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            )),
          )}
        </div>
      </section>
    </main>
  );
}
