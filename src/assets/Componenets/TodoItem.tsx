import { useContext, useState } from 'react'
import { Todo, TodoContext } from '../Context/TodoContext'


const TodoItem = (props:Todo) => {
  const {updateTodo , deleteTodo , toggleComplete } = useContext(TodoContext)

  const [TodoMsg, setTodoMsg] = useState(props.text)
  const [Editable, setEditable] = useState(false)


  const edit = ()=>{
    updateTodo(props.id , { ...props , text: TodoMsg })
    
  }
  


  return (

    <>
    
     <div className={`shadow-lg flex justify-between ${props.completed? "bg-[#ccbed7] line-through" : "bg-[#768ca7]"}  mx-auto p-3 w-[68.9vw] sm:w-[67vw] md:w-[65vw] lg:w-[64vw] rounded-md my-4`}>

      <div className='flex gap-3 ' >
        <input defaultChecked={props.completed} type="checkbox" id={`${props.id}`}  className='w-3 cursor-pointer' onClick={()=>{toggleComplete(props.id)}}/>
        
      {       Editable?
      
      <input type='text' className='px-2 bg-transparent text-xl  shadow shadow-sky-800 outline-none font-medium  ' autoFocus value={TodoMsg} onChange={(e)=>{setTodoMsg(e.target.value)}} /> 
    :  
      
      <label htmlFor={`${props.id}`} className='text-2xl font-medium cursor-pointer' >{props.text}</label>
}
     
      </div>
       <div className='flex gap-3'> 
       <button className={`${props.completed? "cursor-not-allowed" : "cursor-pointer hover:bg-slate-500 active:bg-slate-600 transition-all font-semibold"} bg-[#d1d7df] p-1 rounded-md `}
       onClick={()=>{
        setEditable((prev)=>!prev)
        if(Editable){
          edit()
        }
        }}
       >{Editable? "Save" : "Edit"}
         </button>
       <button className=' p-1 active:bg-red-600 hover:bg-red-700 bg-red-500 transition-all rounded-md font-semibold ' onClick={()=>{
        deleteTodo(props.id)
       }}>Delete</button>
       </div>
     </div>
     </>
   
  )
}

export default TodoItem
