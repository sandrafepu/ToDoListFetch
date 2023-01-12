import React from "react";

const CleanButton = (props) => {
    return(
        
        <button type="button" className="btn btn-dark mt-4" onClick={props.cleanTaskList}>Clean all tasks</button>
    
    )
}

export default CleanButton;