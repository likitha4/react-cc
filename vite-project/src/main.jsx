import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {jsx as _jsx} from "react/jsx-runtime.js"
import Chai from './Chai.jsx'

const anotherElement=(
  <a href="https://google.com" target='_blank'>visit google</a>
)
const ReactElement=React.createElement(
  'a',
  {href:'https://instagram.com', target:'_blank'},
  'click to visit instagram',
  anotherElement
)

// const reactElement={
//   type:'a',
//   props:{
//       href: 'https://google.com',
//       target :'_blank'
//   },
//   children:'Click me to visit google'
// }

ReactDOM.createRoot(document.getElementById('root')).render(
    // ReactElement
    // anotherElement
    // ReactElement
    // <App>
      ReactElement
    // </App>
)
