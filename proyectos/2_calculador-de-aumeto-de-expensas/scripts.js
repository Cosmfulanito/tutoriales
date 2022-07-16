

/* 
Ver los links:		
	https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
	https://es.wikipedia.org/wiki/ISO_4217
	https://es.stackoverflow.com/questions/137181/como-puedo-ver-los-resultados-con-formato-pesos-0-00
*/


/* 	_____Funcion calcular pagos:_____
   	Los valores son:
		- amount: 							"Monto"	 				Comienza con un moto inical que luego ira incrementando segun el aumento	
		- months:							"Meses"					Cantidad de meses de contrato
		- increase:							"Incremento"			Es el aumento porcentual, recordar pasarlo a decimal. Osea, si el aumento es del 20% hay que hacer numero*1.2
		- adjustmentPeriod					"Periodo de ajuste"		Es el mes donde se hara el aumento del precio. Osea si el aumento es semestral (cada 6 meses), aquí debo poner como valor el numero 6  
*/ 



// Funcion que calcula el precio de cada mes de alquiler y a su vez crea elementos con sus respectivas clases
const pay = (amount, months, increase, adjustmentPeriod) => {
	let total = 0;																// Este es el total de dinero juntado en conjunto con todos los cobros de todos los meses
	increase = (increase / 100) + 1;											// Con esta cuenta lo que hago es convertir un valor porcentual en uno decimal. Osea (20% /100) = 0.2    Si quiero sumar el 20% de un valor (en este caso 5) la cuenta seria =>  5*1.2   porque "1 = 100%"" +  "0,2 = 20%" 
	const fragment = document.createDocumentFragment();							// Recordar que "fragment" es un elemento que NO PERTENECE AL DOM, si tenemos que crear muschos modos, lo guardamos en el "fragment". Luegos pasamos esos nodos a un node verdad que pertenece al DOM, todo esto en solo movimiento. De esta manera ahorramos recursos									
	for (let i = 1; i <= months; i++) { 										// Este es un bucle que cuya cantidad de vueltas es la cantidad de meses
		if (i % adjustmentPeriod === 0) {										// Puse como condicion que si se cumplen X cantidad de meses, habra un aumento del precio del expensas de ahí en adelante, Repitiendoce periodicamente. Osea, sí adjustmentPeriod es igual a 6, cada 6 meseshabra un aumento de expensas 
			amount *= increase;													// Este aumento es porcentual. Osea, si increase es igual 1.5, habra un aumento el 50% de las expensas
		}
		const monthResult = document.createElement('p');						// En cada vuelta de bucle se crea un un elemento <p>. Luego a ese elemeto <p></p> se le da un textContent correspondiente al numero de su mes. Luego a ese mismo elemento <p> se le interta un elemento <span> que contiene el monto a pagar para cada mes (este valor lo puse en una etiqueta hija aparte para porder darle estilos)  Por ultimo se inserta este elemento monthResult junto con sus elementos hijos y nietos a dentro del "fragment"
		monthResult.textContent = `Mes n°${i} = `; 	
		monthResult.classList.add('monthDay');									// Cree una clase class="" con el nombre "mountDay" y se lo puse a al <p>, de esta forma puedo cambiar su estilo   

		monthResult.append(document.createElement('span'));						// Cree una etiqueta <span> que ira dentro de la etiqueta <p>. Dicha etiqueta <span> contiene el monto a pagar de cada mes. Lo separe de esta manera asi le puedo dar un estilo propio al numero 
		monthResult.lastElementChild.textContent = `${Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount)}`;	// Esta cosa hace lo saque de los links de arriba. Básicamente le pone el simbolo a la moneda correspondiente a su país y ademas agrega un punto "." cada 3 unidades y ademas le pone una coma y dos ceros al final que simbolizan los centavos (esto ultimo lo desactive con minimumFractionDigits: 0, maximumFractionDigits: 0)   
		monthResult.lastElementChild.classList.add('monthPay');					// Cree una clase class="" con el nombre "monthPay" y se lo puse a al ultimo hijo creado que ente caso es este <span>, de esta forma puedo cambiar su estilo  
		
		fragment.append(monthResult);											// Puse todo la etiqueta <p> junto con su etiqueta hija <span> dentro del "fragment"
		
		total += amount;														// Una vez que termina la vuelta, se suma la cantidad de ese mes al total
	}

	const totalResult = document.createElement('p');							// Creo un elemento <p> para el total, luego le doy un textContet donde dentro esta el valor del total de todos los meses cobrados, y por ultimo lo guardo en el "fragment" 
	totalResult.textContent = 'Monto total:';
	totalResult.classList.add('totalResult');									// Cree esta clase class="" por los mismos motivos que las anteriores
	
	totalResult.append(document.createElement('span')); 						// Cree este span con por los mismos motivos que el anterior
	totalResult.lastElementChild.textContent = `${Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(total)}`;
	totalResult.lastElementChild.classList.add('totalResultNumber');

	fragment.append(totalResult);
	
	const contentBox = document.createElement('div');		// Cree este elemento para guardar toda la informacion del "fragment". Básicamenete todas las etiquetas que estaban dentro del "fragment" se metieron de una sola vex al DOM
	contentBox.appendChild(fragment);

	return contentBox;		// Básicamente devuelvo el elemento <div> contentBox
};




// Primer cuadro
// Evento onClick para poder hacer funcionar al boton
const button = document.getElementById('button');
const result = document.getElementById('result');						// Elemento que sirve como nodo para guardar todos los demas elementos <p> que son los resultados
button.addEventListener('click', () => {
	const amount = Number(document.getElementById('amount').value);								// En esta constante obtengo el valor del elemeto 'amount'. Osea, solamente el valor de la etiqueta <lavel> amount. Luego la convierto en un valor numerico
	const months = Number(document.getElementById('months').value);
	const increase = Number(document.getElementById('increase').value);			
	const adjustmentPeriod = Number(document.getElementById('adjustmentPeriod').value);

	result.children[0].replaceWith(pay(amount, months, increase, adjustmentPeriod));			// Básicamente reemplazo las etiqueta hija del elemento result para poder poner la etiqueta <div> contentBox que proviene de la funcion "pay". Dicha nueva etiqueta contiene todas las etiquetas <p> con la informacion de cada mes adentro. 4s importante que pueda reemplazarlo devido a que esto me permite ingresar nuevos valores   
});




// Segundo cuadro
// Evento onClick para poder hacer funcionar al boton
const buttonB = document.getElementById('buttonB');
const resultB = document.getElementById('resultB');						
buttonB.addEventListener('click', () => {
	const amountB = Number(document.getElementById('amountB').value);								
	const monthsB = Number(document.getElementById('monthsB').value);
	const increaseB = Number(document.getElementById('increaseB').value);			
	const adjustmentPeriodB = Number(document.getElementById('adjustmentPeriodB').value);

	resultB.children[0].replaceWith(pay(amountB, monthsB, increaseB, adjustmentPeriodB));			
});



