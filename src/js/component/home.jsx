import React, { useEffect, useState } from "react";
import TaskList from "./taskList.jsx";
import Input from "./input.jsx";
import CleanButton from "./cleanButton.jsx";

const Home = () => {
  let [taskList, setTaskList] = useState([]);

  		useEffect(() => {
			fetch("https://assets.breatheco.de/apis/fake/todos/user/sfp")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setTaskList(data);
				});
		}, []);

						useEffect(() => {
							fetch("https://assets.breatheco.de/apis/fake/todos/user/sfp", {
							method: "PUT",
							body: JSON.stringify(taskList),
							headers: {
								"Content-Type": "application/json",
							},
							})
								.then((resp) => {
									console.log(resp.ok); // will be true if the response is successfull
									console.log(resp.status); // the status code = 200 or code = 400 etc.
								})
								.then((data) => {
									console.log(data);
								})
								.catch((err) => {
									console.log(err);
								});
						}, [taskList]);

  const addTask = (newTask) => {
    setTaskList([...taskList, newTask]);
  };

  const removeTask = (index) => {
    taskList.splice(index, 1);
    setTaskList([...taskList]);
  };

  const cleanTaskList = () => {
	taskList=[]
	setTaskList([taskList])
}

  return (
    <div className="text-center">
      	<h1>* To Do List *</h1>
      		<Input addTask={addTask} taskList={taskList} />
      		<TaskList taskList={taskList} removeTask={removeTask} />
	  		<CleanButton cleanTaskList={cleanTaskList}/>
	</div>
  );
};

export default Home;
