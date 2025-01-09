import "./Navigation.css";
import { Link } from "@remix-run/react";

export default function Navigation() {
    return (
        <nav className="">
            <p className="text-large">Navigasjon</p>
            <ul className="navigation-list">
                <li>
                    <Link to="/prosjektbibliotek">
                        <p className="text-medium">Prosjektbibliotek</p>
                    </Link>
                </li>
                <li>
                    <Link to="/about-me">
                        <p className="text-medium">Om meg</p>
                    </Link>
                </li>
                <li>
                    <Link to="/about-me">
                        <p className="text-medium">Kontakt</p>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}