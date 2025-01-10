import "./CoverImage.css";
import { Link } from "@remix-run/react";

interface ProjectCardProps {
    src: string,
}

export default function CoverImage({ src }: ProjectCardProps) {
    return (
        <div className="cover-image-container">
            <img
                src={src}
                alt=""
                className="cover-image"
            />
            <Link className="cover-image-back-container" to="/prosjektbibliotek">
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

