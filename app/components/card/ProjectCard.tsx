import "./ProjectCard.css";
import { Link } from "@remix-run/react";
import ImageWithLoader from "../general/ImageWithLoader";

interface ProjectCardProps {
  imageSrc: string;
  date: string;
  platformInfo: string;
  title: string;
  description: string;
  link: string;
  tags?: string[];
  hero?: boolean;
}

export default function ProjectCard(props: ProjectCardProps) {
  const { imageSrc, date, platformInfo, title, description, link, tags, hero } =
    props;
  return (
    <Link className={`card-container ${hero ? "hero" : ""}`} to={link}>
      <div className="top-info-container">
        <p className="text-small card-text">{date}</p>
        <p className="text-small card-text">{platformInfo}</p>
      </div>
      <div className="card-image-container">
        <ImageWithLoader src={imageSrc} alt="" classes="card-image" />
      </div>
      <div className="card-description-container">
        <h2 className="heading card-text">{title}</h2>
        <p className="text-large card-text">{description}</p>
        {tags && tags.length > 0 && (
          <ul className="card-tags">
            {tags.map((tag) => (
              <li key={tag} className="card-tag text-large card-text">
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  );
}
