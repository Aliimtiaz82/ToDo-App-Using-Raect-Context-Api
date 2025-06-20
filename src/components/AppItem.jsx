import { TodoItem } from "./TodoItem";
import {todoContext} from '../store/todo-item-store'
import { useContext } from "react";


export function AppItem ({ delBtn }){

    const todoItems = useContext(todoContext)

    return (
        <>
        {todoItems.map((items) =>(
            <>
            <TodoItem ItemName ={items.name} ItemDate ={items.duedate} delBtn={delBtn} ></TodoItem>
            <hr/>
            </>
        ))}
        </>
    )
}