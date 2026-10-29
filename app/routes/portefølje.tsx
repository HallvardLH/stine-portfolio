import { redirect } from "@remix-run/node";

// The portfolio now lives on the landing page, so old links end up there
export const loader = () => redirect("/#siste-prosjekt");
