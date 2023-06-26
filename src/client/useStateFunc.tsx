import React, { useState } from 'react';
import useSyncCallback from './useSyncCallback';

function Counter() {
  const [count, setCount] = useState(0);

  // 这样子拿不到最新的状态
  // const func = () => {
  //   console.log(count);
  // };

  // 这样子可以拿到最新的状态，或者useEffect里面拿
  const func = useSyncCallback(() => {
    console.log(count);
  });

  function handleClick1() {
    setCount(count + 1);
    func();
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick1}>Increment1</button>
    </div>
  );
}

export default Counter;
