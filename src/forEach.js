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
Array.prototype._filter = function (callback, thisArg) {
    let result = []
    for (let i = 0; i < this.length; i++) {
        // console.log(thisArg,this[i], i, this);
        if (callback.bind(thisArg)(this[i], i, this)) {
            result.push(this[i])
        }
    }
    return result
}

let a  = [-1,9,4,3,2,-12,0]
console.log(a._filter(c=>c>=0))
