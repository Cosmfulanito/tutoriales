
   
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
				<input type="checkbox" onChange={this.props.checkDone.bind(this, this.props.task.id)}/>		
				<button onClick={this.props.deleteTask.bind(this, this.props.task.id)}>X</button >						
			</div>
		)
	}
}



export default Task;
