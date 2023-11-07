/* eslint-disable react/prop-types */
import {useState, useEffect} from "react";


export default function UpdateForm({task,setTask,setShow,id}) {

    const [toDoName,setToDoName] = useState("");
    const [toDoDescription,setToDoDescription] = useState("");

    useEffect(()=>{
      const selectedTask = task.filter((info,idx)=>idx==id)
      setToDoName(selectedTask[0].name);
      setToDoDescription(selectedTask[0].description);
    },[id]);
    
   const handleUpdate = ()=>{
     const editedTask = {
        name:toDoName,
        description:toDoDescription,
        status:false
     }
     setShow(false);
     task[id] = editedTask;
     setTask([...task]);
   }

    return (
        <div className="formChange">
            <input type="text" placeholder="TODO NAME" className="input input-bordered input-secondary w-full max-w-xs"
             value={toDoName} onChange={(e)=>setToDoName(e.target.value)}/>
            <input type="text" placeholder="DESCRIPTION" className="input input-bordered input-secondary w-full max-w-xs"
             value={toDoDescription} onChange={(e)=>setToDoDescription(e.target.value)} />
            <button className="btn btn-success" onClick={()=>{handleUpdate()}}>UPDATE TO-DO</button>
        </div>
    )
}