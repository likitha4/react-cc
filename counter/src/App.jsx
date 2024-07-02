import React,{ useState, useHook } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter, setCounter]= useState(0)
  // let counter=5

  const addValue=()=>{
    // console.log("Value added",Math.round(Math.random()*100));
    if(counter<20){
    counter=counter+1;
    setCounter(counter)
    console.log(counter);
    }
    else{
      setCounter(20)
    }
  }
  const removeValue=()=>{
    // counter=counter-1;
    if(counter>0)
    setCounter(counter-1)
  else
  setCounter(0)
  }


  return (
    <>
     <h1>Chai aur React</h1>
    <h2>Counter Value : {counter}</h2>
    <button onClick={addValue}>Add Value</button><br></br>
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
