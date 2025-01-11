import "./Navbar.css";
import { Link } from "@remix-run/react";
import { useState } from "react";

interface NavbarProps {
    colorScheme: string | null;
}

export default function Navbar({ colorScheme }: NavbarProps) {

    const [navbarOpen, setNavbarOpen] = useState(false);

    const toggleDropdown = () => {
        setNavbarOpen(!navbarOpen);
    }

    return (
        <nav className={"navbar-container gutter " + (colorScheme ? colorScheme : "")}>
            <div className="navbar-top">
                <Link to="/">
                    <h1 className="heading no-link">
                        UX - portefølje
                    </h1>
                </Link>
                <button className="navbar-dropdown-toggle-container" onClick={() => { toggleDropdown() }}>
                    <img
                        src={navbarOpen ? "/icons/close.svg" : "/icons/menu.svg"}
                        alt=""
                        className="navbar-dropdown-toggle"
                    />
                </button>
            </div>
            {navbarOpen && (
                <div className={"navbar-dropdown gutter " + (colorScheme ? colorScheme : "")}>
                    <ul className="navbar-list">
                        <li>
                            <Link onClick={() => setNavbarOpen(false)} to="/">
                                <p className="text-medium">Hjem</p>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => setNavbarOpen(false)} to="/prosjektbibliotek">
                                <p className="text-medium">Prosjektbibliotek</p>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => setNavbarOpen(false)} to="/about-me">
                                <p className="text-medium">Om meg</p>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => setNavbarOpen(false)} to="/about-me">
                                <p className="text-medium">Kontakt</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}