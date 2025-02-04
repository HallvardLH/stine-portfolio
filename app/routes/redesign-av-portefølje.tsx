import type { MetaFunction } from "@remix-run/node";
import CoverImage from "~/components/cover-image/CoverImage";
import StandaloneParagraph from "~/components/project-sections/StandaloneParagraph";
import ParagraphWithImage from "~/components/project-sections/ParagraphWithImage";

export const meta: MetaFunction = () => {
    return [
        { title: "Redesign av portefølje - Stine Knutsen" },
        { name: "description", content: "Redesign av en front-end utviklers portefølje for å effektivt fremheve arbeidet hans." },
    ];
};

export default function ProjectsLibaryRoute() {
    return (
        <main>
            <CoverImage src="/portefølje-redesign/thumbnail.png" colorScheme="portfolio-redesign-scheme" />
            <div className="gutter project-section portfolio-redesign-scheme">
                <StandaloneParagraph
                    textSection={
                        <>
                            <h1 className="heading">
                                Redesign av portefølje
                            </h1>
                            <p className="text-medium">
                                Jeg ble kontaktet av en front-end utvikler som ønsket et redesign av porteføljen sin. Målet var å skape en stilren, brukervennlig og profesjonell plattform som fremhever utviklerens ferdigheter på en tydelig og engasjerende måte.
                            </p>
                        </>
                    }
                />

                <div>
                    <div className="project-info">
                        <p style={{ color: "var(--corwell-scheme-text) !important" }} className="text-large">Plattform:</p>
                        <p className="text-medium">Nettside</p>
                    </div>
                    <div className="project-info">
                        <p style={{ color: "var(--corwell-scheme-text) !important" }} className="text-large">Periode:</p>
                        <p className="text-medium">Des 2024 - jan 2025</p>
                    </div>
                </div>

                <StandaloneParagraph
                    textSection={
                        <>
                            <h2 className="text-medium">Bakgrunn</h2>
                            <p>
                                En front-end utvikler kontaktet meg for å redesigne porteføljen sin med mål om å skape en mer profesjonell og brukervennlig plattform for å vise frem arbeidet sitt. Porteføljen skulle ikke bare være visuelt tiltalende, men også effektiv i å kommunisere kompetanse og prosjekter til potensielle arbeidsgivere og kunder.
                            </p>
                        </>
                    }
                />

                <ParagraphWithImage
                    textSection={
                        <div>
                            <h2 className="text-medium">Designprosessen</h2>
                            <p>
                                Jeg startet med en behovsanalyse for å forstå utviklerens mål, hvilke prosjekter som skulle fremheves, og hvilke funksjoner som var viktigst. For å sikre en optimal struktur tok jeg inspirasjon fra Nielsen Norman Group sine anbefalinger for UX-porteføljer (NNG Group, 2023). Deres forskning understreker viktigheten av tydelig navigasjon, konsise prosjekthistorier og en enkel, men strategisk oppbygning av innholdet. Dette hjalp meg med å sette opp wireframes som prioriterte brukervennlighet og effektiv kommunikasjon.
                            </p>
                        </div>
                    }
                    imageSrc="/portefølje-redesign/wireframe.png"
                    imageText="Wireframe for porteføljens hjemmeside"
                    altText="Wireframe for the website."
                />

                <ParagraphWithImage
                    textSection={
                        <div>
                            <h2 className="text-medium">Prototyping og iterasjoner</h2>
                            <p>
                                For å sikre en sømløs overgang fra design til kode utviklet jeg en interaktiv prototype i Figma. Dette ga utvikleren en realistisk forhåndsvisning av hvordan porteføljen ville fungere og gjorde det enklere å teste interaksjoner før implementering. Muligheten til å bytte mellom lys og mørk modus ble også implementert i prototypen, slik at utvikleren kunne teste funksjonaliteten før lansering.
                                Prosjektet gikk gjennom tre iterasjoner, hvor jeg utførte brukertester for å identifisere forbedringspunkter. Jeg jobbet tett med utvikleren gjennom hele prosessen, slik at han kunne komme med innspill og sikre at løsningen både fungerte optimalt teknisk og oppfylte hans behov. Dette iterative arbeidet sikret en brukersentrert tilnærming og et resultat som var både funksjonelt og visuelt gjennomført.
                            </p>
                        </div>
                    }
                    imageSrc="/portefølje-redesign/about.png"
                    imageText="Man kan enkelt bytte mellom lys og mørk modus ved å klikke på modus-knappen i navigasjonsmenyen"
                    altText="Mobile screen where you switch from light to dark mode though the navigation menu."
                />

                <ParagraphWithImage
                    textSection={
                        <div>
                            <h2 className="text-medium">Header og navigasjon</h2>
                            <p>
                                For å gjøre navigasjonen intuitiv og brukervennlig, designet jeg en fiksert navigasjonsmeny som gjør at menyen alltid er synlig mens brukeren scroller. Dette er basert på NNG Groups forskning på sticky headers (NNG Group, 2023), som viser at brukere navigerer mer effektivt når de har konstant tilgang til hovedmenyen.
                                Jeg la også til en visuell understrekning av hvilken side brukeren er på, for å gi bedre kontekst og redusere kognitiv belastning. Dette hjelper brukerne med å forstå hvor de befinner seg i porteføljen til enhver tid.
                                For prosjektsidene implementerte jeg navigasjonssti (breadcrumbs), slik at brukerne enkelt kan se hvordan de havnet der de befinner seg, og navigere tilbake uten forvirring. Dette følger prinsippet om &quot;Recognition Over Recall&quot;, der designet hjelper brukeren å gjenkjenne stedet i strukturen fremfor å huske det selv.
                            </p>
                        </div>
                    }
                    imageSrc="/portefølje-redesign/landing-page.png"
                    imageText="Navigasjonsmenyen har blitt endret i det nye designet for å gjøre navigasjonen enklere"
                    altText='Comparison between the old and the new design.'
                />

                <ParagraphWithImage
                    textSection={
                        <div>
                            <h2 className="text-medium">Struktur og brukervennlighet</h2>
                            <p>
                                Under arbeidet oppdaget jeg at utvikleren ikke hadde en egen Kontakt-side eller footer, noe som kunne gjøre det vanskelig for potensielle arbeidsgivere å nå ut. Basert på UX-prisnipper, og fokus på tilgjengelighet, la jeg til en enkel og oversiktlig kontaktside.
                                I tillegg ble en footer lagt til for å samle all viktig informasjon og gjøre navigasjonen lettere. Inspirasjonen kom fra NNG Groups forskning på footere (NNG Group, 2023), som viser hvordan en godt designet footer kan forbedre brukeropplevelsen ved å tilby en fleksibel måte å navigere på. Dette følger prinsippet om &quot;Flexibility of Use&quot;, slik at brukere enkelt finner veien videre, på den måten den som bruker siden måtte ønske.
                            </p>
                        </div>
                    }
                    imageSrc="/portefølje-redesign/footer.png"
                    imageText="Den nye footeren har navigasjonslenker, kontaktinformasjon og lenker til GitHub og LinkedIn "
                    altText='The added footer on both mobile and desktop.'
                />

                <ParagraphWithImage
                    textSection={
                        <div>
                            <h2 className="text-medium">Lys og mørk modus</h2>
                            <p>
                                Jeg valgte å implementere lys og mørk modus i porteføljen for å gi brukerne muligheten til å tilpasse brukeropplevelsen etter deres personlige preferanser og behov. Forskning viser at mørk modus kan redusere øyeanstrengelse, spesielt i svakt belyste omgivelser, og dermed forbedre lesbarheten for brukere som bruker porteføljen over lengre tid (Nielsen Norman Group, 2023). På den andre siden fungerer lys modus bedre i godt opplyste omgivelser og kan også bidra til å øke lesbarheten i visse situasjoner (W3C, 2020). Ved å tilby begge alternativene gir nettsiden brukeren valgfrihet til å tilpasse grensesnittet etter egne behov og sikre en komfortabel brukeropplevelse under alle lysforhold.
                            </p>
                            <br />
                            <p>
                                Valget om å inkludere muligheten for lys og mørk modus er også i tråd med WACA-prinsippene for tilgjengelighet, som understreker viktigheten av å designe nettsteder som er tilpasset forskjellige brukerbehov og preferanser. Dette prinsippet støtter inkluderende design og bidrar til en bedre opplevelse for brukere med lysømfintlighet eller migrene, som kan ha vanskelig for å bruke grensesnitt med høy lysstyrke (W3C, 2020).
                            </p>
                        </div>
                    }
                    imageSrc="/portefølje-redesign/dark-light.png"
                    imageText="Prosjektsider i både lys og mørk modus for å heve brukervennlighet"
                    altText='A project showcased in both dark and light mode.'
                />

                <StandaloneParagraph
                    textSection={
                        <>
                            <h2 className="text-medium">Min læring fra prosessen</h2>
                            <p>
                                Dette prosjektet ga meg verdifull erfaring i å designe for en utvikler, hvor balansen mellom estetikk og funksjonalitet var avgjørende. Men ingenting er perfekt på første forsøk, og jeg gjorde flere feil underveis som lærte meg mye.
                                En av de største lærdommene mine var hvordan man bruker Auto Layout og komponenter riktig. I begynnelsen grupperte jeg ikke alltid elementene på en optimal måte, noe som førte til unødvendige konsekvenser senere når jeg brukte komponentene i designet. Jeg innså hvor viktig det er å strukturere og navngi elementer riktig fra start, slik at iterasjoner og justeringer blir smidige senere.
                            </p>
                            <br />
                            <p>
                                Jeg fikk også bekreftet hvor viktig det er med et klart informasjonshierarki, strategisk plassering av innhold og en lettfattelig struktur. I tillegg lærte jeg hvor avgjørende det er å inkludere kontaktmuligheter, fleksibilitet i navigasjon (som en godt strukturert footer og breadcrumbs) og visuelle tilpasninger som lys/mørk modus for å forbedre brukeropplevelsen.
                                Ved å jobbe tett med utvikleren og gjennomføre brukertester i tre iterasjoner, ble jeg stadig mer bevisst på hvordan små designvalg kan ha stor påvirkning på sluttproduktet. Dette prosjektet har gitt meg enda bedre forståelse for iterativ design, systematisk oppbygging av komponenter og hvor viktig det er å tenke flere steg fremover i designprosessen.
                            </p>
                        </>
                    }
                />
            </div>
        </main>
    )
}