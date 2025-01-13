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

            <div>
                <p className="text-large heading-normal-color">Kontaktinfo</p>
                <Contact />
            </div>

            <div className="socials-container">

            </div>
        </footer>
    )
}