/* 

															_____Eventos de ratón y teclado_____



 - Link hacia una página con una lista de todos los eventos disponibles
   https://developer.mozilla.org/es/docs/Web/Events  		(En español)
   https://developer.mozilla.org/en-US/docs/Web/Events		(En ingles)


- ¿Que es un evento? 
   	
 	- Un evento es cualquier cosa que susede en nuestro documento. No necesariamente tiene que ser una interaccion del usuario con el documento (como hacer clic), 
	  también hay eventos que se ejecutan por el simple hecho de abrir la página.
   		Ej:		- El contenido se ha leído (Osea, cuando el navegador lee nuestro documento .html)
				- El contenido se ha cargado (Es decir, cuando todo el CSS, imagenes, videos, audio, etc se a descargado y esta listo para usarse)
				- El usuario mueve el raton
				- El usuario pulsa una tecla
				- La ventana se ha cerrado
				- Y un largo etc.
   
	


	
 - Eventos de ratón:
		- click						- Cuando pulsamos el boton izquierdo del mouse

		- dblclick					- Doble click, cuando pulsamos dos veces seguidas el botón izquierdo del mouse

		- mouseenter				- Cuando entramos con el mouse en la zona del evento

		- mouseleave				- Cuando salimos con el mouse de la zona que tiene el evento

		- mousedown					- Cuando mantenemos presionado el boton izquierdo del ratón. Este evento junto con mouseup es util para cuando se tiene que arrastar algo manteniendo presionado el click (ej: el lapiz de paint), de lo contrario solo duncionaria como un click normal

		- mouseup					- Cuando soltamos el boton izquierdo del ratón. Este evento junto con mousedown es util para cuando se tiene que arrastar algo manteniendo presionado el click (ej: el lapiz de paint), de lo contrario solo duncionaria como un click normal

		- mousemove					- Cuando movemos el mouse



 - Eventos de teclado:
		- keydown 					- Cuando pulsamos una tecla
		
		- keyup						- Cuando soltamos una tecla
		
		- keypress					- Cuando pulsamos una tecla y no la soltamos






 - ¿Como aplicar un evento?

		- elemento.addEventListener("evento", callback)					- "addEventListener" es un escuchador de eventos, este metodo tiene dos parametros. El primer parametro es el evento que queremos escuchar. El segundo paramos tenemos un callback, en estos casos llamamos callback a la funcion que queremos ejecutar cuando se inicia el evento						



*/






// Aquí estoy declarando los atributos que voy a usar:
const caja = document.querySelectorAll(".caja");								// Cuando hay varios selectores con el mismo nombre tengo que usar "querySelectorAll". En este caso voy a usar la misma caja muchas veces. Recordar que para hacer cambios en muchas cajas a la vez tengo que convertir dicho selector en un Array. Como en este caso quiero aplicar los cambios de uno en uno, tengo que usar [i], donde i es el numero del selector (en este caso de la caja) en orden de como fueron declarados   
const boton_1 = document.getElementById("boton_1");		
const boton_2 = document.getElementById("boton_2");
const input_1 = document.getElementById("input_1");
const input_2 = document.getElementById("input_2");
const input_3 = document.getElementById("input_3");




//_____Eventos de ratón:_____
// Aplicando eventos: click														
boton_1.addEventListener("click", () => {										// La idea es que haciendo clic en un  boton, que aparezca una caja de la nada con el texto "Sorpresa!!!". La caja ya existe, mediante el evento clic sobre el boton lo que hago es darle color a una caja que es transparente, al ser transparente da la ilucion de que allí no hay nada 
	caja[0].classList.toggle("coral");											// La caja ya existe, pero no tiene color para dar la ilución de que no existe. Doy la impreción de hacerla aparecer de la nada con tan solo pintarla. Para ello solamente agrego una clase CSS (class="") estra al elemento "caja_sorpresa" llamado ".coral" que dentro suyo tiene la propiedad "background-color: coral" y la propiedad "color: inherit" que cambia el texto que antes estaba transparente a el mismo color de su caja contenedor. Esta clase se puede hallar en el archivo .css. // Esto suena a trabajo extra, porque simplemente podria agregar el nuevo color desde JavaScrip sin tener que pasar por CSS, pero esto no seria conveniente porque los cmbios de estilos hechos desde JavaScript tienen más valor que los hechos desde CSS, y eso genera propblemas a futuro. Con este metodo, aunque sea más largo, me aseguro que los cambios de estilo provinieron desde CSS  //  Como explique más arriba, esta caja lleva [1] porque quiero que especificamente a esa caja se le apliquen dichos cambios
})




