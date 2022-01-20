
/*                                           _____Funciones (introduccion)_____


- Las funciones son fragmentos de codigo que escribimos para ejecutar una tarea y no volver a escribir el mismo codigo más de una vez.

- Nos ayudan a modularizar el código. Esto ayuda a leer más facilmente el codigo

- Las funciones deben realizar una sola tarea. Pueden hacer más cosas pero esto es lo recomendable. Si se quiere hacer otra tarea entonces se debe crear otra funcion

- Basicamente es un mini programa compactado en una muy comoda y practica frase. 
- Digamos que tengo un programa donde se repite mucho unas lineas de codigo que sacan el promedio. En vez de copiar y pegar esas 30 lineas de codigo una y otra vez (generando un codigo espagueti), simplemente creo una funcion que me devuelva el promedio. Ahora simplemente tengo que copiar y pegar una sola linea de codigo (que vendria a ser el nombre la funcion "promedio") en vez de 30. Obviamente eso es mucho mas intuitivo


Sintaxis: 
    Metodo actual:
                    const nombre_funcion = () => {
                        codigo a ejecutar 
                    }      

    Metodo obsoleto:                                                            // Aunque este segundo metodo es algo viejo, es importante saber esto por si alguna vez me lo cruzo en la vida/trabajo
                    function nombre_funcion () {
                        codigo a ejecutar
                    }






- Algunas funciones necesitan parametros para funcionar (datos/valores con los cuales trabaja). Hay funciones que los necesitan y hay otras que no. No hay un limite en cuanto a la cantidad de parametros. Pueden se un parametro, dos, 55 o incluso un numero indefinido
Ej metodo actual:
        const nombre_funcion = (parametro1, parametro2) =>{                     // Se pusieron 2 parametros de ejemplo pero no hay un limite en cuanto a su cantidad. Pueden se un parametro, dos, 55 o incluso un numero indefinido
            codigo a ejecutar 
        }

Ej metodo obsoleto:
        function nombre_funcion (parametro1, parametro2){
            codigo a ejecutar
        }






- Las funciones pueden devolover valores, esto es lo normal. Puede devolver un resultado, un String, un Array o incluso un Objeto. 
- Aunque tambien hay casos donde tambien no devuelva nada. Puede pasar que ejecutemos una funcion y que esta funcion solamente escriba algo en pantalla
Ej actual:
        const nombre_funcion = (parametro1, parametro2) => parametro1 + parametro2          // En este caso, con las funciones de flecha => si solo tenemos una sola instruccion y la funcion no tiene que hacer nada más, no es nesesario la palabra return, ya que todo se hace en una sola linea de codigo     

Ej obsoleto:
        function nombre_funcion (parametro1, parametro2){
            return parametro1 + parametro2                                                  // Para que te devuelva un resultado el nesesario la palabra return
        }



*/






//-------------------------------------------------------------------------------------------------------------------------



//                                      _____Crear e invocar una función com el metodo obsoleto:_____


// _____Crear una funcion (metodo obsoleto):_____
// A modo de ejemplo creare una funcion que solamente hace aparecer un mensaje

function saludar_obsoleto(){
    console.log("Holiwis versión obsoleta");             
}


// _____Invocar una funcion (metodo obsoleto):_____ 
// Para poder utilizar una funcion creda, tengo que llamarla/invocarla de la siguiente manera:

saludar_obsoleto();




//-------------------------------------------------------------------------------------------------------------------------




//                                     _____Crear e invocar una función com el metodo actual:_____


// _____Crear una funcion (metodo actual):_____
// A modo de ejemplo creare una funcion que solamente hace aparecer un mensaje

const saludar_actual = () => console.log("Holiwis versión actual");         // Como es una funcion de una unica linea, se crea de esta manera y sin el return. De tener más lineas de codigo, esta funcion se crearia de otra manera



// _____Invocar una funcion (metodo obsoleto):_____ 
// Para poder utilizar una funcion creda, tengo que llamarla/invocarla de la siguiente manera:

saludar_actual();





//-------------------------------------------------------------------------------------------------------------------------



//                                     _____Utilizar los parametros:_____

// Ej1:     Caso de una sola linea de codigo       
const saludar = (usuario) => console.log(`Hola ${usuario}`);

saludar ("Nikin");
saludar ("Pepe");
saludar ("Marta");




// Ej2:     Caso de varias lineas de codigo
const promedio = (numero1, numero2) =>{
    let suma = numero1 + numero2;
    return suma/2                                   // Tambien seria valido:     let promedio = suma/2                         
}                                                   //                           return promedio

console.log(promedio(2,5));




// Ej3:     Jugar con las funciones
const suma = (numero1, numero2) => numero1 + numero2;

let resultado = suma(10,15);                        // Como se puede apreciar, las funciones devuelven valores que pueden ser utilizados de la manera que yo quiera. En este caso guarde el valor devuelto por la funcion en una variable  
console.log(resultado);