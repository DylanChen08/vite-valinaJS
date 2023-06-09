import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import { d } from './src/debounce.js'
import { ff } from './src/forEach.js'
import { pr } from './src/myPromise.js'
import { fulfilled } from './src/fullfill'

document.querySelector('#app').innerHTML = `
  <div style='height:10000px'>
    <a href="https://vitejs.dev" target="_blank">
      <img src="" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>✔️</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
d()
ff()
pr()
fulfilled()

// console.log(11111);
