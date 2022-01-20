/*

															_____API IndexedDB IV - Actualización de datos_____


 - Este tema es MUY complejo y se recomienda volver a verlo:
   https://www.youtube.com/watch?v=r1Fxm6QY9Zc&list=PLROIqh_5RZeBAnmi0rqLkyZIAVmT5lZxG&index=60
   https://www.udemy.com/course/draft/2834790/learn/lecture/18205832#overview


 - Atributos HTML:
	- data-*  				Segun MDN: Permite almacenar información adicional sobre un elemento HTML cualquiera sin tener que recurrir a artilugios tales como la 
							utilización de atributos no estándar, propiedades adicionales en el DOM															
							(Esto debe ser del tutorial viejo de HTML porque lo da por sabido)



 - En este apunte vamos aprender a como actualizar los datos guardados desde la página web usando el mismo boton de enviar y como para actualizar.  
   	- Recordar que usaremos como referencia el codigo del apunte anterior 
   	- A su vez habra elementos nuevos como los botones de Actualizar", "Borrar" (este ultimo le daremos funcionalidad en el apunte siguiente) que seran agregados en 
      este mismo archivo .js

*/










const indexedDB = window.indexedDB
const form = document.getElementById('form')
const tasks = document.getElementById('tasks')

if (indexedDB && form) {
    let db
    const request = indexedDB.open('tasksList', 1)

    request.onsuccess = () => {
        db = request.result
        console.log('OPEN', db)
        readData()
    }

    request.onupgradeneeded = (e) => {
        db = e.target.result
        console.log('Create', db)
        const objectStore = db.createObjectStore('tasks', {
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
        readData()
    }

	// Función que nos da la información del elemento que vamos a actualizar
    const getData = (key) => {														// Esta "key" es la key del dato que esta en la base de datos. En este caso es el propio nombre del dato. 
		// Toda esta operación es exactamente igual a la de añadir datos pero con una diferencia. En lugar de "añadir" datos, lo que vamos a hacer es "obtener" datos 
        const transaction = db.transaction(['tasks'], 'readwrite')					//
        const objectStore = transaction.objectStore('tasks')						//
        const request = objectStore.get(key)										// Aquí lo que estamos haciendo es obtener la "key"

        request.onsuccess = (e) => {												// Con esto evaluamos si ya termino
            form.task.value = request.result.taskTitle								// Quiero que los valores del formulario, tanto la tarea como la prioridad cambie
            form.priority.value = request.result.taskPriority						// Quiero que los valores del formulario, tanto la tarea como la prioridad cambie		
            form.button.dataset.action = 'update'									// Estamos cambiando el valor del atributo data-action="" del <button>. El valor paso de ser "add" a "update", ya que ahora no necesitamos agregar datos, sino actualizarlos  
            form.button.textContent = 'Update Task'									// Cuando queramos actualizar, cambia descripción del boton
        }
    }

	// Función que nos actualiza los datos.  
    const updateData = (data) => {													// Básicamente es casi lo mismo que addData, solo que cambiamos el metodo .add() (añadir) por .put()
        const transaction = db.transaction(['tasks'], 'readwrite')					//
        const objectStore = transaction.objectStore('tasks')						//
        const request = objectStore.put(data)										// Este metodo .put() lo que hace es que si el dato existe lo actualiza, y si no exite lo añade 

        request.onsuccess = () => {													// Con esto nos aceguramos de que los datos fueron actializados para proseguir con lo siguiente
            form.button.dataset.action = 'add'										//
            form.button.textContent = 'Add Task'									// El texto del boton vuelve a la normalidad cuando enviamos la información
            readData()																//
        }
    }

    const readData = () => {
        const transaction = db.transaction(['tasks'], 'readonly')
        const objectStore = transaction.objectStore('tasks')
        const request = objectStore.openCursor()
        const fragment = document.createDocumentFragment()

        request.onsuccess = (e) => {
            const cursor = e.target.result
            if (cursor) {

                const taskTitle = document.createElement('P')
                taskTitle.textContent = cursor.value.taskTitle
                fragment.appendChild(taskTitle)

                const taskPriority = document.createElement('P')
                taskPriority.textContent = cursor.value.taskPriority
                fragment.appendChild(taskPriority)

				// Boton de actializar: Todo esto lo copie tal cual estaba en el video
                const taskUpdate = document.createElement('BUTTON')					//
                taskUpdate.dataset.type = 'update'									// Tiene como valor 'update' ya que como su nombre lo dice, es para actualizar
                taskUpdate.dataset.key = cursor.key									// Esta "key" es la key del dato que esta en la base de datos. En este caso es el propio nombre del dato. Este parametro lo tendremos que enviar al boton del formulario para saber que información o que elemento es el que estamos actualizando    			
                taskUpdate.textContent = 'Update'									//
                fragment.appendChild(taskUpdate)									//

				// Boton de borrar:	(A este boton le daremos funcionalidad en el siguiente apunte)
                const taskDelete = document.createElement('BUTTON')					//
                taskDelete.textContent = 'Delete'									//
                fragment.appendChild(taskDelete)									//

                cursor.continue()
            } else {
                tasks.textContent = ''
                tasks.appendChild(fragment)
            }
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const data = {
            taskTitle: e.target.task.value,
            taskPriority: e.target.priority.value
        }


        if (e.target.button.dataset.action == 'add') {								// Vamos a preguntar si tenemos el atributo data-action="" con el valor "add" o "update"   // "e" seria el evento, "target" seria el formulario, "button" seria el boton naranja, "dataset" es el atributo personalizado y "action" es el valor de ese atributo personalizado. Le vamos a preguntar si todo eso es igual "add" y si es así le vamosa  agregar los datos  
            addData(data)															//
        } else if (e.target.button.dataset.action == 'update') {					// Esto es lo mismo que el if de arriba pero con "update"
            updateData(data)														//
        }

        form.reset()																// Con esto reseteamos el form para que el boton que tenia como valor 'update' en el atributo data-action="" a "add" como estaba antes
    })

    tasks.addEventListener('click', (e) => {										// Con esto llamamos a getdata() cuando hagamos click en el "boton de update"							
        if (e.target.dataset.type == 'update') {									// Con esto nos aseguramos de que hicimos click en el boton deseado y no en cualquier otra parte		
            getData(e.target.dataset.key)											// Esto le pasa a la función getData() el valor de la key a la cual le apretamos el "boton de update"
        }
    })
}