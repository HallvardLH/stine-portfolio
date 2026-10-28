import type { MetaFunction } from "@remix-run/node";
import CoverImage from "~/components/cover-image/CoverImage";
import { thumbnails } from "~/data/thumbnails";
import ChapterNav, { type Chapter } from "~/components/chapter-nav/ChapterNav";
import CaseTitle from "~/components/case/CaseTitle";
import CaseBreak from "~/components/case/CaseBreak";
import CaseImageBreak from "~/components/case/CaseImageBreak";
import CaseColumns from "~/components/case/CaseColumns";
import { Feature, FeatureGroup } from "~/components/case/Feature";
import RelatedProjects from "~/components/case/RelatedProjects";
import { Chapter as CaseChapter } from "~/components/case/Chapter";
import { FigurePair } from "~/components/case/Figure";

const chapters: Chapter[] = [
  { id: "intro", label: "Intro" },
  { id: "bakgrunn", label: "Bakgrunn" },
  { id: "prosess", label: "Prosess" },
  { id: "losning", label: "Løsning" },
  { id: "laering", label: "Læring" },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Redesign av portefølje - Stine Knutsen" },
    {
      name: "description",
      content:
        "Redesign av en front-end utviklers portefølje for å effektivt fremheve arbeidet hans.",
    },
  ];
};

