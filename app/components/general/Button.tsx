import "./Button.css";

interface ButtonProps {
  label: string;
  arrowDirection?: "left" | "right";
}

export default function Button({ label, arrowDirection }: ButtonProps) {
  return (
    <div className="button-container">
      <button className="button">
        <div
          className="read-more-container"
          style={
            arrowDirection === "left"
              ? { flexDirection: "row-reverse" }
              : undefined
          }
        >
          <p className="text-large button-label">{label}</p>
          <img
            src="/icons/arrow.svg"
            alt=""
            className={`button-arrow ${arrowDirection === "left" ? "arrow-back" : ""}`}
          />
        </div>
      </button>
    </div>
  );
}
