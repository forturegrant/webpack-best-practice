import React, { useState, useEffect, useRef } from 'react';
const Demo = () => {
  const [a, setA] = useState(1);
  const ref = useRef();
  ref.current = a;

  useEffect(() => {
    setInterval(() => {
      console.log('hook state:', ref.current);
    }, 1000);
  }, []);
  console.log('Demo-State-A:', a);

  return <button onClick={() => setA(a + 1)}>点击hook {a} +1 </button>;
};

export default Demo;
