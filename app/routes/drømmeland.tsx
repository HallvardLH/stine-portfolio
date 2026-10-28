import type { MetaFunction } from "@remix-run/node";
import CoverImage from "~/components/cover-image/CoverImage";
import { thumbnails } from "~/data/thumbnails";
import ChapterNav, { type Chapter } from "~/components/chapter-nav/ChapterNav";
import CaseTitle from "~/components/case/CaseTitle";
import CaseBreak from "~/components/case/CaseBreak";
import RelatedProjects from "~/components/case/RelatedProjects";
import { Feature, FeatureGroup } from "~/components/case/Feature";
import { Chapter as CaseChapter } from "~/components/case/Chapter";

const chapters: Chapter[] = [
  { id: "intro", label: "Intro" },
  { id: "bakgrunn", label: "Bakgrunn" },
  { id: "innsikt", label: "Innsikt" },
  { id: "losning", label: "Løsning" },
  { id: "laering", label: "Læring" },
];

export const meta: MetaFunction = () => {
  return [
    { title: "drømmeland - Stine Knutsen" },
    {
      name: "description",
      content:
        "Drømmeland er en læringsapp for barn mellom 7 og 9 år. Appen underviser om bærekraft gjennom virtuelle aktiviteter som resirkulering og havrydding. ",
    },
  ];
};

