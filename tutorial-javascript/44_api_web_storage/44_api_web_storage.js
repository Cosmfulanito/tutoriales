/*

																_____API's - Web Storage_____



 - Web Storage es una API que permite guardar información en el dispositivo del usuario. De esta manera el desarrollador no tiene que usar una base de datos propia.
    												
 - Su funcionamiento es similar al de las "cookies", pero sin las limitaciones que estas tienen. Ya que se puede almacenar muchisima más cantidad de información en
   el dispositivo del usuario utilizando "Web Storage"
   
 - Básicamente, Web Storage guarda información en el dispositivo medianto el conjunto de "key: valor". Exactamente igual que un objeto de JavaScript o una cookie
   (las cookies funcionan exactamente igual)

 - RECORDAR que la información que guardamos siempre debe estar en formato String. Por ese motivo si guardamos un objeto, antes debemos transformarlo a string 
   mediante JSON.stringify() (metodo ya visto anteriormente)




 - Formas de almacenamiento:
 
		- sessionStorage		- Mantiene un área de almacenamiento sapearada para cada origen que esta disponible mientras dure la sesión de la página (mientras el 
								  navegador esté abierto, incluyendo recargas de página y reestablecimientos)
								  Osea, la información se guarda en el dispositivo del del usuario mientras el navegador este abierto. Cuando el navegador se cierre,
								  se borrara toda la información

		- localStorage			- Hace lo mismo, pero la información sigue guardada incluso cuando el navegador se cierre y se reabra. 
								  Osea, guarda la información permanentemente en el navegador. Esta información puede ser borrada pero se tiene que hacer de forma 
								  manual 								  

 		- Ambas formas de almacenamiento funcionan con el conjunto "key: valor" 



 - Metodos importantes:

		- .setItem('key', 'valor')				Asigna una "key: valor"				// Usando este metodo otra vez reutilizando una key ya ocupada pero cambiando su value, puedo actualizar el valor de la Key

		- .getItem()							Recibe como parámetro la key de la que queremos obtener el valor

		- .clear()								Borra toda la imformcion del "sessionStorage" o del "localStorage"  

		- .removeItem(key)						Borra una "key" especifica del "sessionStorage" o del "localStorage"

		- .key('number')						Dentro debe llevar un numero. Segun ese umero, me va a devolver su respectiva key								


 - Para poder apreciar donde se esta guardando toda esta información, dentro del navegador ir al: "inspector de elemento" => "Almacenamiento" => Luego debemos elegir 
   entre las opciones "Almacenamieto de sesión" (corresponde a sessionStorage) o "almacenamiento local" (corresponde a localStorage) 
   Esta opción por algun motivo no la encuento en el navegador de Opera, pero si esta en Firefox 		

*/



// En este ejemplo, cuando hagamos click en el boton de "save". Se guardara esta información en nuestro dispositivo 
// Recordar que para visualizar el almacenamiento hay que ir a la opccion "almacenamiento" del inspector de elementos
const form = document.getElementById('form')
const keys = document.getElementById('keys')

form.addEventListener('submit', (e) => {				// Este evento se ejecutara cuando el <form> envie información 
	e.preventDefault()									// Con esto cancelo los eventos por defecto del <form>. Ente ellos el de recargar la página

	// Guardar un información:
	sessionStorage.setItem('nombre', 'Nikin')			// Ahora esta la key "nombre" y el valor "Nikin" estan guardados en la memoria de la computadora, más precisamente en la "sessionStorage". Osea, en el almacenamiento de sesion. Como se dijo más arriba, puedo chequear esto mediante el "inspector de elementos" en la opción "almacenamiento"      


	// Guardar un objeto:								// RECORDAR que la información que guardamos siempre debe estar en formato String. Por ese motivo si guardamos un objeto, antes debemos transformarlo a string mediante JSON.stringify() (metodo ya visto anteriormente)		
	const mascota = {
		nombre: 'Gato',
		sonido: 'Miauuu' 
	}

	sessionStorage.setItem('mascota', JSON.stringify(mascota))
})




/* Como actividad vamos a agarrar los valores que tenemos en los <inputs> de la página web y convertilos en un conjuto "key: valor" para ser guardados en el 
   dispositivo. Esta información se guardara en elñ dispositivo cuando hagamos click en el boton "save". Luego en la "lista" <select> aparecera como nueva opcion
   el nombre de la nueva key que escribimos. Al hacer click en esta nueva opcion, aparecera al costado su respectivo "value" */ 
form.addEventListener('submit', (e) => {
	e.preventDefault()

	sessionStorage.setItem(form.key.value, form.value.value)			// Básicamente usamos como "key" el valor del <input> key, y usamos como "valor" el valor del <input> valor

	keys.innerHTML += `<option>${form.key.value}</option>`				// Esto crea una nueva opcion para la lista <select>. 

	form.reset()														// Basicamente borra toda la información ingresada en los <inputs>. Su unica función es estetica 
})

keys.addEventListener('change', () => {
	
	document.getElementById('infoValue').textContent = sessionStorage.getItem(keys[keys.selectedIndex].textContent)		// Básicamente le estamos diciendo al navegador que nos devuelva el "value" de la key que esta en la posicion opcion seleccionada de la lista. Y por ultimo que ese valor lo guarde en el textContent del elemento "infoValue". De esta manera esa informacion puede aparecer en la página web
})

