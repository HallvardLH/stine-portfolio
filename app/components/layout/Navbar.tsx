import "./Navbar.css";
import { Link, useLocation } from "@remix-run/react";
import { useState, useEffect, useRef } from "react";
import ThemeSwitch from "../general/ThemeSwitch";

interface NavbarProps {
    colorScheme: string | null;
    onThemeSwitch: () => void;
    currentTheme: "dark" | "light",
}

export default function Navbar({ colorScheme, onThemeSwitch, currentTheme }: NavbarProps) {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const navbarRef = useRef<HTMLDivElement | null>(null);
    const location = useLocation();

    const toggleDropdown = () => {
        setNavbarOpen(!navbarOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
            setNavbarOpen(false);
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
    }, [navbarOpen]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const mediaQuery = window.matchMedia("(min-width: 1050px)");

            const handleMediaChange = (e: MediaQueryListEvent) => {
                setIsLargeScreen(e.matches);
            };

            // Set the initial state
            setIsLargeScreen(mediaQuery.matches);

            // Add event listener
            mediaQuery.addEventListener("change", handleMediaChange);

            // Cleanup
            return () => mediaQuery.removeEventListener("change", handleMediaChange);
        }
    }, []);

    return (
        <nav ref={navbarRef} className={"navbar-container " + (colorScheme ? colorScheme : "")}>
            <div className="navbar-top">
                <Link to="/">
                    {isLargeScreen ? (
                        <h1 className="heading no-link">Stine Knutsen</h1>
                    ) : (
                        <h1 className="heading no-link">Stine Knutsen</h1>
                    )}
                </Link>
                {isLargeScreen ? (
                    <div className="navbar-links-desktop">
                        <Link onClick={() => setNavbarOpen(false)} to="/">
                            <p className={location.pathname === "/" ? "link-underlined" : ""}>Hjem</p>
                        </Link>
                        <Link
                            onClick={() => setNavbarOpen(false)}
                            to="/portefølje"
                        >
                            <p className={location.pathname === "/portef%C3%B8lje" ? "link-underlined" : ""}>Portefølje</p>
                        </Link>
                        <Link onClick={() => setNavbarOpen(false)} to="/om-meg">
                            <p className={location.pathname === "/om-meg" ? "link-underlined" : ""}>Om meg</p>
                        </Link>
                        <Link onClick={() => setNavbarOpen(false)} to="/kontakt">
                            <p className={location.pathname === "/kontakt" ? "link-underlined" : ""}>Kontakt</p>
                        </Link>
                        <ThemeSwitch onThemeSwitch={onThemeSwitch} currentTheme={currentTheme} />
                    </div>
                ) : (
                    <button
                        className="navbar-dropdown-toggle-container"
                        onClick={toggleDropdown}
                    >
                        <img
                            src={navbarOpen ? "/icons/close.svg" : "/icons/menu.svg"}
                            alt=""
                            className="navbar-dropdown-toggle icon"
                            draggable="false"
                        />
                    </button>
                )}
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
                            to="/portefølje"
                        >
                            <p className="text-medium">Portefølje</p>
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
                    <li>
                        <ThemeSwitch onThemeSwitch={onThemeSwitch} currentTheme={currentTheme} />
                    </li>
                </ul>
            </div>
        </nav>
    );
}
