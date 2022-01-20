/*
		
															_____API's - Online / Offline_____



 - La API "Online / Offline" nos permite saber si el navegador esta "online" u "offline"															
   Esto es muy util para aplicaciones en tiempo real como pueden ser un "chat" o un "videojuego online" 


 - En este apunte vamos a hacer un cartel que salga desde arriba de la pantalla que nos muestre si estamos o no con internet. 
   - En caso de estar conectados al internet el cartel sera verde, en caso de no estarlo el cartel sera rojo
   - La animación del cartel saliendo desde arriba se hizo con CSS. 
   - Nosotros solamente le indicaremos al navegador si nuestra computadora tiene o no acceso a internet y en base a eso le agregaremos al elemento alert <p> una 
     clase (class="") correspondiete


 - TIP: Todos los navegadores tienen la opción de "trabajar de sin conección". Esto es para no tener que estar desconectando el interneta cada rato 	 
        - Firefox: "Boton de opciones" => Desarrollador web => Trabajar sin conección
		- Chrome: Inspector de elementos => Network => Hay un desplegable que dice no throttling, hay que hacer click ahí y cambiarlo por la opcion "offline" 
*/



const alert = document.getElementById('alert')

window.addEventListener('online', (e) => {							// Este evento se dispara cuando estamos "online" (conectados a internet)
	setAlert(1)														// Estamos llamando a un evento que se creara más abajo y le estamos pasando el valor "1"
})

window.addEventListener('offline', (e) => {							// Este evento se dispara cuando estamos "offline" (desconectados a internet)
	setAlert(0)														// Estamos llamando a un evento se creara más abajo y le estamos pasando el valor "0"
})

const setAlert = (status) => {										// Este evento lo unico que hace es agarrar el valor que se le paso ("0" o "1") y en base a eso, agregar una clase u otra
	alert.classList.remove('alert--online')							// En caso de que esta función se haya ejecutado antes y me haya agregado una clase, esto la quita
	alert.classList.remove('alert--offline')		
	
	// console.log(status)											// Me va a delvolver "0" o "1" dependiendo de cual de los dos eventos anteriores se ejecuto
	status === 0 ?													// Este es un operador ternario (ya visto anteriormente, funciona igual que un if). En caso de que "status" sea cero "0" (el internet este deconectado) que el navegador haga una cosa, caso contrario que haga otra  
		setTimeout(() => {											// A palabras de Dorian, el setTimeOut es importante utilizarlo en animaciónes. Esto es porque le quitamos una clase que tiene una animación y ahora se la vamosa añadir. Entonces para añadir la clase, como sucede muy rapido, si no ponemos un setTimeout() no va a llegar a hacer el cambio y producirse la animación 
			alert.textContent = "Upss, it seem you' re offline"
			alert.classList.add('alert--offline')					// Aquí le agregamos la clase (class="") "alert--offline" al elemento "alert" <p> 
		},100)														// Este es un setTimeout() de 100 milisegundos. Lo suficientemente rapido como para que no se note y a su vez como para que el codigo funcione
		:
		setTimeout(() => {											// Caso contario, que al elemento "alert" <p> le agregue el siguiente texto y clase (class="")	
			alert.textContent = "Great! You're online again"
			alert.classList.add('alert--online')
		},100)
}