import { Link, useNavigate } from "@remix-run/react";
import { useState } from "react";
import ArchiveBox from "./ArchiveBox";

// The archive on the home page: a line about it, a button, and a box that
// opens when you point at either. A press lets the box open before the page changes.
export default function ArchiveTeaser() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const go = (event: React.MouseEvent) => {
    // New tab, new window and the like are left to the browser
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0)
      return;
    event.preventDefault();
    setOpen(true);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    setTimeout(() => navigate("/arkiv"), reduced.matches ? 0 : 450);
  };

  const pointing = {
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false),
  };

  return (
    <div className="archive-teaser">
      <div className="archive-teaser-text">
        <div className="archive-teaser-intro">
          <h2 className="home-projects-title">Arkiv</h2>
          <p className="case-lead">
            Prosjekter som har hjulpet meg komme dit jeg er i dag.
          </p>
        </div>
        <Link to="/arkiv" className="home-button" onClick={go} {...pointing}>
          Gå til arkiv
          <img src="/icons/arrow.svg" alt="" />
        </Link>
      </div>
      {/* The same link as the button, so the keyboard and screen readers only meet it once */}
      <Link
        to="/arkiv"
        className="archive-teaser-box"
        tabIndex={-1}
        aria-hidden="true"
        onClick={go}
        {...pointing}
      >
        <ArchiveBox open={open} />
      </Link>
    </div>
  );
}
