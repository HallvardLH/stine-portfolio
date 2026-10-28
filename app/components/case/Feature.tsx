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
}

// One part of the solution: the text on the left and its images on the right,
// the same way every time so the chapter is easy to scan
export function Feature({ title, children, figures }: FeatureProps) {
  return (
    <div className="case-feature">
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
