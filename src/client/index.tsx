import React from "react";
import { render } from "react-dom";
import App from "./app";
import { add } from "./math";
//@ts-ignore
import _ from "lodash";
import { registerMicroApps, start } from "qiankun";

console.log(_.join(["a", "b", "c"], "***"));

add(1, 2);

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

const a = <T,>(value: T): T => value;

console.log(a(2), "aa");

const c = 1;
console.log(b, 'balabalaba');

async function fn() {
  await new Promise((resolve, reject) => reject("报错"));
  await new Promise((resolve) => resolve(1));
  console.log("do something...");
}

fn();

render(<App />, document.getElementById("root"));

// import mdHtml from './test.md'
// const content = document.createElement('div')
// content.className = 'content'
// content.innerHTML = mdHtml
// document.body.appendChild(content)
