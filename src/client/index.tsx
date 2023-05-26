import React from "react";
import { render } from "react-dom";
import App from "./app";
// import { add, getName } from "./math";
// //@ts-ignore
// import _ from "lodash";
import { registerMicroApps, start, loadMicroApp } from "qiankun";
import { ReactDOM } from '../reactCode/react';
import './i18n.js';

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

// registerMicroApps([
//   {
//     name: "vueApp",
//     entry: "//localhost:8000",
//     container: "#container",
//     activeRule: "/app-vue",
//   },
// ]);
// // 启动 qiankun
// start();

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


// reactCode
const single1 = document.getElementById('single1');
const single1Update = document.getElementById('single1Update');

const single2 = document.getElementById('single2');
const single2Update = document.getElementById('single2Update');

const single3 = document.getElementById('single3');
const single3Update = document.getElementById('single3Update');

const single4 = document.getElementById('single4');
const single4Update = document.getElementById('single4Update');

single1.addEventListener('click', () => {
  let element = (
    <div key="title" id="title">title</div>
  )
  ReactDOM.render(element, document.getElementById('root'));
})

single1Update.addEventListener('click', () => {
  let element = (
    <div key="title" id="title2">title2</div>
  )
  ReactDOM.render(element, document.getElementById('root'));
})

single2.addEventListener('click', () => {
  let element = (
    <div key="title" id="title">title</div>
  )
  ReactDOM.render(element, document.getElementById('root'));
})

single2Update.addEventListener('click', () => {
  let element = (
    <p key="title" id="title">title2</p>
  )
  ReactDOM.render(element, document.getElementById('root'));
})

single3.addEventListener('click', () => {
  let element = (
    <div key="title1" id="title">title</div>
  )
  ReactDOM.render(element, document.getElementById('root'));
})

single3Update.addEventListener('click', () => {
  let element = (
    <div key="title2" id="title">title</div>
  )
  ReactDOM.render(element, document.getElementById('root'));
})

single4.addEventListener('click', () => {
  let element = (
    <ul key="ul">
      <li key="A">A</li>
      <li key="B" id="B">B</li>
      <li key="C">C</li>
    </ul>
  )
  ReactDOM.render(element, document.getElementById('root'));
})

single4Update.addEventListener('click', () => {
  let element = (
    <ul key="ul">
      <li key="B" id="B2">B2</li>
    </ul>
  )
  ReactDOM.render(element, document.getElementById('root'));
})
