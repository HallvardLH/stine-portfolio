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
import { FigurePair, FigureRow } from "~/components/case/Figure";

const chapters: Chapter[] = [
  { id: "intro", label: "Intro" },
  { id: "bakgrunn", label: "Bakgrunn" },
  { id: "innsikt", label: "Innsikt" },
  { id: "design", label: "Design" },
  { id: "losning", label: "Løsning" },
  { id: "laering", label: "Læring" },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Æ-redesign - Stine Knutsen" },
    {
      name: "description",
      content:
        "Et UX-redesign av Rema 1000s kundeklubbapp Æ. Designet av Stine Knutsen",
    },
  ];
};

// FORSLAG: tekst som er markert med FORSLAG er skrevet av Claude og skal
// gås gjennom sammen (i korte trekk, ingresser, kolonnetitler og bildetekster).
export default function ProjectsLibaryRoute() {
  return (
    <main className="case">
      <CoverImage thumbnail={thumbnails.rema} />

      <div className="case-chapters">
        <ChapterNav chapters={chapters} />

        <CaseTitle
          id="intro"
          title="Redesign av Æ-appen"
          intro="Et redesignprosjekt som har som mål å forbedre brukervennligheten i en av Norges mest populære medlemsklubbsapper."
          marginTitle="Om prosjektet"
          facts={[
            { label: "Plattform", value: "Mobilapp" },
            { label: "Periode", value: "Sep - nov 2024" },
            { label: "Gjelder", value: "Rema 1000 sin kundeklubbapp Æ" },
          ]}
        />

        {/* FORSLAG */}
        <CaseBreak eyebrow="I korte trekk" placeholder>
          Lettere scanning, tydeligere rabatter og færre feiltrykk i Æ-appen.
        </CaseBreak>

        <CaseChapter
          id="bakgrunn"
          number="01"
          title="Bakgrunn for redesign"
          rule
          // FORSLAG
          lead="Hvorfor Æ-appen trengte et redesign."
        >
          <p>
            Prosjektet startet med å avdekke flere kritiske utfordringer i
            Æ-appen gjennom brukerundersøkelser og testing. Brukerne opplevde
            blant annet problemer med navigasjon, manglende personalisering og
            uklarhet rundt aktivering av rabatter. I tillegg skapte vage
            feilmeldinger og tekniske utfordringer, som at strekkoder forsvant
            og krevde ny innlogging, frustrasjon hos brukerne.
          </p>
          <p>
            Appens sterke fokus på merkevarebygging gikk også på bekostning av
            brukersentrert informasjon. Med disse innsiktene som utgangspunkt,
            satte vi i gang arbeidet med å heve brukervennligheten og skape en
            bedre opplevelse for alle Æ-brukere.
          </p>
        </CaseChapter>

        <CaseChapter
          id="innsikt"
          number="02"
          title="Evaluering og innsikt"
          surface="dark"
          // FORSLAG
          lead="Hva konkurranseanalysen, evalueringen og brukertestingen avdekket."
          wide={
            <>
              <CaseColumns
                items={[
                  {
                    // FORSLAG
                    title: "Konkurranseanalyse",
                    text: (
                      <p>
                        For å forstå markedet og brukernes forventninger startet
                        vi med en konkurranseanalyse. Dette ga oss innsikt i
                        trender og muligheter for at Æ-appen kunne skille seg
                        ut.
                      </p>
                    ),
                  },
                  {
                    // FORSLAG
                    title: "Heuristisk evaluering",
                    text: (
                      <p>
                        Den heuristiske evalueringen avdekket designproblemer
                        basert på etablerte prinsipper, som manglende
                        flerspråklig støtte, uklare feilbeskjeder og
                        navigasjonsutfordringer.
                      </p>
                    ),
                  },
                  {
                    // FORSLAG
                    title: "Brukertesting",
                    text: (
                      <p>
                        Brukertesting med «tenk-høyt»-metoden ga oss verdifull
                        innsikt i brukernes faktiske opplevelse av appen.
                      </p>
                    ),
                  },
                ]}
              />

              <ChapterBlock title="Evalueringens resultater">
                <p className="case-wide-intro">
                  Gjennom testing oppdaget vi at brukerne slet med scanning av
                  rabattkoder i butikk, samt at personlige rabatter var
                  vanskelige å finne. Hjemmesiden føltes overfylt, og
                  plasseringen av «logg ut»- og «slett konto»-knappene skapte
                  risiko for feiltrykk. Disse funnene har vært avgjørende i
                  utformingen av et mer brukervennlig redesign.
                </p>
              </ChapterBlock>
            </>
          }
        />

        <CaseChapter
          id="design"
          number="03"
          title="Design"
          // FORSLAG
          lead="Fra Crazy 8's og wireframes til et designsystem tro mot Rema 1000."
          wide={
            <>
              <FigurePair
                first={{
                  src: "/æ/æ-wireframes.webp",
                  alt: "Et bord med tegninger fra Crazy 8's.",
                  caption: "Crazy 8's med prosjektgruppen",
                }}
                second={{
                  src: "/æ/wireframes.webp",
                  alt: "Wireframes av designet i Figma.",
                  caption: "Wireframes laget i Figma",
                }}
              />

              <ChapterBlock title="Designsystem og visuell profil">
                <div className="case-wide-intro case-column-text">
                  <p>
                    For å sikre at prototypen var i tråd med Rema 1000s visuelle
                    profil, utviklet vi et designsystem. Dette inkluderte
                    typografi, fargepalett, ikoner og designkomponenter, basert
                    på eksisterende elementer fra Æ-appen. Ved å matche fonter,
                    størrelser og farger direkte fra skjermbilder, beholdt vi
                    den gjenkjennelige merkevarefølelsen samtidig som vi
                    forbedret brukervennligheten.
                  </p>
                  <p>
                    Ved å følge etablerte designprinsipper og opprettholde
                    visuell konsistens, gjorde vi appen intuitiv og enkel å
                    bruke, uten å miste forbindelsen til Rema 1000s identitet.
                  </p>
                </div>
              </ChapterBlock>

              <FigureRow
                figures={[
                  {
                    src: "/æ/typography.webp",
                    alt: "Oversikt over typografien som er brukt i designet, laget i Figma, med font og ulike skriftstørrelser.",
                    caption: "Typografien for redesignet",
                  },
                  {
                    src: "/æ/primary-colors.webp",
                    alt: "Oversikt over primærfargene i designet, med farger og tilhørende koder.",
                    caption: "Primærfargene for redesignet",
                  },
                  {
                    src: "/æ/accent.webp",
                    alt: "Oversikt over aksentfargene i designet, med farger og tilhørende koder.",
                    caption: "Aksentfargene for redesignet",
                  },
                ]}
              />

              <FeatureGroup title="Prototyping">
                <Feature
                  title="Prototypens første iterasjon"
                  figures={[
                    {
                      src: "/æ/first-iteration.webp",
                      alt: "Tre mobilskjermer som hver viser en del av appen: hjemmesiden og to deler av innstillingssiden.",
                      caption:
                        "Første designiterasjon av hjemmesiden og profilsiden i appen",
                    },
                  ]}
                >
                  <p>
                    Første iterasjon bygde på wireframene, med bilder, riktig
                    typografi og fargepalett. Denne iterasjonen ga oss en mer
                    realistisk visning av ideene våre og fungerte som
                    utgangspunkt for videre diskusjon. Basert på
                    tilbakemeldingene bestemte vi at prototypen skulle gjøre det
                    enklere å bruke appens hovedfunksjoner, altså scanning av
                    medlemskode, som vi mener bør være tilgjengelig i alle
                    grensesnitt.
                  </p>
                </Feature>
              </FeatureGroup>
            </>
          }
        >
          <ChapterBlock title="Lo-fi prototyping og wireframes">
            <p>
              Etter å ha laget skisser i designøvelsen Crazy 8&apos;s, startet
              vi arbeidet med wireframes. Disse representerte en hybrid av
              gruppens beste ideer fra øvelsen. Wireframes fungerer som et
              «designkart» som visualiserer struktur og innholdshierarki i
              prototypen. Våre wireframes var lavoppløselige, med fokus på
              struktur fremfor detaljer, og inkluderte skisser for både
              hjemmesiden og profilsiden.
            </p>
          </ChapterBlock>
        </CaseChapter>

        <CaseChapter
          id="losning"
          number="04"
          title="Løsning"
          surface="soft"
          // FORSLAG
          lead="En ryddigere hjemmeside, tydeligere rabatter og scanning som alltid er tilgjengelig."
          wide={
            <>
              <FeatureGroup title="Hjem og handleturer">
                <Feature
                  title="Hjemmesiden"
                  figures={[
                    {
                      src: "/æ/homepage.webp",
                      alt: "To mobilskjermer: hjemmesiden i appen og siden som viser rabattene dine.",
                      caption:
                        "Hjemmesiden viser personlige rabatter øverst for enkel tilgang, med en snarvei i navigasjonsfeltet.",
                    },
                  ]}
                >
                  <p>
                    Den tidligere hjemmesiden i Æ-appen var rotete og skapte
                    forvirring blant brukerne. For å gjøre den mer oversiktlig
                    flyttet vi tilbud og kampanjer til en egen side, samtidig
                    som vi beholdt dem synlige øverst på hjemmesiden. Vi la også
                    til en snarvei i navigasjonsfeltet for rask tilgang.
                  </p>
                </Feature>

                <Feature
                  title="Varsler"
                  figures={[
                    {
                      src: "/æ/notifications.webp",
                      alt: "To mobilskjermer, en som viser rabattene dine og en som viser varslingssenteret.",
                      caption:
                        "Varsler er plassert i sidemenyen og kan nås via bjelleikonet øverst til høyre. Dette holder rabatter i fokus og sørger for at varsler er organisert separat.",
                    },
                  ]}
                >
                  <p>
                    Brukertesting avdekket utfordringer med appens
                    varslingssystem, der uåpnede varsler var uklare og
                    vanskelige å håndtere. Løsningen ble et bjelleikon øverst i
                    hjørnet, som åpner et varslingssenter med tydelige
                    forklaringer på hvert varsel. Dette forbedrer både
                    brukervennligheten og effektiviteten.
                  </p>
                </Feature>

                <Feature
                  title="Handleturer og kvitteringer"
                  figures={[
                    {
                      src: "/æ/receipt-old-vs-new.webp",
                      alt: "To mobilskjermer: dagens design av Æ-appen og den nye versjonen, begge med kvitteringsdelen av appen.",
                    },
                    {
                      src: "/æ/receipt.webp",
                      alt: "Tre mobilenheter, hvor den ene viser det opprinnelige grensesnittets «handleturer»-side og de to andre viser redesignet.",
                      caption:
                        "Elementene er gruppert i tydelige seksjoner for å redusere kognitiv belastning",
                    },
                  ]}
                >
                  <p>
                    Funksjonen for handleturer beholder mye av sin opprinnelige
                    struktur, men med forbedringer som gir en bedre
                    brukeropplevelse. Vi har lagt større vekt på å vise hvor mye
                    penger brukerne har spart, med en lenke til «Innsikt» som
                    gir en detaljert oversikt over utgifter hos Rema 1000.
                  </p>
                  <p>
                    Handleturer og kvitteringer er nå tydeligere organisert, noe
                    som gjør det enklere å navigere og gjennomgå tidligere kjøp.
                    Prototypen vår introduserer også en søkefunksjon som lar
                    brukerne filtrere handleturer etter dato. Dette følger Jakob
                    Nielsens heuristikk om fleksibilitet og effektivitet, som
                    understreker viktigheten av å la brukerne skreddersy
                    opplevelsen sin.
                  </p>
                </Feature>
              </FeatureGroup>

              <FeatureGroup title="Rabatter og scanning">
                <Feature
                  title="Tiltak for å heve brukervennligheten"
                  figures={[
                    {
                      src: "/æ/discounts.webp",
                      alt: "To skjermer som viser det opprinnelige grensesnittets «Personlige rabatter»-side og den redesignede siden.",
                      caption:
                        "Personlige rabatter vises i aktivert tilstand, med gul kant som fremhever aktiverte rabatter som en visuell påminnelse.",
                    },
                  ]}
                >
                  <p>
                    Listen over tilbud i Æ-appen var tidligere ufullstendig og
                    vanskelig å navigere. For å løse dette lagde vi en egen side
                    for rabatter, som vises i «Priskutt» i verktøylinjen.
                    Aktivering av personlige tilbud i redesignet er også mer
                    intuitiv, med en knapp som får gul kant når priskuttene er
                    aktivert, slik at statusen blir umiddelbart synlig for
                    brukeren. Dette følger Nielsens prinsipp om «Recognition
                    Rather Than Recall», som reduserer brukernes kognitive
                    belastning.
                  </p>
                  <p>
                    Vi introduserte også å vise rabatter i kroner i stedet for
                    prosent, for bedre oversikt. Pågående kampanjer og generelle
                    tilbud er nå tilgjengelige direkte på hjemmesiden for enkel
                    tilgang.
                  </p>
                </Feature>

                <Feature
                  title="Lettere scanning"
                  figures={[
                    {
                      src: "/æ/barcode.webp",
                      alt: "Den nye «strekkode»-funksjonen i grensesnittet, med både horisontal og vertikal visning av strekkoden.",
                      caption:
                        "Strekkoden er tilgjengelig i både vertikal og horisontal visning",
                    },
                  ]}
                >
                  <p>
                    Våre funn viste at mange Æ-brukere opplever utfordringer når
                    de skanner strekkoden sin i kassen. Det stilles høye krav
                    til multitasking, som å håndtere varer, betaling og skanning
                    av koden på kort tid, som ofte fører til stress og kognitiv
                    overbelastning. Denne overbelastningen gjør det lett å
                    glemme eller slite med strekkoden, noe som resulterer i
                    frustrasjon og tapte rabatter.
                  </p>
                  <p>
                    For å løse dette sørget vi for at strekkoden alltid er
                    synlig på tvers av alle skjermer, og vi lagde to nye,
                    dedikerte visninger for medlemskapskoden. Disse visningene,
                    som kan nås ved å klikke på strekkodeikonet til venstre i
                    toppmenyen, er tilgjengelige i både liggende og stående
                    format som gjør skanningen mye enklere. De inkluderer også
                    en funksjon som lyser opp skjermen for bedre synlighet.
                  </p>
                </Feature>
              </FeatureGroup>

              <FeatureGroup title="Profil">
                <Feature
                  title="Redusert risiko for feiltrykk"
                  figures={[
                    {
                      src: "/æ/profile-top.webp",
                      alt: "Øverste del av profilsiden, både i det opprinnelige og det redesignede grensesnittet.",
                    },
                    {
                      src: "/æ/profile-bottom.webp",
                      alt: "Nederste del av profilsiden, både i det opprinnelige og det redesignede grensesnittet.",
                      caption:
                        "Den redesignede profilsiden har et klart og intuitivt oppsett for å redusere kognitiv belastning.",
                    },
                  ]}
                >
                  <p>
                    Profilsiden i Æ-appen var tidligere uorganisert og uklar.
                    For å forbedre den introduserte vi tre distinkte seksjoner:
                    snarveier, innstillinger og hjelp og tilbakemelding. Vi
                    fokuserte på å overholde Gestalt-prinsippet om nærhet, for å
                    gruppere relaterte elementer for enklere navigasjon.
                    Snarveiseksjonen hjelper brukerne med rask tilgang til
                    appens funksjoner, mens innstillingsseksjonen nå inkluderer
                    nye alternativer som språkvalg, tilpasning av hjemmeside og
                    administrasjon av varsler.
                  </p>
                  <p>
                    Vi tok også tak i et viktig problem med plasseringen av
                    alternativene «Slett meg» og «Logg ut», som tidligere så ut
                    som lenker. Derfor plasserte vi dem i separate knapper med
                    fargekoding for å redusere risikoen for utilsiktede feil.
                    Disse endringene har som mål å gjøre profilsiden mer
                    intuitiv og brukervennlig.
                  </p>
                </Feature>
              </FeatureGroup>

              <FeatureGroup title="Andre funksjoner">
                <Feature
                  title="Handleliste"
                  figures={[
                    {
                      src: "/æ/shopping-list.webp",
                      alt: "Mobilskjerm som viser den nye handlelistefunksjonen.",
                      caption: "Handlelistefunksjonen",
                    },
                  ]}
                >
                  <p>
                    Redesignet introduserer en handleliste, hvor brukerne kan
                    lage og dele personlige lister for enklere, samarbeidsbasert
                    handel. Brukere kan legge til varer, redigere listene sine,
                    dele lister og krysse av produkter i butikken, noe som gjør
                    handleopplevelsen mer organisert og effektiv.
                  </p>
                </Feature>

                <Feature
                  title="Innsikter"
                  figures={[
                    {
                      src: "/æ/insights.webp",
                      alt: "Den nye innsiktsfunksjonen, med ulik statistikk fra tidligere handleturer.",
                      caption: "Innsikter-siden",
                    },
                  ]}
                >
                  <p>
                    En ny «Innsikt»-seksjon fremhever brukerens besparelser og
                    kjøpsmønstre med lettfattelige grafer og datasammendrag, som
                    hjelper dem med å følge med på utgiftene sine og ta
                    informerte beslutninger.
                  </p>
                </Feature>

                <Feature
                  title="Widgets"
                  figures={[
                    {
                      src: "/æ/widget.webp",
                      alt: "Mobilskjerm som viser «tilpass hjemmesiden din», hvor brukeren kan legge til widgets.",
                      caption: "Tilpass hjemskjerm-siden",
                    },
                  ]}
                >
                  <p>
                    Widgets gir brukerne muligheten til å tilpasse hjemsiden,
                    slik at de kan prioritere funksjoner som kvitteringer,
                    innsikter og personlige tilbud. Denne graden av
                    personalisering forbedrer brukervennligheten og gir en mer
                    personalisert og effektiv opplevelse.
                  </p>
                </Feature>
              </FeatureGroup>
            </>
          }
        />

        <CaseChapter
          id="laering"
          number="05"
          title="Tilegnet erfaring fra prosjektet"
          surface="dark"
          // FORSLAG
          lead="Hva redesignet har lært meg, og hva jeg ville forbedret."
        >
          <CaseColumns
            items={[
              {
                // FORSLAG
                title: "Det jeg har lært",
                text: "Redesignet av Æ-appen har vært en lærerik erfaring, hvor jeg har fått øvd på brukerforskning, prototyping og testing. Jeg har styrket forskningsferdighetene mine, spesielt innen brukertesting og heuristisk evaluering, og ikke minst forbedret praktiske ferdigheter i Figma, som Auto Layout og designsystemer.",
              },
              {
                // FORSLAG
                title: "Hva jeg ville forbedret",
                text: "I ettertid ser jeg forbedringsmuligheter, som å tydeliggjøre avhukede elementer på handlelisten og gjøre innsiktssiden mer intuitiv. Man føler seg aldri helt ferdig med et prosjekt, og design kan alltid videreutvikles for å forbedre brukervennlighet.",
              },
            ]}
          />
        </CaseChapter>
      </div>

      <RelatedProjects
        projects={[
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
            thumbnail: thumbnails.portefoljeRedesign,
            title: "Redesign: portefølje",
            link: "/redesign-av-portefølje",
          },
          { thumbnail: thumbnails.corwell, title: "CorWell", link: "/corwell" },
        ]}
      />
    </main>
  );
}
