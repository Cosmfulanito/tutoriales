/*

														_____API's - Intersection Observer II - Lazy load_____




 - La API "Intersection Observer" nos sirve para saber cuando un elemento se ve y cuando esta oculto
   
 - Esto nos ayuda entre muchas otras cosas, para hacer "Lazy load" (carga perezosa). Es decir, no cargamos elementos que no vemos, hasta que no lo vayamos a ver no 
   los cargamos. De esta manera ahorramos muchisimos recursos. Un ejemplo del uso "Lazy load" es instagram, ya que va cargando las fotos a medida que vamos haciendo 
   scroll.
   Esto muy util para compania/aplicaciones que manejan grandes volumenes de datos. Ya que no conviene para el usuario hacerle cargar 10000 imagenes de un saque, se
   le tildaria el navegador
   Solamente tendriamos que cargar 10/15 imagenes que son las que se ven en la pantalla, y a medida que vamos haciendo scroll se van cargando el resto de a poco 





 - En este apunte haremos una página web que se conectara a una API y esta nos dara distintas imagenes. La cantidad de estas imagenes va a ser ENORME y por ende no
   es posible que nos las de a todas de una sola vez ya que nos realentizaria la pagína. En cambio, nos las dara la imagenes en tandas de 10 en 10 a medida vamos 
   scrolleando.  
   - Todas estas imagenes iran dentro de un <div> que esta dentro del .html
   - Recordar que para acceder a esa API lo haremos por "Axios", tema ya visto anteriormente

 - En el ejercicio del apunte anterior en el cual teniamos un "Intersection Observer", este se ejecutaba directamente al cargar la página porque ya teniamos los 
   elementos. En este caso vamos a hacerlo un poco distinto porque lo que queremos es que cuando estemos viendo la ultima imagen, el navegador haga la petición de 
   cargar más imagenes. El problema que tenemos es que cuando cargamos la página la ultima imagen no todavia no existe. 
   - Por ende a nuestro objervador lo tendremos que construir dentro de una función para que se ejecute cuando ya tengamos las imagenes
   
 - El problema de este apunte es que a pesar de cargar nuevas imagenes, solamnente me caraga las misma imagenes una y otra vez


*/


const images = document.getElementById('images')

const getImages = () => {														// Esta es una función para poder acceder a las imagenes de una API. Para ello usaremos "Axios". Todo lo que esta en esta función ya lo vimos anteriormente. 
	axios('https://picsum.photos/v2/list?page=3&limit=5')						// El numero que esta al final, es la cantidad de imagenes que me da la API, en este caso son 5 imagenes las que me devuelve
		.then(res => {
			const fragment = document.createDocumentFragment()
			// console.log(res)													// Esta es toda la información que nos da la API
			res.data.forEach(element => {										// forEach() es un metodo ya visto en el apunto "14. Arrays - Métodos II". Básicamente ejecuta la función una vez por cada elemento del array, funciona como un "bucle for". Osea, obtenemos la información deseada imagen por imagen y luego trabajamos con ella como con cualquier "bucle for"	
				const newImage = document.createElement('IMG')
				newImage.src = element.download_url
				fragment.appendChild(newImage)
			})
			images.appendChild(fragment)
			setObserver()
		})
}



const callback = (entries) => {													// Básicamente este "callback" es lo que hara el setObserver() cuando se ejecute 
	entries.forEach(entry => {
		//console.log(entry)													// Este es lo que mostrara cuando se active el observador										
		if(entry.isIntersecting){												// le estoy diciendo que si "entry.isIntersecting" es igual a "true" que se ejecute la función getImages
			getImages()															
		}
	})
}

const setObserver = () => {														// Este evento se activara cuando el navegador observe la mitad de la ultima imagen. Solo en ese momento se le pediran el resto de las imagenes a la API 									
	const options = {
		threshold: 0.5															// Cuando estemos viendo el 50% de la imagen, quiero que se active el evento
	}

	const observer = new IntersectionObserver(callback, options)
	observer.observe(images.lastElementChild)									// Le estamos diciendo que observe unicamente la ultima imagen.   // A diferencia de este apunte, en el apunte anterior esto observaba a todas las cajas  
}


getImages()																		// Estoy llamando a esta función para que me aparezcan las primeras imagenes por defecto