import { redirect } from "@remix-run/node";

// The portfolio redesign used to live at /redesign-av-portefølje; keep old links working
export const loader = () => redirect("/redesign-av-portefolje", 301);
