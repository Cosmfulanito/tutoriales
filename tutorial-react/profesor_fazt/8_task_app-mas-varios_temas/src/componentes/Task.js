

/* 
 - Creamos este componente en una carpeta separada simplemente para darle más complejidad a la aplicación
 - Este componente luego sera importado a otro componente en el archivo "Tasks.js"
 */


/* La funcion de este componente es de crear una tarea */

import React from 'react'

class Task extends React.Component {
	render(){
		return(
			<div>
				{this.props.task.title} - {this.props.task.description} - {this.props.task.done} - {this.props.task.id}

				<input type="checkbox"/>
				<button>X</button>
			</div>
		)
	}
}


export default Task;
