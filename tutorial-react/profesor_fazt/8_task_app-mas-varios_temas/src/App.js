/*

																_____Task app + varios temas_____



 
 _____Escribir un "string" o cadena de texto en JSX:_____   

 - Dentro de JSX cuando queremos poner texto simplemente lo escribimos, no hace falta ponerle comillas
   	Ej: <h1>Hola Mundo</h1>





 _____Llamar a una constante / función / etc y demas operaciones propias de JavaScipt en JSX:_____   

 - Normalmente JavaScript simplemente se pone el nombre de la variable o función sin comillas "" '' porque esas son para los string. En JSX los string son los que se 
   escriben sin comillas, por ende para diferenciarlos de las constantes o funciones, estos ultimos deben escribirse entre corchetes. 
   Básicamente poner todo entre corchetes {} nos permite usar el JavaScript puro en JSX
   	Ej1: {variable}
	Ej2: {funcion()}   
	Ej3: {variable.length}
	
 - Tambien podemos hacer operaciones matemaricas, ya que conn los {} estamos usando el JavaScript puro	
    Ej1: {2 + 5}           		Resultado: 7
	Ej2: {variable + 5}

	





 _____Bucle for en JSX:_____

 - Dentro de JSX usaremos el metodo .map() en lugar del bucle for. Este metodo ya lo vimos en el apunte de JavaScript: "14. Arrays - Métodos II"  
   Basicamente con el metodo .map() reccorremos los arreys y acada valor le hacemos los cambios que deciemos. Luego nos sera devuelto un nuevo arrey con los cambios
   hechos pero sin alterar al original  
 
 - Recordar: 
 	- Ponerlo dentro de {}
   	  Ej: {variable.map(e => e+2)}


 - Evitar el eror "key":
   Cuando creemos un nuevo elemento mediante un bucle, React espera que le demos un valor unico a cada elemento que funcione como id. Esto se hace mediante el 
   atributo key={}. Esta propiedad es de React, y es bastante utilizada cuando iteramos datos.
   Cada vez que recorramos multiples elementos nos va a devolver este error para que simplemente utilicemos dicho atributo  
   	Ej: {this.array.map(e => <p key={e.id}> {e.description} - {e.id} </p>)}					 Este es un ejemplo sacado del codigo de abajo




*/







/* 
 - Vamos a hacer una "task app" para aplicar todo lo aprendido. 
 - Dicha aplicación se comunicara con un archivo llamado "tareas.json" que esta ubicado en la carpeta "datos". Dicho archivo simulara ser una base de datos, 
   dentro contiene un array que tiene como valores objetos los cuales cada uno representan una tarea distinta. Estos objetos tienen toda la información de su 
   respectiva tarea 
 - Para darle un toque más de complejidad, vamos a crear un componente extra en el archivo "Tasks.js" que esta ubicado en la carpeta "componentes". Luego llamaremos 
   a este componente desde nuestro componente principal desde este mismo archivo 
   Y tambien vamos a crear otro componente en otro archivo llamado "task.js" en la misma carpeta
 - Vamos a ponerle un <input> del tipo checkbox y un <botton>. Estos dos solamente estaran de adorno y no haran nada    
 - Basicamente vamos a hacer un componente desde el archivo "Tasks.js" que va a redenderizar a una sola tarea. Luego importaremos ese componente a la carpeta 
   "Tasks.js" la cual se encarga de crear un componente mucho más grande usando como base a varias copias del componente anterior pero rellenandolos con imformacion
   proveniente de la base de datos. La función de este componente es de importar el componente <Task/> del archivo "task.js" y pasarle los datos nesesarios para 
   que cada componente <Task/> sea unico. De esta manera este mismo elemento <Tasks/> tendra adentro varios elementos <Task/> por cada objeto/tarea
   Por ultimo, este ultimo componente es importado a este mismo archivo directo a nuestro componente principal 
*/


import React from 'react'
import './App.css';

import tareas from './datos/tareas.json'			// Estoy importando el array del archivo "tareas.json" que esta ubicado en la carpeta "datos". Y a su vez estoy guardando dicho array dentro de la constante "tareas" 
import Tasks from './componentes/Tasks.js'			// Estamos importando el componente creado en el archivo "Tasks.js" que esta ubicado en la carpeta "componentes". A su vez estoy guardando dicho componente en la constante "Tasks". Si quiero utilizarlo en mi componente principal, simplemente tengo que llamarlo como si fuera una etiqueta: <Tasks/> 


console.log(tareas)									// Este console.log() solo esta para poder ver los datos desde pantalla



class App extends React.Component {					// Recordar  que estamos usando el metodo de las clases, pero es exactamente lo mismo que usar una función, solo que su sintaxis es un poco diferente (este tem ya fue visto en apuntes anteriores)
	state = {										// Todo lo que vamos a usar tiene que estar dentro de un state
		tasks: tareas
	}

	render() {
		return (
			<div>															
				<Tasks tasks={this.state.tasks}/>							{/* Estoy llamando al componente creado en el archivo "Tasks.js" que esta ubicado en la carpeta "Tasks" */}	
			</div>															 // Recordar que task={} es un "props"  
		)
	}
}

export default App;
