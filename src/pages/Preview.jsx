import { useState } from "react";

const Preview = () => {
  const [html, setHtml] = useState("");

  return (
    <>
      <div className="right">
        <textarea
          value={html}
          onChange={(e) => {
            setHtml(e.target.value);
          }}
          cols="30"
          rows="10"
        />
      </div>
      <div className="left">
        <iframe srcDoc={html}></iframe>
      </div>
    </>
  );
};

export default Preview;
