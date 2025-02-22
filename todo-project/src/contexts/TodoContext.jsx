import { useContext, createContext, useReducer } from "react";

const TodoDispatchContext = createContext();
const TodoConstContext = createContext();

//別コンポーネントで以下の定数を呼び出す
//why: 例 type: 'ADD' とするようにしたら，人的ミスが発生する可能性がある．
//type: ADD と必ず定数を呼び出すようにすることでミスを減らす
const ADD = "ADD";
const UPDATE = "UPDATE";
const DELETE = "DELETE";
const DONE = "DONE";

const HIGH = "HIGH";
const MEDIUM = "MEDIUM";
const LOW = "LOW";

  // Start of Selection
const iniState = [
  {
    id: "1",
    task: "React",
    createdate: "2025-02-14",
    due: "2025-03-14",
    priority: HIGH,
    isDone: true,
  },

  {
    id: "2",
    task: "Viu.js",
    createdate: "2025-02-14",
    due: "2025-03-14",
    priority: LOW,
    isDone: false,
  },

  {
    id: "3",
    task: "Angular",
    createdate: "2025-02-15",
    due: "2025-03-15",
    priority: MEDIUM,
    isDone: true,
  },

  {
    id: "4",
    task: "Svelte",
    createdate: "2025-02-16",
    due: "2025-03-16",
    priority: HIGH,
    isDone: false,
  },

  {
    id: "5",
    task: "Node.js",
    createdate: "2025-02-17",
    due: "2025-03-17",
    priority: LOW,
    isDone: true,
  },

  {
    id: "6",
    task: "Express.js",
    createdate: "2025-02-18",
    due: "2025-03-18",
    priority: MEDIUM,
    isDone: false,
  },

  {
    id: "7",
    task: "Next.js",
    createdate: "2025-02-19",
    due: "2025-03-19",
    priority: HIGH,
    isDone: true,
  },

  {
    id: "8",
    task: "Nuxt.js",
    createdate: "2025-02-20",
    due: "2025-03-20",
    priority: LOW,
    isDone: false,
  },

  {
    id: "9",
    task: "Gatsby",
    createdate: "2025-02-21",
    due: "2025-03-21",
    priority: MEDIUM,
    isDone: true,
  },

  {
    id: "10",
    task: "GraphQL",
    createdate: "2025-02-22",
    due: "2025-03-22",
    priority: HIGH,
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
