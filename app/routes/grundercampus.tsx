import type { MetaFunction } from "@remix-run/node";
import CoverImage from "~/components/cover-image/CoverImage";
import StandaloneParagraph from "~/components/project-sections/StandaloneParagraph";
import ParagraphWithImage from "~/components/project-sections/ParagraphWithImage";
import TwoImages from "~/components/project-sections/TwoImages";

export const meta: MetaFunction = () => {
    return [
        { title: "Bachelorprosjekt: GründerCampus - Stine Knutsen" },
        { name: "description", content: "Som del av bacheloroppgaven min designet jeg og gruppen min en nettside for GründerCampus. Prosjektet vårt vant MVP-prisen under Innovasjonsdagen 9. mai 2025." },
    ];
};

export default function ProjectsLibaryRoute() {
    return (
        <main>
            <CoverImage src="/grundercampus/thumbnail.webp" colorScheme="grundercampus-scheme" />
            <div className="gutter project-section grundercampus-scheme">

                <StandaloneParagraph
                    textSection={
                        <>
                            <h1 className="heading">
                                Bachelorprosjekt: GründerCampus
                            </h1>
                            <p className="text-medium">
                                Gjennom bachelorprosjektet fikk prosjektgruppen min, bestående av Pernille Brubakk, Jenny Dal Østensen, Margrethe Liahjell og meg selv, muligheten til å utvikle ny nettside, logo og visuell profil for den nyoppstartede studentorganisasjonen GründerCampus. Prosjektet vårt vant MVP-prisen under Innovasjonsdagen 9. mai 2025.
                            </p>
                        </>
                    }
                />

                <div>
                    <div className="project-info">
                        <p className="text-large">Plattform:</p>
                        <p className="text-medium">Nettside</p>
                    </div>
                    <div className="project-info">
                        <p className="text-large">Periode:</p>
                        <p className="text-medium">Våren 2025</p>
                    </div>
                </div>

                <StandaloneParagraph
                    textSection={
                        <>
                            <h2 className="text-medium">Bakgrunn</h2>
                            <p>
                                Hvert år deler Innovasjon Norge ut store summer til studentgründere. I fjor gikk 36 prosent av disse midlene til Trondheim, 24 prosent til Oslo og bare 4 prosent til Bergen. Vi mener at Bergen har et stort, uforløst potensial, og at det er behov for å styrke innovasjonsmiljøet blant studentene på tvers av utdanningsinstitusjonene, slik vi ser i Trondheim og Oslo. GründerCampus ble etablert for å være en bro mellom universitetene i Bergen, i samarbeid med flere etablerte startup-inkubatorer. Organisasjonen skal tilby studenter veiledning, nettverk, nyttige verktøy og inspirasjon til å følge sine gründerdrømmer. Vi ble hentet inn for å utvikle plattformen som skulle samle alt dette på ett sted.
                            </p>
                        </>
                    }
                />

                <ParagraphWithImage
                    textSection={
                        <div>
                            <h2 className="text-medium">Innsiktsfase</h2>
                            <p>
                                Vi startet prosjektet med en grundig innsiktsfase, hvor vi gjennomførte konkurrentanalyse, dybdeintervjuer, fokusgrupper og co-design workshops med målgruppen. I tillegg deltok vi aktivt i innovasjonsmiljøet i Bergen, og snakket med unge gründerspirer for å få en dypere forståelse av deres behov. Basert på funnene definerte vi hvilke funksjoner plattformen måtte tilby for å støtte og inspirere studentgründere på best mulig måte.
                            </p>
                        </div>
                    }
                    imageSrc="/grundercampus/workshop.webp"
                    imageText="Co-design workshop"
                    altText="Studenter deltar i en co-design workshop for å utvikle plattformen til GründerCampus."
                />

                <TwoImages
                    imageSrc1="/grundercampus/eyetracking.webp"
                    imageText1='Brukertest av nettsiden'
                    altText1='Brukertest av GründerCampus-nettsiden med observasjon av brukernes navigasjon.'

                    imageSrc2="/grundercampus/innovation.webp"
                    imageText2="Deltakelse i innovasjonsmiljøet i Bergen."
                    altText2='Deltakelse i arrangementer i Bergens innovasjonsmiljø for innsiktsarbeid.'
                />

                <ParagraphWithImage
                    textSection={
                        <div>
                            <h2 className="text-medium">Fra idé til lansering</h2>
                            <p>
                                Vi startet prosjektet med å utvikle en merkevareidentitet og logo. Gjennom tett dialog med oppdragsgiver og flere iterasjoner landet vi på et fargeuttrykk og en logo som reflekterte GründerCampus&apos; verdier. Logoen ble gjort dynamisk for å skape et mer levende og fleksibelt visuelt uttrykk. Deretter lanserte vi en midlertidig &quot;Coming soon&quot;-side før vi ferdigstilte en fullverdig prototype av nettsiden.
                            </p>
                        </div>
                    }
                    imageSrc="/grundercampus/palette.webp"
                    imageText="Fargepaletten for hjemmesiden."
                    altText="Viser GründerCampus sin fargepalett, med friske og inspirerende farger."
                />

                <TwoImages
                    imageSrc1="/grundercampus/logo.webp"
                    imageText1='GründerCampus sin logo i forskjellige fargevariasjoner.'
                    altText1='GründerCampus-logoen i ulike fargeversjoner for fleksibel bruk på tvers av flater.'

                    imageSrc2="/grundercampus/coming-soon.webp"
                    imageText2='"Coming soon"-siden.'
                    altText2='Midlertidig "Coming soon"-side for GründerCampus med introduksjon og visuell profil.'
                />


                <StandaloneParagraph
                    textSection={
                        <>
                            <h2 className="text-medium">Brukertesting med eye-tracking</h2>
                            <p>
                                For å sikre at nettsiden oppleves både inspirerende og intuitiv for målgruppen, gjennomførte vi brukertester ved hjelp av eye-tracking-teknologi. Testpersonene fikk i oppgave å navigere gjennom prototypen mens vi registrerte øyebevegelsene deres. Dette ga oss verdifull innsikt i hvordan brukerne oppfattet informasjonen, hvilke elementer som tiltrakk mest oppmerksomhet, og hvor eventuelle navigasjonsutfordringer oppstod.
                            </p>
                        </>
                    }
                />


                <TwoImages
                    imageSrc1="/grundercampus/eyetracking.webp"
                    imageText1="Fargepaletten for hjemmesiden."
                    altText1="Viser GründerCampus sin fargepalett, med friske og inspirerende farger."

                    imageSrc2="/grundercampus/eyetracking-screenshot.webp"
                    imageText2="Heatmap over resultatene fra eye-trackingen."
                    altText2="Heatmap som viser hvor testbrukerne fokuserte blikket på GründerCampus-nettsiden."
                />

                <StandaloneParagraph
                    textSection={
                        <>
                            <h2 className="text-medium">Designsystem og styleguide</h2>
                            <p>
                                Jeg hadde hovedansvaret for å sette opp et responsivt designsystem tilpasset både mobil og desktop. Jeg sørget for å skape visuell konsistens og brukervennlige komponenter, samt et tydelig komponentbibliotek med god navngiving og bruk av design tokens. Dette forenklet overleveringen til utvikleren og gjorde det lettere å implementere designet effektivt.
                            </p>
                        </>
                    }
                />

                <TwoImages
                    imageSrc1="/grundercampus/typography.webp"
                    imageText1="Typografien for GründerCampus sin nettside."
                    altText1="Typografisk oppsett for GründerCampus med valg av fonter for en enhetlig visuell stil."

                    imageSrc2="/grundercampus/design-system.webp"
                    imageText2="Designsystem: Oppsett av komponentbibliotek for en konsistent og skalerbar løsning."
                    altText2="Komponentbibliotek og designsystem for GründerCampus-nettsiden, tilpasset mobil og desktop."
                />

                <ParagraphWithImage
                    textSection={
                        <div>
                            <h2 className="text-medium">Prototypen</h2>
                            <p>
                                Forsiden på GründerCampus-nettsiden fungerer som en inngangsport til plattformens hovedfunksjoner. Her ønsket vi å skape et førsteinntrykk som både inspirerer og informerer. Vi introduserer GründerCampus&apos; kjerneområder: Arrangementer, Startup Board og Om oss. Brukerne blir raskt kjent med hva GründerCampus tilbyr og kan enkelt navigere videre til det som er mest relevant for dem.

                            </p>
                        </div>
                    }
                    imageSrc="/grundercampus/landing.webp"
                    imageText="Forsiden: Introduksjon til GründerCampus' hovedområder og plattformens inngangspunkt."
                    altText="GründerCampus' forside som introduserer organisasjonens hovedfunksjoner og tilbud."
                />

                <ParagraphWithImage
                    textSection={
                        <div>
                            <p>
                                Arrangementssiden gir en strukturert oversikt over kommende arrangementer, workshops og meetups organisert av GründerCampus og samarbeidspartnere. Målet er å inspirere studenter til å engasjere seg i innovasjonsmiljøet, bygge nettverk og finne likesinnede med felles gründerambisjoner.

                            </p>
                        </div>
                    }
                    imageSrc="/grundercampus/events.webp"
                    imageText="Arrangementssiden: Samling av kommende workshops, meetups og arrangementer."
                    altText="Arrangementsside som viser oversikt over kommende innovasjonsaktiviteter for studenter."
                />

                <ParagraphWithImage
                    textSection={
                        <div>
                            <p>
                                Startup Boardet er en sentral funksjon utviklet for å knytte sammen studenter med ulike ferdigheter og interesser. Her kan studenter søke deltakelse i pågående gründerprosjekter, eller legge ut egne annonser for å finne medgründere eller spesifikk kompetanse de trenger for å realisere sine ideer. Dette senker terskelen for å komme i gang som gründer og åpner for tverrfaglig samarbeid på tvers av utdanningsretninger.
                            </p>
                        </div>
                    }
                    imageSrc="/grundercampus/startup.webp"
                    imageText="Startup Board: Koble sammen studenter og prosjekter på tvers av fagområder."
                    altText="Startup Board-funksjon som kobler studenter med ulike kompetanser i gründerprosjekter."
                />

                <ParagraphWithImage
                    textSection={
                        <div>
                            <p>
                                Om oss-siden gir brukerne en dypere forståelse av hva GründerCampus står for. Her presenterer vi organisasjonens visjon om å styrke innovasjonsmiljøet i Bergen, verdiene de jobber etter, og målet deres om å bygge broer mellom utdanningsinstitusjoner og innovasjonsaktører. Vi introduserer også The Hub, GründerCampus’ fysiske møtested hvor studenter kan møte mentorer, delta på workshops og få støtte i oppstartsprosessen.
                            </p>
                        </div>
                    }
                    imageSrc="/grundercampus/about-us.webp"
                    imageText="Om oss: GründerCampus' visjon, verdier og presentasjon av The Hub."
                    altText="Om oss-side som presenterer GründerCampus' visjon, verdier og The Hub - møteplassen for studenter."
                />

                <StandaloneParagraph
                    textSection={
                        <>
                            <h2 className="text-medium">Grad av innovasjon</h2>
                            <p>
                                Startup Board er en funksjon som skiller GründerCampus fra andre aktører. Ideen er å gi studenter som kanskje ikke har en egen idé, muligheten til å bidra med sin kompetanse i andres prosjekter. Dette gir dem både verdifull erfaring og et sosialt og faglig nettverk, noe som ofte er vanskelig å få tilgang til for unge studenter.
                            </p>
                        </>
                    }
                />

                <StandaloneParagraph
                    textSection={
                        <>
                            <h2 className="text-medium">Min læring fra prosessen</h2>
                            <p>
                                Dette prosjektet har vært uvurderlig for min utvikling som UX-designer. Jeg har opparbeidet meg avansert kunnskap i Figma, spesielt innen oppsett av designsystemer og bruk av design tokens. I tillegg til faglig vekst lærte jeg mye om betydningen av godt teamarbeid. I dette prosjektet fant alle i gruppen sin naturlige rolle, og vi løftet hverandre gjennom hele prosessen. Engasjementet og drivkraften i teamet førte til at vi leverte en nøye gjennomarbeidet, brukervennlig og innovativ løsning. Prosjektet har gitt meg en styrket tro på hvor mye høyere kvalitet et team kan oppnå sammen enn det man kan alene. Arbeidet vårt vil hjelpe studenter i Bergen med å finne veien inn i entreprenørskap eller skaffe seg relevant arbeidserfaring, noe som kan være utfordrende å få som ung student.
                            </p>
                        </>
                    }
                />
            </div>
        </main>
    )
}