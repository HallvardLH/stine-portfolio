import type { MetaFunction } from "@remix-run/node";
import CoverImage from "~/components/cover-image/CoverImage";
import StandaloneParagraph from "~/components/project-sections/StandaloneParagraph";
import ParagraphWithImage from "~/components/project-sections/ParagraphWithImage";
import TwoImages from "~/components/project-sections/TwoImages";

export const meta: MetaFunction = () => {
    return [
        { title: "Skreddernettside - Stine Knutsen" },
        { name: "description", content: "Et fritidsprosjekt som gikk ut på å redesigne hjemmesiden til en skredder i Bergen. " },
    ];
};

export default function ProjectsLibaryRoute() {
    return (
        <main>
            <CoverImage src="/skreddernettside/thumbnail.png" colorScheme="skredder-scheme" />
            <div className="gutter project-section skredder-scheme">
                <div className="text-section">
                    <h1 className="heading">
                        Skreddernettside
                    </h1>
                    <p className="text-medium">
                        Et fritidsprosjekt som gikk ut på å redesigne hjemmesiden til en skredder i Bergen.
                    </p>
                </div>

                <div>
                    <div className="project-info">
                        <p className="text-large">Plattform:</p>
                        <p className="text-medium">Nettside</p>
                    </div>
                    <div className="project-info">
                        <p className="text-large">Periode:</p>
                        <p className="text-medium">April - mai 2024</p>
                    </div>
                </div>

                <StandaloneParagraph
                    textSection={
                        <>
                            <h2 className="text-medium">Bakgrunn</h2>
                            <p>
                                Skreddersiden er et fritidsprosjekt jeg utviklet for å styrke mine ferdigheter som UX-designer. Nettsiden er utformet som en nettbutikk for både tjenester og spesialtilpassede klær, hvor kundene enkelt kan bestille plagg, og deretter få dem tilpasset hos skredderen. Prosjektet ble basert på innsikter fra et intervju med en aktuell skredderklient, og designet er skapt for å møte denne bedriftens spesifikke behov og ønsker.
                            </p>
                        </>
                    }
                />

                <ParagraphWithImage
                    textSection={
                        <div>
                            <h2 className="text-medium">Grunnlag for utforming </h2>
                            <p>
                                For å sikre at nettsiden adresserte reelle behov, intervjuet jeg en lokal skredder som ønsket å modernisere og utvide virksomheten sin. Gjennom samtalen fikk jeg verdifulle innsikter om hva som var viktig for bedriften, som å effektivisere arbeidsflyten, redusere lagerkostnader og tilby kundene mer fleksibel og personlig service.
                            </p>
                            <br />
                            <p>
                                Nettsiden ble designet med brukervennlighet i fokus, og inkluderte blant annet et kontaktskjema som gjorde det enkelt for kundene å ta direkte kontakt med skredderen. Her kunne de stille spørsmål, få råd eller avtale tid for konsultasjoner. Målet var å skape en sømløs og effektiv løsning som forenklet kommunikasjonen mellom kunden og bedriften, og fjernet unødvendige mellomledd.
                            </p>
                        </div>
                    }
                    imageSrc="/skreddernettside/wireframes.png"
                    imageText="Wireframes for nettsiden"
                    altText="The wireframes for the Tailor-website, on both mobile and desktop screens."
                />

                <TwoImages
                    imageSrc1="/skreddernettside/landing-page.png"
                    imageText1="Tjenester-siden på nettsiden"
                    altText1='The "Our services" page in the Tailor-website, displayed on a desktop screen.'
                    imageSrc2="/skreddernettside/order.png"
                    imageText2="Bestillingssiden på nettsiden "
                    altText2="The page for ordering clothes from the tailor on a desktop screen."
                />

                <StandaloneParagraph
                    textSection={
                        <>
                            <h2 className="text-medium">Tilegnet erfaring fra prosjektet</h2>
                            <p>
                                Selv om Skreddersiden ble nøye planlagt og utviklet i tråd med bedriftens behov, ble prosjektet dessverre aldri realisert. Likevel var det en svært verdifull læringsopplevelse for meg som UX-designer. Gjennom prosjektet fikk jeg praktisk erfaring med å tilpasse design til reelle behov, samtidig som jeg lærte viktigheten av grundig forarbeid, effektiv kommunikasjon med klienter, og hvordan man skaper en nettside som virkelig støtter bedriftens mål.
                            </p>
                            <br />
                            <p>
                                Om jeg skulle redesignet prototypen i dag, ville jeg gjort flere endringer. Blant annet ville jeg justert størrelsen på elementene for en mer balansert skjermutnyttelse, samt oppdatert typografien og fargeskjemaet for å gi nettsiden et lysere og mer innbydende uttrykk. Dette prosjektet har vært en viktig del av min utvikling som designer, og jeg tar med meg mange nyttige erfaringer videre.
                            </p>
                        </>
                    }
                />
            </div>
        </main>
    )
}