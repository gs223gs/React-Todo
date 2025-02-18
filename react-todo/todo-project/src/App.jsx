import { useContext } from "react";
import "./App.css";
import { useTheme } from "./contexts/ThemeContext";
import { TodoProvider, useConst, useDispatch } from "./contexts/TodoContext";
import { Todo } from "./components/Todo/Todo";
const App = () => {
  const { theme } = useTheme();

  return (
    <TodoProvider>
      <p>{theme}</p>
      <Todo />
    </TodoProvider>
  );
};

export default App;
