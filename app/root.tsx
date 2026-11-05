import type { MetaFunction } from "@remix-run/node";
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
import { ogImagePath } from "./utils/ogImage";
import { useState, useEffect } from "react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import "./styles/global.css";
import "./styles/text.css";
import "./styles/layout.css";

// Fallback title for pages without their own, such as the error page
export const meta: MetaFunction = () => [{ title: "Stine Knutsen" }];

export async function loader({ request }: { request: Request }) {
  const cookieHeader = request.headers.get("Cookie");
  const theme = (await themeCookie.parse(cookieHeader)) || "light"; // Default theme
  // Share images need absolute URLs
  const origin = new URL(request.url).origin;
  return Response.json({ theme, origin });
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
    },
  );
}

export default function App() {
  const { theme, origin } = useLoaderData<typeof loader>();
  const [currentTheme, setCurrentTheme] = useState(theme);
  const location = useLocation();

  // Custom color schemes for certain pages
  const getColorScheme = (pathname: string) => {
    // console.log(pathname)
    if (pathname.includes("/rema")) {
      return "æ-scheme";
    }
    if (pathname.includes("/corwell")) {
      return "corwell-scheme";
    }
    if (pathname.includes("/ourspace")) {
      return "ourspace-scheme";
    }
    if (pathname.includes("/drommeland")) {
      return "drømmeland-scheme";
    }
    if (pathname.includes("/redesign-av-portefolje")) {
      return "portfolio-redesign-scheme";
    }
    if (pathname.includes("/grundercampus")) {
      return "grundercampus-scheme";
    }
    if (pathname.includes("/barnebank")) {
      return "barnebank-scheme";
    }
    return null; // Default color scheme
  };

  const ogImagePathname = ogImagePath(location.pathname);
  const ogImage = ogImagePathname ? `${origin}${ogImagePathname}` : null;

  // Sync client-side theme preference
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  return (
    <html lang="nb" data-theme={currentTheme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        {ogImage && (
          <>
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
          </>
        )}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <Links />
      </head>
      <body
        className={
          getColorScheme(location.pathname)
            ? "" + getColorScheme(location.pathname)
            : ""
        }
      >
        <Navbar
          onThemeSwitch={() => {
            const newTheme = currentTheme === "light" ? "dark" : "light";
            document.documentElement.setAttribute("data-theme", newTheme);
            setCurrentTheme(newTheme);
            // Update the cookie via form submission
            const form = new FormData();
            form.append("theme", newTheme);
            fetch("/?index", { method: "POST", body: form });
          }}
          currentTheme={currentTheme}
          colorScheme={getColorScheme(location.pathname)}
        />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
