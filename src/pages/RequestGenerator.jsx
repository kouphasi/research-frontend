import { useState } from "react";

const RequestGenerator = () => {
  const [backgroundPrompt, setBackgroundPrompt] = useState("");
  const [requestCode, setRequestCode] = useState("");

  const updateBackgroundPrompt = (e) => {
    setBackgroundPrompt(e.target.value);
  };

  const getRequestCode = () => {
    setRequestCode("request code");
  };

  return (
    <>
      <div>前提のプロンプト</div>
      <textarea
        value={backgroundPrompt}
        onChange={updateBackgroundPrompt}
        cols="30"
        rows="10"
      />
      <button onChange={getRequestCode}>Generate</button>

      <div>コード</div>
      <div>{requestCode}</div>
    </>
  );
};

export default RequestGenerator;
