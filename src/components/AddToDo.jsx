import { useState , useRef } from "react"
import { MdLibraryAdd } from "react-icons/md";

export function AddToDo ({addbtnClick}){

  const nameElement  = useRef()
  const dateElement  = useRef()

  let btnClick = ()=> {
    const itemName = nameElement.current.value;
    const itemDate = dateElement.current.value;
    nameElement.current.value ="";
    dateElement.current.value ="";
    addbtnClick(itemName , itemDate)
  }

  let onKeyDownName = (e) =>{
    if(e.key === 'Enter'){
      btnClick()
    }
  }

    return   <div className="row mt-5">
    <div className="col-md-6 col-12 ">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          name=""
          id=""
          ref={nameElement}
          aria-describedby="helpId"
          placeholder="Enter Todo Here"
          onKeyDown={onKeyDownName}
        />
      </div>
    </div>

    <div className="col-md-4 col-6">
      <div className="mb-3">
        <input type="datetime-local" name="" id=""
        ref={dateElement}
        className="w-100"/>
      </div>
    </div>
    <div className="col-md-2  col-6 d-grid">
      <button className="btn btn-success btn-lg"
      onClick={btnClick}><MdLibraryAdd/>Add</button>
    </div>
  </div>
}