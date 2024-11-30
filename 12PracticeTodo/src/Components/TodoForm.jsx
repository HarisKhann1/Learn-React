import React from 'react'
import { useState } from 'react';
import { useTodo } from '../contexts/context';
export function TodoForm(props) {
    const [message, setMessage] = useState('')
    const {addTodo} = useTodo()
    
    function handleSubmit(e) {
        e.preventDefault()
        if (message) {
            addTodo({message: message, completed: false})
        }else{
            prompt('Input cant be empty!')
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='w-1/4'>
                <input
                type="text"
                className='px-4 py-2 text-black border-none focus:outline-none rounded-s-2xl'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit"
                className='p-2 bg-orange-500 rounded-e-2xl'
                >
                    Add
                </button>
            </form>
        </>
    )
}
