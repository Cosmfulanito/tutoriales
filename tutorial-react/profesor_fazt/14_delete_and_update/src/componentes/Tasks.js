/* 
 - Estamos obteniendo la función "deleteTask" del archivo "App.js" y se lo estamos enviando a al componente <task/>.  Hacemos esto devido a que el componente de 
   este archivo <tasks/> es el unico que se comunica con el componente <task/>   
 - Lo mismo aplica para la funcón "chenckDone" 
*/  		


import React from "react";

import Task from './Task.js'																


class Tasks extends React.Component{
	render(){
		return (															
			this.props.tasks.map(task => <Task task={task} key={task.id} deleteTask={this.props.deleteTask} checkDone={this.props.checkDone}/>) 	////	
		)																					
	}
}


export default Tasks;


