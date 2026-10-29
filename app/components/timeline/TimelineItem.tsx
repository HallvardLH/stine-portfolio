import { Link } from "@remix-run/react";
import { categoryLabel, type TimelineEntry } from "~/data/timeline";

interface TimelineItemProps {
  entry: TimelineEntry;
  highlighted: boolean;
  onOpenPhotos: (entry: TimelineEntry) => void;
}

// One experience: dates and category, title, text, and a thumbnail that opens its photos
export default function TimelineItem({
  entry,
  highlighted,
  onOpenPhotos,
}: TimelineItemProps) {
  const photos = entry.photos ?? [];

  return (
    <li
      id={`erfaring-${entry.id}`}
      className={`timeline-item ${highlighted ? "is-highlighted" : ""}`}
    >
      {photos.length > 0 && (
        <button
          className="timeline-thumb"
          onClick={() => onOpenPhotos(entry)}
          aria-label={`Se ${photos.length === 1 ? "bildet" : `de ${photos.length} bildene`} fra ${entry.title}, ${entry.org.split(" · ")[0]}`}
        >
          <img src={photos[0].src} alt="" loading="lazy" />
          <span className="timeline-thumb-count">
            {photos.length} {photos.length === 1 ? "bilde" : "bilder"}
          </span>
        </button>
      )}
      <div className="timeline-item-text">
        <p className="timeline-item-meta">
          {entry.live && (
            <span className="timeline-dot" role="img" aria-label="Pågående" />
          )}
          <span>{entry.dateLabel}</span>
          <span className="timeline-category">
            {categoryLabel(entry.category)}
          </span>
        </p>
        <h3 className="timeline-item-title">{entry.title}</h3>
        <p className="timeline-item-org">{entry.org}</p>
        {entry.text && <p className="timeline-item-body">{entry.text}</p>}
        {entry.methods && (
          <p className="timeline-item-methods">{entry.methods}</p>
        )}
        {entry.note && (
          <p className="timeline-item-note">
            <span className="timeline-dot" aria-hidden="true" />
            {entry.note}
          </p>
        )}
        {entry.link && (
          <Link to={entry.link.to} className="case-button">
            {entry.link.label}
            <img src="/icons/arrow.svg" alt="" />
          </Link>
        )}
      </div>
    </li>
  );
}
