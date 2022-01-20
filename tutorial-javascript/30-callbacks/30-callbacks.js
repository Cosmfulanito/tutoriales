/*

																______Callbacks:_____



 - El objetivo de entender los "callback" es porque más adelante vamos a ver "promesas". Pero para entender las promesas primero debemos saber cual es la necesidad 
   que tenemos de usarlas y porquer reemplazan a los callbaks, ya que esteos ultimos dan problemas





 - Un "callback" es una funcion que se ejecuta dentro de otra función.

 - Los "callback" no son asincronos. Es decir, se ejecutan por orden (coomo cualquier otra función normal) 										
 
 - Recordar que los callback pueden dar o no herrores 																			*/

 



/* _____Ej1: simple_____																											 
   - Vamos a a hacer una funcion como cualquier otra, pero a a la hora de llamarla como valor de parametro vamos a poner otra función. Esto seria el funcionamiento de
     un callback*/

const getUser = (id, cb) => {							// Por convencion el parametro que va como callback se escribe como "cb"
	const user = {
		name: 'Nikin',
		id: id
	}

	if (id == 2) {										// Si el id es igual a 2 me tira este mensaje de error
		cb('El usuario no existe');
	} else{												// Caso contrario se ejecuta la función con normalidad
		cb (null, user);								// "null" es un valor para que pongo para forzar a que no haya errores
	}
}


getUser(1, (error, user) => {							// Aquí estamos llamando a la funcion y le estamos pasando los parametros deseados. El primer parametro es el numero de id (en este caso 1) y el segundo parametro es el callback que por supuesto es una función con parametros propios. Uno de esos parametros es el "error" (en caso de que no funcione) y el "usueario" que es lo que nos va a devolver la función en caso de que el callback si funcione  
	if (error){											// en caso de que tengamos un error que se me devuelva este mensaje
		return console.log(error)
	} 
	console.log(`User name is ${user.name}`);			// Si el callback se ejecuta bien, que haga esta función 
});										





/* ____Ej2: Complejo_____
   - En este caso vamos a poner un array de objetos para hacer de cuenta de que tenemos una base de datos con usuarios y otra con mails
   - Lo que vamos a hacer aquí es que vamos a pedir un ususario y con la respuesta del id, vamos a recibir el email coreespondiente. Lo interesente aquí es que el 
     array de usuarios tiene 3 usuarios y el array de mails solamente tiene 2 mails. Osea, cuando ingresemos al tercer usuario me va a dar error, ya el usuario de 
	 id 3 existe pero no tiene email  */
   

const usersList = [											// Esto es básicamete un array con objetos dentro, donde cada objeto representa a un usuario 
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


const getUser_2 = (id_2, cb_2) => {
	const user_2  = usersList.find(usuario => usuario.id == id_2)				// Con eso encontramos al valor del array. Osea, encontramos al usuario segun su id . sEsto esta esta en el apunte Arrays II 
	if(!user_2){																// Significa "si usuario no existe"  //   "!user"  es equilavente a poner "user  == undefined". undefined es el valor que me devuelve el navegador cuando no encuentra un valor en el array 
		cb_2(`No existe un usuraio con el id: ${id_2}`)
	}else	
		cb_2(null, user_2);
}

const getEmail_2 = (user_2, cb_2) => {
	const email_2 = emailList.find(email => email.id == user_2.id)
	if(!email_2){																// Significa "si usuario no existe"  //   "!user"  es equilavente a poner "user  == undefined". undefined es el valor que me devuelve el navegador cuando no encuentra un valor en el array 
		cb_2(`El usuario ${user_2.name} no tiene email`)
	}else	
		cb_2(null, {
			id: user_2.id,
			name: user_2.name,
			email: email_2.email
		});
}

getUser_2(1, (error, user_2) => {												// Si como primer parametro pongo 1 o 2 me va devolver el nombre de usuario junto con el email. Si pon 3 solamente me va a devolver el nombr de usuario. Y si pongo 4 o  más no me vaa  devolver nada  									
	if (error){
		return console.log(error);
	} 

	getEmail_2(user_2, (error, respuesta) => {
		if (error){
			return console.log(error);
		} 
		console.log(respuesta)
	})
}) 

/* 
 - Esto funciona pero es un quilombo, debido a que hacemos peticiones que nos devuelven cosas y con esas cosas hacemos más peticiones. 
   Este callback es corto, pero hay otros con muchas más variables que son imposibles de seguirles la loguica, estos se llaman los "Callback hell".
   
 - Debido a esta necesidad de simplificar las cosas se inventaron las "promesas", tema que veremos en el proximo apunte */