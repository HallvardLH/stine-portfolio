import { redirect } from "@remix-run/node";

// The Drømmeland case used to live at /drømmeland; keep old links working
export const loader = () => redirect("/drommeland", 301);
