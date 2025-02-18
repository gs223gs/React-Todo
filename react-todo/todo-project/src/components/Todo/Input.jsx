//.todo追加や編集で使用　のちにログイン等にも使用できるようにしたい？

// type = task, username, password
//来たタイプによって処理を変える


export const Input = ({ type, changehandler, state }) => {
  return <input type={type} value={state} onChange={changehandler} />;
};
