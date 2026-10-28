import "./CoverImage.css";
import { Link } from "@remix-run/react";
import Button from "../general/Button";
import type { Thumbnail } from "~/data/thumbnails";

interface CoverImageProps {
  thumbnail: Thumbnail;
  colorScheme?: string | null;
}

// A full width stage in the project's colours. The mockups sit in the middle
// and are never shown larger than their own size, so the stage grows with the
// screen but the images do not.
export default function CoverImage({
  thumbnail,
  colorScheme,
}: CoverImageProps) {
  const { foregroundSrc, foregroundSize, backgroundColor, backgroundSrc } =
    thumbnail;

  return (
    <div
      className={"cover-image-container " + (colorScheme ? colorScheme : "")}
    >
      <Link
        className={
          "cover-image-back-container " + (colorScheme ? colorScheme : "")
        }
        to="/portefølje"
      >
        <Button label="Tilbake" arrowDirection="left" />
      </Link>
      <div
        className={`cover-stage ${thumbnail.foregroundAlign === "left" ? "align-left" : ""}`}
        style={{
          backgroundColor,
          backgroundImage: backgroundSrc ? `url(${backgroundSrc})` : undefined,
          backgroundPosition: thumbnail.backgroundPosition,
        }}
      >
        <img
          src={foregroundSrc}
          alt=""
          className="cover-image"
          width={foregroundSize.width}
          height={foregroundSize.height}
        />
        {thumbnail.corner && (
          <img
            src={thumbnail.corner.src}
            alt=""
            className={`cover-corner cover-corner-${thumbnail.corner.position}`}
            style={{ width: thumbnail.corner.width }}
          />
        )}
      </div>
    </div>
  );
}
