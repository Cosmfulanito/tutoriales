/*

													_____Archivos y carpetas con las que trabajaremos_____



 - Archivos sueltos:	- README.md						Por norma, todo0s los archivos con este nombre brindan información	al desarrollador a cerca del proyecyo. En 
 														este caso se nos brinda infromnación de React

 						- package.jason					Archivo que contiene toda la información y configuraciónes del funcionamiento de React 				

						- package.lock.jason			Este archivo NO hay que tocarlo ya que es de funcionamiento interno

						- .gitignore					Aquí adentro estan especificados los archivos de nuestra carpeta que no queremos que se suban al repositorio 
														de git. Esto es util debido a que normalmente subiriamos a internet unicamente la carpeta public  



														
 - Carpetas y sus correspondientes archivos:

  	- public			Esta es la carpeta que se va a subir a internet 
	  					- index.html					Es el archivo .html que vamos a subir. Lo importante de este archivo es la etiqueta 
															- <div id=root"></div> 		Esta etiqueta es la que contiene nuetro aplicacion React. Nosotros vamos a 
																						trabajar con su id="root". Todo nuestro React esta aquí  
															- <noscript ></noscript>	En caso de que el usuario por algun motivo desactive JS de su navegador, 
																						obviamente no se va a aplicar en la página web los cambios hechos con React. 
																						Cuando ocurre eso se aplica esta etiqueta en vez de la anterior. Esta etiqueta 
																						le muestra un mensaje al usuario que le dice: "Se necesita activar JavaScript 
																						para utilizar esta app"
																				 

 	- src 				Esta es la carpeta con nuestra aplicación de React con la cual vamos a estar trabajando. Aquí es donde vamos a programar	
						- index.js						Es el archivo .js con el que vamos a trabajar. En su interior importa varios modulos
															- import React from 'react';			Esto es en si la biblioteca que nos permite usar React y crear 
																									interfaces	
															- import ReactDOM from 'react-dom';		Este es el Virtual DOM
															- import './index.css';					Importa CSS. Es necesario el uso de CSS en React parara crear nuestras 
																									interfaces 
															- import App from './App';				Esta funcion App.js nos permite devolver que es lo que queremos 
																									pintar por pantalla					
															- import reportWebVitals from './reportWebVitals';  	Permite al usuario usar la la app a pesar de que 
																													se le haya desconectado el internet. Con tan solo 
																													entrar una vez a la pagina, esta se guarda en su 
																													memoria cache para que pueda volver a entrar. Lo
																													ELIMINAREMOS PARA ESTE TUTORIAL
															- ReactDOM.render(<App />, document.getElementById('root'));	Esto quiere decir que vamos a usar React 					
																															para pintar algo. En este caso un 
																															componente (<App />). Y luego le decimos donde
																															lo vamos a pintar (document.getElementById('root')) 
																															recordar que este ultimo elemento se ubica
																															en la carpera index.html de la carpeta public


						- App.js							- Aquí adentro esta lo queremos pintar por pantalla. 
														      El codigo que esta aquí adentro parece raro ya que se ve como codigo HTML entro de dentro de un archivo 
															  JavaScript pero este codigo es en realidad codigo "JSX". Si prestamos atencion podremos notar las 
															  diferencias en el nombre las propiedades. Por ejemplo, en las etiquetas en vez de haber una propiedad class="" 
															  hay una propiedad	llamada className="". 
															  Recordar que el codigo JSX aunque parezca codigo HTML es en realidad codido JS. Esto lo podemos ver en la 
															  pagina oficial de "Babel rpl" que nos permite convertir codigo de JSX a JS. (Verificar con el siguiente 
															  ejemplo 		<h1>Hello Word</h1> 		en la pagina https://babeljs.io/repl     esto me va a devolver:
															  React.createElement("h1", null, "Hello word!"); Si nos fijamos, esto es codigo JS comun y corriente) 
															  Basicamente JSX es lo mismo que crear elementos en JS pero con una sintaxis más simple  																																		




 - Archivos que podemos borrar:
    React viene con archivos de ejemplo para que podamos apreciar su fucionamiento. No hace falta tenerlos ya que estorban a nuestro proyecto
	
	- src				- index.css							Solamente borraremos parte de su contenido

					    - App.js							Borraremos unicamente el <div></div> y su contenido

						- App.css							Solamente borraremos su contenido

						- App.test.js						Eliminar el archivo completamente

						- logo.svg							Eliminar el archivo completamente

						- reportWebVitals.js				Eliminar el archivo completamente			

						- setupTests.js						Eliminar el archivo completamente


						Tip: Solamente nos quedaran 4 archivos:
							- App.css
							- App.js
							- index.css
							- index.js
*/
