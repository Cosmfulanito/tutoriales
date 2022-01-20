/* 

														_____Forms: Introducción_____



 - En este aprenderemos a utilizar utilizaremos los Forms de HTML en React
    
 - Como ya sabemos, los forms son herramientas propias de HTML para que el usuario pueda introcudir información desde el navegador. Entre estas erramientas estan 
   todos los tipos de <input>, <button>, <select>, <datalist>, etc.   



 - En este apunte trabajareos con el proyecto del apunte anterior. En el crearemos un nuevo Componente que vendria a ser un "form" el cual le permite al usuario
   agregar tareas desde el navegador. Este nuevo componente luego sera agragadado al componente principal. 

 - Este nuevo componente sera creado en el nuevo archivo "TaskForm" que esta ubicado en la carpeta "componentes". a

 - RECORDAR que en este nuevo archivo estara ubicada toda la información teorica de este apunte


 - Como actividad vamos a crear un form que contengan dos elementos. Un <input/> para almacenar el titulo de la tarea que vamos a agregar y un <textarea/> que va a 
   almacenar el contenido de dicha tarea. Luego guardaremos toda información el "State" (tema ya visto en su respectivo apunte)

*/




import React from 'react'
import './App.css';
import tareas from './datos/tareas.json'			
import Tasks from './componentes/Tasks.js'	

import TaskForm from './componentes/TaskForm' 						// Importamos este nuevo componente como lo hariamos con cualquier otro  		

							

class App extends React.Component {					

	state = {										
		tasks: tareas
	}
	
	render() {
		return (
			<div>
				<TaskForm/>											{/* LLamamos a este nuevo componente como lo hariamos con cualquier otro */}				
				<Tasks tasks={this.state.tasks}/>							
			</div>															 
		)
	}
}

export default App;
