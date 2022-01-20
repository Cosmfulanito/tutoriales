/*

																	_____Destructuring_____



 - La destructuración es una expreción de JavaScript que hace posible la extracción de datos de arreglos u objetos
   Osea, es una alternativa más sencilla para acceder al "valor" de una "key" de un objeto. De esta forma mejoramos el flujo y la velocidad de trabajo

 - Normalmente para acceder a un valor especifico de una key de un objeto, había que usar el metodo del punto, de esta forma teniamos que poner el nombre del objeto,
   seguido de un punto, y luego de una key (en caso de haber keys intermedias, tambien habia que ponerlas). 	Ej: nikin.cuerpo.ojos.color   =>  "verde"
   
   Con la destruccturación podemos poner una unica palabra que represente todos los nodos seleccionados de ese objeto.    Ej: ojosColor   =>   verde
   	
*/





// _____Destructurin en Objetos:_____


// Objetos de prueba:
const person1 = {
	name: 'Nikin',
	age: 26,
	email: 'nikin@gmail.com'
}

const person2 = {
	name2: 'Nikin',
	age2: 26,
	email2: 'nikin@gmail.com'
}

const person3 = {
	name3: 'Nikin',
	age3: 26,
	email3: 'nikin@gmail.com'
}



/* Forma tradiciconal para acceder a un valor especifico:
   El problema de este metodo es que repito mucho la key "person" */
const name1 = person1.name
const age1 = person1.age
const email1 = person1.email

console.log(name1, age1, email1)			




/* Usando la destructuración: 
   Es exactamente lo mismo, pero usamos menos codigo*/
const {name2, age2, email2} = person2										// Con una sola linea de codigo creamos todas esas variables. Recordar que para que esto funciones, el nombre de la variable debe ser igual al de la key

console.log(name2, age2, email2)	




/* Renomber la variable mediante destructuración: */
const {name3: nombre, age3: edad, email3} = person3							// Eslo mismo que lo anterior, pero en este caso debo poner la key, seguido dos puntos ":", seguido del nombre que le deseo poner a la variable 

console.log(nombre, edad, email3)






//---------------------------------------------------------------------------------------------------------------------------------------------------------------------





// _____Destructuración en Arrays:_____

// Array de prueba: 
const numbers = [1, 2, 3, 4]




// Forma Tradicional de acceder a un valor del Array:
console.log(numbers[1])




// Usando la destruccturazión para acceder a un valor del Array
const [primeraPosicion, segundaPosicion, terceraPosicion] = numbers

console.log(segundaPosicion)






//---------------------------------------------------------------------------------------------------------------------------------------------------------------------






// _____Destructuración en funcines:_____

// Objeto de reerencia:
const person4 = {
	name4: 'Nikin',
	age4: 26,
	email4: 'nikin@gmail.com'
}



// Meter un objeto entero y que me devuelva unicamente el valor de una key:
const printName = ({name4}) => {										// Con destructurin tengo acceso al valor de una key especifica, aunque más abajo cuando llame a esta función meta un objeto entero    						
	console.log(name4);
}

printName(person4)														// Si bien meti un objeto entero, lo que se me esta devolviendo es el valor de una "key" de este




// Meter un objeto entero y que me devuelva unicamente el valor de una key y a su vez renombrarla:
const printAge = ({age4: añitos}) => {										
	console.log(añitos);
}

printAge(person4)








//---------------------------------------------------------------------------------------------------------------------------------------------------------------------







/* _____Destructuración en Axios:_____
   Esto sirve para cualquier petición a demas de Axios 
   La petición me va a devolver un objeto, entre toda la informacion que me brinda, yo solamente quiero acceder a la key "data" */ 
   	



// Metodo tradicional:
// (Comento codigo para que no me de error al por existir dos funciones con el mismo nombre)
// const getUsers = async () => {
// const users = await axios.get('https://jsonplaceholder.typicode.com/users')				

// console.log(users.data)											
// }

// getUsers()





// Metodo con destructuring:
const getUsers = async () => {
	const {data: users} = await axios.get('https://jsonplaceholder.typicode.com/users')				// De esta manera, entre todas las keys que me devuelve el objeto. Con destructuring solamente me devuelve la key "data" ya que es lo unico que necesito en este caso

	console.log(users)											
}

getUsers()



