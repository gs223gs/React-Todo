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
  };
  return (
    <section className={`todo-card_section ${theme}`}>
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
        <ul className={`todo-card_list ${theme}`}>
          <li className={`todo-card_item ${theme}`}>タスク: {prev.task}</li>
          <li className={`todo-card_item ${theme}`}>作成日付: {prev.createdate}</li>
          <li className={`todo-card_item ${theme}`}>期日: {prev.due}</li>
          <li className={`todo-card_item ${theme}`}>重要度: {prev.priority}</li>
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
