/*

														_____API IndexedDB III - Leer datos (Primera parte)_____


															
 - En este tutorial aprenderemos a leer los datos guardados en la base de datos de la API "IndexedDB". 
   Usaremos como referencia el codigo del apunte anterior, y en base a el le agregaremos nuevo contenido
 
 - Como es mucho contenido, dividi el video en dos apuntes. Debido a que hay tantos conceptos que se podrian mezclar
   	- La primera parte es esta. Aquí mostraremos todo el contenido teorico para poder leer los datos de una base de datos de la API IndexedDB
 	- En la segunda parte subiremos toda esa información al DOM


*/

const form = document.getElementById('form')
const task = document.getElementById('task')									// Agrego esta constante porque antes no la tenia

const indexedDB = window.indexedDB								

if(indexedDB && form){													
	let db														
	const request = indexedDB.open('tasksList')					

	request.onsuccess = () => {                             	
		db = request.result										
		console.log('OPEN', db)		
		
		readData()															 // Esta función que estamos llamando la creamos más abajo. Es necesario poner esta funcion aqui, en el "request.onsuccess". Esto se debe a que readData() es una función asincrona y por ende debe esperar a obtener la informacón necesaria para ejecutarse. De no llamar a esta funcion en "request.onsuccess" nos daria un error. Por lo tanto tendremos que leer la base de datos cuando tengamos la base de datos abierta, osea, cuando exista la base de datos, la leemos
	}

	request.onupgradeneeded = () => {							
		db = request.result 
		console.log('Create', db)								
		const objectStore = db.createObjectStore('tasks',{														
			keyPath: 'taskTitle'										
		})			
	}

	request.onerror = (error) => {								
		console.log('Error', error)
	}

	const addData = (data) => {											
		const transaction = db.transaction(['tasks'], 'readwrite')		
		const objectStore = transaction.objectStore('tasks')			
		const request = objectStore.add(data)
	}

	// Leer datos:
	const readData = () => {												// Esta va a ser nuestra función para leer los datos				
		const transaction = db.transaction(['tasks'], 'readonly')			// Al igual que cuando agregamos la información, aquí también necesitamos una "transacción", pero en este caso, nuestra forma de trabajar sera de "lectura" porque solamente queremos leer. Para ello, como segundo parametro utilizamos "readonly"   // Dato e color,: Si no pusieramos ese readonly daria exactamente igual debido a que es el valor por defecto y por ende se pone automaticamente

		const objectStore = transaction.objectStore('tasks')				// Esto es exactamente igual que como cuando agregamos información				

		const request = objectStore.openCursor()							// Esta es la petición de lectura. Para leer necesitamos un "cursor". Un cursor es algo que ya viene con IndexedDB y básicamenete lo que hace es recorrer cada uno de los objetos creados (información agregada) y devolviendonos ese valor; Osea, va leyendo los reguistros y nos va devolviendo la información. Para ello utilizamos el metodo .openCursor()

		request.onsuccess = (e) => {										// Una vez que habrimos el "cursor" tenemos que ver si todo salio bién. Para ello utilizamos este evento		
			//console.log(e.target)											// En este caso .target es el "cursor". Esto nos va a devolver un objeto "IDBReques", ahí adentro tenemos el metodo "result", en result tenemos nuestro cursor.   // Dato de color: El cursor solamente lee un dato/registro, para que lea los restantes tenemos que indicarselo. Para solucionar esto estan las lineas de codigo de abajo																																										

			const cursor = e.target.result									// Esto es el valor del cursor
			if (cursor)	{													// Tenemos que preguntar si "cursor" existe. Esta pregunta se hace porque al guardar el resultado, si ya termino de leer los datos, result viene a "nulo" porque ya no tiene nada más que leer. Por lo tanto cuando cursor no exista significa que ya a terminado de leer los datos 
				console.log(cursor.value)									// Esto nos va a devolver el valor del cursor. Pero solo nos dara el primer dato ya que se detiene y deja de leer
				cursor.continue()											// Con esto el cursor sigue leyendo y me devuelve el resto de los datos		
			}else{															// En caso de que "cursor" no exista, que devuelva este mensaje. Osea, cuando termine de leer	
				console.log('No hay más datos')			
			}							
		}																	
	}																		// Ahora solo nos queda llamar a esta misma función. Esta misma función debe ser llamada más arriba en el "request.onsuccess". Esto se debe a que readData() es una función asincrona y por ende debe esperar a obtener la informacón necesaria para ejecutarse. De no llamar a esta funcion en "request.onsuccess" nos daria un error. Por lo tanto tendremos que leer la base de datos cuando tengamos la base de datos abierta, osea, cuando exista la base de datos, la leemos

	form.addEventListener('submit', (e) => {							
		e.preventDefault()												
		const data = {													
			taskTitle: e.target.task.value,								
			taskPriority: e.target.priority.value						
		}
		console.log(data)												
		addData(data)													
	})  



}


