/*

                                                                _____ Exports Individuales: _____


 - Los exports individuales no son más qie otra forma que tienen los modulos de exportar información. Donde en vez de exportar todas las variables/información de una sola 
   vez dentro de un mismo objeto (como ya vimos en el tutorial anterior), lo que hacemos es exportarlas una por una.
   
 - Este metodo no es tan usado pero es bueno saber de su existencia por si alguna vez lo vemos en codigo ajeno.



 - ¿Como se usa?
    Desde el modulo/archivo, usamos el objeto con son propiedad "module.exports" como ya vimos anteriormente, pero agregamos una propiedad extra que representa al valor 
    individual que queremos exportar. Creando de esta manera un objeto dentro de "module.exports" donde cada nueva exportacion representa una nueva key
    Esto podemos hacerlo cuantas veces queramos. 

    Ej:     module.exports.numerito = 5;                        Aca estoy exportando dos valores distintos uno por uno de forma individual. Cada propiedad representa una nueva key en el objeto "module.exports"
            module.exports.number = numero;
            module.exports.texto = "Hola mundo"; 

*/



/*  _____ Ejercicio: _____
 - Como ejemplo, vamos a usar este mismo archivo como archivo principal y lo vamos a conectar a un modulo (archivo secundario) que estan en la carpeta "modules" para 
   obtener la información que tiene almacenada  */

const textoImportado = require('./modules/myModule.js');                // Estamos importando la informacion del modulo/archivo "myModule.js"

console.log(textoImportado);                                            // Desde aca podemos ver la información importada desde el modulo/archivo "myModule.js"

