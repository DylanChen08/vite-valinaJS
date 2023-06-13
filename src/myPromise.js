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


// let thenable = {
//     then: (resolve, reject) => {
//         resolve(1)
//     }
// }
// Promise.resolve(thenable).then(v => {
//     console.log(v)
// })
//
// Promise.resolve(1).then(v => {
//     console.log(v)
// })


// Promise.all = function (iterable) {
//     //iterable 可以是promise类型数组 promise.all([promise1,promise2,promise3]) 或者非Promise类型 promise.all([1,2,3]) 或者字符串 promise.all('hello')
//     //判断里面的每一项，如果是Promise对象，则使用，如果不是则用Promise.resolve转成Promise对象
//     let arr = [...iterable].map(item => item instanceof Promise ? item : Promise.resolve(item))  //结构变成数组，包含Promise对象
//     //如果迭代器是空的，那么直接返回 promise.resolve([])空数组
//     if (arr.length === 0) return Promise.resolve([])
//     //得到一个Promise对象
//     return new Promise((resolve, reject) => {
//         let results = []
//         let settledCount = 0  //记录result的数量
//         // 使用let i 的原因是 let具有块级作用域 即使是在.then()里面使用，也是会保存原来的结果
//         for (let i in arr) {
//             //不用push的原因，会影响顺序
//             arr[i].then(val => {
//                 results[i] = val
//             }, reject).finally(() => {
//                 settledCount++
//                 if (settledCount === arr.length) { //如果resolve的长度等于arr.length
//                     resolve(results)
//                 }
//             })
//         }
//     })
// }

//test
// let p1 = new Promise(r => setTimeout(r, 3000, 1))
// let p2 = new Promise((r, j) => setTimeout(j, 1000, 2))
// let p3 = new Promise(r => setTimeout(r, 2000, 3))

// Promise.all([p1, p2, p3])
//     .then(data => console.log(data))
//     .catch(e => console.error(e))
//
// Promise.all('hello').then(data => console.log(data))
//
// Promise.all('').then(data => console.log(data))
//
// Promise.all([Promise.resolve(2), 3]).then(data => console.log(data))


// Promise.race = function (iterable) {
//     let arr = [...iterable].map(item => item instanceof Promise ? item : Promise.resolve(item))
//     return new Promise((resolve, reject) => {
//         //如果传入是空的数组那么一直处于pending状态，那么下面的for循环将不会执行。
//         for (let i = 0; i < arr.length; i++) {
//             //中间任何一个成功或失败，立刻执行
//             arr[i].then(resolve, reject)
//         }
//     })
// }
//
//
// //test
// let p1 = new Promise(r => setTimeout(r, 3000, 1))
// let p2 = new Promise((r, j) => setTimeout(j, 1000, 2))
// let p3 = new Promise(r => setTimeout(r, 500, 3))
//
// // Promise.race([p1, p2, p3])
// //     .then(data => console.log(data))
// //     .catch(e => console.error(e))
// //
// // Promise.race('hello').then(data => console.log(data))
// //
// // console.log(Promise.race(''))
//
// Promise.race([Promise.resolve(2), 3]).then(data => console.log(data))


// Promise.allSettled = function (iterable) {
// // promise.allSettled 即便是失败了也会存在正常的结果里面，所以没有catch
//     let arr = [...iterable].map(item => item instanceof Promise ? item : Promise.resolve(item))
//     if (arr.length === 0) return Promise.resolve([])
//
//     return new Promise((resolve, reject) => {
//         let results = []
//         let count = 0
//         for (let i in arr) {
//             arr[i].then(value => {
//                 //存取成功的结果
//                 results[i] = {status: 'fulfilled', value}
//             }, reason => {
//                 //存取失败的结果
//                 results[i] = {status: 'rejected', reason}
//             }).finally(() => {
//                 count++
//                 if (count === arr.length) {
//                     resolve(results)
//                 }
//             })
//         }
//     })
// }




// let p1 = new Promise(r => setTimeout(r, 3000, 1))
// let p2 = new Promise((r, j) => setTimeout(j, 1000, 2))
// let p3 = new Promise(r => setTimeout(r, 500, 3))
//
// Promise.allSettled([p1, p2, p3])
//     .then(data => console.log(data))
//     .catch(e => console.error(e))
//
// Promise.allSettled('hello').then(data => console.log(data))
//
// Promise.allSettled('').then(data => console.log(data))
//
// Promise.allSettled([Promise.resolve(2), 3, Promise.reject(4)]).then(data => console.log(data))




