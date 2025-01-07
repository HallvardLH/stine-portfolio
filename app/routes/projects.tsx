import { Outlet } from "@remix-run/react";

export default function ProjectsRoute() {
    return (
        <div>
            <main>
                <Outlet />
            </main>
        </div>
    )
}