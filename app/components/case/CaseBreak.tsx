import "./Case.css";

interface CaseBreakProps {
  eyebrow: string;
  children: React.ReactNode;
  /** Shows the statement as a dashed placeholder until it is written */
  placeholder?: boolean;
}

// A full-width break in the accent colour with the main point of the project
export default function CaseBreak({
  eyebrow,
  children,
  placeholder,
}: CaseBreakProps) {
  return (
    <section className="case-section case-break" data-surface="accent">
      <div className="case-container">
        <p className="case-eyebrow">{eyebrow}</p>
        <p
          className={`case-statement ${placeholder ? "case-placeholder" : ""}`}
        >
          {children}
        </p>
      </div>
    </section>
  );
}
