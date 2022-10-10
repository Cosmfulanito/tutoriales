/*

                                                    _____Async / Await:_____


 - Este es un temas ya visto en el tutorial de Javascript.

*/


const { rejects } = require('assert');
const {readFile} = require('fs');


const getText = (pathFile) => {
    return new Promise(function (resolve, rejet) {
        readFile(pathFile, 'utf-8', (err, data) => {
            if (err) {
                reject(err)
            }

            resolve (data)
        })
    })
}

async function readText() {
    try {
        const result1 = await getText('./archivos/primero.txt');
        console.log(result1);
        
        // throw new Error('Este es un error que no se esperaba')

        const result2 = await getText('./archivos/segundo.txt');
        console.log(result2);

        const result3 = await getText('./archivos/tercero.txt');
        console.log(result3);

    } catch(error) {
        console.log(error)
    }
}

readText();