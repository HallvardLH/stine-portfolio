import type { MetaFunction } from "@remix-run/node";
import CoverImage from "~/components/cover-image/CoverImage";
import ParagraphWithImage from "~/components/project-sections/ParagraphWithImage";

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
                    <p className="text-medium">Bakgrunn for redesign</p>
                    <p>
                        Prosjektet startet med å avdekke flere kritiske utfordringer i Æ-appen gjennom brukerundersøkelser og testing. Brukerne opplevde blant annet problemer med navigasjon, manglende personalisering og uklarhet rundt aktivering av rabatter. I tillegg skapte vage feilmeldinger og tekniske utfordringer, som at strekkoder forsvant og krevde ny innlogging, frustrasjon hos brukerne. Appens sterke fokus på merkevarebygging gikk også på bekostning av brukersentrert informasjon. Med disse innsiktene som utgangspunkt, satte vi i gang arbeidet med å heve brukervennligheten og skape en bedre opplevelse for alle Æ-brukere.
                    </p>
                </div>

                <div className="standalone-paragraph">
                    <p className="text-medium">Evalusjonsmetoder</p>
                    <p>
                        For å forstå markedet og brukernes forventninger startet vi med en konkurranseanalyse. Dette ga oss innsikt i trender og muligheter for at Æ-appen kunne skille seg ut. Videre gjennomførte vi en heuristisk evaluering og brukertesting for å vurdere appens brukervennlighet. Den heuristiske evalueringen avdekket designproblemer basert på etablerte prinsipper, mens brukertesting med &quot;tenk-høyt&quot;-metoden ga oss verdifull innsikt i brukernes faktiske opplevelse.
                    </p>
                </div>

                <ParagraphWithImage
                    textSection={
                        <div>
                            <p className="text-medium">Evalusjonsmetoder</p>
                            <p>
                                Gjennom testing oppdaget vi at brukerne slet med scanning av rabattkoder i butikk, samt at personlige rabatter var vanskelige å finne. Hjemmesiden føltes overfylt, og plasseringen av &quot;logg ut&quot;- og &quot;slett konto&quot;-knappene skapte risiko for feiltrykk. Den heuristiske evalueringen avdekket også problemer som manglende flerspråklig støtte, uklare feilbeskjeder og navigasjonsutfordringer. Disse funnene har vært avgjørende i utformingen av et mer brukervennlig redesign.
                            </p>
                        </div>
                    }
                    imageSrc="/æ/æ-wireframes.png"
                />
            </div>
        </main>
    )
}