import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useConst } from "../../contexts/TodoContext";
import { Input } from "./Input";
import Button from "./Button";
import { useTheme } from "../../contexts/ThemeContext";

export const Editing = ({
  type,
  prev = { task: "", createDate: "", due: "", priority: "" },
  switchEditingMode,
  setIsEditing,
}) => {
  const { ADD, UPDATE, HIGH, MEDIUM, LOW } = useConst();
  const [task, setTask] = useState(prev.task || "");
  const [createDate, setCreateDate] = useState(prev.createdate || "");
  const [due, setDue] = useState(prev.due || "");
  const [prioriry, setPrioriry] = useState(prev.priority || HIGH);
  const { theme } = useTheme();

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
  console.log("todo", { task, createDate, due, prioriry });
  console.log(type);
  return (
    <>
      <p>タスク</p>
      <Input type="input" state={task} changehandler={handleTaskChange} />
      <p>作成日付</p>
      <Input
        type="date"
        state={createDate}
        changehandler={handleCreateDateChange}
      />
      <p>期日</p>
      <Input type="date" state={due} changehandler={handleDueChange} />
      <p>重要度</p>
      <select
        className={`editing-select ${theme}`}
        defaultValue={prev.priority}
        onChange={handlePriorityChange}
      >
        <option value={HIGH}>{HIGH}</option>
        <option value={MEDIUM}>{MEDIUM}</option>
        <option value={LOW}>{LOW}</option>
      </select>
      {type === UPDATE ? (
        <>
          <Button
            text="取消"
            type={UPDATE}
            todo={prev}
            clickHandler={switchEditingMode}
          />
          <Button
            text="確定"
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
        <>
          <Button
            text="追加"
            type={ADD}
            todo={{
              id: uuid(),
              task: task,
              createdate: createDate,
              due: due,
              priority: prioriry,
              isDone: false,
            }}
          />
        </>
      )}
    </>
  );
};
