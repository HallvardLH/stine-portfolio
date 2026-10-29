import "./ThemeSwitch.css";

interface ThemeSwitchProps {
  onThemeSwitch: () => void;
  currentTheme: "dark" | "light";
  /** Shows the name of the mode next to the icon, for the mobile menu */
  showLabel?: boolean;
}

export default function ThemeSwitch({
  onThemeSwitch,
  currentTheme,
  showLabel,
}: ThemeSwitchProps) {
  const toDark = currentTheme === "light";
  const label = toDark ? "Mørk modus" : "Lys modus";
  return (
    <button
      className={"theme-switch" + (showLabel ? " theme-switch-row" : "")}
      onClick={onThemeSwitch}
      aria-label={toDark ? "Bytt til mørk modus" : "Bytt til lys modus"}
    >
      {showLabel && <span className="theme-switch-label">{label}</span>}
      <img
        src={toDark ? "/icons/darkmode.svg" : "/icons/lightmode.svg"}
        alt=""
        className="theme-switch-icon"
        draggable="false"
      />
    </button>
  );
}
