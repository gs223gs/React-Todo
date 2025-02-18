import { useState } from "react";
import { useDispatch } from "../../contexts/TodoContext";
import { useConst } from "../../contexts/TodoContext";
import { Input } from "./Input";
import Button from "./Button";
export const Editing = ({ prev, switchEditingMode, setIsEditing }) => {
  const { UPDATE, HIGH, MEDIUM, LOW } = useConst();
  const [task, setTask] = useState(prev.task);
  const [createDate, setCreateDate] = useState(prev.createdate);
  const [due, setDue] = useState(prev.due);
  const [prioriry, setPrioriry] = useState(prev.priority);

 
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
  );
};
