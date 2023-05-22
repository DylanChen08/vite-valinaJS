export function ff(params) {
}

// //挂载在Array原型链上
// Array.prototype._forEach = function (callback, thisArg) {
//     for (let i = 0; i < this.length; i++) {
//         //依次执行callback
//         //传递的参数与原生foreach一样
//         //thisArg 如果有传递那么就是传入实例，如果没有那就是window
//         callback.call(thisArg,this[i],i,this)
//     }
// }
//     let arr = [3, 4, 5]
//
//     arr._forEach(function (v, i, arr) {
//     console.log(v, i, arr)
//     console.log(this)
// }, {a: 1})


//挂载在Array原型链上
// Array.prototype._forEach = function (callback, thisArg) {
//     for (let i = 0; i < this.length; i++) {
//         //依次执行callback
//         //传递的参数与原生foreach一样
//         //thisArg 如果有传递那么就是传入实例，如果没有那就是window
//         callback.call(thisArg,this[i],i,this)
//     }
// }
//     let arr = [3, 4, 5]

//     arr._forEach(function (v, i, arr) {
//     console.log(v, i, arr)
//     console.log(this)
// }, {a: 1})


// filter
//


//reduce

// Array.prototype._reduce = function (callback,inintialValue) {
//     //如果传入的数组为空,抛出异常
//     if(this.length===0){
//         if(inintialValue!==undefined){
//             return inintialValue
//         }else{
//             throw new TypeError('Reduce of empty array wiht no initial value')
//         }
//     }
//     let previousValue
//     //处理没有初始值的情况
//     if(inintialValue===undefined){
//         previousValue =  this[0]
//     }else{
//         previousValue = callback(inintialValue,this[0])
//     }
//     for (let i = 0; i < array.length; i++) {
//         previousValue = callback(previousValue,this[i])
//     }
//     return previousValue
// }

// let a  = []

// console.log(a._filter(c=>c>=0))

// console.log(a._reduce((v1,v2)=>v1+v2,100))
// console.log(a._reduce((v1,v2)=>v1+v2,100))


// try {
//     // nonExistentFunction();
//     let a = 0
//     console.log(b)
//
//   } catch (error) {
//     // Object.keys(error).forEach(v=>{console.log(v)})
//     console.log(error?'true':'fa');
//     // Expected output: ReferenceError: nonExistentFunction is not defined
//     // (Note: the exact output may be browser-dependent)
//   }


//flat

// const myFlap = (arr, depth) => {
//     // 使用reduce
//     return arr.reduce((result, val) => {
//         //如果深度小于0，那么就停止拍平
//         if (depth <= 0) return arr
//         // 判断如果不是数组，则存起来
//         if (!Array.isArray(val)) {
//             // console.log('val',val)
//             // result.push(val)
//         } else {
//             //如果是数组，那就解构后与flat之后的值拼接起来。
//             console.log('f', ...result, ...myFlap(val))
//             result = [...result, ...myFlap(val, depth - 1)]
//         }
//         return result
//     }, [])
// }

// console.log(myFlap([3, 4, 5, ['a', 'b', [6, [7]]]],1))


// // 手写原型继承
// function Animal(name,age) {
//     this.name = name
//     this.age = age
// }
//
// Animal.prototype.walk = function () {
//     console.log(`${this.name} is walking`)
// }
//
// function Cat(name,age,color) {
//     // 1.通过父类.call获取父类的属性
//     Animal.call(this,name,age)
//     this.color = color
// }
//
// //原型链继承
// Cat.prototype  = Object.create(Animal.prototype)
//
// Cat.prototype.speak = function (params) {
//     console.log(`${this.name}is meowing`)
// }
// Cat.prototype.constructor = Cat
//
// let cat = new Cat('mimi',3,white)


//手写 Class - class其实是原型的语法糖


class Animal {
    // constructor其实是相当于 function Animal(name,age) {this.name = name this.age = age}
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    walk() {
        console.log(`${this.name} is walking`)
    }
}

class Cat extends Animal {
    constructor(name, age, color) {
        // 相当于
        //function Cat(name,age,color) {
        // //     // 1.通过父类.call获取父类的属性
        // //     Animal.call(this,name,age)
        // //     this.color = color
        // // }
        super(name, age)
        this.color = color
    }

    speak() {
        console.log(`${this.name} is meowing`)
    }
}

let cat = new Cat('mimi',3,'white')
cat.walk()
cat.speak()













