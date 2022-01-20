/*

																_____API's - Geolocation_____


 - Información adicional para investigar:
   https://developer.mozilla.org/es/docs/Web/API/NavigatorGeolocation/geolocation

 											


 - La API "Geolocation" nos devuelve las cooordenas de donde esta ubicado nuestro dispositivo. Ya sea una PC de sobremesa o un dispositivo movil.
 
 - Hay 3 metodos principales. 
   2 de estos metodos se usan para saber la geolocalizacion del dispositivo, dependiendo si el dispositivo es una PC de sobremesa o un dispositivo movil se usara 
   un metodo u otro. Ambos metodos son practicamente iguales

	- geolocation.getCurrentPosition()		Nos permite saber la geolocalización de una PC de sobremesa

    - geolocation.watchPosition()			Nos permite saber la geolocalizacion de un dispositivo movil



 - Esto nos va a devolver un objeto con toda la informacion en cuanto a la posición posición de nuestro dispositivo. 
   Entre sus "keys" se encuentran:

   - accuracy:								La precicion de nuestro dispositivo. Esto determina si el valor de los siguientes datos son más o menos exactos, y por ende confiables 
   - altitude:								Altitud (solo para dispositivos moviles)						
   - altitudeAccuracy:						La presicion de la altura (solo para dispositivos moviles)
   - heading: 								La direccion en la que el dispositivo esta vieajando. Es un valor expresado en grados (solo para dispositivos moviles) 
   - latitude:								Latitud
   - longitude:								Longitud
   - speed:									La velocidad de desplazamiento (solo para dispositivos moviles)
   - timestamp:								Nos dice a que hora se esta pidiendo la geolocalización. Esta expresado en milisegundos. 


 - Esta API en conjunto con la API de GoogleMaps, se puede hacer cosas muchisimo más interesantes








 - En esta página web haremos un boton que al precionarlo nos dara las coordenadas de nuetra PC de sobremesa. Por ende usaremos el metodo propio para PCs. 
   De querer saber la geolocalización de un dispositivo movil, tendremos que usar el otro metodo
   
 - Dentro de la consola, esto nos va a devolver objeto con toda la informacón en cuanto a nuestra posición

*/


const button = document.getElementById('button')

button.addEventListener('click', () => {
	const geolocation = navigator.geolocation								// En esta constante guardamos la "geolocalización"

	geolocation.getCurrentPosition(getPosition, error, options)				// Este metodo nos permite saber la geolocalización de nuestra PC de sobremesa. Este metodo admite 3 parametros. El primero es obligatorio, seria "la función que va a obtener la posición" (en este caso "getPosition"), es una "función""" que hay que crear a parte; El segundo parametro seria un "error", en el caso de que lo hubiera (en este caso lo llamamos "error"), es una "función" que hay que crear a parte; Y el tercer parametro que también es opcional, son "las opciones" que podemos poner (en este caso lo llamamos options), es un objeto que hay que crear a parte
})

const options = {															// Este objeto es el tercer parametro de "geolocation.getCurrentPosition()". Son las opciones que podriamos tener 
	enableHightAccuracy: true,												// En caso de que un dispositivo tenga más opciones de geolozalizacion (como un dispositivo movil que tiene GPS), esta opción nos permite utilizarlas.    // Por defecto es "false", por ese motivo lo pusimos en "true".    // En este caso, que estamos usando una PC de sobremesa, la precición nos dara "0" ya que no tenemos altimetro, ni GPS ni nada de eso 
	timeOut: 5000,															// Determina el tiempo que le establecemos para que nos devuelva la posición. En este caso son 5 segundos		
	maximunAge:0															// Es el tiempo que le permitios tener algo en "cache".	Es decir, al preguntarle la posicion y tenerla en cache, la va a utilizar o no.   // Como NO queremos que utilice la informacion del cache, sino la información real, le pondremos "0"     			
}

const getPosition = (position) => {											// Esta función es el primer parametro de "geolocation.getCurrentPosition()". Esta función sirve para obtener la posicion. Recibe un objeto con opciones que seria el tercer parametro de "geolocation.getCurrentPosition"
	console.log(position)													// Dentro de la consola, esto nos va a devolver objeto con toda la informacón en cuanto a nuestra posición
}

const error = (error) => {													// Esta función es el segundo parametro de "geolocation.getCurrentPosition()". Nos devuelve un error en caso de haberlo  // Este error se presenta generalmente cuando el usuario no le permite a la página web acceder a su geolocalización
	console.log(error)														
}








