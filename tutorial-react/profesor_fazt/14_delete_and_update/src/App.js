/* 
																_____Delete y update_____
															


 - En este apunte trabajaremos en base a la aplicación del apunte anterior. Haciendo incapie en los archivos "App.js", "Tasks.js" y "Task.js"
   
 - Lo que haremos en este apunte es hacer funcionar el boton de "borrar tarea" y el "checkbox" que nos muestra si una tarea esta o no cumplida 

 - La logica del funcionamiento de estos dos botones es exactamente la misma que lo visto en el apunte anterior "13_passing_functions_introduccion". Se recomienda 
   revisar ese apunte 

*/


/*
 - El funcionamiento de esta parte de la aplicación es la siguiente:
 - Crearemos dos funciones en este archivo "App.js", una para borrar las tareas/objetos de la base de datos y otra para actualizar dichas tareas (cambiar su valor 
   de "completado" o "no completado")
 - Luego tendremos que enviar esas dos funciones a al Componente <Task/> en forma de props. El problema es que este componente <app/> no conecta con el 
   componente <Task/>     
   Para solucionar este problema lo que haremos es enviar esas dos funciones a modo de props desde el componente <App/> hasta el componente <Tasks/>, y luego 
   repetiremos el proceso enviando dichas funciones en modo de props desde el componente <Tasks/> hasta el componente <Task/>
*/



import React from 'react'
import './App.css';
import tareas from './datos/tareas.json'			
import Tasks from './componentes/Tasks.js'	
import TaskForm from './componentes/TaskForm' 								


							

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


	deleteTask = (ID) => {															// Esta funcion sirve para borrar una tarea. Para ello borrara un objeto que representa una tarea del Array de la base de datos del archivo "tareas.json" de la carpeta "datos". Como parametro recibiremos el "id" de la tarea/objeto la cual queremos borrar.  // Esta función debe ser ejecutada por el componente <Task/>. Para lograr eso, tenemos que poner la función "deleteTask" a modo de props en el componente <Tasks/> devido a que este componente es el unico que se comunica con el componete <Task/> que es donde queremos que se ejecute la función. Osea, en este archivo "app.js" le enviaremos a modo de props la función "deleteTask" a <Tasks/> y luego desde el archivo "Tasks.js haremos lo mismo enviando esta misma función en modo de props al Componente <Task/>

		const newTasks = this.state.tasks.filter(tasks => tasks.id !== ID)			// RECORDAR que la key "tasks" del "State" representa la base datos del archivo "tareas.json" de la carpeta "datos".   // filter() es un metodo ya visto en el tuturoial de JavaScript. Lo que hace es agarrar un array existente y crea un nuevo array filtrando los datos que nosotros deciemos.  // En este caso nosotros queremos un nuevo array cuyos objetos NO TENGAN el id que le ingresemos a la función como parametro. De esta manera obtenos un nuevo array sin el objeto que acabamos de eliminar
		
		this.setState({																// .setState() es un metodo propio de React que ya vimos en el apunte anterior "13_passing_functions_introduccion". Basicamente cambia el el valor de la "key" selecionada del "State" por otro valor.    
			tasks: newTasks															// Cambiamos el valor de la base de datos por este nuevo Array que contiene la misma informacion de esa base de datos pero en este caso falta la tarea/objeto eliminado. De esta forma conseguimos actualizar la base de datos 
		})
		
		console.log(newTasks)
	}
	

	checkDone = (ID) => {															// Esta función sirve para cambiar el estado de una tarea de "no completada" a "completada" o viceversa. Si vamos a la base de datos, podemos apreciar que los objetos que representan a las tareas tienen una key llamada "done" (hecho en ingles) la cual puede tener como valor "false" (no hecha) o "true" (hecha). Lo que hace esta función es que el usuario pueda cambiar dicho valor a su gusto desde el navegador
		const newTask = this.state.tasks.map(task => {								// Basicamente estamos haciendo un mapeo del array donde buscamos una tarea/objeto cuya key "id" coincida con la id ingresada como parametro. Una vez encontrado dicha tarea/objeto, se procede a cambiar el valor de su key "done" de false a true o viceversa segun corresponda
			if (task.id === ID){													// Si la key id de la tarea/objeto coincide con el id agregdo como parametro, hacer lo siguiente 
				task.done = !task.done												// El valor de la key del objeto, cambiarlo por su valor contrario. Osea, si esta en false cambiarlo a true y si esta en true cambiarlo a false
			}
			return task																// Devolver el objeto. De esta manera solamente obtenemos un solo valor del map()
		})
		this.setState({																// Como en las funciones anteriores, acualizamos la base de datos con este nuevo valor
			tasks: newTask
		})
	}

	render() {
		return (
			<div>
				<TaskForm addTask={this.addTask}/>			
				<Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone}/>		{/* Tenemos que poner la función "deleteTask" a modo de props en este componente <Tasks/> devido a que este componente es el unico que se comunica con el componete <Task/> que es donde queremos que se ejecute la función. Osea, en este archivo "app.js" le enviaremos a modo de props la función "deleteTask" a <Tasks/> y luego desde el archivo "Tasks.js haremos lo mismo enviando esta misma función en modo de props al Componente <Task/>  // Lo mismo aplica para la función "checkDone" */}						
			</div>															 
		)
	}
}

export default App;
