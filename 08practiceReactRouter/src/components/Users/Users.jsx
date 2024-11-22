import React from 'react'
import { useParams } from 'react-router-dom'

export function Users(props) {
    
    const {userId} = useParams();
    return (
        <>
            <div className='bg-gray-500 flex items-center justify-center h-screen text-4xl'>You entered: {userId} </div>
        </>
    )
}

export default Users
