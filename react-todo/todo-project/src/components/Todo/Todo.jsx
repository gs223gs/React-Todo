//Cardとしてもつ

//.todos.map((todo) =>{
//return (
// <List todo={todo}>
//)
//})
import { useDispatch } from "../../contexts/TodoContext";
import { useConst } from "../../contexts/TodoContext";
import { useTheme } from "../../contexts/ThemeContext";
import { Editing } from "./Editing";
import { TodoList } from "./TodoList";
export const Todo = () => {
  const { state } = useDispatch();
  const { ADD } = useConst();
  const { theme } = useTheme();

  const activeTodos = state.filter((todo) => {
    return todo.isDone == false;
  });

  return (
    <div className={`todo ${theme}`}>
      <div className={`todo-create ${theme}`}>
        <Editing type={ADD} />
      </div>
      <div className={`todo-card ${theme}`}>
        {activeTodos.map((prev) => {
          return <TodoList prev={prev} key={prev.id} />;
        })}
      </div>
    </div>
  );
};
