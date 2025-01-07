import { createCookie } from "@remix-run/node";

export const themeCookie = createCookie("theme-preference", {
    maxAge: 60 * 60 * 24 * 365, // 1 year
    httpOnly: true,
    sameSite: "lax",
    path: "/",
});