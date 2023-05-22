export const pr = () => {

}

// console.log('promise')


function ajax(url = '', method = 'GET', data = {}) {
    return new Promise((resolve, reject) => {
        let options = {method}
        if (method === 'GET') {
            url += '?' + Object.entries(data).map(arr => arr[0] + '=' + arr[1]).join('&')
        } else if (method === 'POST') {
            options.body = JSON.stringify(data)
            options.headers = {'Content-Type': 'application/json'}
        }
        fetch(url, options).then(res => res.json())
            .then(data => resolve(data))
            .catch(e => reject(e))
    })
}

ajax('https://localhost:8080', "GET", '{name:1,id:1,content:1}').then(r => {
    console.log(r)
})
