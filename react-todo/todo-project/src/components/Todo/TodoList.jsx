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
import Button from "../Button";
import { Input } from "../Input";

export const TodoList = ({ prev }) => {
  const { theme } = useTheme();
  const { UPDATE, DELETE, DONE, HIGH, MEDIUM, LOW } = useConst();

  const [isEditing, setIsEditing] = useState(false);

  const [task, setTask] = useState(prev.task);
  const [createDate, setCreateDate] = useState(prev.createdate);
  const [due, setDue] = useState(prev.due);
  const [prioriry, setPrioriry] = useState(prev.priority);

  const switchEditingMode = () => {
    setIsEditing((prev) => !prev);
    console.log(prev);
  };
  const handleTaskChange = (e) => {
    setTask(e.target.value);
    console.log(task);
  };
  const handleCreateDateChange = (e) => {
    setCreateDate(e.target.value);
    console.log(createDate);
  };
  const handleDueChange = (e) => {
    setDue(e.target.value);
    console.log(due);
  };
  const handlePriorityChange = (e) => {
    setPrioriry(e.target.value);
    console.log(prioriry);
  };

  return (
    <section className={`Todo-Card_section ${theme}`}>
      {isEditing ? (
        <>
          <Input type="input" state={task} changehandler={handleTaskChange} />
          <Input
            type="date"
            state={createDate}
            changehandler={handleCreateDateChange}
          />
          <Input type="date" state={due} changehandler={handleDueChange} />
          <select defaultValue={prev.priority} onChange={handlePriorityChange}>
            <option value={HIGH}>{HIGH}</option>
            <option value={MEDIUM}>{MEDIUM}</option>
            <option value={LOW}>{LOW}</option>
          </select>
          <Button
            text={"取消"}
            type={UPDATE}
            todo={prev}
            clickHandler={switchEditingMode}
          />
          <Button
            text={"確定"}
            type={UPDATE}
            todo={{
              id: prev.id,
              task: task,
              createdate: createDate,
              due: due,
              priority: prioriry,
            }}
            setState={setIsEditing}
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
