import { useEffect,useState } from "react";
import { useDispatch } from "../../contexts/TodoContext"
import { useConst } from "../../contexts/TodoContext";
import { useTheme } from "../../contexts/ThemeContext";
import { Editing } from "./Editing";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const { state } = useDispatch();
  const { ADD } = useConst();
  const { theme } = useTheme();

  const activeTodos = state.filter((todo) => todo.isDone == false);
  const [pages, setPages] = useState([])
  const [pagelangth, setPagelangth] = useState(0)
  const [filterTodo, setFilterTodo] = useState(activeTodos)

  

  useEffect(() => {
    setPagelangth(Math.ceil(filterTodo.length / 2))
    const newPages = [];
    for (let i = 0; i < pagelangth; i++) {
      newPages.push(i + 1);
    }
    setPages(newPages);
  }, [pagelangth]);

  // useEffect(() => {
  // }, []);

  console.log(state);
  console.log(activeTodos);
  console.log(pages);

  return (
    <div className={`todo ${theme}`}>
      <div className={`todo-create ${theme}`}>
        <Editing type={ADD} />
        <div>
        {pages.map((prev) =>{
          return <span key ={prev} onClick={()=>alert('onClicked')}>{prev}        </span>
        })}
      </div>
      </div>
      <div className={`todo-card ${theme}`}>
        {filterTodo.map((prev) => {
          return <TodoList prev={prev} key={prev.id} />;
        })}
      </div>
      
    </div>
  );
};
