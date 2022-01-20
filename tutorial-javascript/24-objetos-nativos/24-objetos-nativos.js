/* 

														_____Objetos nativos_____



 - Los objetos nativos como lo dice su nombre, son objetos que vienen de forma predeterminada en el navegador.
   Es importante conocerlos porque hay muchos de ellos que nos ayudan muchisimo a la hora de trabajar.		
   
 - Todos estos objetos son muy extensos y solamente se mostraran a modo de ejemplo algunos de los CIENTOS de metodos que tienen. Se recomienda ir a los links de cada 
   objeto para tener una vición más completa de cada uno. */

 




//    ----------------------------------------------------------------------------------------------------------------------------------------------------------------------






/*
 _____Objeto: window_____

 - Es el objeto "global". De él desienden todos los objetos.
 
 - Siempre lo estamos utilizando, pero no lo escribimos porque se entiende que lo estamos usando. El mismo navegador asocia lo que estamos haciendo al objeto window 
   de forma automatica  
 

 - Osea, es lo mismo decir: 	- console.log("Hola mundo")
								  window.log("Hola mundo")

								- document.getElementById()  
								  window.document.getElementById()

								- addEventListener('click', (evento) => {
								  	  console.log(evento)
								  })
								  window.addEventListener('click', (evento) => {
								 	  console.log(evento)
								  })
								

 */




//   ----------------------------------------------------------------------------------------------------------------------------------------------------------------------								  




/*
 _____Objeto: concole_____

 - Es el objeto que contiene la consola del navegador

 - Ir al siguiente link para más información:
   https://developer.mozilla.org/es/docs/Web/API/Console


 - Ej:			- console.log()						Me muestra lo que esta adentro de los parentesis, en la consola del navegador web. 

				- console.dir()						Funciona exactamente igual que un concole.log() pero solucionas problemas que este otro nos puede dar a veces. Hay ocaciones donde necesitamos desplegar un elemento del DOM y el console.log() no muestra dicho desplegable, en esos casos usamos console.dir() 

				- console.error()					Me muestra mensajes en la consola pero en rojo como si fuera un error. Sirve para avisarle al resto del equipo de un error para depurarlo

				- console.table()					Funciona como un console.log() pero se utiliza para visualizar cosas como "objetos" y "Arrays" ya que le da una visualización más clara  				
							
*/

console.error('Arregla el bug wachin!');


const objetoPersona = {
	nombre: 'Nikin',
	edad: 26,
	email: 'asd@gmail.com'
} 					  
console.table(objetoPersona);							  

let listaFrutas = ['manzana', 'naranja', 'pera'];
console.table(listaFrutas)






// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------





/* 
 _____Objeto: location_____
 
 - Es el objeto que contiene la barra de direcciones 

 - Ir al siguiente link para obtener más informacion:
   https://developer.mozilla.org/es/docs/Web/API/Location


 - Ej: 				- location.href						Nos devuelve la dirección de nuestra url. En este caso seria: http://127.0.0.1:5500/tutorial-javascript/24-objetos-nativos-y-timers/24-objetos-nativos-y-timers.html				
														También nos sirve para cambiar el valor de la URL desde JavaScript

					- location.protocol					Nos devuelve el protocolo de nuestra pagína web. Osea, nos sirve para saber si nuestra página "http", "https" o "ftp"  

					- location.host						Nos devuelve el dominio principal del dominio nuestra pagína web. Sin importar de que estemos dentro de una carpeta o subdirectorio. En este caso es 127.0.0.1:5500

					- location.pathname					Funciona al revés que "location.host". Ya que nos devuelve las carpetas o subdirectorios del dominio nuestra pagina web descartando el domini principal. En este caso seria: /tutorial-javascript/24-objetos-nativos-y-timers/24-objetos-nativos-y-timers.html  

					- location.hash						Es una forma de pasar parametros entre páginas. Un ejemplo de su uso es que podemos tener un solo html y en funcion del hash que pasemos, cargar una informacion u otra. Investigar más a profundidad 

					- location.reload()					Básicamente recarga la página. Normalmente se pone dentro de bucle if ya que de lo contrario se recargaria la página de forma infinita

					
 */


console.log(location.href);								// Nos devuelve la url de nuestra página web
// location.href = 'https://www.google.com/';			// Esta comentado debido a que cambia nuestra URL a la de google. Osea, en vez de habrirse esta pagína, se habre la de Google	 

console.log(location.protocol);

console.log(location.host);

