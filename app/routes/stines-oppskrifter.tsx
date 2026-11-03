import type { MetaFunction } from "@remix-run/node";
import { MdOutlineOpenInNew } from "react-icons/md";
import CoverImage from "~/components/cover-image/CoverImage";
import { thumbnails } from "~/data/thumbnails";
import ChapterNav, { type Chapter } from "~/components/chapter-nav/ChapterNav";
import CaseTitle from "~/components/case/CaseTitle";
import CaseBreak from "~/components/case/CaseBreak";
import CaseColumns from "~/components/case/CaseColumns";
import CaseImageBreak from "~/components/case/CaseImageBreak";
import { Feature, FeatureGroup } from "~/components/case/Feature";
import RelatedProjects from "~/components/case/RelatedProjects";
import { Chapter as CaseChapter } from "~/components/case/Chapter";

const chapters: Chapter[] = [
  { id: "intro", label: "Intro" },
  { id: "bakgrunn", label: "Bakgrunn" },
  { id: "utvikling", label: "Utvikling" },
  { id: "losning", label: "Løsning" },
  { id: "videre", label: "Veien videre" },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Stines oppskrifter - Stine Knutsen" },
    {
      name: "description",
      content:
        "En digital oppskriftsbok der du og vennene dine deler retter, planlegger uka og lager handleliste sammen.",
    },
  ];
};

