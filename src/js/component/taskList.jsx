import React from "react";
import Task from "./task.jsx";

const TaskList = (props) => {

    const taskMap = props.taskList.map((taskName, taskIndex)=>{
        return <Task taskName={taskName} key={taskIndex} removeTask={props.removeTask} taskIndex={taskIndex}/>
    })

    return(
        <ul>
            {taskMap}
        </ul>
    )

}

export default TaskList;