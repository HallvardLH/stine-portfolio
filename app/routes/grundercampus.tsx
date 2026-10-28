import type { MetaFunction } from "@remix-run/node";
import CoverImage from "~/components/cover-image/CoverImage";
import { thumbnails } from "~/data/thumbnails";
import ChapterNav, { type Chapter } from "~/components/chapter-nav/ChapterNav";
import CaseTitle from "~/components/case/CaseTitle";
import CaseBreak from "~/components/case/CaseBreak";
import CaseColumns from "~/components/case/CaseColumns";
import { Feature, FeatureGroup } from "~/components/case/Feature";
import RelatedProjects from "~/components/case/RelatedProjects";
import {
  Chapter as CaseChapter,
  ChapterBlock,
} from "~/components/case/Chapter";
import { Figure, FigurePair, FigureRow } from "~/components/case/Figure";

const chapters: Chapter[] = [
  { id: "intro", label: "Intro" },
  { id: "bakgrunn", label: "Bakgrunn" },
  { id: "innsikt", label: "Innsikt" },
  { id: "design", label: "Design" },
  { id: "losning", label: "Løsning" },
  { id: "resultat", label: "Resultat" },
  { id: "bilder", label: "Bilder" },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Bachelorprosjekt: GründerCampus - Stine Knutsen" },
    {
      name: "description",
      content:
        "Som del av bacheloroppgaven min designet jeg og gruppen min en nettside for GründerCampus. Prosjektet vårt vant MVP-prisen under universitetets Innovasjonsdag 9. mai 2025.",
    },
  ];
};

