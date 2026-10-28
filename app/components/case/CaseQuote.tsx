import "./Case.css";

interface CaseQuoteProps {
  text: string;
  author: string;
}

// A quote with an accent bar beside it
export default function CaseQuote({ text, author }: CaseQuoteProps) {
  return (
    <blockquote className="case-quote">
      <p className="case-quote-text">«{text}»</p>
      <footer className="text-small">— {author}</footer>
    </blockquote>
  );
}
