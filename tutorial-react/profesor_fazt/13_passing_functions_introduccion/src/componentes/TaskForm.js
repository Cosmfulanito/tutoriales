



import React from 'react'


class TaskForm extends React.Component{

	noRecargar = (e) => {																		
		this.props.addTask(this.state.titulo, this.state.descripcion);							

		e.preventDefault()																										
	} 
	
	obtenerInformacion = (e) => {																										
		this.setState({																													
			[e.target.name]: e.target.value																								
		})																				
	}
	
	state = {																															
		titulo: '',
		descripcion:''
	}

	render(){
		return (
			<form onSubmit={this.noRecargar}>																							
				<input type="text" placeholder="Escribe una tarea" onChange={this.obtenerInformacion} name="titulo" value={this.state.titulo}/>		
				<br />																													
				<br />
				<textarea placeholder="Escribe una descripcion de la tarea" onChange={this.obtenerInformacion} name="descripcion" value={this.state.descripcion}></textarea>	
				<input type="submit"/>																							
			</form>
		)
	}
}

export default TaskForm



