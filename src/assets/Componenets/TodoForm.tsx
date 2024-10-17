import React, { useState } from 'react'
import { useTodo } from '../Context/TodoContext'

const TodoForm = () => {
    const [Todo, setTodo] = useState("")
    const {addTodo} = useTodo()


    const add = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        addTodo({id:Date.now(), text : Todo  , completed : false})
      setTodo("")
    }


  return (
    <div >
        <form className='flex justify-center'  onSubmit={add}>
      <input type="text" className='bg-slate-600 font-semibold text-lg text-slate-300 p-2 outline-none rounded-l-md w-[60vw] ' placeholder='Write Todo...' value={Todo} onChange={(e)=>setTodo(e.target.value)} />
      <button type='submit' className='bg-green-500 p-2 rounded-r-md  text-gray-200 font-semibold'>Add</button>
      </form>
    </div>
  )
}

export default TodoForm
