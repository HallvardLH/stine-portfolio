import "./ThemeSwitch.css";

interface ThemeSwitchProps {
  onThemeSwitch: () => void;
  currentTheme: "dark" | "light";
}

export default function ThemeSwitch({
  onThemeSwitch,
  currentTheme,
}: ThemeSwitchProps) {
  return (
    <button
      className="theme-switch"
      onClick={onThemeSwitch}
      aria-label={
        currentTheme === "light" ? "Bytt til mørk modus" : "Bytt til lys modus"
      }
    >
      <img
        src={
          currentTheme === "light"
            ? "/icons/darkmode.svg"
            : "/icons/lightmode.svg"
        }
        alt=""
        className="theme-switch-icon"
      />
    </button>
  );
}
