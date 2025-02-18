import "./App.css";
import { TodoProvider } from "./contexts/TodoContext";
import { Todo } from "./components/Todo/Todo";
import { Theme } from "./components/theme/Theme";
const App = () => {
  return (
    <TodoProvider>
      <Theme />
      <Todo />
    </TodoProvider>
  );
};

export default App;
