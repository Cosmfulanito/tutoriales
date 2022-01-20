/* 
															_____Passing Functions: Introducción_____
															


 - En este apunte veremos como pasar la información que fue añadida por el usuario mediante un <input>, a nuestra página web en forma de un elemento o componente para
   que pueda ser vista por el usuario 
   Básicamnete haremos aparecer en pantalla las tareas introducidas por el usuario 
 
 - RECORDAR que este apunte toma como referencia el apunte anterior, el cual hicimos que el usuario pueda pasar información al navegador (más precisamente a un 
   "state" del archivo TaskForm.js) mediante un <input>. Ahora en este apunte agarraremos esa información y la transformaremos en un elemento/componente que aparecera 
   en nuestra página web para que pueda ser vista por el usuario




 - En apunte trabajaremos este mismo archivo "app.js" y con el archivo "TaskForm" 


*/



/*
 _____Funcionamiento de este apunte:_____
 - Primero que nada, hay que tener en cuanta de que vamos a trabajar con 2 archivos "State" muy diferentes
	- El primero proviene de este archivo, almacena la base de datos del archivo "tareas.json" de la carpra "datos"
	- El segundo proviene del archivo "TaskForm", almacena la informacion enviada por el usuario desde el <input/> y el <textarea/> 
 - Basicamente crearemos una función en este archivo el cual se conectara con el Componente del archivo TaskForm. Esta función recibe como parametros los valores
   del "state" del archivo "TaskForm" y luego los agrega a la base de datos que estan en el "State" de este archivo. De esta manera agregamos tareas nuevas a la vase
   de datos y son renderizados con los anteriores   
 - La función de esta app hasta el apunte anterior, era la de renderizar los datos que habia en la base de datos. Ahora al tener nuevos datos agregados, tambien los 
   va a renderizar   
*/



import React from 'react'
import './App.css';
import tareas from './datos/tareas.json'			
import Tasks from './componentes/Tasks.js'	
import TaskForm from './componentes/TaskForm' 								


							

class App extends React.Component {					

	state = {												// Este es importante ya que representa a la base de datos del archivo "tareas.json" de la carpra "datos"			
		tasks: tareas
	}


	addTask = (titulo, descripcion) => {					// Esta es una función la cual agrega tareas a la base de datos del archivo "tareas.json" de la carpra "datos". Recodar que para acceder a esta base de datos estamos usando el "State" de este mismo archivo. Esta función no la ejecutaremos aquí, sino que la enviaremos al cmponente que esta en el archivo "TaskForm.js" en forma de "props"     
															// Le estamos poniendo dos parametros que va a recibir para trabajar con ellos. Uno es el titulo y el otro es la descripcion. Recordar que estos parametros los va a recivir del archivo "TaskForm" 
		const newTask = {									// Estamos creando un objeto el cual tiene como key la palabra "title" cuyo valor es el parametro titulo que estamos recibiendo, y la key "description" cuyo valor tambien es el parametro "descripcion" que estamos recibiendo. Como se puede apreciar, tiene como "keys" los mismos nombres de las keys de los objetos que estan en la base de datos del archivo "tareas.json'
			title: titulo,
			description: descripcion,
			id: this.state.tasks.length						// El id es unico, de lo contrario me deveulve un error. Aqui le puse que como id ponga la longitud del string de la base de datos que guarda los objetos (tareas). Osea, mi id va a depender de la cantidad de tareas que haya. Si hay tres tareas, y esta cuarta nueva tarea va a recibir el numero 3. Esto tiene sentido porque comienza a contar a partir del 0. 	Ej: [id=0, id=1, id=2 , id=3]    
		}

		this.setState({										// Esta funcion lo que hace es agregar información al "State" reemplazando la que estaba anteriormente. Tener en cuanta esto ultimo  
			tasks: [...this.state.tasks, newTask]			// Le estamos diciendo que a la "key tasks del state" se le agregue la información que ya tenia anteriormente pero que a su vez le incluyamos el nuevo objeto creado. De esta manera consegimos agregar un nuevo objeto con todos los anteriores
		})
	}
	

	render() {
		return (
			<div>
				<TaskForm addTask={this.addTask}/>			{/* Estamos enviando la función de arriba "addTask()" al componente <TaskForm/> que esta ubicado el archivo "TaskForm.js" por medio de un props llamado tambien "addTask". Este props puede tener el nombre que sea, pero le pusimos el mismo de la función porque resulta más legible */}												
				<Tasks tasks={this.state.tasks}/>							
			</div>															 
		)
	}
}

export default App;
