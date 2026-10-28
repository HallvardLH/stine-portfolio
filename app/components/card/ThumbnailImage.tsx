import "./ProjectCard.css";
import type { Thumbnail } from "~/data/thumbnails";

interface ThumbnailImageProps {
  thumbnail: Thumbnail;
}

// The layered project thumbnail: a background with the mockups on top
export default function ThumbnailImage({ thumbnail }: ThumbnailImageProps) {
  return (
    <div
      className="card-image-container"
      style={{
        backgroundColor: thumbnail.backgroundColor,
        backgroundImage: thumbnail.backgroundSrc
          ? `url(${thumbnail.backgroundSrc})`
          : undefined,
        backgroundPosition: thumbnail.backgroundPosition,
      }}
    >
      <img
        src={thumbnail.foregroundSrc}
        alt=""
        className={`card-image ${thumbnail.foregroundAlign === "left" ? "align-left" : ""} ${thumbnail.corner?.position === "bottom-right" ? "corner-below" : ""}`}
        decoding="async"
      />
      {thumbnail.corner && (
        <img
          src={thumbnail.corner.src}
          alt=""
          className={`card-corner card-corner-${thumbnail.corner.position}`}
          style={{ width: `${(thumbnail.corner.width / 1120) * 100}%` }}
          decoding="async"
        />
      )}
    </div>
  );
}
