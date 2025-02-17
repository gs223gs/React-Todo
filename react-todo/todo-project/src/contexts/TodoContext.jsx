//.Todo管理用のReducer
//Badge表示用のState
// .todos{
// task: String
// createdate: date
// due day: date
// priority: String
// isDone: bool
//}
//reducerの中身
//add, update, delete, done

//newTodo = todos.filter(false)
//setBadge(newTodo.lenght)

import { useContext, useState, createContext, useReducer } from "react";

const TodoDispatchContext = createContext();
const TodoConstContext = createContext();

const ADD = "ADD";
const UPDATE = "UPDATE";
const DELETE = "DELETE";
const DONE = "DONE";

const iniState = {
  task: "React",
  createdate: "2025-02-14",
  due: "2025-03-14",
  priority: "HOT",
  isDone: false,
};

const todoreducer = (prev, action) => {
  switch (action.type) {
    case ADD:
      return console.log(ADD);
    case UPDATE:
      return console.log(UPDATE);
    case DELETE:
      return console.log(DELETE);
    case DONE:
      return console.log(DONE);
    default:
      throw new Error("不明なactionです。");
  }
};

const [state, dispatch] = useReducer(todoreducer, iniState);

export const TodoProvider = () => {
  return (
    <TodoDispatchContext.Provider value={{ state, dispatch }}>
      <TodoConstContext.Provider value={{ ADD, UPDATE, DELETE, DONE }}>
        {children}
      </TodoConstContext.Provider>
    </TodoDispatchContext.Provider>
  );
};

export const useDispatch = () => useContext(TodoDispatchContext);
export const useConst = () => useConst(TodoConstContext);
