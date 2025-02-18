//List{
// タスク名
// 作成日
// 重要度
// 締切
// Button type={edit}
// Button type ={done}
//}

import { useTheme } from "../../contexts/ThemeContext";
import { useConst } from "../../contexts/TodoContext";
import { useState } from "react";
import Button from "./Button";
import { Editing } from "./Editing";

export const TodoList = ({ prev }) => {
  const { theme } = useTheme();
  const { UPDATE, DELETE, DONE } = useConst();
  const [isEditing, setIsEditing] = useState(false);
  const switchEditingMode = () => {
    setIsEditing((prev) => !prev);
    console.log(prev);
  };
  return (
    <section className={`Todo-Card_section ${theme}`}>
      {isEditing ? (
        <>
          <Editing
            prev={prev}
            setIsEditing={setIsEditing}
            switchEditingMode={switchEditingMode}
            type={UPDATE}
          />
        </>
      ) : (
        <ul className={`Todo-Card_list ${theme}`}>
          <li className={`Todo-Card_item ${theme}`}>{prev.task}</li>
          <li className={`Todo-Card_item ${theme}`}>{prev.createdate}</li>
          <li className={`Todo-Card_item ${theme}`}>{prev.due}</li>
          <li className={`Todo-Card_item ${theme}`}>{prev.priority}</li>
          <Button
            text={"編集"}
            type={UPDATE}
            todo={prev}
            clickHandler={switchEditingMode}
          />
          <Button text={"完了"} type={DONE} todo={prev} />
          <Button text={"削除"} type={DELETE} todo={prev} />
        </ul>
      )}
    </section>
  );
};
