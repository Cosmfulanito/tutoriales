/*

														_____Drag & drop II - Práctica guiada_____



- Atributos: 
	- draggable="" 				Segun MDN, esto es un atributo HTML enumerado que indica si el elemento puede ser arrastrado , usando el "HTML Drag and Drop API". 
	 							Puede tener los valores "true" o "false". Si este atriuto no se establece, su valor por default es auto, significando que el 
								comportamiento debe de ser el definido por default en el explorador.


	
 - Objetos: 
	- dataTransfer				Es nesesario usar este objeto en Firefox .Este objeto contiene toda la información del objeto que estamos arrastrando 			



- Metodos:
	- setData					Establece la información que queremos compartir

	- getData 					Establece la información que queremos obtener 




*/






/*
 - En este apunte haremo suna practica guiada en la cual utilizando la API Drag & drop, el objetivo es hacer una páguina similar a la app de "Trello". En la cual 
   habra dos listas, con tareas. 
   La idea es poder pasas las tareas de la lista de "Tareas pendientes" a la lista de "Tareas finalizadas" con tan solo mantener el click y arrastrarlas de una lista 
   a la otra. 												
 - Esto se aprecia mejor si usamos el navegador firefox */
const pendingTask = document.getElementById('pending-task')
const finishedTask = document.getElementById('finished-task') 


// Seleccionar el elemento de la caja de tareas pendientes
pendingTask.addEventListener('dragstart', (e) => {								// Cuando mueva algún elemento de la lista de tareas pendientes, se activa el evento
	//console.log(e.target);
	e.dataTransfer.setData('text/plain', e.target.id)							// Lo que estamos diciendo es que a dataTransfer le queremos compartir un "formato de texto plano" ('text/plan') y como información todo lo que este en "e.target.id"
	console.log(e.dataTransfer)													// Esto se aprecia mejor en el navegador firefox. En la consola nos debera aparecer un objeto y vamos a los nodos "item" => "0: DataTransferItem" nos aparecera información la información "kind: "string", type: "text/plan"". Esto significa que estamos compartiendo texto plano y que es del tipo string. Esta información solo aparece gracias a la linea de codigo de arriba, sin ella no habria información en este nodo  	
	console.log(e.dataTransfer.getData('text'))									// Con .getData('text') lo que hago es decirle que me de la informacion en formato texto. De este modo convierto todo lo anterior dicho en el contenido real. Osea, me va a devolver el id de la tarea que mueva de lugar. 		// De esta forma estamos compartiendo información entre el elemento que arrastramos, y en la zona donde vayamos a dejar ese dato/objeto es donde obtendremos esa información y la manipularemos para hacer lo que queramos

})



// Cambiar de color al elemento seleccionado en la caja de tareas pendientes
pendingTask.addEventListener('drag', (e) => {									// Con este evento, mientras arrastremos un elemento este cambiara de color. Este efecto sumamente visual para que la expreriencia del usuario sea más placentera 
	e.target.classList.add('active')
})

pendingTask.addEventListener('dragend', (e) => {								// Con este evento, cuando soltemos al elemento este volvera a su color original. Este efecto sumamente visual para que la expreriencia del usuario sea más placentera. Recordar que esto solo se aplica siempre y cuando lo volvamos a soltar en su propia caja de tareas pendientes
	e.target.classList.remove('active')
})



// Dejar el elemento en la caja de tareas completadas
finishedTask.addEventListener('dragover', (e) => {								// Como se vio en el apunte anterior. Es necesario poner el evento "dragover" para que luego el evento "drop" funcione 
	e.preventDefault()															// Esto también es necesario para que ele evento "drop" funcione
})												

finishedTask.addEventListener('drop', (e) => {									// Este evento se activara cuando se deje un elemento la caja de tareas completadas
	e.preventDefault()															// Como se vio en el apunte anterior. Esto es necesario para que este evento funcione
	const element = document.getElementById(e.dataTransfer.getData('text'))		// De esta forma con el .getData() estamos obteniendo el ID del elemento que estamos arrastrando y luego lo guardamos en la constante "element" 
	element.classList.remove('active')											// Cuando agarremos al elemento de la caja de tareas pendientes se va a volver blanco y cuando lo guardemos en la caja de tareas completadas seguira en color blanco. Con esto lo volvemos a poner en su color original 
	finishedTask.appendChild(pendingTask.removeChild(element))					// Cuando nosotros eliminamos el hijo de un contenedor, este metodo devuelve el elemento que hemos eliminado. Nosotros lo que hacemos es aprovechar ese elemento que se nos devuelve cuando lo borramos de la caja de tareas pendientes, y guardarlo en la caja de tareas finalizadas. Básicamente le estamos diciendo al navegador que me quite ese elemento de la caja de tareas pendientes y me lo agregue a la caja de tareas completadas
})








/* 
 - Como tarea tengo que hacer el proceso inverso. Osea, que las tareas que estan en la lista de tareas finalizadas pasen a la lista de tareas incompletas
 - Básicamente copie y pegue TODO el codigo de arriba de forma descarada. Solamente cambie la variable "pendingTask" por "finishedTask" y viceversa  */

// Seleccionar el elemento de la caja de tareas completadas
finishedTask.addEventListener('dragstart', (e) => {
	e.dataTransfer.setData('text/plain', e.target.id)	
})


// Cambiar de color al elemento seleccionado en la caja de tareas completadas
finishedTask.addEventListener('drag', (e) => {									
	e.target.classList.add('active')
})

finishedTask.addEventListener('dragend', (e) => {								
	e.target.classList.remove('active')
})


// Dejar el elemento en la cajade tareas pendientes
pendingTask.addEventListener('dragover', (e) => {								
	e.preventDefault()															
})												

pendingTask.addEventListener('drop', (e) => {									
	e.preventDefault()															
	const element = document.getElementById(e.dataTransfer.getData('text'))		
	element.classList.remove('active')											
	pendingTask.appendChild(finishedTask.removeChild(element))					
})


