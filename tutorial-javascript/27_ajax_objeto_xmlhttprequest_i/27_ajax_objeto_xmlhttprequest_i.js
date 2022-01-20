/*

														_____AJAX - Objeto XMLHttpRequest I_____				




 - El video tutorial es muy complejo, se recomienda verlo nuevamente:
	  https://www.youtube.com/watch?v=Xk9ahBbmYRs&list=PLROIqh_5RZeBAnmi0rqLkyZIAVmT5lZxG&index=40





 - Se recomenda visitar los siguientes links: 
 	- Protocolo HTTP:   														
   	  https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto
	
 	- Códigos de estado de respuesta HTTP: 
	  https://developer.mozilla.org/es/docs/Web/HTTP/Status
														




 - Página para obtener APIS de prueba con información falsa. Esto sirve para hacer peticiones normales o peticiones AJAX: 
   Se recomienda entrar con Firefox, ya que con Opera hay partes de la página que se pierden
	  https://jsonplaceholder.typicode.com/	
	








 _____Obtener informacion de una API por medio de AJAX:_____	

 - Objeto: 				- XMLHttpRequest()  		- Este objeto es SUMAMENTE necesario para el funcionamiento de AJAX, ya que en el guardaremos toda la información 
 													  extraida de los servidores/APIS que necesitemos

													- La sintaxis para su creación es la siguiente:
													  	
														let xhr = new XMLHttpRequest;				"xhr" es la variable donde se guardara dicho objeto, lleva este 
													  												 nombre por convención
											

																									   
						- ActiveXObject()			- El objeto XMLHttpRequest() no es compatible con versiones antiguas de Internet Explorer (de hace 15 años atras)
											          y para solventar este problema existe esta alternativa. Seguramente no use nunca este objeto porque hay que 
													  estar completamente drogado para usar una vercion de 15 de antiguedad de Internet Explorer, pero nunca falta el 
													  enfermo. Pero por las dudas aquí tengo la herramienta

													- Para su sintaxis primero tengo que preguntarle al navegador mediante un "if" si soporta el objeto 
													  XMLHttpRequest(). En caso de ser una vercion antigua de Internet Explorer, la respuesta va a ser false. Ahí es 
													  cuando creo el objeto de reemplazo ActiveXObject()

													  	if (window.XMLHttpRequest) {
														let xhr = new XMLHttpRequest();
														} else {
														let xhr = new ActiveXObject("Microsoft.XMLHTTP");
														}
													    



 - ¿Como obtener la información de una API/servidor?

		.addEventListener('click', () => {													// En este caso creamos un evento onClick para  que nuestro navegador solicite la información de la api por medio de AJAX cuando hagamos clic
			let xhr = new XMLHttpRequest;													// Este objeto es SUMAMENTE necesario para el funcionamiento de AJAX, ya que en el guardaremos toda la información extraida de los servidores/APIS que necesitemos.	"xhr" es la variable donde se guardara dicho objeto, lleva este nombre por convención
			xhr.open('GET', 'link de la API/servidor');										// Esto sirve para acceder a la informacion de mi /APIservidor. En este caso tambien funciona como página web, pero en un caso real deberia poner la dirección del servidor donde estoy alojando toda la información. 					  												 
																							// Con todo esto logro COMUNICARME con la API/servidor
			xhr.addEventListener('load', (informacion) => {									// "load". Este evento se dispara cuando toda la información llega al evento. Osea, una vez que cargue todo, de lo contrario caragria por partes. "Informacion" es el nombre que decidi darle a esa variable, puede tener cualquier otro nombre 
				const nombreDeLaConstante = JSON.parse(informacion.target.response);		// "informacion.target.response" nos va a dar un montonazo de informacion, pero a nosotros nos interesa lo que este dentro del "target", más precisamente en el nodo "response". Response significa respuesta, y es toda la informacion que me brinda la API. El problema de esta informacion es que es del tipo "string" y tengo que convertitla en informacion del tipo "objeto" para poder trabajar con ella.   // JSON.parse() 	"JavaScript Object Notation". Esto convierte dicho Array en un formato JSON. Osea, a un formato de objeto.  // Guardamos esta informacíon/objetos en una constante para luego poder manipularlos a gusto. Básicamente en esta constante tengo una lista de usuarios y cada usuario es un objeto con valores propios  
				Funcion		EJ: console.log(dataJASON[0].email);							// Aquí creamos una función donde le decimos al navegador que queremos hacer con dicha información. En etse caso que nos devuelva el email del primer usuario  
																							// RECORDAR que todavia no recibi la informacion de la API/navegador, hasta ahora lo que hice fue solicitarla
			}	
			xhr.send();																		// Esto es obligatorio para que la API nos devuelva la información que le pedimos más arriba. Sin esto el AJAX no devuelve nada. 		
		}	



	- Osea, el orden es el siguiente:			1- Accedo a la API/base de datos		
												2- Le solicito la informacion que deseo 
												3- mediante xhr.send(); hago que la API/base de datos me devuelva toda esa información que le solicite
*/







