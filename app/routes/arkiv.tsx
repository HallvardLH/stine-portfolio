import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import "~/components/case/Case.css";
import "~/components/archive/Archive.css";
import { archive } from "~/data/archive";

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
          {archive.length === 0 ? (
            <p className="archive-empty">Arkivet fylles opp etter hvert.</p>
          ) : (
            <ul className="archive-items">
              {archive.map((item) => (
                <li key={item.id} className="archive-item">
                  <div className="case-row">
                    <p className="archive-item-year">{item.year}</p>
                    <div className="case-text">
                      <h2 className="archive-item-title">{item.title}</h2>
                      <p className="archive-item-description">
                        {item.description}
                      </p>
                      {item.link && (
                        <Link to={item.link.to} className="case-button">
                          {item.link.label}
                          <img src="/icons/arrow.svg" alt="" />
                        </Link>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}
