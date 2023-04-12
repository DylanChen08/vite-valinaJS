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
//     //todo
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

// function sum(a, b) {
//   return a + b
// }
// let sum2 = deepCopyFunction(sum)
// console.log( sum2(3, 4) )

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



class EventBus {
  on() { }

  once() { }

  off() { }

  emit() { }
}

const bus  = new EventBus()
console.log(bus);