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
// setTimeout(() => console.log(1), 0);
// new Promise(resolve => {
//     resolve();
//     console.log(2);
// }).then(() => {
//     console.log(3);
// });
// console.log(4);

// 0. 给函数命名，f1,f2,f3便于分析

//1.执行同步的代码，创建一个定时器，timeout：0 表示立刻将f1加入宏队列【f1】
// setTimeout(function f1 ()  {
//     //5. 拿出宏队列f1，输出1
//     console.log(1)
// }, 0);
//
// //2.创建一个promise对象[同步代码]，resolve的时候立刻会将f3加入微队列【f3】,并且在resolve之后输出 2 ,此时宏队列[f1]，微队列[f3]，输出2
// new Promise(function f2 (resolve)  {
//     resolve(); //同步
//     console.log(2);//同步
// }).then(function f3()  {
//     // 4.扫描微队列[f3]拿出来，执行输出 3 ，微队列清空
//     console.log(3);
// });
// // 3.console.log(4) [同步的代码]
// console.log(4);

// 1 .3 .2 4 5 ? (自己做的)
// 1 5 3 2 4 (控制台输出) 同步代码先输出
//宏任务、微任务案例2
// new Promise(function f1(resolve){
//     console.log(1);  // 1.
//     setTimeout(function f2() {
//         console.log(2);   //宏队列[f2]
//     });
//     resolve(1);
// }).then(function f3(res) {
//     console.log(3);      //微队列[f3]
// })
//
// setTimeout(function f4() {
//     console.log(4);  //宏队列[f2 f4]
// })
//
// console.log(5); //? 同步代码先输出

// // 难度三颗星
// setTimeout(function f1() {
//     console.log(1)    //1. 创建定时器，立即把f1加入宏队列。此时宏队列【f1】，微队列【】；
// })
// // sync-code:同步代码
// new Promise(function f2(resolve) {
//     // 2. f2里面是同步代码 会执行f2 【输出 2】  并且立刻resolve
//     resolve()  //sync-code:同步代码
//     console.log(2) //sync-code:同步代码
//     // 3. 执行resolve之后会把f3也就是加入了微队列 此时宏队列【f1】，微队列【f3】
//     // 3.1 Q:f3要不要执行? A:还没有轮到它执行，因为下面的同步代码还没执行完毕。
// }).then(function f3() {
//     console.log(3)
//     // 5. 相当于创建一个promise对象并且立刻resolve，也相当于创建一个fullFill状态的promise对象
//     Promise.resolve().then(function f4() {
//         //5.1 当一个promise对象处于fufill状态的时候，会立即将fn加入微队列。由于刚才执行了f3 {输出3}，所以现在的微队列是空的
//         // 5.2 Promise.resolve().then(f4） 立即把f4加入微队列，现在的 宏队列【f1】微队列 【f4】 f4即将执行
//         // 5.3 拿出f4执行，{输出4}。  f4执行完城后当前状态fullfill，触发f5加入微队列
//         console.log(4)
//     }).then(function f5() {
//         // 5.4   现在的 宏队列【f1】微队列 【f5】 f5即将执行
//         Promise.resolve().then(function f6() {
//             // 5.5  f5执行完城后当前状态fullfill，触发f6加入微队列
//             // 5.6   现在的 宏队列【f1】微队列 【f6】 f6即将执行 {输出6}
//             console.log(5)
//             // 5.7  微队列为空
//         })
//     })
//     //6.0 扫描宏队列，拿出f1执行，输出1
// })
// // 4. 同步代码执行，输出6，此时同步代码执行完毕，下一步再扫描微队列依次运行并清空全部任务、扫描宏队列依次运行并清空全部任务
// console.log(6)

//1 6 2 3 4 5
// 宏[f1] 微[]
// 宏[] 微[]
// 宏[f3] 微[f2]  f2执行完毕导致当前promise fufill,触发f4加入微队列,此时注意，还没轮到f3，下一步任然是释放微队列
// 宏[f3] 微[]  f2执行完毕导致当前promise fufill,触发f4加入微队列,此时注意，还没轮到f3，下一步任然是释放微队列
// 宏[f3] 微[f4]
// 宏[] 微[]
// console.log(1)
// setTimeout(function f1(){
//   console.log(2)
//   Promise.resolve().then(function f2() {
//       console.log(3)
//       setTimeout(function f3() {
//         console.log(4)
//       })
//   }).then(function f4() {
//       console.log(5)
//   })
// }, 0)
// console.log(6)


//  2 5 6 3 4
// hong[f3] wei[f4,f5]
//扫描宏队列，拿出一个执行f3。因innerpro已经处于fulfilled状态resolve(1)无效。
// const pro = new Promise(function f1(resolve) {
//   const innerpro = new Promise(function f2(resolve) {
//     setTimeout(function f3(){
//       resolve(1);
//     }, 0);
//     console.log(2);
//     resolve(3); //导致.then加入薇队列
//   });
//   innerpro.then(function f4(res) {console.log(res)} );
//   resolve(4);
//   console.log(5);
// })
// pro.then(function f5(res) { console.log(res) });
// console.log(6);


// hong
// wei     [f6]
// output ['script start',]

