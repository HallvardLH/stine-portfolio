import "./ProjectCard.css";
import { Link } from "@remix-run/react";

// A thumbnail is two layers: a background that fills any shape (a colour or a
// cropped image) and a transparent foreground with the mockups, which is
// always shown whole and centred.
export interface Thumbnail {
  foregroundSrc: string;
  backgroundColor?: string;
  backgroundSrc?: string;
  // Small logo pinned to the top right corner instead of scaling with the mockups
  cornerSrc?: string;
}

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
      <div
        className="card-image-container"
        style={{
          backgroundColor: thumbnail.backgroundColor,
          backgroundImage: thumbnail.backgroundSrc
            ? `url(${thumbnail.backgroundSrc})`
            : undefined,
        }}
      >
        <img
          src={thumbnail.foregroundSrc}
          alt=""
          className="card-image"
          decoding="async"
        />
        {thumbnail.cornerSrc && (
          <img
            src={thumbnail.cornerSrc}
            alt=""
            className="card-corner"
            decoding="async"
          />
        )}
      </div>
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
