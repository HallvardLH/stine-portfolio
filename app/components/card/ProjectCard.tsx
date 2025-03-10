import "./ProjectCard.css";
import { Link } from "@remix-run/react";
import ImageWithLoader from "../general/ImageWithLoader";

interface ProjectCardProps {
    imageSrc: string,
    date: string,
    title: string,
    description: string,
    link: string,
    // Whether the image is of a phone or a desktop, desktops need less zoom to stay within frame
    imageZoom?: "phone" | "desktop"
}

export default function ProjectCard(props: ProjectCardProps) {

    const { imageSrc, date, title, description, link, imageZoom = "phone" } = props;
    return (
        <Link className="card-container" to={link}>
            <div className="card-image-container">
                <ImageWithLoader
                    src={imageSrc}
                    alt=""
                    classes={"card-image " + ("card-image-" + imageZoom)}
                />
                <div className="card-date-container">
                    <p className="text-small card-text">{date}</p>
                </div>
            </div>
            <h2 className="heading card-text">{title}</h2>
            <p className="text-normal card-text">{description}</p>
            <Link className="read-more-outer-container" to={link}>
                <div className="read-more-container">
                    <p className="text-small card-text">Les mer om dette prosjektet</p>
                    <img
                        src="/icons/arrow.svg"
                        alt=""
                        className="card-arrow"
                    />
                </div>
            </Link>
        </Link>
    )
}