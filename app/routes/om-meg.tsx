import type { MetaFunction } from "@remix-run/node";
import ParagraphWithImage from "~/components/project-sections/ParagraphWithImage";
import StandaloneParagraph from "~/components/project-sections/StandaloneParagraph";
import Gallery from "~/components/project-sections/Gallery";

export const meta: MetaFunction = () => {
  return [
    { title: "Om meg - Stine Knutsen" },
    {
      name: "description",
      content:
        "Jeg er UX-designer og masterstudent i medie- og interaksjonsdesign ved Universitetet i Bergen.",
    },
  ];
};

export default function ProjectsLibaryRoute() {
  return (
    <main>
      <div className="gutter project-section top-margin">
        <ParagraphWithImage
          topSection={
            <div
              className="shortened-paragraph"
              style={{ marginBottom: "1rem" }}
            ></div>
          }
          textSection={
            <div
              style={{
                alignSelf: "flex-start",
                display: "flex",
                gap: "2rem",
                flexDirection: "column",
              }}
            >
              <h1 className="heading-large heading-normal-color">Om meg</h1>
              <p className="text-medium">
                Jeg er UX-designer og masterstudent i medie- og
                interaksjonsdesign ved Universitetet i Bergen.
              </p>
              <p>
                Jeg har alltid likt å lage ting og jobbe visuelt, og det var noe
                av det som først trakk meg mot design. Etter hvert ble jeg
                spesielt interessert i hvordan design kan gjøre teknologi
                enklere å forstå og bruke.
              </p>
              <p>
                Jeg har alltid likt å lage ting og jobbe visuelt, og har vært
                innom litt av hvert, fra strikking og maling til grafisk design.
                Da jeg begynte på Medie- og interaksjonsdesign ved UiB, fikk jeg
                kombinert den kreative siden med interessen min for teknologi og
                mennesker. Gjennom bacheloren og nå masteren har jeg jobbet med
                alt fra visuell design og interaksjon til brukerinnsikt,
                brukertesting og konseptutvikling.
              </p>
              <p>
                Det jeg liker best med UX er punktet der man begynner å se
                muligheter i det man har lært gjennom brukerinnsikt. Jeg liker å
                utforske ulike retninger, prøve ut ideer og se hvordan innsikt
                kan endre løsningen underveis.
              </p>
            </div>
          }
          imageSrc="/om-meg/headshot.webp"
          imageText="Bilde av meg!"
          altText="A portrait of Stine Knutsen."
        />

        <Gallery
          images={[
            {
              src: "/om-meg/finn-presentasjon.webp",
              imageText: "Presentasjonen av sommerprosjektet hos FINN.",
              altText: "",
            },
            {
              src: "/om-meg/finn-teamet.webp",
              imageText: "Sommerteamet utenfor kontoret hos FINN!",
              altText: "",
            },
            {
              src: "/om-meg/innovasjonsdagen.webp",
              imageText:
                "Våren 2026 hadde jeg ansvaret for å arrangere instituttets innovasjonsdag.",
              altText: "Stine og Tuva åpner arrangementet.",
            },
            {
              src: "/om-meg/innovasjonsdagen-publikum.webp",
              imageText:
                "Med rekordmange publikumere, pitcher og deltakende emner ble dagen en stor suksess!",
              altText: "Publikum og jury ser på pitching.",
            },
            {
              src: "/om-meg/spn.webp",
              imageText:
                "Studentteamet hos Sparebanken Norge sommeren 2025 under presentasjonen av den nye Barnebanken.",
              altText: "Studentteamet hos Sparebanken Norge.",
              fullwidth: true,
            },
            {
              src: "/om-meg/kickoff.webp",
              imageText: "Pitchekonkurranse hos GründerCampus - som vi vant!",
              altText:
                "Stine og Pernille på pitchekonkurranse hos GründerCampus.",
            },
            {
              src: "/om-meg/innovasjon.webp",
              imageText:
                "Innovasjonsuken Opp sitt Kickoff der vi fikk presentere HourSpace.",
              altText: "Stine har ordet på Innovasjonsuken Opp",
            },
            {
              src: "/om-meg/grundercampus.webp",
              imageText:
                "Innovasjonsdagen 2025 - gruppen vant MVP-prisen for beste bachelorprosjekt!",
              altText: "Bachelorgruppen med diplom, sammen med juryen.",
              fullwidth: true,
            },
            {
              src: "/om-meg/black-cat.webp",
              imageText:
                "Eksamensoppgaven min i kunst og visuelle virkemidler fra videregående!",
              altText:
                "A painting that Stine Knutsen has made, displaying abstract people and animnals in bright colors.",
            },
            {
              src: "/om-meg/gruppebilde.webp",
              imageText:
                "Jeg og gruppen min under en kreativ øvelse da vi jobbet med OurSpace, høsten 2023.",
              altText:
                "Stine and her project-group doing a creative exercise while working on the OurSpace design.",
            },
          ]}
        />
      </div>
    </main>
  );
}
