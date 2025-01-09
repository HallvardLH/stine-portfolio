import type { MetaFunction } from "@remix-run/node";
import Button from "~/components/general/Button";
import Navigation from "~/components/layout/Navigation";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Stine Knutsen" },
    { name: "description", content: "Hjemmesiden for Stine Knutsens portefølje." },
  ];
};

export default function Index() {
  return (
    <div className="gutter">
      <main>
        <div className="text-section">
          <h1 className="heading">
            Hei!
          </h1>
          <p className="text-large">
            Jeg skaper design som gjør det enklere å navigere, og litt morsommere å bruke.
          </p>
          <p>
            Jeg heter Stine Knutsen og er en UX-designer med stor lidenskap for å skape løsninger som både er brukervennlige og estetisk tiltalende. Gjennom bachelorgraden min i interaksjonsdesign har jeg fått erfaring med sentrale deler av UX-prosessen, som brukerforskning, prototyping og testing. Dette har gitt meg en god forståelse for hvordan design kan redusere frustrasjon og forbedre digitale opplevelser.
          </p>
        </div>
      </main>
      {/* <ul>
        <li>
          <h1 className="heading">This is a line of text</h1>
        </li>
        <li>
          <h2 className="text-large">This is a line of text</h2>
        </li>
        <li>
          <h3 className="text-medium">This is a line of text</h3>
        </li>
        <li>
          <p>This is a line of text</p>
        </li>
        <li>
          <p className="small-text">This is a line of text</p>
        </li>
      </ul> */}
      <div style={{ marginTop: "4rem", marginBottom: "6rem" }}>
        <Link to="/prosjektbibliotek">
          <Button>{"Åpne prosjektbibliotek"}</Button>
        </Link>
      </div>

      <Navigation />
    </div>
  );
}
