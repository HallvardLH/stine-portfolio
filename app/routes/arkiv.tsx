import type { MetaFunction } from "@remix-run/node";
import "~/components/case/Case.css";
import "~/components/archive/Archive.css";
import ProjectCard from "~/components/card/ProjectCard";
import { archiveByYear } from "~/data/projects";

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
          <h1 className="case-title-heading">Arkiv</h1>
          <p className="archive-lead">
            Prosjekter som har hjulpet meg komme dit jeg er i dag.
          </p>
        </div>
      </section>

      <section className="case-section archive-list" data-surface="light">
        <div className="case-container">
          {archiveByYear.map(({ year, projects }) => (
            <div key={year} className="home-year">
              <div className="case-row">
                <h2 className="home-year-title">{year}</h2>
                <div className="home-cards">
                  {projects.map((project) => (
                    <ProjectCard key={project.link} {...project} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
