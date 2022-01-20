/* 
																_____React Router (Enrutador)_____
															


 - El "React Router" o "Enrutador" es una herramienta de React que nos permite hacer simular que dos comoponentes pertenecen a dos páginas distintas. 
   RECORDAR: Estamos "simulando"

 - Esta herrmaienta es bastante util ya que sin salir de nuestra página web podemos simular otra totalmente distinta. 
    








 _____Comenzar a utilizar "React Router"____

 - Dependiendo de la vercion de React que estmos usando, es probable de que no haya venido con la librerias para usar "React Router". Si ese es nuestro caso, debemos
   instalarlas nosotros mismos.
   - Desde la terminal debemos posicionarnos en la carpeta de nuestro proyecto React y escribir los siguiente:
     npm install react-router-dom  

 - Luego iniciaremos el projecto como de costumbre
 
 



 _____Libreria que importaremos:_____

   import {BrowserRouter as Router, Route, Link } from 'react-router-dom';	  

 - Aquí solamente nos interesa importar 3 cosas: 
   	- "BrouserRouter". Es el enrutador. Nos permite crear la etiqueta principal donde crearemos las rutas deseadas.  
	   El problema de "BrouserRouter" es que su nombre es bastante largo, por ese motivo lo vamos a renombrar como "Router". Es lo mismo pero más corto, hacemos 
	   esto solamente por comodidad. Por ende, cada vez que usemos esta etiqueta para crear las rutas, vamos a llamarlo como <Router>  
	- "Route". Nos permite crear una etiqueta que se encarga de crear la ruta/pagina individual para cada Componente. Cada página tiene su propia etiqueta <Route>
	- "Link". Nos permite crear la etiqueta <Link>. Dicha etiqueta es un simple link que nos redirecciona a la página deseada   
			
	

 _____Etiquetas y atributos:_____	
	
 - <Router>				Esta etiqueta es obligatoria ya que adentro de ella iran todas las etiquetas <Route> la cual cada una representan a una ruta/página distinta	

 - <Route>				Se encarga de crear la ruta/pagina individual para cada Componente. Cada página tiene su propia etiqueta <Route>		
							- path=""		- Este atributo se encarga de darle una subcarpeta el cual sirve como link para nuestro <Route>
												Ej: path="/perro"			www.wikidia/perro
											- path"/" es equivalente a la página de home
											  	Ej: path="/"				www.wikipedia/

							- exact			- Este atributo se utiliza en conjunto con path="" para evitar errores. Esto se debe a path="" se ejecuta con todos los 
								              la misma raiz que es path="", al haber dos <Route> cuyos path"" comiencen igual, se renderizaran los componentes de 
											  ambas rutas a la vez. Con el atributo exact corregimos ese error ya que los componentes solamente se renderizan con ese
											  unico link   
											- Este atributo es casi obligatorio ponerlo junto con un path"/", ya que la barra "/" en en ese atributo es algo que 
											  aparece en todos los paths="" (Ej: path="/perro", path="/gato"). Por ende, sin este atributo exact, la pagina de inicio 
											  se fucionaria con las demas páginas      					  

 - <Link>				Dicha etiqueta es un simple link que nos redirecciona a la página deseada de nuestra aplicación de react. Es equivalente a la etiqueta <a> de 
                        HTML pero para movernos dentro de nuestras rutas 
                        permite ir a la pagína deseada desde nuestro navegador   
							- to=""			- En este atributo pondremos el link de nuestra ruta a la cual queremos redireccionarnos. Es equivalente al href= de HTML 
							                  pero para movernos dentro de nuestras rutas 
												Ej1: to="/"					www.wikipedia/
												Ej1: to="/perro"			www.wikipedia/perro
*/









/*
 _____Objetivo de la parte practica:_____
 - En este apunte craremos utilizaremos el "React Router" / "Enrutador" para utilizar 2 componentes y dar la ilución de que pertenecen a 2 páginas diferentes  
 - Usaremos como base el apunte anterior. Como se puede apreciar en dicho apunte, la página web tiene 2 partes: La primera es un "TODO App" (aplicación de tareas 
   pendientes) y la segunda parte de la página obtiene posts desde  una API y los muestra en la página web
 - Como se puede apreciar, esas dos funciones son totalmente distintas y no tienen nada que ver una con la otra. Por ende, nuestro objetivo es separa esas dos 
   funciones y "simular" que estan en páginas distintas  
*/





import React from 'react';

import {BrowserRouter as Router, Route, Link } from 'react-router-dom';						// Para que funcione el "React Router", antes tenemos que importarlo. 'reac-router-dom' hace referencia al enrutador que usamos en React, pero especificamente para el navegador. El motivo de esto es que tambien se puede usar React para aplicaciones moviles. 
																							/* Aquí solamente nos interesa importar 3 cosas: 
																								- "BrouserRouter". Es el enrutador. Nos permite crear la etiqueta principal donde crearemos las rutas deseadas.  // El problema de "BrouserRouter" es que su nombre es bastante largo, por ese motivo lo vamos a renombrar como "Router". Es lo mismo pero más corto, hacemos esto solamente por comodidad. Por ende, cada vez que usemos esta etiqueta para crear las rutas, vamos a llamarlo como <Router>  
																								- "Route". Nos permite crear una etiqueta que se encarga de crear la ruta/pagina individual para cada Componente. Cada página tiene su propia etiqueta <Route>
																								- "Link". Nos permite crear la etiqueta <Link>. Dicha etiqueta es un simple link que nos redirecciona a la página deseada   
																							*/
import './App.css';
import tareas from './datos/tareas.json';			
import Tasks from './componentes/Tasks.js';	
import TaskForm from './componentes/TaskForm'; 								
import Posts from './componentes/Posts';							
							

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
				<Router>																{/* Esta etiqueta es obligatoria ya que adentro de ella iran todas las etiquetas <Route> la cual cada una representan a una ruta/página distinta */}								

					<Link to="/">Home</Link>											{/* Este es simplemete un link que nos redirecciona a la página inicial */}
					<br/>
					<Link to="/posts">Posts</Link>										{/* Este es simplemete un link que nos redirecciona a la página de "posts" */}			

					<Route exact path="/" render={() => {								{/* Esta ruta representa la página inicial, la cual tiene en su interior la aplicación "TODO app" (aplicación de tarea pendiente). Es obligatorio utilizar el atributo render={} de la misma manera que lo utilizamos al inicio de esta aplicación */}																
							return <div>												{/* Como sabemos, el atributo render={} debe retornar (por eso el "return"), y eso que devuelve siempre debe ser una unica etiqueta, por eso encerramos todo en una etiqueta <div>  // Recordar que devemos usar el atributo render={} a modo de función */}
								<TaskForm addTask={this.addTask}/>
								<Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone}/>	
							</div>
						}}>										
					</Route>

					<Route path="/posts" render={() => {								{/* Lo mismo que lo anterior, pero en este caso la página de esta ruta representa la pagína de los post */}
						return <div>
								<Posts/>
							</div>																						
						}}>
					</Route>

				</Router>
			</div>															 
		)
	}
}

export default App;