/* - Como ejemplo practico, voy a obtener la información de una API de un tercero
   - Para ello vamos a usar la información de la siguiente página web: https://jsonplaceholder.typicode.com/users
     Básicamnete es una página que da APIS con informacion falsa para que el programador pueda hacer pruebas. En este caso son usuarios ficticios con su respectiva 
	 informacion personal
     (Es la sección de "usuarios" de la págína recomendada que esta más arriba en el apunte. Tambíen puedo elegir APIS con imagenes, comentarios, etc)  
   - TENER EN CUENTA que aquí va haber información extra para entender el funcionamiento de AJAX */ 

const botonA = document.getElementById('botonA');

botonA.addEventListener('click', () => {

	let xhr = new XMLHttpRequest;									// Este objeto es SUMAMENTE necesario para el funcionamiento de AJAX, ya que en el guardaremos toda la información extraida de los servidores/APIS que necesitemos			

	xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');	// Esto sirve para acceder a la informacion de mi API/servidor. En este caso tambien funciona como página web, pero en un caso real deberia poner la dirección del servidor donde estoy alojando toda la información

	xhr.addEventListener('load', (informacion) => {					// "load". Este evento se dispara cuando toda la información llega al evento. Osea, una vez que cargue todo, de lo contrario caragria por partes
		console.log(informacion.target.response);					// Aca nos va a dar un montonazo de informacion, pero a nosotros nos interesa lo que este dentro del "target", más precisamente en el nodo "response". Response significa respuesta, y es toda la informacion que me brinda la API 

		console.log(typeof informacion.target.response);			// "typeof" es un "operador" me dice que tipo de dato es lo que la API me esta devolviendo. En este caso me va  a devolver un "string", el problema es que yo necesito un "objeto" para poder trabajar. Por ende, ahora tengo que convertir ese string en un formato "JSON"

		console.log(JSON.parse(informacion.target.response));		// JSON.parse() 	"JavaScript Object Notation". Esto convierte dicho Array en un formato JSON. Osea, a un formato de objeto.  
		const dataJASON = JSON.parse(informacion.target.response);	// Guardamos esta informacíon/objetos en una constante para luego poder manipularlos a gusto. Básicamente en esta constante tengo una lista de usuarios y cada usuario es un objeto con valores propios  

		console.log(dataJASON[0]);									// Aquí estoy accediendo al primer objeto que representa al primer usuario en la lista de usuarios
		console.log(dataJASON[0].name);								// Aqui estoy accediendo especificamente al nombre del primer usuario  
		console.log(dataJASON[0].email);							// Aquí estoy accediendo especificamente al email del primer usuario  
	})

	xhr.send();														// Esto es obligatorio para que la API nos devuelva la información que le pedimos más arriba. Sin esto el AJAX no devuelve nada. 
																	// Osea, el orden es el siguiente:		 1- Accedo a la API/base de datos		2- Le solicito la informacion que deseo     3- mediante xhr.send(); hago que la API/base de datos me devuelva toda esa información
})






/* - Ejemplo del uso real de AJAX: 
   - Vamos a hacer exactamente todo lo anterior, pero en este caso vamos a hacer que AJAX nos devuelva cada objeto que representa a cada usuario de forma separada en el navegador en forma de elemento <li>  */

const botonB = document.getElementById('botonB');
const lista = document.getElementById('lista')

botonB.addEventListener('click', () => {
	let xhr = new XMLHttpRequest;

	xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
	
	xhr.addEventListener('load', (informacion) => {
		const dataJASON_2 = JSON.parse(informacion.target.response);

		for(usuarioInfo of dataJASON_2){							// Con este bucle "for of" recorremos la lista de objetos y a su vez nos devuelve a cada objeto por separado y a su vez creamos elementos <li> que van a guardar la información de cada objeto/usuario por separado				
			const listaItem = document.createElement('li');			// Tambien por cada vuelta de bucle estamos creando un elemento <li> (Item de lista) el cual guardaremos la información de cada objeto
			listaItem.textContent = `ID: ${usuarioInfo.id} --- Nombre:${usuarioInfo.name}`
			lista.append(listaItem);								// Ahora simplemnete guardamos cada elementi <li> dentro del elemento <list> del .html 
		}
	})
	xhr.send()
})


