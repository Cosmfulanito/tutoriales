/*

                                _____ CommonJS Modules_____


 - ¿Que son los modulos?
    Los modulos son archivos separados los cuales podemos añadir a un archivo principal para crear una aplicación más grande
    Es decir, gracias a modulos, podemos crear una aplicación mucha logica dividida en multiple partes 
 


    
 - Exportar información desde un modulo:
    Desde el modulo (archivo) deseado usaremos el objeto "module" y dentro de su key "exports", le agregaremos la información deseada




 - Importar la información de un modulo:
    Desde el archivo principal, usaremos la funcion "require()" y dentro le pondremos la ruta relativa del modulo al cual queremos acceder 

 
*/




/*
 _____ Ejercicio: _____
 - Como ejemplo, vamos a usar este mismo archivo como archivo principal y lo vamos a conectar a un modulo (archivo secundario) para obtener 
   la informacion que tiene almacenada.

*/

const textoImportado = require('./modules/myModule.js');                // Estamos importando la informacion del modulo/archivo "myModule.js"

console.log(textoImportado);                                            // Desde aca podemos ver la informnación importada desde el modulo/archivo "myModule.js"