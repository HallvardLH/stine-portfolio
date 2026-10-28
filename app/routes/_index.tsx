import type { MetaFunction } from "@remix-run/node";
import ProjectCard from "~/components/card/ProjectCard";
import { latestProject, projectsByYear } from "~/data/projects";

export const meta: MetaFunction = () => {
  return [
    { title: "Stine Knutsen" },
    {
      name: "description",
      content: "Hjemmesiden for Stine Knutsens portefølje.",
    },
  ];
};

export default function Index() {
  return (
    <div className="gutter top-margin">
      <main>
        <div className="text-section text-section-narrow">
          <h1 className="heading-large heading-normal-color">Hei!</h1>
          <p className="text-large">
            Jeg er UX-designer og masterstudent i medie- og interaksjonsdesign
            ved Universitetet i Bergen. Det som drar meg mot UX er muligheten
            til å skape digitale løsninger som er enklere å bruke, og som gjør
            teknologi mer tilgjengelig og inkluderende for alle.
          </p>
        </div>

        <section id="prosjekter" className="landing-projects">
          <div className="text-section text-section-narrow">
            <p className="text-large">
              Her er noen av prosjektene jeg har jobbet med og er mest stolt av.
              Trykk på et av dem for å lese mer!
            </p>
          </div>

          <ProjectCard {...latestProject} hero />

          {projectsByYear.map(({ year, projects }) => (
            <div key={year}>
              <div className="year-divider">
                <h2 className="heading">{year}</h2>
              </div>
              <div className="project-card-container">
                {projects.map((project) => (
                  <ProjectCard key={project.link} {...project} />
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
