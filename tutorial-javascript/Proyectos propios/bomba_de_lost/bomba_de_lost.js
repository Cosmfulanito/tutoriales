/*

														_____Bomba de Lost____


- Este programa intenta imitar la bomba que aparecio en la serie "Lost". 

- Esta bomb era una computadora que mostraba una cuenta regresiva de 24hs que si llegaba a cero explotaba la isla. La unica forma de detenerla era metiendo un codigo, 
  pero esto hacia que la cuenta volveria a comenzar. Por ende el personaje de "Desmond" estaba obligado a ingresar ese mismo codigo todos los días
  


- Este programa trata de hacer algo parecido. Pero en este caso la cuenta regresiva es de 10 segundos y se reseta haciendo click en cualquier parte de la página.
  Si el contador llega a cero, se ejecuta un bucle infinito que nos realentiza la computadora a modo de castigo
*/




// Funcion Bomba!
let boton = () => {
	let tiempo = 10									// Cree esta variable porque voy a repetir este numero muchas veces		
	let contador = tiempo;							
	let bomba = setInterval(() => {					// Puse un intervalo de tiempo de para que se repita esta funcion cada un segundo. Básicamente por cada segundo transcurrido se le resta una unidad al contador (rescordar que este tiene un numero de 10). Cuando el contador llega a 0 "explota la bomba" (esta bomba no es más que un bucle infinito que realentiza la compu a modo de  trolleo)
		if(contador === 0){
			console.log('Booommmmmm')
			clearTimeout(bomba);
			
			for(let i = 0; i <= 10; i--){			// Bucle infinito que realentiza la PC 
				console.log('Divertite tratando de cerrar el navegador')
			}
		}

		if (contador > 0){							// Tube que poner este if porque sino en la consola me pone el numero -1 y no entiendo por que. Con esto lo detengo a 0
			console.log(contador);
		}

	contador--
	}, 1000);										

	window.addEventListener('click', ()=> {			// Evento onClick que resetea el numero devuelta a 10 para que este no llegue a 0
		console.log('Te salvaste');
		contador = tiempo;
	})	
}



boton ()											// Aquí llamo a la funcion para que "funcione"  *Ba Dum Tss*  (Chiste malo) 
