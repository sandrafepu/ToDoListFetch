import React from "react";

const Task = (props) => {


    const handleClick = (event) => {
        props.removeTask(event.target.id)
    }

    return(
        <li className="task-line">
            {props.taskName.label} <button className="button-close" type="button" onClick={handleClick} id={props.taskIndex} class="btn-close"></button>
        </li>
    )

}

export default Task;