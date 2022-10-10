/* 

                                                            _____ Primises:_____


  - Este es un tema ya conocido desde el tutorial de javaScript

  
*/


const {readFile} = require('fs');

const getText = (pathFile) => {
    return new Promise((resolve, reject) => {
        readFile(pathFile, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            }

            resolve(data);
        })
    })
}; 

getText('./archivos/texto.txt')
    .then((result) => {
        console.log(result);
    })
    .then(() => {
        console.log('perro')
    })
    .catch((error) => {
        console.log(error);
    })

