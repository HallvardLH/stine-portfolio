import type { LoaderFunctionArgs } from "@remix-run/node";

const paths = [
  "/",
  "/om-meg",
  "/tidslinje",
  "/arkiv",
  "/finn-eiendom",
  "/barnebank",
  "/grundercampus",
  "/redesign-av-portefolje",
  "/corwell",
  "/rema",
  "/ourspace",
  "/drommeland",
  "/stines-oppskrifter",
];

// Built from the request's own address, so it is right on any domain
export const loader = ({ request }: LoaderFunctionArgs) => {
  const { origin } = new URL(request.url);
  const urls = paths
    .map((path) => `  <url><loc>${origin}${path}</loc></url>`)
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
