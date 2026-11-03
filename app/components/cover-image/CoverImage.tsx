import "./CoverImage.css";
import { Link } from "@remix-run/react";
import Button from "../general/Button";
import type { Thumbnail } from "~/data/thumbnails";
import { useZoomableImage } from "../general/useZoomableImage";

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
  const { props: zoomProps, lightbox } = useZoomableImage();
  // The mockups are transparent, so fullscreen gets the stage's background too
  const lightboxBackground = backgroundSrc
    ? `url(${backgroundSrc}) ${thumbnail.backgroundPosition ?? "center"} / cover no-repeat ${backgroundColor ?? ""}`
    : backgroundColor;

  return (
    <div
      className={"cover-image-container " + (colorScheme ? colorScheme : "")}
    >
      <Link
        className={
          "cover-image-back-container " + (colorScheme ? colorScheme : "")
        }
        to="/#prosjekter"
      >
        <Button label="Tilbake" arrowDirection="left" />
      </Link>
      <div
        className={`cover-stage ${thumbnail.foregroundAlign === "left" ? "align-left" : ""} ${thumbnail.corner?.position === "bottom-right" ? "corner-below" : ""} ${thumbnail.tight ? "tight" : ""}`}
        style={
          {
            // The logo scales with the stage but never grows past its design size
            "--corner-max": thumbnail.corner && `${thumbnail.corner.width}px`,
            "--corner-relative":
              thumbnail.corner && `${(thumbnail.corner.width / 1120) * 100}%`,
            backgroundColor,
            backgroundImage: backgroundSrc
              ? `url(${backgroundSrc})`
              : undefined,
            backgroundPosition: thumbnail.backgroundPosition,
          } as React.CSSProperties
        }
      >
        <img
          src={foregroundSrc}
          alt={thumbnail.alt ?? ""}
          className="cover-image image-zoomable"
          width={foregroundSize.width}
          height={foregroundSize.height}
          data-lightbox-background={lightboxBackground}
          {...zoomProps}
        />
        {thumbnail.corner && (
          <img
            src={thumbnail.corner.src}
            alt=""
            className={`cover-corner cover-corner-${thumbnail.corner.position}`}
          />
        )}
      </div>
      {lightbox}
    </div>
  );
}
