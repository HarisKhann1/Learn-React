import React, { useState } from 'react'
import { useAuth } from '../Contexts/context'
import { Dashboard } from './Dashboard'

export function Login({isAuth}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {login} = useAuth()
    
    function addUser(e) {
        e.preventDefault()
        // add login functionality
        login(username,password)        
    }
    

    return (
        <> 
            <div className='flex items-center justify-center mt-10 flex-col'>  
                <p className='text-orange-500 font-medium text-3xl'>{isAuth ?  '': 'Please Login'}</p>
                <br />
                <form onSubmit={addUser} className='flex flex-row gap-3 text-black'>
                    <input type="text"
                    placeholder='Enter your name'
                    className='p-3 rounded'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                    <input type="password"
                    placeholder='Enter your Password'
                    className='p-3 rounded'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit"
                    className='p-3 bg-orange-500 rounded'
                    >Login</button>
                </form>
            </div>
        </>
    )
}
