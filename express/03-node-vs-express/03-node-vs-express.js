/*

                                                _____Node vs Express:_____



 - En este tutorial vamos a comparar la creacion de un mismo servidor, una version sera hecha con Node y la otra con Express.
   La idea es que podamos apreciar que con Express podemos crear servidores con mucho menos codigo

 - La diferencia entre uno y el otro es mucho más notable en aplicaciones grandes. Este no es más que un servidor basico y por ende
   no vamos a notar mucha diferencia. 
   Pero hay que tener en cuenta de que la mayoria de los servidores que nos encontremos van a estra escritos con Express.


*/



// _____Version de node:_____
// Comento el codigo para que no interfiera con el de Express

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     const read = fs.createReadStream('./static/index.html');
//     read.pipe(res)
// });

// server.listen(3000);
// console.log('El servidor esta funcionando en el puerto 3000');







// _____Version de Express_____

const express = require('express');                         // Con esto estamos importando Express. Como podemos ver, es similar a como importamos el modulo http

const app = express();                                      // En Express utilizamos como nombre de nuestro servidor la palabra "app" en vez de "server" (su funcion es la misma)  

app.get('/', (req, res) => {                                // '/' significa que cuando entremos a la ruta principal de nuestra aplicacion, vamos a devolver lo siguiente
    res.sendFile('./static/index.html', {                   // Este es el metodo que usaremos para enviar archivos
        root: __dirname                                     // Es necesario poner este segundo parametro con este root para que funcione el envio de archivos, de los contrario me devolvera un error. Este root lo que hace es especificar de donde viene dicho archivo. __dirname nos dice que el archivo va a ser leido desde ese directorio inicial 
    });
});

app.listen(3000);
console.log('El servidor esta funcionando en el puerto 3000');