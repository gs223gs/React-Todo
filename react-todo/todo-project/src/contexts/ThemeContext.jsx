//カラーテーマ

//最上位で使用使用

//state?
//reducer?

//簡単な処理 => dark : light だから別にreducerじゃなくてよくない？
import { useContext, useState, createContext } from "react";
const ThemeContext = createContext();
export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('dark')
  return (
    <ThemeContext.Provider value = {{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
  )
};

export const useTheme = () => useContext(ThemeContext);

