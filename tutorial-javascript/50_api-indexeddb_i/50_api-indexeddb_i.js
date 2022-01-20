/*

															_____API's - API IndexedDB I - Introducción_____


 - Especificación oficial: 
   https://developer.mozilla.org/es/docs/IndexedDB-840092-dup



 - IndexedDB es una base de datos indexada y es una manera de almacenar datos de forma persistente en el navegador
   Funciona exactamente igual que "localStorage" ya que también sirve para guardar información en el navegador y esta seguira allí aun despues de cerrar el navegador.    

 - La diferencia principal entre idexedDB y localStorage, es que "localStorage" funciona para porciones muy pequeñas de datos como nombres de usuarios o imails,
   mientras que "indexedDB" sirve para guardar una GRAN CANTIDAD de datos como podria ser un perfil entero de usauario (nombre, contraceña, imagen de perfil, etc), a 
   lo que le dio like, etc 

 - Almacena pares "key-value" (osea, objetos). Los valores pueden ser objetos con estructuras complejas, las llaves pueden ser propiedades de esos objetos. Osea, en
   "indexedDB" guardamos un objeto que a su vez puede contener más objetos

 - La API de indexedDB es mayormente asíncrona. Como los datos los estamos guardando en el disco duro, es normal que el proceso no sea instantaneo. Por lo tanto 
   tendremos que estar escuchando los eventos para saber cuando se han terminado de guardar esos datos y actuar en concecuencia.

 - IndexedDB esta orientada a objetos. Y aque como se dijo más arriba, esta API guarda objetos. Y para acceder a el, seria exctamente igual a que como cuando queremos 
   acceder a un objeto propio de JavaScript, utilizando el nombre del objeto, punto ".", propiedad, punto va. Con la nomenclatura del punto o la nomebnclatura de las 
   llaves

 - Básicamente es una base de datos "NoSQL", esto siginifica que en vez de usar una tabla como en las bases de datos "SQL", esta usa objetos

 - IndexedDB usa "eventos DOM" para notificar cuando los resultados están disponibles, ya que no utiliza los "eventos comunes y corrientes a los que estamos 
   acostumbrados con el ".addEventListener()"
   Estos "eventos DOM" como su nombre lo indica, son eventos propios del DOM. Se utilizan para notificar la apertura de la base de datos o la grabacion de datos, etc 






   _____Creación:_____
   
 - Este es el orden de pasos para crear una base de datos "indexedDB"

   	1-  Crear la base de datos a través del obeto indexedDB y el método open()

   	2- Comprobar si la base de datos existe o tiene que ser creada a través del método onupgradeneeded()
       Al usar una base de datos "NoSQL" como lo es indexedDB, podemos acceder a una base de datos inexistente debido a que si dicha base de datos no existe, el 
	   sistemna crea automaticamente esa base de datos. 

 	3- Crear un "almacén" de objetos con el método createObjectStore()
       A los almacenes donde guardamos los objetos de la base de datos se les denomina en el caso de "indexedDB", almacenes.
	   En algunos frameworks podemos encontar a los almacenes nombrados como "colecciones", pero en sí son la misma cosa.
	   No hay limite a la hora de crear almacenes, podemos crear todos los que queramos 

	4- Una vez que esta todo lo anterior hecho, vamos a echuchar los eventos de "éxito" y "error" con los metodos onsucces() en caso de que todo haya salido bien, y
	   con onerror() en caso de haya habido algun error.
	   A la hora de crear la base de datos, es muy poco comun de que algo falle, pero por las dudas aun así ponemos onerrror()


 - Si queremos ver la base de datos, el proceso es el mismo que con la API "Web Storage" ya vista anteriormente. Simplemente vamos al "inspector de elementos" => 
  "Aplications" => Y luego seleccionamos la base de datos que creamos la cual nosotros mismo le pusimos nombre 
	






  _____Contenido extra para buscar:_____ 
	- Metodos:
		- getAll()						Para obtener todos los registros de la base de datos
		- clear()						Para borrar objetos del almacen
		- deleteDatabase()				Para borrar la base de datos
		- onBlocked()					Para bloquear bases de datos en los cambios de versión
		- createIndex()					Para la creación de indices en la base de datos					

	- Objetos:
		-  IDBKeyRange					Para la busqueda en la base de datos

    - Vercionado de bases datos

	- Libreria indexedDB:
	  https://dexie.org/
*/



const indexedDB = window.indexedDB								// Con esto estamos creando una constante para almacenar el acceso a indexedDB. TIP: Cada vez que declaro una constante y esta tiene el mismo nombre que una key que proviene del objeto "window", debo poner window al principio (de lo contrario me devolveria un error). Si usara otro nombre en la constante haria falta poner window antes que .indexedDB 

if(indexedDB){													// Estamos preguntando si la base de datos que acabamos de crear existe. Y en caso de existir, podremos empezar a trabajar con la base de datos
	let db														// Esmos creando esta constante "db" para guardar la base de datos. De momento no exite y no tengo nada que guardar porque no he creado la base de datos
	const request = indexedDB.open('tasksList')					// Este es el metodo que nos permite acceder a la base de datos, y admite dos parametros: El primero es el nombre a la base de datos a la que queremos acceder. Y como segundo parametro podemos pasarle la verción de esta base de datos, debe ser un numero entero y sin comas, como esta es la primera verción, va a llevar el numero "1", si nosotros creamos distintas verciones, el navegador creara distintas bases de datos  


	// Ya que hicimos la peticion, ahora utilizamos los metodos asincronos que nos da indexedDB
	request.onsuccess = () => {                             	// Para saber si todo salio bien  // Este evento solo se ejecuta a la hora de acceder a la base de datos por primera vez. Una vez que esto esta linkado, todo lo demas funciona con el evento que esta más abajo ".onupgradeneeded"
		db = request.result										// En el caso de que todo haya salido bien, vamos a guardar en la variable de base de datos
		console.log('OPEN', db)									// Este console.log() me va a mostrar primero la palabra "OPEN" y luego la base de datos
	}

	request.onupgradeneeded = () => {							// Para saber si la base de datos necesita ser creada. Puede ser que yo borre esa base de datos desde la consola, de ser así, se ejecutara esta este evento y creara la base de datos, luego la abrira con el evento ".onsuccess" (aunque el orden de estos dos eventos este al revez, funcionan de esta esta manera)  	 // También vamosa a usar este evento para crear todas las funciones de base de datos, a su vez de otras funciones como lectura y eliminación  				
		db = request.result 
		console.log('Create', db)								// Cuando se cree la base de datos me aparecera este mensaje

		const objectStore = db.createObjectStore('tasks')		// Aquí creamos nuestro "almacen de datos". Como parametro le tenemos que poner un nombre a nuestro almacen, en este caso lo llamamos "tasks" (tareas)
		const objectStore2 = db.createObjectStore('tasks2')		// Este es un segundo almacen. No hay limites en cuanto a la cantidad, podemos crear todos los que queramos
	}

	request.onerror = (error) => {								// Para saber si hay un error
		console.log('Error', error)
	}
}





