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



try {
    // nonExistentFunction();
    let a = 0 
    console.log(b)
   
  } catch (error) {
    // Object.keys(error).forEach(v=>{console.log(v)})
    console.log(error?'true':'fa');
    // Expected output: ReferenceError: nonExistentFunction is not defined
    // (Note: the exact output may be browser-dependent)
  }
  