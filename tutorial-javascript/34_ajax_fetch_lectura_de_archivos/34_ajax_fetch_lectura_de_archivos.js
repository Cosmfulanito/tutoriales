/*

															_____AJAX - Fetch - Lectura de archivos_____
															
							
															
 - En este apunte vamos a ver como leer archivos con la API de fetch															



 - Metodos: (Ya se mensionaron en el apunte "2_ajax_fetch_introduccion_get.js")

	- blob()		Binary Long Objets. Archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza cuando "NO" se necesita manipular el contenido y se va a trabajar
	 				con el archivo directamente. 
					Básicamente funciona como el metodo json() pero para este otro tipo de archivos. Esta es la forma en  el que fetch interpreta este tipos de 
					archivos. Este metodo es necesario para que el navegador pueda visualizar imagenes, videos, audio, etc 
					Tener en cuenta que ahora el archivo es un "objeto blop" el cual hay que conertir en formato valido para que el navegador lo pueda visualizar  

*/








const buttonImg = document.getElementById('buttonImg');
const buttonPDF = document.getElementById('buttonPDF');






/* _____Como visualizar una imagen con fetch:____
   En este caso vamos a usar un archivo local (una imagen en nuestra propia carpeta carpeta) en vez de un archivo de una API externa. Pero a modo de ejemplo funciona 
   exactamente igual
   Al hacer click en este boton, visualizaremos la siguiente imagen
   Tener en cuenta que la etiqueta <img> del .html no tiene el atributo src="". Por ende no carga ninguna imagen */
buttonImg.addEventListener('click', () => {
	fetch('assets/images/dog.jpg')											// Tecnicamente estamos haciendo una "peticion a un recurso". Sera un recurso local, pero no deja de ser un recurso 
	.then(res => res.blob())												// blob() básicamente funciona como el metodo json() pero para este otro tipo de archivos. Esta es la forma en  el que fetch interpreta este tipos de archivos. Este metodo es necesario para que el navegador pueda visualizar imagenes, videos, audio, etc 
	.then(res => {
		document.getElementById('imagen').src = URL.createObjectURL(res)	// URL.createObjectURL es un objeto nativo de JavaScript el cual si le pasamos información, lo que hace es crear un "link valido" para visualizar ese archivo. Por logica le vamosa a pasar la respueta del then() anterior que es un objeto blop que el navegador no puede leer. De esta forma se convierte en un link valido para el navegador Por ultimo en esta misma linea de codigo pasamos esa imagen al atributo src="" de la etiqueta <img> 
	})
})																			// Básicamente lo que hago aquí es obtener la imagen de su respectivo link mediante el fetch. Esto me devuelve una respuesta que sera ejecutada en el primer then()
																			// LUEGO (then()) convierto esa respuesta que contiene la imagen en un archivo blob. Esto es necesario devido a que fetch no puede interpretar archivos como imagenes audio, video. Por ende hay que convertilos en un formato compatible para fetch como blod. Esto me genera una respuesta que sera leida por el proximo then()
																			// LUEGO (then()) convierto ese esa respuesta que contiene el archivo blob en uno que pueda leer en nagedador. Para eso utilizo el objeto nativo URL.createObjectURL, el cual si le pasamos información, lo que hace es crear un "link valido" para visualizar ese archivo. Por logica le vamosa a pasar la respueta del then() anterior que es un objeto blop que el navegador no puede leer. De esta forma se convierte en un link valido para el navegador. Por ultimo en esta misma linea de codigo pasamos esa imagen al atributo src="" de la etiqueta <img> 




/* _____Como visualizar un pdf con fetch:_____ 
   El proceso es exactamente igual que con la imagenes */																			
buttonPDF.addEventListener('click', () => {
	fetch('assets/pdf/demo.pdf')
	.then(res => res.blob())
	.then(res => {
		document.getElementById('pdf').href = URL.createObjectURL(res)		// En este caso modifico el atributo href
	})
})


