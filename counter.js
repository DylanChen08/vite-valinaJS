export function setupCounter(element) {
    let counter = 0
    const setCounter = (count) => {
        counter = count
        element.innerHTML = `count is ${counter}`
    }
    element.addEventListener('click', () => setCounter(counter + 1))
    setCounter(0)
}


// const arr = [3, 3, {a: 1}, {a: 1}, [3,4,5], [3,4,5], 'a', 'a']


// function de(params) {
//   const set = new Set()
//   params.filter((item,index)=>{
//     if(typeof item ==='object'&& item!=null){
//       // set.add(JSON.stringify(item))
//       item = JSON.stringify(item)
//     }
//     if (set.has(item)) return false
//     set.add(item)
//     return true
//   })
// }

// console.log(de(arr));
// let aa =  '1'
// console.log(aa);


// let map = new WeakMap()
// let o2 = ()=>{}
// map.set({a:1},[1,23,3])
// map.set(o2, "azerty");
// // map.set({a:2},[11,11,13])
// console.log(typeof map)
// console.log(map.has(o2));


//循环引用
// let obj = {a: 1, b: {c: 2}, d: [1, 2, 3]}
// obj.e = obj

// function deepCopy(objOrArr) {
//   let map = new WeakMap()
//   let ret = Array.isArray(objOrArr) ? [] : {}
//   map.set(objOrArr, ret)
//   for(let key in objOrArr) {
//     // console.log('objOrArr[key]',objOrArr[key])
//     if(map.has(objOrArr[key])) {
//       ret[key] = map.get(objOrArr[key])
//     } else if(typeof objOrArr[key] !== 'object' || objOrArr[key] === null) {
//       ret[key] = objOrArr[key]
//     } else {
//       ret[key] = deepCopy(objOrArr[key])
//       map.set(objOrArr[key], ret[key])
//     }
//   }
//   return ret
// }
// let obj2 = deepCopy(obj)
// console.log(obj2)

// const a =


// 对于一个函数，如何深拷贝
// function deepCopyFunction(fn) {
//   return fn.bind(null)
// }
//
// function sum(a, b) {
//   return a + b
// }
// let sum2 = deepCopyFunction(sum)
// console.log( sum2(3, 4) )
//
// sum2.prototype =  function clear (params) {
//   console.log('clear')
// }
// console.log(sum2)


// function trim(str) {
//   return str.replace(/(^\s+)|(\s+$)/g, '')
// }
// // let str = '\n \t jirengu  \t'
// let str = '  woa'
// console.log( trim(str) )


// function sum(a, b, c, d) {
//   return a + b + c + d
// }


// function curry(fn) {
//   console.log(fn.length);
//   const args  =  []
//   return function (...rest) {
//     console.log('rest',rest)
//     args = args.concat(rest)
//   }
// }


// sum(1,2,3,4)
// let newSum  = curry(sum)
// // newSum(1)(2)(3,4)(5)
// newSum(1,2,3,4)


// function curry(fn) {
//   console.log(fn.length)
//   let args = []
//   return function _curry(...rest) {
//     args = args.concat(rest)
//     if (args.length < fn.length) {
//       console.log(args.length, fn.length);
//       console.log('_curry', _curry)
//       return _curry
//     } else {
//       console.log('fn(...args)', fn(...args))
//       return fn(...args)
//     }
//   }
// }

// function sum(a, b, c, d) {
//   return a + b + c + d
// }

// sum(1, 2, 3, 4)
// let newsum = curry(sum)
// console.log(newsum(1)(2)(3)(6))

// function getUrl(domain, query) {
//   return 'https://' + domain + '?' + query
// }

// console.log( curry(getUrl)('jirengu.com')('query=vue') )
// console.log( curry(getUrl)('jirengu.com')('query=vue2') )


