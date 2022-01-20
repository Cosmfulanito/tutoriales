/* 

																_____Styles: Introcucción_____


 - En este apunte veremos como aplicar estilos en React. 
   Usaremos como referencia la aplicacion del apunte anterior. Recordar que dicha aplicación consta de 3 archivos para crear tres componentes los cuales se unen unos 
   con otros
	- Este mismos archivo que renderiza el componente principal <App/>
	- Componente <Tasks/> del archivo "Tasks.js" de la carpeta "componentes"   
	- Componente <Task/> del archivo "Task.js" de la carpeta "componentes"  


 - Podemos usar los objetos de JavaScript como medio para estilizar
   
 - Para ello, por cada archivo .js que contenga componentes, vamos a crear un archivo .css
   Recordar que devemos importar dichos archivos .css a su respectivo archivo .js que contiene componente
   (Al final solamente cambiamos los estilos del atributo proveniente del archivo "Task.js")
   
 



   
 - Atributos: 	
	
	- className=""						- Utilizamos este atributo para darle una clase a un elemento en JSX. Es equivalente a atributo class="" de JavaScript

										- Este cambio de nombres se debe a que la palabra "class" esta reservada para crear componentes como ya vimos en apuntes 
										  anteriores 


	- style={}							- Nos permite hacer cambios de estilos en linea desde el mismo archivo .js
										  Es equivalente a la etiqueta <style> de HTML.
										  Si bien no es bueno usar esta etiqueta en HTML, en JSX nos permite cambiar los estilos de forma dinamica, es decir, que 
										  el mismo usuario pueda cambiar los estilos desde el navegador mediante evenetos (este tema lo veremos en el siguiente 
										  apunte)

										- Recordar que esto espera un estilos como si fueran aplicados en JavaScript, y que a su vez que sean OBJETOS. A Ssu vez la 
										  sintaxis debe ser como la que se usa en JavaScript   
										  Ej: style={{background: red}}				El segundo par de {} provienen del objeto

										- Este atributo al esperar un objeto, este ultimo puede ser declarado a parte y luego ser puesto dentro de las {}
										  Ej: const redColor = {background: 'red',
																fontSize: '18px'}	
										      <p>style={redColor}<p/>

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
