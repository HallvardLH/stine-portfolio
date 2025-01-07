import "./Navbar.css";
import { Link } from "@remix-run/react";

export default function Navbar() {
    return (
        <nav className="container">
            <div className="navbar-inner">
                <img
                    src="/icons/menu.svg"
                    alt="Play Store logo"
                    className="store-logo"
                />
                <ul className="navbar-list">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/about-me">About me</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}