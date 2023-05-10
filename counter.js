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


// function sum() {
//     // console.log(222)
//     return this.a + this.b
// }
//
// sum.call({a: 1, b: 2})

// sum.call({a: 1, b: 2})

// //实现一个call()
// Function.prototype.mycall = function (thisArg, ...args) {
//     //为了确保 thisArg 指向 this , 将thisArg增加一个属性__fn__，并将this赋值给他 。
//     // thisArg.__fn__ = this
//     // thisArg.__fn__(...args)
//     Object.prototype[symbol] = this
//     //这里使用symbol的原因是symbol的值是随机的，每个symbol都不一样
//     //可以通过 Symbol()  ===  Symbol() ==> false 来验证
//     let symbol = Symbol()
//     let ret = thisArg[symbol](...args)
//     // 这里为了美观,使用delete Object.prototype[symbol]
//     // 如果使用delete thisArg[symbol] 就会发现调用mycall() 的时候，
//     // 控制台会多出一个symbol ，明明调用的是传入{a:1}，却多出个symbol
//     delete Object.prototype[symbol]
//     return ret
// }
//
// function a(m, n) {
//     console.log(this)
//     console.log(m + n)
// }
//
// a.mycall({a: 1}, 3, 4)
// a.call({a: 1}, 3, 4)


//实现一个apply()
// 和call()原理一样 唯一不同的是apply()不用解构
// Function.prototype.myapply = function (thisArg, args) {
//     let symbol = Symbol()
//     Object.prototype[symbol] = this
//     let ret = thisArg[symbol](...args)
//     delete Object.prototype[symbol]
//     return ret
// }
//
// function a(m, n) {
//     console.log(this)
//     console.log(m + n)
// }
//
// a.myapply({b: 1}, [4, 5])


//用call或apply实现一个bind()

// let a =function () {
//
// }
//
// Function.prototype.mybind = function(thisArg, ...args) {
//     let fn = this
//     //
//     thisArg = thisArg||window
//     return function(...rest) {
//         //return fn.call(thisArg, ...[...args, ...rest])
//         return fn.apply(thisArg, [...args, ...rest])
//     }
// }
//
// let fn1 = a.bind({o:1})
// fn1(3,4)
//
// let fn2 = a.mybind({o: 1})
// fn2(5, 6)


//不用call或apply实现bind

// function a(m,n) {
//     console.log(this)
//     console.log(m+n)
// }


// Function.prototype.mybind2 = function (thisArg, ...args) {
//     let fn = this
//     // console.log('...args',...args)
//     thisArg = thisArg || window
//     return function (...rest) {
//         let symbol = Symbol()
//         Object.prototype[symbol] = fn
//         let ret = thisArg[symbol](...[...args, ...rest])
//         delete Object.prototype[symbol]
//         return ret
//     }
// }

// // let fn1 = a.bind('abc', 100)
// // fn1(3, 4)

// let fn2 = a.mybind2('abc', 100,101,102,1003)
// fn2(5, 6)


// function Cat(name) {
//     this.name = name
// }

// Cat.prototype.sayName = function () {
//     console.log(`my name is ${this.name}`)
// }


// let Cat2 = Cat.bind({name:'wangcai'})
// let Cat3 = new Cat2({name:'huahua'})
// console.log(Cat3)


//考虑new之后的mybind

Function.prototype.mybind = function (thisArg, ...args) {
    let fn = this
    //
    thisArg = thisArg || window

    const boundFn = function (...rest) {
        //使用Object.create 创建一个新的对象，使其挂载在Object 原型上面。
        let context = Object.create(fn.prototype)
        //如果是通过 new Function 执行的
        if (this instanceof boundFn) {
            //这里我们可以看到我们已经不管原来bind的this是什么了，直接apply context
            //通过这样来实现对于new之后的bind的特性———不管原来bind什么 。
            fn.apply(context, [...args, ...args])
            return context
        } else { //否则是通过类似a.bind的调用
            return fn.apply(thisArg, [...args, ...args])
        }
    }

    return function (...rest) {
        //return fn.call(thisArg, ...[...args, ...rest])
        return fn.apply(thisArg, [...args, ...rest])
    }
}

function Cat(name) {
    this.name = name
  }
  
  Cat.prototype.sayName = function() {
    console.log(`my name is ${this.name}`)
  }
  
  let Cat2 = Cat.mybind({name: 'wangcai'})
  let c2 = new Cat2('huahua')
  console.log(c2)
  
  let Cat3 = Cat.bind({name: 'wangcai'})
  let c3 = new Cat3('huahua')
  console.log(c3)
