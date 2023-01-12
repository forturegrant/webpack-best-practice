// 模拟一段ajax请求
function ajax(content) {
  console.log("ajax request " + content);
}

// function debounce(fn, delay) {
//   let timer = null;
//   return function (...arg) {
//     clearTimeout(timer);
//     timer = setTimeout(function () {
//       fn(arg);
//     }, delay);
//   };
// }

// let debounceAjax = debounce(ajax, 500)

// window.addEventListener("click", () => debounceAjax(1));

// function throttle(fun, delay) {
//     let last, deferTimer
//     return function (args) {
//         let that = this
//         let _args = arguments
//         let now = +new Date()
//         console.log(last, 'last');
//         console.log(now, 'now');
//         console.log(last + delay, 'last + delay');
//         if (last && now < last + delay) {
//             clearTimeout(deferTimer)
//             deferTimer = setTimeout(function () {
//                 last = now
//                 fun.apply(that, _args)
//             }, delay)
//         }else {
//             last = now
//             fun.apply(that, _args)
//         }
//     }
// }

function throttle(fn, delay) {
  let last, timer;
  return function (...arg) {
    let now = +new Date();
    if (last && now < last + delay) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        last = now;
        fn(arg);
      }, delay);
    } else {
      last = now;
      fn(arg);
    }
  };
}

let debounceAjax = throttle(ajax, 2000);

window.addEventListener("click", () => debounceAjax(1));

const add = (x) => x + 10;
const multiply = (x) => x * 10;

// // 我们的计算改为两个函数的嵌套计算，add函数的返回值作为multiply函数的参数
// let res = multiply(add(10));
// console.log(res); // 结果还是200

// const compose = (...fn) => {
//   return function(x){
//     // @ts-ignore
//     // return fn.reduceRight((prev, cur) => cur(prev), x);
//     return fn.reduceRight(function(prev, cur){
//       console.log(prev, 'prev');
//       console.log(cur, 'cur');
//       return cur(prev)
//     }, x);
//   }
// }

const compose = (...fn) => (x) => fn.reduceRight((prev, cur) => cur(prev), x);

compose(multiply, add)(10);
