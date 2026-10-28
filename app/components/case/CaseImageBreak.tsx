import "./Case.css";
import ImageWithLoader from "../general/ImageWithLoader";

interface CaseImageBreakProps {
  src: string;
  alt: string;
  caption?: string;
}

// An image across the full width of the screen, between two chapters
export default function CaseImageBreak({
  src,
  alt,
  caption,
}: CaseImageBreakProps) {
  return (
    <figure className="case-image-break" data-surface="image">
      <ImageWithLoader src={src} alt={alt} classes="case-image-break-image" />
      {caption && (
        <figcaption className="case-container case-image-break-caption text-small">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
