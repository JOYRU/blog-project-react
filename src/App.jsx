import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Card from './components/Card'
import Data from './data.json'
import products from "./assets/products/camera.jpg" ;
import STATE from './STATE.jsx'
import Form from './components/Form.jsx'

function App() {
//   // let items = [] ; 
//   // items = Data.map((item) => <Card  cardTitle={item.title} cardDesc={item.desc} cardCover={item.cover} />
  
// ) ; 
  // for(let x = 0 ; x<Data.length ; x++){
  //   items.push(<Card cardTitle={Data[x].title}  cardDesc={Data[x].desc}/>)
  // }
  return <div>
            {/* <h1 className='headingStyle'>Todo App</h1> */}
            {/* <Card cardTitle={Data[0].title} cardDesc={Data[0].desc} />
            <Card cardTitle={Data[1].title} cardDesc={Data[1].desc} />
            <Card cardTitle={Data[2].title} cardDesc={Data[2].desc} />
            <Card cardTitle={Data[3].title} cardDesc={Data[3].desc} /> */}
            {/* {items} */}

            <Form />
            <h3>Counter App</h3> 

            
             <STATE count="0" />

          
    
           </div>
}

export default App
