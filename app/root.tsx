import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
} from "@remix-run/react";
import { themeCookie } from "./utils/theme.server";
import { useState, useEffect } from "react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import './styles/global.css';
import './styles/text.css';
import './styles/layout.css';

export async function loader({ request }: { request: Request }) {
  const cookieHeader = request.headers.get("Cookie");
  const theme = (await themeCookie.parse(cookieHeader)) || "light"; // Default theme
  return Response.json({ theme });
}

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const newTheme = formData.get("theme");

  if (newTheme !== "dark" && newTheme !== "light") {
    throw new Error("Invalid theme value");
  }

  return Response.json(
    { success: true },
    {
      headers: {
        "Set-Cookie": await themeCookie.serialize(newTheme),
      },
    }
  );
}

export default function App() {
  const { theme } = useLoaderData<typeof loader>();
  const [currentTheme, setCurrentTheme] = useState(theme);
  const location = useLocation();

  // Custom color schemes for certain pages
  const getNavbarColorScheme = (pathname: string) => {
    // æ is a scary character, so we need to use %C3%A6 instead
    if (pathname.includes("/æ") || pathname.includes("/%C3%A6")) {
      return "æ-scheme";
    }
    if (pathname.includes("/corwell")) {
      return "corwell-scheme";
    }
    if (pathname.includes("/skreddernettside")) {
      return "skredder-scheme";
    }
    if (pathname.includes("/ourspace")) {
      return "ourspace-scheme";
    }
    if (pathname.includes("/dr%C3%B8mmeland")) {
      return "drømmeland-scheme";
    }
    return null; // Default color scheme
  };

  // Sync client-side theme preference
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  return (
    <html lang="en" data-theme={currentTheme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <title>Stine Knutsen</title>
        <Links />
      </head>
      <body>
        <button
          style={{ position: "absolute", top: "0", zIndex: 1999 }}
          onClick={() => {
            const newTheme = currentTheme === "light" ? "dark" : "light";
            document.documentElement.setAttribute("data-theme", newTheme);
            setCurrentTheme(newTheme);
            // Update the cookie via form submission
            const form = new FormData();
            form.append("theme", newTheme);
            fetch("/?index", { method: "POST", body: form });
          }}
        >
          Toggle Theme
        </button>
        <Navbar colorScheme={getNavbarColorScheme(location.pathname)} />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
