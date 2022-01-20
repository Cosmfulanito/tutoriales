
//              _____Arrays_____

// - Son las listas de Python pero con otro nombre.
// - Se declaran con llaves cuadradadas [] o corchetes {}
// - Pueden declararse vacíos o con un contenido ya establecido 
// - Pueden añadirse o eliminarse elementos en el momento que queramos
// - Cada uno de los elementos podrá ser indentificado por su "índice", es decir su posición.
// - Los indices empiezan a contar desde el cero
// - Se pueden mezclar los tipos de valores pero no es recomendable



let numerin = 5;         // Esto es una variable, no un Array

let palabras = ["Hola", "estoy", "aprendiendo", "los", "Arrays", "Tiiiiii"];
let numeros = [1, 2, 3 , 4, 5];
let booleanos = [true, true, false, true, false];



console.log(palabras);
console.log(numeros);
console.log(booleanos);


// Acceder a un dato especifico del Array:
console.log(palabras[1]);                           // Lo que hace es devolverme el valor del indeice "1". Osea "estoy"
console.log(numeros[0]);                       
console.log(numeros[0] + numeros[1]);               // Estoy sumando los valores de dichos indices. Osea que estoy haciendo 1+2. Me tendria que devolver un 3   




//-------------------------------------------------------------------------------------------------------------------------




//_____Propiedad: .lengh:_____


// Medir la logitud/cantidad de datos dentro de un Array:
console.log(palabras.length);
console.log(numeros.length);
 

// Medir la longitud/cantidad de caracteres de uno de los datos del Array:
// Basicamente, es lo mismo que calcular la logitud de un string comun y corriente. Porque en este caso estor accediendo a un string comun y corriente...
console.log(`La palabra "${palabras[2]}" tiene ${palabras[2].length} letras.`);




//-------------------------------------------------------------------------------------------------------------------------



//_____Metodos:_____


// Array.isArray()
// (Me permite saber si una variable es un Array)
console.log(Array.isArray(numeros));                        // "numeros" es un Array, por ende me va a devolver un "true". 
console.log(Array.isArray(numerin));                        // "numerin" es una variable, no un Array. Por ende me va a devolver un "false" 




// .shift()
// (Hace dos cosas al mismo tiempo. Elimina el primer elemento de un Array y lo devuelve)
let numeros_2 = [1, 2, 3, 4, 5];
console.log(numeros_2);
numeros_2.shift();
console.log(numeros_2);                                     // En este caso soalmente hice una de las dos cosas, eliminar el "primer" elemento de la lista. Por ende me va a devolver un Array con los numero 2,3,4,5

let numeros_3 = [1, 2, 3, 4, 5];                            
console.log(numeros_3.shift());                             // En este caso hago las dos cosas al mismo tiempo. Elimino el "primer" elemento de la lista y lo devuelvo. Osea que me va a mostar unicamente el numero 1. Esto es util para guardar datos eliminados en otras listas




// .pop()
// (Hace dos cosas al mismo tiempo. Elimina el ultimo elemento de un Array y lo devuelve)
let numeros_4 = [11, 22, 33, 44, 55];
console.log(numeros_4);
numeros_4.pop();
console.log(numeros_4);                                     // En este caso soalmente hice una de las dos cosas, eliminar el "ultimo" elemento del Array. Por ende me va a devolver un Array con los numero 11, 22, 33, 44

let numeros_5 = [11, 22, 33, 44, 55];
console.log(numeros_5.pop());                               // En este caso hago las dos cosas al mismo tiempo. Elimino el "ultimo" elemento del Array y lo devuelvo. Osea que me va a mostar unicamente el numero 55. Esto es util para guardar datos eliminados en otras listas




// .unshift()
// (Hace dos cosas al mismo tiempo. Agrega un elemento extra al comienzo del Array y "devuelve la logitud" del Array actual)
let letras = ["A", "B", "C", "D", "E"];
console.log(letras);
letras.unshift("Z");
console.log(letras);                                         // En este caso solamente hice una de las dos cosas, "agregue" un elemento extra al "comienzo del Array". Por ende me va a devolver un Array con las letras Z, A, B, C, D, E, F

let letras_B = ["A", "B", "C", "D", "E"];
console.log(letras_B.unshift("Z"));                          // En este caso hago las dos cosas al mismo tiempo. Agrego un elemento extra al comienzo del Array y me "devuelve la longuitud del Array actual". Osea que me va a mostar unicamente el numero 6, que represanta la longitud/cantidad de datos dentro del Array. 




// .push()
// (Hace dos cosas al mismo tiempo. Agrega un elemento extra al final del Array y "devuelve la logitud" del Array actual)
let letras_C = ["A", "B", "C" , "D", "E"];
console.log(letras_C);
letras_C.push("F");
console.log(letras_C);                                       // En este caso solamente hice una de las dos cosas, "agregue" un elemento extra al "final del Array". Por ende me va a devolver un Array con las letras A, B, C, D, E, F

