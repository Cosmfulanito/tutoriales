/*

														_____DOM - Insertar II, clonar y borrar elementos_____


	
  _____Insertar II:_____

  - En apuntes anteriores ya vimos como insertar elementos mediante el metodo .appendchild(). El problema de dicha propiedad es que siempre coloca el nuevo elemento 
    a lo ultimo de los demas elementos, cuando en ocaciones queremos que este posicionado arriba o incluso al medio entre otros elementos. Con estos nuevos metodos
	solucionamos este problema ya que podemos colocar los nuevos metodos creados donde queramos.

  - Más abajo en este mismo apunte hay otros metodos para insertar elementos que es mucho más sencillo que estos
  

	Metodo 1:	.insertBefore

 		- elementoPadre.insertBefore(elementoNuevo, elementoDeReferencia)   		 		- Inserta un elemento antes del elemento de referencia 														




	Metodo 2: 	.insertAdjacent...

		A diferencia del primer metodo, aquí tengo que especifificar el tipo de archivo que inserto, ya sea un "elemento", "HTML" o "text". Luego tengo que poner 
		donde lo voy a insertar, esto se hace mediante un valor que que correstonde a la "posicion"
		
			- Posición:						Es un tipo de valor el cual sirve para indicar a donde voy a insertar este archivo
				beforebegin					- Antes de que empiece 		(hermano anterior)
				afterbegin					- Después de que empiece 	(primer hijo)
				beforeend					- Antes de que acabe 		(último hijo)
				afterend 					- Despues de que acabe 		(hermano siguiente)


			- elementoDeReferencia.insertAdjacentElement(posición, elementoNuevo)			- Inserta un elemento	

			- elementoDeReferencia.insertAdjacentHTML(posición, HTML)						- Inserta un HTML que se crea en esta misma funcion (No es muy usado)

			- elementoDeReferencia.insertAdjacentText(posición , text)						- Inserta un text que se crea en esta misma funcion (No es muy usado)




 _____Reemplazar elementos:_____

	- elementoPadre.replaceChild(hijoNuevo, hijoViejo)		- Reemplaza un hijo por otro



*/

const lista1 = document.getElementById('lista1');
const nuevoElemento1 = document.createElement('li');
nuevoElemento1.textContent = 'Soy el elemento nuevo :3';

const lista2 = document.getElementById('lista2');
const nuevoElemento2A = document.createElement('li');
const nuevoElemento2B = document.createElement('li');
const nuevoElemento2C = document.createElement('li');
const nuevoElemento2D = document.createElement('li');
const nuevoElemento2E = document.createElement('li');
nuevoElemento2A.textContent = 'beforebegin (hermano anterior)';
nuevoElemento2B.textContent = 'afterbegin (primer hijo)'
nuevoElemento2C.textContent = 'beforeend (último hijo)'
nuevoElemento2D.textContent = 'afterbegin (hermano siguiente)'
nuevoElemento2E.textContent = '(Posicionando el nuevo elemento entre los hijos de referencia 2 y 3)'

const lista3 = document.getElementById('lista3');

const lista4 = document.getElementById('lista4');

const lista5 = document.getElementById('lista5');
nuevoElemento5 = document.createElement('li');
nuevoElemento5.textContent = 'Soy el hijo de reemplazo :3' 


// _____Insertar II:_____

//		 Metodo 1:
lista1.insertBefore(nuevoElemento1, lista1.children[1]);				// Básicamente le dije al navegador que me agregue este nuevo elemento <li> el segundo hijo del elemento padre (recordar que cuenta a partir del 0). Este hijo es el que usamos como elemento de referencia




// 		Metodo 2: 
// .insertAdjacentElement	beforebegin		(hermano anterior)
lista2.insertAdjacentElement('beforebegin', nuevoElemento2A);			// Le dije al navegador que al elemento de referencia le ponga como "hermano superior" este nuevo elemento creado desde JavaScript


// .insertAdjacentElement	afterbegin		(primer hijo)
lista2.insertAdjacentElement('afterbegin', nuevoElemento2B);			// Le dije al navegador que al elemento de referencia le ponga como "primer hijo" este nuevo elemento creado desde JavaScript 


// .insertAdjacentElement	beforeend		(último hijo)
lista2.insertAdjacentElement('beforeend', nuevoElemento2C);				// Le dije al navegador que al elemento de referencia le ponga como "hermano inferior" este nuevo elemento creado desde JavaScript 


// .insertAdjacentElement	afterend		(hermano siguiente)
lista2.insertAdjacentElement('afterend', nuevoElemento2D);				// Le dije al navegador que al elemento de referencia le ponga como "ultimo hijo" este nuevo elemento creado desde JavaScript				


// Posicionando el nuevo elemento entre los hijos de referencia 2 y 3
lista2.children[3].insertAdjacentElement('afterbegin', nuevoElemento2E)	// Básicamente le dije al navegador que al cuarto hijo del elemento de referencia (osea, el hijo de referencia n°2) le ponga este como hermano inferior este nuevo elemento. Tener en cuenta de que puse [3] y no [2] como corresponde porque los otros nuevos elementos que puse anteriormente ocuparon espacion el DOM




// .insertAdjacentHTML	(Solamente voy a usar un solo position de ejemplo)
lista3.insertAdjacentHTML('afterbegin', '<li>Soy archivo HTML creado e insertado</li>')		// Le dije al navegador que al elemento de referencia le ponga como primer hijo un archivo HTML <li> que cree en esa misma linea de texto



