/*

													_____AJAX - Objeto XMLHttpRequest II - GET + PHP_____


 - Este tema es muy complejo ya debemos descragar otros programas y usar archivos como .php y .sql
   Se RECOMIENDA volver a ver el video tutorial:
   https://www.youtube.com/watch?v=uVcdSRphS4o&list=PLROIqh_5RZeBAnmi0rqLkyZIAVmT5lZxG&index=36



 - Para este apunte se debe usarel programa "WampServer", este es link con el tutorial de instalación:
   https://www.youtube.com/watch?v=Y3yOtPZgrWU&list=PLROIqh_5RZeBzit_KQRsBNpRDA-vSH1VT&index=7


 - TIPS: - Para poder habrir esta base de datos, tengo que guardar todos los archivos en la carpeta   C:\wamp64\www\clase33  (tiene este nombre por que es video n°33)
		   Osea, si bien esta este archivo en la carpeta "curso JavaScript". Tengo que ejecutar su copia que esta en la carpeta C:\wamp64\www\clase33
         - A su vez NO tengo que habrir el archivo .html con el liveServer. En cambio tengo que usar el programa descargado WampServer / local server. Para ello tengo 
           que unir la carperta al siguiente link: 	
		   Quedaria así: http://localhost/28_ajax_objeto_xmlhttpRequest_ii_get_y_php 

		 - Tambien tengo que ir a la siguiente pagína para que el .sql funcione: http://localhost/phpmyadmin  => Usuario: root   pass: (no lleva contraceña)

  









 - En este ejercio vamos a acceder a una base de datos de personajes de Marvel. La idea es que desde la página web se pueda elegir al personaje deseado y que 
   luego haciendo click en un boton aparezca la información personal del personaje.

 - Para ello vamos a trabajar con un archivo .sql que servira como base de datos y con un archivo .php que hace de programación BackEnd. No hace falta que entendamos
   el funcionamiento de estos dos archivos, ya que son parte de la programación BackEnd y eso escapa del alcance de ese curso. Solo hay que saber por que motivo estan 
   ahí. 

 - Recordar segir las instrucciones del video original y de los tips que deje más arriba en este mismo apunte para que todo funcione
*/





const form = document.getElementById('form');
const characters = document.getElementById('characters');
const table = document.getElementById('table');

form.addEventListener('submit', (evento) => {							// Este evento de escucha sirve para que aparezca la información del personaje en el cuadro cuando seleccione un personaje y haga click en el boton. Su funcionamiento es el siguiente, esto funciona cuando se escucha el evento "submit" (este evento escucha cada vez que se "envia" informacion) en el form. Cada vez que seleccione un personaje y haga click en el boton, estoy enviando su ID  
	evento.preventDefault()												// 
	getData(characters.children[characters.selectedIndex].value);		// "characters.selectedIndex" me devuelve el indice del personaje que esta seleccionado. Osea, si selecciono al primer personaje del desplegable, me va a aparecer un 0. No confundir con el value, que seria 1. El conjunto de todo me devuelve el "value" que es lo que busco, Osea el valor 1
})																		// Básicamente este numero "value" es el va a usar el else con su "xhr.open('GET', `marvel.php?id=${id}`);" 

