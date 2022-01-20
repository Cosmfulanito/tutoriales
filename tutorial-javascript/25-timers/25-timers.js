/*

																_____Timers_____



 - Ir a los siguientes links para encontrar más información:
   https://developer.mozilla.org/es/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
   https://developer.mozilla.org/es/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
   


 - Como su nombre lo indica, son funciones que funcionan a modo de "temporizador"	
 
 - Su unidad es el milisegundo, que es igual 1seg/1000. Por ende, si queremos poner 1 segundo deveriamos escribir 1000

 - Básicamente es una función que se ejecutan despues despues de cierto tiempo.

 - Hay dos tipos principales de funciones timers:


			- Timeout:		- setTimeout(()=>{code}, delay-in-miliseconds)
							
								- Básicamente hace que nuestra función funcione como un timer ya que se ejecura despues de un determinado tiempo

								- Hace que se ejecute la función despues de delay.
							  
								- Se puede cancelar dicha funcion con clearTimeout(referencia)
								  Recordar que antes de hacerlo, la funcion setTimeout debe estar dentro de una variable/constante



			- Interval:		- setInterval(()=>{code}, delay-in-miliseconds)
			
								- Como su nombre lo indica, hace que nuestra función se ejecute constantemente en un intervalo de tiempo
								  Básicamente funciona igual que el setTimeout pero se repite de forma continua 

								- Si lo referenciamos mediante una variable/consante podemos pararlo con clearInterval(referencia)

								- Se puede cancelar dicha funcion con clearTimeout(referencia)
								  Recordar que antes de hacerlo, la funcion setTimeout debe estar dentro de una variable/constante

*/




// _____Timeout:_____


/* Uso comun: 
   Esta función me mostrara en la consola el mensaje "Hola!" despues de 2 segundos de hacer click en cualquier parte */
window.addEventListener('click', () => {
	setTimeout(() => {
		console.log('Hola!')
	}, 2000)										
})




/* Otro ejemplo de su uso:
   En este ejemplo estamos pusando la misma funcion anterior, pero en este caso llamamos a una funcion externa. Básicamente funciona igual que cualquier funcion que 
   llama a otra funcion no hay nada del otro mundo*/
const despedida = () => {
	console.log('Chau!')
}

window.addEventListener('click', () => {
	setTimeout(() => {
		despedida()
	}, 4000)
})




/* Cancelar la funcion setTimeOut:
   En este ejemplo vamos a cancelar esta funcion mediante un clearTimeout(referencia). Recordar que para que esto funcione, la función setTimeout debe estar dentro 
   una variable/constante */

// Ej: 1 
window.addEventListener('click', () => {
	const tiempoA = setTimeout(() =>{			// Como se puede apreciar, tuve que meter la funcion setTimeout 
		console.log('Me estan canselandoooo');
	}, 6000);
	clearTimeout(tiempoA);						// Ahora no va a ocurrir nada despues de los 6 segundos ya que cansele esta función. Si borrara esta linea de codigo la función se ejecutaria normalmente despues de 6 segundos 
});


/* Ej: 2 
   En este caso detengo una función setTimeout con otra funcion que contiene un clearTimeout. 
   Básicamente la funcion setTime se ejecutara automaticamente en un lapso de 8 segundos despues de que habra la página. Vamos a crear una segunda función 
   clearTimeout que mediante un evento onClick cancele a la primera función */

const tiempoB = setTimeout(() => {						// Esta función se va a ejecutar automaticamente sin que yo haga click. Osea se ejecutara 8 seg despues de que yo habra la página
	console.log('Me canselan de nuevooo');
}, 8000);

window.addEventListener('click', () => {				// Una vez que haga click se ejecutara la función clearTimeout que cancela la función setTimeout que esta dentro de la constante tiempoB. Recordar que tengo 8 segundos para hacer click para cancelarla antes de que se ejecute 
	clearTimeout(tiempoB);								
})







// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------







/* 
 _____Interval:_____ */

/* Ejemplo del uso de un setInterval generico: 
   Este setInterval ejecutara la siguiente función que tiene un mensaje cada 10 segundos */
const saludar = () => {
	console.log('Soy un intervalo que aparece cada 10 segundos :3');
}

setInterval(() => {
	saludar()
}, 10000);




/* SetInterval con contador:
   Básicamente a este setInterval le agregaremos un contador para saber cuantas repeticiones a lo largo del tiempo esta haciendo, todo esto en un intervalo de 12 
   segundos */
   	
let contador = 1;

setInterval (() => {
	console.log(`Soy intervalo n°${contador} que aparece cada 12 segundos`)
	contador ++;
}, 12000);




/* Cancelar un setInterval:
   Se cancela exactamenete igual que un setTimeout. Osea, con un timeClear  
   Para este ejemplo vamos a usar un intarvalo que se repite cada 14 segundos el cual muestra un mensaje. Para detenerlo vamos a hacer una segunda funcion onClick que
   tenga adentro un clearTimeout*/

const intervalo = setInterval (() => {													// Recordar que debemos poner la función setInterval dentro de una variable/constantepara que el clearTimeout funcione
	console.log(`Soy intervalo que aparece cada 14 segundos y me quieren cancelar`)
}, 1400);

window.addEventListener('click', () => {												// Ahora con tan solo hace click detengo el intervalo del setInterval
	clearTimeout(intervalo);
})
