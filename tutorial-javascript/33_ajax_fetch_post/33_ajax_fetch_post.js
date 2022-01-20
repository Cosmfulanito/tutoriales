/*

															_____AJAX - Fetch - POST_____



 - Se recomienda ir al siguiente link para profundizar sobre los headers:
   https://developer.mozilla.org/es/docs/Web/HTTP/Headers 	


 - Recordar que el metodo de envio POST se utiliza para enviar/crear información a la base de datos.
   En cambio, el metodo GET se utiliza para obtener esa informacíon de la base de datos




 - Para hacer peticiones POST, fetch admite un segundo parametro. Este segundo parametro es un "objeto" que tiene 3 keys para funcionar, pero podrian ser más
   Recordar que por defecto fetch utiliza el metodo GET
   
   Ej:		fetch(url, { 
	     		method: 'post',
				body: Los datos que enviamos. Si es un objeto, hay que convertirlo con JSON.stringify(datos),
				headers: {
					Los headers son cabeceras de información sobre lo que estamos eviando. Hay distintos tipos de headers para distintos tipos de información. Hay 
					un header para los JSON, otro para las imagenes, otro para formularios, etc  
					https://developer.mozilla.org/es/docs/Web/HTTP/Headers
				}
   			})	


 - Recordar que nuestro navegador trabaja con "objetos" y en cambio la base de datos trabajacon "archivos JSON". Por ese motivo tenemos que convertir nuestros 
   "objetos" que enviamos a la base de datos a formato "JSON" mediante el metodo JSON.stringify()
   Lo mismo pasa al reves. La base de datos nos pasa un JSON que debemos convertir en un objeto para que nuestro navegador pueda leerlo   

*/



// Usaremos una base de datos falsa de prueba para enviar información. Esta sacado de esta página (la misma que nos da la API falsa): https://jsonplaceholder.typicode.com/guide/  
const button = document.getElementById('button');

button.addEventListener('click', () => {
	const newPost = {														// Este es el objeto que queremos enviar a la base de datos
		title: 'Post nuevo',
		body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		userId: 1
	}

	fetch('https://jsonplaceholder.typicode.com/posts', {					// Este es una base de datos falsa de prueba para enviar información. Esta sacado de esta página (la misma que nos da la API falsa): https://jsonplaceholder.typicode.com/guide/  
		method: 'post',														// Este "objeto" es el segundo parametro nesesario para que fetch pueada utilizar el metodo POST. Como se puede apreciar este objeto consta de 3 keys
		body: JSON.stringify(newPost),										// En esta "key", mediante este metodo convertimos nuestro otro objeto "newPost" en formato JSON para que la base de datos pueda leerlo
		headers:{
			"Content-type": "application/json"								// Este header le informa a la base de datos de que estamos enviando un objeto en formato JSON. Recordar que "application" va con doble "P". Este es un error muy comun
		}
	})
	.then(res => res.json())												// Por ultimo queda recibir la respuesta de la base de datos. Esta respuesta tiene toda la información que le enviamos pero a su vez nos agrega un dato extra que seria el Id del archivo que enviamos. Este id se genera automaticamte en la base de datos	y se no es devuelto como respuesta. Obviamente esta repuesta esta en formarto JSON y hay que convertirla en un objeto. Esto se hace con el metodo .json(). (tema ya visto en el apunte anterior). Este objeto recien creado es a su vez una respuesta para el proximo then()			
	.then(res => console.log(res))											// LUEGO con la respues creada con el then() de arriba. Hacemos que se muestre en la consola 						

})



