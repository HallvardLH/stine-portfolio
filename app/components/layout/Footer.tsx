import "./Footer.css";
import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <p className="footer-margin">Kontakt</p>
          <div className="footer-contact">
            <h2 className="footer-title">Jeg hører gjerne fra deg!</h2>
            <a className="footer-email" href="mailto:stinenknutsen@gmail.com">
              stinenknutsen@gmail.com
            </a>
            <dl className="footer-details">
              <div>
                <dt>Telefon</dt>
                <dd>
                  <a href="tel:+4790089605">+ 47 900 89 605</a>
                </dd>
              </div>
              <div>
                <dt>LinkedIn</dt>
                <dd>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/stine-knutsen-77b311294"
                  >
                    Stine Knutsen ↗
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="footer-bottom">
          <nav aria-label="Bunn">
            <ul className="footer-nav">
              <li>
                <Link to="/#prosjekter">Portefølje</Link>
              </li>
              <li>
                <Link to="/om-meg">Om meg</Link>
              </li>
            </ul>
          </nav>
          <p className="footer-credit">
            Designet av Stine Knutsen · Utviklet av{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://hallvardlh.netlify.app/"
            >
              Hallvard Lygre Hetlelid
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
