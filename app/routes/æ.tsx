import type { MetaFunction } from "@remix-run/node";
import CoverImage from "~/components/cover-image/CoverImage";
import StandaloneParagraph from "~/components/project-sections/StandaloneParagraph";
import ParagraphWithImage from "~/components/project-sections/ParagraphWithImage";
import TwoImages from "~/components/project-sections/TwoImages";

export const meta: MetaFunction = () => {
    return [
        { title: "Prosjektbibliotek - Stine Knutsen" },
        { name: "description", content: "Prosjektbiblioteket til Stine Knutsen." },
    ];
};

export default function ProjectsLibaryRoute() {
    return (
        <main>
            <CoverImage src="/thumbnails/æ-thumbnail.png" />
            <div className="gutter project-section">
                <div className="text-section">
                    <h1 className="heading">
                        Redesign av Æ-appen
                    </h1>
                    <p className="text-medium">
                        Et redesignprosjekt som har som mål å forbedre brukervennligheten i en av Norges mest populære medlemsklubbsapper.
                    </p>
                </div>

                <div>
                    <div className="project-info">
                        <p className="text-large">Plattform:</p>
                        <p className="text-medium">Mobilapp</p>
                    </div>
                    <div className="project-info">
                        <p className="text-large">Periode:</p>
                        <p className="text-medium">Sep - nov 2024</p>
                    </div>
                </div>

                <div className="standalone-paragraph">
                    <h2 className="text-medium">Bakgrunn for redesign</h2>
                    <p>
                        Prosjektet startet med å avdekke flere kritiske utfordringer i Æ-appen gjennom brukerundersøkelser og testing. Brukerne opplevde blant annet problemer med navigasjon, manglende personalisering og uklarhet rundt aktivering av rabatter. I tillegg skapte vage feilmeldinger og tekniske utfordringer, som at strekkoder forsvant og krevde ny innlogging, frustrasjon hos brukerne. Appens sterke fokus på merkevarebygging gikk også på bekostning av brukersentrert informasjon. Med disse innsiktene som utgangspunkt, satte vi i gang arbeidet med å heve brukervennligheten og skape en bedre opplevelse for alle Æ-brukere.
                    </p>
                </div>

                <div className="standalone-paragraph">
                    <h2 className="text-medium">Evalueringsmetoder</h2>
                    <p>
                        For å forstå markedet og brukernes forventninger startet vi med en konkurranseanalyse. Dette ga oss innsikt i trender og muligheter for at Æ-appen kunne skille seg ut. Videre gjennomførte vi en heuristisk evaluering og brukertesting for å vurdere appens brukervennlighet. Den heuristiske evalueringen avdekket designproblemer basert på etablerte prinsipper, mens brukertesting med &quot;tenk-høyt&quot;-metoden ga oss verdifull innsikt i brukernes faktiske opplevelse.
                    </p>
                </div>

                <ParagraphWithImage
                    textSection={
                        <div>
                            <h2 className="text-medium">Evalueringens resultater</h2>
                            <p>
                                Gjennom testing oppdaget vi at brukerne slet med scanning av rabattkoder i butikk, samt at personlige rabatter var vanskelige å finne. Hjemmesiden føltes overfylt, og plasseringen av &quot;logg ut&quot;- og &quot;slett konto&quot;-knappene skapte risiko for feiltrykk. Den heuristiske evalueringen avdekket også problemer som manglende flerspråklig støtte, uklare feilbeskjeder og navigasjonsutfordringer. Disse funnene har vært avgjørende i utformingen av et mer brukervennlig redesign.
                            </p>
                        </div>
                    }
                    imageSrc="/æ/æ-wireframes.png"
                    imageText="Crazy 8's med prosjektgruppen"
                    altText="A table with Crazy 8's drawings."
                />

                <ParagraphWithImage
                    textSection={
                        <div>
                            <h2 className="text-medium">Lo-fi prototyping og wireframes</h2>
                            <p>
                                Etter å ha laget skisser i designøvelsen Crazy 8&apos;s, startet vi arbeidet med wireframes. Disse representerte en hybrid av gruppens beste ideer fra øvelsen. Wireframes fungerer som et &quot;designkart&quot; som visualiserer struktur og innholdshierarki i prototypen. Våre wireframes var lavoppløselige, med fokus på struktur fremfor detaljer, og inkluderte skisser for både hjemmesiden og profilsiden.
                            </p>
                        </div>
                    }
                    imageSrc="/æ/wireframes.png"
                    imageText="Wireframes laget i Figma"
                    altText="Wireframes of the design in Figma."
                />

                <ParagraphWithImage
                    textSection={
                        <div>
                            <h2 className="text-medium">Designsystem og visuell profil</h2>
                            <p>
                                For å sikre at prototypen var i tråd med Rema 1000s visuelle profil, utviklet vi et designsystem. Dette inkluderte typografi, fargepalett, ikoner og designkomponenter, basert på eksisterende elementer fra Æ-appen. Ved å matche fonter, størrelser og farger direkte fra skjermbilder, beholdt vi den gjenkjennelige merkevarefølelsen samtidig som vi forbedret brukervennligheten.
                            </p>
                            <br />
                            <p>
                                Ved å følge etablerte designprinsipper og opprettholde visuell konsistens, gjorde vi appen intuitiv og enkel å bruke, uten å miste forbindelsen til Rema 1000s identitet.
                            </p>
                        </div>
                    }
                    imageSrc="/æ/typography.png"
                    imageText="Typografien for redesignet"
                    altText="An overview of the typhraphy used in the design, created in figma. It contains the font, and different font sizes used in the project."
                />

                <TwoImages
                    imageSrc1="/æ/primary-colors.png"
                    imageText1="Primærfargene for redesignet"
                    altText1="An overviw of the primary colors used in the design. It contains the colors and respective codes."
                    imageSrc2="/æ/accent.png"
                    imageText2="Aksentfargene for redesignet"
                    altText2="An overviw of the accent colors used in the design. It contains the colors and respective codes."
                />

                <ParagraphWithImage
                    direction="vertical"
                    textSection={
                        <div>
                            <h2 className="text-medium">Prototypens første iterasjon</h2>
                            <p>
                                Første iterasjon bygde på wireframene, med bilder, riktig typografi og fargepalett.
                                Denne iterasjonen ga oss en mer realistisk visning av ideene våre og fungerte som utgangspunkt for videre diskusjon. Basert på tilbakemeldingene bestemte vi at prototypen skulle gjøre det enklere å bruke appens hovedfunksjoner, alstå scanning av medlemskode, som vi mener bør være tilgjengelig i alle grensesnitt.
                            </p>
                        </div>
                    }
                    imageSrc="/æ/first-iteration.png"
                    imageText="Første designiterasjon av hjemmesiden og profilsiden i appen"
                    altText="Three different phone screens, each showing a part of the app. The homepage, and two parts of the settings page."
                />

                <ParagraphWithImage
                    textSection={
                        <div>
                            <h2 className="text-medium">Prototypen</h2>
                            <p>
                                Den tidligere hjemmesiden i Æ-appen var rotete og skapte forvirring blant brukerne. For å gjøre den mer oversiktlig flyttet vi tilbud og kampanjer til en egen side, samtidig som vi beholdt dem synlige øverst på hjemmesiden. Vi la også til en snarvei i navigasjonsfeltet for rask tilgang.
                            </p>
                            <br />
                            <p>
                                Brukertesting avdekket utfordringer med appens varslingssystem, der uåpnede varsler var uklare og vanskelige å håndtere. Løsningen ble et bjelleikon øverst i venstre hjørne, som åpner et varslingssenter med tydelige forklaringer på hvert varsel. Dette forbedrer både brukervennligheten og effektiviteten.
                            </p>
                        </div>
                    }
                    imageSrc="/æ/homepage.png"
                    imageText="Hjemmesiden viser personlige rabatter øverst for enkel tilgang, med en snarvei i navigasjonsfeltet."
                    altText="Two phone screens, the homepage of the app and the page showing your discounts."
                />

                <ParagraphWithImage
                    reverse
                    textSection={
                        <div>
                            <p>
                                Funksjonen for handleturer beholder mye av sin opprinnelige struktur, men med forbedringer som gir en bedre brukeropplevelse. Vi har lagt større vekt på å vise hvor mye penger brukerne har spart, med en lenke til &quot;Innsikt&quot; som gir en detaljert oversikt over utgifter hos Rema 1000.
                            </p>
                            <br />
                            <p>
                                Handleturer og kvitteringer er nå tydeligere organisert, noe som gjør det enklere å navigere og gjennomgå tidligere kjøp.
                                Prototypen vår introduserer også en søkefunksjon som lar brukerne filtrere handleturer etter dato. Dette følger Jakob Nielsens heuristikk om fleksibilitet og effektivitet, som understreker viktigheten av å la brukerne skreddersy opplevelsen sin.
                            </p>
                        </div>
                    }
                    imageSrc="/æ/notifications.png"
                    imageText="Varsler er plassert i sidemenyen og kan nås via bjelleikonet øverst til høyre. Dette holder rabatter i fokus og sørger for at varsler er organisert separat."
                    altText="Two phone screens, one showing your discounts, the other showing the notification center."
                />

                <TwoImages
                    imageSrc1="/æ/receipt-old-vs-new.png"
                    altText1="Two phone screens: the current design of the Æ-app, and the new version, both screens showing the receipt section of the app."
                    imageSrc2="/æ/receipt.png"
                    altText2='Three mobile devices, where one is displaying the original interfaces "shopping trips"-page, where the other two are showing the redesigns "shopping trips" page.'
                    combinedImageText="Elementene er gruppert i tydelige seksjoner for å redusere kognitiv belastning"
                />

                <ParagraphWithImage
                    textSection={
                        <div>
                            <h2 className="text-medium">Tiltak for å heve brukervennligheten</h2>
                            <p>
                                Listen over tilbud i Æ-appen var tidligere ufullstendig og vanskelig å navigere. For å løse dette lagde vi en egen side for rabatter, som vises i “Priskutt” i verktøylinjen. Aktivering av personlige tilbud i redesignet er også mer intuitiv, med en knapp som får gul kant når priskuttene er aktivert, slik at statusen blir umiddelbart synlig for brukeren. Dette følger Nielsens prinsipp om &quot;Recognition Rather Than Recall&quot;, som reduserer brukernes kognitive belastning.
                            </p>
                            <br />
                            <p>
                                Vi introduserte også å vise rabatter i kroner i stedet for prosent, for bedre oversikt. Pågående kampanjer og generelle tilbud er nå tilgjengelige direkte på hjemmesiden for enkel tilgang.
                            </p>
                        </div>
                    }
                    imageSrc="/æ/discounts.png"
                    imageText="Personlige rabatter vises i aktivert tilstand, med gul kant som fremhever aktiverte rabatter som en visuell påminnelse."
                    altText='Two screens showing the original interfaces "Personal discounts"-page, and the redesigned page.'
                />

                <ParagraphWithImage
                    textSection={
                        <div>
                            <h2 className="text-medium">Lettere scanning</h2>
                            <p>
                                Våre funn viste at mange Æ-brukere opplever utfordringer når de skanner strekkoden sin i kassen. Det stilles høye krav til multitasking, som å håndtere varer, betaling og skanning av koden på kort tid, som ofte fører til stress og kognitiv overbelastning. Denne overbelastningen gjør det lett å glemme eller slite med strekkoden, noe som resulterer i frustrasjon og tapte rabatter.
                            </p>
                            <br />
                            <p>
                                For å løse dette sørget vi for at strekkoden alltid er synlig på tvers av alle skjermer, og vi lagde to nye, dedikerte visninger for medlemskapskoden.
                            </p>
                            <br />
                            <p>
                                Disse visningene, som kan nås ved å klikke på strekkodeikonet til venstre i toppmenyen, er tilgjengelige i både liggende og stående format som gjør skanningen mye enklere. De inkluderer også en funksjon som lyser opp skjermen for bedre synlighet.
                            </p>
                        </div>
                    }
                    imageSrc="/æ/barcode.png"
                    imageText="Strekkoden er tilgjengelig i både vertikal og horisontal visning"
                    altText='The new "barcode" feature in the interface, showing both horizontal and vertical displaying of barcode.'
                />

                <div className="standalone-paragraph">
                    <h2 className="text-medium">Redusert risiko for feiltrykk</h2>
                    <p>
                        Profil-siden i Æ-appen var tidligere uorganisert og uklar. For å forbedre den introduserte vi tre distinkte seksjoner: snarveier, innstillinger og hjelp og tilbakemelding. Vi fokuserte på å overholde Gestalt-prinsippet om nærhet, for å gruppere relaterte elementer for enklere navigasjon. Snarveiseksjonen hjelper brukerne med rask tilgang til appens funksjoner, som tilbyr en annen vei til appens ulike fuksjonaliteter, mens innstillingsseksjonen nå inkluderer nye alternativer som språkvalg, tilpasning av hjemmeside og administrasjon av varsler.
                    </p>
                    <br />
                    <p>
                        Vi tok også tak i et viktig problem med plasseringen av alternativene &quot;Slett meg&quot; og &quot;Logg ut&quot;, som tidligere så ut som lenker. Derfor plasserte vi dem i separate knapper med fargekoding for å redusere risikoen for utilsiktede feil. Disse endringene har som mål å gjøre profil-siden mer intuitiv og brukervennlig.
                    </p>
                </div>

                <TwoImages
                    imageSrc1="/æ/profile-top.png"
                    altText1="The top part of the profile page both in the original and redesigned interface."
                    imageSrc2="/æ/profile-bottom.png"
                    altText2='The bottom part of the profile-page in both the original and redesigned interface.'
                    combinedImageText="Den redesignede profil-siden har et klart og intuitivt oppsett for å redusere kognitiv belastning."
                />

                <ParagraphWithImage
                    textSection={
                        <div>
                            <h2 className="text-medium">Andre funksjoner</h2>
                            <h3 className="text-normal"><b>Handleliste</b></h3>
                            <p>
                                Redesignet introduserer en handleliste, hvor brukerne kan lage og dele personlige lister for enklere, samarbeidsbasert handel. Brukere kan legge til varer, redigere listene sine, dele lister og krysse av produkter i butikken, noe som gjør handleopplevelsen mer organisert og effektiv.
                            </p>
                        </div>
                    }
                    imageSrc="/æ/shopping-list.png"
                    imageText="Handlelistefunksjonen"
                    altText="Mobile screen displaying the added shopping-list feature."
                />

                <ParagraphWithImage
                    textSection={
                        <div>
                            <h3 className="text-normal"><b>Innsikter</b></h3>
                            <p>
                                En ny &quot;Innsikt&quot;-seksjon fremhever brukerens besparelser og kjøpsmønstre med lettfattelige grafer og datasammendrag, som hjelper dem med å følge med på utgiftene sine og ta informerte beslutninger.
                            </p>
                        </div>
                    }
                    imageSrc="/æ/insights.png"
                    imageText="Innsikter-siden"
                    altText="The new insights feature, displaying different statistics from previous shopping-trips."
                />

                <ParagraphWithImage
                    textSection={
                        <div>
                            <h3 className="text-normal"><b>Widgets</b></h3>
                            <p>
                                Widgets gir brukerne muligheten til å tilpasse hjemsiden, slik at de kan prioritere funksjoner som kvitteringer, innsikter og personlige tilbud. Denne graden av personalisering forbedrer brukervennligheten og gir en mer personalisert og effektiv opplevelse.
                            </p>
                        </div>
                    }
                    imageSrc="/æ/widget.png"
                    imageText="Tilpass hjemskjerm-siden "
                    altText='A mobile screen displaying the "adjust your home-page" screen, where the user can add widgets.'
                />

                <StandaloneParagraph
                    textSection={
                        <>
                            <h2 className="text-medium">Tilegnet erfaring fra prosjektet</h2>
                            <p>
                                Redesignet av Æ-appen har vært en lærerik erfaring, hvor jeg har fått øvd på brukerforskning, prototyping og testing. Jeg har styrket forskningsferdighetene mine, spesielt innen brukertesting og heuristisk evaluering, og ikke minst forbedret praktiske ferdigheter i Figma, som Auto Layout og designsystemer.
                            </p>
                            <p>
                                I ettertid ser jeg forbedringsmuligheter, som å tydeliggjøre avhukede elementer på handlelisten og gjøre innsiktssiden mer intuitiv. Man føler seg aldri helt ferdig med et prosjekt, og design kan alltid videreutvikles for å forbedre brukervennlighet.
                            </p>
                        </>
                    }
                />
            </div>
        </main>
    )
}