import type { MetaFunction } from "@remix-run/node";
import { MdOutlineOpenInNew } from "react-icons/md";
import CoverImage from "~/components/cover-image/CoverImage";
import { thumbnails } from "~/data/thumbnails";
import ChapterNav, { type Chapter } from "~/components/chapter-nav/ChapterNav";
import CaseTitle from "~/components/case/CaseTitle";
import CaseBreak from "~/components/case/CaseBreak";
import { Feature, FeatureGroup } from "~/components/case/Feature";
import RelatedProjects from "~/components/case/RelatedProjects";
import { Chapter as CaseChapter } from "~/components/case/Chapter";

const chapters: Chapter[] = [
  { id: "intro", label: "Intro" },
  { id: "bakgrunn", label: "Bakgrunn" },
  { id: "losning", label: "Løsning" },
  { id: "utvikling", label: "Utvikling" },
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
          intro="En digital oppskriftsbok der du og vennene dine deler retter, planlegger uka og lager handleliste sammen."
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

        <CaseChapter
          id="losning"
          number="02"
          title="Løsning"
          surface="soft"
          lead="Oppskrifter, middagsplanlegging og handlelister på ett sted."
          wide={
            <FeatureGroup>
              <Feature
                title="Finn noe å lage"
                figures={[
                  {
                    src: "/stines-oppskrifter/sporsmal.webp",
                    alt: "Forsiden med søkefelt og spørsmålskortet «Hva skal du lage?», med oppskriftene som kort under.",
                    caption: "Spørsmålskortet på forsiden",
                  },
                ]}
                phones={[
                  {
                    src: "/stines-oppskrifter/mobil-forside.webp",
                    alt: "Forsiden på mobil, med søk og spørsmålskortet.",
                    caption: "Forsiden på mobil",
                  },
                  {
                    src: "/stines-oppskrifter/mobil-forside-liste.webp",
                    alt: "Oppskriften «Baked oats med bær» som kort på mobil.",
                    caption: "Oppskriftene filtreres mens du svarer",
                  },
                ]}
              >
                <p>
                  På forsiden kan du svare på noen enkle spørsmål for å finne
                  oppskrifter som passer til det du har lyst på. Du kan velge
                  hva du skal lage, hvilken stemning du er i, hva du ønsker å få
                  ut av måltidet og hvor mange som skal spise. Oppskriftene
                  filtreres mens du svarer.
                </p>
                <p>
                  Vil du heller lete selv, kan du søke eller bla gjennom
                  oppskriftene.
                </p>
              </Feature>

              <Feature
                title="Oppskrifter som tilpasser seg deg"
                figures={[
                  {
                    src: "/stines-oppskrifter/tilpasser.webp",
                    alt: "Porsjonsvelger og ingredienslisten til en focaccia, med fremgangsmåten ved siden av.",
                    caption: "Mengdene regnes om når du endrer porsjoner",
                  },
                ]}
                phones={[
                  {
                    src: "/stines-oppskrifter/mobil-oppskrift.webp",
                    alt: "Oppskriften «Baked oats med bær» på mobil, med forfatter, tider og bilde.",
                    caption: "Oppskriften på mobil",
                  },
                  {
                    src: "/stines-oppskrifter/mobil-tilpasser.webp",
                    alt: "Porsjonsvelger og ingredienser på mobil, med en egen mengde for gresk yoghurt.",
                    caption: "Porsjoner og ingredienser",
                  },
                ]}
              >
                <p>
                  Du kan endre antall porsjoner, og ingrediensmengdene regnes
                  automatisk om. Mangler du en ingrediens, kan du skrive inn hva
                  du bruker i stedet og justere mengden selv. Du kan også
                  tilbakestille endringene når du vil.
                </p>
              </Feature>

              <Feature
                title="Del det du lager"
                figures={[
                  {
                    src: "/stines-oppskrifter/lag-oppskrift.webp",
                    alt: "Første steg av fem når du legger ut en oppskrift, med skjema for å fortelle om retten.",
                    caption: "Steg 1 av 5 når du legger ut en oppskrift",
                  },
                ]}
              >
                <p>
                  Det skal være enkelt å dele egne oppskrifter i et ryddig
                  format. Derfor er det å legge ut en oppskrift delt inn i fem
                  steg: informasjon om retten, ingredienser, fremgangsmåte,
                  bilder og forhåndsvisning. Du kan legge til bilder underveis i
                  fremgangsmåten, velge om oppskriften skal være offentlig eller
                  privat, og lagre den som et utkast hvis du vil fortsette
                  senere.
                </p>
                <p>
                  Du kan også tagge andre oppskrifter for å foreslå tilbehør
                  eller sette sammen et helt måltid. For eksempel kan du koble
                  en oppskrift på focaccia til en suppe.
                </p>
              </Feature>

              <Feature
                title="Planlegg middager for dagen eller uka"
                figures={[
                  {
                    src: "/stines-oppskrifter/meny.webp",
                    alt: "Ukesmenyen med frokost, lunsj og middag fordelt på dagene.",
                    caption: "Ukesmenyen",
                  },
                ]}
                phones={[
                  {
                    src: "/stines-oppskrifter/mobil-dag.webp",
                    alt: "Dagsmenyen på mobil, med lunsj og middag og en knapp for å legge til flere retter.",
                    caption: "Dagsmenyen",
                  },
                  {
                    src: "/stines-oppskrifter/mobil-uke.webp",
                    alt: "Ukesmenyen på mobil, med dagene under hverandre.",
                    caption: "Ukesmenyen",
                  },
                ]}
              >
                <p>
                  Med dagsmenyen og ukesmenyen kan du planlegge hva du skal
                  spise, og hvor mange porsjoner du trenger. Du kan bruke
                  oppskrifter fra nettsiden eller legge inn retter du lager
                  selv.
                </p>
                <p>
                  Du kan også dele menyen med andre, slik at flere kan se og
                  redigere planene sammen. Jeg og samboeren min planlegger
                  allerede middagene våre hver uke, men foreløpig gjør vi det i
                  et delt notat på telefonen.
                </p>
              </Feature>

              <Feature
                title="Handlelisten lager seg selv"
                figures={[
                  {
                    src: "/stines-oppskrifter/delt-liste.webp",
                    alt: "Handlelisten Ukeshandel med varer sortert etter kategori, avkryssede varer og tre personer som deler listen.",
                    caption: "Handlelisten laget ut fra ukesmenyen",
                  },
                ]}
                phones={[
                  {
                    src: "/stines-oppskrifter/mobil-handleliste.webp",
                    alt: "Handlelisten på mobil, med varer under Frukt og grønt og noen avkrysset.",
                    caption: "Handlelisten på mobil",
                  },
                ]}
              >
                <p>
                  Når du har planlagt måltidene, kan du lage en handleliste
                  basert på ukesmenyen. Ingrediensene samles, og mengdene
                  tilpasses antall porsjoner. Varene kategoriseres automatisk,
                  og du kan også lage en tom liste, for eksempel til en
                  hyttetur.
                </p>
                <p>
                  Handlelisten kan deles med så mange du vil. Alle ser den samme
                  listen og kan krysse av eller fjerne varer i sanntid. Da
                  slipper dere å sende meldinger om hva som mangler, eller lure
                  på hva den andre allerede har handlet. Praktisk for samboere!
                </p>
              </Feature>

              <Feature
                title="Kalorier hvis du ønsker det"
                figures={[
                  {
                    src: "/stines-oppskrifter/kalorier.webp",
                    alt: "Oppskriftskortene med kalorier slått på, og valget «Er du opptatt av kalorier?» øverst til høyre.",
                    caption: "Kalorier på oppskriftskortene",
                  },
                ]}
                phones={[
                  {
                    src: "/stines-oppskrifter/mobil-kalorier.webp",
                    alt: "Valget «Er du opptatt av kalorier?» med «Vis meg» og «Bryr meg ikke», og oppskriften «Baked oats med bær» med 269 kcal på kortet.",
                    caption: "Kalorier på oppskriftskortet",
                  },
                ]}
              >
                <p>
                  Kalorier er skjult som standard. Hvis du vil følge med på dem,
                  kan du slå dem på og få informasjonen vist på oppskriftskort,
                  i ingredienslistene og i menyen. Tallene hentes fra
                  Matvaretabellen.
                </p>
              </Feature>

              <Feature
                title="Finn igjen oppskriftene til vennene dine"
                figures={[
                  {
                    src: "/stines-oppskrifter/folg.webp",
                    alt: "Oppskriftssiden med forfatteren og en knapp for å følge dem.",
                    caption: "Du kan følge forfatteren av en oppskrift",
                  },
                ]}
              >
                <p>
                  Du kan følge andre brukere og enkelt finne oppskriftene deres
                  igjen. Oppskriftene fra dem du følger, prioriteres også når du
                  skal sette sammen en meny eller lage en handleliste.
                </p>
                <p>
                  På den måten handler nettsiden ikke bare om å finne nye
                  oppskrifter, men også om å ta vare på maten vi lager og
                  inspirerer hverandre med.
                </p>
              </Feature>
            </FeatureGroup>
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
          id="utvikling"
          number="03"
          title="Utvikling"
          lead="Jeg har designet i Figma og brukt Claude til å kode nettsiden."
        >
          <p>
            Jeg ville bruke dette prosjektet til å bli bedre kjent med Claude og
            utforske hvor langt jeg kunne komme med å bygge en nettside ved
            hjelp av KI. Jeg har stått for designet i Figma, mens Claude har
            skrevet koden og bygget løsningen. Jeg har altså ikke kodet
            nettsiden selv.
          </p>
          <p>
            Jeg koblet Claude til Figma gjennom MCP, slik at Claude kunne lese
            designet og bruke det som utgangspunkt for utviklingen. Underveis
            har jeg jobbet videre med detaljene, blant annet hvordan filtrene på
            forsiden fungerer, hvordan det er å legge ut en oppskrift, og
            hvordan løsningen tilpasser seg mobil.
          </p>
          <p>
            Jeg har også lagt inn innlogging med Google, slik at brukerne enkelt
            kan logge inn og få tilgang til sine egne oppskrifter, menyer og
            handlelister. Jeg ville at nettsiden skulle være mer enn en visuell
            prototype, og at det skulle være mulig å bruke funksjonene i
            praksis.
          </p>
          <p>
            Prosjektet har ikke fulgt en tradisjonell UX-prosess. Jeg har ikke
            gjennomført brukerundersøkelser eller testet prototyper før
            utviklingen, og den første versjonen ble laget i samarbeid med
            Claude uten involvering av faktiske brukere.
          </p>
          <p>
            Nå har jeg begynt å teste nettsiden på vennene mine. Det er gøy å se
            dem bruke noe som startet som min egen idé, og få tilbakemeldinger
            på ting jeg ikke selv har tenkt på. Det er også en påminnelse om
            hvor mye som dukker opp når noen faktisk prøver å bruke løsningen,
            og ikke bare ser på designet.
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
