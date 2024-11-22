import React from 'react'
import { useLoaderData } from 'react-router-dom'
export function GithubAPI(props) {
    
    const user = useLoaderData();
    return (
        <>
            <div className='bg-slate-500 flex items-center justify-center'>
                <div>
                    <h1 className='text-2xl text-orange-500'>Username: {user.name} followers: {user.followers}</h1>
                    <img src={user.avatar_url} alt="github profile pic" width={220}/>
                </div>
            </div>
        </>
    )
}


export const gihubInfoLoader =async () => {
    const response = await fetch('https://api.github.com/users/hariskhann1')
    return response.json()
}
