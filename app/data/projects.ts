import { thumbnails, type Thumbnail } from "~/data/thumbnails";

export type ProjectCategory = "universitet" | "internship" | "freelance";

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: "universitet", label: "Prosjekter på universitetet" },
  { id: "internship", label: "Internships" },
  { id: "freelance", label: "Freelance" },
];

export interface Project {
  category: ProjectCategory;
  thumbnail: Thumbnail;
  date: string;
  platformInfo: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
}

export interface ProjectYear {
  year: string;
  projects: Project[];
}

export const latestProject: Project = {
  category: "internship",
  thumbnail: thumbnails.finn,
  date: "Sommeren 2026",
  platformInfo: "Web",
  title: "FINN Eiendom",
  description:
    "Summer internship i FINN Eiendom med fokus på å forenkle påmeldingen til boligvisninger for meglere og boligkjøpere.",
  link: "/finn-eiendom",
  tags: ["Summer internship", "FINN Eiendom"],
};

export const projectsByYear: ProjectYear[] = [
  { year: "2026", projects: [latestProject] },
  {
    year: "2025",
    projects: [
      {
        category: "internship",
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
        category: "universitet",
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
        category: "freelance",
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
        category: "universitet",
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
        category: "universitet",
        thumbnail: thumbnails.ourspace,
        date: "Høsten 2023",
        platformInfo: "Software",
        title: "OurSpace",
        description: "Et CSCW-verktøy for konsulentbransjen.",
        link: "/ourspace",
        tags: ["Universitetet i Bergen", "Samarbeidsverktøy"],
      },
      {
        category: "universitet",
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

/** Projects that do not need to stand out. They have a page of their own, the archive. */
export const archiveByYear: ProjectYear[] = [
  {
    year: "2024",
    projects: [
      {
        category: "freelance",
        thumbnail: thumbnails.portefoljeRedesign,
        date: "Vinteren 2024",
        platformInfo: "Web",
        title: "Redesign: portefølje",
        description:
          "Redesign av en frontend utviklers portefølje for å fremheve arbeidet hans.",
        link: "/redesign-av-portefølje",
        tags: ["Freelance", "Redesign", "Case"],
      },
    ],
  },
];

export const allProjects: Project[] = [
  ...projectsByYear.flatMap(({ projects }) => projects),
  ...archiveByYear.flatMap(({ projects }) => projects),
];
