import { useContext, createContext, useReducer } from "react";

const TodoDispatchContext = createContext();
const TodoConstContext = createContext();

//別コンポーネントで以下の定数を呼び出す
//why: 例 type: 'ADD' とするようにしたら，人的ミスが発生する可能性がある．
//type: ADD　と必ず定数を呼び出すようにすることでミスを減らす
const ADD = "ADD";
const UPDATE = "UPDATE";
const DELETE = "DELETE";
const DONE = "DONE";

const HIGH = "HIGH";
const MEDIUM = "MEDIUM";
const LOW = "LOW";

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
  switch (action.type) {
    case ADD:
      return [action.todo, ...prev];
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
      <TodoConstContext.Provider
        value={{ ADD, UPDATE, DELETE, DONE, HIGH, MEDIUM, LOW }}
      >
        {children}
      </TodoConstContext.Provider>
    </TodoDispatchContext.Provider>
  );
};

export const useDispatch = () => useContext(TodoDispatchContext);
export const useConst = () => useContext(TodoConstContext);
