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

