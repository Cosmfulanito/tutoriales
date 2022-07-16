
// _____API del tiempo:______

// fetch('http://api.openweathermap.org/data/2.5/weather?q=arrecifes&appid=e34c50149015d9cc83fa642bfdc582a1')				
				
// .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))	// Aquí lo que hago es chequear que la dirección de la api sea correcta (como se vio más arriba). Esto se hace preguntandole al navegador si "ok == true". En caso de la respuesta sea "true", que Promise.resolve(res) (rescordar que res es una promesa, por eso usamos el Pomise). En caso contrario, donde la promesa de que "ok" sea igual a "false", que Promise.reject(res)  
// .then(res => res.json())											// Esto es equivalente al JSON.parse de XMLHttpRequest
// .then(res => {

// 	console.log(res)

// }) 







// _____Geolocalización_____

const boton = document.getElementById('boton')
const posicion = document.getElementById('posicion')

const options = {															// Este objeto es el tercer parametro de "geolocation.getCurrentPosition()". Son las opciones que podriamos tener 
	enableHightAccuracy: true,												// En caso de que un dispositivo tenga más opciones de geolozalizacion (como un dispositivo movil que tiene GPS), esta opción nos permite utilizarlas.    // Por defecto es "false", por ese motivo lo pusimos en "true".    // En este caso, que estamos usando una PC de sobremesa, la precición nos dara "0" ya que no tenemos altimetro, ni GPS ni nada de eso 
	timeOut: 5000,															// Determina el tiempo que le establecemos para que nos devuelva la posición. En este caso son 5 segundos		
	maximunAge:0															// Es el tiempo que le permitios tener algo en "cache".	Es decir, al preguntarle la posicion y tenerla en cache, la va a utilizar o no.   // Como NO queremos que utilice la informacion del cache, sino la información real, le pondremos "0"     			
}

const getPosition = (position) => {											// Esta función es el primer parametro de "geolocation.getCurrentPosition()". Esta función sirve para obtener la posicion. Recibe un objeto con opciones que seria el tercer parametro de "geolocation.getCurrentPosition"
	posicion.textContent = `La posición es: Latitud:${position.coords.latitude} Longitud: ${position.coords.longitude}` 													// Dentro de la consola, esto nos va a devolver objeto con toda la informacón en cuanto a nuestra posición
	console.log(position)
}

const error = (error) => {													// Esta función es el segundo parametro de "geolocation.getCurrentPosition()". Nos devuelve un error en caso de haberlo  // Este error se presenta generalmente cuando el usuario no le permite a la página web acceder a su geolocalización
	console.log(error)														
}



boton.addEventListener('click', (e) => {
	const geolocation = navigator.geolocation								// En esta constante guardamos la "geolocalización"
	geolocation.watchPosition(getPosition, error, options)	


})











