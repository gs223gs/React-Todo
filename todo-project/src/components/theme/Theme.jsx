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
        onChange={(e) => setTheme(e.target.value)}
      />
      <label >dark</label>
      <input
        type="radio"
        name="theme"
        value="light"
        checked={theme === "light"}
        onChange={(e) => setTheme(e.target.value)}
      />
      <label >light</label>
    </div>
  );
};
