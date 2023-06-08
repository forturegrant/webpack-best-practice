import React, { useState, useEffect, useLayoutEffect } from "react";
function App() {
  const [count, setCount] = useState(0);

  // useLayoutEffect(() => {
  useEffect(() => {
    if (count === 0) {
      const randomNum = 10 + Math.random() * 200;
      setCount(randomNum);
    }
  }, [count]);

  return <div onClick={() => setCount(0)}>{count}</div>;
}

export default App;
