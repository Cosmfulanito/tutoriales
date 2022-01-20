/*

													_____Formularios - validación simple_____



 - En este apunte veremos formas de validar formuloarios. 
 
 - ¿Que es validar un formulario? 
   - Básicamente la "validación" son acciones que el desarrollador toma para que la información que el usuario envia a la base de datos este correcta. De lo 
     contrario esto podria ocacionar problemas al servidor. 

 - ¿Que podria ocurrir si no validamos los formularios?
   - Cuando un usuario envia información a una base de datos, este puede enviar información erronea por accidente. También podria saltearse siertos formularios y 
     no rellenarlos. 
      Un ejemplo de esto es cuando hay 5 <input> para enviar información y el usuario solo rellena 4 por accidente. Al faltar un valor, esto podría (o no) ocacionar
	 problemas en servidor	

   - También hay casos donde un usuario mal intencionado con conocimientos de JavaScript, mediante el uso de la consola cambia los atributos de los <input> haciendo 
     que llegue información extraña al servidor dañandolo o accediendo a información de el que no deberia

 - ¿Como se validan los formularios?
   - No hay forma concisa de hacerlo. Básicamente son todos los trucos que tenga el desarrollador a mano. Conocimientos que se ganan con el tiempo y la experiencia. 
     Tener en cuenta que estos usuarios mal intencionados también aprenden nuevas formas de eludir estas validaciones. Por ende esto es un aprendisaje constante de 
	 nuevas tecnicas para proteger a nuestros servidores

 - En este caso estamos validando desde el front, pero también es MUY IMPORTANTE hacerlo desde el back 	 

*/

const form = document.getElementById('form')
const button = document.getElementById('submitButton')

const name = document.getElementById('name')
const email = document.getElementById('email')
const gender = document.getElementById('gender')
const terms = document.getElementById('terms')





/* Primera forma de validar:
   - Construir un objeto que constenga las propiedades que son validad para el formulario 
   - Estos campos siempre van a estar en false a menos que la información este correcta segun nosotros*/ 
const formIsValid = {
	name: false,
	email: false,
	gender: false,
	terms: false
}

form.addEventListener('submit', (e) => {
	e.preventDefault()												// Este metodo ya se vio en el apunte "20-objeto-evento.js". Básicamente anula el evento por defecto del elemento selecciondo. En este caso hacemos que el boton no envie información (evento que hace por defecto). Esto lo hacemos para que el usuario mal intencionado no pueda enviar información a menos que nosotros se lo permitamos. Si bién en el .html el <button> tiene un atributo "disabled" para desactivarlo. Un "haker" podria borrar este atributo desde la consola
	validateForm()													// Luego de evitar que se envie el formulario, llama a esta función para que valide los datos. Dicha función sere creada más abajo
})

name.addEventListener('change', (e) => {							// Este evento se activa cada vez que haya un cambio en el <input> name. Osea, cada vez que escribamos una letra se activara y el valor del atributo "value" cambiara sera igual a la palabra que este escrita   // Se podria poner un "keyup" en vez de "change" y seria lo mismo porque escucharia cada vez que se pulse una tecla del teclado, pero no escucharia si el usurio pone esa información "copiando y pegando" con el mouese. Esto obiamente traeria problemas   
	if (e.target.value.trim().length > 0){							// Esto quiere decir que mientras haya una cantidad de letras mayor a 0 (osea, mientras haya contenido), la  key "name" del objeto "formIsValid" tiene como valor true.   // El metodo trim() devuelve el string/texto sin los espacios. Esto es importante por que el usuario puede poner una palabra y por accidente apretar la barra espaciadora sin saberlo, y para el navegador, el espacio es un caracter tan valido como cualquier otra letra 
		formIsValid.name = true
	}
})

email.addEventListener('change', (e) => {							// Como también es un <input> repetimos lo mismo que arriba 		
	if (e.target.value.trim().length > 0){				
		formIsValid.email = true
	}
})

gender.addEventListener('change', (e) => {							// En este caso estamos usando un input del tipo "radio", donde tenemos que seleccionar una casilla. El evento "change" también nos sirve aquí ya que estamos estamos escuchando la seleccion de casilla
	if(e.target.checked == true){									// Chequed es un nodo del target que es utilizado en los input del radio. Significa que una opcion fue seleccionada
		formIsValid.gender = true
	}
})

terms.addEventListener('change', (e) => {
	formIsValid.terms = e.target.checked							// Le estamos diciendo que el valor de la key "terms" del objeto "formIsValid" sera true o false en funcion del valor de "e.target.checked". Osea si el usuario selecciona ese <input> del tipo "checkbox", el valor sera true, de lo contrario sera false   

	e.target.checked ? button.removeAttribute('disabled') : button.setAttribute('disabled', true)	     // En caso de que checkbox este seleccionado, que me permita precionar el boton  	// Esto es un "operador ternario". Ya lo vimos en el apunte "6.Condicional-Operador ternario".  Básicamente esto funciona como un if, en caso de dar "true" que remueva el atributo "disabled" y en caso de "false" que lo agregue
})
 

const validateForm = () => {										// Esta es la función de validación. Debe chequear que todos los valores del objeto formIsValid sean true
	const formValues = Object.values(formIsValid)					// Object.values() convierte a los objetos en un array. De esta manera puedo recorrer unicamene los valores sin preocuparme de las keys. De esta forma se me hace más facil chequear que todos los valores sean "true"
	const valid = formValues.findIndex(value => value == false)		// Básicamente esto rescorre el array buscando como valor "false". De encontrarlo, mediante el findIndex() me va a devolver la posición del array. Si no encuentra nada, nos va a devolver un -1. Esto ultimo quiere decir que si nos devuelve un -1, todos los valores son "true" 
	if (valid == -1) {												// Como vimos en la linea de codigo de arriba, en caso de que me devuelva -1 significa que todos los valores del array estan en true. 
		form.submit													// Esto hace enviar la información del form
	}else{
		alert('Falta completar parametros')							// En caso de que el numero no sea -1 (osea, que algun valor del array sea "false"), que me muestre este cartel
	}
}
