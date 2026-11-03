// Share image per page. Each case uses its thumbnail, the rest fall back to DEFAULT_OG_IMAGE
const caseImages: Record<string, string> = {
  "/finn-eiendom": "/og/finn-eiendom.jpg",
  "/barnebank": "/og/barnebank.jpg",
  "/grundercampus": "/og/grundercampus.jpg",
  "/redesign-av-portefolje": "/og/redesign-av-portefolje.jpg",
  "/corwell": "/og/corwell.jpg",
  "/rema": "/og/rema.jpg",
  "/ourspace": "/og/ourspace.jpg",
  "/drommeland": "/og/drommeland.jpg",
  "/stines-oppskrifter": "/og/stines-oppskrifter.jpg",
};

// Home, Om meg, Tidslinje and the other pages share one image
const DEFAULT_OG_IMAGE: string | null = "/og/default.jpg";

export function ogImagePath(pathname: string): string | null {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  return caseImages[path] ?? DEFAULT_OG_IMAGE;
}
