/*

															_____API's - Match Media_____


 - Documentación oficial de esta API:
   https://developer.mozilla.org/es/docs/Web/API/Window/matchMedia															


 - Investigar que son las "Media Query" en CSS ya que este tema esta relacionado con eso. 
   Es más, dentro del archivo .css hay una "media query" 


 - Esta API nos permite implementar logica desde JavaScript a las expreciones "Media Query" del CSS
   Esto es sumamente util para hacer "páginas responsive"





 - En este tutorial haremos una página mediante la API "Match Media" que cambia el color del fondo segun el tamaño/resolución de la pantalla de nuestra página web 
   dependiendo si esta es mayor o menor a 400px. 
   Esto ya lo hace el archivo .css mediante el uso del "media query" que cambia el fondo de la página de blanco a negro dependiendo si el cancho de esta supera o no 
   los 400px. Nuestro objetivo es hacer esto mismo desde JavaScript con los colores naranja y azul

   TIP: Desde la consola poner resolucion de movil y luego jugar con el ancho de esta para poder trabajar más comodo

*/

// console.log(innerWidth)										// Esta es una herramienta que nos devuelve la resolución del ancho de la pantalla de nuestro navegador

const mql = matchMedia('(min-width: 400px)')					// Usamos "mql" como nombre de la variable por convención. Significa "Media Query List". Osea, una lista de Media Query    // matchMedia() es un metodo al cual hay que pasarle una "mediaQueryString". Esto es simplemente una media query de CSS. Cualquier media query valida en CSS es valida aquí. En este caso usmos exactamente la misma "media query" del .css (recordar que debe incluir los parentesis)  
// console.log(mql)												// Esto nos va a devolver un objeto con dos keys. La primera es "matches:", cuyo valor puede ser "true" o "false" dependiendo que si la resolución de la pantalla coincide con la media queri (en este caso es un minimo de 400px); La segunda key es "media:", la cual tiene como valor la media query a la que hace referencia, en este caso "(min-width: 400px)"  

const applyMatchMedia = mql => {								// Esta es una función que recibe a "mql". Estamos aplicando un "operador ternario" donde dependiendo de que si "mql.matches" es true o false, el fondo de la página web se volvera naranja o azul 
	mql.matches ?
		document.body.style.background = 'coral'				// Esta forma de ponerle estilos a la página ESTA MAL!!! Pero lo hacemos para aguilizar el proceso.    // La formA correcta seria quitando o agregando clases (class="") creadas en el .css  
		:
		document.body.style.background = 'royalblue'

	console.log(mql.matches)	
}

window.addEventListener('resize', ()=> {						// El evento "resize" se dispara cuando el tramaño de la página cambia. Básicamente cuando cambiemos el ancho del tamaño de nuestra página, depediendo si dicho ancho es menor o mayor a 400px, el fondo de la página sera azul o rojo respectibamente  
	applyMatchMedia(mql)})


window.addEventListener('DOMContentLoaded', () => {				// El evento "DOMContentLoaded" se dispara cuando apenas se carga la página. Osea, cuando la abrimos.   //  Al llamar a la función "applyMatchMedia(mql)", hago que los colores que cree en Javascript se pongan automaticamente en la página. De lo contrario, al abrir la página esta seria blanca o negra segun el .css.     // Podria simplemente llamar a a función sin usar este "evento de escucha", pero según Dorian hacer esto es más seguro
	applyMatchMedia(mql)
})	
											