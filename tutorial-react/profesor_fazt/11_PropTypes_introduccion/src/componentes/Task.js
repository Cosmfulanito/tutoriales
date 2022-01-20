
   



import React from 'react'

import PropTypes from 'prop-types'					// Estamos importando la bibioteca de PropTypes


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


Task.propTypes = {									// Estamos usando PropTypes 
	task: PropTypes.object.isRequired				// Especificamos que el unico tipo de dato que recibiremos es un objeto porque eso mismo es con lo que estamos trabajando
}


export default Task;
