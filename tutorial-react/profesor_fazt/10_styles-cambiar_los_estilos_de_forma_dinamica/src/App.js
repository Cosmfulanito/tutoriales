/* 

														_____Styles: Cambiar los estilos de forma dinamica_____



 - En este apunte veremos como cambiar los estilos de forma dinamica. Es decir, mediante eventos desde el navegador														

 - Usaremos como referencia la aplicación del apunte anterior. Especialmente el archivo "Task.js" ya que con el trabajaremos



 - Para cambiar los estilos de de forma dinamica nos valdremos de una función la cual sera pasada al atributo style={}

 - ¿Por que necesitamos de una función si podemos usar un objeto?
   La razon de usar una función se debe a que gracias a esta podemos usar condicionales o hacer otras interesantes con JavaScript


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
