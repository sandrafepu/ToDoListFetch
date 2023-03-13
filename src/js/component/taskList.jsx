import React from "react";
import Task from "./task.jsx";

const TaskList = (props) => {

    const taskMap = props.taskList.map((taskName, taskIndex)=>{
        return <Task taskName={taskName} taskList={props.taskList} key={taskIndex} removeTask={props.removeTask} taskIndex={taskIndex}/>
    })
     const pepe = () => {
        console.log("hola")
     } 
     pepe()
    return(
        <ul>
          {taskMap}  
        </ul>
    )

}

export default TaskList;