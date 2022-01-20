/*

                                                        Spread operator: (Operador de expanción)

- Su sintaxis es ... 

- Basicamente su funcion es expandir el contenido de un Array

*/


const numeros = [-12, 2, 3, 23, 43, 2, 3];
console.log(numeros);                                   // Sin el Spread operator:      [-12, 2, 3, 23, 43, 2, 3]

console.log(...numeros);                                // Con el Spread operator:      -12 2 3 23 43 2 3
               // Se puede decir que ahora el Array esta segmentado en parametros:       a  b c d  e  f g          Esto es util a la hora de pasar valores de un Array a un una funcion              
                          




//-------------------------------------------------------------------------------------------------------------------------




// _____Enviar elementos de un Array a una Funcion:_____
// Esta funcion de prueba suma los 3 numeros que se le agreguen
// La idea es hacer que pueda sumar los numeros numeros de un Array

const sumar_numeros = (a, b, c) =>{                             
    console.log(a+b+c);
}



// Llamar a la funcion metodo normal:
sumar_numeros(1, 2, 3);                                 // Esta es la forma clasica de agregar numeros a una funcion. Me tiene que dar como resultado 6




// Llamar a la funcion usando los datos de un Array "sin" el Spread operator... (sale mal):
// Esto no es posible sin el Spread operator, pero sirve de demostracion
let lista = [1, 2, 3];

sumar_numeros(lista);                                   // Me devuelve:     1,2,3undefinedundefined             Esto se debe a que el valor 1 del Array es ubicado en el parametro "a" de la funcion, pero 2 y 3 no son enviados al parametro "b" y "c" como corresponde. Por eso me sale ese cartel de error
                                                        // Esto se soluciona utilizando Spread operator que permite segmentar el Array en parametos




// Llamar a la funcion usando los datos de un Array "con" el Spread operator:
// Esta si es la forma correcta de llamar a una funcion utilizando los elementos de un Array                            
lista = [1, 2, 3];

sumar_numeros(...lista);                                // Me devuelve:     6       Gracias al Spread operator, los elementos del Array "1", "2" y "3" fueron segmentados en 3 parametros. Los cuales encajan perfectamente con los parametros "a", "b" y "c" de la funcion.  A diferencia del ejemplo anterior que me devolvia un error




//-------------------------------------------------------------------------------------------------------------------------




// ______Añadir un Array a otro Array:_____
// Una forma de hacer esto seria con un "bucle for", pero por suerte tenemos este otro metodo que es más facil
let usuarios = ["javier", "david", "rosa", "juan", "mercedes"];
let nuevos_usuarios = ["marta", "jaime", "laura"];

usuarios.push(...nuevos_usuarios);                      // No importa la cantidad elementos del Array, los agrega a todos.      Esto es igual valido con otros metodos ya vistos como unshift(), splice(), etc.
console.log(usuarios);




//-------------------------------------------------------------------------------------------------------------------------




// _____Copiar Arrays:_____
let array_1 = [1, 2, 3, 4];                             // Array de prueba

// Metodo clasico
let array_2 = array_1;                                  // Este metodo es totalmente valido, pero puede presentar errores en algunos casos
console.log(array_2);

// Metodo con Spread operator:
let array_3 = [...array_1];                             // Este metodo es funciona igual que el anterior, pero es más seguro ya que no presenta tantas fallas
console.log(array_3);




//-------------------------------------------------------------------------------------------------------------------------




// _____Concatenar Arrays:_____
// Osea, unir dos o más Arrays
array_1 = [1, 2, 3, 4, 5];
array_2 = [6, 7, 8];

// Metodo clasico:
let array_concatenado = array_1 .concat(array_2);
console.log(array_concatenado);

// Metodo con Spread operator:
let array_concatenado_2 = [...array_1, ...array_2];
console.log(array_concatenado_2);




//-------------------------------------------------------------------------------------------------------------------------




// _____Enviar a una funcion un numero indefinido de argumentos (parámetros REST)_____
// Esto es util para esos casos donde la funcion no tiene un numero definido de parametro. Puede ser que le agregue un parametro, 2 o incluso 800

// Ejemplo 1: Funcion que muestra un numero indeterminado de valores agregados:
const mostar = (...a) => {
    console.log(a);
} 

mostar(10, 20, 30, 40, 50, 60);             // Antes tenia que agregar un numero de parametros fijos, esto es mucho más comodo ya que puedo agregar la cantidad de parametros que se me de la gana

lista = [11, 22, 33, 44, 55, 66];           // Lo mismo que lo anterior pero utilizando la informacion guardada de un Array
mostar (...lista)




// Ejemplo 2: Funcion que suma un numero indeterminado de valores:
const sumar = (...numerines) => {
    console.log(numerines.reduce((a,b) => a+b));                // Estoy usando el metodo .reduce() para sumar todos los valores. Metodo ya visto en el apunte "14. Arrays - Metodos.js"
} 

sumar(1, 2, 3, 4, 5);                                           // La suma total me tiene que dar 15

lista = [10, 20, 30 , 40, 50];                                  // La suma total me tiene que dar 150
sumar(...lista);




//-------------------------------------------------------------------------------------------------------------------------




// _____Libreria Math:_____
// Utilizar el Spread operator en los metodos de la libreria Math

lista = [-12, 2, 3, 23, 43, 2, 3];

console.log(Math.max(...lista));            // Me muestra el numero más "grande" de la lista. Osea el 43
console.log(Math.min(...lista));            // Me muestra el numero más "pequeño" de la lista. Osea el -12




//-------------------------------------------------------------------------------------------------------------------------




// _____Eliminar elementos duplicados:_____
// Para ello tengo que usar un objeto llamado "Set". Este objeto va a guardar todos los elementos, pero no va a guardar el mismo elemento dos veces. De esta forma puedo eliminar un elemento repetido en un Array

lista = [-12, 2, 3, 23, 43, 2, 3];          // El numero "2" y "3" estan repetidos dos veces

console.log(new Set(lista));                // Esto me deveria mostrar los elementos del objeto "Set":   {-12, 2, 3, 23, 43}    Como se puede apreciar, no se repitio ni un solo elemento 

// Si lo quiero en un Array:
console.log([...new Set(lista)]);           // Esto me va a mostrar los elementos del "Set" dentro de un Array:   [-12, 2, 3, 23, 43]    De esta forma, ahora tengo un Array sin elementos duplicados