const getData = (id) => {												// Aquí nuestro objetivo es obtener el ID del archivo .php
	let xhr																// Aquí simplemente estoy creando el objeto xhr como ya vimos en el apunte pasado
	if (window.XMLHttpRequest) xhr = new XMLHttpRequest();
	else xhr = new ActiveXObject("Microsfoft.XMLHTTP");

	if (id == undefined) {												// Estoy preguntando si ID existe. De esta forma puedo saber si estoy cargando por primera vez la página o no. En caso de que exista, que haga unas cosas, y en caso de que no, que haga otras
		xhr.open('GET', `marvel.php`);									// Si el id es "undefined" significa que no estamos haciendo una solicitud desde el formulario, sino que estamos caragando la página por primera vez. Si es así le dicimos al navegador que haga una peticion "GET" al archivo ".php"

		xhr.addEventListener('load', (data) => {						// Esto se vio en el video anterior   // "load" en un evento de escucha, se funciona recien cuando se descargo toda la información
			const dataJSON = JSON.parse(data.target.response);
			console.log(dataJSON);

			const fragment = document.createDocumentFragment();		  	// Esto ya se vio en apuntes anteriores. Básicamente sirve para guardar todos los elementos creados desde un bucle en un "Fragment" (el fragment no pertenece al DOM) y luego todos esos elementos pasarlos de una sola vez al DOM  	
	
			for (const heroes of dataJSON) {							// Con esto creamos las opciones/personajes a eleguir para el <select> (el desplegable con el nombre de los personajes de Marvel). Todo esto mediante la información que esta en la base de datos
				const option = document.createElement('OPTION');
				option.setAttribute('value', heroes.ID)					// ID esta en mayusculas porque así esta en la base de datos
				option.textContent = heroes.Name;
				fragment.append(option);
			}
			characters.append(fragment);								// Agrego toda la información al <select> (deplegable). De esta forma me van a aparecer los nombres de los personajes en el desplegable
		})

																		// Todo esto es un copy-paste con algunos cambios
	} else {															// Con este else vamos a hacer que el cuadro <table> se llene con la información de los personajes						
		xhr.open('GET', `marvel.php?id=${id}`);							// marvel.php necesita recibir el ID que le estamos pasando. L aforma de pasar los parametros con GET es con una interrogacion "?". Todo lo que vaya despues de la inerrogacion tiene que ir como los objetos, "clave= valor". ¿Cual es la clave? Pues el id="" ¿Cual es valor? Pues el id que tenga este elemento

		xhr.addEventListener('load', (data) => {								
			const dataJSON = JSON.parse(data.target.response);
			console.log(dataJSON);

			const fragment = document.createDocumentFragment();		  	
	
			for (const heroe of dataJSON) {							
				const row = document.createElement('TR');
				const dataName = document.createElement('TD');
				const dataAlignment = document.createElement('TD');
				const dataHometown = document.createElement('TD');
				const dataGender = document.createElement('TD');
				const dataFighting = document.createElement('TD');
				dataName.textContent = heroe.Name;
				dataAlignment.textContent = heroe.Alignment;
				dataHometown.textContent = heroe.Hometown;
				dataGender.textContent = heroe.Gender;
				dataFighting.textContent = heroe.Fighting_Skills;

				row.append(dataName);
				row.append(dataAlignment);
				row.append(dataHometown);
				row.append(dataGender);
				row.append(dataFighting);

				fragment.append(row);									// Aqui le estamos agregando una fila al fragment
			}
			if (table.children[1]) {									// Queremos que cada vez que seleccionamos un personaje nuevo, su información reemplace al del personaje anteriror. Con esto lo logro, de lo contrario se haria una lista con tada la información de todos los personajes y en este caso no queremos eso. // [1] ponemos 1 y no 0 porque [0] seria el renflon con las casillas  "Name", "Alignment", "Hometown", "Gender", "Fighting Skills" de la página web	// Con este if basicamente le estamos preguntando si este elemento hijo existe. En caso de ser así que lo borre. Sí no hay ningun hijo, que agregue el hijo nuevo (debo poner esta condicion porque de lo contrario, al no caragar nada anteriormente, el navegador trataria de borrar informacion que no existe y eso causaria un error)
				table.removeChild(table.children[1])					
			}
			table.append(fragment);										// Ahora me vaa aparecer toda la informacion de lso personajes en el cuadro del la página web
		})
	}
	xhr.send()
}

getData()																// Como todo esto es una funcion, tengo que llamarla para poder ejecutarla










/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------


_____Ejercico:_____

- Hacer un submit del tipo <select> (desplegable) donde pueda seleccionar a los personajes segun su alineación (buenos, neutrales, malos). Segun la base de datos	*/



// La mayor parte del trabajo es un copy-paste

const formB = document.getElementById('formB');
const charactersB = document.getElementById('charactersB');
const tableB = document.getElementById('tableB');
const botonB = document.getElementById('botonB')


formB.addEventListener('submit', (evento) => {							
	evento.preventDefault()												 
	getDataB(charactersB);		
})	


const getDataB = (id) => {	
	
	botonB.addEventListener('click',() => {														// Nada de eso se actva hasta que yo haga click en el boton
		let xhr																
		if (window.XMLHttpRequest) xhr = new XMLHttpRequest();
		else xhr = new ActiveXObject("Microsfoft.XMLHTTP");
	
		xhr.open('GET', 'marvel.php');							
	
		
		xhr.addEventListener('load', (dataB) => {								
			const dataJSON = JSON.parse(dataB.target.response);
	
			const fragment = document.createDocumentFragment();		  
			const thead = document.createElement('thead')										// Esta etiqueta <tread> va a contener a las etiquetas <tr> y <td> que contienen el nombre y la afiiación de los personajes
 
			for (personaje of dataJSON){
				if (charactersB.value == personaje.Alignment) {
					const row = document.createElement('TR');
					const dataNameB = document.createElement('TD');
					const dataAlignmentB = document.createElement('TD');
					
					dataNameB.textContent = personaje.Name;
					dataAlignmentB.textContent = personaje.Alignment;
	
					row.append(dataNameB);
					row.append(dataAlignmentB);
					
					thead.append(row)
				}
			} 
			fragment.append(thead);

			if (tableB.children[1]) {															// Básicamente "borro" la segunda hija etiqueta del elemento <table> (que es una etiqueta <thead>) y la reemplazo por una nueva etiqueta hija <thead> que contiene toda la información
				tableB.removeChild(tableB.children[1])					
			}
			tableB.append(fragment);										
		})

		xhr.send()
	})
	}

getDataB()								









