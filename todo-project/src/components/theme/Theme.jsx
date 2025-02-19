import { useTheme } from "../../contexts/ThemeContext";
export const Theme = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <input
        type="radio"
        name="theme"
        value="dark"
        checked={theme === "dark"}
        onClick={(e) => setTheme(e.target.value)}
      />
      <label for="huey">dark</label>
      <input
        type="radio"
        name="theme"
        value="light"
        checked={theme === "light"}
        onClick={(e) => setTheme(e.target.value)}
      />
      <label for="huey">light</label>
    </div>
  );
};
