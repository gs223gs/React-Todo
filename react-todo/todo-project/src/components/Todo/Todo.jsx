//Cardとしてもつ

//.todos.map((todo) =>{
//return (
// <List todo={todo}>
//)
//})
import { useDispatch } from "../../contexts/TodoContext";
import { useConst } from "../../contexts/TodoContext";
import { Editing } from "./Editing";
import { TodoList } from "./TodoList";
export const Todo = () => {
  const { state } = useDispatch();
  const { ADD } = useConst();
  const activeTodos = state.filter((todo) => {
    return todo.isDone == false;
  });

  return (
    <div>
      <div>
        {activeTodos.map((prev) => {
          return <TodoList prev={prev} key={prev.id} />;
        })}
      </div>
      <div>
        <Editing type={ADD} />
      </div>
    </div>
  );
};
