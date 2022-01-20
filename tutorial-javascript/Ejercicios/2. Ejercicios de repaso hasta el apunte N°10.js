
/*
1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años"
Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings
*/





/*
let nombre = prompt("Ingrese su nombre:");
let edad = Number (prompt("Ingrese su edad"));

let edad_futura = edad + 1;

console.log(`Hola ${nombre}, tienes ${edad} años y el año que viene tendrás ${edad_futura} años`)
*/





//-------------------------------------------------------------------------------------------------------------------------





/*
2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
    triángulo  = b*h/2
    rectángulo = b*h
    círculo    = π*r2  = (pi * radio al cuadrado)
*/




/*
let seleccion = prompt ("Seleccione la figura la cual desea calcular el área:\n 1. Triángulo\n 2. Rectángulo\n 3. Círculo");

if (seleccion == 1){                //Triángulo
    let base = Number(prompt("Ingrese el tamaño de la base:"));
    let altura = Number(prompt("Ingrese la altura"));
    let area_triangulo = (base*altura)/2;
    console.log(`El área del triangulo es: ${area_triangulo.toFixed(2)}x²`);

}else if (seleccion == 2){          //Rectángulo
    let base = Number(prompt("Ingrese el tamaño de la base:"));
    let altura = Number(prompt("Ingrese la altura"));
    let area_rectangulo = base*altura;
    console.log(`El área del rectangulo es: ${area_rectangulo.toFixed(2)}x²`);

}else if (seleccion == 3){          //Círculo
    let radio = Number(prompt("Ingrese el radio del del círculo:"));
    let area_circulo = Math.PI*(radio**2);
    console.log(`El área del circulo es: ${area_circulo.toFixed(2)}x²`);

}else{
    console.log("Opción inexistente, precione F5 para volver a seleccionar");
}
*/




//-------------------------------------------------------------------------------------------------------------------------





/*
3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar"
    si el número es 5 el resultado será:
        1 - es impar
        2 - es par
        3 - es impar
        4 - es par
        5 - es impar
*/




/*
let numeros = Number(prompt ("Ingrese un numero:"));

for (i=1; i<=numeros; i++){
    let paridad = i % 2;                        // Pongo i porque me interesa saber si dicho numero es par o impar
    if (paridad == 0){
        console.log(`${i} - es par`);

    }else if (paridad == 1){
        console.log(`${i} - es impar`);
    }
}
*/






//-------------------------------------------------------------------------------------------------------------------------





/*
4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no.
    Un número primo es un número natural mayor que 1 que tiene únicamente dos divisores positivos distintos: él mismo y el 1
*/




// Funcionamiento: Hago un bucle que chequee numero por numero dividiendo mi numero deseado para saber si es primo o no. 
/*
let numerin = Number (prompt("Ingrese un número que desee saber si es un número primo"));

if (numerin<=1){
    console.log(`Para considerarse un número primo, tiene que ser un número natural mayor que 1`)

}else{
    for (let i=2; i<=numerin; i++){                                     // Comienzo a partir del 2 porque como dice la definicion de numeros primos: "Un número primo es un número natural mayor que 1..." De poner i=0; el programa me diria que 1 es un numero primo
        let divisible = numerin % i;                                    // Sirve para saber si "numerin" es divisible por otro numero, en este caso i. De serlo, da como resultado 0
    
        if (divisible == 0){                                            // Si da como resultado un numero divisible hacer lo siguiente...
            if (!(i==numerin)){                                         // Si i "NO ES igual" al numero que busco, significa que no es primo
                console.log(`El número ${numerin} no es primo`);    
                break                                                   // Una vez hallado un numero que pueda dividir a "numerin" se corta el bucle. De lo contrario seguiria buscando numeros hasta llegar al ultimo y tendria los dos mensajes de "es" y "no es" un numero primo 
    
            }else{                                                      // Si i "ES igual" al numero que busco, significa que SI ES PRIMO
                console.log(`El número ${numerin} es primo`);
            }
        }  
    }
}
*/





//-------------------------------------------------------------------------------------------------------------------------






/*
5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial.
    El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.
    !5 = 5*4*3*2*1 = 120
*/




/*
let numerin = Number(prompt("Ingrese un número entero mayor que cero para saber su factorial."));

let factorial = 1;                                                                                  // Puse 1 en vez de 0 porque al multiplicar cualquier numero por 0 me va a dar 0
let factorial_lista ="";

if (numerin>0){
    for (i=numerin; i>=1; i--){                                                                     // Puse i=1; por el mismo motivo de arriba
        factorial = factorial*i;
        
        factorial_lista += i.toString() + "*";                                                      // "*" + i.toString() crea un string que queda así *1*2*3*4*5

        if (i==(1)){                                                                                // Cuando i llegue a este numero (que es el ultimo en el bucle inverso de for), que me imprima este mensaje
            console.log(`${numerin}! = ${factorial_lista.slice(0,-1)} = ${factorial}`);
        }
    }

}else if (numerin<0){
    console.log("No se pueden ingresar numeros menores que cero");

}else{
    console.log(`0! = 0`);
}
*/






