import type { MetaFunction } from "@remix-run/node";
import Button from "~/components/general/Button";
import { Link } from "@remix-run/react";
import StandaloneParagraph from "~/components/project-sections/StandaloneParagraph";
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
        <StandaloneParagraph
          textSection={
            <div className="text-section">
              <h1 className="heading-large heading-normal-color">Hei!</h1>
              <p className="text-large">
                Jeg er UX-designer og masterstudent i medie- og
                interaksjonsdesign ved Universitetet i Bergen. Det som drar meg
                mot UX er muligheten til å være med på å skape digitale
                løsninger som er enklere å bruke, og som gjør teknologi mer
                tilgjengelig og inkluderende for alle.
              </p>
              {/* <p>
                Jeg trives best når jeg får jobbe med nye utfordringer, og jeg
                legger stor vekt på å forstå hva folk virkelig trenger før jeg
                lager løsninger. Målet mitt er alltid å skape design som
                fungerer godt og gir en god brukeropplevelse.
              </p> */}
            </div>
          }
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10rem",
          }}
        >
          <h2 className="heading">Mitt siste prosjekt</h2>
          {/* <div style={{ marginTop: "4rem", marginBottom: "6rem" }}> */}
          <Link to="/portefølje">
            <Button label="Gå til portefølje" />
          </Link>
          {/* </div> */}
        </div>

        <ProjectCard
          imageSrc="/barnebank/thumbnail.webp"
          date="Sommeren 2025"
          platformInfo="App"
          title="Sparebanken Norge"
          description="Summer internship der vi designet deres nye bankløsning for barn."
          link="/barnebank"
          imageZoom="desktop"
          hero
        />
      </main>
    </div>
  );
}
