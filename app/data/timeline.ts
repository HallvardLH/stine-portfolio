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
  /** Where a bar that is still going is planned to end */
  plannedEnd?: number;
  /** Text inside the bar, for bars wide enough to hold it */
  barLabel?: string;
}

/** Year with months as a decimal: month 1 is the start of the year */
const at = (year: number, month = 1) => year + (month - 1) / 12;

// Newest first, as they are shown
export const timeline: TimelineEntry[] = [
  {
    id: "mix301",
    category: "universitet",
    year: "2026",
    dateLabel: "september 2026 – pågående",
    title: "Læreassistent MIX301",
    org: "Universitetet i Bergen",
    text: "Veileder UX-prosjekter i et KI-fokusert emne, med KI gjennom hele UX-prosessen. Fasiliterer workshops og bistår med idéutvikling, prosjektarbeid og semesteroppgaver.",
    live: true,
    lane: 4,
    start: at(2026, 9),
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
    lane: 4,
    start: at(2026, 2),
    end: at(2026, 7),
  },
  {
    id: "master",
    category: "utdanning",
    year: "2025",
    dateLabel: "2025 – 2027",
    title: "Mastergrad i Medie- og interaksjonsdesign",
    org: "Universitetet i Bergen",
    text: "Innhenting og analyse av brukerinnsikt, designprinsipper og universell utforming.",
    note: "Planlagt ferdig i 2027",
    live: true,
    lane: 0,
    start: at(2025, 8),
    plannedEnd: at(2027, 6),
    barLabel: "Master",
  },
  {
    id: "mix203",
    category: "universitet",
    year: "2025",
    dateLabel: "august – desember 2025",
    title: "Læreassistent MIX203",
    org: "Universitetet i Bergen",
    text: "Veiledet studenter i å utvikle brukerorienterte digitale løsninger for mediebransjen, med oppfølging av prototyper og feltarbeid hos samarbeidende bedrifter.",
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
    title: "Kors på Halsen",
    org: "Røde Kors · Bergen",
    lane: 5,
    start: at(2024),
    end: at(2025),
    barLabel: "Kors på Halsen",
  },
  {
    id: "redd-barna",
    category: "frivillig",
    year: "2023",
    dateLabel: "2023 – 2024",
    title: "Redd Barna",
    org: "Bergen",
    lane: 5,
    start: at(2023),
    end: at(2024),
    barLabel: "Redd Barna",
  },
  {
    id: "bachelor",
    category: "utdanning",
    year: "2022",
    dateLabel: "2022 – 2025",
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
    lane: 0,
    start: at(2022, 8),
    end: at(2025, 6),
    barLabel: "Bachelor",
  },
  {
    id: "bergans",
    category: "arbeid",
    year: "2019",
    dateLabel: "november 2019 – juni 2025",
    title: "Butikkmedarbeider",
    org: "Bergans · Bergen/Oslo",
    text: "Ansvar for åpning og stenging av butikk, kundeservice og avstemning av kasseapparat.",
    lane: 1,
    start: at(2019, 11),
    end: at(2025, 7),
    barLabel: "Bergans",
  },
];

/** The rows in the overview. Arbeidserfaring has two, as the jobs overlap. */
export const lanes: { label?: string }[] = [
  { label: "Utdanning" },
  { label: "Arbeidserfaring" },
  {},
  { label: "Summer internships" },
  { label: "Arbeid på universitetet" },
  { label: "Frivillig arbeid" },
];

/** The years the overview covers: from mid-2019 to mid-2027 */
export const chartStart = 2019.5;
export const chartEnd = 2027.5;

/** Today as a decimal year, to the month so the server and the browser agree */
export function currentYear(): number {
  const now = new Date();
  return now.getFullYear() + now.getMonth() / 12;
}

export const years = Array.from(new Set(timeline.map((entry) => entry.year)));