//-------------------------------------------------------------------------------------------------------------------------






/*
6 - Escribe un programa que permita ir introduciendo una serie indeterminada de números mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido
*/




/*
let sumatoria = 0;
let cantidad_de_numeros = 0;

while (sumatoria<=50){
    let numerin = Number (prompt("Ingrese un numero"));
    sumatoria += numerin;
    cantidad_de_numeros += 1;                                   // Me indica la cantidad de numeros ingresados
}

console.log(`Se introdujeron un total de ${cantidad_de_numeros} números y su sumatoria es de ${sumatoria}`)
*/






//-------------------------------------------------------------------------------------------------------------------------






/*
7 - Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos. Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, si el resultado es par guarda ese número en el array de pares y si es impar en el array de impares. Muestra por consola:
    -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6
    -el array de pares e impares
*/



/*
let numeros = [1, 2, 3, 4, 5];

let pares = [];
let impares = [];

for (numero of numeros){
    let numero_azar = Math.round(Math.random()*(10-1)+1);              // Me genera un numero al azar, entero y del 1 al 10
    let multiplicacion = numero * numero_azar;

    let paridad = multiplicacion % 2;                                  // Me dice si un numero es par o no y luego lo guarda en su respectivo Array 
    if (paridad==0){
        pares.push(multiplicacion);
    }else{
        impares.push(multiplicacion);
    }

    console.log(`${numero} x ${numero_azar} = ${multiplicacion}`);
}

console.log(`Lista de resultados pares: ${pares.join(" - ")}`);
console.log(`Lista de resultados impares: ${impares.join(" - ")}`);
*/






//-------------------------------------------------------------------------------------------------------------------------





/*
8 - Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. El número no puede ser negativo ni tener más de 8 dígitos. La posición de la letra es el resultado del módulo del número introducido entre 23
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
*/






/*
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let dni = Number(prompt(`Ingrese su DNI`));
                     

if (dni <= 0 || dni.toString().length > 8){                     // La propiedad .length solo funciona en Strings. Por ende, primero tengo que convertir dicho numero en un String
    console.log("El numero debe ser mayor que 0 y no debe tener más de 8 digitos");

}else{
    let modulo = dni % 23;                                      // 23 es el numero que me indica el ejercicio
    console.log(`La letra correspondiente a su DNI ${dni} es: "${letras[modulo]}"`);
}
*/








//-------------------------------------------------------------------------------------------------------------------------






/*
9 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.
*/



// Funcionamiento: Basicamente este programa agarra una a una las letras de un String en un bucle "for of". Una vez seleccionada una letra, otro bucle "for of" que esta dentro chequea una a una las letras del Array "vocales" para ver si las letras de dicho Array coinciden con la letra del String. Basicamente cada letra del String tiene su propio bucle para chequear las vocales. Lo mismo se aplica con las consonantes
/*
let palabra_original = prompt("Introduzca una palabra:");

let palabra = palabra_original.toLowerCase();               // Pone a todas las letras en minusculas, lo que me permite trabajar con ellas

let vocales = ["a", "e", "i", "o", "u"];
let consonantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "ñ", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

let contador_vocales = 0;
let contador_consonantes = 0;


for (letra of palabra){                         // Cada digito del String corresponde a un valor de i (letra en este caso) 
    for (vocal of vocales){
        if (letra.startsWith(vocal)){
            contador_vocales += 1;
        }
    }

    for (consonante of consonantes){
        if (letra.startsWith(consonante)){
            contador_consonantes += 1;
        }
    }
}

console.log(`La palabra "${palabra_original}" tiene: ${palabra.length} letras - ${contador_vocales} vocales - ${contador_consonantes} consonantes`);
*/







//-------------------------------------------------------------------------------------------------------------------------






/*
10 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
*/


/*
let colores = ["azul", "amarillo", "rojo", "verde", "rosa"];

colorin = prompt(`Escriba el nombre de un color para saber si esta dentro de la lista:`);

if (colores.includes(colorin)==true){                                       // Si "colorin" esta dentro del Array "colores", hacer lo siguiente...  
    console.log(`El color "${colorin}" se encuentra en la lista :D`)
    
}else{
    console.log(`El color "${colorin}" no se encuentra en la lista :c`)
}
*/