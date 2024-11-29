import React from 'react'
import { useAuth } from '../Contexts/context'

export function Dashboard() {
    const {username,isAuth} = useAuth()

    return (
        <>
            <h1
            className='flex items-center justify-center mt-7'
            >{isAuth ? `Welcome: ${username.username}` : ''}</h1>
        </>
    )
}
