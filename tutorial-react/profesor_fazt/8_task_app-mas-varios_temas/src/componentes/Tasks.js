

/* 
 - Creamos este componente en una carpeta separada simplemente para darle más complejidad a la aplciación. 
 - Este componente luego sera importado al componente principal en el archivo App.js
*/


/* La función de este componente es de importar el componente <Task/> del archivo "task.js" y pasarle los datos nesesarios para que cada componente <Task/> sea
   unico. De esta manera este mismo elemento <Tasks/> tendra adentro varios elementos <Task/> por cada objeto/tarea */

import React from "react";

import Task from './Task.js'																// Estamos importando un componente del archivo "Task.js"


class Tasks extends React.Component{
	render(){
		return (															
			this.props.tasks.map(task => <Task task={task} key={task.id}/>) 				// Basicamente estamos recorriendo todos los valores del Arrey, cada valor es un objeto que representa una tarea con toda su informacion. Lo que estamos haciendo es que busque en cada objeto las keys correspondientes ("title", "description", "done" e "id") y luego los ponga dentro de una etiqueta <p></p>  // Recordar que estamos trabajando sobre el componente <Task/> que fue creado en el archivo Task.js  // Recordar que estoy utilizando "props"
		)																					// Este atributo key={} es neseario para evitar que me devuelva el error por no darle a cada elemento creado un valor unico. ¿Que valor unico le voy a dar a cada elemento? Obviamente le doy como valor unico la id propia que aparece en el archivo tareas.json 
	}
}


export default Tasks;


