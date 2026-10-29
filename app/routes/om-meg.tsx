import type { MetaFunction } from "@remix-run/node";
import "~/components/case/Case.css";
import ImageWithLoader from "~/components/general/ImageWithLoader";
import CaseBreak from "~/components/case/CaseBreak";
import { Chapter as CaseChapter } from "~/components/case/Chapter";
import { Figure, FigurePair } from "~/components/case/Figure";

export const meta: MetaFunction = () => {
  return [
    { title: "Om meg - Stine Knutsen" },
    {
      name: "description",
      content:
        "Jeg er en UX-designer og masterstudent i medie- og interaksjonsdesign ved Universitetet i Bergen.",
    },
  ];
};

export default function AboutRoute() {
  return (
    <main className="case about">
      <section
        id="intro"
        className="case-section about-intro"
        data-surface="light"
      >
        <div className="case-container about-hero">
          <div className="about-text">
            <h1 className="case-title-heading">Om meg</h1>
            <p className="about-lead">
              Jeg er en UX-designer og masterstudent i medie- og
              interaksjonsdesign ved Universitetet i Bergen.
            </p>
            <p className="about-body">
              Jeg har alltid likt å lage ting og jobbe visuelt, og det var noe
              av det som først trakk meg mot design. Etter hvert ble jeg
              spesielt interessert i hvordan design kan gjøre teknologi enklere
              å forstå og bruke.
            </p>
          </div>
          <figure className="about-portrait">
            <ImageWithLoader
              src="/om-meg/headshot.webp"
              alt="Portrett av Stine Knutsen."
              classes="about-portrait-image"
            />
          </figure>
        </div>
      </section>

      <CaseBreak eyebrow="Det jeg liker best">
        Punktet der man begynner å se muligheter i det man har lært gjennom
        brukerinnsikt.
      </CaseBreak>

      <CaseChapter
        id="veien-hit"
        number="01"
        title="Veien hit"
      >
        <p>
          Jeg har prøvd litt av hvert: strikking, maling og grafisk design. Da
          jeg begynte på medie- og interaksjonsdesign ved UiB, fant jeg ut at
          det jeg likte best var å kombinere det kreative med teknologi og
          mennesker. Både på bacheloren og nå på masteren har jeg jobbet med
          visuelt design, interaksjonsdesign, innsiktsarbeid, brukertesting og
          konseptutvikling.
        </p>
        <p>
          Jeg liker å teste ut ideer og se hvordan det jeg lærer om brukerne
          endrer løsningen underveis.
        </p>
      </CaseChapter>

      <CaseChapter
        id="bilder"
        number="02"
        title="Bilder"
        surface="soft"
        wide={
          <>
            <FigurePair
              first={{
                src: "/om-meg/finn-presentasjon.webp",
                caption: "Presentasjonen av sommerprosjektet hos FINN.",
                aspectRatio: "556 / 370",
              }}
              second={{
                src: "/om-meg/finn-teamet.webp",
                caption: "Sommerteamet utenfor kontoret hos FINN!",
                aspectRatio: "556 / 370",
              }}
            />
            <FigurePair
              first={{
                src: "/om-meg/innovasjonsdagen.webp",
                alt: "Stine og Tuva åpner arrangementet.",
                caption:
                  "Våren 2026 hadde jeg ansvaret for å arrangere instituttets innovasjonsdag.",
                aspectRatio: "556 / 370",
              }}
              second={{
                src: "/om-meg/innovasjonsdagen-publikum.webp",
                alt: "Publikum og jury ser på pitching.",
                caption:
                  "Med rekordmange publikumere, pitcher og deltakende emner ble dagen en stor suksess!",
                aspectRatio: "556 / 370",
              }}
            />
            <Figure
              src="/om-meg/spn.webp"
              alt="Studentteamet hos Sparebanken Norge."
              caption="Studentteamet hos Sparebanken Norge sommeren 2025 under presentasjonen av den nye Barnebanken."
              aspectRatio="1168 / 424"
            />
            <FigurePair
              first={{
                src: "/om-meg/kickoff.webp",
                alt: "Stine og Pernille på pitchekonkurranse hos GründerCampus.",
                caption: "Pitchekonkurranse hos GründerCampus - som vi vant!",
                aspectRatio: "556 / 370",
              }}
              second={{
                src: "/om-meg/innovasjon.webp",
                alt: "Stine har ordet på Innovasjonsuken Opp",
                caption:
                  "Innovasjonsuken Opp sitt Kickoff der vi fikk presentere OurSpace.",
                aspectRatio: "556 / 370",
              }}
            />
            <Figure
              src="/om-meg/grundercampus.webp"
              alt="Bachelorgruppen med diplom, sammen med juryen."
              caption="Innovasjonsdagen 2025 - gruppen vant MVP-prisen for beste bachelorprosjekt!"
              aspectRatio="1168 / 424"
            />
            <FigurePair
              first={{
                src: "/om-meg/black-cat.webp",
                alt: "A painting that Stine Knutsen has made, displaying abstract people and animnals in bright colors.",
                caption:
                  "Eksamensoppgaven min i kunst og visuelle virkemidler fra videregående!",
                aspectRatio: "556 / 451",
              }}
              second={{
                src: "/om-meg/gruppebilde.webp",
                alt: "Stine and her project-group doing a creative exercise while working on the OurSpace design.",
                caption:
                  "Jeg og gruppen min under en kreativ øvelse da vi jobbet med OurSpace, høsten 2023.",
                aspectRatio: "556 / 643",
              }}
            />
          </>
        }
      />
    </main>
  );
}
