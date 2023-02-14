import React, { useState } from "react";

function Test() {
  const [age, setAge] = useState(0);
  const handleClick = () => {
    setAge(1);
    console.log(age);
  };
  return (
    <div
      onClick={() => {
        console.log("divOnClick");
      }}
      onClickCapture={() => {
        console.log("divOnClickCapture");
      }}
    >
      <button
        onClick={() => {
          console.log("btnOnClick");
        }}
        onClickCapture={() => {
          console.log("btnOnClickCapture");
        }}
      >
        按钮
      </button>
    </div>
  );
}

export default Test;
