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
}

export default function ProjectCard(props: ProjectCardProps) {
  const { thumbnail, date, platformInfo, title, description, link, tags } =
    props;
  return (
    <Link className="project-card" to={link}>
      <ThumbnailImage thumbnail={thumbnail} />
      <p className="project-card-meta">
        {date} · {platformInfo}
      </p>
      <h3 className="project-card-title">{title}</h3>
      <p className="project-card-description">{description}</p>
      {tags && tags.length > 0 && (
        <ul className="card-tags">
          {tags.slice(0, 2).map((tag) => (
            <li key={tag} className="card-tag">
              {tag}
            </li>
          ))}
        </ul>
      )}
    </Link>
  );
}