export default function StinesOppskrifterRoute() {
  return (
    <main className="case case-oppskrifter">
      <CoverImage thumbnail={thumbnails.oppskrifter} />

      <div className="case-chapters">
        <ChapterNav chapters={chapters} />

        <CaseTitle
          id="intro"
          title="Stines oppskrifter"
          intro="Et personlig prosjekt som startet med at jeg savnet et sted å samle oppskriftene vennene mine anbefalte meg. Jeg ville gjøre det enklere å finne igjen gode retter, planlegge måltider og handle sammen."
          marginTitle="Om prosjektet"
          facts={[
            { label: "Plattform", value: "Nettside" },
            {
              label: "Lenke",
              value: (
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://stinesoppskrifter.no/"
                >
                  stinesoppskrifter.no
                  <MdOutlineOpenInNew />
                </a>
              ),
            },
            { label: "Periode", value: "Okt 2026 - pågående" },
            { label: "Oppdrag", value: "Freelance, eget prosjekt" },
            { label: "Verktøy", value: "Figma, Claude og MCP" },
          ]}
        />
        <CaseBreak eyebrow="I korte trekk">
          En nettside for deg som liker å lage mat, vil la deg inspirere av
          andre, eller bare ønsker en enklere ukeshandel.
        </CaseBreak>

        <CaseChapter
          id="bakgrunn"
          number="01"
          title="Bakgrunn"
          rule
          lead="Oppskriftene vi deler med hverandre, finnes bare i hodet."
        >
          <p>
            Jeg og venninnene mine deler stadig oppskrifter og tips til hva vi
            kan lage. Ofte blir jeg inspirert av noe en av dem har laget, men så
            glemmer jeg både hva retten het og hvordan den ble laget.
            Oppskriftene ender gjerne opp i gamle meldinger, notater eller
            screenshots.
          </p>
          <p>
            Derfor fikk jeg lyst til å lage en digital oppskriftsbok der vi kan
            samle våre egne oppskrifter, finne inspirasjon hos hverandre og
            slippe å lete etter ting vi har delt før.
          </p>
          <p>
            Etter hvert utviklet ideen seg til noe mer enn en oppskriftsbok. Jeg
            og samboeren min har lenge lett etter en god løsning for å planlegge
            ukas middager og lage handleliste sammen. Vi bruker mer tid på dette
            enn vi egentlig skulle ønske, men gjør det likevel fordi det hjelper
            oss å spare både tid og penger, samtidig som vi får planlagt sunne
            og varierte middager.
          </p>
          <p>
            Jeg ville derfor samle oppskrifter, middagsplanlegging og
            handlelister på ett sted, med mulighet for å dele alt sammen med
            andre.
          </p>
        </CaseChapter>

        <CaseImageBreak
          src="/stines-oppskrifter/bruddbilde-desktop.webp"
          mobileSrc="/stines-oppskrifter/bruddbilde-mobil.webp"
          background="#fff0fe"
          alt="Fra inspirasjon til handleliste, i tre steg. Finn oppskrifter: filtrer, utforsk eller finn igjen dine egne oppskrifter. Planlegg måltider: planlegg dagsmenyer og ukesmenyer, alene eller sammen med andre. Handleliste: lag handlelister automatisk basert på ukesmenyen, og del dem med andre."
          caption="Fra oppskrift til ukesmeny og handleliste."
        />

        <CaseChapter
          id="utvikling"
          number="02"
          title="Utvikling og fremgangsmåte"
          surface="dark"
          lead="En agentisk utviklingsprosess med et UX-perspektiv."
        >
          <CaseColumns
            items={[
              {
                title: "Utvikling",
                text: (
                  <>
                    <p>
                      Jeg ville bruke dette prosjektet til å bli bedre kjent med
                      Claude og utforske hvor langt jeg kunne komme med å bygge
                      en nettside ved hjelp av KI. Jeg har stått for designet i
                      Figma, mens Claude har skrevet koden og bygget løsningen.
                      Jeg har altså ikke kodet nettsiden selv.
                    </p>
                    <p>
                      Jeg koblet Claude til Figma gjennom MCP, slik at Claude
                      kunne lese designet og bruke det som utgangspunkt for
                      utviklingen. Underveis har jeg jobbet videre med
                      detaljene, blant annet hvordan filtrene på forsiden
                      fungerer, hvordan det er å legge ut en oppskrift, og
                      hvordan løsningen tilpasser seg mobil.
                    </p>
                    <p>
                      Jeg har også lagt inn innlogging med Google, slik at
                      brukerne enkelt kan logge inn og få tilgang til sine egne
                      oppskrifter, menyer og handlelister. Jeg ville at
                      nettsiden skulle være mer enn en visuell prototype, og at
                      det skulle være mulig å bruke funksjonene i praksis.
                    </p>
                  </>
                ),
              },
              {
                title: "Prosess",
                text: (
                  <>
                    <p>
                      Prosjektet har ikke fulgt en tradisjonell UX-prosess. Jeg
                      har ikke gjennomført brukerundersøkelser eller testet
                      prototyper før utviklingen, og den første versjonen ble
                      laget i samarbeid med Claude uten involvering av faktiske
                      brukere.
                    </p>
                    <p>
                      Nå har jeg begynt å teste nettsiden på vennene mine. Det
                      er gøy å se dem bruke noe som startet som min egen idé, og
                      få tilbakemeldinger på ting jeg ikke selv har tenkt på.
                      Det er også en påminnelse om hvor mye som dukker opp når
                      noen faktisk prøver å bruke løsningen, og ikke bare ser på
                      designet.
                    </p>
                    <p>
                      Løsningen testes og videreutvikles stadig, basert på både
                      mine egne og andres erfaringer med nettsiden. Den blir nok
                      aldri helt ferdig, men det er jo litt av poenget!
                    </p>
                  </>
                ),
              },
            ]}
          />
        </CaseChapter>

        <CaseChapter
          id="losning"
          number="03"
          title="Løsning"
          lead="Oppskrifter, middagsplanlegging og handlelister på ett sted."
          wide={
            <>
              <FeatureGroup title="Finn inspirasjon">
                <Feature
                  title="Finn oppskrifter som passer til deg og det du har lyst på"
                  figures={[
                    {
                      src: "/stines-oppskrifter/finn.webp",
                      alt: "Tre mobilskjermer: forsiden med spørsmålskortet «Hvor mange skal spise?» og filtre for oppskriftene, oppskriften Kyllingsuppe med forfatteren, og profilsiden med lista over brukere man følger.",
                      caption:
                        "Filtrer deg frem til oppskrifter eller la deg inspirere av feeden. Du kan også følge andre og enkelt finne igjen oppskriftene deres.",
                    },
                  ]}
                >
                  <p>
                    På forsiden kan du svare på noen enkle spørsmål for å finne
                    noe å lage. Du velger hva du har lyst på, hvilken stemning
                    du er i, hva du ønsker å få ut av måltidet og hvor mange som
                    skal spise. Oppskriftene filtreres mens du svarer.
                  </p>
                  <p>
                    Vil du heller lete selv, kan du søke eller bla gjennom
                    oppskriftene. Du kan også følge venner og enkelt finne
                    tilbake til oppskriftene deres.
                  </p>
                </Feature>

                <Feature
                  title="Tilpass oppskriftene"
                  figures={[
                    {
                      src: "/stines-oppskrifter/tilpass.webp",
                      alt: "Ingredienslisten til en kyllingsuppe med porsjonsvelger og fremgangsmåten ved siden av, valget «Er du opptatt av kalorier?» og oppskriftskortet for Kyllingsuppe med ca. 490 kcal.",
                      caption:
                        "Du kan enkelt justere mengdene når du følger en oppskrift, og få kaloriene regnet ut automatisk. Du kan også velge å skjule kaloriene helt.",
                    },
                  ]}
                >
                  <p>
                    Du kan endre antall porsjoner, og ingrediensmengdene regnes
                    automatisk om. Mangler du en ingrediens, kan du skrive inn
                    hva du bruker i stedet og justere mengden selv. Du kan også
                    tilbakestille endringene når du vil.
                  </p>
                  <p>
                    Kalorier er skjult som standard, men kan slås på dersom du
                    ønsker det. Informasjonen hentes fra Matvaretabellen.
                  </p>
                </Feature>
              </FeatureGroup>

              <FeatureGroup title="Lag og del oppskrifter">
                <Feature
                  title="Ta vare på oppskriftene dine og del dem med andre"
                  figures={[
                    {
                      src: "/stines-oppskrifter/lag-1.webp",
                      alt: "To mobilskjermer fra det å legge ut en oppskrift: steg 2 av 5 med ingredienser, og steg 4 av 5 med bilde av retten.",
                      caption:
                        "Når du legger inn oppskrifter, følger du en stegvis prosess som gjør det enkelt å lage ryddige og fullstendige oppskrifter.",
                    },
                    {
                      src: "/stines-oppskrifter/lag-2.webp",
                      alt: "To mobilskjermer: steg 5 av 5 med forhåndsvisning av oppskriften og knappene Lagre som utkast og Publiser, og feltet der man kobler en annen oppskrift til, her en focaccia.",
                      caption:
                        "Før du publiserer oppskriften, får du se en forhåndsvisning. Her kan du også tagge andre oppskrifter for å foreslå et komplett måltid.",
                    },
                  ]}
                >
                  <p>
                    Det skal være enkelt å dele egne oppskrifter i et ryddig
                    format. Derfor er det å legge ut en oppskrift delt inn i fem
                    steg: informasjon om retten, ingredienser, fremgangsmåte,
                    bilder og forhåndsvisning.
                  </p>
                  <p>
                    Du kan legge til bilder underveis i fremgangsmåten, velge om
                    oppskriften skal være offentlig eller privat, og lagre den
                    som et utkast hvis du vil fortsette senere.
                  </p>
                  <p>
                    Du kan også koble sammen oppskrifter for å foreslå tilbehør
                    eller sette sammen et helt måltid. For eksempel kan du koble
                    en oppskrift på focaccia til en suppe.
                  </p>
                </Feature>
              </FeatureGroup>

              <FeatureGroup title="Praktisk samarbeid">
                <Feature
                  title="Sett sammen måltidene for dagen eller uka, alene eller sammen med andre"
                  figures={[
                    {
                      src: "/stines-oppskrifter/planlegg.webp",
                      alt: "Tre mobilskjermer: dagsmenyen med Ratatouille, ukesmenyen med flere dager under hverandre, og skjemaet for å legge en rett til i menyen.",
                      caption:
                        "På Meny og handleliste-siden kan du planlegge både dags- og ukesmenyer, og dele dem med andre du skal spise sammen med. Du kan også legge inn måltider direkte i menyen.",
                    },
                  ]}
                >
                  <p>
                    Med dagsmenyen og ukesmenyen kan du planlegge hva du skal
                    spise, og hvor mange porsjoner du trenger. Du kan bruke
                    oppskrifter fra nettsiden eller legge inn andre måltider
                    selv.
                  </p>
                  <p>
                    Menyene kan også deles med andre, slik at flere kan se og
                    redigere planene sammen.
                  </p>
                </Feature>

                <Feature
                  title="Felles handleliste"
                  figures={[
                    {
                      src: "/stines-oppskrifter/handleliste.webp",
                      alt: "Fire mobilskjermer: skjemaet for en ny handleliste laget fra menyen, listen Ukeshandel med felt for egne varer, delingen av listen med venner, og en liste der 12 av 47 varer er krysset av.",
                      caption:
                        "Fra å lage en handleliste basert på ukesmenyen til å dele den med andre, kopiere som tekst eller rydde opp i listen.",
                    },
                  ]}
                >
                  <p>
                    Når du har planlagt måltidene, kan du lage en handleliste
                    basert på ukesmenyen. Ingrediensene samles, og mengdene
                    tilpasses antall porsjoner. Varene kategoriseres automatisk,
                    men du kan også lage en tom liste, for eksempel til en
                    hyttetur.
                  </p>
                  <p>
                    Handlelisten kan deles med andre, slik at alle ser de samme
                    endringene i sanntid. Du kan også kopiere listen som tekst
                    og dele den med personer som ikke har en bruker.
                  </p>
                </Feature>
              </FeatureGroup>
            </>
          }
        >
          <p>
            Jeg har laget en nettside der du kan samle egne oppskrifter, finne
            inspirasjon fra andre og planlegge hva du skal spise. Det sosiale er
            fortsatt viktig, men jeg ville også at løsningen skulle være nyttig
            i hverdagen, fra du lurer på hva du skal lage til du står i
            butikken.
          </p>
        </CaseChapter>

        <CaseChapter
          id="videre"
          number="04"
          title="Veien videre"
          surface="soft"
          lead="Fra nettside til app, og kanskje noe mer?"
        >
          <p>
            Planen er å gjøre nettsiden om til en app. Både menyen og
            handlelisten er verktøy man bruker gjennom dagen, og da hadde det
            vært fint å ha dem lett tilgjengelig på mobilen, særlig når man står
            i butikken.
          </p>
          <p>
            Jeg har også begynt å se for meg andre måter løsningen kan brukes
            på. For eksempel kunne dagsmenyen vært nyttig når man planlegger
            arrangementer med flere måltider, der man trenger å sette sammen
            retter og tilpasse porsjoner. Jeg kjenner ikke eventplanlegging
            særlig godt, så dette er foreløpig bare en idé. Men det hadde vært
            spennende å utforske om løsningen kan dekke behov jeg ikke har tenkt
            på fra før.
          </p>
          <p>
            Jeg vurderer også å endre navnet. Stines oppskrifter startet som en
            digital oppskriftsbok for meg og venninnene mine, men hvis flere
            skal bruke den, vil jeg gjerne finne et navn som passer for flere
            enn bare oss.
          </p>
          <p>
            Inntil videre fortsetter vi å bruke nettsiden selv.
            Tilbakemeldingene fra vennene mine, og ting vi savner når vi bruker
            den, blir utgangspunktet for hva jeg jobber videre med.
          </p>
        </CaseChapter>
      </div>

      <RelatedProjects
        projects={[
          { link: "/finn-eiendom" },
          { link: "/barnebank" },
          { link: "/corwell" },
          { link: "/ourspace" },
        ]}
      />
    </main>
  );
}
