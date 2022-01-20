/*

																_____async / await_____



 - Es una implementación para hacer "Funciones Asincronas" de forma nativa en JavaScript

 - Es nesesario entender de "promesas" para entende este tema

 - Como ya sabemos, las funciones se ejecutan en orden de como se van leyendo. Las funciones que estan escritas primero arriba de todo se ejecutan antes que las que
   estan abajo. 
    A pesar de esto, hay funciones llamadas "funciones asincronas". Estas funciones pueden ejecutarse en distinto orden a como fueron escritas. Un ejemplo de esto 
   seria que la primera función se ejecute 10 segundos despues de ser leida. Mientras pasa el tiempo se van a ejecutar las demas funciones 
    El problema radica en que puede llegar a ocurrir que una función, llamamosle función n°2, es dependiente del resultado de la primera funcíon la cual se ejecuta 
   10 segundos más tarde. Lo que va a ocurrir es que la segunda función se va a ejecutar antes de tener el resultado de la primera, dandonos un error.
    La solucion a este problema esta en decirle al navegador que no ejecuta la función n°2 hasta tener el resultado de la primera. Esto se logra mediante las 
	expereciones "asynt" y "await"

 - Saber esto es importante porque cuando pedimos informacón a una base de datos o a una API, la respuesta que nos devuelve tarda unos milisegundos en llegar. Y con
   este tiempo perdido, una segunda función podria ejecutarse sin tener la información de la primera que todavia esta esta esperando la respuesta de la API    



 - async			- Básicamente al poner la palabra "async" en la función, le indica al navegador que esta función ahora es una "función asincrona". 

 					- Es nesesario poner esta función en la toda función asincrona y en las funciones posteriores que son ependientes de ella 

					- RECORDAR que cuando ponemos async automaticamente estamos devolviendo una "promesa"


 - await			- Traducido como "esperar".  Es un operador que básicamnete le dice al navegador que no puede ejecutar una función hasta que tenga el dato que 
 					  nesecita que proviene de una función anterior. Dichos datos pueden provenir de otra primera función asincrona que puede tardar un tiempo en 
					  devolver un dato. Si la segunda funcíon se ejecuta antes de tener a mano ese dato me va a saltar un error. Esto se soluciona con "await". Donde 
					  literalmente le decimos al navegador que "espere" y que recien ejecute la segunda función cuando la primera tenga el valor 	
					
					- RECORDAR que este operador espera una "promesa" a modo de respuesta antes de ejecutarse. Por ende, la primera funcion tiene que devolver un 
		              "resolve" proveniente de una promesa

					- awaik no se puede ejecutar si no esa dentro de una función "async". Por ende a esta segunda función ademas de ponerle "await" tambien hay que 
					  ponerle un "asynt". Esto tiene sentido debido a que esta segunda función también va a ser asincrona, debido a que se va a ejecutar dentro de 
					  10 sgundos mientras las demas funciones posteriores se estan ejecutando   
*/




/* - Vamos a conectar dos funciones por medio de un callback. La primera función tendra un timer de 2 segundos. Una vez pasado ese tiempo le pasara esa información a la 
     segunda funcion
   - El problema esta en que la segunda función se va a ejecutar antes que la primera debido a que la primera va a tardar 2 segundos en devolver un resultado. 
     Obviamente va a saltar un error porque la segunda función es dependiente del resultado de la primera. Y esta segunda función se se va aejecutar sin tener el 
	 resultado de la primera  */

// Primera funcion	 
const getName = async () =>{								// Ahora esta es una "función asincrona"
	return new Promise((resolve, rejet) => {				// Esta es una promesa comun y corriente como ya vimos anteriormente
		setTimeout(() => {									// Aqui pusimos un "timer" para que dicha función se ejecute despues de 2 segundos. (Esto es para simular un pedido a una base de datos) 
			resolve('Nikin')
		}, 2000)
	})
}

// Segunda función:
// Depende del resultado de la primera la cual se va a ejecutar dentro de 2 segundos
const sayHello = async () => {								// Le estamos indicando al navegador que esta segunda función tambien es asincrona. (En este caso depende de que se resuelva la primera función que tarda 2 segundos). De esta manera puede ejecutarse el "await"
	const name = await getName()							// Con este await le estamos diciendo a la función que "espere" a tener el resultado de la primera función antes de ejecutarse
	return `Hello ${name}`
}

// Lamar a la segunda funcion:
sayHello().then(res => console.log(res))					// La llamo como llamaria a cualquier promesa









//---------------------------------------------------------------------------------------------------------------------------------------------------------------------






/* Ejercicio de prueba:
   - Vamos a hacer el mismo ejercicio qque se hizo en el apunte "31-promesas-introducción" pero en este caso utilizaremos el async / await 
     Básicamente vamos a copiar y pegar el mismo archivo creado en ese apunte y le haremos unos cambios para que funcione con async / await 
   - Lo que vamos a hacer aquí es que vamos a recibir un ususario en base al id que nosotro demos, tambien vamos a recibir el email corespondiente. Lo interesente 
     aquí es que el array de usuarios tiene 3 usuarios y el array de mails solamente tiene 2 mails. Osea, cuando ingresemos al tercer usuario me va a dar error, ya 
	 el usuario de id 3 existe pero no tiene email */


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
	
	
	
	const getUser = async (id) => {													// Borramos la promesa que había porque ya no hace falta debido a que "async" devuelve una promesa por si mismo 
		const user = usersList.find(user => user.id == id);					 
	
		if (!user) throw new Error(`No existe un usuaro con el id: ${id}`)			// En el apunte "31-promesas-introducción" usabamos reject en caso de que nos saliera un error. Con async / await usamos "throw new Error()". "New Error()" es un constructor que construye un "objeto Eror" y se le pasa el mensaje del error. "throw" Lanza una excepcion/error (el profesor no explica más sobre le tema). Y estos errores se controlan mediante un "bloque try...catch" que se pondran más abajo
		else return (user)															// Quitamos el resolve y pusimos un return
	}
	
	
	
	const getEmail = async (user) => {
		const email = emailList.find(email => email.id == user.id)
	
		if (!email) throw new Error(`${user.name} no tiene email`);
		else return({
			id: user.id,
			name: user.name,
			email: email.email
		})
}


const getInfo = async (id) => {								// Funcion para llamar a las dos funciones  // Esta función es asincrona porque para resolver las promesas de las funciones que llama hay que esperar un tiempo. Durante ese tiempo se ejecuta el "return" sin tener ningun dato, por ende nos va a dar un error. Esto se resuelve con el async / await. Por ende la función de abajo no se va a ejecutar hasta que la función de la cual depende termnine de ejecutarse y lo mismo con la de abajo, y así hasta legar al return
	try{													// Este es un "bloque try ... catch". "Try" significa "intenta", es decir intenta hacer esto y en caso que halgo no salga bien, mandalo al "catch". Catch por su lado captura ese error y lo imprime
		const user = await getUser(id)							
		const res = await getEmail(user)
		return `El email de ${user.name} es: ${res.email}`
	} catch (error) {
		console.log(error)
	}
}

getInfo(1).then(res => console.log(res))					// Poner los valores 1, 3 y 5 para ver como cambia la respuesta



