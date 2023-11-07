/* eslint-disable react/prop-types */
import { useState } from "react"


export default function Form({task,setTask}){
   const [toDoName,setToDoName] = useState("");
   const [toDoDescription,setToDoDescription] = useState("");
   const handleAdd = ()=>{
    const newToDo = {
        name : toDoName,
        description : toDoDescription,
        status : false
    };
    setTask([...task,newToDo]);
   }


    return(
        <div className="createForm">
        <input type="text" placeholder="TODO NAME"  className="input input-bordered input-secondary w-full max-w-xs"
         value={toDoName} onChange={(e)=>setToDoName(e.target.value)} />
        <input type="text" placeholder="DESCRIPTION"  className="input input-bordered input-secondary w-full max-w-xs"
         value={toDoDescription} onChange={(e)=>setToDoDescription(e.target.value)} />
        <button className="btn btn-success"  onClick={handleAdd}>ADD TO-DO</button>
        </div>
    )
}