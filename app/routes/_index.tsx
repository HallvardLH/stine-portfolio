import type { MetaFunction } from "@remix-run/node";
import Button from "~/components/general/Button";
import { Link } from "@remix-run/react";
import ProjectCard from "~/components/card/ProjectCard";

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
        <div className="landing-project-header">
          <h2 className="heading">Mitt siste prosjekt</h2>
          <Link to="/portefølje">
            <Button label="Se porteføljen min" />
          </Link>
        </div>

        <ProjectCard
          thumbnail={{
            foregroundSrc: "/finn-eiendom/thumbnail-fg.webp",
            backgroundSrc: "/finn-eiendom/thumbnail-bg.webp",
          }}
          date="Sommeren 2026"
          platformInfo="Web"
          title="FINN Eiendom"
          description="Summer internship i FINN Eiendom med fokus på å forenkle påmeldingen til boligvisninger for meglere og boligkjøpere."
          link="/finn-eiendom"
          tags={["Summer internship", "FINN Eiendom"]}
          hero
        />
      </main>
    </div>
  );
}
