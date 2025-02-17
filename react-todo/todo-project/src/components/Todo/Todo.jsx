//Cardとしてもつ

//.todos.map((todo) =>{
//return (
// <List todo={todo}>
//)
//})
import { useDispatch } from "../../contexts/TodoContext";
import { useTheme } from "../../contexts/ThemeContext";
import { useConst } from "../../contexts/TodoContext";
import Button from "../Button";
export const Todo = () => {
  const { theme } = useTheme();
  const { state } = useDispatch();
  const { UPDATE, DELETE, DONE } = useConst();
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
              <Button text={"編集"} type={UPDATE} todo={prev} />
              <Button text={"完了"} type={DONE} todo={prev} />
              <Button text={"削除"} type={DELETE} todo={prev} />
            </ul>
          </section>
        );
      })}
    </div>
  );
};
