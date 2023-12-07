import { useEffect } from "react";
import { Button, Input } from "antd";
import "../App.css";
import useConfirmation from "../hooks/useConfirmation";
import useGpt from "../hooks/useGpt";

const Verifier = () => {
  const { TextArea } = Input;

  const { confirm } = useConfirmation();

  const {
    backgroundPrompt,
    setBackGroundPrompt,
    mainPrompt,
    setMainPrompt,
    result,
    veryfyGpt,
    error,
    loading,
  } = useGpt();

  useEffect(() => {
    confirm();
  });

  const updateBackgroundPrompt = (e) => {
    setBackGroundPrompt(e.target.value);
  };

  const updateMainPrompt = (e) => {
    setMainPrompt(e.target.value);
  };

  const getResult = () => {
    veryfyGpt();
  };

  return (
    <>
      <div className="flex sgap">
        <div className="left">
          <div>前提のプロンプト</div>
          <TextArea
            value={backgroundPrompt}
            onChange={updateBackgroundPrompt}
            cols="40"
            rows="10"
          />
        </div>
        <div className="right">
          <div>ユーザの入力</div>
          <TextArea
            value={mainPrompt}
            onChange={updateMainPrompt}
            cols="40"
            rows="10"
          />
        </div>
      </div>

      <div className="request">
        <Button size="large" onClick={getResult} loading={loading}>
          検証
        </Button>
      </div>
      <div className="result">
        <div>{result}</div>
        {error ? <div className="error">{error}</div> : null}
      </div>
    </>
  );
};

export default Verifier;
