import "./Case.css";
import ImageWithLoader from "../general/ImageWithLoader";

interface CaseImageBreakProps {
  src: string;
  alt: string;
  caption?: string;
  /** Any CSS background, for images that need another colour than the default band */
  background?: string;
  /** Fades the edges of the image into the background, for images that do not fill the width */
  blend?: boolean;
  /** Light text and nav, for a dark background */
  dark?: boolean;
}

// An image across the full width of the screen, between two chapters
export default function CaseImageBreak({
  src,
  alt,
  caption,
  background,
  blend,
  dark,
}: CaseImageBreakProps) {
  return (
    <figure
      className={`case-image-break ${blend ? "case-image-break-blend" : ""}`}
      data-surface={dark ? "dark" : "image"}
      style={background ? { background } : undefined}
    >
      <ImageWithLoader src={src} alt={alt} classes="case-image-break-image" />
      {caption && (
        <figcaption className="case-container case-image-break-caption text-small">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
