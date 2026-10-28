import "./Case.css";

interface Column {
  title: string;
  text: React.ReactNode;
}

interface CaseColumnsProps {
  items: Column[];
}

// Short texts side by side, each under its own rule
export default function CaseColumns({ items }: CaseColumnsProps) {
  return (
    <div
      className="case-columns"
      style={{ "--columns": items.length } as React.CSSProperties}
    >
      {items.map((item) => (
        <div key={item.title} className="case-column">
          <h3 className="case-block-title">{item.title}</h3>
          <div className="case-column-text">{item.text}</div>
        </div>
      ))}
    </div>
  );
}
