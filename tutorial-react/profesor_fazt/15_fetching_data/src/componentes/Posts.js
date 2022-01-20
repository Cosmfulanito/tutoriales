/*
 - En este apunte accederemos a la base de datos de una API la cual almacena un Array que contiene una coleccion de 100 objetos que representan un post diferente cada 
   uno, donde sus keys representan un id, un titulo, contenido, etc.

 - Usaremos la API de posts de la página JSONPlaceholder mediante el siguiente link: (Ya usamos las APIs de esta página en el curso de JavaScript) 
   https://jsonplaceholder.typicode.com/posts

 - Como esto es una función "Asincrona" usaremos la API "async y await" ya vistas tambien el el tutorial de JavaSript. Más precisamente en el apunte "35_async_await" 
   Se recomienda ir a ese apunte, ya que esplica con más detalle el funcionamiento de las herramientas  "async" y await"

 - Para acceder a esta API usaremos el metodo fetch(). Metodo ya visto en el tutorial de JavaScript. Más precisamente en el apunte "32_ajax_fetch_introduccion_get" 
   Se recomienda ir a ese apunte, ya que esplica con más detalle el funcionamiento de esta herramienta
*/





import React, { Component } from 'react'

export default class Posts extends Component {

	state = {																			// Este state va a almacenar la información de la base de datos de API. Dicha base de datos no es más que un array cuyos datos son objetos que representan un post diferente cada uno
		posts: []
	}
																						// Como ya se dijo más arriba, el funcionamiento de "async", "await", "fetch()", etc. Son temas extensos ya vistos en el tutorial de JavaScript y por ende no se esplicaran aquí. Se recomienda ir a sus respectivos apuntes para repasarlos en profundidad 
	async componentDidMount()	{														// componentDidMount() es un metodo de React que se ejecuta una vez que el componente fue montado (de allí su nombre). Me permite ejecutar algo antes de que la aplicación se renderice en pantalla. Esto es util para nosotros debido a que cuando estamos obteniendo datos de una API, necesitaos hacerlo de forma asincrona porque sino esta función se tarda demaciado y se termina ejecutando el resto del codigo antes que esto, y por ende me da error (como aprendimos en tutorial de React) 
		const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts')		// Estamos accediendo a la base de datos de la API 
		const data = await respuesta.json()												// La API nos va a devolver un archivo JSON el cual no podemos leer. Para solucionar este problema tenemos el metodo JSON() el cual convierte los archivos JSON en un objeto JavaScript para poder ser leidos y trabajar con el. (Esto es equivalente al JSON.parse de XMLHttpRequest). Este tema tambien ya fue visto en el tutorial de JavaScript   // Luego agarramos este objeto que conseguimos que si puede ser leido y lo guardamos en esta propiedad para luego poder trabajar con el   
		console.log(data)

		this.setState({																	// Actualizamos la información de la key "posts" del "state" por la información de la API. Osea, la información de la API ahora esta en el "state" 
			posts: data
		})
	}

	render() {
		return (
			<div>
				<h1>Posts:</h1>
				{
					this.state.posts.map(e => {											// Mapeamos el array de la key "posts" del "state" y le pedimos que lea cada valor/objeto/post allado, y nos devuelva por cada post un elemeto <div> que en su interior tenga otros 3 elementos más que poseen la informacion de su respectivo id, titulo y contenido  
						return <div key={e.id}>											{/* Como ya se vio antes, cuando creamos muchos elementos de forma automatica se recomienda darle a cada uno, una key cuyo valor sea un id unico. Por suerte estos objetos ya cuentan con su propio id  */}
							<h2>{e.title}</h2>
							<p>{e.body}</p>
						</div>
					})
				}
			</div>
		)
	}
}
