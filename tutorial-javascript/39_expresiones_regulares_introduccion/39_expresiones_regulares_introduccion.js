/*

															_____Expresiones Regulares - Introducción_____		


 - Página para chequear las expreciones regulares:
   https://regex101.com/



 - ¿Que son las expresiones Regulares?
   Son una secuencia de caracteres que forman un patrón de busqueda, principalmente utilizada para la busqueda de patrones de cadenas de caracteres u operaciones 
   de sustituciones 
   

 - ¿Para que sirven? 
   - Esta en el programador el uso que se les va a dar. Pero un uso muy comun que se les da, es como herramienta para "validar formularios" (tema ya visto en el 
     apunte "38_formularios_validacion_simple"). Más precisamente para la validación de emails. De esta manera se puede verificar si un mail esta escrito de manera 
     correcta, ya que un mail valido tiene varias reglas como que tiene estar en minusculas, debe tener un solo "@", antes y despues del @ debe haber contenido, el 
     punto "." tambien debe tener contenido antes y despues, debe haber un ".com" al final, etc

   - Como se puede aspreciar, poner tosas esas reglas nos daria una cadena ENORME de "if" uno atras del otro para cada regla. Con las "Expreciones regulares" se puede 
     hacer eso mismo en una sola linea de codigo



 - Banderas: 
   Son propiedades opcionales para las expreciones regulares. Se pueden pueden poner una o más banderas al mismo tiempo. 
   Hay varias banderas pero estan son las más usadas 

		- i						Ignore case. No diferencia entre mayúsculas y minúsculas. Sin esta bandera solamente me seria devuelta la palabra exacta que 
								busco, repetando cada mayúscula o minúscula 

		- g						Global. Busca de forma global, es decir, no se detiene luego de encontar la primera coincidencia. Sin esta bandera solamente 
		 						me seria devuelta la primera palabra que se encuentre en el texto con esa coincidencia         


 - Tipos de sintaxis: 
   	- Hay tres formas distintas de crear una expreción regular. Esta en nosotros elegir la opción que nos parezca más comoda ya que las tres hacen lo mismo  		

 		1- /patron/bandera								Ej:    const regEx = /Holiwis/gi

		2- new RegExp('patron', 'bandera')				Ej:	   const regEx = new RegExp('Holiwis', 'gi')	

		3- new RegExp('/patron/', 'bandera')			Ej:    const regEx = new RegExp('/Holiwis/', 'gi')


	- Por convencion, las constantes que guardan las expreciones regulares llevan el nombre de "regEx"

	- Cuando se agragan más de una bandera, estan deben estar juntas. Para este ejemplo use la bandera "g" y la bandera "i", y al estar juntas se escribe como "gi".
	  Recordar que es igual de valido poner "ig"
*/







/* Como ejemplo, vamos a buscar todas las palabras "loren" que estan dentro de una etiqueta <p> que esta dentro del .html 
   Como requisito, se debe buscar esta palabra sin importar si lleva mayusculas. Y si dicha palabra se repite tambien hay que buscar esas repeticiones */

const text = document.getElementById('text').textContent		// Recordar poner el ".textContent" ya que solamente nos interesa eso, de lo contrario nos devolvera el elemento entero

const regEx = /lorem/gi											// Por convencion, las constantes que guardan las expreciones regulares llevan el nombre de "regEx"	  // Como se puede apreciar, estoy buscando la palabra "lorem". Como bandera tengo la "g" y la "i" escritas una al lado de la otra, el orden de esas letras es indiferente, también seria valido poner "ig". Como se puede apreciar estoy buscando TODAS las palabras "loren" del texto indiferentemente de que si estan escritas con mayúsculas o minúsculas   
   
console.log(regEx.test(text))									// .text() es un metodo que se utiliza en las expreciones regulares. Nos devuelve un "true" o un "false" en función de que si dicha palabra esta en el texto. No confundir con el elemento para arrays ".includes()", test() es un elemento para ser utilizado en las expreciones regulares
																// Como la palabra "lorem" esta en el texto, el navegador me va a devolver un "true" 




