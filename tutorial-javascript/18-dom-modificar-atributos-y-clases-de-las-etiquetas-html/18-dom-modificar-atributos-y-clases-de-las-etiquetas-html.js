/* 


												DOM: Modificar atributos y clases de las etiquetas html desde JavaScript


 - Recordar, se le llama:
		- Atributo: 	Tipos de valores que modifican el comportamiento de una etiqueta HTML. El mejor ejemplo de esto es la etiqueta <input>, la cual tiene 
						distintas variantes de inputs (de texto, color, fecha, etc) según el valor de su atributo type"". También hay otros como id"", max="", 
						min="", class="", value="", etc.
		- clase:		class="" 	Tipo de atributo. Es una forma de identificara a uno o varios elementos dandole un nombre como valor. Se utiliza en CSS
		- element:		Es el elemento/caja/clase/etiqueta al que nos referimos. Para este apunte usaremos el valor del id=""






 - Hay varios tipos de modificadores, pero estos son los más importantes:


	- Atributos:				
			
			- elemento.getAttribute("atributo")										- Nos devuelve el atributo de un elemento especifico
								
			- elemento.setAttribute("atributo", "valor")							- Asigna un valor al atributo de un elemento especifico. Recibe dos parametos, el atributo que queremos modificar y el nuevo valor



	- Clases:					
	
			- elemento.classList.add("clase","clase",...)							- Nos permite añadir una o más clases (class="") a un elemento 

			- elemento.classList.remove("clase","clase"...)							- Nos permite remover una o más clases (class="") a un elemento

			- elemento.classList.constains("clase")									- Devuelve un True o False dependiendo de que si tiene la clase (class="") o no. Básicamente comprueba si dicha clase existe
			
			- elemento.classList.replace("claseVieja", "claseNueva")				- Reemplaza una clase (class="") ya existente por otra nueva. En primer parametro ponemos la clase que quremos sustituir y en el segundo parametro ponemos la clase nueva 
			
			- elemento.classList.toggle("clase", [force])							- Si el elemento tiene una clase (class="") se la quita, y sino se la pone. Tambien cuenta con un segundo parametro opcional [forse], toggle funciona con valores True o False, si da True hace aparecer este segungo parametro  // Esto se utiliza muchisimo en el menu de movil. Ej: Si hacemos clic en el icono de una hamburgesa, comprobamos si el menu tiene una clase que sea "mostrar el menu", si no la tiene muestra el menu, y si la tiene lo cierra 
			


	- Atributos directos:
	  (Son todos los atributos que tiene un elemento/nodo pero que no estan dentro de un desplegable cuando son mostrados en la consola del inspector de elementos)	
	  (Son muchisimos pero estos son un ejemplo de los más usados)

			- elemento.atributo_directo												- Ejemplo de esos atributos directos son id, value, textContent, etc

*/









/* 
Esto esta aquí solamente para poder trabajar con los elementos titulo (<h1>) y nombre (<input>)  																																								*/

const titulo = document.getElementById("titulo");
const nombre = document.getElementById("nombre");









// Atributos: .getAttribute
console.log(nombre.getAttribute("type"));						// Estoy accediendo al atributo type="" de la etiqueta <input>. Básicamente le estoy pidiendo al navegador que me muestre el valor del atributo type="". Me deberia devolver text ya que es un atributo del tipo texto (el que viene por defecto en un input)   
console.log(nombre.getAttribute("id"));							
console.log(nombre.getAttribute("class"));							


// Atributos: .setAttribute						
nombre.setAttribute("type", "color");							// Cambié el tipo de imput, antes era del tipo "text" y ahora es del tipo "color". Esto se puede apreciar perfectamente en la página web. Recordar, que hay una linea de codigo más arriba que hace que la consola del inspector de elementos muestre que es del tipo "text", eso ocurre por el flujo del programa. Si hubiera puesto esa linea por debajo de esta, me mostraria en la consola que es del tipo "color"









// Clases: .add
titulo.classList.add("Nueva-Clase");							// Acabo de gregar una nueva clase (class="") llamada "Nueva-Clase" a la etiqueta <h1> 
console.log(titulo);											// Esto me mostrara toda la información del elemento "titulo" (id="" de la etiqueta <h1>). Osea, me mostrara un texto que entre muchas cosas dice: class="tituloCSS Nueva-Clase", estas son la clase original y la nueva clase recientemente agregada


// Clases: .remove
//titulo.classList.remove("Nueva-Clase");						// Acabo de remover la nueva clase que agregue anteriormente. Comente esto porque por algún motivo que desconosco en vez de aplicar el cambio en cascada y mostar solamente el console.log() de abajo con la clase removida, tambien lo hace con el console.log() de arriba. 
//console.log(titulo);


// Clases: .constain
console.log(titulo.classList.contains("tituloCSS"));			// Como esta clase si existe dentro del elemento titulo, me va a devolver un "True"
console.log(titulo.classList.contains("Clase-inexistente"));	// Como esta clase no existe dentro del elemento titulo, me va a devolver un "False"


// Clases: .replace
//titulo.classList.replace("tituloCSS", "clase-de-reemplazo");	// Acabo de reemplazar una clase (class="") ya existente por otra. Esto esta comentado porque por algún motivo el cual desconozco esto no aplica el cambio en cascada. Osea, solamente el console.log() de abajo me deberia mostrar que la clase fue reemplazada, pero tambien me lo muestra el console.log() de arriba
//console.log(titulo);







// Atributos directos:
console.log(titulo.id);											// Me va a devolver el valor de id=""				
console.log(titulo.value);										// value=""	al no tener un valor, me va devolver "undefined"
console.log(titulo.textContent);								// Me va a devolver el texto de la etiqueta
console.log(titulo.innerHTML);									// Funciona como el textConten. Pero en vez de devolverme unicamente el texto, tambien me devuelve todo lo que este escrito en el, Incluido estiquetas de linea que esten adentro como <br>, <span>, etc 