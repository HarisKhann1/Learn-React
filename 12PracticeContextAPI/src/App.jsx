import './App.css'
import { Login } from './Components/Login'
import { AuthContextProvider, useAuth } from './Contexts/context'
import { Dashboard } from './Components/Dashboard'

function App() {

  return (
    <AuthContextProvider>
      <Login />
      <Dashboard />
    </AuthContextProvider>
  )
}

export default App
