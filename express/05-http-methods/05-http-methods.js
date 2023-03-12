/*

                                                    _____HTTP Methods:_____


 - Los "HTTP Methods" (metodos HTTP) o tambien conocidos como "HTTP verbs" son metodos que tiene el cliente para comunicarse con el
   servidor.



 - Tipos de metodos: 

    - Get:              Permite al cliente pedir informacion al servidor. Pueden ser distintos tipos de archivos (.html, .css, .js, 
                        etc), carpetas, imagenes, audio, etc.

    - Post:             Se usa cuando el cliente quiere ingresar informacion a un servidor. Por ejemplo, cuando se sube un texto, 
                        imagen en Instagram o se hace un post en reddit.

    - Put:              Se utiliza cuando el usuario quiere actualizar un dato "completamente". Esto quiere decir que actualiza 
                        tosdos los datos que tengo guardados. Por ejemplo, si tengo un usuario conformado nombre, apellido y edad,
                        el metodo "put" me actualiza todos los datos al mismo tiempo

    - Patch:            A diferencia del metodo "put", este metodo le permite al usuario actualizar solamente una parte de los datos. 
                        Por ejemplo, si tengo un usuario conformado nombre, apellido y edad, con el metodo put solamente actualizaria 
                        uno solo de estos datos. 

    - Delete            Permite al usuario borrar información del servidor.


    - Recordar que hay más de estos metodos, pero estos son los que utilizaremos con más frecuencia


*/




/* 
	- A modo de ejercicio, vamos a crear estos metodos. Como sabemos, hay algunos metodos como el "post" el cual para verlo en acción 
   	  necesitamos de una página web del tipo cliente funcionando (osea, una pagina web de front de toda la vida). Como eso es mucho
	  trabajo y necesitamos testearlo ya, usaremos una extencion de Visual Studio Code llamada "Thander Client"

	- En Thander Client solamente ingresaremos la url deseada, en este caso "http://localhost:3000/products" y el metodo el cual 
	  queramos ejecutar

*/ 



const express = require('express');

const app = express();


// _____Get:_____
app.get('/products', (req, res) => {
  	res.send('Viendo productos');
});

// _____Post:_____
app.post('/products', (req, res) => {
  	res.send('Creando producto');
});

// _____put:_____
app.put('/products', (req, res) => {
  	res.send('Actualizando producto');
});

// _____Patch:_____
app.patch('/products', (req, res) => {
  	res.send('Actualizando una parte del producto');
});

// _____Delete:_____
app.delete('/products', (req, res) => {
  	res.send('Eliminando producto');
});



app.listen(3000);
console.log('El servidor esta funcionando en el puerto 3000');