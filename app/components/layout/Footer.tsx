import "./Footer.css";
import { Link } from "@remix-run/react";
import Contact from "./Contact";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-main">
        <div className="footer-content">
          <nav>
            <ul className="navigation-list">
              <li>
                <Link to="/#prosjekter">
                  <p className="text-large">Portefølje</p>
                </Link>
              </li>
              <li>
                <Link to="/om-meg">
                  <p className="text-large">Om meg</p>
                </Link>
              </li>
            </ul>
          </nav>
          <Contact textClassName="text-large" />
        </div>

        <div className="socials-container">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/stine-knutsen-77b311294"
          >
            <img src={"/icons/linkedin.svg"} alt="" className="socials-icon" />
          </a>
        </div>
      </div>

      <div className="footer-credit-container">
        <p className="text-small">Designet av Stine Knutsen</p>
        <p className="text-small">
          Utviklet av{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://hallvardlh.netlify.app/"
          >
            Hallvard Lygre Hetlelid
          </a>
        </p>
      </div>
    </footer>
  );
}
