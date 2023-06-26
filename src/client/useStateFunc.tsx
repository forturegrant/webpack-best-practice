import React, { useState } from 'react';
import useSyncCallback from './useSyncCallback';

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick1() {
    setCount(count + 1);
    // func()
    // setCount(count + 1);
    setCount(prevCount => prevCount + 1);
  }

  const func = useSyncCallback(() => {
    console.log(count);
  });

  // const func = () => {
  //   console.log(count);
  // };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick1}>Increment1</button>
    </div>
  );
}

export default Counter;
