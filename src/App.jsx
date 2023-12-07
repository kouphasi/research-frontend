import "./App.css";
import { Link } from "react-router-dom";
import { createContext, useEffect } from "react";
import useConfirmation from "./hooks/useConfirmation";
import { Button } from "antd";
// import { Outlet } from "react-router-dom";

export const UserContext = createContext();

const App = () => {
  const { confirm, logout } = useConfirmation();

  useEffect(() => {
    confirm();
  });

  return (
    <>
      <div className="links">
        <Link className="link" to="/request_generator">
          リクエストコード生成
        </Link>
        <Link className="link" to="/verify">
          リクエストコード検証
        </Link>
        <Link className="link" to="/preview">
          開発テスト
        </Link>
      </div>
      {/* <Outlet /> */}
      <Button onClick={logout}>ログアウト</Button>
    </>
  );
};

export default App;
