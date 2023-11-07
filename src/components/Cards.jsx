/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import UpdateForm from "./updateForm";
import Form from "./Form";
import StatusBar from "./StatusBar";

export default function Cards({task,setTask}) {
  const[editId,setEditId] = useState();
  const[show,setShow] = useState(false);

    const handleDelete = (id)=>{
        const remainingTasks = task.filter((info,idx)=>idx != id);
        setTask(remainingTasks)
    }
    const handleEdit = (id)=>{
      setEditId(id);
      setShow(true);
    }
     
    return (
        <div className="mainBar">
            {
                show == false 
                ?
                <Form
                task={task}
                setTask={setTask}
                />
                :
                <UpdateForm
                task={task}
                setTask={setTask}
                setShow = {setShow}
                id = {editId}
                />
            }
             <StatusBar />
             <div className="cards">
             {
              task.map((tasks,idx)=>(
                <div className="card w-96 bg-base-100 shadow-xl" key={idx}>
                <div className="card-body">
                    <h2 className="card-title">NAME : {tasks.name}</h2>
                    <p>DESCRIPTION : {tasks.description}</p>
                    <div className="status">
                    <span>STATUS  :</span>
                    <select className="select select-accent w-60 max-w-xs">
                        <option value="notComplete" selected>NOT COMPLETED</option>
                        <option value="complete">COMPLETED</option>
                    </select>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={()=>{handleEdit(idx)}}>EDIT</button>
                        <button className="btn btn-primary" onClick={()=>{handleDelete(idx)}}>DELETE</button>
                    </div>
                </div>
                </div>
              ))
              }
             </div>
        </div>
    )
}

