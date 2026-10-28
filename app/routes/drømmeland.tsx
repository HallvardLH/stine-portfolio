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

// FORSLAG: tekst som er markert med FORSLAG er skrevet av Claude og skal
// gås gjennom sammen. Her mangler det mest: siden hadde ingen læringstekst.
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

        {/* FORSLAG */}
        <CaseBreak eyebrow="I korte trekk" placeholder>
          Læring om bærekraft gjennom lek, hjemme og i klasserommet.
        </CaseBreak>

        <CaseChapter
          id="bakgrunn"
          number="01"
          title="Bakgrunn"
          rule
          // FORSLAG
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
          // FORSLAG
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
          // FORSLAG
          lead="Et spilluniverse der barna løser oppdrag og tjener poeng."
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
                {/* FORSLAG: kort tekst utledet fra bildeteksten */}
                <p>
                  Barna løser bærekraftsutfordringer gjennom korte spill, som å
                  levere pant og redde fisken.
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
                {/* FORSLAG: kort tekst utledet fra bakgrunnen og bildeteksten */}
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
          // FORSLAG
          lead="Hva jeg tar med meg fra å designe for barn."
        >
          {/* FORSLAG: erstatt med egen tekst */}
          <p className="case-placeholder">
            Her mangler det tekst om læring og resultat. Forslag: hva det
            betydde å designe sammen med barna, hvordan tegningene fra
            workshopene påvirket spilluniverset, og hva jeg ville gjort
            annerledes.
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
