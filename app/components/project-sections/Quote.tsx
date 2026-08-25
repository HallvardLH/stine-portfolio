interface QuoteProps {
  text: string;
  author: string;
}

export function Quote({ text, author }: QuoteProps) {
  return (
    <blockquote
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      <p style={{ fontSize: "2.25rem", fontStyle: "italic" }}>“{text}”</p>
      <footer
        style={{
          fontSize: "1.375rem",
          fontStyle: "italic",
          textAlign: "right",
        }}
      >
        — {author}
      </footer>
    </blockquote>
  );
}
