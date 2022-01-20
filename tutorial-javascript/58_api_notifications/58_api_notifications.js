/*

														_____API's - Notifications_____



 - Link con información para profundizar más en el tema:
   https://developer.mozilla.org/es/docs/Web/API/notification 


   

 - ¿Que es una notificación?
   Una notificación son esos mensajes que nos aparecen normalmente a la derecha cuando el navegador quiere hacer algo en nuestro equipo	




 - En este apunte haremos una página web la cual constara solamente de de un boton. La primera vez que lo pulsemos nos aparecera una notificación peguntandonos si
   queremos recibir notificaciones. Una vez hecho click en aceptar, de ahi en adelante cada vez que hagamos click en ese boton, nos aparecera una notificación
   personalizada por nosotros.
   Recordar que estas notificaciones por algun motivo que desconozco no aparecen en Opera. Se recomienda usar otro navegador 
   
 - Tip: El primer cartel que nos saldra es si aceptamos o no recibir notificaciones. Una vez que hagamos click en aceptar o en cancelar ese cartel no volvera a 
        aparecer. Si queremos que aparezca de vuelta, tenemos que hacer click en el icono que esta al lado de la URL de nuestra página web, ahí aparecera texto 
		llamado "notificaciones" y al lado tendra un desplegable con varias opciones, hay que hacer click en la opcion "preguntar (predeterminado)"       

*/


const permissions = document.getElementById('permissions')

permissions.addEventListener('click', () => {
	//Notification.requestPermission()									// Notification es un objeto que trae el navegador   // .requestPermission() es un metodo para perdir permiso para mostrar notificaciones	// Ahora cuando el usario haga click en el boton le saldra una notificacion para confirmar si quier o no recibir notificaciones. En caso de que el usuario haga click en "Aceptar", le llegaran notificaciónes          
	
	// Sabiendo eso, para poder mostrar notificaciones tendremos que tener permiso, entonces lo que haremos es preguntar si tenemos ese permiso 
	if(Notification.permission !== 'granted'){							// Notification.permission tiene 3 estados: "default" es el estado que tiene el navegador por defecto; "denied" es denegado; "granted" es permitido  // Básicamente le estamos preguntando si el estado es diferente a "granted" (permitido)  
		getPermissions()												// En caso de que el estado sea distinto a "granted" llamamos a esta función. La función getPermissions(), esta función sera declarada más abajo, es para "obtener permiso"
	}else {
		notify()														// En el caso de SI tengamos permiso, llamamos a la función notify(), esta función sera declarada más abajo
	}
})

const getPermissions = () => {
	//Notification.requestPermission()									// Notification es un objeto que trae el navegador   // .requestPermission() es un metodo para perdir permiso para mostrar notificaciones	// Ahora cuando el usario haga click en el boton le saldra una notificacion para confirmar si quier o no recibir notificaciones. En caso de que el usuario haga click en "Aceptar", le llegaran notificaciónes          
	Notification.requestPermission()									// Esto lo que hace es devolver una promesa. Por ende necesitamos usar un .then() y un catch()
	.then(res => console.log(res))
	.catch(err => console.log(err))
}

const notify = () => {													// Esta es la función de notificación
	const options = {   												// Este objeto son las opcines que utilizaremos como segundo valor de parametro para el "cartel de notificacion" que crearemos más adelante. Básicamente son lás opciones del cartel de notificación    
		body: 'Que te parece este cartel, wachin?',						// Este es el cuerpo de la notificación
		icon: 'assets/icons/world.png',									// Esto nos permite poner un icono
		data: 'Información extra',										// Esta es información extra, no se vera en el cartel, pero si en otros lados como en un console.log() 
		tag: 'notification demo'										// Estas son las etiquetas que se le pueden poner al cartel de notificación. No se que hace porque lo explico por arriba y no vi ningun cambio
	}	
	const notification = new Notification('Hola Nikin!', options)	 	// Esto recibe 2 parametros. El primero es el "titulo". El segundo parametro es opcional y consta de opciones para la notificacion, para que funcione hay que crear un objeto con anterioridad

	console.log(notification.data)										// Esta es la forma de acceder a la key "data" de "options"


	console.log(notification)											// Esto nos brinda toda la información de la notificación. Podemos trabajar	con esa información. Por ejemplo, nos dice que el cartel consta de 4 eventos con los que podemos hacer cosas 					
	notification.addEventListener('close', () => {						// Este es un evento de los 4 eventos disponibles del cartel de notificación. En este caso, este evento se dispara cuando cerramos el carte. Al hacerlo aparecera el siguiente cartel en la consola 
		console.log('Se cerro el cartel')
	})
	notification.addEventListener('show', () => {						// Este es otro ejemplo de un evento para un cartel de notificación. En este caso, este evento se dispara cuando se muestra el cartel. Cuando ocurra esto, aparecera el siguiente mensaje en la consola
		console.log('El cartel se mostro')
	})
}