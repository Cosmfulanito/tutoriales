/*

															_____Introducción a Promesas_____


 - Una "promesa" es un objeto que dentro tiene 2 callbacks

 - Las promesas fuero credas como reemplazo de los "callbacks" (tema visto en el apunte anterior) debido a que estos ultmos, mientras más funciones llamaban, se 
   hacian más complejos y menos entendibles. A estos callbacks inentendibles se los bautizo con el nombre "callbak hell" a modo de meme   */ 




/* 
 - Vamos hacer exactamente la misma función que hicimos en el apunte pasado, pero ahora usaremos las "promesas" en vez de los "callbacks2 para apreciar la diferencia  
 - En este caso vamos a poner un array de objetos para hacer de cuenta de que tenemos una base de datos con usuarios y otra con mails
 - Lo que vamos a hacer aquí es que vamos a recibir un ususario en base al id que nosotro demos, tambien vamos a recibir el email corespondiente. Lo interesente aquí 
   es que el array de usuarios tiene 3 usuarios y el array de mails solamente tiene 2 mails. Osea, cuando ingresemos al tercer usuario me va a dar error, ya el 
   usuario de id 3 existe pero no tiene email  */

const usersList = [								// Esto es básicamete un array con objetos dentro, donde cada objeto representa a un usuario 
	{
		id: 1,
		name: 'Nikin'
	},
	{
		id: 2,
		name: "laura"
	},
	{
		id: 3,
		name: "Carlos"
	}
];

const emailList = [
	{
		id:1,
		email:'nikin@gmail.com'
	},
	{
		id: 2,
		email: 'laura@gmail.com'
	}
];


const getUser = (id) => {
	const user = usersList.find(user => user.id == id);					// Recordar que hay dos "id". Uno seria la "key" del objeto "usersList" y el otro es el parametro de esta misma funcion. A su vez el "user" que esta dentro del parentesis es una variable que puse con ese nombre porque sí (podria tener cualquier otro nombre), no es el mismo "user" que declare al principio de la linea de codigo, son dos variables distintas 

	const promise = new Promise((resolve, reject) => {					// La forma de crear una promesa es mediante el objeto "Promise()".  	// La variable se puede declarar con el nombre que queramos pero por convencion se usa la palabra "promise".  		// Dentro de los parentesis metemos a modo de parametros los "callbacks". Estos dos parametros son el "resolve" y "reject" (Pueden llevar cualquier nombre pero se usan estos por convención, tambien se pueden ver como "res" y "rej"). Estos dos callbacks que funcionan como parametros son obligatorios. "resolve" se va a ejecutar cuando todo salga bien; y "reject" se va a ejecutar cuando algo vaya mal (Osea, cuando me falte aalgundato y me tire un error)   	// Así es como se hace una "promesa"
		if (!user) reject(`No existe un usuaro con el id: ${id}`)		// Si el usuario no existe, que se mande este mensaje
		else resolve (user)												// Caso contrario, que me decielva el resolve. 		// Se puede apreciar que en el caso del apunte anterior, cando usabamos unicamente los "callbacks", habia que poner entre los parentesis dos parametros (null, user). Con las promesas solamente hay que poner solamente el parametro de que la cosa salio bien osea (user); 												
	})								

	return promise 
}




const getEmail = (user) => {
	const email = emailList.find(email => email.id == user.id)

	const promise = new Promise((resolve, reject) => {
		if (!email) reject(`${user.name} no tiene email`);
		else resolve({
			id: user.id,
			name: user.name,
			email: email.email
		})
		
	})

	return promise
}






// Forma incorrecta de acceder a la información de una promesa:
console.log(getUser(1));												// Como se puede apreciar, me devuelve la promesa que dentro tiene el objeto, pero son datos rarisimos. Si quisiera acceder a una "key" del objeto no podria. Para solucionar esto tengo 
console.log(getUser(1).name);											// Como esto no es la forma correcta de acceder a la informaciond de una promesa, me va a devolver "undefined" 

// Forma correcta de acceder a la información de una promesa en caso de que no tire error:
getUser(1).then(user => console.log(user));								// Esta es la forma correcta de accder a la informacion de una promesa, Mediante el metodo then(). Esto lo que hace es "resolver" el contenido de la promesa (decimos "resolver" porque es el termino que se utiliza). RECORDAR que esto funciona siempre y cuando no haya un error de por medio
getUser(1).then(user => console.log(user.name));						// Como se puede apreciar, ahora sí podemos acceder a la "key" name del objeto que esta dentro de la promesa

// Forma correcta de accder a la informacion de una promesa en caso de que haya un error:
getUser(5).catch(err => console.log(err)); 								// Esta es la forma correcta de acceder a la información de una promesa en caso de que salga un error (En este caso no existe un usuario con el id con el numero 5) 


/* Forma correcta acceder a la información en de una promesa: 
   - Como no sabemos si va a haber un error o no, tenemos que usar el metodo .then() y el .cathc() a la vez */ 
getUser(2)																// Esta es la verdadera forma correcta de acceder a la informacion de una promesa, sepamos o no si hay un error o no
	.then(user => console.log(user))
	.catch(err => console.log(err))
getUser(7)																
	.then(user => console.log(user))
	.catch(err => console.log(err))



 
// Continuamos con la actividad: 										// Se recomiendacambiar el valor 1 por el 3 y el 5 para ver como cambian las respuestas
// Llamamos a la función 
getUser(1)																// Llamamos a la funcion getUser() y le pasamos un valor (en este caso 1). Resolvemos la promesa que nos da getUser, si no hubo error getUser nos va a devolver una determinada información. Esa información se la pasamos como parametro al metodo .then() de abajo que tiene la funcion getEmail()
	.then(user => {														// La información del getUser es pasada como parametro a la función getEmail(). Dicha función va a trabajar con esos datos y me va a devolver informacíon nueva en caso de que no haya ningun error de por medio. Esa información nueva pasa al metodo .then de abajo
		return getEmail(user)
	})
	.then(resolve => console.log(resolve))								// Este metodo .then() agarra la inforacón que le dio la función getEmail() y la imprime. Así de simple y ahí termina todo
	.catch(err => console.log(err))										// En caso de que las funciones getUser() o getEmail() tengan un error. Se imprimiran sus respectivos carteles de error 



