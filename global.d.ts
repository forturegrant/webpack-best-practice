/** fn1 type */
declare type fn1 = (value: string) => {};

/** fn2 interface */
declare interface fn2 {
  (value: string): void;
}

/** id是用户的id，可以是number或者string */
declare function getName(id: number | string): string;

declare class Person {
  static maxAge: number; //静态变量
  static getMaxAge(): number; //静态方法

  constructor(name: string, age: number); //构造函数
  getName(id: number): string;
}

declare namespace MyPlugin {
  var n: number;
  var s: string;
  var f: (s: string) => number;
}

declare var n: number;


import "typescript-desc";

declare module "typescript-desc" {
  // 给typescript-desc扩展的方法声明
  export function customGetAgeFunction(age: number): void
}
