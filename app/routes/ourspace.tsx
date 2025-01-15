import type { MetaFunction } from "@remix-run/node";
import CoverImage from "~/components/cover-image/CoverImage";
import StandaloneParagraph from "~/components/project-sections/StandaloneParagraph";
import ParagraphWithImage from "~/components/project-sections/ParagraphWithImage";
import TwoImages from "~/components/project-sections/TwoImages";

export const meta: MetaFunction = () => {
    return [
        { title: "OurSpace - Stine Knutsen" },
        { name: "description", content: "Et CSCW-verktøy med mål om å strukturere konsulenter og klienters kalendere for å oppfylle deres ønsker og behov." },
    ];
};

export default function ProjectsLibaryRoute() {
    return (
        <main>
            <CoverImage src="/ourspace/thumbnail.png" colorScheme="ourspace-scheme" />
            <div className="gutter project-section ourspace-scheme">

                <StandaloneParagraph
                    textSection={
                        <>
                            <h1 className="heading">
                                OurSpace
                            </h1>
                            <p className="text-medium">
                                Et CSCW-verktøy med mål om å strukturere konsulenter og klienters kalendere for å oppfylle deres ønsker og behov.
                            </p>
                        </>
                    }
                />

                <div>
                    <div className="project-info">
                        <p className="text-large">Plattform:</p>
                        <p className="text-medium">Software</p>
                    </div>
                    <div className="project-info">
                        <p className="text-large">Periode:</p>
                        <p className="text-medium">Aug - nov 2023</p>
                    </div>
                </div>

                <StandaloneParagraph
                    textSection={
                        <>
                            <h2 className="text-medium">Bakgrunn</h2>
                            <p>
                                I løpet av kurset, Design for medieproduksjon, ble vi sendt ut i felten for å undersøke hvordan et selskap som arbeider med medieproduksjon samarbeider og arbeider med CSCW-verktøy (computer supported cooperative work). I løpet av feltarbeidet samlet vi kvalitative data i form av intervju og observasjon, som vi brukte til å skape et verktøy som kunne forbedre arbeidsdagen til de ansatte ved firmaet vi besøkte.
                            </p>
                        </>
                    }
                />

                <ParagraphWithImage
                    textSection={
                        <div>
                            <h2 className="text-medium">Problemområdet</h2>
                            <p>
                                Gjennom brainstorming identifiserte vi tre hovedutfordringer knyttet til designprosjekter: kommunikasjon med kunden, selve designprosessen og arbeidsfordeling.
                                Kommunikasjon med kunden er ofte preget av treghet, hvor designere må avvente svar før de kan fortsette arbeidet. Dette skaper forsinkelser og utfordringer når kunden introduserer plutselige endringer som ikke alltid er i takt med designprosessen. Slike problemer oppstår ofte fordi kunden ikke er tilstrekkelig involvert eller inkludert underveis.
                            </p>
                            <br />
                            <p>
                                For å finne løsninger brukte vi &quot;How Might We&quot;-øvelser (HMW), som for eksempel: Hvordan kan vi strukturere klientens og designerens kalender for å bedre oppfylle deres ønsker og behov? I tillegg satte vi et mål for fremtiden: “In two years time” skal designere ha en klar forståelse av egne og andres prosjekter, inkludert tid, omfang og kompetanse.
                            </p>
                        </div>
                    }
                    imageSrc="/ourspace/brainstorming.png"
                    imageText="Wireframes for nettsiden"
                    altText="Early drawings of the interface hung upon a whiteboard."
                />

                <ParagraphWithImage
                    textSection={
                        <div>
                            <h2 className="text-medium">Konsept</h2>
                            <p>
                                Konseptet for OurSpace er at det skal være en applikasjon som samler både klienter og designer i et felles grensesnitt. OurSpace skal gi en oversikt over hvem som gjør hva, deadlines og milepæler i et aktuelt prosjekt. Den som benytter seg av plattformen kan holde oversikt over hvordan alle prosjektdeltakere ligger an i prosjektplanen, som minimerer forvirring og frustrasjon.
                            </p>
                        </div>
                    }
                    imageSrc="/ourspace/concept.png"
                    imageText="OurSpace sin prosjektside"
                    altText="The whole project-page in OurSpace, displaying goals, milestones and the project-overview."
                />

                <StandaloneParagraph
                    textSection={
                        <>
                            <h2 className="text-medium">Tidslinje som verktøy</h2>
                            <p>
                                Tidslinjen skal gi en felles oversikt til alle som samarbeider om et prosjekt. Dette gjelder både designteamet og klientene. Vi mener denne løsningen kan hjelpe med å forhindre kommunikasjonsproblemer og uklare arbeidsplaner. Kort sagt er det en oversiktlig plan som skal gi alle muligheten til å få lik innsikt i prosjektet.
                            </p>
                            <br />
                            <p>
                                Tidslinjen inneholder:
                            </p>
                            <ul>
                                <li>
                                    <p>
                                        Milepæler
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Møter
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Oppdrag og oppgaver
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Tilgang til filer
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Chat mellom designere og klienter
                                    </p>
                                </li>
                            </ul>
                        </>
                    }
                />

                <TwoImages
                    imageSrc1="/ourspace/timeline.png"
                    imageText1="Tidslinjen"
                    altText1="The timeline in the interface displaying a hypothetical projects progress."
                    imageSrc2="/ourspace/chat.png"
                    imageText2="Chatfunksjonen i tidslinjen"
                    altText2='The "Chat directly from the timeline" feature in the OurSpace software.'
                />

                <StandaloneParagraph
                    textSection={
                        <>
                            <h2 className="text-medium">Videre arbeid med OurSpace</h2>
                            <p>
                                For å forbedre prosjektet ville vi fokusert på å redusere mengden elementer i grensesnittet for å skape en mer ryddig og intuitiv opplevelse, spesielt på hjemmesiden. Dette inkluderer å prioritere informasjon og gjøre navigasjonen mer oversiktlig.
                            </p>
                            <br />
                            <p>
                                Videre ønsker vi å utvide chat-funksjonen for å inkludere flere interaktive elementer, som veiledning og støtte til brukerne. Vi ser også behov for å utforske klientenes perspektiv og behov enda grundigere, for bedre å tilpasse løsningen til deres forventninger. Et annet viktig fokusområde er å forenkle prosessen for å legge til elementer i tidslinjen, slik at brukerne kan tilpasse og administrere denne funksjonen på en enkel og effektiv måte.
                            </p>
                        </>
                    }
                />
            </div>
        </main>
    )
}