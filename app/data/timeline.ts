export type TimelineCategory =
  | "utdanning"
  | "arbeid"
  | "sommer"
  | "universitet"
  | "frivillig";

export const categories: { id: TimelineCategory; label: string }[] = [
  { id: "utdanning", label: "Utdanning" },
  { id: "arbeid", label: "Arbeidserfaring" },
  { id: "sommer", label: "Summer internships" },
  { id: "universitet", label: "Arbeid på universitetet" },
  { id: "frivillig", label: "Frivillig arbeid" },
];

export const categoryLabel = (id: TimelineCategory) =>
  categories.find((category) => category.id === id)?.label ?? id;

export interface TimelinePhoto {
  src: string;
  alt: string;
  caption: string;
}

export interface TimelineEntry {
  id: string;
  category: TimelineCategory;
  /** The year the entry sits under in the list */
  year: string;
  /** Shown as written, e.g. "juni – august 2026" */
  dateLabel: string;
  title: string;
  org: string;
  text?: string;
  methods?: string;
  note?: string;
  link?: { to: string; label: string };
  photos?: TimelinePhoto[];
  /** Still going, so the bar runs up to today */
  live?: boolean;
  /** The row in the overview. The bars are approximate, the dates above are exact. */
  lane: number;
  start: number;
  end?: number;
  /** Where a bar that is still going is planned to end; the bar runs there */
  plannedEnd?: number;
  /** Text inside the bar, for bars wide enough to hold it. Also the short name in the list. */
  barLabel?: string;
  /** Last year it was going on, when that is later than the year it sits under */
  through?: number;
  /** Highlighted in the overview and the list */
  featured?: boolean;
}

/** Year with months as a decimal: month 1 is the start of the year */
const at = (year: number, month = 1) => year + (month - 1) / 12;

