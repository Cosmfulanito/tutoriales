/*

														_____API File II: Cómo hacer una barra de progreso_____



 - En este apunte haremos una barra de progreso de dos maneras distintas:
   Las dos verciones hacen el mismo trabajo. Esta en nosotros eleguir cual de las dos nos parece más comoda para trabajar en un futuro 

   	- Con dos elementos: 			<div> + <span>				El <dib> seria la barra de progreso y el <span> que tiene dentro seria el progreso															

   	- Con un solo elemento:			<div>

 

 - Eventos:
	- progress				Este evento nos permite controlar el progreso de la subida de un archivo							







 - Haremos lo siguiente: Primero subiremos un archivo como aprendimos en el apunte anterior y en base a eso crearemos las 2 verciones distintas de una barra de 
   progreso para ver como se esta cargando el archivo. 
 
 
 
*/


const fileInput = document.getElementById('file');



// - Barra de progreso con "2 elementos":
const progress = document.getElementById('progress')

fileInput.addEventListener('change', (e) => {
	const file = e.target.files[0]
	const fileReader = new FileReader()
	fileReader.readAsDataURL(file)

	fileReader.addEventListener('progress', (e) => {								// Este evento nos permite controlar el progreso de la subida de un archivo    // El problema de este evento es que no llega al 100% de carga (Esto ocurre en algunos navegdores como Firefox). Para ello, luego usaremos el evento que esta más abajo	
		//console.log(e)															// Este console.log() nos devuelve información a cerca de la subida del archivo. Lo que nos interesa a nosotro de toda esa información son las propiedades "loaded" y "total"
		// console.log(e.total)														// Me dice que tan grande es el archivo que acabamos de subir
		// console.log(e.loaded)													// Me dice cuanto lleva de carga el archivo que acabamos de subir

		// Sabiendo esto, ahora solamente tenemos que hacer una regla de 3 simples poder sacar el porcentaje descargado. Donde el total el igual al 100%
		//console.log((e.loaded * 100) / e.total)									// Esto me devolvera multiples console.log() con el porcentaje de carga del archivo
		progress.style.width = `${Number.parseInt((e.loaded * 100) / e.total)}%`	// Esto va a cambiar el valor de la propiedad "width" del progres/<span> en el CSS. Este valor que es un porcentaje, va a ir en aumento a medida que abanza la carga del archivo. De esta manera se logra el el efecto de carga
	})																				// El problema de este evento es que no llega al 100% de carga (Esto ocurre en algunos navegdores como Firefox). Para ello usaremos el evento de que esta más abajo

	fileReader.addEventListener('loadend', () => {									// Este evento se ejecuta solamente cuando se termina de cargar el archivo. Osea, cuando llega al 100% 
		console.log('Termino de cagar')
		progress.style.width = '100%'												// Esto es lo mismo que lo anterior. Pero en este caso le decimos al navegador que cuando se ejecute este evento, que todo el tamaño del <span> sea del 100%. Esto es necesario porque como se dijo más arriba, el evento anterior a este en navegadores como firefox solamente carga hasta el 99% sin llegar al 100%, esto produce que la barra de carga nunca llegue hasta el final. Pero con este evento eso se soluciona
	})
})





/* - Barra de progreso con "un solo elemento":
     En el .css de la parte de este segundo metodo se muestran cosas que no vi, pero que aparentemente se vieron en la verción vieja del curso de CSS. Tener esto en 
     cuenta porque hay cosas qe hay que revisar de ahí de las cuales no entiendo nada 
     Salvo por eso y por algun que otro cambio, todo es similar a lo anterior*/ 
    

const root = document.documentElement												// Necesito acceso a las variables de .css. Esta constante es la raiz del archivo 	

fileInput.addEventListener('change', (e) => {
	const file = e.target.files[0]
	const fileReader = new FileReader()
	fileReader.readAsDataURL(file)

	fileReader.addEventListener('progress', (e) => {								
		root.style.setProperty('--bar-width', `${Number.parseInt((e.loaded * 100) / e.total)}%`)			// Con esto cambio los valores del CSS
	})	

	fileReader.addEventListener('loadend', () => {									
		root.style.setProperty('--bar-width', '100%')				
	})
})






//---------------------------------------------------------------------------------------------------------------------------------------------------------------------





/* - Barra de progreso propia: 
   - Como ejercicio, voya hacer mi propia barar de progreso utilizando la barra de "2 elementos" como referencia. Esta barra tendra como particularidad que al 
     terminar de cargar, se volvera verde 
   - Básicamente es lo mismo que la barra de "2 elementos", pero cuando la carga llega al 100% al <pan> le agrego un atributo class="" que lo vuelve verde. Así de 
     simple  */
const progress3 = document.getElementById('progress3')

fileInput.addEventListener('change', (e) => {
	progress3.classList.remove('full-progress')											// Al comenzar, el navegador borra del <span> la clase "full-progress" (atributo que vuelve verde al <span>). Si es la primera vez que se ejecuta no borrara nada porque no habra nada que borrar (ya que este atributo se agrega al <span> más abajo). De no poner esto, cuando se ejecute por una segunda vez, la barra estaria verde mientras se carga									

	const file = e.target.files[0]
	const fileReader = new FileReader()
	fileReader.readAsDataURL(file)

	fileReader.addEventListener('progress', (e) => {																	
		progress3.style.width = `${Number.parseInt((e.loaded * 100) / e.total)}%`	
	})																				

	fileReader.addEventListener('loadend', () => {									
		progress3.classList.add('progress', 'full-progress')							// Cuando se cargue completamente el archivo, se le agregara la clase "full-progress" al <pan>, esto hara que la barra se vuelva verde
	})
})
	 
