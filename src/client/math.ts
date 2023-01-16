export const add = (a, b) => {
  console.log(a + b)
}

export const minus = (a, b) => {
  console.log(a - b)
}


const a = <T>(value: T): T => value;

console.log(a(2), 'ab');


type User = {
  name: string;
  id: number;
}

interface User2 {
  name: string;
  id: number;
}

type UserName = Partial<User>;

type UserName2 = Partial<User2>;

const user1: UserName2 = {
  
}

interface SetUser {
  (name: string, age: number): void;
}

const setUser: SetUser = (name: string, age: number) => {

}

setUser('1', 2);

type Name = 'xiaoming' | 'xiaohong';

const name: Name = 'xiaoming'

/**
 * 返回 x 的 n 次幂的值。
 *
 * @param {number} x 要改变的值。
 * @return {number} x 的 n 次幂的值。
 */
export function getName(id: string|number): number{
  return 1;
}
