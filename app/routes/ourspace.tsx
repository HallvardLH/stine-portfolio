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
import { Figure } from "~/components/case/Figure";

const chapters: Chapter[] = [
  { id: "intro", label: "Intro" },
  { id: "bakgrunn", label: "Bakgrunn" },
  { id: "innsikt", label: "Innsikt" },
  { id: "losning", label: "Løsning" },
  { id: "videre", label: "Videre arbeid" },
  { id: "bilder", label: "Bilde" },
];

export const meta: MetaFunction = () => {
  return [
    { title: "OurSpace - Stine Knutsen" },
    {
      name: "description",
      content:
        "Et CSCW-verktøy med mål om å strukturere konsulenter og klienters kalendere for å oppfylle deres ønsker og behov.",
    },
  ];
};

export default function ProjectsLibaryRoute() {
  return (
    <main className="case">
      <CoverImage thumbnail={thumbnails.ourspace} />

      <div className="case-chapters">
        <ChapterNav chapters={chapters} />

        <CaseTitle
          id="intro"
          title="OurSpace"
          intro="Et CSCW-verktøy med mål om å strukturere konsulenter og klienters kalendere for å oppfylle deres ønsker og behov."
          marginTitle="Om prosjektet"
          facts={[
            { label: "Plattform", value: "Software" },
            { label: "Periode", value: "Aug - nov 2023" },
            { label: "Kurs", value: "Design for medieproduksjon (MIX203)" },
          ]}
        />
        <CaseBreak eyebrow="I korte trekk">
          Én felles tidslinje som gir designere og klienter lik innsikt i
          prosjektet.
        </CaseBreak>

        <CaseChapter
          id="bakgrunn"
          number="01"
          title="Bakgrunn"
          rule
          lead="Feltarbeid hos Neue Design Studio (Kurppa Hosk) som utgangspunkt."
        >
          <p>
            I løpet av kurset Design for medieproduksjon (MIX203) ble vi sendt
            ut i felten for å undersøke hvordan Neue Design Studio (Kurppa
            Hosk), et selskap som arbeider med medieproduksjon, samarbeider og
            arbeider med CSCW-verktøy (computer supported cooperative work). I
            løpet av feltarbeidet samlet vi kvalitative data i form av intervju
            og observasjon, som vi brukte til å skape et verktøy som kunne
            forbedre arbeidsdagen til de ansatte ved firmaet vi besøkte.
          </p>
        </CaseChapter>

        <CaseChapter
          id="innsikt"
          number="02"
          title="Problemområdet"
          surface="dark"
          lead="Utfordringer i designprosjekter, og hvordan de kan løses."
          wide={
            <>
              <CaseColumns
                items={[
                  {
                    title: "Utfordringer",
                    text: (
                      <p>
                        Gjennom brainstorming identifiserte vi tre
                        hovedutfordringer knyttet til designprosjekter:
                        kommunikasjon med kunden, selve designprosessen og
                        arbeidsfordeling. Kommunikasjon med kunden er ofte
                        preget av treghet, hvor designere må avvente svar før de
                        kan fortsette arbeidet. Dette skaper forsinkelser og
                        utfordringer når kunden introduserer plutselige
                        endringer som ikke alltid er i takt med designprosessen.
                        Slike problemer oppstår ofte fordi kunden ikke er
                        tilstrekkelig involvert eller inkludert underveis.
                      </p>
                    ),
                  },
                  {
                    title: "How Might We",
                    text: (
                      <p>
                        For å finne løsninger brukte vi «How Might We»-øvelser
                        (HMW), som for eksempel: Hvordan kan vi strukturere
                        klientens og designerens kalender for å bedre oppfylle
                        deres ønsker og behov?
                      </p>
                    ),
                  },
                  {
                    title: "Mål for fremtiden",
                    text: (
                      <p>
                        I tillegg satte vi et mål for fremtiden: “In two years
                        time” skal designere ha en klar forståelse av egne og
                        andres prosjekter, inkludert tid, omfang og kompetanse.
                      </p>
                    ),
                  },
                ]}
              />

              <Figure
                src="/ourspace/brainstorming.webp"
                alt="Tidlige skisser av grensesnittet hengt opp på en whiteboardtavle."
                caption="Wireframes for nettsiden"
              />
            </>
          }
        />

        <CaseChapter
          id="losning"
          number="03"
          title="Løsning"
          lead="En applikasjon som samler klienter og designere i ett grensesnitt."
          wide={
            <FeatureGroup title="Konseptet">
              <Feature
                title="Prosjektsiden"
                figures={[
                  {
                    src: "/ourspace/concept.webp",
                    alt: "Hele prosjektsiden i OurSpace, med mål, milepæler og prosjektoversikt.",
                    caption: "OurSpace sin prosjektside",
                  },
                ]}
              >
                <p>
                  Konseptet for OurSpace er at det skal være en applikasjon som
                  samler både klienter og designer i et felles grensesnitt.
                  OurSpace skal gi en oversikt over hvem som gjør hva, deadlines
                  og milepæler i et aktuelt prosjekt. Den som benytter seg av
                  plattformen kan holde oversikt over hvordan alle
                  prosjektdeltakere ligger an i prosjektplanen, som minimerer
                  forvirring og frustrasjon.
                </p>
              </Feature>

              <Feature
                title="Tidslinje som verktøy"
                figures={[
                  {
                    src: "/ourspace/timeline.webp",
                    alt: "Tidslinjen i grensesnittet, med fremdriften i et tenkt prosjekt.",
                    caption: "Tidslinjen",
                  },
                ]}
              >
                <p>
                  Tidslinjen skal gi en felles oversikt til alle som samarbeider
                  om et prosjekt. Dette gjelder både designteamet og klientene.
                  Vi mener denne løsningen kan hjelpe med å forhindre
                  kommunikasjonsproblemer og uklare arbeidsplaner. Kort sagt er
                  det en oversiktlig plan som skal gi alle muligheten til å få
                  lik innsikt i prosjektet.
                </p>
                <p>Tidslinjen inneholder:</p>
                <ul className="case-list">
                  <li>Milepæler</li>
                  <li>Møter</li>
                  <li>Oppdrag og oppgaver</li>
                  <li>Tilgang til filer</li>
                  <li>Chat mellom designere og klienter</li>
                </ul>
              </Feature>

              <Feature
                title="Chat i tidslinjen"
                figures={[
                  {
                    src: "/ourspace/chat.webp",
                    alt: "Funksjonen «Chat direkte fra tidslinjen» i OurSpace.",
                    caption: "Chatfunksjonen i tidslinjen",
                  },
                ]}
              >
                <p>
                  Designere og klienter kan chatte direkte fra tidslinjen, uten
                  å forlate oversikten over prosjektet.
                </p>
              </Feature>
            </FeatureGroup>
          }
        />

        <CaseChapter
          id="videre"
          number="04"
          title="Videre arbeid med OurSpace"
          surface="soft"
          lead="Det vi ville utviklet videre."
        >
          <CaseColumns
            items={[
              {
                title: "Et ryddigere grensesnitt",
                text: "For å forbedre prosjektet ville vi fokusert på å redusere mengden elementer i grensesnittet for å skape en mer ryddig og intuitiv opplevelse, spesielt på hjemmesiden. Dette inkluderer å prioritere informasjon og gjøre navigasjonen mer oversiktlig.",
              },
              {
                title: "Chat, klienter og tidslinje",
                text: "Videre ønsker vi å utvide chat-funksjonen for å inkludere flere interaktive elementer, som veiledning og støtte til brukerne. Vi ser også behov for å utforske klientenes perspektiv og behov enda grundigere, for bedre å tilpasse løsningen til deres forventninger. Et annet viktig fokusområde er å forenkle prosessen for å legge til elementer i tidslinjen, slik at brukerne kan tilpasse og administrere denne funksjonen på en enkel og effektiv måte.",
              },
            ]}
          />
        </CaseChapter>

        <CaseChapter
          id="bilder"
          number="05"
          title="Bilde fra prosjektperioden!"
        >
          <Figure
            src="/om-meg/gruppebilde.webp"
            alt="Gruppen rundt et bord fullt av skisser og lapper, sett ovenfra."
            caption="Jeg og gruppen min under en kreativ øvelse da vi jobbet med OurSpace, høsten 2023."
            captionBeside
          />
        </CaseChapter>
      </div>

      <RelatedProjects
        projects={[
          { thumbnail: thumbnails.corwell, title: "CorWell", link: "/corwell" },
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
          {
            thumbnail: thumbnails.portefoljeRedesign,
            title: "Redesign: portefølje",
            link: "/redesign-av-portefølje",
          },
        ]}
      />
    </main>
  );
}
