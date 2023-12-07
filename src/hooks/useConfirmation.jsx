import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const useConfirmation = () => {
  const [auth, setAuth] = useState(null);
  const navigate = useNavigate();

  const confirm = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/confirm`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("access_token")}`,
          },
        }
      );
      const { name } = response.data;
      if (name) setAuth(name);
    } catch (e) {
      console.log(e);
      logout();
    }
  };

  const logout = () => {
    console.log("call logout");
    setAuth(null);
    Cookies.set("access_token", "");
    navigate("/login");
  };

  return {
    auth,
    confirm,
    logout,
  };
};

export default useConfirmation;