// async function async1() {
//   console.log('async1 start'); //相当于new promise里面的同步的代码
//   await async2();             //相当于 .then()里面的同步的代码  相当于等待一个新的promise 当他resolve之后触发后面的代码
//   console.log('async1 end'); // f6 相当图 async2 .then里面的代码
// }
// async function async2() {
//   console.log('async2 start');
//   return new Promise(function f1(resolve, reject)  {
//     resolve(); //resolve之后触发了569行的await async2()运行
//     console.log('async2 promise');
//   })
// }
// console.log('script start');
// setTimeout(function() {
//   console.log('setTimeout');
// }, 0);
// async1(); //运行async1本质上相当于创建promise对象
// new Promise(function f3(resolve) {
//   console.log('promise1');
//   resolve();
// }).then(function f4() {
//   console.log('promise2');
// }).then(function f5() {
//   console.log('promise3');
// });
// console.log('script end');

// 上面的写法有点难于分析，我们把它改造成 promise的写法，就能得到精准的结果

// async function async1(){
//   console.log(1)  //实际上是new Promise里面的同步的代码 ,返回一个promise对象
//   await 1    // resolve(1)
//   console.log(2)   // 相当于resolve里面.then()的结果
// }
// let p = async1()
// console.log(p)



// function async1() {
//   console.log(1)
//   return new Promise((resolve, reject) => {
//     resolve(1)
//   }).then(()=>{
//     console.log(`output->2`,2)
//   })
// }

// let p =  async1()
// console.log(`output->p`,p)


//更复杂一些
//code 3
// async function async2() {
//   console.log(2)
//   return 2 // 相当于return 了一个promise对象 return Promise.resolve(2)
// }

// async function async1(){
//   console.log(1)
//   await async2()   //相当于 .then()里面的同步的代码
//   console.log(3)  //由于async2是promise对象 所以可以改成 return async2().then(()=>console.log(3))
// }

// async1()


//所以结果是
//code 4
// function async2() {
//   console.log(2)
//   return Promise.resolve(2)
// }
// function async1() {
//   console.log(1)
//   return async2()
//     .then(() => console.log(3))
// }
// async1()

// macrotast microtask 终极地狱难度了

// code 8
// function async1() {
//   console.log('async1 start')
//   return new Promise(function f1(resolve) {    // 第3行，async 函数返回一个Promise对象，由async2()得到的Promise对象的resolve来触发自己的resovle
//     async2().then(function f2(v) { resolve(v) } )   //第4行
//   }).then(function f3() {              //第5行
//     console.log('async1 end')
//   })
// }

// function async2() {
//   console.log('async2 start')
//   return new Promise(function f4(resolve2) { // 第12行，返回一个新的Promise对象，由原来async函数里return的Promise对象的resovle来触发自己的resolve
//     new Promise(function f5(resolve, reject) {  // 第13行
//       resolve()
//       console.log('async2 promise')
//     }).then(function f6() {  resolve2() })   // 第16行
//   })
// }

// console.log('script start')
// setTimeout(function f7() {
//   console.log('setTimeout')
// }, 0)
// async1()
// new Promise(function f8(resolve) {     //第25行
//   console.log('promise1')
//   resolve()
// }).then(function f9() {
//   console.log('promise2')
// }).then(function f10() {
//   console.log('promise3')
// });
// console.log('script end')


// new Promise((resolve, reject) => {
//   let v = Math.random()
//   if(v > 0.5) {
//     resolve(v)
//   } else {
//     reject('less than 0.5')
//   }
// }).then(v => {
//   console.log(v)
// }, reason => {
//   console.error(reason)
// })


// let p = new Promise(resolve => resolve(1))
// p.then(v => console.log(v))
// p.then(v => console.log(v))


// const delayer = (t) => new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(t)
//   }, t)
// })


// delayer(1000).then(t => {
//   console.log(t)
//   return t + 1000    //返回普通值
// }).then(t => {
//   console.log(t)
//   console.log('end')
// })

// delayer(1000).then(t => {
//   console.log(t)
//   return delayer(2000)
// }).then(t => {
//   console.log(t)
//   console.log('end')
// })


// delayer(1000).then(t => {
//   console.log(t)
//   return Promise.resolve(2000)
// }).then(t => {
//   console.log(t)
//   console.log('end')
// })


// delayer(1000).then(t => {
//   console.log(t)
//   return {
//     then(resolvePromise, rejectPromise ) {
//       console.log('in then')
//       // resolvePromise(3000)
//       rejectPromise('eee')
//     }
//   }
// }).then(t => {
//   console.log(t)
//   console.log('end')
// }, e => {
//   console.error('error',e) 
// })




new Promise((resolve, reject) => {
  reject('error') // 创建一个Promise对象，并且立即调用reject方法，传入错误信息'error'
}).then(() => {
  console.log('ok 1') // 因为上一个Promise对象被拒绝了，所以这个then回调函数不会执行
}, (err) => {
  console.log('error 1: ' + err) // 打印出错误信息：'error'
}).then(() => {
  console.log('ok 2') // 上一个then回调函数没有返回值，所以这个then回调函数依然会执行
}, (err) => {
  console.log('error 2: ' + err) // 上一个then回调函数没有返回值，所以这个错误处理回调函数不会执行
}).catch(err => {
  console.log('catch 1: ' + err) // 上面的任何一个Promise对象被拒绝时都会执行该catch回调函数，打印出错误信息：'error'
})

