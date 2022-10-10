/*

                                                _____fs/promises:_____


 - Esta es la forma estandar y más obtimizada de traer promesas en nuestros modulos, ya que nos permite ahorrar mucho codigo,
   incluso más que lo visto en el tutorial 17-prmisify.js

*/

const { readFile } = require('fs/promises');        // fs/promises significa que dentro del modulo 'fs' hay una carpeta llamada "promises". Y esta carpeta "promises" me esta dando algunas funciones, las cuales me convierte los callbacks en promesas de forma automatica


async function readText() {
    try {
        const result1 = await readFile('./archivos/primero.txt', 'utf-8');
        console.log(result1);
        const result2 = await readFile('./archivos/segundo.txt', 'utf-8');
        console.log(result2);
        const result3 = await readFile('./archivos/tercero.txt', 'utf-8');
        console.log(result3);
    } catch(error) {
        console.log(error)
    }
}

readText();
