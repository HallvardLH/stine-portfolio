import "./Button.css";

interface ButtonProps {
    children: string | React.ReactNode,
}

export default function Button({ children }: ButtonProps) {
    return (
        <div className="button-container">
            <button className="button">{children}</button>
        </div>
    )
}