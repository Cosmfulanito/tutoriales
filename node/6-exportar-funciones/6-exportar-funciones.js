/*

                                                _____ Exportar funciones: _____


 - Exportar funciones es exactamente igual que exportar cualquier otro, valor, texto, lista, objeto, variable, etc.
 
 - Esto lo veremos con un ejemplo practico donde desde este archivo importaremos las funciones matematicas que hay dentro del modulo Math.js

*/

const math = require('./modules/math.js')

console.log(math);                                          // Aca podemos ver todas las funciones que importamos desde el modulo math.js

console.log(math.suma(5, 10));                              // Como sabemos, esta es la forma de llamar a una funxion que esta dentro de un objeto 
console.log(math.resta(5, 10));
console.log(math.multiplicacion(5, 10));
console.log(math.division(5, 10));
