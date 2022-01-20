/*

														_____Debugging - Depurar código_____


												

 - El "debugging" o tambien llamado debugear/depurar el código es el proceso de encontrar y corregir errores de programación (bugs)														

 - En este apunte aprendereos a depurar con la consola del navegador. 
   Las opciones y herramientas que nos brinda la consola a la hora de depurar son tantas que no van a ser vistas todas en este apunte. Por ende se invita a 
   investigar a cerca de este tema  

   	- Para ello tendremos que ir al inspector de elementos y hacer click en la pestaña "Depurar" (Firefox) o en "Sourses" (Chrome)

	- A la izquierda se mostrara una carpeta con archivos. Esos son los archivos que nosotros creamos para nuestra página web. Debemos ir al archivo .js  
	  Esto nos mostrara nuestro codigo JavaScrip

	- Breakpoints: (Puntos de ruptura)
		- A la derecha de nuestro codigo tenemos algo llamado "Breakpoints" o "Puntos de ruptura" (el nombre varia segun el navegador). Estos puntos de ruptura sirven 
		  para detener la ejecución del codigo donde nosotros queramos 
	      A la izquierda de nuestro codigo, tenemos cada linea de codigo enumerada. Al hacer click ahí, lo que hacemos es crear un punto de ruptura en esa linea en 
	      especifico. Esto hace que el codigo se ejecute, pero llegado a ese punto la ejecución se pausara. Osea, el programa se detendra en ese punto
	      Nosotros podemnos poner tantos puntos de ruptura como queramos

	    - Si hay una variable que ya fue ejecutada y ponemos el mouse por encima, nos va a decir el valor que tomo la variable. Si dicho valor esta entre comillas ""
	      siginifica que es un string (texto). 	  
		  	Ej: "5"  	Este no es un 5 verdadero, sino un 5 del tipo string. De no saber esto, me puede ocacionar problemas a la 
		  				hora de hacer cuentas

	- Watch: (Vigilar expreciones)
		- A la derecha del codigo hay una pestaña llamada "Watch" o "Vigilar expreciones" (el nombre varia segun el navegador). Dependiendo en el punto de ejecución 
		  del programa (utilizando previamente el Breakpoint), dentro de esa pestaña podemos escribir el nombre de una variable y obtener su valor. Esto es 
		  extremadamente util para saber si el valor que nos devolvio el <input> es un "string" o con un "number" 

		- Si escribimos el operador "typeof" y luego la variable, nos devolvera el tipo de la variable. 
		 	Ej1: typeof numerin    => 	"number"
			Ej2: typeof palabrin   =>   "string"

	- Scope: (Ámbitos)		
		- A la derecha del codigo hay una pestaña llamada "Scope" o "Ámbitos" (el nombre varia segun el navegador). Esto nos dice todas las variables que tenemos 
		  disponibles y su valor dependiendo el punto de ejecución del codigo dependiendo del Breakpoint

	- Event Listener Breakpoints: 
		- A la derecha del codigo hay una pestaña llamada "Event Listener Breakpoints". Básicamente es un Breakpoint para eventos de escucha. Dentro de esa pestaña 
		  hay un desplegable que al hacer click me mostrar todos los eventos de escuch a los cuales les puedo aplicar un Breakpoint







 - Como practica vamos debugear una página web que sirve para calcular la suma de dos numeros. 
   El problema de esta página web es que en vez de sumar los dos numeros, los concatena.   Ej: 2 + 5   ==>   25

 - Obviamente el problema viene porque los input devuelven texto en vez de numeros. Por ende los numeros 2 y 5 que me devolveriastarian en formato texo. Al sumarlo 
   no se estarian sumando numeros, se estan concatenando textos 

*/








// Este original que funciona mal
// const form = document.getElementById('form')
// const resultElement = document.getElementById('result')

// form.addEventListener('submit', (e) => {
// 	e.preventDefault()
// 	if (e.target.number1.value != '' && e.target.number2.value != ''){
// 		const number1 = e.target.number1.value
// 		const number2 = e.target.number2.value
// 		const result = number1 + number2
// 		resultElement.textContent = `${number1} + ${number2} = ${result}`

// 		e.target.reset()
// 	}
// })


// Codigo depurado: 
const form = document.getElementById('form')
const resultElement = document.getElementById('result')

form.addEventListener('submit', (e) => {
	e.preventDefault()
	if (e.target.number1.value != '' && e.target.number2.value != ''){
		const number1 = parseInt(e.target.number1.value)
		const number2 = parseInt(e.target.number2.value)
		const result = number1 + number2
		resultElement.textContent = `${number1} + ${number2} = ${result}`

		e.target.reset()
	}
})