export default function ProjectsLibaryRoute() {
  return (
    <main className="case">
      <CoverImage thumbnail={thumbnails.dromme} />

      <div className="case-chapters">
        <ChapterNav chapters={chapters} />

        <CaseTitle
          id="intro"
          title="Drømmeland"
          intro="Drømmeland er en læringsapp for barn mellom 7 og 9 år. Appen underviser om bærekraft gjennom virtuelle aktiviteter som resirkulering og havrydding."
          marginTitle="Om prosjektet"
          facts={[
            { label: "Plattform", value: "iPad - app" },
            { label: "Periode", value: "Jan - jun 2023" },
            { label: "Målgruppe", value: "Barn mellom 7 og 9 år" },
          ]}
        />
        <CaseBreak eyebrow="I korte trekk">
          Læring om bærekraft gjennom spill både hjemme og i klasserommet.
        </CaseBreak>

        <CaseChapter
          id="bakgrunn"
          number="01"
          title="Bakgrunn"
          rule
          lead="Hvordan barn kan lære om miljøvern gjennom spill."
        >
          <p>
            Drømmeland er utviklet for å engasjere barn i alderen 7-9 år i
            miljøvern gjennom bærekraftsrelaterte spill. Målet er å skape en
            læringsplattform som kan brukes både hjemme og i skolen, der lærere
            kan dele ut oppgaver og lekser via en egen lærerplattform. Barna kan
            løse bærekraftsutfordringer og tjene poeng, noe som kombinerer
            læring med lek.
          </p>
          <p>
            For å sikre relevans og engasjement ble det gjennomført kvalitative
            undersøkelser, inkludert observasjoner og intervjuer med barn i
            målgruppen.
          </p>
        </CaseChapter>

        <CaseChapter
          id="innsikt"
          number="02"
          title="Samskaping med målgruppen"
          surface="dark"
          lead="Barnas egne tegninger ble utgangspunktet for designet."
        >
          <p>
            Prototypen for Drømmeland ble utformet med barnas perspektiv i
            sentrum. Vi holdt workshops der vi inviterte barn til å bidra med
            ideer til spilluniverset og avatarene. Workshopene inkluderte
            semistrukturerte intervjuer og samskaping, hvor barna deltok i
            tegneoppgaver som «tegn et kult spillunivers» og «tegn din
            drømmeavatar».
          </p>
          <p>
            Disse tegningene inspirerte designet og gjorde prototypen
            målgruppetilpasset. Resultatet er en engasjerende og fargerik
            prototype som reflekterer barnas egne idéer og preferanser.
          </p>
        </CaseChapter>

        <CaseChapter
          id="losning"
          number="03"
          title="Løsning"
          lead="Et spillunivers der barna løser oppdrag og tjener poeng."
          wide={
            <FeatureGroup title="Appen">
              <Feature
                title="Konseptet"
                figures={[
                  {
                    src: "/drømmeland/spillreise.webp",
                    alt: "Spilluniverset i Drømmeland-appen vist på en iPad-skjerm.",
                    caption: "Spilluniverset i Drømmeland",
                  },
                ]}
              >
                <p>
                  Konseptet for Drømmeland kombinerer læring og lek ved å tilby
                  barn en interaktiv plattform der de kan utføre oppdrag, som
                  virtuell resirkulering og havrydding. Gjennom oppgavene får
                  barna praktisk innsikt i bærekraftige handlinger, samtidig som
                  det er gøy. For å skape et univers som appellerer til
                  målgruppen, utviklet vi personas og brukerhistorier som styrte
                  designprosessen. Dette bidro til å forme et grensesnitt som er
                  både lærerikt og underholdende.
                </p>
              </Feature>

              <Feature
                title="Spillene"
                figures={[
                  {
                    src: "/drømmeland/games.webp",
                    alt: "To av spillene du kan spille i Drømmeland, «Pant» og «Redd Fisken».",
                    caption:
                      "To av spillene i Drømmeland, “Pant” og “Redd Fisken”",
                  },
                ]}
              >
                <p>
                  Barna løser bærekraftsutfordringer gjennom korte spill, som å
                  pante og redde fiskene.
                </p>
              </Feature>

              <Feature
                title="Min side og klasseoversikt"
                figures={[
                  {
                    src: "/drømmeland/min-side.webp",
                    alt: "To iPad-skjermer som viser «Min side» og «Klasseoversikt» i Drømmeland-appen.",
                    caption: "Min side og klasseoversikt i Drømmeland",
                  },
                ]}
              >
                <p>
                  Barna samler poeng og følger egen fremgang på Min side, mens
                  klasseoversikten gir læreren oversikt og mulighet til å dele
                  ut oppgaver.
                </p>
              </Feature>
            </FeatureGroup>
          }
        />

        <CaseChapter
          id="laering"
          number="04"
          title="Læring"
          surface="soft"
          lead="Min læring fra prosjektet."
        >
          <p>
            Drømmeland har gitt meg erfaring med å designe for barn, en
            målgruppe som bruker apper på andre måter enn voksne. I workshopene
            tegnet barna sine egne spillunivers og drømmeavatarer, og vi fikk
            innsikt i ønsker og ideer vi kanskje ikke hadde kommet frem til på
            egen hånd. Tegningene ble direkte inspirasjon for designet og viste
            meg verdien av å involvere brukerne aktivt i designprosessen,
            fremfor å basere designvalg på egne antakelser. Prosjektet lærte meg
            også å designe for to brukergrupper samtidig: barna som spiller, og
            lærerne som deler ut oppgaver. Personas og brukerhistorier hjalp oss
            med å ivareta behovene til begge gjennom prosessen. Med mer tid
            ville jeg testet prototypen grundigere med barn i målgruppen for å
            undersøke hvordan løsningene fungerte i praksis.
          </p>
        </CaseChapter>
      </div>

      <RelatedProjects
        projects={[
          {
            thumbnail: thumbnails.barnebank,
            title: "Sparebanken Norge",
            link: "/barnebank",
          },
          {
            thumbnail: thumbnails.ourspace,
            title: "OurSpace",
            link: "/ourspace",
          },
          { thumbnail: thumbnails.corwell, title: "CorWell", link: "/corwell" },
          {
            thumbnail: thumbnails.grundercampus,
            title: "Bachelorprosjekt: GründerCampus",
            link: "/grundercampus",
          },
        ]}
      />
    </main>
  );
}
