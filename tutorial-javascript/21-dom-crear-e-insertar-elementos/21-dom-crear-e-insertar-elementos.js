
/* 

													_____DOM - Crear e insertar elementos_____





 - Crear un elemento en JavaScript:				- Esta es la forma de crear un elemento/etiqueta en	JavaScript

												- const elemento = document.createElement("etiqueta")								
													Ej: const titulo = document.createElement("h1")				  






 - Escribir texto en un elemento: 				- Esta practica ya se vio en el apunte anterior pero pero nunca esta de más volver a repasarlo

												- elemento.textContent = "texto"									
													Ej: titulo.textContent = "Esto es un titulo"				  






 - Añadir un elemento al DOM:					- Esta es una de las tantas manera de poner un elemento/etiqueta al DOM/HTML
											  	  Recordar que hay que aclarar en que elemento padre ira este elemento hijo

												- El nuevo elemento siempre ira al final. En proximos apuntes se explicara como añadir nuevos elementos en la zona 
												  donde yo desee (al principio, al medio, al final, etc)
												
												- elementoPadre.appendChild()							
													Ej: body.appendChild(h1)






 - Escribir HTML en un elemento: (OBSOLETO)		- Esta practica ya se vio anteriormente en apuntes anteriores. Básicamente funciona igual que un .textContent pero
				 							  	  con la diferencia de que aqui adentro ademas de agregar texto, también puedo poner codigo HTML
												
												- RECORDAR que esta no es la forma correcta de agregar un elemento/etiqueta al .html. La forma correcta es la que esta
												  arriba. Ademas de que esta propiedad esta obsoleta y ya no es un estandar debido a que fue reemplazada por 
												  .textContent

												- elemento.innerHTML = 'código HTML'											
													Ej: p.innerHTML = 'Hola soy un texto <span>muy bonito</span>'





 - Fragmentos de código:						- Un fragmento de codigo es una variable/contenedor donde nosotros vamos a escribir todo el HTML que nosotros queramos 
												  inyectar en el documento. Y una vez que tenemos todo ese HTML, inyectamos todos ese HTML de golpe 		
												  
												- Básicamente esto ocurre porque fragment no pertenece al DOM, pero luego toda esta información se agrega al Dom en un 
												  solo paso en vez de a partes 

												- Los motivos de esto se explican mejor en el ejemplo de abajo. Entonces de esta forma ahorramos muchimos recursos al 
												  navegador ya que mandamos todo de una sola vez

  												- document.createDocumentFragment()
 

*/






/* - Ahora a modo de ejemplo, vamos a crear y a modificar un elemento/etiqueta <li>. Utilizaremos dicho elemento a modo de ejemplo de lo aprendido y a su vez lo 
     utilizaremos en una página web 
	 
   - Lo que lo haremos es crear una lista con la etiqueta <ul> en el archivo .html, y dicha etiqueta va a alvergar varios valores representados por las etiquitas 
     <li>. Cada etiqueta <li> alvergara un dia de la semana, exepto el día lunes que no tendra una etiqueta. Dicha etiqueta la tendremos que crear nosotros al igual 
	 que su contenido 
	 
   - Estas son variables que creo de ante mano  para poder trabajar con ellas más adelamte:	*/
   const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

   const title = document.getElementById('title');
   const daysList = document.getElementById('daysList');










/* _____Crear un elemento en JavaScript:_____
   Recordar que dicho elemento se crea automaticamente sin la necesidad de guardarlo en un constante. Pero se recomienda hacerlo ya que al guardarlo ahí podemos 
   trabajar automaticamente con dicho elemento 																										*/

const itemList = document.createElement('li');				// Acabamos de crear un elemento <li> y lo guardamos en una constatante llamada "itenList"
															// Vamos a trabajar con este mismo elemento
															





														
/* _____Escribir texto en un elemento:_____
   Esto mismo ya lo vimos en el apunte anterior, pero viene bién recordarlo */

itemList.textContent = 'Lunes';

console.log(itemList);										// Como se puede apreciar, se creo una etiqueta/elemento con el texto: <li>Lunes</li>
console.dir(itemList);										// Aquí se puede apreciar toda la información de dicho elemento, incluyendo el textContent recien creado







/* _____Añadir un elemento al DOM:_____ */
daysList.appendChild(itemList);								// Acabamos de agregarle a la etiqueta/elemento <ul> la etiqueta <il> creada aquí en el JavaScript. Osea, a esta lista le acabamos de agregar su primer valor







/* _____Escribir HTML en un elemento: (OBSOLETO)_____ */ 	

title.innerHTML = 'DOM - Crear e insertar elementos <span>:3</span>';						// Reemplace el titulo original delo .html por uno exactamente igual pero con una etiqueta <span> extra que tiene un texto. Ahora el titulo tiene agregado esta linda carita :3 a modo de <span> 		
																							// RECORDAR que esta practica esta obsoleta desde que aparecio .textContent() y que tamoco es la forma correcta de agregar una etiqueta/elemento a nuesto HTML 








// ------------------------------------------------------------------------------------------------------------------------------------------------------------------- 



/* - Ejercicio de escribir los días: 
   - En este ejercio vamos a poner cada día del array "days" dentro de un <li> a cada uno y a su vez a cada <li> lo vamos a poner dentro de la etiqueta <ul>
   - Vamos a usar dos metodos: N°1: Metodo incorrecto visto en todos los tutoriales genericos. N°2: Metodo correcto  
   - Ambos metodos funcionan, pero el primero es incorrecto debido a que consume muchos recursos */   
   

