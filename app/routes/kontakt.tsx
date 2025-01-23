import type { MetaFunction } from "@remix-run/node";
import Contact from "~/components/layout/Contact";

export const meta: MetaFunction = () => {
    return [
        { title: "Kontakt - Stine Knutsen" },
        { name: "description", content: "Har du et spennende prosjekt på gang som du tror jeg kan bidra til, eller bare lyst til å prate om design, brukere og gode løsninger? Jeg er alltid tilgjengelig for å høre nye ideer og inspilll, svare på spørsmål eller kanskje til og med dele noen tips:)" },
    ];
};

export default function ProjectsLibaryRoute() {
    return (
        <div className="gutter top-margin">
            <main>
                <div className="text-section shortened-paragraph">
                    <h1 className="heading">
                        Kontakt
                    </h1>
                    <p className="text-medium">
                        Har du et spennende prosjekt på gang som du tror jeg kan bidra til, eller bare lyst til å prate om design, brukere og gode løsninger?
                    </p>
                    <p className="text-medium">
                        Jeg er alltid tilgjengelig for å høre nye ideer og inspilll, svare på spørsmål eller kanskje til og med dele noen tips:)
                    </p>
                </div>
                <div style={{ marginTop: "4rem" }}>
                    <Contact textClassName="text-medium" />
                </div>
            </main>
        </div>
    )
}