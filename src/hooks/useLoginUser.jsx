import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const useLoginUser = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const login = async (userName, password) => {
    setLoading(true);
    setError(null);
    try {
      console.log("start login");
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/login`,
        {
          username: userName,
          password,
        }
      );
      console.log(response);
      const { access_token, name } = response.data;
      Cookies.set("access_token", `${access_token}`, {
        expires: 7,
        secure: true,
        sameSite: "Strict",
      });
      setAuth(name);
      navigate("/");
    } catch (e) {
      console.log(e);
      setError(e.response ? error.response.data : "ログインに失敗しました");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setAuth(null);
  };

  return {
    auth,
    loading,
    error,
    login,
    logout,
  };
};
export default useLoginUser;
