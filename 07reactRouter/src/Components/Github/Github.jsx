import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export function Github(props) {
    const user = useLoaderData();
    // const [user, setUser] = useState([])
    // useEffect(() => {
     
    //     fetch('https://api.github.com/users/hariskhann1')
    //     .then((response) => response.json())
    //     .then((data) => {setUser(data)
    //          console.log(data)}
    //     )
            
    // }, [])

    return (
        <>
            <div className='bg-gray-600 text-white p-4 flex flex-col'>
                <h2 className='text-center text-2xl text-orange-400'>Github User: {user.name} followers: {user.followers}</h2>
                <img className='rounded-full' src={user.avatar_url} alt="github profile pic" width={220} />
            </div>
        </>
    )
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hariskhann1')
    return response.json()
}