// Promise.any = function(iterable) {
//         //iterable 可以是promise类型数组 promise.all([promise1,promise2,promise3]) 或者非Promise类型 promise.all([1,2,3]) 或者字符串 promise.all('hello')
//     //判断里面的每一项，如果是Promise对象，则使用，如果不是则用Promise.resolve转成Promise对象
//     let arr = [...iterable].map(item => item instanceof Promise ? item : Promise.resolve(item))
//     //如果传入的是个空对象
//     if(arr.length === 0) return Promise.reject('All promise rejected')
//     return new Promise((resolve, reject) => {
//         let rejectCount = 0
//         for(let i=0; i<arr.length; i++) {
//             arr[i].then(resolve, reason => {
//                 //记录失败的次数
//                 rejectCount++
//                 //如果失败等于传入数组的长度，则返回错误。
//                 if(rejectCount === arr.length) {
//                     reject('All promises rejected')
//                 }
//             })
//         }
//     })
// }

// //test
// let p1 = new Promise(r => setTimeout(r, 3000, 1))
// let p2 = new Promise((r,j) => setTimeout(j, 1000, 2))
// let p3 = new Promise(r => setTimeout(() => r(3), 500))

// Promise.any([p1, p2, p3])
//     .then(data => console.log(data))
//     .catch(e => console.error(e))

// Promise.any('hello').then(data => console.log(data))

// Promise.any('').then(data => console.log(data), reason => console.error(reason))

// Promise.any([Promise.resolve(2), 3, Promise.reject(4)]).then(data => console.log(data))


// 自制 promise.last
// 非Promise官方API，这是自创的需求
// 参数是一个iterable对象。比如 String, Array, Map, and Set
// 返回一个Promise对象，当参数中最晚resolve的promise对象resolve时再resolve。如果全部reject，则reject
// 如果iterable为空，则返回一个已经rejected的Promise

// Promise.last = function(iterable) {
//     let arr = [...iterable].map(item => item instanceof Promise ? item : Promise.resolve(item))
//     if(arr.length === 0) return Promise.reject('all promises reject')

//     return new Promise((resolve, reject) => {
//       let lastValue = null //记录下最后成功的值
//       let resolveCount = 0
//       let rejectCount = 0
  
//       for(let i=0; i<arr.length; i++) {
//         arr[i].then(val => {
//           lastValue = val
//           resolveCount++
//         }, reason => {
//           rejectCount++
//         }).finally(() => {
//             //如果全部失败了
//           if(rejectCount === arr.length) {
//             return reject('all promises reject')
//           }
//           //成功的+失败的 === 数组的长度
//           if(resolveCount + rejectCount === arr.length) {
//             resolve(lastValue)
//           }
//         })
//       }
//     })
//   }
  
  
//   //test
//   let p1 = new Promise(r => setTimeout(r, 3000, 1))
//   let p2 = new Promise((r,j) => setTimeout(j, 1000, 2)) //等价于下面的写法
//   let p3 = new Promise(r => setTimeout(() => r(3), 500))
  
//   Promise.last([p1, p2, p3])
//     .then(data => console.log(data)) //1
//     .catch(e => console.error(e))
  
//   Promise.last('hello').then(data => console.log(data)) //o
  
//   Promise.last('').then(data => console.log(data), reason => console.error(reason))   //reject
  
//   Promise.last([Promise.resolve(2), 3, Promise.reject(4)]).then(data => console.log(data))  //3
  
//   Promise.last([Promise.reject(4), Promise.reject(5)]).then(data => console.log(data), reason => console.error(reason))




