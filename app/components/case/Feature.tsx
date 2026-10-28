import "./Case.css";
import { Figure } from "./Figure";

interface FeatureFigure {
  src: string;
  caption?: string;
}

interface FeatureProps {
  title: string;
  /** The text next to the image(s) */
  children: React.ReactNode;
  figures: FeatureFigure[];
  /** Puts the image on the left and the text on the right */
  reverse?: boolean;
}

// One part of the solution: the text beside its image, so the chapter does not
// turn into one long column
export function Feature({ title, children, figures, reverse }: FeatureProps) {
  return (
    <div className={`case-feature ${reverse ? "case-feature-reverse" : ""}`}>
      <div className="case-feature-text">
        <h3 className="case-block-title">{title}</h3>
        {children}
      </div>
      <div className="case-feature-figures">
        {figures.map((figure) => (
          <Figure key={figure.src} {...figure} />
        ))}
      </div>
    </div>
  );
}

interface FeatureGroupProps {
  title: string;
  children: React.ReactNode;
}

// A set of features under a small heading
export function FeatureGroup({ title, children }: FeatureGroupProps) {
  return (
    <div className="case-feature-group">
      <h3 className="case-group-title">{title}</h3>
      {children}
    </div>
  );
}
