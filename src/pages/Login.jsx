import { useState } from "react";
import { Button, Input } from "antd";
import useAuth from "../hooks/useLoginUser.jsx";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const updateUserName = (e) => {
    setUserName(e.target.value);
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const { login, loading, error } = useAuth();

  const handleLogin = async () => {
    console.log("handle_login");
    await login(userName, password);
  };

  return (
    <>
      <div style={styles.container}>
        <h1>ログイン</h1>
        <div>
          <label>ユーザーネーム</label>
          <Input type="text" value={userName} onChange={updateUserName} />
        </div>
        <div>
          <label>パスワード</label>
          <Input type="password" value={password} onChange={updatePassword} />
        </div>

        <Button size="large" onClick={handleLogin} loading={loading}>
          Login
        </Button>
        {error ? <div>{error}</div> : <div></div>}
      </div>
    </>
  );
};

const styles = {
  container: {
    margin: "0 auto",
    textAlign: "center",
    padding: "5rem",
    maxWidth: "60%",
  },
};

export default Login;