//手写promise.queue
// Promise.queue = function(arr, initValue) {
//   return new Promise((resolve, reject) => {
//     let sequence = Promise.resolve(initValue)
//     arr.forEach(fn => {
//       sequence = sequence.then(fn)
//     })
//     sequence.then(resolve, reject)
//   })
// }
// //获得ip
// function getIp() {
//   return fetch('http://rap2api.taobao.org/app/mock/245421/getIp').then(res => res.json())
// }
// //通过ip获得城市
// function getCityFromIp({ip}){
//   console.log('ip',ip)
//   return fetch('http://rap2api.taobao.org/app/mock/245421/getCity?ip='+ip).then(res => res.json())
// }
// //通过城市获得天气
// function getWeatherFromCity({city}){ 
//   return fetch('http://rap2api.taobao.org/app/mock/245421/getWeather?city='+city).then(res => res.json())
// }
// // 1. 先获得ip 2.获得城市 3. 获得天气
// // 1. 通过getIp的结果作为getCityFromIp的参数 2. 通过getCityFromIp的结果作为getWeatherFromCity的参数 3.getWeatherFromCity的结果就是then的data
// Promise.queue([getIp, getCityFromIp, getWeatherFromCity]).then(data => console.log(data) )


// 封装一个asyncPool,控制并发数

// function asyncPool(fn, arr, limit=2) {
//   let args = [...arr]  //深拷贝arr
//   let currentCount = 0  //当前运行的数量 
//   let results = []
//   let settledCount = 0
//   let order = 0

//   return new Promise((resolve, reject) => {

//     function run() {
//       //用while循环更加精准控制
//       while(currentCount<limit && args.length > 0) {
//         currentCount++  //很短的时间内数量就满了，就停止了
//         //闭包暂存i数据
//         (function(i){
//           //闭包暂存了i
//           console.log('当前请求数' + currentCount)
//           let val = args.shift()
//           //fn(val)得到的就是promise对象
//           fn(val).then(v => {
//             //保证结果的顺序和参数的顺序一致
//             results[i] = v
//           }).finally(() => {
//             settledCount++
//             currentCount--  //不管结果如何。都走完一个
//             //如果有结果的数量等于
//             // 因为 let args = [...arr]  //深拷贝arr  所以 arr的长度不变
//             // 为什么不能用result来判断，是因为
//             if(settledCount === arr.length) {
//               resolve(results)
//             } else {
//               run()
//             }
//           })          
//         })(order++)
//       }
//     }
//     run()
//   })
// }


// function getWeather(city) {
//   console.log(`开始获取${city}的天气`)
//   return fetch(`https://api2.jirengu.com/getWeather.php?city=${city}`).then(res=> res.json()).catch(err=>{console.log(err)})
// }

// let citys = ['北京', '上海', '杭州', '成都', '武汉', '天津', '深圳', '广州', '合肥', '郑州']
// asyncPool(getWeather, citys, 3).then(results => console.log(results)).catch(err=>{console.log(err)})



// const fs = require('fs')
// // import{fs} from
//
//
// function promisify(fn, context = null) {
//   //...args结构readFile的参数
//   return function(...args) {
//     // return一个promise对象
//     return new Promise((resolve, reject) => {
//       //promise对象什么时候会有结果呢？ 当我们真正调用readfile，fn成功才有结果
//       fn.bind(context)(...args, function(err, val) {
//         if(err !== null) reject(err)
//         else resolve(val)
//       })
//     })
//   }
// }
//
// fs.readFile('readme.md', 'utf-8', (err, data) => {
//   if(err) {
//     console.error(err)
//   } else {
//     console.log(data)
//   }
// })
//
// let readFile = promisify(fs.readFile)
// readFile('readme.md', 'utf-8')
//   .then(v => console.log(v))
//   .catch(err => console.error(err))


//宏队列、微队列
setTimeout(() => console.log(1), 0);
new Promise(resolve => {
    resolve();
    console.log(2);
}).then(() => {
    console.log(3);
});
console.log(4);

// 0. 给函数命名，f1,f2,f3便于分析

//1.执行同步的代码，创建一个定时器，timeout：0 表示立刻将f1加入宏队列【f1】
setTimeout(function f1 ()  {
    //5. 拿出宏队列f1，输出1
    console.log(1)
}, 0);

//2.创建一个promise对象[同步代码]，resolve的时候立刻会将f3加入微队列【f3】,并且在resolve之后输出 2 ,此时宏队列[f1]，微队列[f3]，输出2
new Promise(function f2 (resolve)  {
    resolve(); //同步
    console.log(2);//同步
}).then(function f3()  {
    // 4.扫描微队列[f3]拿出来，执行输出 3 ，微队列清空
    console.log(3);
});
// 3.console.log(4) [同步的代码]
console.log(4);

