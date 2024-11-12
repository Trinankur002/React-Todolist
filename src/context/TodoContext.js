import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todoMsg: "todo msg",
            todoCompleted: false
        }
    ],
    addTodo : (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}