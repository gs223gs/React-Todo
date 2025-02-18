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

const HIGH = 'HIGH';
const MEDIUM = 'MEDIUM';
const LOW = 'LOW';


const iniState = [
  {
    id: "1",
    task: "React",
    createdate: "2025-02-14",
    due: "2025-03-14",
    priority: HIGH,
    isDone: false,
  },

  {
    id: "2",
    task: " Viu.js",
    createdate: "2025-02-14",
    due: "2025-03-14",
    priority: LOW,
    isDone: false,
  },
];

const todoreducer = (prev, action) => {
  console.log(action);
  switch (action.type) {
    case ADD:
      return [...prev, action.todo];
    case UPDATE:
      return prev.map((todo) => {
        return todo.id === action.todo.id
          ? {
              ...todo,
              task: action.todo.task,
              due: action.todo.due,
              priority: action.todo.priority,
            }
          : { ...todo };
      });
    case DELETE:
      return prev.filter((todo) => {
        return todo.id !== action.todo.id;
      });
    case DONE:
      return prev.map((todo) => {
        return todo.id === action.todo.id
          ? { ...todo, isDone: true }
          : { ...todo };
      });
    default:
      throw new Error("不明なactionです。");
  }
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoreducer, iniState);

  return (
    <TodoDispatchContext.Provider value={{ state, dispatch }}>
      <TodoConstContext.Provider value={{ ADD, UPDATE, DELETE, DONE, HIGH, MEDIUM, LOW }}>
        {children}
      </TodoConstContext.Provider>
    </TodoDispatchContext.Provider>
  );
};

export const useDispatch = () => useContext(TodoDispatchContext);
export const useConst = () => useContext(TodoConstContext);
