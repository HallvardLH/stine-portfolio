// Each project thumbnail is a background layer plus a transparent layer with
// the mockups. `foregroundSize` is the mockups' size in CSS pixels, which is the
// largest they are ever shown at.
export interface Thumbnail {
  foregroundSrc: string;
  foregroundSize: { width: number; height: number };
  backgroundColor?: string;
  backgroundSrc?: string;
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
    foregroundSrc: "/grundercampus/thumbnail-fg.webp",
    foregroundSize: { width: 906, height: 479 },
    backgroundColor: "#ffeae0",
  },
  portefoljeRedesign: {
    foregroundSrc: "/portefølje-redesign/thumbnail-fg.webp",
    foregroundSize: { width: 736, height: 478 },
    backgroundSrc: "/portefølje-redesign/thumbnail-bg.webp",
  },
  rema: {
    foregroundSrc: "/æ/thumbnail-fg.webp",
    foregroundSize: { width: 903, height: 560 },
    backgroundSrc: "/æ/thumbnail-bg.webp",
  },
  corwell: {
    foregroundSrc: "/corwell/thumbnail-fg.webp",
    foregroundSize: { width: 232, height: 467 },
    backgroundSrc: "/corwell/thumbnail-bg.webp",
  },
  ourspace: {
    foregroundSrc: "/ourspace/thumbnail-fg.webp",
    foregroundSize: { width: 842, height: 504 },
    backgroundColor: "#eae4e4",
  },
  dromme: {
    foregroundSrc: "/drømmeland/thumbnail-fg.webp",
    foregroundSize: { width: 819, height: 603 },
    backgroundColor: "#3cc6b2",
  },
} satisfies Record<string, Thumbnail>;
