import "./Navbar.css";
import { Link, useLocation } from "@remix-run/react";
import { useState, useEffect, useRef } from "react";
import ThemeSwitch from "../general/ThemeSwitch";

interface NavbarProps {
  colorScheme: string | null;
  onThemeSwitch: () => void;
  currentTheme: "dark" | "light";
}

export default function Navbar({
  colorScheme,
  onThemeSwitch,
  currentTheme,
}: NavbarProps) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  const toggleDropdown = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target as Node)
    ) {
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

  const isCurrent = (path: string) => location.pathname === path;
  const close = () => setNavbarOpen(false);

  return (
    <nav
      ref={navbarRef}
      className={"navbar-container " + (colorScheme ? colorScheme : "")}
    >
      <div className="navbar-top">
        <Link to="/" className="navbar-logo" onClick={close}>
          Stine Knutsen
        </Link>
        {isLargeScreen ? (
          <div className="navbar-links-desktop">
            <Link onClick={close} to="/#prosjekter" className="navbar-link">
              Portefølje
            </Link>
            <Link
              onClick={close}
              to="/om-meg"
              className={
                "navbar-link " + (isCurrent("/om-meg") ? "navbar-link-current" : "")
              }
              aria-current={isCurrent("/om-meg") ? "page" : undefined}
            >
              Om meg
            </Link>
            <a href="#kontakt" className="navbar-link">
              Kontakt
            </a>
            <ThemeSwitch
              onThemeSwitch={onThemeSwitch}
              currentTheme={currentTheme}
            />
          </div>
        ) : (
          <button
            className="navbar-dropdown-toggle"
            onClick={toggleDropdown}
            aria-expanded={navbarOpen}
            aria-controls="navbar-menu"
            aria-label={navbarOpen ? "Lukk menyen" : "Åpne menyen"}
          >
            <img
              src={navbarOpen ? "/icons/close.svg" : "/icons/menu.svg"}
              alt=""
              className="navbar-dropdown-icon icon"
              draggable="false"
            />
          </button>
        )}
      </div>
      {!isLargeScreen && (
        <div
          id="navbar-menu"
          className={"navbar-dropdown " + (navbarOpen ? "navbar-expanded" : "")}
          aria-hidden={!navbarOpen}
        >
          <ul className="navbar-list">
            <li>
              <Link onClick={close} to="/#prosjekter">
                Portefølje
              </Link>
            </li>
            <li>
              <Link
                onClick={close}
                to="/om-meg"
                className={isCurrent("/om-meg") ? "navbar-link-current" : ""}
                aria-current={isCurrent("/om-meg") ? "page" : undefined}
              >
                Om meg
              </Link>
            </li>
            <li>
              <a onClick={close} href="#kontakt">
                Kontakt
              </a>
            </li>
            <li>
              <ThemeSwitch
                onThemeSwitch={onThemeSwitch}
                currentTheme={currentTheme}
                showLabel
              />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
