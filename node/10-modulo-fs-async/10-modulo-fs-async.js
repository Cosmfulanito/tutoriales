/*  
                                                    _____Modulo fs (async)_____


 - En este apunte veremos el funcionamiento de las funciones "asincronas" pero usaremos como referencia en modulo "fs"


 - Como ya vimos en el curso de JavaScript, las funciones "async" son las funciones asincronas. Osea, funciones que se pueden 
   ejecutar al mismo tiempo que otras tareas


 - Como podemos apreciar, node nos provee de dos tipos de funciones para realizar la misma tarea, la "sincronica" y 
   la "asincronica". La diferencia entre una y la otra a la hora de llamarlas es que la funcion sincronica tiene un "sync" al
   final de su nombre.
   
   Ej:      - fs.readFile               Nueva funcion asincronica
            - fs.readFileSync           Funcion sincronica ya vista en el tutorial pasado


 - Para usar una funcion "Async", ademas de poner la ruta, tambien debo poner otro parametro extra para que este funcione. 
   Este parametro extra es una funcion que a su vez tiene otros dos parametros, uno me devuelve la "información" deseada en 
   caso de exito, o un "error" en caso de que algo falle (como por ejemplo, no encontar el archivo).   
   
  
 - Al igual que en apuntes anteriores, tambien podemos usar un tercer parametro "utf-8" en caso de no querer usar el .toString()
   para transformar la información de formato buffer a string  

*/


const fs = require('fs');




// _____ Funcion Asincronica: Exito _____
fs.readFile('./archivos/primero.txt', (error, data) => {                    // Como lo dice en el apunte, en este segundo parametro nos encontramos con una función que tambien tiene 2 parametros. Uno representa a la informacion que vamos a obtener, y el otro es el error que se nos va a devolver en caso de que algo falle
    if (error) {                                                            // En caso de que haya un error, que me muestre mediante un mensaje dicho error, caso contrario que me muestre la data
        console.log(error);
    }
    else {
        console.log(data.toString());                                       // Como ya vimos en apunter anteriores, usamos el tostring() para poder visualizar la informacion porque esta viene por defecto en formato buffer 
    }
});




// _____ Funcion Asincronica: Error _____ 
fs.readFile('./aasdasdasd/asdasdasdas.txt', (error, data) => {              // Esta ruta no existe, por ende me va a devolver un error
    if (error) {
        console.log(error);
    }
    else {
        console.log(data.toString());                                       
    }
});




// Tercer parametro para transformar información de formato buffer a string sin usar el toString()
fs.readFile('./archivos/primero.txt', 'utf-8', (error, data) => {        // Este tercer parametro 'utf-8' cumple la misma funcion que la propiedad .toString()          
    if (error) {                                                            
        console.log(error);
    }
    else {
        console.log(data);                                       
    }
});







