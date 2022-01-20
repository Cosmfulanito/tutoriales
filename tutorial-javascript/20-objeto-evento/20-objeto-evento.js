/*

																_____Objeto: "evento"_____


															
 - El objeto evento vive siempre y cuando haya un evento. No importa cual sea

 - Básicamente este objeto guarda toda la información de un evento en si. Desde que tipo de evento fue, hasta que elementos fueron involucrados

 - Su sintntaxis consiste en poner una palabra (cualquiera que sea) dentro del "callback" de un evento. Por arbitrariedad se utilizan las pabras "event", "ev" o "e". 
  Aunque cualquier otra palabra también es valida.
	Ej: elemento.addEventListener("click", (evento) =>{})



 - Recordar que entre todos los nodos de información que voy a obtener con el objeto "evento", el más importante es el llamado "target". Ya que con el podremos
   acceder a muchisima más información a cerca del evento que con otros nodos  

 - Recordar que la información que recojo de un evento, se aplica tanto para el elemento seleccionado como para sus elementos hijos. Incluso mediante el objeto 
   "evento" y el evento  "click" puedo acceder a informacion de hijos especificos de dicho elemento.
   Saber esto es muy util debido a que no tengo que crear un evento para cada uno de los elementos hermanos, con tan solo hacer uno para el elemento contenedor/padre, 
   tengo acceso a todos sus hijos. Un ejemplo real de esto es cuando se trabaja con formularios en una base de datos, ya que muy posiblemente tenga que trabajar 
   con miles de hijos y es inviable hacer un evento para cada hijo por separado


*/ 





// Elementos creados para trabajar con ellos más adelante
const input_1 = document.getElementById("input_1");
const input_2 = document.getElementById("input_2");
const input_3 = document.getElementById("input_3");
const galeria = document.getElementById("galeria");
const boton_1 = document.getElementById("boton_1");
const boton_2 = document.getElementById("boton_2");
const link_1 = document.getElementById("link_1");
const link_2 = document.getElementById("link_2");
const boton_3 = document.getElementById("boton_3")
const link_3 = document.getElementById("link_3")





// _____Obtener toda la informacion de un evento:_____ 

// Ejemplo con un input:													// En este caso, cada vez que pulsemos una tecla activaremos un evento. La informacion de dicho evento se guardara en el objeto "evento"
// Básicamente estamos accediendo a toda la informacion de este evento
input_1.addEventListener("keydown", (evento) => {							// Como se puede apareciar, desde la consola podemos ver toda la información del evento "keydown". Esta informacion es alcenada en el objeto "evento"
	console.log(evento);
})






/* 
   _____Acceder a informacion especifica de un evento:_____

 - Dentro de toda la información almacenada, podemos acceder especificamente a algo mediante el uso del metodo correspondiete. Mientras más ramificaciones tenga
   la el nodo con la información deseada, más metodos y propiedades tendremos que usar 
 - Dato de color. Con las APIs se trabaja exactamente igual


   Ej1: Que tecla fue pulsada																																				*/
input_2.addEventListener("keydown", (evento) => {							// En este caso estamos accediendo especificamente a la informacion de "key". Key es un valor entre todos los valores que hay en un evento. 
	console.dir(evento.key);												// La propiedad "key" guarda la información de que tecla fue pulsada. Básicamente le estamos pidiendo al navegador que nos diga que tecla fue pulsada
})

// Ej2: Acceder a algo mucho más especifico									/* Esto es un ejemplo de algo extremadamente especifico */
input_3.addEventListener("keydown", (evento) => {
	console.dir(evento.target.attributes[0].nodeValue);
})








/*
   _____Acceder a la información de un evento de cualquier elemento:_____ 

 - Los ejemplos anteriores mostraban como acceder a la información de un evento de un elemento especifico. Pero también se puede acceder a la información de 
   cualquier elemento sin especificar. Un ejemplo seria hacer click cobre cualquier elemento, sea cual sea, y obtener la información del evento click sobre ese 
   elemento. Esto es util porque podemos acceder a la informacion del evento del elemento que desiemos con tan solo hacer click sobre el, ahorrandonos tiempo de 
   escritura de codigo 

 - Su sintaxis es simple, simplemente tenemos que omitir poner el nombre de algun elemento 


   Ej: Haciendo "doble click" sobre un elemento cualquiera activaremos el evento "dblclick" y accederemos a la informacion de dicho evento  																*/
addEventListener("dblclick", (evento) => {										// Para acceder a la informacion de este evento, simplemente tendremos que hacer "doble click" en cualquier parte y dicha información aparecera en la consola 
	console.log(evento);
})








