//.todo追加や編集で使用　のちにログイン等にも使用できるようにしたい？

// type = task, username, password
//来たタイプによって処理を変える

import { useTheme } from "../../contexts/ThemeContext";
export const Input = ({ type, changehandler, state }) => {
  const { theme } = useTheme();
  return (
    <input
      className={`input ${theme}`}
      type={type}
      value={state}
      onChange={changehandler}
    />
  );
};
