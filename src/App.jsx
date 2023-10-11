import "./App.css";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </>
  );
};

export default App;
