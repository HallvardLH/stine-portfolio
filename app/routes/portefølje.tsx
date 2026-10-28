import type { MetaFunction } from "@remix-run/node";
import ProjectCard from "~/components/card/ProjectCard";
import { thumbnails, type Thumbnail } from "~/data/thumbnails";

export const meta: MetaFunction = () => {
  return [
    { title: "Portefølje - Stine Knutsen" },
    { name: "description", content: "Porteføljen til Stine Knutsen." },
  ];
};

interface Project {
  thumbnail: Thumbnail;
  date: string;
  platformInfo: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
}

interface ProjectYear {
  year: string;
  projects: Project[];
}

const latestProject: Project = {
  thumbnail: thumbnails.finn,
  date: "Sommeren 2026",
  platformInfo: "Web",
  title: "FINN Eiendom",
  description:
    "Summer internship i FINN Eiendom med fokus på å forenkle påmeldingen til boligvisninger for meglere og boligkjøpere.",
  link: "/finn-eiendom",
  tags: ["Summer internship", "FINN Eiendom"],
};

const projectsByYear: ProjectYear[] = [
  {
    year: "2025",
    projects: [
      {
        thumbnail: thumbnails.barnebank,
        date: "Sommeren 2025",
        platformInfo: "App",
        title: "Sparebanken Norge",
        description:
          "Summer internship der vi designet deres nye bankløsning for barn.",
        link: "/barnebank",
        tags: ["Summer internship", "Sparebanken Norge", "Bank for barn"],
      },
      {
        thumbnail: thumbnails.grundercampus,
        date: "Våren 2025",
        platformInfo: "Web",
        title: "Bachelorprosjekt: GründerCampus",
        description:
          "Nettside, logo og visuell profil for det nyoppstartede studentnettverket GründerCampus.",
        link: "/grundercampus",
        tags: ["Universitetet i Bergen", "Bachelorprosjekt", "Visuelt & UX"],
      },
    ],
  },
  {
    year: "2024",
    projects: [
      {
        thumbnail: thumbnails.portefoljeRedesign,
        date: "Vinteren 2024",
        platformInfo: "Web",
        title: "Redesign: portefølje",
        description:
          "Redesign av en frontend utviklers portefølje for å fremheve arbeidet hans.",
        link: "/redesign-av-portefølje",
        tags: ["Freelance", "Redesign", "Case"],
      },
      {
        thumbnail: thumbnails.rema,
        date: "Høsten 2024",
        platformInfo: "App",
        title: "Redesign: Rema appen",
        description:
          "Redesign av Rema 1000s medlemsapp med fokus på brukervennlighet.",
        link: "/æ",
        tags: ["Freelance", "Redesign", "Case"],
      },
      {
        thumbnail: thumbnails.corwell,
        date: "Våren 2024",
        platformInfo: "App",
        title: "CorWell",
        description:
          "En helseapp som forbedrer helseoppfølging ved hjelp av lifelogging.",
        link: "/corwell",
        tags: ["Universitetet i Bergen", "Helse"],
      },
    ],
  },
  {
    year: "2023",
    projects: [
      {
        thumbnail: thumbnails.ourspace,
        date: "Høsten 2023",
        platformInfo: "Software",
        title: "HourSpace",
        description: "Et CSCW-verktøy for konsulentbransjen.",
        link: "/ourspace",
        tags: ["Universitetet i Bergen", "Samarbeidsverktøy"],
      },
      {
        thumbnail: thumbnails.dromme,
        date: "Våren 2023",
        platformInfo: "App",
        title: "Drømmeland",
        description:
          "En læringsapp for barn som underviser om bærekraft gjennom virtuelle aktiviteter.",
        link: "/drømmeland",
        tags: ["Universitetet i Bergen", "Læring", "Barn", "Bærekraft"],
      },
    ],
  },
];

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

        <ProjectCard {...latestProject} hero />

        {projectsByYear.map(({ year, projects }) => (
          <section key={year}>
            <div className="year-divider">
              <h2 className="heading">{year}</h2>
            </div>
            <div className="project-card-container">
              {projects.map((project) => (
                <ProjectCard key={project.link} {...project} />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
