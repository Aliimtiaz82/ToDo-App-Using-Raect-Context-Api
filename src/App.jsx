import { AppName } from "./components/AppName";
import { AddToDo } from "./components/AddToDo";
import { AppItem } from "./components/AppItem";
import { WelcomeMsg } from "./components/WelcomeMsg";
import { ClearAllBtn } from "./components/ClearAllBtn";
import { useState } from "react";
import {todoContext} from './store/todo-item-store';


function App() {

  let [todoItems  , setToDoItems] = useState([
    
  ])

//By passing method in as an argument is (Functional update)
// better way then ...SpreadOperator  to get the previous value 
let addbtnClick = (itemName ,  itemDate) =>{  
  setToDoItems((currValue) => [...currValue , {name : itemName , duedate :  itemDate}])
}

let clearDispaly =() =>{
  setToDoItems([]);
}


let delBtn = (ItemName)=>{
  const newToDoItems = todoItems.filter((item => item.name !== ItemName));
  setToDoItems(newToDoItems);
}

// let defaultToDo = [{name : 'buy ghee' , date : "12-05-2024"}]
  return (
    <todoContext.Provider value ={todoItems}>
    <div className="container">
        <div className="card rounded mt-3 bg-light">
          <div className="card-head text-warning bg-dark p-3 rounded text-center">
           <AppName></AppName>
          </div>
          <div className="card-body">
           <AddToDo addbtnClick ={addbtnClick}></AddToDo><hr></hr>
           <AppItem  delBtn={delBtn}></AppItem>
           <WelcomeMsg></WelcomeMsg> 
           <ClearAllBtn clearDispaly={clearDispaly}></ClearAllBtn>
          </div>
        </div>
    </div>
    </todoContext.Provider>
  );
}

export default App;
