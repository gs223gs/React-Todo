import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useConst } from "../../contexts/TodoContext";
import { useTheme } from "../../contexts/ThemeContext";
import { Input } from "./Input";
import Button from "./Button";

export const Editing = ({
  type,
  prev = { task: "", createDate: "", due: "", priority: "", isDone: false },
  switchEditingMode,
  setIsEditing,
}) => {
  const { ADD, UPDATE, HIGH, MEDIUM, LOW } = useConst();
  const { theme } = useTheme();
  const [task, setTask] = useState(prev.task || "");
  const [createDate, setCreateDate] = useState(prev.createdate || "");
  const [due, setDue] = useState(prev.due || "");
  const [prioriry, setPrioriry] = useState(prev.priority || HIGH);

  return (
    <>
      <p>タスク</p>
      <Input
        type="input"
        state={task}
        changehandler={(e) => {
          setTask(e.target.value);
        }}
      />
      <p>作成日付</p>
      <Input
        type="date"
        state={createDate}
        changehandler={(e) => {
          setCreateDate(e.target.value);
        }}
      />
      <p>期日</p>
      <Input
        type="date"
        state={due}
        changehandler={(e) => {
          setDue(e.target.value);
        }}
      />
      <p>重要度</p>
      <select
        className={`editing-select ${theme}`}
        defaultValue={prev.priority}
        onChange={(e) => {
          setPrioriry(e.target.value);
        }}
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