export default function ProjectsLibaryRoute() {
  return (
    <main className="case">
      <CoverImage thumbnail={thumbnails.portefoljeRedesign} />

      <div className="case-chapters">
        <ChapterNav chapters={chapters} />

        <CaseTitle
          id="intro"
          title="Redesign av portefølje"
          intro="Jeg ble kontaktet av en front-end utvikler som ønsket et redesign av porteføljen sin. Målet var å skape en stilren, brukervennlig og profesjonell plattform som fremhever utviklerens ferdigheter på en tydelig og engasjerende måte."
          marginTitle="Om prosjektet"
          facts={[
            { label: "Plattform", value: "Nettside" },
            { label: "Periode", value: "Des 2024 - jan 2025" },
            { label: "Oppdrag", value: "Freelance for en front-end utvikler" },
          ]}
        />
        <CaseBreak eyebrow="I korte trekk">
          En stilren portefølje som gjør det enkelt å finne frem til arbeidet.
        </CaseBreak>

        <CaseChapter
          id="bakgrunn"
          number="01"
          title="Bakgrunn"
          rule
          lead="Utvikleren ville ha en mer profesjonell og brukervennlig portefølje."
        >
          <p>
            En front-end utvikler kontaktet meg for å redesigne porteføljen sin
            med mål om å skape en mer profesjonell og brukervennlig plattform
            for å vise frem arbeidet sitt. Porteføljen skulle ikke bare være
            visuelt tiltalende, men også effektiv i å kommunisere kompetanse og
            prosjekter til potensielle arbeidsgivere og kunder.
          </p>
        </CaseChapter>

        <CaseImageBreak
          src="/portefølje-redesign/portfolio-before-after.webp"
          alt="Sammenligning av porteføljens gamle og nye design."
          caption="Porteføljen før og etter redesign."
          blend
          dark
          background="linear-gradient(180deg, #064374 0%, #035894 25%, #0763a2 50%, #0166a7 75%, #016eaf 100%)"
        />

        <CaseChapter
          id="prosess"
          number="02"
          title="Designprosessen"
          surface="dark"
          lead="Behovsanalyse, wireframes og tre iterasjoner av en prototype i Figma."
          wide={
            <>
              <CaseColumns
                items={[
                  {
                    title: "Behovsanalyse og wireframes",
                    text: (
                      <p>
                        Jeg startet med en behovsanalyse for å forstå
                        utviklerens mål, hvilke prosjekter som skulle fremheves,
                        og hvilke funksjoner som var viktigst. For å sikre en
                        optimal struktur tok jeg inspirasjon fra Nielsen Norman
                        Group sine anbefalinger for UX-porteføljer (NNG Group,
                        2023). Deres forskning understreker viktigheten av
                        tydelig navigasjon, konsise prosjekthistorier og en
                        enkel, men strategisk oppbygning av innholdet. Dette
                        hjalp meg med å sette opp wireframes som prioriterte
                        brukervennlighet og effektiv kommunikasjon.
                      </p>
                    ),
                  },
                  {
                    title: "Prototyping og iterasjoner",
                    text: (
                      <p>
                        For å sikre en sømløs overgang fra design til kode
                        utviklet jeg en interaktiv prototype i Figma. Dette ga
                        utvikleren en realistisk forhåndsvisning av hvordan
                        porteføljen ville fungere og gjorde det enklere å teste
                        interaksjoner før implementering. Muligheten til å bytte
                        mellom lys og mørk modus ble også implementert i
                        prototypen, slik at utvikleren kunne teste
                        funksjonaliteten før lansering. Prosjektet gikk gjennom
                        tre iterasjoner, hvor jeg utførte brukertester for å
                        identifisere forbedringspunkter. Jeg jobbet tett med
                        utvikleren gjennom hele prosessen, slik at han kunne
                        komme med innspill og sikre at løsningen både fungerte
                        optimalt teknisk og oppfylte hans behov. Dette iterative
                        arbeidet sikret en brukersentrert tilnærming og et
                        resultat som var både funksjonelt og visuelt
                        gjennomført.
                      </p>
                    ),
                  },
                ]}
              />

              <FigurePair
                first={{
                  src: "/portefølje-redesign/wireframe.webp",
                  alt: "Wireframe for nettsiden.",
                  caption: "Wireframe for porteføljens hjemmeside",
                }}
                second={{
                  src: "/portefølje-redesign/about.webp",
                  alt: "Mobilskjerm hvor man bytter fra lys til mørk modus gjennom navigasjonsmenyen.",
                  caption:
                    "Man kan enkelt bytte mellom lys og mørk modus ved å klikke på modus-knappen i navigasjonsmenyen",
                }}
              />
            </>
          }
        />

        <CaseChapter
          id="losning"
          number="03"
          title="Løsning"
          lead="Tydeligere navigasjon, bedre struktur og lys/mørk modus."
          wide={
            <>
              <FeatureGroup title="Navigasjon og struktur">
                <Feature
                  title="Header og navigasjon"
                  figures={[
                    {
                      src: "/portefølje-redesign/landing-page.webp",
                      alt: "Sammenligning av det gamle og det nye designet.",
                      caption:
                        "Navigasjonsmenyen har blitt endret i det nye designet for å gjøre navigasjonen enklere",
                    },
                  ]}
                >
                  <p>
                    For å gjøre navigasjonen intuitiv og brukervennlig designet
                    jeg en fiksert navigasjonsmeny som gjør at menyen alltid er
                    synlig mens brukeren scroller. Dette er basert på NNG Groups
                    forskning på sticky headers (NNG Group, 2023), som viser at
                    brukere navigerer mer effektivt når de har konstant tilgang
                    til hovedmenyen. Jeg la også til en visuell understrekning
                    av hvilken side brukeren er på, for å gi bedre kontekst og
                    redusere kognitiv belastning. Dette hjelper brukerne med å
                    forstå hvor de befinner seg i porteføljen til enhver tid.
                  </p>
                  <p>
                    For prosjektsidene implementerte jeg navigasjonssti
                    (breadcrumbs), slik at brukerne enkelt kan se hvordan de
                    havnet der de befinner seg, og navigere tilbake uten
                    forvirring. Dette følger prinsippet om «Recognition Over
                    Recall», der designet hjelper brukeren å gjenkjenne stedet i
                    strukturen fremfor å huske det selv.
                  </p>
                </Feature>

                <Feature
                  title="Struktur og brukervennlighet"
                  figures={[
                    {
                      src: "/portefølje-redesign/footer.webp",
                      alt: "Den nye footeren på både mobil og desktop.",
                      caption:
                        "Den nye footeren har navigasjonslenker, kontaktinformasjon og lenker til GitHub og LinkedIn",
                    },
                  ]}
                >
                  <p>
                    Under arbeidet oppdaget jeg at utvikleren ikke hadde en egen
                    Kontakt-side eller footer, noe som kunne gjøre det vanskelig
                    for potensielle arbeidsgivere å nå ut. Basert på
                    UX-prinsipper, og fokus på tilgjengelighet, la jeg til en
                    enkel og oversiktlig kontaktside. I tillegg ble en footer
                    lagt til for å samle all viktig informasjon og gjøre
                    navigasjonen lettere.
                  </p>
                  <p>
                    Inspirasjonen kom fra NNG Groups forskning på footere (NNG
                    Group, 2023), som viser hvordan en godt designet footer kan
                    forbedre brukeropplevelsen ved å tilby en fleksibel måte å
                    navigere på. Dette følger prinsippet om «Flexibility of
                    Use», slik at brukere enkelt finner veien videre, på den
                    måten den som bruker siden måtte ønske.
                  </p>
                </Feature>
              </FeatureGroup>

              <FeatureGroup title="Tilgjengelighet">
                <Feature
                  title="Lys og mørk modus"
                  figures={[
                    {
                      src: "/portefølje-redesign/dark-light.webp",
                      alt: "Et prosjekt vist i både mørk og lys modus.",
                      caption:
                        "Prosjektsider i både lys og mørk modus for å heve brukervennlighet",
                    },
                  ]}
                >
                  <p>
                    Jeg valgte å implementere lys og mørk modus i porteføljen
                    for å gi brukerne muligheten til å tilpasse
                    brukeropplevelsen etter deres personlige preferanser og
                    behov. Forskning viser at mørk modus kan redusere
                    øyeanstrengelse, spesielt i svakt belyste omgivelser, og
                    dermed forbedre lesbarheten for brukere som bruker
                    porteføljen over lengre tid (Nielsen Norman Group, 2023). På
                    den andre siden fungerer lys modus bedre i godt opplyste
                    omgivelser og kan også bidra til å øke lesbarheten i visse
                    situasjoner (W3C, 2020). Ved å tilby begge alternativene gir
                    nettsiden brukeren valgfrihet til å tilpasse grensesnittet
                    etter egne behov og sikre en komfortabel brukeropplevelse
                    under alle lysforhold.
                  </p>
                  <p>
                    Valget om å inkludere muligheten for lys og mørk modus er
                    også i tråd med WACA-prinsippene for tilgjengelighet, som
                    understreker viktigheten av å designe nettsteder som er
                    tilpasset forskjellige brukerbehov og preferanser. Dette
                    prinsippet støtter inkluderende design og bidrar til en
                    bedre opplevelse for brukere med lysømfintlighet eller
                    migrene, som kan ha vanskelig for å bruke grensesnitt med
                    høy lysstyrke (W3C, 2020).
                  </p>
                </Feature>
              </FeatureGroup>
            </>
          }
        />

        <CaseChapter
          id="laering"
          number="04"
          title="Min læring fra prosessen"
          surface="soft"
          lead="Hva jeg lærte av å designe for en utvikler."
        >
          <CaseColumns
            items={[
              {
                title: "Struktur fra start",
                text: "Dette prosjektet ga meg verdifull erfaring i å designe for en utvikler, hvor balansen mellom estetikk og funksjonalitet var avgjørende. Men ingenting er perfekt på første forsøk, og jeg gjorde flere feil underveis som lærte meg mye. En av de største lærdommene mine var hvordan man bruker Auto Layout og komponenter riktig. I begynnelsen grupperte jeg ikke alltid elementene på en optimal måte, noe som førte til unødvendige konsekvenser senere når jeg brukte komponentene i designet. Jeg innså hvor viktig det er å strukturere og navngi elementer riktig fra start, slik at iterasjoner og justeringer blir smidige senere.",
              },
              {
                title: "Små valg med stor effekt",
                text: "Jeg fikk også bekreftet hvor viktig det er med et klart informasjonshierarki, strategisk plassering av innhold og en lettfattelig struktur. I tillegg lærte jeg hvor avgjørende det er å inkludere kontaktmuligheter, fleksibilitet i navigasjon (som en godt strukturert footer og breadcrumbs) og visuelle tilpasninger som lys/mørk modus for å forbedre brukeropplevelsen. Ved å jobbe tett med utvikleren og gjennomføre brukertester i tre iterasjoner, ble jeg stadig mer bevisst på hvordan små designvalg kan ha stor påvirkning på sluttproduktet. Dette prosjektet har gitt meg enda bedre forståelse for iterativ design, systematisk oppbygging av komponenter og hvor viktig det er å tenke flere steg fremover i designprosessen.",
              },
            ]}
          />
        </CaseChapter>
      </div>

      <RelatedProjects
        projects={[
          {
            thumbnail: thumbnails.rema,
            title: "Redesign: Rema appen",
            link: "/æ",
          },
          {
            thumbnail: thumbnails.grundercampus,
            title: "Bachelorprosjekt: GründerCampus",
            link: "/grundercampus",
          },
          {
            thumbnail: thumbnails.finn,
            title: "FINN Eiendom",
            link: "/finn-eiendom",
          },
          {
            thumbnail: thumbnails.ourspace,
            title: "OurSpace",
            link: "/ourspace",
          },
        ]}
      />
    </main>
  );
}
