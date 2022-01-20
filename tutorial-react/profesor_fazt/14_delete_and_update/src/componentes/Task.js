/*
 - Estamos creando un evento onClick donde al hacer click en este boton de borrar, ejecutamos la función "deleteTask" la cual se encarga de eliminar una 
   tarea/objeto de la base de datos. Esta función la treamos aquí mediante un props desde el Componente <Tasks/>, el cual a su vez tambien la trajo desde otro 
   props desde el componente <App/> 
 - Lo mismo aplica con la función "checkDone" */

   
import React from 'react'

			


class Task extends React.Component {

	StyleCompleted () {															
		return{															
			fontSize: '20px',
			color: this.props.task.done ? 'gray' : 'black',						
			textDecoration: this.props.task.done ? 'line-through' : 'none'
		}
	}

	render(){
		return(
			<div style={this.StyleCompleted()}>								   								
				{this.props.task.title} - {this.props.task.description} - {this.props.task.done} - {this.props.task.id}	
				<input type="checkbox" onChange={this.props.checkDone.bind(this, this.props.task.id)}/>		{/* La logica de esto es exactamenet la misma que en el evento de la función de abajo (el de abajo fue el primero que cree) */}
				<button onClick={this.props.deleteTask.bind(this, this.props.task.id)}>X</button >			{/* Estamos creando un evento onClick donde al hacer click en este boton de borrar, ejecutamos la función "deleteTask" la cual se encarga de eliminar una tarea/objeto de la base de datos. Esta función la treamos aquí mediante un props desde el Componente <Tasks/>, el cual a su vez tambien la trajo desde otro props desde el componente <App/>   // Con el metodo bind() le estamos pasando a la funcion el id la tarea/objeto que necesita como parametro. RECORDAR que tengo que hacer este circo porque cuando llamo a una función dentro de un evento, no puedo ponerle los parentesis, de lo contrario me tira un error; pero por culpa de esto no puedo pasarle los parametros dentro del parentesis ya que estos parentesis no existen.  En el apunte anterior "13_passing_functions_introduccion" habia una funcion llamada "addTask" la cual hice funcionar dentro del evento dandoles los parametros mediante otra función creada a parte. Esto es una alternativa a usar bind() ya que es un metodo que no comprendo y que uso el profesor en su curso pero que a su vez dio por entendido */}				
			</div>
		)
	}
}



export default Task;
