import { useTheme } from "../../contexts/ThemeContext";
import { useDispatch } from "../../contexts/TodoContext";
const Button = ({ text="初期値", type, todo, clickHandler, setState }) => {
  const { theme } = useTheme();
  const { dispatch } = useDispatch();
  
  //編集モード開始 or UPDATE && 編集モード終了 or DELETE,ADD,DONE
  const buttonhandler = () => {
    if (clickHandler) {
      clickHandler();
    } else if (setState) {
      dispatch({ type, todo });
      setState(false);
    } else {
      console.log('ADD',{type,todo})
      dispatch({ type, todo });
    }
  };
  return (
    <button className={`button ${theme}`} onClick={buttonhandler}>
      {text}:{type}
    </button>
  );
};

export default Button;
