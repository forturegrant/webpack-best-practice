import React, { useState, useEffect, useRef } from 'react';
import { useLatest } from 'ahooks';
const Demo = () => {
  const [a, setA] = useState(1);
  const latestARef = useLatest(a);

  useEffect(() => {
    setInterval(() => {
      console.log('Ahook state:', latestARef.current);
    }, 1000);
  }, []);
  console.log('Demo-State-A:', a);

  return <button onClick={() => setA(a + 1)}>点击Ahook {a} +1 </button>;
};

export default Demo;
