import "./Case.css";

interface Fact {
  label: string;
  value: React.ReactNode;
}

interface CaseTitleProps {
  id: string;
  title: string;
  intro: string;
  /** Name of the first margin label, e.g. "Om prosjektet" */
  marginTitle: string;
  facts: Fact[];
}

// Project title with a short intro and the key facts in a table
export default function CaseTitle({
  id,
  title,
  intro,
  marginTitle,
  facts,
}: CaseTitleProps) {
  return (
    <section
      id={id}
      className="case-section case-title-section"
      data-surface="light"
    >
      <div className="case-container case-title">
        <div className="case-title-head">
          <h1 className="case-title-heading">{title}</h1>
          <p className="case-intro">{intro}</p>
        </div>
        <div className="case-row">
          <div className="case-margin">
            <span className="case-margin-number">00</span>
            <h2 className="case-margin-title">{marginTitle}</h2>
          </div>
          <dl className="case-facts">
            {facts.map((fact) => (
              <div key={fact.label} className="case-fact">
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
