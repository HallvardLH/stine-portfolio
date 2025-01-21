import "./ThemeSwitch.css";

interface ThemeSwitchProps {
    onThemeSwitch: () => void,
    currentTheme: "dark" | "light",
}

export default function ThemeSwitch({ onThemeSwitch, currentTheme }: ThemeSwitchProps) {

    return (
        <button style={{ all: "unset" }} onClick={onThemeSwitch}>
            <div className={`theme-switch-container ${currentTheme === "light" ? "dark" : "light"}`}>
                <img
                    src={currentTheme === "light" ? "/icons/darkmode.svg" : "/icons/lightmode.svg"}
                    alt=""
                    className="theme-switch-icon"
                />
                <p className="theme-switch-text">
                    {currentTheme === "light" ? "Mørk" : "Lys"}
                </p>
            </div>
        </button>
    );
}
