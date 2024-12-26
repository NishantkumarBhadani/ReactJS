import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './Contexts'
import { useEffect } from 'react'
import {TodoForm,TodoItem} from './Components'

function App() {
 
const [todos,setTodos]=useState([]);

const addTodo=(todo)=>{
  setTodos((oldTodos)=>[{id:Date.now(),...todo},...oldTodos])
}

const updateTodo=(id,todo)=>{
  setTodos((oldTodos)=>oldTodos.map((oldTodo)=>(oldTodo.id===id ? todo:oldTodo)))
}

const deleteTodo=(id)=>{
  setTodos((oldTodos)=>oldTodos.filter((oldTodo)=>(oldTodo.id!==id)))
}

const toggleComplete=(id)=>{
  setTodos((oldTodos)=>oldTodos.map((oldTodo)=>oldTodo.id===id ? {...oldTodo,completed:!oldTodo.completed}:oldTodo))
}

useEffect(()=>{
  const todos=JSON.parse(localStorage.getItem("keyy"))

  if(todos && todos.length>0){
    setTodos(todos);
  }
},[])

useEffect(()=>{
    localStorage.setItem("keyy",JSON.stringify(todos))
},[todos])


return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}} >
        <div className="bg-[#172842] min-h-screen py-8">
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
            <TodoForm/>
        </div>
        <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {
              todos.map((todo)=>(
                <div key={todo.id}
                className='w-full'>
                    <TodoItem todo={todo}/>
                </div>
              ))
            }
        </div>
    </div>
</div>
    </TodoProvider>
    
  )
}

export default App