// Newest first, as they are shown
export const timeline: TimelineEntry[] = [
  {
    id: "mix301",
    category: "universitet",
    year: "2026",
    dateLabel: "september – desember 2026",
    title: "Læreassistent MIX301",
    org: "Universitetet i Bergen",
    text: "Veileder studentprosjekter i et KI-fokusert emne som handler om å anvende KI i både prosess og endelig løsning. Arbeidet inkluderer fasilitering av workshops og bistand i idéutvikling, prosjektarbeid og semesteroppgaver.",
    live: true,
    barLabel: "Læreassistent MIX301",
    lane: 6,
    start: at(2026, 9),
    plannedEnd: at(2027, 1),
  },
  {
    id: "finn",
    category: "sommer",
    year: "2026",
    dateLabel: "juni – august 2026",
    title: "UX-designer sommerstudent",
    org: "FINN Eiendom (Vend) · Oslo",
    text: "Utforsket og designet en helhetlig løsning for boligvisninger: enklere påmelding, et dashboard for organisering og vurdering av boliger, og hvordan data fra påmeldinger kan skape verdi for meglere.",
    methods:
      "Innsikt, intervjuer, workshops, konseptutvikling, prototyping og brukertesting.",
    note: "Påmeldingsskjemaet ble lansert samme høst",
    link: { to: "/finn-eiendom", label: "Les om prosjektet" },
    featured: true,
    barLabel: "FINN Eiendom",
    photos: [
      {
        src: "/om-meg/finn-presentasjon.webp",
        alt: "Fire personer foran en skjerm med presentasjonen av sommerprosjektet.",
        caption: "Presentasjonen av sommerprosjektet hos FINN.",
      },
      {
        src: "/om-meg/finn-teamet.webp",
        alt: "Sommerteamet utenfor kontoret hos FINN.",
        caption: "Sommerteamet utenfor kontoret hos FINN!",
      },
    ],
    lane: 3,
    start: at(2026, 6),
    end: at(2026, 9),
  },
  {
    id: "innovasjonsdagene",
    category: "universitet",
    year: "2026",
    dateLabel: "februar – juni 2026",
    title: "Arrangør Innovasjonsdagene 2026",
    org: "Universitetet i Bergen · Media City Bergen",
    text: "Planla og gjennomførte innovasjonskonferanser sammen med en medstudent. Ansvar for prosjektkoordinering, jury for MVP-priser, kommunikasjon med deltakere og samarbeidspartnere, samt PR og rapportering.",
    photos: [
      {
        src: "/om-meg/innovasjonsdagen.webp",
        alt: "Stine og Tuva åpner arrangementet.",
        caption:
          "Våren 2026 hadde jeg ansvaret for å arrangere instituttets innovasjonsdag.",
      },
      {
        src: "/om-meg/innovasjonsdagen-publikum.webp",
        alt: "Publikum og jury ser på pitching.",
        caption:
          "Med rekordmange publikumere, pitcher og deltakende emner ble dagen en stor suksess!",
      },
    ],
    barLabel: "Arrangør Innovasjonsdagene 2026",
    lane: 5,
    start: at(2026, 2),
    end: at(2026, 7),
  },
  {
    id: "master",
    category: "utdanning",
    year: "2025",
    dateLabel: "august 2025 – juni 2027",
    title: "Mastergrad i Medie- og interaksjonsdesign",
    org: "Universitetet i Bergen",
    text: "Innhenting og analyse av brukerinnsikt, designprinsipper og universell utforming.",
    note: "Planlagt ferdig i 2027",
    live: true,
    lane: 0,
    start: at(2025, 8),
    plannedEnd: at(2027, 7),
    barLabel: "Master i interaksjonsdesign",
  },
  {
    id: "mix203",
    category: "universitet",
    year: "2025",
    dateLabel: "august – desember 2025",
    title: "Læreassistent MIX203",
    org: "Universitetet i Bergen",
    text: "Veiledet studenter i å utvikle brukerorienterte digitale løsninger for mediebransjen, med oppfølging av prototyper og feltarbeid hos samarbeidende bedrifter.",
    barLabel: "Læreassistent MIX203",
    lane: 4,
    start: at(2025, 8),
    end: at(2026, 1),
  },
  {
    id: "sparebanken",
    category: "sommer",
    year: "2025",
    dateLabel: "juni – september 2025",
    title: "UX-designer sommerstudent",
    org: "Sparebanken Norge · Bergen",
    text: "Designet en ny bankløsning for barn sammen med en medstudent, gjennom hele UX-prosessen fra innsiktsarbeid til prototyping og iterering.",
    note: "Lansert til bankens kunder samme sommer",
    link: { to: "/barnebank", label: "Les om prosjektet" },
    featured: true,
    barLabel: "Sparebanken Norge",
    photos: [
      {
        src: "/om-meg/spn.webp",
        alt: "Studentteamet hos Sparebanken Norge.",
        caption:
          "Studentteamet hos Sparebanken Norge sommeren 2025 under presentasjonen av den nye Barnebanken.",
      },
    ],
    lane: 3,
    start: at(2025, 6),
    end: at(2025, 10),
  },
  {
    id: "freelance",
    category: "arbeid",
    year: "2025",
    dateLabel: "februar 2025 – pågående",
    title: "UX-designer freelance",
    org: "Stine Knutsen UX Design · Bergen",
    text: "Driver enkeltpersonforetak og gjennomfører UX-prosjekter ved siden av studiene. Har blant annet videreutviklet nettsiden til GründerCampus, med fokus på informasjonsstruktur, brukerflyt og visuell tydelighet.",
    live: true,
    lane: 2,
    start: at(2025, 2),
    barLabel: "Freelance",
  },
  {
    id: "kors-pa-halsen",
    category: "frivillig",
    year: "2024",
    dateLabel: "2024 – 2025",
    title: "Røde Kors",
    org: "Røde Kors Bergen",
    text: "Var frivillig på chatten til Kors på halsen, der jeg snakket med barn og unge som ønsket noen å dele tanker og opplevelser med.",
    through: 2025,
    lane: 7,
    start: at(2024),
    end: at(2025),
    barLabel: "Røde Kors",
  },
  {
    id: "redd-barna",
    category: "frivillig",
    year: "2023",
    dateLabel: "2023 – 2024",
    title: "Redd Barna, aktiviteter for barn på asylmottak",
    org: "Redd Barna Bergen",
    text: "Deltok i og arrangerte kreative aktiviteter for barn på asylmottak i Bergen, blant annet tegning, maling og perling.",
    through: 2024,
    lane: 7,
    start: at(2023),
    end: at(2024),
    barLabel: "Redd Barna",
  },
  {
    id: "bachelor",
    category: "utdanning",
    year: "2022",
    dateLabel: "august 2022 – juni 2025",
    title: "Bachelorgrad i Medie- og interaksjonsdesign",
    org: "Universitetet i Bergen",
    text: "UX- og interaksjonsdesign med fokus på brukervennlige digitale løsninger og effektive arbeidsprosesser.",
    note: "Vant MVP-prisen for bachelorprosjektet",
    link: { to: "/grundercampus", label: "Les om prosjektet" },
    photos: [
      {
        src: "/om-meg/grundercampus.webp",
        alt: "Bachelorgruppen med diplom, sammen med juryen.",
        caption:
          "Innovasjonsdagen 2025 - gruppen vant MVP-prisen for beste bachelorprosjekt!",
      },
      {
        src: "/om-meg/kickoff.webp",
        alt: "Stine og Pernille på pitchekonkurranse hos GründerCampus.",
        caption: "Pitchekonkurranse hos GründerCampus - som vi vant!",
      },
      {
        src: "/om-meg/gruppebilde.webp",
        alt: "Stine og prosjektgruppen under en kreativ øvelse.",
        caption:
          "Jeg og gruppen min under en kreativ øvelse da vi jobbet med OurSpace, høsten 2023.",
      },
      {
        src: "/om-meg/innovasjon.webp",
        alt: "Stine har ordet på Innovasjonsuken Opp.",
        caption:
          "Innovasjonsuken Opp sitt Kickoff der vi fikk presentere OurSpace.",
      },
    ],
    through: 2025,
    lane: 0,
    start: at(2022, 8),
    end: at(2025, 7),
    barLabel: "Bachelor i interaksjonsdesign",
  },
  {
    id: "kjelsas",
    category: "arbeid",
    year: "2021",
    dateLabel: "august 2021 – juni 2022",
    title: "Assistent, Kjelsås barneskole",
    org: "Osloskolen",
    text: "Bidro i undervisningen og fulgte opp elevene i skolehverdagen. Var også vikar og deltok på ekskursjoner og aktiviteter utenfor skolen.",
    through: 2022,
    lane: 2,
    start: at(2021, 8),
    end: at(2022, 7),
    barLabel: "Kjelsås barneskole",
  },
  {
    id: "bergans",
    category: "arbeid",
    year: "2019",
    dateLabel: "november 2019 – juni 2025",
    title: "Butikkmedarbeider",
    org: "Bergans, Bergen og Oslo",
    text: "Jobbet med kundeservice, salg og veiledning av kunder, i tillegg til vanlige butikkoppgaver som varepåfylling og å holde butikken ryddig.",
    through: 2025,
    lane: 1,
    start: at(2019, 11),
    end: at(2025, 7),
    barLabel: "Bergans",
  },
];

/** The rows in the overview. Rows hold one experience each where they overlap. */
export const lanes: {
  label?: string;
  tall?: boolean;
  featured?: boolean;
  /** The name and dates stand beside the bar, for bars too short to hold them */
  notes?: boolean;
}[] = [
  { label: "Utdanning", tall: true },
  { label: "Arbeidserfaring" },
  {},
  { label: "Summer internships", featured: true },
  { label: "Arbeid på universitetet", notes: true },
  { notes: true },
  { notes: true },
  { label: "Frivillig arbeid" },
];

/** The chart runs from here to there, and is moved sideways to see it all */
export const chartStart = at(2019, 10);
export const chartEnd = 2027.75;

/** Today as a decimal year, to the month so the server and the browser agree */
export function currentYear(): number {
  const now = new Date();
  return now.getFullYear() + now.getMonth() / 12;
}

/** The last year an entry was going on, for showing what runs alongside each year */
export function lastYear(entry: TimelineEntry): number {
  return (
    entry.through ??
    (entry.live ? new Date().getFullYear() : Number(entry.year))
  );
}

export const years = Array.from(new Set(timeline.map((entry) => entry.year)));
