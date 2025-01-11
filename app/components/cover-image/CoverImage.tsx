import "./CoverImage.css";
import { Link } from "@remix-run/react";

interface ProjectCardProps {
    src: string,
    colorScheme?: string | null;
}

export default function CoverImage({ src, colorScheme }: ProjectCardProps) {
    return (
        <div className={"cover-image-container " + (colorScheme ? colorScheme : "")}>
            <img
                src={src}
                alt=""
                className="cover-image"
            />
            <Link className={"cover-image-back-container " + (colorScheme ? colorScheme : "")} to="/prosjektbibliotek">
                <img
                    src="/icons/back.svg"
                    alt=""
                    className="cover-image-back-icon"
                />
                <p className="text-small">Tilbake til prosjektbibliotek</p>
            </Link>
        </div>
    )
}