// .insertAdjacentText	(Solamente voy a usar un solo position de ejemplo)
lista4.insertAdjacentText('afterbegin', '<li>Soy un texto</li>')		// Le dije al navegador que al elemento de referencia le ponga como primer hijo un texto






// _____Reemplazar elementos:_____
lista5.replaceChild(nuevoElemento5, lista5.children[0]);				// Básicamente le dije al navegador que al elemento de referencia le reemplace su primer hijo por este nuevo elemento








/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------







  _____DOM manipulation convenience methods - JQuery Like_____

  	https://caniuse.com/#search=jquery-like

	- Estos metodos funcionan exactamente igual que los anteriores pero con la ventaja de que son más faciles de usar. Su desbentaja es que no tiene soporte con 
	  Internet Explorer (aunque a esta altura del partido eso da igual)

	- Estos metodos estan basados en JQuery
	

	Insertar elementos:
		elementoDeReferencia.before()					- Antes de que empiece 			(hermano anterior)
		elementoDeReferencia.prepend()					- Después de que empiece 		(primer hijo)
		elementoDeReferencia.append()					- Antes de que acabe 			(último hijo)
		elementoDeReferencia.after()					- Después de que acabe 			(hermano siguiente)

	Reemplazar elementos:
		elementoViejo.replaceWith(elementoNuevo)		- Remplaza a un elemento antiguo por otro nuevo
	

*/

const lista6 = document.getElementById('lista6');
const nuevoElemento6A = document.createElement('li');
const nuevoElemento6B = document.createElement('li');
const nuevoElemento6C = document.createElement('li');
const nuevoElemento6D = document.createElement('li');
const nuevoElemento6E = document.createElement('li');
nuevoElemento6A.textContent = '.before() (hermano anterior)';
nuevoElemento6B.textContent = '.prepend() (primer hijo)';
nuevoElemento6C.textContent = '.append() (último hijo)';
nuevoElemento6D.textContent = '.after() (hermano siguiente)';
nuevoElemento6E.textContent = '(Posicionando el nuevo elemento entre los hijos de referencia 2 y 3)';

const lista7 = document.getElementById('lista7');
const nuevoElemento7 = document.createElement('li');
nuevoElemento7.textContent = 'Soy un elemento de reemplazo :3';


// Insertar elementos:

// .before()	(hermano anterior)
lista6.before(nuevoElemento6A);						// Le dije al navegador que al elemento de referencia le ponga como "hermano superior" este nuevo elemento creado desde JavaScript 

// .prepend()	(primer hijo)
lista6.prepend(nuevoElemento6B);					// Le dije al navegador que al elemento de referencia le ponga como "primer hijo" este nuevo elemento creado desde JavaScript

// .append()	(último hijo)						
lista6.append(nuevoElemento6C);						// Le dije al navegador que al elemento de referencia le ponga como "ultimo hijo" este nuevo elemento creado desde JavaScript

// .after()		(hermano siguiente)
lista6.after(nuevoElemento6D);						// Le dije al navegador que al elemento de referencia le ponga como "hermano inferior" este nuevo elemento creado desde JavaScript

// Posicionando el nuevo elemento entre los hijos de referencia 2 y 3
lista6.children[2].after(nuevoElemento6E); 			// Básicamente le dije al navegador que al tercer hijo del elemento de referencia (tener en cuenta que los elementos anteriormente posicionados en la lista ocuparon un lugar en el DOM), osea el elemento hijo n°2, se le posicione por debajo este nuevo elemento creado desde JavaScript 



// Reemplazar elementos:

lista7.children[0].replaceWith(nuevoElemento7);		// Básicamente le dije al navegador que al primer hijo del elemento de referencia, lo reemplace por ese nuevo elemento creado en JavaScript









/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------







 _____Clonar y eliminar elementos_____


	element.cloneNode(true|false)			- Clona el nodo. Si le pasamos true clona todo el elemento con los hijos incluidos. Si le pasamos false, clona solamente el elemento sin los hijos. RECORDAR que tambien clona la clase id="", esto es peligroso porque solamente puede haber un id="" unico por elemento, y con este metodo tenemos dos iguales, el original y el clon

	element.remove()						- Elimina el nodo del DOM 

	element.removeChild(child)				- Elimina el nodo hijo del DOM

*/

lista8 = document.getElementById('lista8');
lista9 = document.getElementById('lista9');
lista10 = document.getElementById('lista10');
lista11 = document.getElementById('lista11');


 

// Clonar elementos INCLUYENDO HIJOS:				
lista8.after(lista8.cloneNode(true));				// Acabo de crear un clon del elemento lista8 CON SUS HIJOS INCLUIDOS. A su vez para poder apreciar al clon, lo inserte en el .html con esta propiedad vista en este mismo apunte
													  
// Clonar elemento SIN INCLUIR HIJOS: 				
lista9.after(lista9.cloneNode(false));				// Acabo de crear un clon del elemento lista9 SIN SUS HIJOS INCLUIDOS. A su vez para poder apreciar al clon, lo inserte en el .html con esta propiedad vista en este mismo apunte				
													// Dato: Pinte la caja de los elementos para clonar porque en este caso al no incluir a los elementos hijos <li>, da la impreción de que no hay nada ahí, cuado realmente hay una etiqueta <ul> que no se puede apreciar por la falta de contenido. Al pintarlo por lo menos se puede apreciar que hay una caja 

// Eliminar el nodo:
lista10.remove();									// Le dije al navegador que eliminara todo el lemento lista10, incluyendo todo su contenido y nodos hijos 


// Eliminar un nodo hijo:
lista11.removeChild(lista11.children[1]);			// Le dije al navegador que eliminara especificamente al segundo hijo del elemento lista11

