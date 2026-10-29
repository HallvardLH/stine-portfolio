import type { MetaFunction } from "@remix-run/node";
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
  { id: "bygget", label: "Bygget" },
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
    <main className="case">
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
          lead="Vi foreslår alltid retter til hverandre, men oppskriftene finnes bare i hodet."
        >
          <p>
            Jeg og veninnene mine foreslår alltid retter til hverandre og blir
            inspirert av det vi lager. Problemet er at alle oppskriftene våre
            bare finnes i hodet. Jeg ønsket meg en slags digital oppskriftsbok
            der vi kan legge ut det vi lager og lese hverandres oppskrifter.
          </p>
          <p>
            Det jeg har laget er et community der man kan legge ut og lese
            venners oppskrifter, og la seg inspirere. I tillegg kan man
            planlegge måltidene for dagen og uka, og lage en handleliste som
            hele husholdningen bruker.
          </p>
        </CaseChapter>

        <CaseChapter
          id="losning"
          number="02"
          title="Løsning"
          surface="soft"
          lead="Oppskrifter å la seg inspirere av, og verktøy for å bruke dem i hverdagen."
          wide={
            <>
              <FeatureGroup title="Oppskriftene">
                <Feature
                  title="Finn noe å lage"
                  figures={[
                    {
                      src: "/stines-oppskrifter/sporsmal.webp",
                      alt: "Forsiden med spørsmålskortet som filtrerer oppskriftene.",
                      caption: "Spørsmålskortet på forsiden",
                    },
                  ]}
                >
                  <p>
                    På forsiden svarer du på noen få spørsmål, og oppskriftene
                    under filtreres underveis: hva du skal lage, hva du vil ha,
                    hva som er viben din om dagen, hva målet med måltidet er og
                    hvor mange som skal spise. Man kan også bare søke eller bla.
                  </p>
                </Feature>

                <Feature
                  title="Oppskriften"
                  figures={[
                    {
                      src: "/stines-oppskrifter/oppskrift.webp",
                      alt: "En oppskrift med ingredienser, porsjonsvalg og fremgangsmåte.",
                      caption:
                        "En oppskrift med porsjonsknapper og ingredienser",
                    },
                  ]}
                >
                  <p>
                    Mengdene regnes om når du endrer antall porsjoner. Har du en
                    annen ingrediens hjemme, kan du skrive hva du bruker, og du
                    kan sette egne mengder og tilbakestille når du vil. Under
                    oppskriften står det hvem som har laget den, og du kan følge
                    dem.
                  </p>
                </Feature>

                <Feature
                  title="Legg ut din egen"
                  figures={[
                    {
                      src: "/stines-oppskrifter/lag-oppskrift.webp",
                      alt: "Lag oppskrift, med stegindikator og skjema.",
                      caption: "Lag oppskrift i fem steg",
                    },
                  ]}
                >
                  <p>
                    Å legge ut en oppskrift går i fem steg: om retten,
                    ingredienser, fremgangsmåte, bilde og en forhåndsvisning.
                    Hvert steg i fremgangsmåten kan ha et eget bilde. Du velger
                    om oppskriften skal være offentlig eller privat, og kan
                    lagre den som utkast og fortsette senere.
                  </p>
                </Feature>
              </FeatureGroup>

              <FeatureGroup title="Hverdagen">
                <Feature
                  title="Dagsmeny og ukesmeny"
                  figures={[
                    {
                      src: "/stines-oppskrifter/meny.webp",
                      alt: "Ukesmenyen med måltidene for sju dager.",
                      caption: "Ukesmenyen",
                    },
                  ]}
                >
                  <p>
                    Du setter opp en meny for dagen eller uka ved å velge dag,
                    måltid og hvor mange porsjoner du skal spise. Det trenger
                    ikke være oppskrifter som ligger ute på siden. Du kan også
                    legge inn dine egne retter.
                  </p>
                </Feature>

                <Feature
                  title="Handleliste"
                  figures={[
                    {
                      src: "/stines-oppskrifter/handleliste.webp",
                      alt: "Handlelisten, laget ut fra ukesmenyen, med avkryssede varer.",
                      caption: "Handlelisten laget ut fra ukesmenyen",
                    },
                  ]}
                >
                  <p>
                    Handlelisten lages ut fra ukesmenyen. Ingrediensene fra
                    rettene slås sammen og regnes om etter hvor mange du skal
                    lage mat til. Du kan dele listen med andre, og alle kan
                    slette og krysse av varer i sanntid. Genialt for samboere!
                  </p>
                </Feature>

                <Feature
                  title="Kalorier bare hvis du vil"
                  figures={[
                    {
                      src: "/stines-oppskrifter/kalorier.webp",
                      alt: "Valget «Er du opptatt av kalorier?» med Bryr meg ikke som standard.",
                      caption: "Kalorivalget",
                    },
                  ]}
                >
                  <p>
                    Som standard vises ingen kalorier noe sted. Er du opptatt av
                    det, kan du slå det på, og da dukker kaloriene opp på
                    kortene, ingrediensene og i menyen. Tallene kommer fra
                    Matvaretabellen.
                  </p>
                </Feature>
              </FeatureGroup>
            </>
          }
        />

        <CaseChapter
          id="bygget"
          number="03"
          title="Bygget"
          lead="Designet i Figma, bygget i kode med Claude."
        >
          <p>
            Jeg og Claude har designet siden sammen. Claude har vært koblet til
            Figma gjennom MCP, slik at den kunne lese designet og bygge siden i
            kode ut fra det. Underveis har vi finpusset detaljer som filtrene på
            forsiden, stegene i Lag oppskrift og hvordan siden fungerer på
            mobil.
          </p>
        </CaseChapter>

        <CaseChapter
          id="videre"
          number="04"
          title="Veien videre"
          surface="soft"
          lead="Planer om å gjøre Stines oppskrifter.no til en app."
        >
          <p>Jeg vurderer å endre til et mer passende navn.</p>
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
