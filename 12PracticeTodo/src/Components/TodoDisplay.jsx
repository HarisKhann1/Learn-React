import React, { useState } from 'react'
import { useTodo } from '../contexts/context'

export function TodoDisplay({todo}) {
    const [toggle, setToggle] = useState(false)
    const [isEditable, setIsEditable] = useState(false)
    const [message, setMessage] = useState(todo.message)
    const {updateTodo, deleteTodo} = useTodo()

    const EditTodo = () => {
        if (isEditable) {
            updateTodo({ id: todo.id, message: message })
        }
        setIsEditable(!isEditable)
    }

    return (
        <>
            <div 
            className={`text-white flex flex-row gap-4 bg-cyan-600 p-3 rounded
            ${toggle ? 'bg-green-600' : 'bg-cyan-600'}
            `}
            key={todo.id}
            >
                {/* for todo completion */}
                <input
                    type="checkbox"
                    onClick={(e) => setToggle(e.target.checked)}
                />
                {/* for todo message */}
                <input 
                    type="text"
                    className={`text-black px-4 focus:outline-none ${toggle ? 'line-through' : ''}
                    ${isEditable ? 'border-b-2 border-white ' : 'bg-transparent'}
                    `}
                    value={message}
                    readOnly={!isEditable}
                    onChange={(e) => setMessage(e.target.value)}
                />
                {/* for todo edit */}
                <button
                onClick={EditTodo}
                disabled={toggle}
                >
                    {isEditable ? 'Save' : 'Edit'}
                </button>
                {/* for todo delete */}
                <button
                onClick={() => deleteTodo(todo.id)}
                >
                    Delete
                </button>
            </div>
        </>
    )
}