let letras_D = ["A", "B", "C", "D", "E"];
console.log(letras_D.push("F"));                             // En este caso hago las dos cosas al mismo tiempo. Agrego un elemento extra al final del Array y me "devuelve la longuitud del Array actual". Osea que me va a mostar unicamente el numero 6, que represanta la longitud/cantidad de datos dentro del Array.  




// .indexOf()
// (Me devuelve la posicion del indice del dato que busco en el Array. Si tengo varios datos iguales, me va a devolver la posicion del primer dato. Si no encuentro nada me devuelve un -1)
let frutas = ["Peras", "Uva", "Limon", "Peras"];
console.log(frutas);
console.log(frutas.indexOf("Peras"));
console.log(frutas.indexOf("Fideos"));




// .lastIndexOf()
// (Me devuelve la posicion del indice del dato que busco en el Array. Si tengo varios datos iguales, me va a devolver la posicion del ultimo dato. Si no encuentra nada me devuelve un -1)
let frutas_2 = ["Peras", "Uva", "Limon", "Peras"];
console.log(frutas);
console.log(frutas.lastIndexOf("Peras"));
console.log(frutas.lastIndexOf("Fideos"));




// .reverse()
// (Invierte el orden de los datos del Array)
let numeros_6 = [1, 2, 3, 4, 5];
console.log(numeros_6);
numeros_6.reverse();
console.log(numeros_6);




// .join()
// (Me separa los datos y entre medio me pone lo que yo quiera. A su vez me muestra los datos como un string. En cazo de no ingresar nada, me colocara entre medio una coma "," de forma predeterminada)
let numeros_7 = [10, 20, 30, 40, 50];
console.log(numeros_7);
console.log(numeros_7.join());
console.log(numeros_7.join(" "));
console.log(numeros_7.join("-"));
console.log(numeros_7.join("."));




// .splice(a, b, item)
// (Cambia el contenido de un Array eliminando elementos existentes y/o agregando elementos existentes) (Ademas de todo esto, tambien me devuelve los datos borrados)
//      - a         Indice de inicio
//      - b         Numeros de elementos (opcional)
//      - item      Elementos a añadir en caso de que se añadan

// Borrar datos desde un punto en adelante:
let numeros_8 = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99];
console.log(numeros_8);
numeros_8.splice(4);                                                
console.log(numeros_8);                                             // El primer parametro toma como punto de partida ela posicion 4 del indice y borra el dato que hay ahí junto con el resto de los datos que le siguen. Me tendria que devolver: 0, 11, 22, 33

// Borrar un conjunto de datos:
let numeros_9 = [0, 11, 22, 33 , 44, 55, 66, 77, 88, 99];
console.log(numeros_9);
numeros_9.splice(4,3);                                              
console.log(numeros_9);                                             // El primer parametro toma como punto de partida ela posicion 4 del indice y borra el dato que hay ahí junto con los 3 datos siguientes marcados por el segundo parametro (entre esos 3 datos se encuentra el 4, por ende seria desde la posicion 4 y dos posiciones más), dejando el resto.  Me tendria que devolvel: 0, 11, 22, 33, 77, 88, 99 

// Borrar un conjuntos de datos e ingresar uno o más datos extras en la posición de los anteriores:
let numeros_10 = [0, 11, 22, 33 , 44, 55, 66, 77, 88, 99];
console.log(numeros_10);
numeros_10.splice(4,3,"Hola");
console.log(numeros_10);                                            // Todo lo anterior con el extra de que el tercer parametro me permite añadir elementos en el espacio donde los datos anteriores fueron borrados. Recordar de que se pueden añadir varios datos a la vez separados por comas 

let numeros_11 = [0, 11, 22, 33 , 44, 55, 66, 77, 88, 99];          
console.log(numeros_11);
numeros_11.splice(4,3,"Hola", "Chau");
console.log(numeros_11);

// Agregar datos extras en la posicion que to desee sin tener que borrar ninguno de los ya existentes
let numeros_12 = [0, 11, 22, 33 , 44, 55, 66, 77, 88, 99];          
console.log(numeros_12);
numeros_12.splice(4,0,"Hola", "Chau");
console.log(numeros_12);                                            // El segundo parametro es 0, por ende NO me va a borrar nada. Pero va a meter la informacion entre medio.

// Mostrar los datos eliminados:
let numeros_13 = [0, 11, 22, 33 , 44, 55, 66, 77, 88, 99];          
console.log(numeros_13);
console.log(numeros_13.splice(4,3));   




// .slice(a,b)
// Copia los elemetos de un Array desde el índice "a" hasta el índice "b". Si no existe un indice "b" lo hace desde "a" hasta el final. Si no existe "a" ni "b" hace una copia completa del original. 
let numeros_14 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros_14);
let numeros_15 = numeros_14.slice();
console.log(numeros_15);

let numeros_16 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros_16);
let numeros_17 = numeros_16.slice(3)
console.log(numeros_17);

let numeros_18 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros_18);
let numeros_19 = numeros_18.slice(3,7);
console.log(numeros_19);









