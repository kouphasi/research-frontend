import { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const updateUserName = (e) => {
    setUserName(e.target.value);
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    console.log(userName);
    console.log(password);
  };

  return (
    <>
      <h1>ログイン</h1>
      <div>
        <label>ユーザーネーム</label>
        <input type="text" value={userName} onChange={updateUserName} />
      </div>
      <div>
        <label>パスワード</label>
        <input type="text" value={password} onChange={updatePassword} />
      </div>

      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
