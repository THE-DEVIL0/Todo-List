import  { useEffect, useState } from 'react'

import { Todo, TodoProvider } from './assets/Context/TodoContext'
import TodoForm from './assets/Componenets/TodoForm'
import TodoItem from './assets/Componenets/TodoItem'

const App = () => {

const [todos, setTodos] = useState([]as Todo[])

useEffect(() => {

  const todos =  JSON.parse(localStorage.getItem("todos")!)

  if(todos && todos.length > 0){
    setTodos(todos)
  }

}, [])

useEffect(() => {
 localStorage.setItem("todos" , JSON.stringify(todos))
}, [todos])






const addTodo = (todo : Todo)=>{
  setTodos((prev)=>[{...todo} , ...prev ])
}
const updateTodo = (id : number ,todo : Todo)=>{
  setTodos(
    (prev)=>prev.map((prevTodo)=>(prevTodo.id===id) ? todo : prevTodo)
    )
}
const deleteTodo = (id: number)=>{
  setTodos(
    (prev)=> prev.filter((todo)=>todo.id!== id)  
    )
}

const toggleComplete = (id : number)=>{
    setTodos(
      (prev)=> prev.map(
        (prevTodo)=>prevTodo.id=== id ?{...prevTodo , completed: !prevTodo.completed}  : prevTodo )
    )
}



  return (
    <TodoProvider value={{todos , addTodo , updateTodo , deleteTodo , toggleComplete}}>
    <div className='min-h-screen  bg-slate-800'>
      <h1 className='text-gray-200 text-2xl font-bold text-center p-14'>Manage your Todos</h1>
      <TodoForm/>
      <div>
      {todos.map((todo)=>(<TodoItem {...todo} />) ) }
      </div>


    </div>
    </TodoProvider>
  )
}

export default App
