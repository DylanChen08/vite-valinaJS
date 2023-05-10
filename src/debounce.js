export function d(params) { }
// console.log('aaaaaa');



// function debounce(fn, time) {
//     let timer = null
//     return function (...args) {
//          //1. 如果发现很短的时间内,timer还没到时间，但是出现了多次调用，那么就将定时器清除并且重新设定定时器
//          if (timer) {
//             clearTimeout(timer)
//         }
//         //2. 如果没有timer，先是给timer赋予定时器
//         timer = setTimeout(() => {
//             // 这里其实是一种柯里化 (this)(...args) ，
//             // 这种写法可以让传进来的函数在运行的时候，既能得到事件(event)，也能得到正确的this指向(具体看fn的被挂载了什么)。
//             fn.bind(this)(...args)
//         }, time)
//         // 注意： 1,2 的顺序不能对调  对调之后会不执行，timer永远被清除
//     }


// }

// function show(e) {
//     console.log(e)
//     console.log(this)
// }

// document.onscroll = debounce(show, 1000)






