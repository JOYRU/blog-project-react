import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />

//     <h1>
//       Hello
//     </h1>
//   </React.StrictMode>,
// )
const todo = "Todo Aoopp" ; 
const date = new Date()  ; 
const currentYear = date.getFullYear() ; 
ReactDOM.render(
  <div>
    <h1 className='headingStyle'>{todo}</h1>
    <div className='card'>
         <h3 className='cardTitle'>Call Family</h3>
         <p className='cardDesc'>Hey, Please Call to everyone</p>
         {/* <p className='cardFooter'>{date}</p> */}
    </div>
  </div>
   , 
document.getElementById('root')

) ; 
