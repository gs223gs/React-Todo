//Cardとしてもつ

//.todos.map((todo) =>{
//return (
// <List todo={todo}>
//)
//})
import { useDispatch } from "../../contexts/TodoContext";
import { TodoList } from "./TodoList";
export const Todo = () => {
  const { state } = useDispatch();

  const activeTodos = state.filter((todo) => {
    return todo.isDone == false;
  });

  return (
    <div>
      {activeTodos.map((prev) => {
        return <TodoList prev={prev} key={prev.id} />;
      })}
    </div>
  );
};
