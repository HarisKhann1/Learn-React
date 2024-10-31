import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);
  let [message, setMessage] = useState('');


  const addValue = () => {
    if (counter == 20) {
      setMessage(`Counter value: ${counter} - cannot go above 20`);
    }else{
      setMessage(``);
      setCounter(counter + 1);
    }
  }

  const removeValue = () => {
    if (counter == 0) {
      setMessage(`Counter value: ${counter} - cannot go below 0`);
    }else{
      setMessage(``);
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Chai aur Code</h1>
      <h2>Counter value: {counter}</h2>
      {message && <h2 style={{ color: 'red' }}>{message}</h2>}
      <button onClick={addValue} >Add value {counter}</button>
      <button onClick={removeValue} >Remove value {counter}</button>

    </>
  )
}

export default App
