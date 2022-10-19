/*

                                                    _____streams y http:_____



 - En el tutorial anterior aprendimos a dividir archivos muy grandes para luego leerlos. En este haremos lo mismo pero a su vez lo 
   enviaremos a travez de http, es decir, enviarlo a travez de un servidor

 - Si vamos a http://localhost:3000/ veremos el contenido del archivo dentro de la pagina

 - Si dentro de la consola vamos a la pestaña "network" podremos ver nuestro archivo. Este se llamara "localhost", y al hacer click
   sobre el, podremos ver informacion util como: "Transfer-Encoding: chunked" (significa que el archivo viene por partes, chunks) o 
   incluso el tamaño y el tiempo de descarga, entre otras cosas.
   

*/



const http = require('http');
const {createReadStream} = require('fs');

const server = http.createServer((req, res) => {
    const filestream = createReadStream('./archivos/archivo-pesado.txt', {
        encoding: 'utf-8'
    })

    filestream.on('data', (chunk) => {
        filestream.pipe(res);                                   // Este metodo lo que hace es enviar un "dato" a otra función (res). Osea, se lo pasa a "res". Obiamente le pasas los chunks por partes
    })

    filestream.on('error', error => {
        console.log(error);
    })
});

server.listen(3000);
console.log('El servidor se esta ejecutando en el puerto 3000');