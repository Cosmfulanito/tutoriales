





const body = document.getElementById('body');
const nave = document.getElementById('nave');
const contenedorControles = document.getElementById('contenedorControles');
const botonArriba = document.getElementById('botonArriba');
const botonIzquierda = document.getElementById('botonIzquierda');
const botonAbajo = document.getElementById('botonAbajo');
const botonDerecha = document.getElementById('botonDerecha');



// Posición inicial de la nave: 										
const posicionVertical = 150;					
const posicionHorizontal = 0;
nave.style.top = `${posicionVertical}px`;			// Aquí le digo a la nave donde posicionarse verticamnte
nave.style.left = `${posicionHorizontal}px`;		// Aquí le digo a la nave donde posicionarse horizontalmente



// Desplazamiento de la nave
let desplaVertical = 0;								// Este es el valor inicial. Más adelante se le sumara o restaran valores, los cuales se sumaran a la posicion, de esta manera modificandola
let desplaHorizontal = 0;				
const velocidad = 15;								// Este un valor que más adelante multiplicara a los desplazamientos verticales o horizontales. Los desplazamanientos crecen de uno en uno. Con este multiplicador acelero la velocidad  







// ____Desplazamiento de la nave____:



// Mouse/touch:
contenedorControles.addEventListener('click', (evento) => {											// Recordar que en el .html las flechas tienen un atributo value="" y cada una tiene un valor diferente con el cual vamos a trabajar
	if (evento.target.attributes[2].value === 'arriba') {
		desplaVertical -= 1;																				// Cada vez que apretemos el boton "flecha arriba" se restara una unidad
		nave.style.top = `${posicionVertical + (desplaVertical * velocidad)}px`;						// Bácicamente la nueva posición vertical es igual a la pocion vertical original + el numero del desplazamiento. Recordar que este ultimo es multiplicado por la velocidad deceada. De esta era apretando el boton, flecha arriba movemos la nave arriba 
		// botonArriba.classList.toggle("darkCoral")													// Cambiar el color del boton cuando se pulsa
		
	}else if(evento.target.attributes[2].value === 'abajo') {
		desplaVertical += 1;
		nave.style.top = `${posicionVertical + (desplaVertical * velocidad)}px`;
		// botonAbajo.classList.toggle("darkCoral")

	}else if(evento.target.attributes[2].value === 'izquierda') {
		desplaHorizontal -= 1;
		nave.style.left = `${posicionHorizontal + (desplaHorizontal * velocidad)}px`;
		// botonIzquierda.classList.toggle("darkCoral")

	}else if(evento.target.attributes[2].value === 'derecha') {
		desplaHorizontal += 1;
		nave.style.left = `${posicionHorizontal + (desplaHorizontal * velocidad)}px`;
		// botonDerecha.classList.toggle("darkCoral")
	}
});


// Cambiar el colordel boton cuando se deja de pulsar el boton
// contenedorControles.addEventListener("mouseup", (evento) => {
// 	console.dir(evento.target.attributes[2].value)


// 	if(evento.target.attributes[2].value == "arriba"){
// 		botonArriba.classList.toggle("darkCoral")


// 	}else if(evento.target.attributes[2].value == "abajo"){
// 		botonAbajo.classList.toggle("darkcoral");

// 	}else if(evento.target.attributes[2].value == "izquierda"){
// 		botonIzquierda.classList.toggle("darkcoral");

// 	}else if(evento.target.attributes[2].value == "derecha"){
// 		botonDerecha.classList.toggle("darkcoral");
// 	}
// })



// Teclado:
body.addEventListener('keypress', (evento) => {					// Básicamente cuando apreto una tecla, automatixcamente se activa el evento de apretar el boton en pantalla correspondiente. De esta manera no tengo que volver a copiar y pegar codigo									
	
	if(evento.code === 'KeyW') {
		botonArriba.click();	

	}else if(evento.code === 'KeyS') {
		botonAbajo.click();

	}else if(evento.code === 'KeyA') {
		botonIzquierda.click();

	}else if(evento.code === 'KeyD') {
		botonDerecha.click();
	}
});





