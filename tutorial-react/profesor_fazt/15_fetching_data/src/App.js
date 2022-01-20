/* 
																_____Fetching Data_____
															

 - El "Fetching Data" (recuperacion de datos) es cuando obtenemos la información desde la base de datos de una API. 
 
 - En este apunte veremos como hacer "Fetching Data" con React. (Básicamente es lo mismo que aprendimos en el tutorial de JavaScript) 

 - Si bien en los apuntes anteriores accedimos a información perteneciente a una base de datos, eso no se considera "Fetching Data" debido a que dicha base de datos 
   era un archivo .json perteneciente a la misma carpeta que nuestra aplicación react. Para que se considere "Fetching Data" dicha información debe provenir de 
   una API
*/


/*
 - En este apunte accederemos a la base de datos de una API la cual almacena un Array que contiene una coleccion de 100 objetos que representan un post diferente cada 
   uno. Esto lo haremos dentro de un nuevo componente que esta dentro un archivo llamado "Post.js" que crearemos unicamnete para este apunte. Dicho archivo estara en 
   la carpeta "comoponentes"

 - Trabajaremos en parte en este este mismo archivo, pero principalmente lo haremos en el archivo "Post.js"  
*/




import React from 'react'
import './App.css';

import tareas from './datos/tareas.json'			
import Tasks from './componentes/Tasks.js'	
import TaskForm from './componentes/TaskForm' 								

import Posts from './componentes/Posts'							// Estamos importando el nuevo componente creado
							

class App extends React.Component {					

	state = {												
		tasks: tareas
	}


	addTask = (titulo, descripcion) => {					
		const newTask = {									
			title: titulo,
			description: descripcion,
			id: this.state.tasks.length						
		}

		this.setState({										
			tasks: [...this.state.tasks, newTask]			
		})
	}


	deleteTask = (ID) => {															
		const newTasks = this.state.tasks.filter(tasks => tasks.id !== ID)				

		this.setState({																
			tasks: newTasks															
		})
	}
	

	checkDone = (ID) => {															
		const newTask = this.state.tasks.map(task => {						
			if (task.id === ID){													
				task.done = !task.done												
			}
			return task																
		})

		this.setState({																
			tasks: newTask
		})
	}

	render() {
		return (
			<div>
				<TaskForm addTask={this.addTask}/>			
				<Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone}/>		
				<Posts/>																						{/* Estamos agregando este nuevo componente a nuestro componete <App/> */}
			</div>															 
		)
	}
}

export default App;
