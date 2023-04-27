import React from "react";
import { render } from "react-dom";
import App from "./app";
// import { add, getName } from "./math";
// //@ts-ignore
// import _ from "lodash";
import { registerMicroApps, start, loadMicroApp } from "qiankun";
import { ReactDOM } from '../reactCode/react';

// console.log(_.join(["a", "b", "c"], "***"));

// add(1, 2);

// const a = <T,>(value: T): T => value;

// console.log(a(2), "aa");

// const c = 1;
// console.log(b, 'balabalaba');

// async function fn() {
//   await new Promise((resolve, reject) => reject("报错"));
//   await new Promise((resolve) => resolve(1));
//   console.log("do something...");
// }

render(<App />, document.getElementById("root"));

// // d.ts
// getName(1)

registerMicroApps([
  {
    name: "vueApp",
    entry: "//localhost:8000",
    container: "#container",
    activeRule: "/app-vue",
  },
]);
// 启动 qiankun
start();

// const obj2: fn2 = () => {};
// const obj1: fn1 = () => {
//   return {};
// };

// import mdHtml from './test.md'
// const content = document.createElement('div')
// content.className = 'content'
// content.innerHTML = mdHtml
// document.body.appendChild(content)

// import { getName, MyPlugin, customGetAgeFunction } from 'typescript-desc';

// getName('zzp');
// MyPlugin.f('1');
// customGetAgeFunction(18);

/**
 * 
 */
ReactDOM.render(<div key='title' id="title">title</div>, document.getElementById('root'));
