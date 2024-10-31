import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0);
  
  let myObj = {
    name: "Haris",
    age: 23
  }

  return (
    <>
      <h1 className='text-grey-600 bg-orange-400 rounded p-4'>Tailwind test</h1>
      <Card username='Sarah' btnText={'click me'}/>
      <Card username={'Marjan'} btnText={'read docs'}/> 
    </>
  )
}

export default App
