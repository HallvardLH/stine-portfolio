import type { MetaFunction } from "@remix-run/node";
import CoverImage from "~/components/cover-image/CoverImage";
import { thumbnails } from "~/data/thumbnails";
import ChapterNav, { type Chapter } from "~/components/chapter-nav/ChapterNav";
import CaseTitle from "~/components/case/CaseTitle";
import CaseBreak from "~/components/case/CaseBreak";
import CaseColumns from "~/components/case/CaseColumns";
import { Feature, FeatureGroup } from "~/components/case/Feature";
import RelatedProjects from "~/components/case/RelatedProjects";
import { Chapter as CaseChapter } from "~/components/case/Chapter";

const chapters: Chapter[] = [
  { id: "intro", label: "Intro" },
  { id: "bakgrunn", label: "Bakgrunn" },
  { id: "prosess", label: "Prosess" },
  { id: "losning", label: "Løsning" },
  { id: "laering", label: "Læring" },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Corwell - Stine Knutsen" },
    {
      name: "description",
      content:
        "Et Media- og Interaksjonsdesign prosjekt om en helseapp som forbedrer helseoppfølging ved hjelp av lifelogging.",
    },
  ];
};

// FORSLAG: tekst som er markert med FORSLAG er skrevet av Claude og skal
// gås gjennom sammen (i korte trekk, ingresser og kolonnetitler).
export default function ProjectsLibaryRoute() {
  return (
    <main className="case">
      <CoverImage thumbnail={thumbnails.corwell} />

      <div className="case-chapters">
        <ChapterNav chapters={chapters} />

        <CaseTitle
          id="intro"
          title="CorWell"
          intro="Et prosjekt som gikk ut på å skape en helseapp som forbedrer innsikten i egen helse ved hjelp av lifelogging-teknologi."
          marginTitle="Om prosjektet"
          facts={[
            { label: "Plattform", value: "Mobilapp" },
            { label: "Periode", value: "Jan - jun 2024" },
            {
              label: "Kurs",
              value: "Design for mediebruk (MIX204), Universitetet i Bergen",
            },
          ]}
        />

        {/* FORSLAG */}
        <CaseBreak eyebrow="I korte trekk" placeholder>
          En AI-basert helseassistent som gir hjertepasienter innsikt i egen
          helse.
        </CaseBreak>

        <CaseChapter
          id="bakgrunn"
          number="01"
          title="Bakgrunn"
          rule
          // FORSLAG
          lead="Hvordan lifelogging kan gjøre helseoppfølging enklere."
        >
          <p>
            I kurset Design for mediebruk (MIX204) ved Universitetet i Bergen
            utforsket vi hvordan lifelogging-teknologi kan forbedre
            helseoppfølging. Resultatet ble CorWell, en AI-basert helseassistent
            utviklet for forebygging og behandling av hjerterelaterte
            helseproblemer.
          </p>
        </CaseChapter>

        <CaseChapter
          id="prosess"
          number="02"
          title="Designprosessen"
          surface="dark"
          // FORSLAG
          lead="Utviklet i tett samarbeid med helsepersonell og pasienter."
          wide={
            <CaseColumns
              items={[
                {
                  // FORSLAG
                  title: "Kardiolog og designsprint",
                  text: (
                    <>
                      <p>
                        CorWell ble utviklet i tett samarbeid med både
                        helsepersonell og pasienter for å sikre en løsning som
                        møter målgruppens behov. Vi jobbet med en kardiolog fra
                        Haukeland sykehus, som deltok i en designsprint og ga
                        verdifulle tilbakemeldinger.
                      </p>
                      <p>
                        Gjennom samarbeidet identifiserte vi utfordringer med
                        måling og tolkning av biometriske data over tid.
                      </p>
                    </>
                  ),
                },
                {
                  // FORSLAG
                  title: "Intervjuer med pasienter",
                  text: (
                    <p>
                      I tillegg gjennomførte vi intervjuer med hjertepasienter
                      for å forstå hvordan sykdommen påvirker deres daglige liv.
                    </p>
                  ),
                },
                {
                  // FORSLAG
                  title: "Målgruppe og idé",
                  text: (
                    <>
                      <p>
                        Målgruppen vår var voksne hjertepasienter i alderen
                        50-65 år. Basert på innsikter og ideer fra målgruppen
                        arbeidet vi mot å skape en AI-drevet «lege» som kan
                        tolke helselogger i kontekst, raskere og mer presist enn
                        en fysisk legetime.
                      </p>
                      <p>
                        AI-en ble foreslått som en løsning for å effektivisere
                        prosessen, slik at hverdagen blir enklere for brukeren,
                        samtidig som helsepersonell får bedre innsikt.
                      </p>
                    </>
                  ),
                },
              ]}
            />
          }
        />

        <CaseChapter
          id="losning"
          number="03"
          title="Løsning"
          // FORSLAG
          lead="Én app som samler helseloggen og forklarer den."
          wide={
            <>
              <FeatureGroup title="Kom i gang">
                <Feature
                  title="Prototypen"
                  figures={[
                    {
                      src: "/corwell/setup.webp",
                      alt: "To mobilskjermer som viser onboardingen i CorWell.",
                      caption: "Onboardingen i CorWell",
                    },
                  ]}
                >
                  <p>
                    Vi fokuserte på oppsett og onboarding for å gjøre
                    brukeropplevelsen så enkel som mulig. Appen kan kobles til
                    brukerens eksisterende lifelogging-enheter, som smartklokker
                    eller smartringer, og integreres med Helsenorge for sikker
                    innlogging uten behov for ny konto. Dette gjør det mulig for
                    AI-en å forstå sammenhengen mellom helseloggen og
                    sanntidsdata.
                  </p>
                </Feature>
              </FeatureGroup>

              <FeatureGroup title="I appen">
                <Feature
                  title="CorWells nøkkelfunksjoner"
                  figures={[
                    {
                      src: "/corwell/landing-page.webp",
                      alt: "Hjemmesiden i appen, og talechatten.",
                      caption: "CorWells dashbord og talestyrt chat",
                    },
                  ]}
                >
                  <p>
                    Dashbordet gir en sentralisert oversikt over viktig
                    informasjon og målinger, slik at brukerne raskt kan forstå
                    status og fremgang. Interaktive elementer som grafer og
                    diagrammer gjør dataene mer engasjerende og enklere å
                    forstå, samtidig som personalisering lar brukerne tilpasse
                    visningen etter egne behov. En innebygd
                    tilbakemeldingsfunksjon og varsler sikrer at brukerne mottar
                    relevant informasjon og påminnelser, noe som øker både
                    responsen og nytteverdien av appen.
                  </p>
                </Feature>

                <Feature
                  title="Statistikk og helserapport"
                  figures={[
                    {
                      src: "/corwell/stats.webp",
                      alt: "Siden «Live Statistics» og den daglige helserapporten i CorWell.",
                      caption: "CorWells statistikkside og daglig helserapport",
                    },
                  ]}
                >
                  <p>
                    «Live Statistics» gir brukere daglige rapporter og
                    sanntidsinnsikt i egen hjertehelse, og viser hvordan deres
                    handlinger kan bidra til positive endringer.
                    Informasjonsikoner gir enkel tilgang til lettfattelige
                    forklaringer, mens brukerne kan scrolle og klikke på ulike
                    hjerteparametere for å utforske mer detaljerte data.
                    Overlays med visualiseringer og bilder gjør informasjonen
                    mer intuitiv og forståelig, noe som hjelper brukerne med å
                    ta bedre informerte valg om egen helse.
                  </p>
                </Feature>

                <Feature
                  title="Brukerkontroll og fleksibilitet"
                  figures={[
                    {
                      src: "/corwell/chat.webp",
                      alt: "Varslingssiden og chathistorikken i CorWell.",
                      caption: "CorWells varslingsside og chathistorikk",
                    },
                  ]}
                >
                  <p>
                    Brukerne har full kontroll over samtalehistorikken sin
                    gjennom en historikkside, hvor alle samtaler lagres. Her kan
                    de enkelt fortsette tidligere samtaler, organisere, lagre
                    eller slette dem etter behov. For å ivareta sikkerheten
                    vises det en nødvarsel som gir mulighet til å ringe
                    nødnummeret dersom alvorlige symptomer beskrives.
                  </p>
                  <p>
                    Interaksjon med AI-legen er fleksibel, og brukerne kan velge
                    mellom talestyring, tekst eller videochat. Med
                    videofunksjonalitet kan brukeren vise matvaner, aktiviteter
                    eller spesifikke bekymringer ved hjelp av et bærbart kamera,
                    slik at AI-en kan gjøre en mer grundig visuell analyse.
                  </p>
                </Feature>
              </FeatureGroup>
            </>
          }
        />

        <CaseChapter
          id="laering"
          number="04"
          title="Tilegnet erfaring fra prosjektet"
          surface="soft"
          // FORSLAG
          lead="Hva brukertestingen lærte oss, og hva jeg ville gjort videre."
        >
          <CaseColumns
            items={[
              {
                // FORSLAG
                title: "Det vi lærte",
                text: "Gjennom arbeidet med CorWell lærte vi mye om å designe for brukerengasjement og forenkling av komplekse data. Brukertestingen ga verdifull innsikt, spesielt i hvordan vi kunne gjøre appens funksjoner mer intuitive, som å forbedre chat-funksjonen for brukere som er uvant med AI.",
              },
              {
                // FORSLAG
                title: "Veien videre",
                text: "Jeg ser også forbedringsmuligheter, som å videreutvikle grensesnittet for enda bedre brukervennlighet. Prosjektet styrket min forståelse av hvordan man kombinerer teori, ekspertinnsikt og brukerinvolvering for å skape løsninger som møter reelle behov.",
              },
            ]}
          />
        </CaseChapter>
      </div>

      <RelatedProjects
        projects={[
          {
            thumbnail: thumbnails.ourspace,
            title: "OurSpace",
            link: "/ourspace",
          },
          {
            thumbnail: thumbnails.barnebank,
            title: "Sparebanken Norge",
            link: "/barnebank",
          },
          {
            thumbnail: thumbnails.dromme,
            title: "Drømmeland",
            link: "/drømmeland",
          },
          {
            thumbnail: thumbnails.rema,
            title: "Redesign: Rema appen",
            link: "/æ",
          },
        ]}
      />
    </main>
  );
}
