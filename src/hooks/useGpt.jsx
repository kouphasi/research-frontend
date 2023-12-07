import { useState } from "react";
import axios from "axios";

const useGpt = () => {
  const [backgroundPrompt, setBackGroundPrompt] = useState("");
  const [mainPrompt, setMainPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const veryfyGpt = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log("start verify");
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/gpt/message`,
        {
          background_prompt: backgroundPrompt,
          main_prompt: mainPrompt,
        }
      );
      console.log(response);
      setResult(response.data.message.content);
    } catch (e) {
      console.log(e);
      setError(
        e.response ? error.response.data : "検証時にエラーが発生しました"
      );
    } finally {
      setLoading(false);
    }
  };
  return {
    backgroundPrompt,
    setBackGroundPrompt,
    mainPrompt,
    setMainPrompt,
    result,
    setResult,
    veryfyGpt,
    loading,
    error,
  };
};

export default useGpt;
