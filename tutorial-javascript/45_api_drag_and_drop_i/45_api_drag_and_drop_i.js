/*

															_____API's - Drag & Drop I_____



 - Esta API nos permite agarrar y arrastrar cosas por la pantalla de nuestro navegador

 - Esto es bastante util ya que podemos hacer cosas como mover una imagen y que luego quede posicionada en un lugar nuevo, reordenar contenido, subir una imagen al servidor arrastrandola, etc




 - Existen dos partes principales en esta API las cuales son: "El objeto a arrastrar" y "la zona donde vamos a dejarlo"

 - Para controlar estas acciones tenemos varios "eventos" para cada una de las partes:
   (RECORDAR que dichos eventos se usan con el .addEventListener())
 
		Objeto a arrastrar:
			- dragstart 			Se dispara al comenzar a arrastar
			- drag	 				Se dispara mientras arrastramos
			- dragend 				Se dispara cuando soltamos el objeto 


		Zona de destino:
			- dragenter				Se dispara cuando un objeto entra en la zona de destino
			- dragover				Se dispara cuando un objeto se mueve sobre la zona de destino
			- drop					Se dispara cuando soltamos un objeto en la zona de destino. Recordar que para que este evento funcione, tambien debe haber otro 
									evento "dragover" y ambos deben tener un  "evento.preventDefault()". ¿Por que? Ni idea, pero de lo contario da problemas
			- dragleave				Se dispara cuando un objeto sale de la zona de destino 	

*/

const sonrisa = document.getElementById('sonrisa')
const dropZone = document.getElementById('drop-zone')






// _____Objeto a arrastar:_____

/* _____dragstar_____
   Mostrara un mensaje cuando se comience a mover la imagen */
sonrisa.addEventListener('dragstart', () => {
	console.log('Drag Start')
})


/* _____drag_____
   Mostrara un mensaje mientras se mueva la imagen */
sonrisa.addEventListener('drag', () => {
	console.log('Drag')
})


/* _____dragdend_____ 
   Mostrara un mensaje cuando suelte la imagen. Puede ser dentro o afuera de la caja */ 
sonrisa.addEventListener('dragend', () => {
	console.log('Drag End')
})






// _____Zona de destino:_____

/* _____dragenter_____
   Mostrara un mensaje cuando algo este dentro de la caja */
dropZone.addEventListener('dragenter', () => {
	console.log('Drag Enter')
})


/* _____dragover_____
   Mostrara un mensaje cuando arrastremos algo por dentro de la caja */
dropZone.addEventListener('dragover', () => {
	console.log('Drag Over')
})


/* _____drop_____
   Mostrara un mensaje cuando dejemos algo dentro de la caja
   Recordar que para que este evento funcione, tambien debe haber otro evento "dragover" y ambos deben tener un  "evento.preventDefault()". ¿Por que? Ni idea, pero 
   de lo contario da problemas */
dropZone.addEventListener('dragover', (evento) => {
	evento.preventDefault()
})

dropZone.addEventListener('drop', (evento) => {
	evento.preventDefault()
	console.log('Drop')
})


/* _____dragleave_____
   Mostrara un mensaje cuando saquemos un objeto de la caja */
dropZone.addEventListener('dragleave', () => {
	console.log('Drag Leave')
})