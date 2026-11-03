import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { pageMeta } from "~/utils/meta";
import "~/components/case/Case.css";
import "~/components/archive/Archive.css";
import "~/components/not-found/NotFound.css";
import Button from "~/components/general/Button";

export const meta: MetaFunction = () => [
  ...pageMeta(
    "Fant ikke siden - Stine Knutsen",
    "Adressen finnes ikke, eller siden er flyttet.",
  ),
  { name: "robots", content: "noindex" },
];

// Any address that matches no other route ends up here, with the right status
export const loader = () => Response.json(null, { status: 404 });

export default function NotFoundRoute() {
  return (
    <main className="case archive">
      <section
        className="case-section archive-intro not-found"
        data-surface="light"
      >
        <div className="case-container">
          <div className="not-found-text">
            <Link to="/" className="archive-back">
              <Button label="Til forsiden" arrowDirection="left" />
            </Link>
            <h1 className="case-title-heading">Fant ikke siden</h1>
            <p className="archive-lead">
              Adressen finnes ikke, eller siden er flyttet.
            </p>
          </div>
          <p className="not-found-code" aria-hidden="true">
            404
          </p>
        </div>
      </section>
    </main>
  );
}
