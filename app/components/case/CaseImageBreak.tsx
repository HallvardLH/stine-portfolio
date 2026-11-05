import "./Case.css";
import ImageWithLoader from "../general/ImageWithLoader";

interface CaseImageBreakProps {
  src: string;
  /** A version for small screens (up to 899px wide) */
  mobileSrc?: string;
  alt: string;
  caption?: string;
  /** Any CSS background, for images that need another colour than the default band */
  background?: string;
  /** Keeps the image clear of the chapter nav in the left margin, so the nav stays readable */
  inset?: boolean;
  /** Light text and nav, for a dark background */
  dark?: boolean;
}

// An image across the full width of the screen, between two chapters
export default function CaseImageBreak({
  src,
  mobileSrc,
  alt,
  caption,
  background,
  inset,
  dark,
}: CaseImageBreakProps) {
  return (
    <figure
      className={`case-image-break ${inset ? "case-image-break-inset" : ""}`}
      data-surface={dark ? "dark" : "image"}
      style={background ? { background } : undefined}
    >
      <ImageWithLoader
        src={src}
        mobileSrc={mobileSrc}
        alt={alt}
        classes="case-image-break-image"
        sizes="100vw"
      />
      {caption && (
        <figcaption className="case-container case-image-break-caption text-small">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
