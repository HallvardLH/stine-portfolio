import "./Navbar.css";
import { Link } from "@remix-run/react";
import { useState, useEffect, useRef } from "react";

interface NavbarProps {
    colorScheme: string | null;
}

export default function Navbar({ colorScheme }: NavbarProps) {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const navbarRef = useRef<HTMLDivElement | null>(null); // Create a ref for the navbar

    const toggleDropdown = () => {
        setNavbarOpen(!navbarOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
            setNavbarOpen(false); // Close the navbar if the click is outside
        }
    };

    useEffect(() => {
        if (navbarOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [navbarOpen]); // Re-run effect when navbarOpen changes

    return (
        <nav ref={navbarRef} className={"navbar-container gutter " + (colorScheme ? colorScheme : "")}>
            <div className="navbar-top">
                <Link to="/">
                    <h1 className="heading no-link">UX - portefølje</h1>
                </Link>
                <button
                    className="navbar-dropdown-toggle-container"
                    onClick={() => toggleDropdown()}
                >
                    <img
                        src={navbarOpen ? "/icons/close.svg" : "/icons/menu.svg"}
                        alt=""
                        className="navbar-dropdown-toggle icon"
                    />
                </button>
            </div>
            <div
                className={
                    "navbar-dropdown gutter " +
                    (colorScheme ? colorScheme + " " : " ") +
                    (navbarOpen ? "navbar-expanded" : "")
                }
            >
                <ul className="navbar-list">
                    <li>
                        <Link onClick={() => setNavbarOpen(false)} to="/">
                            <p className="text-medium">Hjem</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => setNavbarOpen(false)}
                            to="/prosjektbibliotek"
                        >
                            <p className="text-medium">Prosjektbibliotek</p>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={() => setNavbarOpen(false)} to="/om-meg">
                            <p className="text-medium">Om meg</p>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={() => setNavbarOpen(false)} to="/kontakt">
                            <p className="text-medium">Kontakt</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
