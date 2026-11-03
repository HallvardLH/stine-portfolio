import { redirect } from "@remix-run/node";

// The Rema case used to live at /æ; keep old links working
export const loader = () => redirect("/rema", 301);
