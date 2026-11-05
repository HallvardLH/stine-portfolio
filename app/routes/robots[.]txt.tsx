import type { LoaderFunctionArgs } from "@remix-run/node";

export const loader = ({ request }: LoaderFunctionArgs) => {
  const { origin } = new URL(request.url);

  return new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`,
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
};
