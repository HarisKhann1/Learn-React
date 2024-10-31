import { useState } from "react"


function App() {
  const [color, setColor] = useState('black');
  
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed bottom-12 inset-x-0 flex justify-center">
        <div className="flex flex-wrap justify-center items-center bg-white gap-4 p-4 rounded-full">
          <button
          onClick={() => setColor('red')} 
          className="px-6 py-2 rounded-full text-white text-lg shadow-md"
          style={{backgroundColor: 'red'}}>
            Red
          </button>
          <button 
          onClick={() => setColor('green')} 
          className="px-6 py-2 rounded-full text-white text-lg shadow-md"
          style={{backgroundColor: 'green'}}>
            Green
          </button>
          <button 
          onClick={() => setColor('blue')} 
          className="px-6 py-2 rounded-full text-white text-lg shadow-md"
          style={{backgroundColor: 'blue'}}>
            Blue
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
