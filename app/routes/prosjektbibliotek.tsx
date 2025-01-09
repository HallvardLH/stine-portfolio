// import { Outlet } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import ProjectCard from "~/components/card/ProjectCard";

export const meta: MetaFunction = () => {
    return [
        { title: "Prosjektbibliotek - Stine Knutsen" },
        { name: "description", content: "Prosjektbiblioteket til Stine Knutsen." },
    ];
};

export default function ProjectsLibaryRoute() {
    return (
        <div className="gutter">
            <main>
                <div className="text-section">
                    <h1 className="heading">
                        Prosjektbibliotek
                    </h1>
                    <p className="text-large">
                        Her er en samling av mine stolteste verk!
                    </p>
                </div>

                <ProjectCard
                    imageSrc="/thumbnails/æ-thumbnail.png"
                    date="Høsten 2024"
                    title="Redesign av Æ-appen"
                    description="Redesign av Rema 1000s medlemsapp med fokus på brukervennlighet"
                    link="/æ"
                />

                <ProjectCard
                    imageSrc="/thumbnails/æ-thumbnail.png"
                    date="Våren 2024"
                    title="Corwell"
                    description="En helseapp som forbedrer helseoppfølging ved hjelp av  lifelogging"
                    link="/corwell"
                />

                <ProjectCard
                    imageSrc="/thumbnails/æ-thumbnail.png"
                    date="Våren 2024"
                    title="Skreddernettside"
                    description="Sideprosjekt, nettside for skreddertjenester"
                    link="/skreddernettside"
                />

                <ProjectCard
                    imageSrc="/thumbnails/æ-thumbnail.png"
                    date="Høsten 2023"
                    title="OurSpace"
                    description="Et CSCW- verktøy for konsulentbransjen"
                    link="/ourspace"
                />

                <ProjectCard
                    imageSrc="/thumbnails/æ-thumbnail.png"
                    date="Våren 2023"
                    title="Drømmeland"
                    description="En læringsapp for barn om klima og miljø"
                    link="/drømmeland"
                />
            </main>
        </div>
    )
}