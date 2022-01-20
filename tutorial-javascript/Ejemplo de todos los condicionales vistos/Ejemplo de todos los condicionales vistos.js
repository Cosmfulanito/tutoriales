let numero = 8;

let resultado = Math.abs(numero % 2);




//_____Ejemplo con if_____
if (resultado == 0){
    console.log (`Según el "if":                   El numero "${numero}" es par`);

}else if (resultado == 1){
    console.log (`Según el "if":                   El numero "${numero}" es impar`);
}



//_____Ejemplo con switch_____
switch (resultado){
    case 0: console.log (`Según el "switch":               El numero "${numero}" es par`);
    break;

    case 1: console.log (`Según el "switch":               El numero "${numero}" es impar`);
}



//_____Ejemplo con el Operador ternario_____
(resultado == 0) ? console.log(`Según el "Operador ternario":    El numero "${numero}" es par`) : console.log(`Según el "Operador ternario":    El numero "${numero}" es impar`);


