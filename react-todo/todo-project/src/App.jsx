import { useContext } from "react";
import "./App.css";
import { useTheme } from "./contexts/ThemeContext";

function App() {
  const { theme } = useTheme();
  return (
    <div>
      <h1>hello world</h1>
      <p>{theme}</p>
    </div>
  );
}

export default App;
