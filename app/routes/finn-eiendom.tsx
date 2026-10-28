import type { MetaFunction } from "@remix-run/node";
import CoverImage from "~/components/cover-image/CoverImage";
import { thumbnails } from "~/data/thumbnails";
import { MdOutlineOpenInNew } from "react-icons/md";
import ChapterNav, { type Chapter } from "~/components/chapter-nav/ChapterNav";
import CaseTitle from "~/components/case/CaseTitle";
import CaseBreak from "~/components/case/CaseBreak";
import CaseImageBreak from "~/components/case/CaseImageBreak";
import CaseQuote from "~/components/case/CaseQuote";
import CaseColumns from "~/components/case/CaseColumns";
import { Feature, FeatureGroup } from "~/components/case/Feature";
import RelatedProjects from "~/components/case/RelatedProjects";
import {
  Chapter as CaseChapter,
  ChapterBlock,
} from "~/components/case/Chapter";
import { FigurePair } from "~/components/case/Figure";

const chapters: Chapter[] = [
  { id: "intro", label: "Intro" },
  { id: "bakgrunn", label: "Bakgrunn" },
  { id: "innsikt", label: "Innsikt" },
  { id: "losning", label: "Løsning" },
  { id: "resultat", label: "Resultat" },
];

export const meta: MetaFunction = () => {
  return [
    { title: "FINN Eiendom - Stine Knutsen" },
    {
      name: "description",
      content:
        "Sommeren 2026 jobbet jeg som UX-intern hos FINN Eiendom (Vend). Sammen med tre utviklere utviklet vi et påmeldingsskjema for boligvisninger, samt løsninger for hvordan dette kunne skape verdi for både brukere og meglere.",
    },
  ];
};

