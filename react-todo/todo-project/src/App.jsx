import { useContext } from "react";
import "./App.css";
import { useTheme } from "./contexts/ThemeContext";
import { TodoProvider, useConst, useDispatch } from "./contexts/TodoContext";
import { Todo } from "./components/Todo/Todo";
const App = () => {
  const { theme } = useTheme();


  return (
    <TodoProvider>
      <div>
        <h1>hello world</h1>
        <p>{theme}</p>
      </div>
      <Todo>

      </Todo>
    </TodoProvider>
  );
};

export default App;

