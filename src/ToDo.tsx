import React, { useState } from "react";

interface Task {
  id: number;
  text: string;
  done: boolean;
}

const ToDo = () => {
    const[tasklist,settasklist]=useState<Task[]>([]);
    const[newtask,settask]=useState<string>("");
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
            settask(event.target.value);
    }
    const handleTask = (event:React.FormEvent)=>{
        event.preventDefault();
        const task :Task = {
            id:tasklist.length+1,
            text:newtask,
            done:false
        };
        settasklist([...tasklist,task]);
        settask("");
    }
    return(
        <>
            <ul>
                {tasklist.map((task)=>(
                    <li>{task.id}  {task.text}  {task.done ? "completed" : "not Completed Yet"}</li>
                ))
                }
            </ul>
            <form onSubmit={handleTask}>
                <input type="text" onChange={handleChange} placeholder="enter your taskname"/>
                <button type="submit">ADD Task</button>
            </form>
        </>

    );
};

export default ToDo;
