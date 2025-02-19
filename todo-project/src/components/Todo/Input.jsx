
import { useTheme } from "../../contexts/ThemeContext";
export const Input = ({ type, changehandler, state }) => {
  const { theme } = useTheme();
  return (
    <input
      className={`input ${theme}`}
      type={type}
      value={state}
      onChange={changehandler}
    />
  );
};
