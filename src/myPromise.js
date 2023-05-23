export const pr = () => {

}

// console.log('promise')

// Promise + Fetch 封装一个 ajax :
// const ajax = (url = '', method = 'GET', data = {}) => {
//     return new Promise((resolve, reject) => {
//         let options = {method}
//         if (method === 'GET') {
//             // 把类似 {name:dylan,favourite:beef} 转化为 ?name=dylan&&favourite=beef
//             url += '?' + Object.entries(data).map(arr => arr[0] + '=' + arr[1]).join('&')
//         } else if (method === 'POST') {
//             options.body = JSON.stringify(data)
//             options.headers = {'Content-Type': 'application/json'}
//         }
//         fetch(url, options).then(res => res.json())
//             .then(data => resolve(data))
//             .catch(e => reject(e))
//     })
// }
//
// ajax('https://www.baidu.com', "GET", {name: 1, id: 1, content: 1})
//     .then(r => {
//         console.log(r)
//     })
//     .catch(err => {
//         console.log(err)
//     })

// promise.all

// let p1 = new Promise(resolve => setTimeout(resolve, 2000, 1))
// let p2 = new Promise(resolve => setTimeout(resolve, 3000, 2))
// let p3 = new Promise((resolve, reject) => {
//     let v = Math.random()
//     if (v > 0.5) setTimeout(resolve, 2000, v)
//     else setTimeout(reject, 2000, v)
// })
//
// Promise.all([p1, p2, p3])
//     .then(value => console.log(value)) //[1, 2, 0.7685334]
//     .catch(reason => console.error(`due to p3 = ${reason} < 0.5 , so promise.all failed`))  //或者 0.2342321
// console.log(p1, p2, p3)
// //如果p1 p2 p3都resolve，则当前promise实例 resolve，va是p1 p2 p3 resolve的结果构成的数组
// //如果p1 p2 p3 任一个reject，则当前promise实例立即reject，reason是p1 p2 p3中最先reject的值

// allSettled
//
// let p1 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 11111))
// let p2 = new Promise((resolve, reject) => setTimeout(resolve, 3000, 2))
// let p3 = new Promise((resolve, reject) => setTimeout(reject, 2000, 3))
//
// Promise.allSettled([p1, p2, p3])
//     .then(v => console.log(v))
// /* 输出结果
// [
//  {"status":"fulfilled","value":1},
//  {"status":"fulfilled","value":2},
//  {"status":"rejected","reason":3}
// ]
// */


// Promise.allSettled([
//     Promise.resolve(33),
//     new Promise((resolve) => setTimeout(() => resolve(66), 0)),
//     99,
//     Promise.reject(new Error("an error")),
// ]).then((values) => console.log(values));



// let p1 = new Promise((resolve, reject) => setTimeout(resolve, Math.random()*1000, 1))
// let p2 = new Promise((resolve, reject) => setTimeout(resolve, Math.random()*1000, 2))
// let p3 = new Promise((resolve, reject) => setTimeout(reject, Math.random()*1000, 3))
//
//
// Promise.race([p1, p2, p3])
//     .then(value => console.log('fullfill',value))  //p1 p2 p3谁最先resolve，就进入这里
//     .catch(reason => console.error('reject',reason)) ////p1 p2 p3谁最先reject，就进入这里


//any

// const pErr = new Promise((resolve, reject) => {
//     reject("总是失败");
// });
//
// const pSlow = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, "最终完成");
// });
//
// const pFast = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, "很快完成");
// });
//
// Promise.any([pErr, pSlow, pFast]).then((value) => {
//     console.log(value);
//     // pFast fulfils first
// })
// // 期望输出："很快完成"
//


let thenable = {
    then: (resolve, reject) => {
        resolve(1)
    }
}
Promise.resolve(thenable).then(v => {
    console.log(v)
})

Promise.resolve(1).then(v => {
    console.log(v)
})
