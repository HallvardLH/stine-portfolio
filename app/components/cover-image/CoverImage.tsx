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
            <Link className={"cover-image-back-container " + (colorScheme ? colorScheme : "")} to="/portefølje">
                <img
                    src="/icons/back.svg"
                    alt=""
                    className="cover-image-back-icon icon"
                />
                <p className="text-small back-button-text">Tilbake til portefølje</p>
            </Link>
        </div>
    )
}

