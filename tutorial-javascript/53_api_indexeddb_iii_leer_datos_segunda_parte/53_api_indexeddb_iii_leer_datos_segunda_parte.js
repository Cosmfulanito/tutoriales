/*

														_____API IndexedDB III - Leer datos (Segunda parte)_____


															
 - Esta es la segunda parte del tutorial para leer los datos de una API IndexedDB

  - Como es mucho contenido, dividi el video en dos apuntes. Debido a que hay tantos conceptos que se podrian mezclar
   	- En la primera parte mostramos todo el contenido teorico para poder leer los datos de una base de datos de la API IndexedDB
 	- La segunda parte es esta. En este apunte subiremos toda esa información al DOM/página web
 
*/

const form = document.getElementById('form')
const tasks = document.getElementById('tasks')
								

const indexedDB = window.indexedDB								

if(indexedDB && form){													
	let db														
	const request = indexedDB.open('tasksList')					

	request.onsuccess = () => {                             	
		db = request.result										
		console.log('OPEN', db)		
		
		readData()															
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

		readData()																	// Volver a llamar a esta función es necesario para que cuando agregamos información, aparezca automaticamente en la página web. De lo contrario deberiamos actiualizar la página
	}

	
	const readData = () => {												
		const transaction = db.transaction(['tasks'], 'readonly')			
		const objectStore = transaction.objectStore('tasks')				
		const request = objectStore.openCursor()			
		const fragment = document.createDocumentFragment()							// Aquí estamos creando el "fragment" (tema ya visto anteriormente). Debe ir aquí arriba porque el "cursor.continue()"" lo que hace es volver a lanzar la petición "request.onsuccess" como si fuece un bucle, esto hace que todo lo que este adentro se borre y se vuelva a crear. De poner el "fragment" adentro del "request.onsuccess" lo que sucederia es que se destruiria y se volveria a crear, obviamente borrrando el contenido de adentro de por medio				
		
		request.onsuccess = (e) => {							
			const cursor = e.target.result									
			if (cursor)	{													
								
				const taskTitle = document.createElement('P')						// Básicamente estoy creando un elemento <p>
				taskTitle.textContent = cursor.value.taskTitle						// Le estoy diciendo al navegador que al elemento recien creado le ponga como texto el valor del "cursor", más especificamente el nombre de la tarea 
				fragment.appendChild(taskTitle)										// Pasamos este elemento al "fragment"

				const taskPriority = document.createElement('P')					//
				taskPriority.textContent = cursor.value.taskPriority				//
				fragment.appendChild(taskPriority)									//

				cursor.continue()											
			}else{																
				console.log('No hay más datos')	

				tasks.textContent = ''												// Esto es necesario para que cuando agregamos información, aparezca automaticamente en la página web. Basicamente el navegador lee el elemento "tasks" que ya tiene información y la vuelve a subir con el contenido nuevo. Al vaciar lo que tiene adentro antes de agregarle información, no me muestra contenido repetido en ela página web
				tasks.appendChild(fragment)											// Cuando el "cursor" termine de leer. Al elemento task <div> le pasaremos el fragment con toda su información
			}							
		}																	
	}																		

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


