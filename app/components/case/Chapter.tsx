import "./Case.css";

interface ChapterProps {
  id: string;
  number: string;
  title: string;
  /** light follows the theme, soft is a tinted band, dark is always dark */
  surface?: "light" | "soft" | "dark";
  /** A thin rule above the chapter, for the one that opens after a break */
  rule?: boolean;
  /** One sentence in larger type that sums up the chapter */
  lead?: string;
  children: React.ReactNode;
}

// A chapter: its number and name in the margin, the text in the column beside it
export function Chapter({
  id,
  number,
  title,
  surface = "light",
  rule,
  lead,
  children,
}: ChapterProps) {
  return (
    <section
      id={id}
      className={`case-section case-chapter case-${surface}`}
      data-surface={surface === "dark" ? "dark" : "light"}
    >
      <div className="case-container">
        {rule && <div className="case-rule" />}
        <div className="case-row">
          <div className="case-margin">
            <span className="case-margin-number">{number}</span>
            <h2 className="case-margin-title">{title}</h2>
          </div>
          <div className="case-text">
            {lead && <p className="case-lead">{lead}</p>}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ChapterBlockProps {
  title?: string;
  children: React.ReactNode;
}

// A part of a chapter with its own small heading
export function ChapterBlock({ title, children }: ChapterBlockProps) {
  return (
    <div className="case-block">
      {title && <h3 className="case-block-title">{title}</h3>}
      {children}
    </div>
  );
}
