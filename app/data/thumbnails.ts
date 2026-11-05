// Each project thumbnail is a background layer plus a transparent layer with
// the mockups. `foregroundSize` is the mockups' size in CSS pixels, which is the
// largest they are ever shown at.
export interface Thumbnail {
  foregroundSrc: string;
  // Describes the mockups, for screen readers and the fullscreen view
  alt?: string;
  foregroundSize: { width: number; height: number };
  backgroundColor?: string;
  backgroundSrc?: string;
  // Less space around the mockups, for an image that is already cut tight
  tight?: boolean;
  // Keep the mockups to the left, leaving the right side to the background
  foregroundAlign?: "center" | "left";
  // Which part of the background image stays in view when it is cropped
  backgroundPosition?: string;
  // Small logo pinned to a corner instead of scaling with the mockups.
  // `width` is its size in CSS pixels, which is the largest it is ever shown at.
  corner?: {
    src: string;
    width: number;
    position: "top-right" | "bottom-right";
  };
}

export const thumbnails = {
  finn: {
    alt: "Skjermbilder fra FINN Eiendom",
    foregroundSrc: "/finn-eiendom/thumbnail-fg.webp",
    foregroundSize: { width: 775, height: 517 },
    backgroundSrc: "/finn-eiendom/thumbnail-bg.webp",
    backgroundPosition: "center bottom",
    foregroundAlign: "left",
    corner: {
      src: "/finn-eiendom/thumbnail-logo.svg",
      width: 107,
      position: "top-right",
    },
  },
  barnebank: {
    alt: "Skjermbilder fra Sparebanken Norge",
    foregroundSrc: "/barnebank/thumbnail-fg.webp",
    foregroundSize: { width: 874, height: 397 },
    backgroundColor: "#fcf9f4",
    corner: {
      src: "/barnebank/thumbnail-logo.svg",
      width: 64,
      position: "bottom-right",
    },
  },
  grundercampus: {
    alt: "Skjermbilder fra GründerCampus",
    foregroundSrc: "/grundercampus/thumbnail-fg.webp",
    foregroundSize: { width: 906, height: 479 },
    backgroundColor: "#ffeae0",
  },
  portefoljeRedesign: {
    alt: "Skjermbilder fra redesignet av porteføljen",
    foregroundSrc: "/redesign-av-portefolje/thumbnail-fg.webp",
    foregroundSize: { width: 736, height: 478 },
    backgroundSrc: "/redesign-av-portefolje/thumbnail-bg.webp",
  },
  rema: {
    alt: "Skjermbilder fra redesignet av Rema-appen",
    foregroundSrc: "/rema/thumbnail-fg.webp",
    foregroundSize: { width: 903, height: 560 },
    backgroundSrc: "/rema/thumbnail-bg.webp",
  },
  corwell: {
    alt: "Skjermbilde fra CorWell",
    foregroundSrc: "/corwell/thumbnail-fg.webp",
    foregroundSize: { width: 232, height: 467 },
    backgroundSrc: "/corwell/thumbnail-bg.webp",
  },
  ourspace: {
    alt: "Skjermbilder fra OurSpace",
    foregroundSrc: "/ourspace/thumbnail-fg.webp",
    foregroundSize: { width: 842, height: 504 },
    backgroundColor: "#eae4e4",
  },
  dromme: {
    alt: "Skjermbilder fra Drømmeland",
    foregroundSrc: "/drommeland/thumbnail-fg.webp",
    foregroundSize: { width: 819, height: 603 },
    backgroundColor: "#3cc6b2",
  },
  oppskrifter: {
    alt: "Stines oppskrifter på mobil og desktop: forsiden med spørsmålskortet og en oppskrift",
    foregroundSrc: "/stines-oppskrifter/cover-fg.webp",
    // Cut to the mockups, shown a little larger than they are drawn
    foregroundSize: { width: 1477, height: 608 },
    // Less space around the mockups on the article cover
    tight: true,
    backgroundSrc: "/stines-oppskrifter/cover-bg.webp",
    backgroundPosition: "center",
    backgroundColor: "#fff0fe",
  },
} satisfies Record<string, Thumbnail>;
