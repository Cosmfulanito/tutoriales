/* 

															_____Hooks personalizados - Dorian_____


 _____¿Que son?:_____															

 - Los hooks personalizados nos permiten crear hooks que funcionan como nosotros deciemos.

 - Con ellos vamos a poder crear variables las cuales van a almacenar el valor que deciemos 





 _____Creación:_____

 -  Un hook personalizado se crea exactamente igual que una función. El unico requisito es que tenga como prefijo la palabra "use" para que React lo pueda 
    identificar como un hook		

		Ej:	const useGatito = () =>{

		}





 _____Implementación:_____

 - Cuando lo usemos, debemos declarar 3 cosas distintas:  (al igual que haciamos con el useState)

   	const [*variable, *setVariable] = usePersonalizado(*parametro) 

		- Variable: 	- Es el nombre de la variable la cual almacenara el valor. Es el equivalente a la "key" del "state". 
						- Cuando la usemos simplemente ponemos su nombre. No hace falta ponerle un this. al frente como se hacia antes con los states. Lo cual lo 
						  hace mucho más comodo  

		- setVariable:  - Es un metodo el cual sirve para actualizar el valor de la variable. Al utilizarlo le pondremos unos parentesis al al final y adentro el 
		                  nuevo valor. Es el equivalente al setState(). 
						- Siempre debe tener como prefijo la palabra "set", seguido de la misma palabra con la cual declaramos la variable
							Ej: variable = gato     =>     setGato       =>	      setGato()  	

		- parametro		- Corresponde a la información que recibe nuestro hook personalizado como parametro. Dicha informacion va a ser modificada segun lo que 
		                  nosotros hayamos programado cuando creamos este hook personalizado. Luego ese nuevo valor va a ser añadido como valor de la variable
		
		

		

*/



/* 
 - Como practica crearemos nuestro propio hook personalizado que nos ayude con las peticiones http
 
 - Trabajaremos en este archivo y principalmente en el archivo useHttp.js de la carpeta hooks. El objetivo de este ultimo es crear un hook personalizado que obtiene 
   como parametro la url de una API y devuelve su coontenido. De esta manera cuando lo usemos en algun archivo, podremos crear por medio de el, variables que guardan 
   los datos de una API 

 - Usaremos como referencia una aplicación ya creada por Dorian, la cual se conecta a una API y obtiene los posteos de una base de datos. Estos posteos se muestran de
   a uno y tiene dos botones con los cuales se puede ir al siguiente post o volver al anterior. A esta aplicacion de base simplemente la copie y la pegue.
   Vamos a modificarla para que haga exactamente lo mismo pero con el hook personalizado que vamos a crear 
*/








import React, { useState, useEffect } from 'react'

import { useHttp } from './hooks/useHttp'															// Estamos importando el hook personalizado que acabamos de crear en el archivo useHttp.js de la carpeta hooks

const App = () => {

	const [id, setId] = useState(1)
	
	const [post, setPost] = useHttp(`https://jsonplaceholder.typicode.com/posts/${id}`)				// Estamos usando el hook personalizado que creamos en el otro archivo. Creamos una variable llamada "post" la cual va a recibir la información de la API del link que ingresamos (el trabajo de obtener esa información obviamente la hace nuestro hook personalizado). A suvez declaramos un setpost por si queremos cambiar el valor de esa variable más adelante


  	const handlePrevId = () => {
    	if (id > 1) setId(id - 1)
  	}

  	const handleNextId = () => {
   	 	setId(id + 1)
  	}

  	return (
    	<>
      		<h1>{post.title}</h1>
      		<p>{post.body}</p>
      		<button onClick={handlePrevId}>Prev Id</button>
      		<button onClick={handleNextId}>Next Id</button>
      		<p>{id}</p>
    	</>
  );
}


export default App;