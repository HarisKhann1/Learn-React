import { useState } from 'react'
import './App.css'
import { TodoForm } from './Components/TodoForm'
import { TodoContextProvider } from './contexts/context'
import { TodoDisplay } from './Components/TodoDisplay'
import { useEffect } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  
  function addTodo(todo) {
    setTodos((prevTodos) => [{id: Date.now(), ...todo}, ... prevTodos])
  }
  
  function updateTodo({id, message}) {
    console.log('id', id);
    console.log('message', message);
    
    if (message) {
      setTodos((prevTodos) => 
        prevTodos.map((todo) => todo.id === id ? { ...todo, message: message } : todo)
      );
    }else{
      prompt('Input cant be empty!')
    }
  }

  function deleteTodo(id) {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id
    )});
  }


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))    
  }, [todos])

  return (
    <TodoContextProvider value={{todos, addTodo, updateTodo, deleteTodo}}>
      <div className='flex flex-col items-center justify-center gap-8'>
      <h1 className='text-orange-500 font-medium text-3xl mt-4'>
        Todo using context api and local storage
      </h1>
      <TodoForm />
      {todos.map((todo) => (
        <TodoDisplay key={todo.id} todo={todo} />
      ))}
      </div>
    </TodoContextProvider>
  )
}

export default App