// Aplicando eventos: dblclick													// La idea de esto es que haciendo doble click, que aparezca una caja. En realidad la caja existio todo el tiempo, solo que antes no se notaba porque era transparente. Al darle color doy la ilución de que aparece de la nada
boton_2.addEventListener("dblclick", () => {										
	caja[1].classList.toggle("mediumturquoise");								// Como explique más arriba, esta caja lleva [1] porque quiero que especificamente a esa caja se le apliquen dichos cambios
})




// Aplicando eventos: mouseenter y mouseleave									// El objetivo de esto es cambiar el color de una caja pasandole el mouse por arriba
caja[2].addEventListener("mouseenter", () => {									// La caja ya viene con una clase (class="") llamada ".green" que tiene un backgroundColor que la pinta de verde por defecto. Aqui lo que estoy haciendo es que cada vez que pase el mouse por arriba de esa caja, que se reemplace el la clase .green por la clase .red que tiene un backgrounColor que la pinta de rojo. De esta mane consigo cambiar el color de la caja de verde a a rojo con tan solo pasar el mosus por arriba   // Ojo, este es un ejemplo practico, la forma ideal de hacer esto es añadiendo y quitando clases, no reemplazandolas 
	caja[2].classList.replace("green", "red");
})

caja[2].addEventListener("mouseleave", () => {									// Aquí ocurre el efecto contrario, al sacarle el mouse por encima a la caja, esta reemplaza la clase .red por la .green nuevamente
	caja[2].classList.replace("red", "green");
})





// Aplicando eventos: mousedown													// El objetivo con esto es que al mantener apretado el boton izquierdo del mouse en la caja, aparezca el siguiente texto
caja[3].addEventListener("mousedown", () => {
	caja[3].textContent = `Siii! Haz mantenido presionado el mouse!`;
})





// Aplicando eventos: mouseup													// El objetivo con esto es que al soltar el boton izquierdo del mouse dentro de esta caja, aparezca el siguiente texto (mantener presionado por un rato y luego soltar para apreciar mejor)
caja[4].addEventListener("mouseup", () => {
	caja[4].textContent = "Haz soltado el boton!"
})




// Aplicando eventos: mousemove													// El objetico con esto es que al mover el maouse dentro de esta caja, aumente el numero de un contador y que dicho contador muestre su numero en la caja. Mientras más mueva el mouse más va a crecer el contador
let contador = 0
caja[5].addEventListener("mousemove", () => {
	contador++
	caja[5].innerHTML = `Mueve el mouse por dentro de la caja <br> ${contador}`	// .innerHTML funciona igual que textConet con la diferenciade de que en este caso si acepta poner etiquetas
})






//_____Eventos de teclado:_____
// Aplicando eventos: keydown 													// El objetivo con esto que cuando presione una tecla dentro del input, que aparezca el siguiente texto en una caja
input_1.addEventListener("keydown", () => {
	caja[6].textContent = `Haz presionado una tecla!`
})




// Aplicando eventos: keyup														// El objetivo es que cuando suelte una tecla, que aparezca el siguiente tetxo en una caja (mantenerla presionada un rato y luego soltar para apreciar mejor)
input_2.addEventListener("keyup", () => {
	caja[7].textContent = `Haz soltado una tecla!`
})




// Aplicando eventos: keypress													// El objetivo de esto es que mientras mantenga precionado alguna tecla, que se sumen numeros en un contador, luego mostar los numeros de dicho contador en una caja
let contado_2 = 0;
input_3.addEventListener("keypress", () => {
	contado_2++
	caja[8].innerHTML = `Manten presionada una tecla <br> ${contado_2}`
})

