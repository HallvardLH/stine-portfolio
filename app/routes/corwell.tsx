import type { MetaFunction } from "@remix-run/node";
import CoverImage from "~/components/cover-image/CoverImage";
import StandaloneParagraph from "~/components/project-sections/StandaloneParagraph";
import ParagraphWithImage from "~/components/project-sections/ParagraphWithImage";

export const meta: MetaFunction = () => {
    return [
        { title: "Corwell - Stine Knutsen" },
        { name: "description", content: "Et Media- og Interaksjonsdesign prosjekt om en helseapp som forbedrer helseoppfølging ved hjelp av lifelogging." },
    ];
};

export default function ProjectsLibaryRoute() {
    return (
        <main>
            <CoverImage src="/corwell/thumbnail.png" colorScheme="corwell-scheme" />
            <div className="gutter project-section corwell-scheme">
                <StandaloneParagraph
                    textSection={
                        <>
                            <h1 className="heading">
                                CorWell
                            </h1>
                            <p className="text-medium">
                                Et prosjekt som gikk ut på å skape en helseapp som forbedrer innsikten i egen helse ved hjelp av lifelogging-teknologi.
                            </p>
                        </>
                    }
                />

                <div>
                    <div className="project-info">
                        <p style={{ color: "var(--corwell-scheme-text) !important" }} className="text-large">Plattform:</p>
                        <p className="text-medium">Mobilapp</p>
                    </div>
                    <div className="project-info">
                        <p style={{ color: "var(--corwell-scheme-text) !important" }} className="text-large">Periode:</p>
                        <p className="text-medium">Jan - jun 2024</p>
                    </div>
                </div>

                <StandaloneParagraph
                    textSection={
                        <>
                            <h2 className="text-medium">Kort om CorWell</h2>
                            <p>
                                I kurset Design for mediebruk (MIX204) ved Universitetet i Bergen utforsket vi hvordan lifelogging-teknologi kan forbedre helseoppfølging. Resultatet ble CorWell, en AI-basert helseassistent utviklet for forebygging og behandling av hjerterelaterte helseproblemer.
                            </p>
                        </>
                    }
                />

                <StandaloneParagraph
                    textSection={
                        <>
                            <h2 className="text-medium">Designprosessen</h2>
                            <p>
                                CorWell ble utviklet i tett samarbeid med både helsepersonell og pasienter for å sikre en løsning som møter målgruppens behov. Vi jobbet med en kardiolog fra Haukeland sykehus, som deltok i en designsprint og ga verdifulle tilbakemeldinger. I tillegg gjennomførte vi intervjuer med hjertepasienter for å forstå hvordan sykdommen påvirker deres daglige liv.
                            </p>
                            <br />
                            <p>
                                Målgruppen vår var voksne hjertepasienter i alderen 50-65 år. Basert på innsikter og ideer fra målgruppen arbeidet vi mot å skape en AI-drevet «lege» som kan tolke helselogger i kontekst, raskere og mer presist enn en fysisk legetime.
                            </p>
                        </>
                    }
                />

                <ParagraphWithImage
                    textSection={
                        <div>
                            <h2 className="text-medium">Prototypen</h2>
                            <p>
                                Vi fokuserte på oppsett og onboarding for å gjøre brukeropplevelsen så enkel som mulig. Appen kan kobles til brukerens eksisterende lifelogging-enheter, som smartklokker eller smartringer, og integreres med Helsenorge for sikker innlogging uten behov for ny konto. Dette gjør det mulig for AI-en å forstå sammenhengen mellom helseloggen og sanntidsdata, som illustrert nedenfor.
                            </p>
                            <br />
                            <p>
                                Gjennom samarbeid med en kardiolog fra Haukeland sykehus identifiserte vi utfordringer med måling og tolkning av biometriske data over tid. AI-en ble foreslått som en løsning for å effektivisere denne prosessen, slik at hverdagen blir enklere for brukeren, samtidig som helsepersonell får bedre innsikt.
                            </p>
                        </div>
                    }
                    imageSrc="/corwell/setup.png"
                    imageText="Onboardingen i CorWell"
                    altText="Two mobile screens displaying the onboarding process in Corwell."
                />

                <ParagraphWithImage
                    textSection={
                        <div>
                            <h2 className="text-medium">CorWells nøkkelfunksjoner</h2>
                            <p>
                                Dashbordet gir en sentralisert oversikt over viktig informasjon og målinger, slik at brukerne raskt kan forstå status og fremgang. Interaktive elementer som grafer og diagrammer gjør dataene mer engasjerende og enklere å forstå, samtidig som personalisering lar brukerne tilpasse visningen etter egne behov. En innebygd tilbakemeldingsfunksjon og varsler sikrer at brukerne mottar relevant informasjon og påminnelser, noe som øker både responsen og nytteverdien av appen.
                            </p>
                        </div>
                    }
                    imageSrc="/corwell/landing-page.png"
                    imageText="CorWells dashbord og talestyrt chat "
                    altText="The home-page in the app, as well as the voice-chat."
                />

                <ParagraphWithImage
                    textSection={
                        <div>
                            <h2 className="text-medium">Statistikk og helserapport</h2>
                            <p>
                                &quot;Live Statistics&quot; gir brukere daglige rapporter og sanntidsinnsikt i egen hjertehelse, og viser hvordan deres handlinger kan bidra til positive endringer. Informasjonsikoner gir enkel tilgang til lettfattelige forklaringer, mens brukerne kan scrolle og klikke på ulike hjerteparametere for å utforske mer detaljerte data. Overlays med visualiseringer og bilder gjør informasjonen mer intuitiv og forståelig, noe som hjelper brukerne med å ta bedre informerte valg om egen helse.
                            </p>
                        </div>
                    }
                    imageSrc="/corwell/stats.png"
                    imageText="CorWells statistikkside og daglig helserapport"
                    altText='The "live statistics"-page and the "daily health-report- page in Corwell.'
                />

                <ParagraphWithImage
                    textSection={
                        <div>
                            <h2 className="text-medium">Brukerkontroll og fleksibilitet </h2>
                            <p>
                                Brukerne har full kontroll over samtalehistorikken sin gjennom en historikkside, hvor alle samtaler lagres. Her kan de enkelt fortsette tidligere samtaler, organisere, lagre eller slette dem etter behov. For å ivareta sikkerheten vises det en nødvarsel som gir mulighet til å ringe nødnummeret dersom alvorlige symptomer beskrives.
                            </p>
                            <p>
                                Interaksjon med AI-legen er fleksibel, og brukerne kan velge mellom talestyring, tekst eller videochat. Med videofunksjonalitet kan brukeren vise matvaner, aktiviteter eller spesifikke bekymringer ved hjelp av et bærbart kamera, slik at AI-en kan gjøre en mer grundig visuell analyse.
                            </p>
                        </div>
                    }
                    imageSrc="/corwell/chat.png"
                    imageText="CorWells varslingsside og chathistorikk"
                    altText='Corwells notifications-page and chat history-page.'
                />

                <StandaloneParagraph
                    textSection={
                        <>
                            <h2 className="text-medium">Tilegnet erfaring fra prosjektet</h2>
                            <p>
                                Gjennom arbeidet med CorWell lærte vi mye om å designe for brukerengasjement og forenkling av komplekse data. Brukertestingen ga verdifull innsikt, spesielt i hvordan vi kunne gjøre appens funksjoner mer intuitive, som å forbedre chat-funksjonen for brukere som er uvant med AI.
                            </p>
                            <p>
                                Jeg ser også forbedringsmuligheter, som å videreutvikle grensesnittet for enda bedre brukervennlighet. Prosjektet styrket min forståelse av hvordan man kombinerer teori, ekspertinnsikt og brukerinvolvering for å skape løsninger som møter reelle behov.
                            </p>
                        </>
                    }
                />
            </div>
        </main>
    )
}