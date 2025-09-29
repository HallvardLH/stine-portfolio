import type { MetaFunction } from "@remix-run/node";
import ParagraphWithImage from "~/components/project-sections/ParagraphWithImage";
import StandaloneParagraph from "~/components/project-sections/StandaloneParagraph";
import Gallery from "~/components/project-sections/Gallery";

export const meta: MetaFunction = () => {
    return [
        { title: "Om meg - Stine Knutsen" },
        { name: "description", content: "Jeg er en positiv og nysgjerrig person som trives best når jeg kan være kreativ, sosial og lære noe nytt." },
    ];
};

export default function ProjectsLibaryRoute() {
    return (
        <main>
            <div className="gutter project-section top-margin">

                <ParagraphWithImage
                    topSection={
                        <div className="shortened-paragraph" style={{ marginBottom: "1rem" }}>

                        </div>
                    }
                    textSection={
                        <div style={{ alignSelf: "flex-start", display: "flex", gap: "2rem", flexDirection: "column" }}>
                            <h1 className="heading heading-normal-color">
                                Om meg
                            </h1>
                            <p className="text-medium">
                                Jeg er en positiv person som trives best når jeg kan være kreativ, sosial og skape noe som betyr noe for andre!
                            </p>
                            <p>
                                Jeg tar master i Medie- og Interaksjonsdesign ved UiB, og UX-design gjør jeg fordi jeg virkelig liker det, ikke bare fordi det er studiet mitt. Jeg bruker mye tid i Figma, tester idéer og finner løsninger som faktisk gjør ting enklere for brukerne, ofte mye lenger enn jeg burde. Jeg henter inspirasjon fra små detaljer og hverdagslige situasjoner, og liker å lage design som både fungerer og føles naturlig å bruke.
                            </p>
                        </div>
                    }
                    imageSrc="/om-meg/headshot.webp"
                    imageText="Bilde av meg!"
                    altText="A portrait of Stine Knutsen."
                />

                <StandaloneParagraph
                    textSection={
                        <div>
                            <h2 className="text-medium">Min vei inn i interaksjonsdesign</h2>
                            <p>
                                Jeg har alltid vært interessert i grafisk design og visuelle framstillinger, og har utforsket uttrykk som maling, tegning, foto og grafisk design. Jeg har til og med hatt en svært kort keramikkkarriere!
                            </p>
                            <br />
                            <p>
                                Da jeg hørte om studiet i Medie- og Interaksjonsdesign (MIX) gjennom en venninne av søsteren min, visste jeg at dette var riktig for meg. Gjennom bacheloren fikk jeg en dyp forståelse for designprinsipper, brukervennlighet og design med brukerinvolvering,  kunnskap jeg nå får videreutvikle på masteren.
                            </p>
                            <br />
                            <p>
                                Min favorittdel av UX-prosessen er konseptualiseringen, der brukerinnsikt åpner for nye løsninger som treffer brukerne. Et eksempel på dette var da jeg jobbet med Sparebanken Norge, der vi endret kurs basert på innsikt og utviklet en løsning som til slutt ble veldig vellykket. Jeg har også kunnskap om HCI og informasjonsvitenskap, som styrker evnen min til å lage intuitive og effektive brukeropplevelser.
                            </p>
                        </div>
                    }
                />

                <Gallery
                    images={[
                        {
                            src: "/om-meg/spn.webp",
                            imageText: "Studentteamet hos Sparebanken Norge sommeren 2025 under presentasjonen av den nye Barnebanken.",
                            altText: "",
                            fullwidth: true,
                        },
                        {
                            src: "/om-meg/kickoff.webp",
                            imageText: "Pitchekonkurranse hos GründerCampus - som vi vant!",
                            altText: ""
                        },
                        {
                            src: "/om-meg/innovasjon.webp",
                            imageText: "Innovasjonsuken Opp sitt Kickoff der vi fikk presentere HourSpace",
                            altText: ""
                        },
                        {
                            src: "/om-meg/grundercampus.webp",
                            imageText: "Innovasjonsdagen 2025 - gruppen vant MVP-prisen for beste bachelorprosjekt!",
                            altText: "",
                            fullwidth: true,
                        },
                        {
                            src: "/om-meg/black-cat.webp",
                            imageText: "Eksamensoppgaven min i kunst og visuelle virkemidler fra videregående!",
                            altText: "A painting that Stine Knutsen has made, displaying abstract people and animnals in bright colors."
                        },
                        {
                            src: "/om-meg/inmeta.webp",
                            imageText: '"Ute i felten" med gode medstudenter hos InMeta i Oslo, høsten 2023.',
                            altText: 'Stine and her two group-mates visiting the consulting agency InMeta.'
                        },
                        {
                            src: "/om-meg/gruppebilde.webp",
                            imageText: "Jeg og gruppen min under en kreativ øvelse da vi jobbet med OurSpace, høsten 2023",
                            altText: 'Stine and her project-group doing a creative exercise while working on the OurSpace design.'
                        }
                    ]}
                />
            </div>
        </main>
    )
}