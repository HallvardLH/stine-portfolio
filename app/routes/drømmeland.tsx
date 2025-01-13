import type { MetaFunction } from "@remix-run/node";
import CoverImage from "~/components/cover-image/CoverImage";
import StandaloneParagraph from "~/components/project-sections/StandaloneParagraph";
import ParagraphWithImage from "~/components/project-sections/ParagraphWithImage";
import TwoImages from "~/components/project-sections/TwoImages";

export const meta: MetaFunction = () => {
    return [
        { title: "drømmeland - Stine Knutsen" },
        { name: "description", content: "Drømmeland er en læringsapp for barn mellom 7 og 9 år. Appen underviser om bærekraft gjennom virituelle aktiviteter som resirkulering og havrydding. " },
    ];
};

export default function ProjectsLibaryRoute() {
    return (
        <main>
            <CoverImage src="/drømmeland/thumbnail.png" colorScheme="drømmeland-scheme" />
            <div className="gutter project-section drømmeland-scheme">
                <div className="text-section">
                    <h1 className="heading">
                        Drømmeland
                    </h1>
                    <p className="text-medium">
                        Drømmeland er en læringsapp for barn mellom 7 og 9 år. Appen underviser om bærekraft gjennom virituelle aktiviteter som resirkulering og havrydding.
                    </p>
                </div>

                <div>
                    <div className="project-info">
                        <p className="text-large">Plattform:</p>
                        <p className="text-medium">iPad - app</p>
                    </div>
                    <div className="project-info">
                        <p className="text-large">Periode:</p>
                        <p className="text-medium">Jan - jun 2023</p>
                    </div>
                </div>

                <StandaloneParagraph
                    textSection={
                        <>
                            <h2 className="text-medium">Bakgrunn</h2>
                            <p>
                                Drømmeland er utviklet for å engasjere barn i alderen 7–9 år i miljøvern gjennom bærekraftsrelaterte spill. Målet er å skape en læringsplattform som kan brukes både hjemme og i skolen, der lærere kan dele ut oppgaver og lekser via en egen lærerplattform. Barna kan løse bærekraftsutfordringer og tjene poeng, noe som kombinerer læring med lek. For å sikre relevans og engasjement ble det gjennomført kvalitative undersøkelser, inkludert observasjoner og intervjuer med barn i målgruppen.
                            </p>
                        </>
                    }
                />

                <ParagraphWithImage
                    textSection={
                        <div>
                            <h2 className="text-medium">Konsept</h2>
                            <p>
                                Konseptet for Drømmeland kombinerer læring og lek ved å tilby barn en interaktiv plattform der de kan utføre oppdrag, som virtuell resirkulering og havrydding. Gjennom oppgavene får barna praktisk innsikt i bærekraftige handlinger, samtidig som det er gøy. For å skape et univers som appellerer til målgruppen, utviklet vi personas og brukerhistorier som styrte designprosessen. Dette bidro til å forme et grensesnitt som er både lærerik og underholdende.
                            </p>
                        </div>
                    }
                    imageSrc="/drømmeland/spillreise.png"
                    imageText="Spilluniverset i Drømmeland "
                    altText="The game-enviroment in the Drømmeland app displayed on an IPad screen."
                />

                <StandaloneParagraph
                    textSection={
                        <>
                            <h2 className="text-medium">Samskaping med målgruppen</h2>
                            <p>
                                Prototypen for Drømmeland ble utformet med barnas perspektiv i sentrum. Vi holdt workshops der vi inviterte barn til å bidra med ideer til spilluniverset og avatarene. Workshopene inkluderte semistrukturerte intervjuer og samskaping, hvor barna deltok i tegneoppgaver som &quot;tegn et kult spillunivers&quot; og &quot;tegn din drømmeavatar.&quot; Disse tegningene inspirerte designet og gjorde prototypen målgruppetilpasset. Resultatet er en engasjerende og fargerik prototype som reflekterer barnas egne idéer og preferanser.
                            </p>
                        </>
                    }
                />

                <TwoImages
                    imageSrc1="/drømmeland/games.png"
                    imageText1='To av spillene i Drømmeland, “Pant” og “Redd Fisken”'
                    altText1='Two different games you can play in Drømmeland, "Recycle" and "Save the fish".'
                    imageSrc2="/drømmeland/min-side.png"
                    imageText2="Min side og klasseoversikt i Drømmeland"
                    altText2='Two IPad-screens displaying both "My page" and "Class room overview" in the Drømmeland app.'
                />
            </div>
        </main>
    )
}