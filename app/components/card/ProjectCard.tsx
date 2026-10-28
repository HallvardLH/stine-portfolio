import "./ProjectCard.css";
import { Link } from "@remix-run/react";
import type { Thumbnail } from "~/data/thumbnails";
import ThumbnailImage from "./ThumbnailImage";

interface ProjectCardProps {
  thumbnail: Thumbnail;
  date: string;
  platformInfo: string;
  title: string;
  description: string;
  link: string;
  tags?: string[];
  hero?: boolean;
}

export default function ProjectCard(props: ProjectCardProps) {
  const {
    thumbnail,
    date,
    platformInfo,
    title,
    description,
    link,
    tags,
    hero,
  } = props;
  return (
    <Link className={`card-container ${hero ? "hero" : ""}`} to={link}>
      <div className="top-info-container">
        <p className="text-small card-text">{date}</p>
        <p className="text-small card-text">{platformInfo}</p>
      </div>
      <ThumbnailImage thumbnail={thumbnail} />
      <div className="card-description-container">
        <h2 className="heading card-text">{title}</h2>
        <p className="text-large card-text">{description}</p>
        {tags && tags.length > 0 && (
          <ul className="card-tags">
            {tags.map((tag) => (
              <li key={tag} className="card-tag text-medium card-text">
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  );
}
