import { useState } from "react";

const Verifier = () => {
  const [backgroundPrompt, setBackGroundPrompt] = useState("");
  const [mainPrompt, setMainPrompt] = useState("");
  const [result, setResult] = useState("");

  const updateBackgroundPrompt = (e) => {
    setBackGroundPrompt(e.target.value);
  };

  const updateMainPrompt = (e) => {
    setMainPrompt(e.target.value);
  };

  const getResult = () => {
    setResult("結果です");
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
      <div>ユーザの入力</div>
      <textarea
        value={mainPrompt}
        onChange={updateMainPrompt}
        cols="30"
        rows="10"
      />

      <div className="request">
        <button onClick={getResult}>検証</button>
      </div>
      <div className="result">
        <div>{result}</div>
      </div>
    </>
  );
};

export default Verifier;
