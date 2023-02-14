import React, { useState } from "react";
function Index() {
  const [num, setNumber] = useState(0);
  const handerClick = () => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        // setNumber(num + 1);  // 页面展示1
        setNumber((num) => num + 1);  // 页面展示5
        console.log(num);   // 0 0 0 0 0
      }, 0);
    }
  };
  return <button onClick={handerClick}>{num}</button>;
}

export default Index;


type name = 'zzp' | 'zcp';

let n: name = 'zzp';

interface setName{
  (name: string): void  
}

const sName = (name: string): void => {
  return 111
}

function sAge(): void {
  return 1;
}