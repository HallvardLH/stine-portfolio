import "./Case.css";
import ImageWithLoader from "../general/ImageWithLoader";

interface FigureProps {
  src: string;
  alt?: string;
  caption?: string;
}

// An image in the text column with its caption underneath
export function Figure({ src, alt = "", caption }: FigureProps) {
  return (
    <figure className="case-figure">
      <ImageWithLoader src={src} alt={alt} classes="case-figure-image" />
      {caption && <figcaption className="text-small">{caption}</figcaption>}
    </figure>
  );
}

interface FigurePairProps {
  first: FigureProps;
  second: FigureProps;
}

// Two images side by side
export function FigurePair({ first, second }: FigurePairProps) {
  return (
    <div className="case-figure-pair">
      <Figure {...first} />
      <Figure {...second} />
    </div>
  );
}

interface FigureRowProps {
  figures: FigureProps[];
}

// Three or more images side by side
export function FigureRow({ figures }: FigureRowProps) {
  return (
    <div
      className="case-figure-row"
      style={{ "--columns": figures.length } as React.CSSProperties}
    >
      {figures.map((figure) => (
        <Figure key={figure.src} {...figure} />
      ))}
    </div>
  );
}
