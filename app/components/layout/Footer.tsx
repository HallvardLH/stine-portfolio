import "./Footer.css";
import { Link } from "@remix-run/react";
import Contact from "./Contact";

interface FooterProps {
    colorScheme: string | null,
}

export default function Footer({ colorScheme }: FooterProps) {
    return (
        <footer className="footer-container gutter">
            <nav>
                <h2 className={"text-large " + (colorScheme ? colorScheme : "heading-normal-color")}>Navigasjon</h2>
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

            <div className="footer-contacts-and-socials">
                <div>
                    <h2 className={"text-large " + (colorScheme ? colorScheme : "heading-normal-color")}>Kontaktinfo</h2>
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
                <p style={{ fontWeight: "lighter" }}>Designet av Stine Knutsen</p>
                <p style={{ fontWeight: "lighter" }}>Utviklet av <a style={{ fontWeight: "lighter" }} target="_blank" rel="noopener noreferrer" href="https://hallvardlh.netlify.app/">Hallvard Lygre Hetlelid</a></p>
            </div>
        </footer>
    )
}