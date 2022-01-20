/*

														_____Dom - Traversing (Recorrer el DOM)_____



 - Dom Traversing:  	- "Atravezar el DOM". Básicamente es situarse en un nodo y saber movernos hacia arriba o hacia abajo en funcion de ese nodo que usamos 
                           como referencia.  													


						- Como hallar los siguientes nodos de nuestro elemento de referencia:
						  Nota: Segun Dorian todos los elementos son nodos. Por ende apenas no hay direfencia entre usar el sufijo Node o Element

								- Padre: 		Llamado "parent", hace referencia al nodo del que deciende nuestro nodo de referencia

												.parentNode				Devuelve el nodo padre (que puede ser o no un elemento)

												.parentElement			Devuelve el nodo elemento padre. Todos los elementos son nodos, por ende va a devolver lo 
																		mismo que .parentNode 

												 NOTA	 				Los nodos del tipo Document y DocumentFragment nunca van a tener un elemento padre, 
																		parentNode devolverá siempre un null. Esto se debe a document es el prunto más alto del DOM




								- Hijos:		Llamado "child", hace referian al nodo/s que decienden de nuestro nodo de referencia

												NOTA: 						Con los hijos hay que tener cuidado con el sufijo Node o con cualquier cosa que vuelva 
																			nodos en vez de un elemento, ya también me va a devolver un texto como si fuera un 
																			elemento. Ese texto seria el salto de linea "\n". Hay que tener en cuenta esto a la hora 
																			de navegar por nodos con los hijos o hermanos 

												.chilNodes 					Devuelve todos los nodos hijos de nuestro elemento de referencia
											
												.children 					Devuelve todos los nodos elementos hijos

												.firstChild					Devuelve el primer nodo hijo	

												.firstElementChild			Devuelve el primer nodo elemento hijo

												.lastChild					Devuelve el último nodo hijo

												.lastElementChild			Devuelve el último nodo elemento hijo

												.hasChildNodes()			Devuelve "true" o "false"  dependiendo de que si el nodo tiene o no hijos respectivamente
												



								- Hermanos:		Llamado "siblings" sinonimo de brother, son los nodos que estan a la misma altura que nuestro nodo de referencia

												NOTA: 						Con los hermanos hay que tener cuidado con el sufijo Node o con cualquier cosa que vuelva 
																			nodos en vez de un elemento, ya también me va a devolver un texto como si fuera un 
																			elemento. Ese texto seria el salto de linea "\n". Hay que tener en cuenta esto a la hora 
																			de navegar por nodos con los hermanos o hijos

												.nextSibling				Devuelve el siguiente nodo hermano (nodo hermano que fue declarado despues)

												.nextElementSibling			Devuelve el siguiente nodo elemento hermano (elemento hermano que fue declarado despues) 

												.previusSibling				Devuelve el nodo hermano anterior a este (nodo hermano que fue declarado antes)

												.previusElementSibing		Devuelve el nodo elemento anterior a este (elemento hermano que fue declarado antes)




								- Cercano:		.closest(selector)			Selecciona el nodo más cercano que cumpla con el selector. Hasta donde se, hasta a 
																			principios del 2019 era experimental, actuamente no tengo idea 	

*/
	




const referencia = document.getElementById('referencia');			// Usamos este <ul> como referencia. Recordar que este elemento tiene aun <nav> como padre ademas ademas de varios <li> y otro <ul> como hijos
const titulo = document.getElementById('titulo');
const nav = document.getElementById('nav')




// _____Padre:_____

// .parentNode
console.log(referencia.parentNode);							// Me devuelve <nav> ya que este es el nodo padre de nuestro nodo de referencia

// .parentElement
console.log(referencia.parentElement);						// Dicho por Dorian, me va a dar el mismo resultado que parentNode, porque los elementos son nodos... Osea, tanto Node como Element por lo general devuelven lo mismo 

// Nota:
console.log(document.parentElement);						// Me va a delvolver "null", ya que el document es la base del DOM. Es como si fuera el mismo archivo .html   // Lo mismo ocurriria si pusiera un "fragment"






// _____Hijos:_____

// .children
console.log(referencia.children);							// Me va a devolver todos los elementos hijos de nuestro elemento de referencia. Osea, las etiquetas [li, li, li, ul] 
console.log(referencia.children[2]);						// Me va a devolver especificamente el tercer elemento hijo (recordar que empieza a contar a partir del 0)

