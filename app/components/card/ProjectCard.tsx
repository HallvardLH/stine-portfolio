import "./ProjectCard.css";
import { Link } from "@remix-run/react";

interface ProjectCardProps {
    imageSrc: string,
    date: string,
    title: string,
    description: string,
    link: string,
}

export default function ProjectCard(props: ProjectCardProps) {

    const { imageSrc, date, title, description, link } = props;
    return (
        <div className="card-container">
            <div className="card-image-container">
                <img
                    src={imageSrc}
                    alt=""
                    className="card-image"
                />
                <div className="card-date-container">
                    <p className="text-small">{date}</p>
                </div>
            </div>
            <h2 className="heading card-text">{title}</h2>
            <p className="text-medium card-text">{description}</p>
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
        </div>
    )
}