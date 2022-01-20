/*

														_____API IndexedDB II - Añadir datos_____



 - En este tutorial aprenderemos a añadir datos a la base de datos de la API "IndexDB"
   Usaremos como referencia el codigo del apunte anterior, y en base a el le agregaremos nuevo contenido
			
 - Vamos a hacer una página web la cual va a tener un <input> el cual le vamos a agregar tareas, y a estas tareas a su vez le vamos 
   a agragar un nivel de "importancia" 
   Al finalizar, esta iformación sera guardada en la base de datos IndexedDB

 
*/



const form = document.getElementById('form')

const indexedDB = window.indexedDB								

if(indexedDB && form){													// Por precaución, ademas de preguntar si existe "indexedDB", también preguntamos si existe "form" 							
	let db														
	const request = indexedDB.open('tasksList')					

	request.onsuccess = () => {                             	
		db = request.result										
		console.log('OPEN', db)									
	}

	request.onupgradeneeded = () => {							
		db = request.result 
		console.log('Create', db)								

		const objectStore = db.createObjectStore('tasks',{				// Tenemos que poner este objeto como segundo parametro para que no me salga un error. Básicamente cuando nosotros creamos reguistros en esta base de datos, nosotros necesitamos darle una "key" al dato de forma obligatoria. // Con esto generamos una key automaticamente. Esto es para que cada dato nuevo que ingresemos tendra su propia key/index en una lista 
			// autoIncrement: true										// Este es un generador de "keys" automaticas. Al poner este valor en "true" le estamos diciendo al navegador que queremos que la "key" la genere automaticamente. De esta manera la consola no nos devolvera un error. La key que va a generar es un numero. Que sea un numero no es muy conveniente cuando se habla de grandes cantidades de datos. Un ejemplo son las personas, una buena "key" seria su DNI (numero de documento), para ello usaremos la otra opción que esta abajo
			keyPath: 'taskTitle'										// keyPaht, traducido como "la ruta de la llave". Básicamente le tenemos que decir que propiedad del objeto va a ser la clave. Esto es muy util cuando hablamos de grandes cantidades de datos y debemos encontrar un dato rapidamente por su "key", ya que en el caso de una base de datos de ususarios podriamos usar como key el numero de documento. // En este caso usamos nuestro "taskTitle". Básicamente usamos de "key" el nombre de la terea 
		})			
	}

	request.onerror = (error) => {								
		console.log('Error', error)
	}

	const addData = (data) => {											// Con esta función vamos a añadir el objeto en la base de datos   // Recoredar que hay que fragmentar este proceso en 3 pasos  
		// Primer paso: Todas las operaciones en una base de datos indexada funciona a traves de una "transacción". Una transacción recibe 2 parametros: El "almacen" en el que vamos a trabajar y "de que modo vamos a trabajar".   // Básicamente le vamos a decir con que "almacen" vamos a hacer la "transaccion" y de que modo  
		const transaction = db.transaction(['tasks'], 'readwrite')		// Esta transacción, como lo dice más arriba funciona con dos parametros. El primero es el "almacen" que vamos a usar, y el segundo es "de que modo vamos a trabajar". Este segundo parametro admite 2 opciones principales: "readonly" que se utiliza para leer la base de datos, si no ponemos nada ese es el valor por defecto; y la segunda opcion es "readwrite" que sirve para escribir (es la opción que vamos a ausar en este caso). Hay más opciones que invito a investigar, pero estas dos son las principales  

		// Segundo paso: Abrir el almacen de datos.  // Básicamente hacemos la transaccion realmente
		const objectStore = transaction.objectStore('tasks')			// La constante "transaction" creada anteriormente, nos va a devolver un objeto. Y dentro de ese objeto tenemos el metodo "objetStore". Y este metodo recibe como parametro el "almecen" con el que vamos a trabajar, que en este caso es tasks

		// Tercer paso: Añadir los datos
		const request = objectStore.add(data)
	}

	form.addEventListener('submit', (e) => {							// Ponemos el formulario a la escucha para saber cuando se ha enviado 
		e.preventDefault()												// Esto es para evitar que este elemento haga eventos que tiene por defecto. Por ejemplo, recargar la página

		const data = {													// Este es el objeto que vamos a enviar a la base de datos
			taskTitle: e.target.task.value,								// En la key "taskTitle" vamos a poner como valor la informacion que esta dentro del evento "e". Más precisamente el "value" que esta dentro del elemento "task" <input> (la información que puso el usuario) 		
			taskPriority: e.target.priority.value						// En la key "taskPriority" vamos a poner como valor la informacion que esta dentro del evento "e". Más precisamente el "value" que esta dentro del elemento "priority" <select> (la opcion que selecciono el usuario) 				
		}

		console.log(data)												// Una vez que que el usuario pone la información y apreta el boton, se crea este objeto. Este mismo objeto es el que guardaremos en la base de datos 
		addData(data)													// Ahora llamamos al metodo creado anteriormente y le agregamos la información
	})  
}