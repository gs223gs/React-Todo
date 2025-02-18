//編集ボタン
//完了ボタン
import { useTheme } from "../../contexts/ThemeContext";
import { useDispatch } from "../../contexts/TodoContext";
const Button = ({ text, type, todo, clickHandler, setState }) => {
  const { theme } = useTheme();
  const { dispatch } = useDispatch();

  const buttonhandler = () => {
    if (clickHandler) {
      clickHandler();
    } else if (setState) {
      dispatch({ type, todo });
      setState(false);
    } else {
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