export default function ProjectsLibaryRoute() {
  return (
    <main className="case">
      <CoverImage thumbnail={thumbnails.grundercampus} />

      <div className="case-chapters">
        <ChapterNav chapters={chapters} />

        <CaseTitle
          id="intro"
          title="Bachelorprosjekt: GründerCampus"
          intro="Gjennom bachelorprosjektet fikk prosjektgruppen min, bestående av Pernille Brubakk, Jenny Dal Østensen, Margrethe Liahjell og meg selv, muligheten til å utvikle ny nettside, logo og visuell profil for den nyoppstartede studentorganisasjonen GründerCampus. Prosjektet vårt vant MVP-prisen under universitetets Innovasjonsdag 9. mai 2025."
          marginTitle="Om prosjektet"
          facts={[
            { label: "Plattform", value: "Nettside" },
            { label: "Periode", value: "Våren 2025" },
            { label: "Rolle", value: "UX-designer" },
            {
              label: "Team",
              value:
                "Pernille Brubakk, Jenny Dal Østensen, Margrethe Liahjell og meg selv",
            },
            {
              label: "Pris",
              value: "MVP-prisen, universitetets Innovasjonsdag 9. mai 2025",
            },
          ]}
        />
        <CaseBreak eyebrow="I korte trekk">
          Ny nettside og visuell profil for studentgründere i Bergen.
        </CaseBreak>

        <CaseChapter
          id="bakgrunn"
          number="01"
          title="Bakgrunn"
          rule
          lead="Bergen har et uforløst potensial for studentgründere."
        >
          <p>
            Hvert år deler Innovasjon Norge ut store summer til studentgründere.
            I fjor gikk 36 prosent av disse midlene til Trondheim, 24 prosent
            til Oslo og bare 4 prosent til Bergen. Vi mener at Bergen har et
            stort, uforløst potensial, og at det er behov for å styrke
            innovasjonsmiljøet blant studentene på tvers av
            utdanningsinstitusjonene, slik vi ser i Trondheim og Oslo.
          </p>
          <p>
            GründerCampus ble etablert for å være en bro mellom universitetene i
            Bergen, i samarbeid med flere etablerte startup-inkubatorer.
            Organisasjonen skal tilby studenter veiledning, nettverk, nyttige
            verktøy og inspirasjon til å følge sine gründerdrømmer. Vi ble
            hentet inn for å utvikle plattformen som skulle samle alt dette på
            ett sted.
          </p>
        </CaseChapter>

        <CaseChapter
          id="innsikt"
          number="02"
          title="Innsiktsfase"
          surface="dark"
          lead="Hva vi lærte av innovasjonsmiljøet i Bergen."
          wide={
            <>
              <CaseColumns
                items={[
                  {
                    title: "Metoder",
                    text: (
                      <p>
                        Vi startet prosjektet med en grundig innsiktsfase, hvor
                        vi gjennomførte konkurrentanalyse, dybdeintervjuer,
                        fokusgrupper og co-design workshops med målgruppen.
                      </p>
                    ),
                  },
                  {
                    title: "Innovasjonsmiljøet",
                    text: (
                      <p>
                        I tillegg deltok vi aktivt i innovasjonsmiljøet i
                        Bergen, og snakket med unge gründerspirer for å få en
                        dypere forståelse av deres behov.
                      </p>
                    ),
                  },
                  {
                    title: "Funksjoner",
                    text: (
                      <p>
                        Basert på funnene definerte vi hvilke funksjoner
                        plattformen måtte tilby for å støtte og inspirere
                        studentgründere på best mulig måte.
                      </p>
                    ),
                  },
                ]}
              />

              <FigurePair
                first={{
                  src: "/grundercampus/workshop.webp",
                  alt: "Studenter deltar i en co-design workshop for å utvikle plattformen til GründerCampus.",
                  caption: "Co-design workshop",
                }}
                second={{
                  src: "/grundercampus/innovation.webp",
                  alt: "Deltakelse i arrangementer i Bergens innovasjonsmiljø for innsiktsarbeid.",
                  caption: "Deltakelse i innovasjonsmiljøet i Bergen.",
                }}
              />
            </>
          }
        />

        <CaseChapter
          id="design"
          number="03"
          title="Identitet og designsystem"
          lead="Merkevareidentitet og komponentbibliotek."
          wide={
            <>
              <FigurePair
                first={{
                  src: "/grundercampus/palette.webp",
                  alt: "GründerCampus sin fargepalett, med friske og inspirerende farger.",
                  caption: "Fargepaletten for hjemmesiden.",
                }}
                second={{
                  src: "/grundercampus/logo.webp",
                  alt: "GründerCampus-logoen i ulike fargeversjoner for fleksibel bruk på tvers av flater.",
                  caption:
                    "GründerCampus sin logo i forskjellige fargevariasjoner.",
                }}
              />

              <ChapterBlock title="Designsystem og styleguide">
                <p className="case-wide-intro">
                  Jeg hadde hovedansvaret for å sette opp et responsivt
                  designsystem tilpasset både mobil og desktop. Jeg sørget for å
                  skape visuell konsistens og brukervennlige komponenter, samt
                  et tydelig komponentbibliotek med god navngiving og bruk av
                  design tokens. Dette forenklet overleveringen til utvikleren
                  og gjorde det lettere å implementere designet effektivt.
                </p>
              </ChapterBlock>

              <FigurePair
                first={{
                  src: "/grundercampus/typography.webp",
                  alt: "Typografisk oppsett for GründerCampus med valg av fonter for en enhetlig visuell stil.",
                  caption: "Typografien for GründerCampus sin nettside.",
                }}
                second={{
                  src: "/grundercampus/design-system.webp",
                  alt: "Komponentbibliotek og designsystem for GründerCampus-nettsiden, tilpasset mobil og desktop.",
                  caption:
                    "Designsystem: Oppsett av komponentbibliotek for en konsistent og skalerbar løsning.",
                }}
              />
            </>
          }
        >
          <p>
            Vi startet prosjektet med å utvikle en merkevareidentitet og logo.
            Gjennom tett dialog med oppdragsgiver og flere iterasjoner landet vi
            på et fargeuttrykk og en logo som reflekterte GründerCampus&apos;
            verdier. Logoen ble gjort dynamisk for å skape et mer levende og
            fleksibelt visuelt uttrykk.
          </p>
        </CaseChapter>

        <CaseChapter
          id="losning"
          number="04"
          title="Løsning"
          surface="soft"
          lead="En nettside som skal inspirere og gjøre det enkelt å finne frem."
          wide={
            <>
              <FeatureGroup title="Lansering">
                <Feature
                  title="Coming soon-siden"
                  figures={[
                    {
                      src: "/grundercampus/coming-soon.webp",
                      alt: "Midlertidig «Coming soon»-side for GründerCampus med introduksjon og visuell profil.",
                      caption: "“Coming soon”-siden.",
                    },
                  ]}
                >
                  <p>
                    Før vi ferdigstilte en fullverdig prototype av nettsiden,
                    lanserte vi en midlertidig «Coming soon»-side.
                  </p>
                </Feature>
              </FeatureGroup>

              <FeatureGroup title="Nettsiden">
                <Feature
                  title="Forsiden"
                  figures={[
                    {
                      src: "/grundercampus/landing.webp",
                      alt: "GründerCampus' forside som introduserer organisasjonens hovedfunksjoner og tilbud.",
                      caption:
                        "Forsiden: Introduksjon til GründerCampus' hovedområder og plattformens inngangspunkt.",
                    },
                  ]}
                >
                  <p>
                    Forsiden på GründerCampus-nettsiden fungerer som en
                    inngangsport til plattformens hovedfunksjoner. Her ønsket vi
                    å skape et førsteinntrykk som både inspirerer og informerer.
                    Vi introduserer GründerCampus&apos; kjerneområder:
                    Arrangementer, Oppstartstorget og Om oss. Brukerne blir
                    raskt kjent med hva GründerCampus tilbyr og kan enkelt
                    navigere videre til det som er mest relevant for dem.
                  </p>
                </Feature>

                <Feature
                  title="Arrangementer"
                  figures={[
                    {
                      src: "/grundercampus/events.webp",
                      alt: "Arrangementsside som viser oversikt over kommende innovasjonsaktiviteter for studenter.",
                      caption:
                        "Arrangementssiden: Samling av kommende workshops, meetups og arrangementer.",
                    },
                  ]}
                >
                  <p>
                    Arrangementssiden gir en strukturert oversikt over kommende
                    arrangementer, workshops og meetups organisert av
                    GründerCampus og samarbeidspartnere. Målet er å inspirere
                    studenter til å engasjere seg i innovasjonsmiljøet, bygge
                    nettverk og finne likesinnede med felles gründerambisjoner.
                  </p>
                </Feature>

                <Feature
                  title="Oppstartstorget"
                  figures={[
                    {
                      src: "/grundercampus/startup.webp",
                      alt: "Oppstartstorg-funksjon som kobler studenter med ulike kompetanser i gründerprosjekter.",
                      caption:
                        "Oppstartstorg: Koble sammen studenter og prosjekter på tvers av fagområder.",
                    },
                  ]}
                >
                  <p>
                    Oppstartstorget er en sentral funksjon utviklet for å knytte
                    sammen studenter med ulike ferdigheter og interesser. Her
                    kan studenter søke deltakelse i pågående gründerprosjekter,
                    eller legge ut egne annonser for å finne medgründere eller
                    spesifikk kompetanse de trenger for å realisere sine ideer.
                    Dette senker terskelen for å komme i gang som gründer og
                    åpner for tverrfaglig samarbeid på tvers av
                    utdanningsretninger.
                  </p>
                  <p>
                    Oppstartstorget er en funksjon som skiller GründerCampus fra
                    andre aktører. Ideen er å gi studenter som kanskje ikke har
                    en egen idé, muligheten til å bidra med sin kompetanse i
                    andres prosjekter. Dette gir dem både verdifull erfaring og
                    et sosialt og faglig nettverk, noe som ofte er vanskelig å
                    få tilgang til for unge studenter.
                  </p>
                </Feature>

                <Feature
                  title="Om oss"
                  figures={[
                    {
                      src: "/grundercampus/about-us.webp",
                      alt: "Om oss-side som presenterer GründerCampus' visjon, verdier og The Hub - møteplassen for studenter.",
                      caption:
                        "Om oss: GründerCampus' visjon, verdier og presentasjon av The Hub.",
                    },
                  ]}
                >
                  <p>
                    Om oss-siden gir brukerne en dypere forståelse av hva
                    GründerCampus står for. Her presenterer vi organisasjonens
                    visjon om å styrke innovasjonsmiljøet i Bergen, verdiene de
                    jobber etter, og målet deres om å bygge broer mellom
                    utdanningsinstitusjoner og innovasjonsaktører. Vi
                    introduserer også The Hub, GründerCampus’ fysiske møtested
                    hvor studenter kan møte mentorer, delta på workshops og få
                    støtte i oppstartsprosessen.
                  </p>
                </Feature>
              </FeatureGroup>
            </>
          }
        />

        <CaseChapter
          id="resultat"
          number="05"
          title="Resultat og læring"
          surface="dark"
          lead="Testing med eye-tracking, MVP-prisen og hva jeg tar med meg videre."
          wide={
            <>
              <ChapterBlock title="Brukertesting med eye-tracking">
                <p className="case-wide-intro">
                  For å sikre at nettsiden oppleves både inspirerende og
                  intuitiv for målgruppen, gjennomførte vi brukertester ved
                  hjelp av eye-tracking-teknologi. Testpersonene fikk i oppgave
                  å navigere gjennom prototypen mens vi registrerte
                  øyebevegelsene deres. Dette ga oss verdifull innsikt i hvordan
                  brukerne oppfattet informasjonen, hvilke elementer som
                  tiltrakk mest oppmerksomhet, og hvor eventuelle
                  navigasjonsutfordringer oppstod.
                </p>
              </ChapterBlock>

              <FigureRow
                figures={[
                  {
                    src: "/grundercampus/eyetracking.webp",
                    alt: "Brukertest av GründerCampus-nettsiden med observasjon av brukernes navigasjon.",
                    caption:
                      "Brukertesting med eye-tracking: Innsikt i hvordan brukerne navigerte i prototypen.",
                  },
                  {
                    src: "/grundercampus/eyetracking-screenshot.webp",
                    alt: "Heatmap som viser hvor testbrukerne fokuserte blikket på GründerCampus-nettsiden.",
                    caption: "Heatmap over resultatene fra eye-trackingen.",
                  },
                ]}
              />

              <ChapterBlock title="Min læring fra prosessen">
                <p className="case-wide-intro">
                  Dette prosjektet har vært uvurderlig for min utvikling som
                  UX-designer. Jeg har opparbeidet meg avansert kunnskap i
                  Figma, spesielt innen oppsett av designsystemer og bruk av
                  design tokens. I tillegg til faglig vekst lærte jeg mye om
                  betydningen av godt teamarbeid. I dette prosjektet fant alle i
                  gruppen sin naturlige rolle, og vi løftet hverandre gjennom
                  hele prosessen. Engasjementet og drivkraften i teamet førte
                  til at vi leverte en nøye gjennomarbeidet, brukervennlig og
                  innovativ løsning. Prosjektet har gitt meg en styrket tro på
                  hvor mye høyere kvalitet et team kan oppnå sammen enn det man
                  kan alene. Arbeidet vårt vil hjelpe studenter i Bergen med å
                  finne veien inn i entreprenørskap eller skaffe seg relevant
                  arbeidserfaring, noe som kan være utfordrende å få som ung
                  student.
                </p>
              </ChapterBlock>
            </>
          }
        >
          <p>
            {" "}
            Prosjektet vant MVP-prisen under universitetets Innovasjonsdag 9.
            mai 2025.{" "}
          </p>
        </CaseChapter>

        <CaseChapter
          id="bilder"
          number="06"
          title="Bilder fra prosjektet"
          wide={
            <Figure
              src="/om-meg/grundercampus.webp"
              alt="Bachelorgruppen med diplom, sammen med juryen."
              caption="Innovasjonsdagen 2025 - gruppen vant MVP-prisen for beste bachelorprosjekt!"
              aspectRatio="1168 / 424"
            />
          }
        >
          <Figure
            src="/om-meg/kickoff.webp"
            alt="Stine og Pernille på pitchekonkurranse hos GründerCampus."
            caption="Pitchekonkurranse hos GründerCampus - som vi vant!"
            aspectRatio="3 / 2"
          />
        </CaseChapter>
      </div>

      <RelatedProjects
        projects={[
          {
            thumbnail: thumbnails.portefoljeRedesign,
            title: "Redesign: portefølje",
            link: "/redesign-av-portefølje",
          },
          {
            thumbnail: thumbnails.finn,
            title: "FINN Eiendom",
            link: "/finn-eiendom",
          },
          {
            thumbnail: thumbnails.barnebank,
            title: "Sparebanken Norge",
            link: "/barnebank",
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
