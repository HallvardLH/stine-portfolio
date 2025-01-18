import "./Footer.css";
import { Link } from "@remix-run/react";
import Contact from "./Contact";

export default function Footer() {
    return (
        <footer className="footer-container gutter">
            <nav className="">
                <p className="text-large heading-normal-color">Navigasjon</p>
                <ul className="navigation-list">
                    <li>
                        <Link to="/prosjektbibliotek">
                            <p className="text-medium">Prosjektbibliotek</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/om-meg">
                            <p className="text-medium">Om meg</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/kontakt">
                            <p className="text-medium">Kontakt</p>
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="footer-cotacts-and-socials">
                <div>
                    <p className="text-large heading-normal-color">Kontaktinfo</p>
                    <Contact />
                </div>

                <div className="socials-container">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/stineknutsen3">
                        <img
                            src={"/icons/behance.svg"}
                            alt=""
                            className="socials-icon"
                        />
                    </a>
                    <img
                        src={"/icons/linkedin.svg"}
                        alt=""
                        className="socials-icon"
                    />
                </div>
            </div>

            <div className="footer-credit-container">
                <p>Designet av Stine Knutsen</p>
                <p>Utviklet av <a target="_blank" rel="noopener noreferrer" href="https://hallvardlh.netlify.app/">Hallvard Lygre Hetlelid</a></p>
            </div>
        </footer>
    )
}