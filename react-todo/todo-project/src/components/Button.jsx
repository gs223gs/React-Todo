//編集ボタン
//完了ボタン
import { useTheme } from "../contexts/ThemeContext";
import { useDispatch } from "../contexts/TodoContext";
const Button = ({ text, type, todo }) => {
  const { theme } = useTheme();
  const { dispatch } = useDispatch();
  
  const buttonhandler = () => {
    dispatch({ type, todo });
  };
  return (
    <button className={`button $(theme)`} onClick={buttonhandler}>
      {text}:{type}
    </button>
  );
};

export default Button;
