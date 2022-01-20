

import React from 'react'

import './Task.css'; 													// Estamos importando la hoja de estilos/archivo.css que le va a brindar los estilos a nuestro componente

class Task extends React.Component {
	render(){
		return(
			<div className="red">										{/* Esta es la forma de darle una "clase" a un elemento especifico. En JSX el atributo className="" es equivalente al atributo class="" de JavaScript */}
				{this.props.task.title} - {this.props.task.description} - {this.props.task.done} - {this.props.task.id}

				<p style={{background: 'coral'}}>Lorem ipsun</p>		{/* Aplicando cambios de linea con el atributo style={} */}
				<input type="checkbox"/>
				<button style={buttonStyles}>X</button>					{/* Aplicando cambios de linea con el atributo style={}, pero en este caso estamos los estilos guardados en un objeto */}
			</div>
		)
	}
}

const buttonStyles = {													// Objeto que guarda los estilos que luego seran usados en el segundo ejemplo del atributo style={} que esta arriba en el <botton>
	fontSize: '18px',
	background: 'lime',
	color: '#fff',
	border: 'none',
	padding: '10px 15px',
	borderRadius: '50%',
	cursor: 'pointer'
}

export default Task;
