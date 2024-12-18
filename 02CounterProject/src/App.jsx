import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter]=useState(0)
  // let counter=15;
  const addValue=()=>{
    setCounter(counter+1);
  }

  const removeValue=()=>{
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Nishant's Counter</h1>
      <h2>Counter Value: {counter}</h2>
   
      <button
      onClick={addValue}>Add Value</button>
      <br/>
      <button
      onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
