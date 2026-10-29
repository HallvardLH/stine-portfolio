import "./Case.css";
import { Figure } from "./Figure";

interface FeatureFigure {
  src: string;
  alt?: string;
  caption?: string;
}

interface FeatureProps {
  title: string;
  /** The text next to the image(s) */
  children: React.ReactNode;
  figures?: FeatureFigure[];
  /** Phone screenshots, shown side by side under the other images */
  phones?: FeatureFigure[];
}

// One part of the solution: its text, with the images right underneath
export function Feature({ title, children, figures, phones }: FeatureProps) {
  return (
    <div className="case-feature">
      <div className="case-feature-text">
        <h3 className="case-block-title">{title}</h3>
        {children}
      </div>
      {((figures && figures.length > 0) || (phones && phones.length > 0)) && (
        <div className="case-feature-figures">
          {figures?.map((figure) => (
            <Figure key={figure.src} {...figure} />
          ))}
          {phones && phones.length > 0 && (
            <div
              className="case-feature-phones"
              style={{ "--phones": phones.length } as React.CSSProperties}
            >
              {phones.map((phone) => (
                <Figure key={phone.src} {...phone} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

interface FeatureGroupProps {
  /** Without a title the features sit in the text column with no rule above */
  title?: string;
  children: React.ReactNode;
}

// A set of features, with the group name in the margin beside the first one
export function FeatureGroup({ title, children }: FeatureGroupProps) {
  return (
    <div className={`case-feature-group${title ? "" : " is-plain"}`}>
      {title && <h3 className="case-group-title">{title}</h3>}
      <div className="case-feature-list">{children}</div>
    </div>
  );
}
