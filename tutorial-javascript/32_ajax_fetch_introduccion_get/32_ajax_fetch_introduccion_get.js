/*

															_____Api: Fetch - Introducción_____




 - Proporciona una interfaz JavaScript para acceder y manipular partes del canal HTML, como peticiones y respuestas.
   Básicamente es el reemplazo de XMLHttpRequest. Tener en cuenta que tiene soporte para todos los navegadores excepto para Internet Explorer 

 - También provee un metodo gloval fetch() que proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red 
 


 - Está basado en "promesas", por lo cual tiene un "response" y un "rejet" ineternos. Osea, cada vez que trabajamos con fetch, el automaticamente esta creando una 
   promesa, una petición, un rejet y demas. Nos facilita todo poniendo solamente un fetch. (Estos temas ya fueron vistos en el apunto anterior "
   31-promesas-introduccion.js")

	- Resoponse tiene varios métodos:	

		- arrayBuffer()			Archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza cuando "SI" se necesita manipular el contenido del archivo.
		
		- blob()				Binary Long Objets. Archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza cuando "NO" se necesita manipular el contenido y se 
								va a trabajar con el archivo directamente

		- clone()				Crea un clone de un objeto de respuesta, idéntico en todos los sentidos, pero almacenado en una variable diferente.

		- formData()			Se utiliza para leer los objetos formData

		- json()				Convierte los archivos json en un objeto JavaScript para poder ser leidos y trabajar con el. (Esto es equivalente al JSON.parse de XMLHttpRequest)

		- text()				Se utiliza cuando queremos leer un archivo de texto. Siempre se codifica en UTF-8


- fetch trabaja con el metodo GET. por ende no hace falta especificar que la ruta es por GET


*/


const button_1 = document.getElementById('button_1');
const button_2 = document.getElementById('button_2');
const button_3 = document.getElementById('button_3');




/* Como saber si mi navegador tiene soporte con fetch:
   (De no tenerlo es porque estamos en Internet Explorer)  */ 

button_1.addEventListener('click', () => {																									
	if(window.fetch != undefined) console.log('Este navegador tiene soporte con fetch')    	// Le estoy preguntando al navegador si cuando utilizo fetch no me sale el el valor "undefined". (En este caso, este valor solamente sale cuando el navegador no soporta fetch). Por ende si no sale este cartel significa que nuestro navegador tiene soporte con fetch. Caso contrario no lo tiene porque es Internet Explorer 
	else console.log('No tiene soporte con fetch, seguramente es Internet Explorer')
})





// _____Utilizando fetch:_____

// Chequear que la dirección de la API es correcta:
button_2.addEventListener('click', () => {
	fetch('https://jsonplaceholder.typicode.com/users')						// Como se puede apreciar, a diferencia de XMLHttpRequest, fetch trabaja con el metodo GET. por ende no hace falta especificar que la ruta es por GET 
		.then(res => console.log(res))										// Como se dijo más arriba, fetch esta basado en las "promesas". A su vez ya tiene integrado un "resolve" y un "rejet". Por ende si pongo then(), aquí va a llegar toda la informacíon en caso de que haya un "resolve" (todo salga bien y sin errores).  	// Cada vez que llamamos a una API, lo que importa es que tengamos los valores "ok: true" y "status: 200", esto significa que la petición fue correcta. En caso de escribir mal la URL, me va a aparecer "ok: false" y "status: 404" (del famoso error 404 por no encontar la página)   // Todo esto ya vio en apuntes anteriors como el de "27_ajax_objeto_xmlhttprequest_i" y el de "31-promesas-introduccion.js", ya que "res = response = respuesta"
})


/* Obtener la información de la API:
   (Estamos haciendo lo mismo que en el apunte de "27_ajax_objeto_xmlhttprequest_i" pero con fetch)  */
button_3.addEventListener('click', () => {
	fetch('https://jsonplaceholder.typicode.com/users')				
		.then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))	// Aquí lo que hago es chequear que la dirección de la api sea correcta (como se vio más arriba). Esto se hace preguntandole al navegador si "ok == true". En caso de la respuesta sea "true", que Promise.resolve(res) (rescordar que res es una promesa, por eso usamos el Pomise). En caso contrario, donde la promesa de que "ok" sea igual a "false", que Promise.reject(res)  
		.then(res => res.json())											// Esto es equivalente al JSON.parse de XMLHttpRequest
		.then(res => {

			const list = document.getElementById('list')
			const fragment = document.createDocumentFragment()
			for (const userInfo of res){
				const listItem = document.createElement('LI')
				listItem.textContent = `${userInfo.id} - ${userInfo.name}`
				fragment.appendChild(listItem)
			}
			list.appendChild(fragment)
		})																	
})																			/* Básicamente el orden del uso de fetch seria:  
																			   Primero mediante un click en boton hago una peticion a la API y voy a recir una respuesta me devuelve una "respuesta" (res) que usara el primer then() 
																			   "LUEGO" (then()) con esa respuesta chequeo si la direccion de la API es correcta. Si el valor de "ok" es igual a "true". De ser así significa que ingrese bién el URL de la página. Esta información nueva es un respueta que usara el proximo then()
																			   LUEGO con la información de esa respuesta convierto los archivos json de la API en objetos que puedan ser leidos en JavaScript. Esta informacion nueva es una respuesta que usara el proximo then()
																			   LUEGO, por ultimo, trabajo con esa respuesta que contiene esos objetos, hacien con esos objetos lo que quiero. Por ultimo pasotodos eso al DOM */   							
																			   	




