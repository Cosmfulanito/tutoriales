/* 

														_____PropTypes: Introducción_____




 Se recomienda ir al siguiente link para profundizar más en este tema:
 https://es.reactjs.org/docs/typechecking-with-proptypes.html







 _____¿Que son los PropTypes?_____

 - Es una herramienta cuya funcion es la de validar que tipo de dato queremos que ingrese en nuestro "Props" (tema ya visto en el apunte "5_props_introduccion")
 
 - Por ejemplo, le podemos decir a la aplicación en un "Prop" especifico solamente se le pueda ingresar datos del tipo "number". En caso de ingresar un tipo de 
   dato no aceptado como podria ser en este caso un "string", nos aparecera un cartel con un mensaje de error
   De esta forma nos aseguramos que solamente ingrese el tipo de dato deseado







 _____Tipos de datos que son validados por PropTypes:_____
 
 - A continuación mostraremos los tipos de datos que pueden ser validados y su sintaxis a la hora usarlos:

	- Booleanos: 					PropTypes.bool.isRequired
	- Strings:						PropTypes.string.isRequired
	- Numbers:						PropTypes.number.isRequired
	- Array: 						PropTypes.array.isRequired
	- Objetos:						PropTypes.object.isRequired
	- Funciones: 					PropTypes.func.isRequired
	- Simbolos:						PropTypes.symbol.isRequired






 _____¿Como	usar los PropTypes?_____

  1-	Importamos la bibioteca de PropTypes:
			import PropTypes from 'prop-types';

  2-	Por debajo del componente que contiene el "prop" deseado especificamos el tipo de dato que es valido de la siguiente manera:		

		NombreDelComponente.propTypes = {
			nombreDelProp:	PropTypes.number.isRequired						En este caso solo permitimos datos del tipo "number". En caso de poner otro tipo de dato 
		}																	me va a salir un mensaje de error		


*/														

/*
 - Para este apunte usaremos como referencia la aplicacion del apunte anterior. 
   A su ves nos centraremos en el componente <task/> del archivo Task.js. Tambien habra algo de contenido en el archivo Tasks.js 
*/




import React from 'react'
import './App.css';

import tareas from './datos/tareas.json'			
import Tasks from './componentes/Tasks.js'			


console.log(tareas)									



class App extends React.Component {					

	state = {										
		tasks: tareas
	}
	
	render() {
		return (
			<div>															
				<Tasks tasks={this.state.tasks}/>							
			</div>															 
		)
	}
}

export default App;
