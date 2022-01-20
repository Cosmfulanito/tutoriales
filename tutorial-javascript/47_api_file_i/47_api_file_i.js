/*

																	_____API File:_____			



 - Esta API nos sirve para leer archivos que el usuario cargue en la web. Se pueden cargar archivos desde un <input> de tipo "file" o desde el objeto "DataTransfer" 
   de la API "Drag&Drop"



 - La interfaz más utilizada para interactuar con ella es "FileReader" 
   https://developer.mozilla.org/es/docs/Web/API/FileReader

 	- Esta interfaz tiene varios metodos, pero los más importantes son:

	 	- FileReader.readAsDataURL()					Comienza la lectura del contenido del objeto "Blod" (imagenes, video, audio. Básicamente cualquier tipo de 
														archivo que no sea texto), una vez terminada, el atributo "result" contiene un "data: URL" que representa los 
														datos del fichero	

		- FileReader.readAsText()						Comienza la lectura del contenido del objeto "Blod" (imagenes, video, audio. Básicamente cualquier tipo de 
			                                            archivo que no sea texto), una vez terminada, el atributo "result" contiene el contenido del fichero como 
														cadena de texto



 - Eventos:												
	- change				Este evento se dispara para los elemenentos <input>, <select>, y <textarea> cuando una alteración alteracion al valor de un elemento es
	                        confirmada por el usuario.
	
							

 - Tip: Si queremos subir más de un archivo al mismo tiempo en el <imput>, debemos poner el atributo "multiple". Todo esto en .html 							

*/



const fileInputText = document.getElementById('file-text')
const fileInputImg = document.getElementById('file-img')
const fileInputImgMultiple = document.getElementById('file-img-multiple')
const img = document.getElementById('img')
const text = document.getElementById('text')
const images = document.getElementById('images')



/* - Subir archivos de texto y acceder a su información:
     En esta practica queremos acceder al contenido de texto del archivo .txt que vamos a subir. Una vez hecho eso, simplemente mostramos ese contenido en nuestra 
     página web */
fileInputText.addEventListener('change', (e) => {					// El evento "change" se ejecutara cuando carguemos un archivo
	console.log(e)													// Esto nos mostrara mucha información que tiene el archivo. El problema es que a pesar de tener esa información, no tenemos acceso al contenido de ese archivo
	console.log(e.target.files)										// Este Aray nos dice que ficheros estamos subiendo. En este caso tenemos un Array con 0 como unico valor, devido a que solamente estamos subiendo un solo archivo. De subir más archivos al mismo tiempo, el array deberia mostrar más valores 

	const file = e.target.files[0]									// Es [0] por que este el el primer y unico valor en este Array.   // Básicamente estamos guardando toda información que mostramos en el console.log() de arriba en esta constante  // Devuelta, aqui tenemos acceso a toda la información del archivo pero no a su contenido. Para acceder a este contenido vamos a usar la interfas de "FileReader"
	
	// Acceder al contenido de los archivos subidos   
	const fileReader = new FileReader()								// Con esto tenemos acceso a todas las propiedades y metodos de "FileReader"
	fileReader.readAsText(file)										// Esto va a empezar a leer el archivo pero va a tardar un tiempo porque es un proceso "asincrono". Esto se debe a que mientras más pesado el archivo, obviamente más se va a tardar en leerlo. Para saber cuando termino de leer el archivo tenemos que añadirle un evento del tipo load

	fileReader.addEventListener('load', (e) => {			   	 	// Como el metodo .readAsText() es un proceso "asincrono" que va a tardar un tiempo, y como sabemos esto causa problemas. Para eso esta este evento. Básicamente este evento se ejecuta cuando el .readAsText() termine de leer todo el archivo  
		console.log(e)												// Ahora tenemos acceso a mucho más contenido que antes
		console.log(e.target.result)								// Con esto accedemos especificamente al texto del archivo .txt

		text.textContent = e.target.result							// Ahora se mostrara ese contenido de tetxo en nuetra página web
																	// RECORDAR que esto funciona para archivos de texto			
	})
})





/* - Subir un archivo del tipo imagen y acceder a su imformación:
     Este proceso es similar al anterior pero en este caso es leyendo imagenes.
     Lo puse en otro <input> porque sino se leía y se subia dos veces el mismo archivo y eso ocacionaba un error */

fileInputImg.addEventListener('change', (e) => {					

	const file = e.target.files[0]				

	const fileReader = new FileReader()							
	fileReader.readAsDataURL(file)									// 	En este caso uso .readAsDataURL() porque estoy cargando una imagen						

	fileReader.addEventListener('load', (e) => {			    
		img.setAttribute('src', e.target.result)					// Le estamos diciendo al navegador que a la etiqueta <img> le cree un atributo src="" y que tenga como valor el contenido de la imagen subida
	})
})




/* - Subir multiples archivos de tipo imagen al mismo tiempo: 
     Si queremos subir más de un archivo al mismo tiempo en el <imput>, debemos poner el atributo "multiple". Todo esto en .html */
fileInputImgMultiple.addEventListener('change', (e) => {

	const files = e.target.files									// Le saco el [0] porque queremos obtener el valor de todos los archivos, no solo del primero			

	const fragment = document.createDocumentFragment()				// Como son varias imagenes que tenemos que subir al DOM, primero tenemos que hacer un bucle y subirlas una a una al "fragment". Luego en un solo movimiento, subir todas esas imagenes al DOM 		

	

	for (const file of files){
		const fileReader = new FileReader()							// La logica dice que este objeto debe ir afuera del bucle. Pero el objeto FileReader() tiene la peculiaridad de que se destruye una vez que fue usado. Por ese motivo hay que meterlo dentro del bucle para que se vuelva a crear una y otra vez

		const img2 = document.createElement('IMG')

		fileReader.readAsDataURL(file)

		fileReader.addEventListener('load', (e) => {
			img2.setAttribute('src', e.target.result)
		})
		fragment.appendChild(img2)
	}
	images.appendChild(fragment)

})