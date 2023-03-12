/*

                                                    _____Request Body:_____


 - Request Body es la acción de mandar información (datos, archivos, imagenes, json, etc) desde el "cliente" hacia el "servidor". 
   Esto no es más que un metodo post de toda la vida




 - El envio de información del cliente al servidor es un "request", osea, el req del "(req, res)=>{}"
   El request es un mensaje por parte del cliente y tiene una estructura la cual esta conformada por estas 3 partes principales:
   
    - Endpoint:         Es la ruta a la cual ingreso el cliente
                        Ej: /gatito

    - Header:           Es una nota adicional para brindar más información
                        Ej: "Esto es un json"

    - Body              Es el cuerpo del request, y por ende, es la información principal que quiere transmitir el cliente
                        Ej: {"nombre":"Juan", "apellido":"Perez", "edad":27}
 



 - Metodos:

    - post()            Este metodo le permite al cliente enviarle distinto tipo de informacion (datos, archivos, imagenes, json, 
                        etc) al servidor

    - use()             El servidor no es capas de leer los datos enviados por el cliente, por ende usamos este metodo. 
                        Dependiendo del tipo de dato que queramos leer, vamos a tener que ingresar un valor dentro

                         - express.text()               Permite al servidor leer texto 
                         - express.json()               Permite al servidor leer archivos json
                         - express.urlencoded()         Permite al servidor leer los formularios enviados por el cliente
                         
                         
*/




//   Recordar que usaremos el complemento "Thunder Client" para poder simular el envio de datos por parte de un cliente por medio 
//   del metodo post. Para ello iremos a la pestaña post => body => y luego eligiremos el tipo de dato que queramos enviar


const express = require('express');
const app  = express();




app.use(express.text());                                                // Cuando el cliente envie un texto, el servidor no va a ser capas de entenderlo. Por ende es necesario poner este metodo. De lo contrario en vez de devolverme el texto, me devolvera un "undefined"
app.use(express.json());                                                // Igual que lo anterior, pero en este caso le permite al servidor leer archivos json
app.use(express.urlencoded({extended: false}));                         // Igual que lo anterior, pero en este caso le permite al servidor leer formularios enviados por el usuario. "{extended: false}" es un dato adicional que agregamospara indicarle que esta es una url muy simple y que no necesita interpretar nada más que sea complicado ya que estos datos solamente seran textos

app.post('/user', (req, res) => {                                       // El metodo post() le permite al cliente enviar información al servidor
    console.log(req.body);                                              // Lo que hacemos aquí es ver la informacion del request que le envio cliente al servidor. Como vimos más arriba en el apunte, el "body" es la información del request que el cliente le quiere enviar al servidor
    res.send('Nuevo usuario creado');
})




app.listen(3000);
console.log('Servidor funcionando en el puerto 3000');
