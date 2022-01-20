




import React from "react";

import Task from './Task.js'																


class Tasks extends React.Component{
	render(){
		return (															
			this.props.tasks.map(task => <Task task={task} key={task.id}/>) 		
		)																					
	}
}


export default Tasks;


