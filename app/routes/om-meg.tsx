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
                            <h1 className="heading heading-normal-color">
                                Litt om meg
                            </h1>
                            <p className="text-medium">
                                Jeg er en positiv og nysgjerrig person som trives best når jeg kan være kreativ, sosial og lære noe nytt.
                            </p>
                        </div>
                    }
                    textSection={
                        <div style={{ alignSelf: "center" }}>
                            <p>
                                Akkurat nå fullfører jeg bachelorgraden min i Medie- og Interaksjonsdesign ved Universitetet i Bergen.
                            </p>
                            <br />
                            <p>
                                UX-design er min store lidenskap, og det føles mer som en hobby enn et fag. Jeg har alltid et prosjekt på gang og kan sitte i timesvis i Figma - ofte mye lenger enn jeg burde. Inspirasjon finner jeg overalt, og SoMe-feeden min er full av UX-hacks!
                            </p>
                            <br />
                            <p>
                                Når jeg ikke jobber med design, liker jeg å bruke tid på små prosjekter som strikking eller matlaging, og jeg setter alltid pris på gode samtaler og hyggelige stunder med venner og familie.
                            </p>
                        </div>
                    }
                    imageSrc="/om-meg/headshot.png"
                    imageText=""
                    altText="A portrait of Stine Knutsen."
                />

                <StandaloneParagraph
                    textSection={
                        <div>
                            <h2 className="text-medium">Min vei inn i interaksjonsdesign</h2>
                            <p>
                                Jeg har alltid vært interessert i grafisk design og visuelle framstillinger, og har utforsket ulike kreative uttrykk som maling, tegning, foto og grafisk design. Jeg har til og med hatt en svært kort karriere innen keramikk!
                            </p>
                            <br />
                            <p>
                                Da jeg hørte om studiet i Medie- og Interaksjonsdesign (MIX) gjennom en venninne av søsteren min, visste jeg at dette var studiet for meg. Gjennom bacheloren har jeg fått en dyp forståelse for designprinsipper, brukervennlighet, design med brukerinvolvering, og hvordan vi kan lage løsninger som virkelig fungerer for brukerne. Jeg har også tilegnet meg kunnskap om HCI og informasjonsvitenskap, som styrker min evne til å lage intuitive og effektive brukeropplevelser.
                            </p>
                        </div>
                    }
                />

                <Gallery
                    images={[
                        {
                            src: "/om-meg/black-cat.jpg",
                            imageText: "Eksamensoppgaven min i kunst og visuelle virkemidler fra vidregående!",
                            altText: "A painting that Stine Knutsen has made, displaying abstract people and animnals in bright colors."
                        },
                        {
                            src: "/om-meg/inmeta.png",
                            imageText: '"Ute i felten" med gode medstudenter hos InMeta i Oslo, høsten 2023.',
                            altText: 'Stine and her two group-mates visiting the consulting agency InMeta.'
                        },
                        {
                            src: "/om-meg/gruppebilde.png",
                            imageText: "Jeg og gruppen min under en kreativ øvelse da vi jobbet med OurSpace, høsten 2023",
                            altText: 'Stine and her project-group doing a creative exercise while working on the OurSpace design.'
                        }
                    ]}
                />
            </div>
        </main>
    )
}