export default function ProjectsLibaryRoute() {
  return (
    <main className="case">
      <CoverImage thumbnail={thumbnails.finn} />

      <div className="case-chapters">
        <ChapterNav chapters={chapters} />

        <CaseTitle
          id="intro"
          title="FINN Eiendom"
          intro="Sommeren 2026 jobbet jeg som UX-intern hos FINN Eiendom (Vend). Sammen med tre utviklere utviklet vi et påmeldingsskjema for boligvisninger, samt løsninger for hvordan dette kunne skape verdi for både brukere og meglere."
          marginTitle="Om prosjektet"
          facts={[
            { label: "Plattform", value: "Web" },
            { label: "Periode", value: "Sommeren 2026" },
            { label: "Rolle", value: "UX-intern" },
            { label: "Team", value: "Tre utviklere" },
            {
              label: "Les mer",
              value: (
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://vend.com/news/building-real-tools-for-real-buyers-inside-our-oslo-summer-internship"
                >
                  Om internshipet hos Vend (FINN)
                  <MdOutlineOpenInNew />
                </a>
              ),
            },
          ]}
        />

        <CaseBreak eyebrow="I korte trekk" placeholder>
          Skriv hovedpoenget fra prosjektet i én til to setninger her.
        </CaseBreak>

        <CaseChapter
          id="bakgrunn"
          number="01"
          title="Bakgrunn"
          rule
          lead="Hvorfor påmelding til visning trengte en ny løsning."
        >
          <p>
            Påmelding til boligvisninger ble innført under COVID-19 for å
            kontrollere antall besøkende og ha oversikt over hvem som hadde vært
            på visning. For meglerne viste påmeldingene seg samtidig å skape
            verdifulle leads, og ordningen ble derfor beholdt etter pandemien.
          </p>
          <p>
            I dag møter boligkjøpere mange ulike påmeldingsskjemaer med
            varierende krav til informasjon som åpner seg på meglernes
            nettsider. Dette skaper unødvendig friksjon, samtidig som FINN
            mister informasjon om hvorvidt brukerne faktisk melder seg på.
          </p>
          <p>
            I sommerprosjektet skulle vi derfor utforske hvordan en integrert
            påmeldingsløsning kunne forenkle opplevelsen for boligkjøpere,
            samtidig som den kunne skape ny verdi for meglere, boligkjøpere og
            FINN selv.
          </p>
        </CaseChapter>

        <CaseImageBreak
          src="/finn-eiendom/kartlegging.webp"
          alt="Kartlegging av påmeldingsskjemaer til visning hos norske eiendomsmeglere, blant andre Emera, PrivatMegleren, DNB Eiendom, Tinholt og Nordvik."
        />

        <CaseChapter
          id="innsikt"
          number="02"
          title="Innsikt"
          surface="dark"
          lead="Hva vi fant ut gjennom kartlegging og intervjuer."
          wide={
            <>
              <CaseColumns
                items={[
                  {
                    title: "Kartlegging",
                    text: (
                      <p>
                        Vi kartla de ulike påmeldingsskjemaene for å forstå
                        hvordan de fungerer i dag og hvilke elementer de
                        inneholder. Vi fant blant annet at skjemaene ofte
                        inneholder informasjon om tidspunkt for visning, antall
                        deltakere og diverse personopplysninger, i tillegg til
                        egne leads-seksjoner for tjenester som verdivurdering og
                        finansieringsbevis.
                      </p>
                    ),
                  },
                  {
                    title: "Geriljaintervjuer",
                    text: (
                      <>
                        <p>
                          Vi gjennomførte semistrukturerte geriljaintervjuer på
                          Karl Johan med mål om å forstå hvordan mennesker
                          opplever å melde seg på, delta på og organisere
                          påmeldte visninger.
                        </p>
                        <p>
                          Et tydelig ønske var å kunne gjennomføre påmeldingen
                          direkte på FINN uten unødvendige steg:
                        </p>
                      </>
                    ),
                  },
                  {
                    title: "Workshops",
                    text: (
                      <p>
                        Vi gjennomførte to workshops, én intern og én ekstern
                        med personer som hadde kjøpt bolig de siste to årene.
                        Gjennom Crazy 8&apos;s, fokusgruppe og idéutvikling
                        utforsket vi hvordan FINN kunne støtte brukeren gjennom
                        boligjakten.
                      </p>
                    ),
                  },
                ]}
              />

              <CaseQuote
                text="...Hvis du allerede er innlogget (på FINN), burde opplysningene dine fylles ut automatisk og sendes direkte til megleren, uten at du må bli sendt videre. Alt burde være samlet på ett sted."
                author="Intervjuobjekt, geriljaintervju"
              />

              <p className="case-wide-intro">
                Informasjonen ble analysert tematisk og brukt til å definere
                designimplikasjoner.
              </p>

              <FigurePair
                first={{
                  src: "/finn-eiendom/insight.webp",
                  caption:
                    "Analyse av data fra geriljaintervjuene. Dataene ble kategorisert og analysert tematisk for å definere designkrav.",
                }}
                second={{
                  src: "/finn-eiendom/workshop.webp",
                  caption:
                    "Tegninger fra den eksterne workshopen. Deltakerne tegnet blant annet visningskalendere, kommentarfunksjoner og muligheten til å rangere ulike aspekter ved boligen.",
                }}
              />

              <ChapterBlock title="Designimplikasjoner">
                <CaseColumns
                  items={[
                    {
                      title: "Behovet for oversikt",
                      text: (
                        <p>
                          Gjennom intervjuene ble det tydelig at mange manglet
                          et system for å organisere visninger. Samtlige
                          deltakere i den eksterne workshopen tegnet en form for
                          visningskalender, og flere ønsket mulighet til å
                          kommentere, rangere og sammenligne boliger.
                        </p>
                      ),
                    },
                    {
                      title: "Videre fra påmeldingen",
                      text: (
                        <p>
                          Dette ga oss et utgangspunkt for å utforske hvordan
                          FINN kunne støtte brukeren også etter selve
                          påmeldingen.
                        </p>
                      ),
                    },
                  ]}
                />
              </ChapterBlock>
            </>
          }
        />

        <CaseChapter
          id="losning"
          number="03"
          title="Løsning"
          lead="Påmelding på noen få trykk, direkte på FINN."
          wide={
            <>
              <FeatureGroup title="For boligkjøperen">
                <Feature
                  title="Påmeldingsskjema"
                  figures={[
                    {
                      src: "/finn-eiendom/pameldingsskjema.webp",
                      caption:
                        "Påmeldingsskjemaet. Venstre side viser mobildesignet, hvor skjemaet åpnes som en modal fra bunnen av skjermen. Høyre side viser desktopversjonen, hvor skjemaet åpnes som en drawer over annonseinnholdet.",
                    },
                    {
                      src: "/finn-eiendom/pameldingsskjema2.webp",
                      caption:
                        "Seksjonen «Opplysninger til megler» i påmeldingsskjemaet, med informasjon om meglerens tjenester.",
                    },
                  ]}
                >
                  <p>
                    Påmeldingsskjemaet åpnes som en drawer på høyre side av
                    annonsen. Dette lar brukeren beholde konteksten til
                    boligannonsen, samtidig som skjemaet kan holdes kort.
                  </p>
                  <p>
                    Dato og tidspunkt er organisert etter dag, med dropdown for
                    flere tidspunkt. Antall deltakere er inspirert av FINNs
                    eksisterende filterfunksjoner, mens personopplysninger
                    fylles inn automatisk fra brukerens FINN-konto.
                  </p>
                  <p>
                    Ettersom påmeldingsskjemaene også fungerer som en viktig
                    kilde til leads for meglere, var det viktig å videreføre
                    denne muligheten. Seksjonen ble visuelt skilt fra resten av
                    skjemaet med meglerens logo og informasjon, slik at det var
                    tydelig hvilke tjenester som kom fra megleren og ikke FINN.
                  </p>
                </Feature>

                <Feature
                  title="Mine visninger"
                  figures={[
                    {
                      src: "/finn-eiendom/mine-visninger.webp",
                      caption:
                        "Dashboardet “Mine visninger”. Venstre side viser listevisning, mens høyre side viser kalendervisning.",
                    },
                  ]}
                >
                  <p>
                    Et tydelig ønske fra workshopene var å ha ett samlet sted
                    for å organisere boligjakten. Dette ble utgangspunktet for
                    «Mine visninger», et dashboard som samler brukerens
                    visninger på ett sted.
                  </p>
                  <p>
                    Dashboardet gir brukeren oversikt over kommende og tidligere
                    visninger gjennom liste- og kalendervisning. Boligkortene
                    fremhever egenskaper som «best energimerking» eller «best
                    kvadratmeterpris», basert brukerens egne interesser.
                  </p>
                </Feature>

                <Feature
                  title="Mine visninger: enkeltannonse"
                  figures={[
                    {
                      src: "/finn-eiendom/mine-visninger2.webp",
                      caption:
                        "Arbeidsflaten for en valgt bolig. Venstre side viser grensesnittet, mens høyre side viser de ulike funksjonene på siden.",
                    },
                  ]}
                >
                  <p>
                    Ved å klikke på en av boligene kommer brukeren til en privat
                    arbeidsflate for å vurdere og sammenligne boliger. Her
                    samles nøkkelinformasjon, egne notater, fordeler og ulemper,
                    plantegning og relevante filer.
                  </p>
                  <p>
                    Vi utforsket også funksjoner som rangering av ulike aspekter
                    ved boligen og en AI-oppsummering av salgsoppgaven. Målet
                    var å støtte hele prosessen fra å organisere visninger til å
                    vurdere, sammenligne og ta beslutninger.
                  </p>
                </Feature>
              </FeatureGroup>

              <FeatureGroup title="For megleren">
                <Feature
                  title="Meglerinnsikt"
                  figures={[
                    {
                      src: "/finn-eiendom/meglerinnsikt.webp",
                      caption:
                        "Den nye fanen i Meglerinnsikt gir megleren et estimat på aktivitet og interesse for boligannonsen etter publisering.",
                    },
                  ]}
                >
                  <p>
                    Med innsikt fra tidligere meglere og FINN-ansatte som jobber
                    tett med meglerbransjen, utforsket jeg hvordan data fra
                    faktiske påmeldinger kan skape verdi for meglere.
                  </p>
                  <p>
                    Den nye fanen bygger videre på den eksisterende
                    Meglerinnsikt, og gir meglerne et bilde av forventet
                    visningsaktivitet. Dette inkluderer blant annet hva
                    potensielle kjøpere ser etter, hvilke prisnivåer de søker
                    innenfor og hvilke lignende boliger som skaper interesse.
                  </p>
                </Feature>

                <Feature
                  title="Meglerhub"
                  figures={[
                    {
                      src: "/finn-eiendom/meglerhub.webp",
                      caption:
                        "Det nye verktøyet i Meglerhub gir megleren innsikt i hvem som er påmeldt og hva de ser etter. Bildet til høyre viser mer detaljert data om de påmeldte.",
                    },
                  ]}
                >
                  <p>
                    I den eksisterende Meglerhub, meglernes verktøy for å
                    administrere boligannonser, utforsket jeg nye verktøy for
                    visningsinformasjon knyttet til den konkrete annonsen. Dette
                    inkluderer informasjon om forventet oppmøte, prisnivå og
                    hvor deltakerne ser etter bolig.
                  </p>
                  <p>
                    Jeg utforsket samtidig hvordan denne innsikten kan gis uten
                    å kompromittere personvernet. Data kan aggregeres og
                    anonymiseres, slik at megleren får innsikt i prisklasser,
                    områder og boligpreferanser uten tilgang til identifiserende
                    opplysninger.
                  </p>
                </Feature>

                <Feature
                  title="Kontakt leads"
                  figures={[
                    {
                      src: "/finn-eiendom/kontakte-leads.webp",
                      caption:
                        "Et verktøy som kobler meglere med brukere som er interessert i lignende boliger, dersom brukeren samtykker til dette.",
                    },
                  ]}
                >
                  <p>
                    Jeg utforsket også hvordan Meglerhub kan gi meglere mulighet
                    til å kontakte relevante leads. Verktøyet gjør det mulig å
                    nå ut til brukere som har vist interesse for lignende
                    boliger, samtidig som brukeren selv må velge om de ønsker å
                    motta denne typen informasjon.
                  </p>
                </Feature>
              </FeatureGroup>

              <FeatureGroup title="For begge">
                <Feature
                  title="Mine meglere"
                  figures={[
                    {
                      src: "/finn-eiendom/megler-bruker.webp",
                      caption:
                        "Venstre: Pop-up-modalen som vises etter en boligvisning. Brukeren kan bekrefte om de deltok på visningen og reservere seg mot videre kontakt fra megleren dersom de ikke lenger er interessert. Høyre: Funksjonen «Mine meglere», som lar brukeren holde oversikt over meglere de har vært i kontakt med, for eventuell senere bruk.",
                    },
                  ]}
                >
                  <p>
                    Gjennom dashboardet «Mine visninger» kan man registrere om
                    man faktisk deltok på visningen, gi tilbakemelding til
                    megleren og reservere seg mot å bli kontaktet. Under «Mine
                    meglere» kan tidligere meglere som har holdt visninger man
                    har deltatt på, lagres og rangeres. På den måten kan man
                    enkelt finne tilbake til en megler man har hatt en god
                    opplevelse med.
                  </p>
                </Feature>
              </FeatureGroup>
            </>
          }
        >
          <p>
            Skjemaet henter opplysningene fra brukerens profil, slik at
            påmeldingen tar noen få trykk. Meglerne får samtidig en oversikt
            over hvem som kommer.
          </p>
        </CaseChapter>

        <CaseChapter
          id="resultat"
          number="04"
          title="Resultat og læring"
          surface="soft"
          lead="Hva som ble resultatet, og hva jeg tar med meg videre."
        >
          <ChapterBlock title="Brukertesting">
            <p>
              Vi gjennomførte seks lavterskel brukertester av påmeldingsskjemaet
              og Dashboardet. Fem tester gikk gjennom begge løsningene, mens én
              hadde særlig fokus på tilgjengelighet og ble gjennomført med en
              blind tilgjengelighetsekspert i FINN ved bruk av skjermleser.
            </p>
            <p>
              Testene avdekket tilgjengelighetsutfordringer, mindre problemer i
              løsningen og ønsker om ytterligere funksjonalitet. Funnene ble
              brukt til videre iterasjoner og dokumentert som en del av
              prosjektets videre arbeid.
            </p>
          </ChapterBlock>

          <ChapterBlock title="Min læring fra prosessen">
            <CaseColumns
              items={[
                {
                  title: "Design i en stor organisasjon",
                  text: "Sommeren i FINN har gitt meg et mye bedre innblikk i hvordan det er å jobbe som designer i en stor og etablert plattform, og hvordan designarbeid fungerer i en slik organisasjon. Jeg har særlig lært hvor viktig det er å ta hensyn til ulike interessenter, både boligkjøpere, meglere og selskapets egne mål, når man utvikler nye løsninger for FINN Eiendom.",
                },
                {
                  title: "Selvstendighet og initiativ",
                  text: "Som prosjektets eneste UX-designer har jeg også fått mye erfaring med å jobbe selvstendig, ta initiativ og drive designprosessen fremover. En viktig læring har vært å vite når jeg bør finne ut av ting selv, og når jeg bør be om hjelp eller innspill.",
                },
                {
                  title: "Hva slags designer jeg vil bli",
                  text: "Alt i alt har sommeren utfordret meg som designer, gitt meg mye læring og ikke minst gjort meg mer bevisst på hva slags designer jeg ønsker å bli.",
                },
              ]}
            />
          </ChapterBlock>
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
            thumbnail: thumbnails.rema,
            title: "Redesign: Rema appen",
            link: "/æ",
          },
          { thumbnail: thumbnails.corwell, title: "CorWell", link: "/corwell" },
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
