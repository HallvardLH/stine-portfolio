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
          lead="Oppskrifter å la seg inspirere av, verktøy for hverdagen, og alt kan deles med vennene dine."
          wide={
            <>
              <FeatureGroup title="Oppskriftene">
                <Feature
                  title="Finn noe å lage"
                  figures={[
                    {
                      src: "/stines-oppskrifter/sporsmal.webp",
                      alt: "Forsiden med spørsmålskortet, der Middag er valgt og oppskriftene under er filtrert.",
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
                    kan sette egne mengder og tilbakestille når du vil.
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
                    lage mat til. Du kan også lage tomme lister, for eksempel
                    til en hyttetur.
                  </p>
                </Feature>

                <Feature
                  title="Kalorier bare hvis du vil"
                  figures={[
                    {
                      src: "/stines-oppskrifter/kalorier.webp",
                      alt: "Dagsmenyen med kalorier slått på, og valget «Er du opptatt av kalorier?» nederst.",
                      caption: "Dagsmenyen med kalorier slått på",
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

              <FeatureGroup title="Sammen">
                <Feature
                  title="Følgere og community"
                  figures={[
                    {
                      src: "/stines-oppskrifter/folg.webp",
                      alt: "Oppskriftskort med forfatteren nederst og en Følg-knapp, der én av dem er fulgt.",
                      caption:
                        "Forfatteren står på kortet, med en knapp for å følge",
                    },
                  ]}
                >
                  <p>
                    Under hver oppskrift står det hvem som har laget den, og du
                    kan følge dem. Da finner du igjen oppskriftene til vennene
                    dine, og de du følger kommer først i forslagene når du skal
                    dele en meny eller en handleliste.
                  </p>
                </Feature>

                <Feature title="Del menyen">
                  <p>
                    Du kan dele en dag eller en hel uke med andre, og ikke bare
                    med én person. Søk opp vennene dine, eller send en lenke. De
                    du deler med kan se og redigere menyen, og du kan når som
                    helst ta bort tilgangen igjen.
                  </p>
                </Feature>

                <Feature
                  title="Del handlelisten"
                  figures={[
                    {
                      src: "/stines-oppskrifter/delt-liste.webp",
                      alt: "En handleliste delt med tre personer, med initialene deres ved siden av Rediger og Del.",
                      caption: "En handleliste med tre medlemmer",
                    },
                    {
                      src: "/stines-oppskrifter/delt-dialog.webp",
                      alt: "Dialogen Rediger medlemmer, med eieren, to medlemmer og en invitasjon som venter på svar.",
                      caption:
                        "Eieren ser hvem som er med og kan fjerne tilgang",
                    },
                  ]}
                >
                  <p>
                    Inviter så mange du vil til en handleliste. Alle ser den
                    samme listen og kan krysse av og slette varer i sanntid, så
                    den som står i butikken ser hva som allerede er tatt.
                    Genialt for samboere!
                  </p>
                </Feature>
              </FeatureGroup>
            </>
          }
        />

        <CaseChapter
          id="utvikling"
          number="03"
          title="Utvikling"
          lead="Jeg har brukt Claude til å lage nettsiden."
        >
          <p>
            Jeg tenkte at dette prosjektet var en perfekt mulighet til å bli
            ordentlig kjent med Claude og hva Claude kan gjøre. Jeg har designet
            i Figma, og Claude har bygget siden i kode. Jeg har ikke skrevet
            koden selv.
          </p>
          <p>
            Claude er koblet til Figma gjennom MCP, slik at Claude kan lese
            designet og bygge siden ut fra det. Underveis har jeg finjustert
            detaljer som filtrene på forsiden, stegene i Lag oppskrift og
            hvordan siden fungerer på mobil.
          </p>
          <p>
            Prosjektet har ikke gått gjennom noen UX-prosess. Jeg har ikke gjort
            brukerundersøkelser eller testet prototyper på forhånd, og siden er
            så langt laget syntetisk sammen med Claude uten at ekte brukere har
            vært med.
          </p>
          <p>
            Nå er jeg i gang med å teste siden på vennene mine, og det er gøy å
            få tilbakemelding fra dem. De bruker den på ekte og ser ting jeg og
            Claude ikke har tenkt på.
          </p>
        </CaseChapter>

        <CaseChapter
          id="videre"
          number="04"
          title="Veien videre"
          surface="soft"
          lead="Planer om å gjøre Stines oppskrifter.no til en app."
        >
          <p>
            Planen er å gjøre nettsiden til en app. Handlelisten brukes i
            butikken og menyen i hverdagen, og begge er enklere å ha i lomma enn
            i en nettleser.
          </p>
          <p>
            Jeg vurderer også å endre navnet til noe som passer bedre. Stines
            oppskrifter startet som en oppskriftsbok for meg og veninnene mine,
            men hvis flere skal bruke den, bør navnet fungere for alle.
          </p>
          <p>
            Til da bruker vi den selv. Tilbakemeldingene fra vennene mine og det
            vi savner underveis blir det neste jeg tar tak i.
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
