import "./Button.css";

interface ButtonProps {
    label: string,
}

export default function Button({ label }: ButtonProps) {
    return (
        <div className="button-container">
            <button className="button">
                <div className="read-more-container">
                    <p className="text-small">{label}</p>
                    <img
                        src="/icons/arrow.svg"
                        alt=""
                        className="card-arrow"
                    />
                </div>
            </button>
        </div>
    )
}