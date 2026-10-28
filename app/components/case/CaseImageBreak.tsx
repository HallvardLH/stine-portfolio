import "./Case.css";
import ImageWithLoader from "../general/ImageWithLoader";

interface CaseImageBreakProps {
  src: string;
  alt: string;
}

// An image across the full width of the screen, between two chapters
export default function CaseImageBreak({ src, alt }: CaseImageBreakProps) {
  return (
    <div className="case-image-break" data-surface="image">
      <ImageWithLoader src={src} alt={alt} classes="case-image-break-image" />
    </div>
  );
}
