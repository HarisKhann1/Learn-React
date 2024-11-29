import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({
    isAuth: false,
    username: 'Guest',
    login: () => {},
    logout: () => {}
})

export const AuthContextProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false)
        const [username, setUsername] = useState('Guest')

        function login(username, password) {
            
            if (username && password) {
                setUsername({username,password})
                setIsAuth(true)
            }else{
                console.error('Wrong credentials!')
            }
        }

        function logout() {
            setIsAuth(false)
        }
        
        return (
            <AuthContext.Provider value={{isAuth, username, login, logout}}>
                {children}
            </AuthContext.Provider>
        )
}

export const useAuth = () => {
    return useContext(AuthContext)
}
