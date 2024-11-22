import './App.css'
import Card from './Components/Card'
import ThemeBtn from './Components/ThemeBtn'
import { ThemeProvider } from './Contexts/theme'
import { useState, useEffect } from 'react'

function App() {
  const [themeMode, setThemeMode] = useState('light')

  const darkTheme = () => {
    setThemeMode('dark')
  }
  const lightTheme = () => {
    setThemeMode('light')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <h1 className='p-4 text-orange-500 font-medium text-3xl'>Theme Switcher</h1>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">              
            {/* theme buttons */}
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">  
            {/* cards */}
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
