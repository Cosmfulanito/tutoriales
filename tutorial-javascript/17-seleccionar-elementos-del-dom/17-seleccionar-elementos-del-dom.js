/*

												_____Seleccionar elementos/nodos del DOM_____


	El apunte es complejo por eso se recomienda ir al link del video
	https://www.youtube.com/watch?v=_aMg42Zqxa8&list=PLROIqh_5RZeBAnmi0rqLkyZIAVmT5lZxG&index=26											
	https://www.udemy.com/course/draft/2834790/learn/lecture/18205544#overview



 - Recordar que nos referimos a "elementos" cuando estamos hablando de HTML y de "nodos" cuando estamos en el DOM  

 - Recordar que un "nodo" no es más que un objeto (como ya vimos en el apunte de POO). 
   Por ende un nodo como cualquier otro objeto, tiene un conjunto de varios tipos de propiedad/valor
  
 - Lo que estamos tratando de hacer aquí es poder acceder y modificar dichas propiedades desde JavaScrip.




 
 - Cómo acceder a los contenidos del nodo: 
    
	- Hay tres maneras de acceder a las propiedades de los elementos/nodos del DOM:
	  Recordar que debemos guardar el nodo (y por ende, todos sus conjuntos de  propiedades/valor) en una variable del tipo "const" con alguno de estos metodos

			1- document.getElementById("id")								Nos permite acceder a un elemento mediante su "id" (hay un solo id por elemento) 

			2- document.querySelector(".selectorCSS")						Nos permite acceder al primer elemento que coincida con el nombre del selector CSS (se puede usar el mismo selector en varios elementos, en este caso solo se aplicara en el primero). Recordar que como todo elemento CSS, su nombre debe llevar un punto "." al principio, de lo contrario no funcionara. Recordar que son validos todos los selectores de CSS, incluso esos selectores de nombres especiales que al aplicarlos en un archivo .css aplican cambios a los que tienen una parte del nombre del selector
			   element.querySelector("elementoCSS")							Misma logica que lo anterior, pero en este caso ponemos el nombre del elemento (como es un elemento no lleva un ponto como en el caso anterior)

			3- document.querySelectorAll(.selectorCSS)						Similar al metodo anterior pero en este caso nos permite acceder a todos los elementos que coincidan con el nombre del selecctor CSS. Devuelve un nodeList. Recordar que como todo elemento CSS, su nombre debe llevar un punto "." al principio, de lo contrario no funcionara											
			   elemennt.querySelectorAll(selectorCSS)						Misma logica que lo anterior, pero en este caso ponemos el nombre del elemento (como es un elemento no lleva un ponto como en el caso anterior)											*/ 


// Ej: id
const titulo = document.getElementById("titulo");						// El primer titulo es el nombre de la variable que acabo de crear donde va a ir guardada toda la informacion del id. El segundo "titulo" es el nombre del id que le di a la etiqueta <h1> en el archivo .html 

console.log(titulo);													// Ahora podre ver en la consola del inspector de elementos todos las propiedades propias del de nodo "H1" y sus val
console.dir(titulo);													// Como ya vimos en el apunte anterior, en algunos navegadores como Chrome u opera no aparece el desplegable que muestra todas las propiedades del nodo. Por ese motivo estamos obligados a usar "console.dir()" en vez de "console.log()" 
console.log(titulo.textContent);										// Si queremos acceder a una propiedad especifica entre todas las que tiene el nodo, solamente tenemos que poner el nombre de la variable segido de un punto "." y luego el nombre de la propiedad el cual queremos saber su valor propia del nodo. En este caso es el contenido del titulo


//Ej: selectorCSS (document)
const parrafo = document.querySelector(".parrafo")						// "querySelector" aplicado en un "ducument"

console.log(parrafo);
console.dir(parrafo);


//Ej: selectorCSS (element)
const span = parrafo.querySelector("span");								// "querySelector" aplicado en un "element". 	En este caso estamos accediendo a un elemento desde otro elemento especifico. De esta manera la busqueda es más especifica. 	Incluso puede ser aun más especifico, ejemplo exagerado: 	const span = document.getElementById("title").querySelector("span").querySelector("a");  

console.log(span);
console.dir(span);


// Ej: all selectorCSS
const parrafo_all = document.querySelectorAll(".parrafo");				// Acabo de acceder a la indormación de todos los selectoresCSS que tienen el nombre ".parrafo". En este caso son 3 en total (por los 3 parrafos que hay en el .html) por ende en la consola del inspector de elementos me va a aparecer un deplegable con forma de Array (aunque no lo es) donde me va a mostrar el conjunto de propiedades/valores de los 3 selectores // En el caso anterior me mostraba todo esto pero unicamenete para el primer selector con este nombre. En este caso accedemos a todos los selectores 

console.log(parrafo_all);												












/* 
 - Cómo cambiar el valor de alguna de las propiedades de un nodo desde JavaScript:

	variable-que-guarda-las propiedades-del-nodo.propiedad-del-nodo = "valor"						Recordar que la variable es la constante ya creada como se mostro más arriba

    Recordar que en el caso de los selectoresCSS, solamente puedo cambiar el valor de la propiedad de uno solo de ellos. Para porder hacer lo con todos tengo que convertilo en un Array								*/


//Ej: selectorCSS (document)
titulo.textContent = "Titulo cambiado desde el DOM en el .js"										// En este caso lo que acabo de hacer es cambiar el valor original del tetxo del nodo H1 por este texto. Osea, la etiqueta <h1> me va a mostrar este texto porque su contenido acaba de ser reemplado


// Ej: all selectorCSS
parrafo_all[0].style.color = "red";																	// Especificamente el primer parrafo va a estar en color rojo. 
																									// Recordar que solamente puedo cambiar el valor de la propiedad de uno solo de los selectoresCSS. Para porder hacer lo con todos tengo que convertilo en un Array
																									// Para cambiar los estilos de CSS siempre tengo que poner .style, ya que dichas propiedades (como color, height, width, backgroundColor) estan dentro de la propiedad .style 










/*
 - Comó convertir los selectoresCSS en un Array:																																	
   Esto es muy util por si queremos cambiar el valor de alguna alguna propiedad todos los elementos que comparten el mismo selectorCSS al mismo tiempo. De lo contrario deveria cambiarlos uno por uno como en el ejemplo de arriba							 */
   

// Metodo N°1:	Mediante un Spread Operator 	
// Un problema que tiene este metodo es que no funciona en todos los navegadores, hasta que su suporte no sea total, se recomienda el segundo metodo					
const parrafo_all_spread = [...document.querySelectorAll(".parrafo")];								// Ahora los selectores ".parrafo" se comvirtieron en un Array		

parrafo_all_spread.map(p => p.style.color = "red");													// Ahora todos los parrados son de color rojo.   Recordar que .map() es una propiedad ya vista de los Arrays, por ese motivo ahora funciona 


// Metodo N°2: Mediante un Array.from()
const parrafo_all_array = Array.from(document.querySelectorAll(".parrafo"));

parrafo_all_array.map(p => p.style.fontFamily = "cursive");											// Ahora la fuente de los textos sera "cursive"   // Como se puede apreciar, puese "fontFamily" en vez de "font-family", eso es porque a diferencia de CSS, JavaScrip no acepta guion  "-"







																									


