import { useEffect, useState } from "react";
import { Button, Input } from "antd";
import useConfirmation from "../hooks/useConfirmation";
import Cookies from "js-cookie";
import "./RequestGenerator.css";
// import ReactMarkdown from "react-markdown";

const RequestGenerator = () => {
  const { TextArea } = Input;
  const [backgroundPrompt, setBackgroundPrompt] = useState("");
  const [requestCode, setRequestCode] = useState("");
  const { confirm } = useConfirmation();
  useEffect(() => {
    confirm();
  });

  const updateBackgroundPrompt = (e) => {
    setBackgroundPrompt(e.target.value);
  };

  const getRequestCode = () => {
    console.log("called");
    const request_code = `
    const submit = async (sentence) => {
      const response = await axios.post(${
        import.meta.env.VITE_SERVER_URL
      }/api/gpt/message, {
        background_prompt: "${backgroundPrompt}",
        main_prompt: sentence
      },
      headers: {
        Authorization: "Bearer ${Cookies.get("access_token")}"
      }
      )
      return response.data
    }
    `;
    setRequestCode(request_code);
  };

  return (
    <>
      <div>
        <div>前提のプロンプト</div>
        <TextArea
          value={backgroundPrompt}
          onChange={updateBackgroundPrompt}
          cols="40"
          rows="10"
        />
        <Button size="large" onClick={getRequestCode}>
          Generate
        </Button>

        {requestCode ? (
          <div>
            <div>コード</div>
            <div className="show-request-code">{requestCode}</div>
            {/* <ReactMarkdown className="show-request-code">
              {requestCode}
            </ReactMarkdown> */}
          </div>
        ) : (
          <div>コードを生成しよう</div>
        )}
      </div>
    </>
  );
};

export default RequestGenerator;
