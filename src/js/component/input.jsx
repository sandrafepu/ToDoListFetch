import React from "react";

const Input = (props) => {
    
    const handleKeyUp = (event) => {
        if(event.key === "Enter"){
            if(event.target.value.length===0){
                props.addTask()
            }
            else{
                props.addTask(event.target.value)
                event.target.value="";
            }
        }
    }

    return <input type="text" onKeyUp={handleKeyUp}/>
}

export default Input;