console.log(location.pathname);

console.log(location.hash);

// location.reload();									// Esta comentado debido a que recarga la pagína infinitamente








// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------





/*
 _____Objeto: history_____

 - Trabaja con el historial de la pestaña con la que estamos navegando. Solamente dicha pestaña

 - Ir al siguiente link para más información:
   https://developer.mozilla.org/es/docs/Web/API/History_API
   

 - Ej de estos 3 metodos y una propiedad: 

 					- history.length					Me permite saber cuantas páginas hay en el historial de nuestra pestaña


					- history.back()					Nos redirecciona una página hacia atras del historia de nuestra pestaña. Osea, básicamente es como si hubiera hecho click en el boton "atras" del navegador (en caso de no haber una página anterior en historial, no hace nada)

					- history.forward()					Nos redirecciona una página hacia adelante del historias de nuestra pestaña. Osea, básicamente es como si hubiera hecho click en el boton "adelante" del navegador (en caso de no haber una página posterior en historial, no hace nada)

					- history.go(-n|+n)					Funciona exactamente que history.back() y history.forward(), con la diferencia de que me puedo redireccionar la cantidad de páginas hacia a atras o adelante que desee con tan solo poner un valor positivo o negatico. 		Ej1: history.go(-5)  =>  me redirecciona 5 páginas hacia atras 				Ej2: history.go(2)  =>  Me redirecciona 2 páginas hacia adelante



*/

console.log(history);						// Nos devuelve toda informacion hacerca del historia de la pesataña donde esta situada nuesta página. Osea, antes de entar a esta página, enta misma pestaña pude haber estado dentro otras 3 página. Esto me lo dice. Recordar qe esto solamente funciona con esta ventana en esta secion. Diferentes ventanas y diferentes seciones me devuelven diferentes resultados. No devuelve TODO el historial del usuario debido a que violaria los derechos de privacidad del usuario

console.log(history.length);				

// history.back()							// Tengo este metodo comomentado debido a que me redirecciona a la página que habrí anteriormente

// history.forward()						// Tengo este metodo comentado debido a que me redirecciona a una pagína que abri antes que esta (obviante volvi para atrás)

// history.go(-2)							// Tengo este metodo comomentado debido a que me redirecciona a 2 de páginas de distancia que habrí anteriormente
// history.go(2)






// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------






/*
 _____Objeto: date_____

 - Me permite trabajar con fechas y horas.

 - Ir a los siguientes links para encontar más información:
   https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date	
   https://www.w3schools.com/jsref/jsref_obj_date.asp

 - El objeto "date" tiene la peculiaridad de que para usarlo primero hay que instanciarlo. Osea, hay que crear el objeto "Date"
   Una vez hecho eso podemos usar todos los metodos que tiene 

 - Tener en cuenta de que este objeto cuanta a partir del cero y a su vez usa el canlendario anglosajon, el cuenta a partir del domingo. (Chequear esto porque creo 
   que lo arreglaron o por lo menos en mi zona no me cuenta a partir del cero)
   Osea: 	- Enero es igual a 0 y diciembre es igual a 11.
		 	- El calendario anglosajon comienza con el domingo, no con el lunes. Por ende domingo es igual a 0 y sabado a 6 
   Tip: Esto se soluciona con una simplemente sumando o restando un 1 


 - Ej:				- const date = new Date();			Aquí estamos creando el objeto Date para poder trabajar con el. Hacer esto es obligatorio de lo contrario este metodo no funciona
								
 					- getDay()							Me devuelve el día de en forma de numero. Osea, si hoy es lunes me va a devolver un 1 (Revisar esto porque el orden de los días anglosajones es diferente e incluso puede contar a partir del cero)

					- getDate()							Me dice en que numero estamos (en esta ocacion no cuenta a partir del cero). Osea, si es 23 de septiembre me devuelve el numero 23

					- getMonth()						Me devuelve el mes en forma de numero. Recordar que cuenta de atras en adelante. Osea, que enero es igual a 0

*/

const date = new Date();			// Aquí estamos creando el objeto Date para poder trabajar con el. Hacer esto es obligatorio de lo contrario este metodo no funciona

console.log(date);					// Me brinda información de la hora y fecha estandar de mi país. En este caso Argentina

console.log(date.getDay());	 		 

console.log(date.getDate());	 

console.log(date.getMonth());
console.log(date.getMonth()+1)		// Como los meses los cuenta a partir del 0, le sumo un +1 para que sea más intuitivo




