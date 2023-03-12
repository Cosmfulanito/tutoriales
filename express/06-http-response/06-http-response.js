/*

                                                    _____HTTP Response:_____
                                                    


 - En este tutorial veremos los distintos tipos de datos y archivos que puede devolver el servidor con express

 - Estos son solamente algunos. Para tener una vision más amplia se recomienda ir a la documentación oficial

*/


const express = require('express');

const app = express();


// _____Devolver texto:_____
app.get('/', (req, res) => {
    res.send('Holiwis');                                       
});


// _____Devolver archivos:_____
app.get('/imagen', (req, res) => {
    res.sendFile('./archivos/gatito-tierno.jpeg', {         // sendFile() es un modulo de express que nos permite, como su nombre lo dice, enviar archivos. No tiene que ser solamente una imagen, tambien puede ser un audio, un archivo txt, etc.
        root: __dirname                                     // esto es algo propio de node que ya lo vimos en su respectivvo curso
    });
});


// _____Devolver objetos json:_____
app.get('/json', (req, res) => {
    res.json(
        {
            "nombre":"Juan",
            "apellido":"Perez",
            "edad":27,
            "direccion":{
                "ciudad":"New York",
                "calle":"Calle Falsa 123"
            }
        }
    );
});


// _____Devolver codigos de status:_____
// Tener en cuenta que para ver este mensaje tengo que ir a la pestaña "network" del "inspector de elementos" ya que el link "http://localhost:3000/status" no me llevara a ninguna página
app.get('/status', (req, res) => {
    res.sendStatus('204');                                  // Esto es equivalente al "res.status(204).end()"" de node. Tener en cuenta que para ver este mensaje tengo que ir a la pestaña "network" del "inspector de elementos" ya que el link "http://localhost:3000/status" no me llevara a ninguna página
});



app.listen(3000);
console.log('Servidor funcionando en el puerto 3000');