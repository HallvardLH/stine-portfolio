import type { MetaFunction } from "@remix-run/node";
import Button from "~/components/general/Button";
import { Link } from "@remix-run/react";
import StandaloneParagraph from "~/components/project-sections/StandaloneParagraph";

export const meta: MetaFunction = () => {
  return [
    { title: "Stine Knutsen" },
    { name: "description", content: "Hjemmesiden for Stine Knutsens portefølje." },
  ];
};

export default function Index() {
  return (
    <div className="gutter top-margin">
      <main>

        <StandaloneParagraph
          textSection={
            <div className="text-section">
              <h1 className="heading heading-normal-color">
                Hei!
              </h1>
              <p className="text-large">
                Jeg heter Stine Knutsen og jeg elsker å skape design som gjør det enklere å navigere, og morsommere å bruke.
              </p>
              <p>
                Jeg er en UX-designer med stor lidenskap for å skape løsninger som både er brukervennlige og estetisk tiltalende. Gjennom bachelorgraden min i interaksjonsdesign har jeg fått erfaring med sentrale deler av UX-prosessen, som brukerforskning, prototyping og testing. Dette har gitt meg en god forståelse for hvordan design kan redusere frustrasjon og forbedre digitale opplevelser.
              </p>
              <div style={{ marginTop: "4rem", marginBottom: "6rem" }}>
                <Link to="/prosjektbibliotek">
                  <Button><p className="button-label">{"Åpne prosjektbibliotek"}</p></Button>
                </Link>
              </div>
            </div>
          }
        />

      </main>
    </div>
  );
}
