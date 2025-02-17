//Cardとしてもつ

//.todos.map((todo) =>{
//return (
// <List todo={todo}>
//)
//})
import { useConst, useDispatch } from "../../contexts/TodoContext";
import { useTheme } from "../../contexts/ThemeContext";
import Button from "../Button";
export const Todo = () => {
  const { ADD, DELETE, DONE, UPDATE } = useConst();
  const { theme } = useTheme();
  const { state } = useDispatch();

  return (
    <div>
      {state.map((prev) => {
        return (
          <section className={`Todo-Card_section ${theme}`} key={prev.id}>
            <ul className={`Todo-Card_list ${theme}`}>
              <li className={`Todo-Card_item ${theme}`}>{prev.task}</li>
              <li className={`Todo-Card_item ${theme}`}>{prev.createdate}</li>
              <li className={`Todo-Card_item ${theme}`}>{prev.due}</li>
              <li className={`Todo-Card_item ${theme}`}>{prev.priority}</li>
              <Button text={"編集"} />
              <Button text={"完了"} />
              <Button text={"削除"} />
            </ul>
          </section>
        );
      })}
    </div>
  );
};
