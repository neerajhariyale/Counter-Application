import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15);

  let incrementValue = () => {
    setCounter(counter + 1);
  }
  let decrementValue = () => {
    setCounter(counter - 1);  
  }

  return (
    <>
      <h1>Counter Application </h1>
      <br/>

      <h2>Counter : {counter}</h2>
      <button onClick={incrementValue}>Increment </button>
      <br/>
      <br/>
      <button onClick={decrementValue}>Decrement </button>
    </>
  )
}

export default App