// class EventBus {
//   events = new Map()
//
//   on(eventType, handler) {
//     //this.events.get(eventType)已经是 new Set() ，往Set 里面加入 handler
//     //set 性能比数组好，因为 Set 无次序
//     if (!this.events.has(eventType)) {
//       //如果eventType里面不含有events的类型，那么我们就在map里面新增一个 Set()
//       this.events.set(eventType, new Set())
//     }
//     handler.type = 'on'
//     //如果eventType里面含有events的类型，那么我们就在map里面添加
//     this.events.get(eventType).add(handler)
//
//   }
//   emit(eventType, data) {
//     if (this.events.has(eventType)) {
//       // 遍历eventType里面的handler
//       this.events.get(eventType).forEach(handler => {
//         // console.log(handler)
//         handler(data)
//
//         if (handler.type === 'once') {
//           this.events.get(eventType).delete(handler)
//
//         }
//       })
//     }
//   }
//
//   off(eventType, handler) {
//     if (this.events.has(eventType)) {
//       // 如果不存在这个handler,则直接清除events里面该类型。
//       if (!handler) {
//         console.log(this.events, 'this.events')
//         this.events.delete(eventType)
//       } else {
//         // set里面删除
//         this.events.get(eventType).delete(handler)
//       }
//     }
//   }
//
//   once(eventType, handler) {
//     if(!this.events.has(eventType)){
//       this.events.set(eventType, new Set())
//     }
//     handler.type = 'once'
//     this.events.get(eventType).add(handler)
//   }
//
//
//
// }
//
// const bus = new EventBus()
// console.log(bus)
// bus.on('click', (data) => {
//   console.log('clicked, data: ', data)
// })
// bus.on('click', (data) => {
//   console.log('clicked2, data: ', data)
// })
//
// bus.emit('click', { a: 1 })
// bus.emit('click', { a: 2 })
//
// bus.once('hello', (data) => {
//   console.log('say hello, data: ', data)
// })
//
// bus.emit('hello', 'dcwonderland')
// bus.emit('hello', 'frontend')
//
// bus.off('click')
// bus.emit('click', {a: 1})


//instanceOf

// say() 先从自身properties去寻找 找不到的话从自己的原型上去找 再找不到从原型链去找

// 判断 c.__proto__ === Cat.prototype?是实例:否


// function myinstanceof(instance, func) {
//   let __proto__ = Object.getPrototypeOf(instance)
//   while(__proto__) {
//     debugger
//     if(__proto__ === func.prototype) {
//       return true
//     } else {
//       __proto__ = Object.getPrototypeOf(__proto__)
//     }
//   }
//   return false
// }
//
// function Cat() {}
// let c = new Cat()
// console.log(myinstanceof(c, Cat))


//手写一个instanceof
// function myinstanceof(instance, func) {
//     let __proto__ = instance.__proto__
//     while (__proto__) {
//         if (__proto__ === func.prototype) {
//             //循环判断，一直找到func的原型构造,如果存在就返回true
//             return true
//         } else {
//             //否则就把当前实例的原型构造返回去
//             __proto__ = __proto__.__proto__
//         }
//     }
//
//
//     return instance.__proto__ === func.prototype
// }
//
// function Cat() {
// }
//
// let c = new Cat()
// console.log(myinstanceof(c, Object))


// function Cat(name) {
//     this.name = name
//
//     //需要注意的是，如果函数里面有 return {}  或 return []
//     //则函数被 new 后返回的就不是name 了 , 而是返回 {} 或者 []
// }

// function myNew(func, ...rest) {
//     // 这里不能直接用 let obj = {} , 会导致 obj 找不到 func.prototype 的 prototype(原型)
//     let obj = Object.create(func.prototype)
//     func.apply(obj, rest)
//     return obj
// }
//
// function mynew(func, ...rest) {
//     let obj = Object.create(func.prototype)
//     let ret = func.apply(obj, rest)
//     if((typeof ret === 'object' && ret!== null) || typeof ret === 'function') {
//         return ret
//     } else {
//         return obj
//     }
// }
//
// Cat.prototype.sayName = function () {
//     console.log(`My name is ${this.name}`)
// }
//
// const c = new Cat('x')
// c.sayName()
//
// // let c1 = new Cat('huahua')
// // c1.sayName()
//
// let c2 = mynew(Cat, 'wangcai')
// console.log(c2)