/*
   _____Parte N°2 del apunte:_____ 
 
   _____Objeto "evento" en elementos padres e hijos:_____

 - Recordar que la información que recojo de un evento, se aplica tanto para el elemento seleccionado como para sus elementos hijos. Incluso mediante el objeto 
   "evento" y el evento  "click" puedo acceder a informacion de hijos especificos de dicho elemento.
   
 - Saber esto es muy util debido a que no tengo que crear un evento para cada uno de los elementos hermanos, con tan solo hacer uno para el elemento contenedor/padre, 
   tengo acceso a todos sus hijos. Un ejemplo real de esto es cuando se trabaja con formularios en una base de datos, ya que muy posiblemente tenga que trabajar con miles 
   de hijos y es inviable hacer un evento para cada hijo por separado
   

   Ej: En este caso voy a acceder a la informacion del evento del <div> "galeria" y tambien unicamente a sus hijos a los cuales les haga click. Tambien voy a 
	   pintar unicamente los hijos a los cuales haga click  */ 
galeria.addEventListener("click", (evento) => {
	console.log(evento.target.textContent);										// Mediante el objeto "evento" y el evento click voy a acceder al textContent del elemento "galeria" con tan solo hacer click en el. En caso de hacer click en uno de sus hijos, voy a obtener el text content de unicamente ese hijo
	evento.target.classList.add("red");											// Mediante el objeto "evento" y el evento click voy pintar el elemento "galeria" con tan solo hacer click en el. En caso de hacer click en uno de sus hijos, voy a pintar unicamente a ese hijo
})









/*
   _____Parte N°3 del apunte:_____
 
   _____Cómo implementar un objeto "evento" sobre un elemento que reinicia la página:_____

 - Es posible que me encuentre en la situacion de que quiera acceder a la información de un evento que fue producido desde un elemento que reinicia la pagína (como
   en el caso de un <button>). Esto es un inconveniente debido a que no permite acceder a la información ya que me ademas de reiniciar la página, también reinicia 
   la consola donde me muestra dicha información. Osea, la informacion aparece unos milisegundos antes de que se borre debido al reinicio de la página
   
 - Una forma de evitar esto es utilizando la propiedad ".preventDefault()". Este es un metodo que tiene el objeto evento. Básicamente le estamos diciendo al evento 
   que no ejecute el evento que tiene dicho elemento por defecto. Osea, en estos casos estamos creando un evento que le prohibe al <button> ejecutar eventos que 
   tiene por defecto como enviar informacion o reiniciar la página. De esta manera podremos hacer click sobre ese boton y ver toda su informacion en la consola sin 
   que se nos reinicie la página																										
   
 - Esto tambien nos sirve si queremos evitar que se active el evento predeterminado de cualquier otro elemento. Un ejemplo de este uso seria en una etiqueta <a>, ya
   que evitariamos que dicho link nos redireccione a otra página  al suprimir su comportamiento/evento por defecto */
   										
 

/* Ejemplo de boton SIN  .preventDefault()
   Obviamente me va a reiniciar la página y no podre acceder a dicha información																			*/
boton_1.addEventListener("click", (evento) => {																				
	console.log(evento.target);
})

/* Ejemplo de boton CON .preventDefault()
   Gracias a esta propiedad puedo acceder a la informacion del evento sin temor a que se me reinicie la consola */
boton_2.addEventListener("click", (evento) => {
	evento.preventDefault();													// Esta es la forma de aplicar esta propiedad
	console.dir(evento.target)													// Ahora si podre ver esta información desde la consola ya que no se va a borrar cuando se reinicie la página  
})


/* Ejemplo del uso de un .preventDefault() en un Link: */
link_2.addEventListener("click", (evento) => {
	evento.preventDefault();													// Básicamente suprimimos el evento por defecto que tienen los links de enviarte a otra página. Osea, al hacer click en este link no ire a ninguna página
	console.log("Como se puede apreciar, el link NO TE ENVIO a la página de Google")
})








/*
   _____Parte N°4 del apunte:_____
   
   _____Como forzar un evento de forma automatica:_____  
   
 - Se le dice "forzar un evento" cuando cuando hacemos que un evento se ejecute de forma automática.
   Esto puede ocurrir de al iniciar la página (Ej: Le decimos al navegador que haga click en un enlace que nos redirige a otra página) o creando un evento que ejecuta
   a otro elemento (Ej: haciendo click en un boton ejecuto un evento que hace click en un link que nos redirige a otra página).

 - Su sintaxis es simple, tenemos que poner el elemento y luego el evento como si fuera un metodo. 
   Ej: metodo.dblclick() 

   
   Ej: Al hacer click en este boton se forzara el evento de forma automatica de hacer click en el Link a Youtube. Osea, si hago click en este boton automaticamente 
       se hara click en el link																																*/
boton_3.addEventListener("click", () => {										// En estos casos no es necesario usar el objeto "evento". Ya que en este caso no nos interesa acceder a información
	link_3.click();																// Esta es la forma de forzar un evento
})