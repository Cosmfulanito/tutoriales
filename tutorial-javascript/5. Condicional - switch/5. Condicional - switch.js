

//_____Condicional switch_____

/* Se utiliza para elegir un camino de entre varios preestablecidos. Es decir, conociendo los posibles resultados el programa
 toma un camino u otro, o el otro... 
Devuelta, yo ya tengo que saber cuales van a ser los posibles resultados.
 
 Hay 3 tipos de condicinales "switch", aunque solamente veremos los dos primeros:
    - Sintaxis simple.
    - Sintaxis múltiple.
    - Sintaxis múltiple encadenada.

*/





// _____Sintaxis simple:_____
// Hay un camino para un solo resultado.

// primer ejemplo:
let numero = 5;

switch (numero){                                            // Esta es la declaracion switch, dentro del parentesis va la informacion a evaluar
    case 1: 
		console.log("El numero vale 1");               	 	// Esta declaracion significa "En caso de... Hacer esto..."     En este caso, en caso de que "numero" sea igual a 1, hacer lo siguiente
    	break;                                              // Una vez que el programa elige este case/camino, debo poner un break; que corte con el programa. De lo contrario, por algun motivo el programa ejecutara los demas "case"

    case 2: 
		console.log("El numero vale 2");                	// La accion a ejecutar por el case (en este caso console.log(), puede escribirse abajo. Yo lo puse aca porque se lee mejor
    	break;

    case 5: 
		console.log("El numero vale 5");
    	break;

    default: 
		console.log("El numero no vale 1, 2 o 5");     		// Es el equivalente al "else" del if.  
}


// Segundo ejemplo:
let palabra = "Holiwi";

switch (palabra){
    case "Holiwi": console.log(`La palabra es "Holiwi"`);
    break;

    case "Chauchi": console.log(`La palabra es "Chauchi"`);
    break;

    default: console.log(`La palabra no es "Holiwi", ni "chauchi"`)
}





// _____Sintaxis multiple:_____
// Hay un camino para multiples resultados

numero = 3;

switch (numero){
    case 1:
    case 3:
    case 5:
    console.log(`El numero "${numero}" es impar`);
    break;

    case 2:
    case 4:
    case 6:
    console.log(`El numero "${numero}" es par`);
}




//_____Sintaxis múltiple encadenada:_____
//El profesor no sabe mucho del tema y por ende nos invito a investigar del tema