// import { Outlet } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import ProjectCard from "~/components/card/ProjectCard";

export const meta: MetaFunction = () => {
    return [
        { title: "Portefølje - Stine Knutsen" },
        { name: "description", content: "Porteføljen til Stine Knutsen." },
    ];
};

export default function ProjectsLibaryRoute() {
    return (
        <div className="gutter top-margin">
            <main>
                <div className="text-section">
                    <h1 className="heading">
                        Portefølje
                    </h1>
                    <p className="text-large">
                        Her er en samling av mine stolteste verk!
                    </p>
                </div>

                <div className="project-card-container">

                    <ProjectCard
                        imageSrc="/portefølje-redesign/thumbnail.png"
                        date="Vinteren 2024"
                        title="Redesign av portefølje"
                        description="Redesign av en front-end utviklers portefølje for å effektivt fremheve arbeidet hans"
                        link="/redesign-av-portefølje"
                        imageZoom="desktop"
                    />


                    <ProjectCard
                        imageSrc="/æ/thumbnail.png"
                        date="Høsten 2024"
                        title="Redesign av Æ"
                        description="Redesign av Rema 1000s medlemsapp med fokus på brukervennlighet"
                        link="/æ"
                    />

                    <ProjectCard
                        imageSrc="/corwell/thumbnail.png"
                        date="Våren 2024"
                        title="Corwell"
                        description="En helseapp som forbedrer helseoppfølging ved hjelp av  lifelogging"
                        link="/corwell"
                    />

                    {/* <ProjectCard
                        imageSrc="/skreddernettside/thumbnail.png"
                        date="Våren 2024"
                        title="Skreddernettside"
                        description="Sideprosjekt, nettside for skreddertjenester"
                        link="/skreddernettside"
                        imageZoom="desktop"
                    /> */}

                    <ProjectCard
                        imageSrc="/ourspace/thumbnail.png"
                        date="Høsten 2023"
                        title="OurSpace"
                        description="Et CSCW- verktøy for konsulentbransjen"
                        link="/ourspace"
                        imageZoom="desktop"
                    />

                    <ProjectCard
                        imageSrc="/drømmeland/thumbnail.png"
                        date="Våren 2023"
                        title="Drømmeland"
                        description="En læringsapp for barn om klima og miljø"
                        link="/drømmeland"
                    />

                </div>
            </main>
        </div>
    )
}