import {todoContext} from '../store/todo-item-store'
import { useContext } from "react";

export function WelcomeMsg() {

     const todoItems = useContext(todoContext)
    return(
        <>
        {todoItems.length === 0 && <div className="row justify-content-center">
        <h1 className="text-center text-warning bg-dark  p-3 rounded w-50 ">Enjoy Your Day! </h1>
        </div>}
        </>
    )
}