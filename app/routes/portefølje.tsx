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
          <h1 className="heading-large">Portefølje</h1>
          <p className="text-large">
            Her er noen av prosjektene jeg har jobbet med og er mest stolt av.
            Alt fra internships og bachelorprosjektet mitt til oppdrag gjennom
            enkeltpersonforetaket mitt og andre prosjekter gjennom studiet.
          </p>

          <p className="text-large">
            Trykk på et av prosjektene for å lese mer!
          </p>
        </div>

        <ProjectCard
          imageSrc="/finn-eiendom/landing.webp"
          date="Sommeren 2026"
          platformInfo="Web"
          title="FINN Eiendom"
          description="Summer internship i FINN Eiendom med fokus på å forenkle påmeldingen til boligvisninger for meglere og boligkjøpere."
          link="/barnebank"
          imageZoom="desktop"
          hero
        />

        <div className="project-card-container">
          <ProjectCard
            imageSrc="/barnebank/thumbnail.webp"
            date="Sommeren 2025"
            platformInfo="App"
            title="Sparebanken Norge"
            description="Summer internship der vi designet deres nye bankløsning for barn"
            link="/barnebank"
            imageZoom="desktop"
          />

          <ProjectCard
            imageSrc="/grundercampus/thumbnail.webp"
            date="Våren 2025"
            platformInfo="Web"
            title="GründerCampus"
            description="Nettside, logo og visuell profil for studentnettverket GründerCampus"
            link="/grundercampus"
            imageZoom="desktop"
          />

          <ProjectCard
            imageSrc="/portefølje-redesign/thumbnail.webp"
            date="Vinteren 2024"
            platformInfo="Web"
            title="Redesign av portefølje"
            description="Redesign av en front-end utviklers portefølje for å fremheve arbeidet hans"
            link="/redesign-av-portefølje"
            imageZoom="desktop"
          />

          <ProjectCard
            imageSrc="/æ/thumbnail.webp"
            date="Høsten 2024"
            platformInfo="App"
            title="Redesign av Æ"
            description="Redesign av Rema 1000s medlemsapp med fokus på brukervennlighet"
            link="/æ"
          />

          <ProjectCard
            imageSrc="/corwell/thumbnail.webp"
            date="Våren 2024"
            platformInfo="App"
            title="Corwell"
            description="En helseapp som forbedrer helseoppfølging ved hjelp av lifelogging"
            link="/corwell"
          />

          <ProjectCard
            imageSrc="/ourspace/thumbnail.webp"
            date="Høsten 2023"
            platformInfo="Software"
            title="OurSpace"
            description="Et CSCW- verktøy for konsulentbransjen utviklet på bakgrunn av feltarbeid"
            link="/ourspace"
            imageZoom="desktop"
          />

          <ProjectCard
            imageSrc="/drømmeland/thumbnail.webp"
            date="Våren 2023"
            platformInfo="App"
            title="Drømmeland"
            description="En læringsapp for barn om klima og miljø med fokus på brukervennlighet"
            link="/drømmeland"
          />
        </div>
      </main>
    </div>
  );
}