// .firstElementChild
console.log(referencia.firstElementChild);					// Me va a devolver el primer elemento hijo

// .lastElementChild
console.log(referencia.lastElementChild);					// Me va a devolver el el último elemento hijo

// .hasChildNodes()
console.log(referencia.hasChildNodes())						// Me va a devolver "true" porque este elemento SI tiene nodos hijos


// Nota:			
															// Con los hijos hay que tener cuidado con el sufijo Node o con cualquier cosa que vuelva nodos en vez de un elemento, ya también me va a devolver un texto como si fuera un elemento. Ese texto seria el salto de linea "\n". Hay que tener en cuenta esto a la hora de navegar por nodos con los hijos o hermanos 
// .clildNodes
console.log(referencia.childNodes);							// Me va a devolver todos los nodos hijos de nuestro elemento de referencia. Incluyendo a nodos que son texto que sirven a modo de salto de linea 

// .firstChild
console.log(referencia.firstChild);							// Me va a devolver el primer nodo hijo. Es este puede ser un texto que sirven a modo de salto de linea 

// .lastChild
console.log(referencia.lastChild);							// Me va a devolver el último nodo hijo, este puede ser un texto que sirven a modo de salto de linea 






// _____Hermanos:_____

// .nextElementSibling
console.log(referencia.nextElementSibling);					// Me va a devolver al siguiente elemento hermano. Me va a dar como resultado "null" devido a que este elemento de referencia no tiene elementos hermanos. Y mucho menos un elemento hermano haya sido declarado despues de este (cosa que busca esta propiedad) 
console.log(titulo.nextElementSibling);						// Para este ejemplo estoy utilizando al elemento "titulo" que en este caso SI tiene un elemento hermano que le sigue despues de el. Esta es la etiqueta <nav>

// .previousElementSibling
console.log(referencia.previousElementSibling);				// Me va a devolver al elemento hermano anterior. Me va a dar como resultado "null" devido a que este elemento de referencia no tiene elementos hermanos. Y mucho menos un elemento hermano haya sido declarado antes que este (cosa que busca esta propiedad) 
console.log(nav.previousElementSibling);					// Para este ejemplo estoy utilizando al elemento "nav" que en este caso SI tiene un elemento hermano que le sigue despues de el. Esta es la etiqueta <h1>


// Nota:													// Con los hermanos hay que tener cuidado con el sufijo Node o con cualquier cosa que vuelva nodos en vez de un elemento, ya también me va a devolver un texto como si fuera un elemento. Ese texto seria el salto de linea "\n". Hay que tener en cuenta esto a la hora de navegar por nodos con los hermanos o hijos										

// .nextSibling
console.log(referencia.nextSibling);						// Me va a devolver el siguiente nodo hermano, este puede ser un texto que sirven a modo de salto de linea 

// .previousSibling
console.log(referencia.previousSibling)						// Me va a devolver el nodo hermano anterio, este puede ser un texto que sirven a modo de salto de linea 








// ______Ejemplos de como navegar por el DOM:_____

// Ej N°1: Encontrar al abuelo
console.log(referencia.parentElement.parentElement);		// Aquí lo que hice fue ir al padre del padre nuestro elemento de referencia (osea, el abuelo)

// Ej N°3: Saber cuantos elementos hermanos tengo 
console.log(nav.parentElement.children)						// Básicamente le estoy preguntando al navegador cuantos hijos tiene el elemento padre del elemento de referencia (incluyendolo). Con esto puedo saber cuantos hermanos son en total (incluyendolo). Uso al elemento <nav> de referencia ya que tiene varios hermanos. En total son 4, hay un <script> extra que nosotros no pusimos ni tampoco podemos ver que proviene del mismo .html, viene por defecto para darle funcionalidad a la página

// Ej N°3: Saber si el primer nodo hijo de mi elemento tiene hijos 
console.log(referencia.firstChild.hasChildNodes());  		// Le estoy preguntando al navegador si el primer nodo hijo del elemento de referencia tiene hijos. Como no los tiene me va a devolver un "false". Esto se debe a que el primer Nodo es un texto que sirve como salto de linea, y este texto no tiene nodo hijos


