import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useMemo, useState } from "react";
import "~/components/case/Case.css";
import ChapterNav, { type Chapter } from "~/components/chapter-nav/ChapterNav";
import ProjectCard from "~/components/card/ProjectCard";
import "~/components/archive/Archive.css";
import ArchiveTeaser from "~/components/archive/ArchiveTeaser";
import ThumbnailImage from "~/components/card/ThumbnailImage";
import {
  latestProject,
  projectCategories,
  projectsByYear,
  type ProjectCategory,
} from "~/data/projects";

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
  const [filter, setFilter] = useState<ProjectCategory | "alle">("alle");

  // Only the years that have something left under the filter
  const years = useMemo(
    () =>
      projectsByYear
        .map(({ year, projects }) => ({
          year,
          projects: projects.filter(
            (project) => filter === "alle" || project.category === filter,
          ),
        }))
        .filter(({ projects }) => projects.length > 0),
    [filter],
  );
  const chapters = useMemo<Chapter[]>(
    () => [
      { id: "prosjekter", label: "Prosjekter" },
      ...years.map(({ year }) => ({ id: `ar-${year}`, label: year })),
    ],
    [years],
  );

  return (
    <main className="case home">
      <section
        id="intro"
        className="case-section home-intro"
        data-surface="light"
      >
        <div className="case-container">
          <div className="home-intro-text">
            <h1 className="case-title-heading">Hei!</h1>
            <p className="home-lead">
              Jeg er en UX-designer og masterstudent på medie- og
              interaksjonsdesign ved Universitetet i Bergen. UX for meg er
              muligheten til å skape digitale løsninger som er enklere å bruke,
              og som gjør teknologi mer tilgjengelig og inkluderende for alle.
            </p>
          </div>
        </div>
      </section>

      <section
        id="siste-prosjekt"
        className="case-section case-dark home-latest"
        data-surface="dark"
      >
        <div className="case-container">
          <div className="case-row">
            <div className="case-margin">
              <span className="case-margin-number">
                Prosjektet jeg er mest stolt av
              </span>
            </div>
            <div className="case-text home-latest-text">
              <ul className="home-tags">
                {latestProject.tags.map((tag) => (
                  <li key={tag} className="home-tag">
                    {tag}
                  </li>
                ))}
              </ul>
              <h2 className="home-latest-title">{latestProject.title}</h2>
              <p className="home-latest-description">
                {latestProject.description}
              </p>
              <p className="home-latest-meta">
                {latestProject.date} · {latestProject.platformInfo}
              </p>
              <Link to={latestProject.link} className="home-button">
                Les om prosjektet
                <img src="/icons/arrow.svg" alt="" />
              </Link>
            </div>
          </div>
          <Link
            to={latestProject.link}
            className="home-latest-image"
            aria-label={latestProject.title}
          >
            <ThumbnailImage thumbnail={latestProject.thumbnail} />
          </Link>
        </div>
      </section>

      <div className="case-chapters">
        <ChapterNav chapters={chapters} />

        <section
          id="prosjekter"
          className="case-section home-projects"
          data-surface="light"
        >
          <div className="case-container">
            <div className="case-row">
              <div className="case-margin">
                <span className="case-margin-number">Prosjekter</span>
              </div>
              <div className="case-text">
                <h2 className="home-projects-title">Prosjekter</h2>
                <p className="case-lead">
                  Her er noen av prosjektene jeg har jobbet med og er mest stolt
                  av. Trykk på et av dem for å lese mer!
                </p>
                <div
                  className="home-filters"
                  role="group"
                  aria-label="Filtrer prosjekter"
                >
                  {[
                    { id: "alle" as const, label: "Alle" },
                    ...projectCategories,
                  ].map((category) => (
                    <button
                      key={category.id}
                      className="home-chip"
                      aria-pressed={filter === category.id}
                      onClick={() => setFilter(category.id)}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="home-years">
              {years.map(({ year, projects }) => (
                <div key={year} id={`ar-${year}`} className="home-year">
                  <div className="case-row">
                    <h3 className="home-year-title">{year}</h3>
                    <div className="home-cards">
                      {projects.map((project) => (
                        <ProjectCard key={project.link} {...project} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section
        id="arkiv"
        className="case-section case-soft home-archive"
        data-surface="soft"
      >
        <div className="case-container">
          <div className="case-row">
            <div className="case-margin">
              <span className="case-margin-number">Arkiv</span>
            </div>
            <ArchiveTeaser />
          </div>
        </div>
      </section>
    </main>
  );
}
