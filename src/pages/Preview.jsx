import { useState, useMemo, memo, useEffect } from "react";
import { Input, Button } from "antd";
import "../App.css";
import useConfirmation from "../hooks/useConfirmation";
import PropTypes from "prop-types";

const Preview = memo(() => {
  const { confirm } = useConfirmation();
  const HTML_TEMPLATE = useMemo(
    () => `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <title>Document</title>
</head>
<body>
  
</body>
</html>`,
    []
  );

  useEffect(() => {
    confirm();
  });
  const [html, setHtml] = useState(HTML_TEMPLATE);
  const [frameHtml, setFrameHtml] = useState(HTML_TEMPLATE);
  const { TextArea } = Input;
  const setToFrame = () => {
    setFrameHtml(html);
  };

  return (
    <>
      <div className="flex sgap">
        <div className="right">
          <div className="label">コード編集</div>
          <TextArea
            value={html}
            onChange={(e) => {
              setHtml(e.target.value);
            }}
            cols="70"
            rows="20"
          />
          <Button onClick={setToFrame}>反映</Button>
        </div>
        <div className="left">
          <div className="label">プレビュー</div>
          <Iframe frameHtml={frameHtml}></Iframe>
        </div>
      </div>
    </>
  );
});
Preview.displayName = "Preview";

// eslint-disable-next-line react/display-name
const Iframe = memo((props) => {
  const { frameHtml } = props;
  return (
    <>
      <iframe srcDoc={frameHtml} className="frame"></iframe>
    </>
  );
});
Iframe.propTypes = {
  frameHtml: PropTypes.string.isRequired,
};

export default Preview;
