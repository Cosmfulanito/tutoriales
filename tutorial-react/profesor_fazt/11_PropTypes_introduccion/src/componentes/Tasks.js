




import React from "react";

import Task from './Task.js'																


class Tasks extends React.Component{
	render(){
		return (															
			this.props.tasks.map(task => <Task task={task} key={task.id}/>) 		// {task} hace referecia al objeto, solo que lo nombramos con este nombre. De cambiarlo por otro tipo de valor por ejemplo "task{10}" nos daria un error por ser un valor del tipo "number" en ves de un "objeto" 		
		)																					
	}
}


export default Tasks;


