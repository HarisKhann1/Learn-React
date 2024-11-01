import React from 'react'
import { useParams } from 'react-router-dom'

export function User(props) {
    const {userid} = useParams();

    return (
        <>
            <h1 
            className='bg-gray-600 text-3xl p-4 text-white'
            >User: {userid}</h1>
        </>
    )
}
