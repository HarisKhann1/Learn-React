import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [specialCharacter, setSpecialCharacter] = useState(false);
  const [password, setPassword] = useState('');
  // useRef hook
  const passwordRef = useRef(null);
  // generating password, useCallback for memoization of pass changed
  // in state will re-momize the instance if not the cached instance will
  // be rendered 
  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numbers) str += '0123456789'
    if (specialCharacter) str += '!@#$%^&*()_+={}[]'

    for (let i = 0; i < length; i++) {
       const char = (Math.random() * str.length + 1)
       pass += str.charAt(char);
    }
    // after the generation of pass, pass is set
    setPassword(pass);

  }, [length, numbers, specialCharacter, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // const rangedPass = password.substring(1, 5);
    // passwordRef.current?.setSelectionRange(1, 5)
    // window.navigator.clipboard.writeText(rangedPass)
    window.navigator.clipboard.writeText(password)

  }, [password]);
  // change in given dependencies will trigger the hook to call the function
  useEffect(() => {
    passwordGenerator();
  }, [length, numbers, specialCharacter, passwordGenerator])
  
  return (
    <>
    <div 
    className='mt-20 max-w-lg mx-auto shadow-md rounded-lg px-4 py-6
    text-orange-500 bg-gray-700'
    >
      {/* <button onClick={passwordGenerator}>click me</button> */}
      <h1 className='text-3xl font-medium mb-4'>Password Generator</h1>
      <div className='flex shadow overflow-hidden mb-4'>
        <input 
        type="text"
        ref={passwordRef} 
        value={password} 
        placeholder='Password' 
        readOnly
        className='text-xl font-medium w-full px-5 py-3 outline-none rounded-l-lg' />
        <button
        onClick={copyPasswordToClipboard}
        className='bg-orange-600 hover:bg-orange-900 text-white px-4 rounded-r-lg'
        >Copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={82}
          value={length} 
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
          />
          <label>length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          id="numberInput"
          defaultChecked={numbers}
          onChange={() => setNumbers((prev) => !prev)}
          />
          <label>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          id="specialCharacter"
          defaultChecked={specialCharacter}
          onChange={() => setSpecialCharacter((prev) => !prev)}
          />
          <label>Special Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