/* N°1: Metodo visto en todos los tutoriales genericos
   - El problema de usar este metodo es que cada vez que insertamos un elemento, el DOM redibuja el arbol de nodos. Esto es un gasto de recursos enorme y mucho más 
   - cuando se hace constantemente en un bucle. Para evitar este desperdicios de recursos que realentizana nuestra PC tenemos el segundo metodo  */

// for (const day of days) {
// 	daysList.innerHTML += `<li>${day}</li>`;			// El += es para que se sumen etiquetas <li> al .innerHTML. De lo contrario una etiqueta reemplazaria a la otra en vez de acumularse			
// }													
// Tengo este codigo comentado porque necesito trabajar  con la etiqueta <ul> en el ejemplo correcto



/* _____Fragmentos de código:_____
   N°2: Metodo corecto
   - Para evitar los problemas de gastos de recurosos del primer metodo, se invento el metodo de "Fragmentos de código" 
   - Un fragmento de codigo es una variable/contenedor donde nosotros vamos a escribir todo el HTML que nosotros queramos inyectar en el documento. Y una vez que 
     tenemos todo ese HTML, inyectamos todos ese HTML de golpe. Entonces de esta forma ahorramos muchimos recursos al navegador ya que mandamos todo de una sola vez	
   - Básicamente la logica de esto es que guardar información en el DOM consume muchos recursos y nosotros estamos haciendo esto 7 veces seguidas (uno por cada vuelta
	 del bucle for que representa cada día de la semana). Lo ideal seria hacerlo de una sola vez.
   - Para lograr hacerlo de una sola vez, vamos a utilizar la intefaz "fragment". Esta interfaz no pertenece al document y por ende tampoco al DOM. Es como si no 
     parte de la página web ya que es una interfaz paralela al DOM. En el fragament vamos a guardar la informacíon con los 7 bucles (ya que no gasta tantos recursos
	 como el DOM). Y una vez que tengamos toda la informacion el fragment, la pasamos de UNA SOLA VEZ al DOM
   - De esta forma pasamos toda la información de una sola vez, en vez de hacerlo en 7 partes  */
   
const fragment = document.createDocumentFragment();						// Por convención esta variable que guarda al fragment se le debe poner el nombre de fragment 

for (const day of days) {												// En este bucle "for of" obtendre los dias del array "days"
	const itemList_2 = document.createElement('li');					// Acabo de crear una segunda variable itemList para poder trabajar más comodo y no sobreescribir todo lo anterior. Es lo mismo no cambia en nada. La funcion de esta linea de codigo dentro de este bucle es para que se creen elementos <li> con cada vuelta de bucle
	itemList_2.textContent = day;										// Cada <li> que cree con este bucle, almacenara en su textContent un día distinto del Array  											
	fragment.appendChild(itemList_2);									// Hasta aquí es todo igual al primer metodo. Con la diferencia de que la informacion se guarda en el fragment en vez del DOM			
}																		
																		
daysList.appendChild(fragment);											// Ahora pasamos toda la información del fragment de una sola vez al DOM. Más especificamente al elemento daysList. De esta forma ahorramos muchimos recursos al navegador ya que guardamos toda esa informacion de una sola vez, en vez de hacerlo 7 veces  



	







// -------------------------------------------------------------------------------------------------------------------------------------------------------------------



/*															 _____Ejercio:_____


 - Con lo aprendido tratar de rellenar el <select> con los meses del año 
 - Tip: Es exactamente lo mismo que hicimos en "Fragmentos de código:" pero en este caso usamos meses en vez de días. Recordar que la etiqueta <option> que es lo que
   contiene los valores del <select>, también cuenta con el atributo value="" el cual tiene a dentro un valor propio que es el que se envia al servidor */


const selectMonths = document.getElementById('selectMonths');
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

fragment_2 = document.createDocumentFragment();								// Acabo de crear una interfaz fragment la guarde en una variable con el mismo nombre. Dentro del fragment guardare toda la información que se tenga que guardar por partes, para que no lo haga el DOM y gaste recursos 

for(month of months){														// En este bucle "for of" obtendre los meses del Array "months"
	const optionMonth = document.createElement('option');					// Estamos creando un <option> nuevo por cada vuelta de bucle. Cada <option> contendra un textContent con el mes correspondiente y tambien se le asiganara un valor propio a su atributo value=""  (Recordar que los valores deben ir en minusculas)	 
	optionMonth.textContent = month;										// Aquí estamos haciendo que el texto del textContent del <option> sea igual que su mes correspondiente
	optionMonth.setAttribute('value', month.toLowerCase())					// Recordar que se debe usar el metodo .setAttribute() para cambiar los valores de un atributo, en este caso el atribute value="". Recordar que los valores por convención siempre van en minusculas, por ese motivo utilizo el metodo .toLowerCase()
	fragment_2.appendChild(optionMonth);									// Toda esa informacion la guardamos dentro del fragment
}

selectMonths.appendChild(fragment_2);										// Ahora pasamos toda la información de los 12 <options> creados en el bucle al DOM. Más especificamente al elemento selectMonths que vendria a ser la etiqueta <select>. De esta forma pasamos en toda esta informacion al DOM de una sola vez, en vez de hacerlo dentro del bucle for en 12 partes (por cada mes del año)

																			// Ahora tengo los elementos <option> son su respectivo texto y su propio valor en el atributo value=""  