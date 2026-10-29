import "./ProjectCard.css";
import { Link } from "@remix-run/react";
import type { Thumbnail } from "~/data/thumbnails";
import { projectStatusLabels, type ProjectStatus } from "~/data/projects";
import ThumbnailImage from "./ThumbnailImage";

interface ProjectCardProps {
  thumbnail: Thumbnail;
  date: string;
  platformInfo: string;
  title: string;
  description: string;
  link: string;
  tags?: string[];
  status: ProjectStatus;
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
    status,
  } = props;
  return (
    <Link className="project-card" to={link}>
      <ThumbnailImage thumbnail={thumbnail} />
      <p className="project-card-meta">
        {date} · {platformInfo}
      </p>
      <h3 className="project-card-title">{title}</h3>
      <p className="project-card-description">{description}</p>
      <ul className="card-tags">
        {projectStatusLabels[status] && (
          <li className={`card-tag card-tag-${status}`}>
            {projectStatusLabels[status]}
          </li>
        )}
        {tags?.slice(0, 2).map((tag) => (
          <li key={tag} className="card-tag">
            {tag}
          </li>
        ))}
      </ul>
      <span className="project-card-cta" aria-hidden="true">
        Les om prosjektet
        <img src="/icons/arrow.svg" alt="" />
      </span>
    </Link>
  );
}
