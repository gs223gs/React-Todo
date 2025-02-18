import { useContext } from "react";
import "./App.css";
import { useTheme } from "./contexts/ThemeContext";
import { TodoProvider, useConst, useDispatch } from "./contexts/TodoContext";
import { Todo } from "./components/Todo/Todo";
const App = () => {
  const { theme, setTheme } = useTheme();

  return (
    <TodoProvider>
      <div>
        <input
          type="radio"
          name="theme"
          value="dark"
          checked={theme ==='dark'}
          onClick={(e) => setTheme(e.target.value)}
        />
        <label for="huey">dark</label>
        <input
          type="radio"
          name="theme"
          value="light"
          checked={theme ==='light'}
          onClick={(e) => setTheme(e.target.value)}
        />
        <label for="huey">light</label>
      </div>

      <Todo />
    </TodoProvider>
  );
};

export default App;
