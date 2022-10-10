/* Este archivo es un modulo que contiene un codigo que va a ser exportado y reutilizado en distintas partes de la aplicación principal, 
   especialmente en el archivo principal "4-commonJS-modules.js" */

const texto = "Hola, soy un texto perteneciente a este modulo que va a ser exportado al archivo principal :3"

const numero = 25;

const lista = ['manzana', 'pera', 'zandia']

const persona = {
    name: 'Juanito',
    lastName: 'Perez'
}

//console.log(module);          //Como ya vimos, mediante este objeto vamos a obtener toda la información de este modulo. Dentro de este objeto nos interesa la key "exports". Como no estamos exportando nada, esta vacio 
                                // Este console.log() esta comentado porque por algun motivo lo puedo ver en el archivo principal 




// _____ Exportar información de este modulo:_____
// Para ello usaremos el objeto "module" y dentro de su key "exports", le agregaremos la información deseada

module.exports = {              // Meti todos las demas constantes en este objeto para poder enviarlas todas juntas
    texto,
    numero,
    lista,
    persona
}


//console.log(module)           // Como podemos apreciar, ahora si aparece informacion en la key "exports". Osea, ahora podemos exportar 
                                // Este console.log() esta comentado porque por algun motivo lo puedo ver en el archivo principal     



