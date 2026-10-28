import "./Case.css";

interface Learning {
  title: string;
  text: string;
}

interface LearningsProps {
  items: Learning[];
}

// Short lessons side by side, each under its own rule
export default function Learnings({ items }: LearningsProps) {
  return (
    <div className="case-learnings">
      {items.map((item) => (
        <div key={item.title} className="case-learning">
          <h3 className="case-block-title">{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
