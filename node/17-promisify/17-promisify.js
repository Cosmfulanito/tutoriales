/*

                                                    _____Promisify:_____


 - promefify es una funcion proveniente del modulo "util" (utilidades), este nos permite convertir un callback en una promesa sin 
   la necesidad de escribir todo el choclo de codigo que estabamos haiendo en los apuntos anteriores. 
   Osea, nos ahorra escribir una banda de codigo y a su vez lo hace más facil de leer


*/

const { readFile } = require('fs');
const { promisify } = require('util');

const readFilePromise =  promisify(readFile)            // Con simplemente esto ya tengo una promesa. Así de simple!


async function readText() {
    try {
        const result1 = await readFilePromise('./archivos/primero.txt', 'utf-8');
        console.log(result1);
        const result2 = await readFilePromise('./archivos/segundo.txt', 'utf-8');
        console.log(result2);
        const result3 = await readFilePromise('./archivos/tercero.txt', 'utf-8');
        console.log(result3);
    } catch(error) {
        console.log(error)
    }
}

readText();
