/*

															_____API's - Visibility Change_____


 - Visibility Change es una API que nos sirve para dejar de reproducir el audio/video de nuestra página cada vez que cambiamos de pestaña. Esto es util para tanto 
   para la página para ahorrar recursos, como para el usuario para que el sonido no le moleste cuando este cambie de pestaña
   
 

*/




// En la consola hay un par de errores provenientes de la etiqueta <video>



const video = document.getElementById('video')


// Primera versión:
window.addEventListener('visibilitychange', (e) => {						// "visibylitychange" es un evento que se dispara cuando el contenido de la pestaña se ha hecho "visible" o se a "ocultado". Básicamente este evento se activara cuando cambie a otra pestaña y luego vuelva a la página 
	// console.log(document.visibilityState)								// Esto nos dice si el documento es visible o no, devolviendono los valores "visible" (en caso de que la página sea visible) o "hidden" (en caso de que la pantalla no se vea porque abrimos otra pestaña)
	if (document.visibilityState === 'visible'){							// En caso de que la página sea visible, que haga lo siguiente...
		console.log('PLAY')
		video.play()														// Este metodo reproduce el video
	}else if (document.visibilityState === 'hidden'){						// En caso de que la página no sea visible porque se abrio otra pestaña, hacer lo siguiente...
		console.log('PAUSE')
		video.pause()														// Este metodo pausa el video
	}
})





//---------------------------------------------------------------------------------------------------------------------------------------------------------------------



// Segunda version: Utilizando un operador ternario
// Comento este codigo para que no se me sobreescriba con el anterior
// window.addEventListener('visibilitychange', (e) => {
// 	document.visibilityState === 'visible' ? video.play() : video.pause()
// })


