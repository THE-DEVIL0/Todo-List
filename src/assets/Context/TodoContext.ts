import { createContext, useContext } from "react";

 export type Todo = {
    id : number,
    text : string,
    completed : boolean
}

type contextType = {
    todos : Todo[],
    addTodo : (todo : Todo)=>void,
    updateTodo : (id : number , todo : Todo) =>void,
    deleteTodo : (id : number) =>void,
    toggleComplete : (id : number) =>void
}

export const TodoContext = createContext({} as contextType)

export const useTodo = () => {
    return useContext(TodoContext)
}


export const TodoProvider =TodoContext.Provider

