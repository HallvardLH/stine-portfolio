import "./Button.css";

interface ButtonProps {
  label: string;
  arrowDirection?: "left" | "right";
}

// Only looks like a button. It always sits inside a link, so it is not a
// <button> itself, which would be a second stop for the keyboard.
export default function Button({ label, arrowDirection }: ButtonProps) {
  return (
    <span className="button-container">
      <span className="button">
        <span
          className="read-more-container"
          style={
            arrowDirection === "left"
              ? { flexDirection: "row-reverse" }
              : undefined
          }
        >
          <span className="text-large button-label">{label}</span>
          <img
            src="/icons/arrow.svg"
            alt=""
            className={`button-arrow ${arrowDirection === "left" ? "arrow-back" : ""}`}
          />
        </span>
      </span>
    </span>
  );
}
