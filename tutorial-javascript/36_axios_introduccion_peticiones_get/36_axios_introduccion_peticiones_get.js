/*

															_____Axios: introduccion - peticiones - get_____



 - Página de axios:
   https://github.com/axios/axios/




 - Axios es una "libreria" que tiene la misma función que "XMLHttpRequest" y "fetch". Osea, las tres herramentas hacen el mismo trabajo.

 - ¿Cuando elijo una en vez las otra dos? 
   Básicamente puedo usar lo que  quiera segun convenga. Pero se aconseja usar la libreria axios cuando en mi projecto solamente tengo que hacer peticiones a una 
   API rest (por ejemplo, para traer datos). Si ese es el unico objetivo del projecto se recomienda usar axios. Hasta junio del 2019 (fecha de publicación del video) 
   era la libreria más optmizada para ese trabajo (desconozco si sigue siendo así a día de hoy). Por otro lado, XMLHttpRequest ya esta obsoleto pero no esta demas
   conocerlo

 - Axios es una libreria basada en "promesas" para el cliente y para el servidor 															

 - Esta es una libreria que pesa unos 13k. Es decir que no pesa nada

 - Axios tiene transformación automatica cuando hacemos transformaciones JSON. 

 - Tiene compatibilidad con Internet explorer 11





 - Para tener acceso a la libreria de axios, hay que entrar al link de la página axios y en la parte de "Using unpkg CDN:", copiar el link que nos da. Luego ese
   link hay que pegarlo en una etiqueta <script> dentro del archivo .html. Recordar que dicha etiqueta siempre debe estar arriba de nuesto <script> principal en el 
   cual programamos para evitar que haya problemas de sobreescritura

 - Cuando llamamos a axios. Axios es un metodo que recibe un objeto. Funciona exactamenete igual que las peticiones POST que haciamos con fetch 
   "33_ajax_fetch_post.js".  
   Dicho objeto admite varias keys pero las fundamentales son dos: La primera es "method:", con la cual le decimos al navegador si vamos a usar el metodo GET o POST. 
   Y la segunda es "url:" le decimos al navegador mediante una dirección a cual API / base de datos acceder .
   Para saber cuales son el resto de keys/parametros ir al link de la página de axios que esta al principio del apunte
   

*/





/* Vamos a hacer el mismno ejercicio que hicimos en el apunte "32_ajax_fetch_introduccion_get" pero en este caso vamos a usar "Axios" en vez de "fetch"
   Lo que tenemos que hacer es pedirle toda su información a una API de nombres usuarios falsos. Ya hicimos esto anteriromente pero ahora lo haremos con axios */ 
   
   
// RECORDAR que primero debemos poner un <script> en el .html con el link de la libreria de axios para poder hacerlo funcionar  	
const button = document.getElementById('button');




button.addEventListener('click', () => {
	axios({														 	// Cuando llamamos a axios. Axios es un metodo que recibe un objeto. Funciona exactamenete igual que las peticiones POST que haciamos con fetch "33_ajax_fetch_post.js". 
		method: 'GET',												// Dicho objeto admite varias keys pero las fundamentales son dos: La primera es "method:", con la cual le decimos al navegador si vamos a usar el metodo GET o POST . Y la segunda es "url:" le decimos al navegador mediante una dirección a cual API / base de datos acceder  
		url: 'https://jsonplaceholder.typicode.com/users'
	}).then(res => {												// Ahora ponemos el metodo .then() porque esto es una promesa. Axios me devuelve la información de la API ya convertida de JSON a objeto automaticamente, ahorrandome varias lineas de codigo. Ahora solamente tengo que decirle al navegador que parte del objeto quiero, en este caso la "data" que es donde estan los usuarios para luego trabajar con esa información
		const list = document.getElementById('list');
		const fragment = document.createDocumentFragment()										
		for (const userInfo of res.data) {
			const listItem = document.createElement('LI')
			listItem.textContent = `${userInfo.id} - ${userInfo.name}`
			fragment.appendChild(listItem)
		}
		list.appendChild(fragment)
	}).catch(err => console.log(err))								// Este es el mensaje que devolveria en caso de que la URL este mal escrita. 
})																


