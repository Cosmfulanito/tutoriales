/*
                                                    _____Api Rest: CRUD_____



 - CRUD: "Create", "Read", "Update", "Delete"

 - En este apunte vamos a crear nuestra propia "Api Rest"
   Para ello ademas de de instalar el modulo de Express, tambien vamos descargar el modulo "Morgan" (el cual es un middleware ya 
   visto en apuntes anteriores) y "Nodemon" (el cual nos permite actualizar nuestro archivo .js y ver los cambios, sin tener que 
   actualizar tambien la terminal. Esto nos hace el trabajo más facil. Este modulo ya fue visto en el tutorial de "Node")
   
 - Para apreciar como funcionan los metodos get, post, put y delete vamos a usar el "Thunder Client"

 - IMPORTANTE: Para que nodemon funcione en la terminal, en ves de ejecutar el comando clasico de node para abrir el archivo, vamos 
   a escribir: "npm run dev"
*/



const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev')); 


app.get('/products', (req, res) => {
    res.send('Obteniendo productos');
});

app.post('/products', (req, res) => {
    res.send('Creando productos');
});

app.put('/products', (req, res) => {
    res.send('Actualizando productos');
});

app.delete('/products', (req, res) => {
    res.send('Eliminando productos');
});

app.get('/products/:id', (req, res) => {                        // Para que esto funcione en el "Thunder Client" tengo que ingresar el url http://localhost:3000/products/1 
    res.send('Obteniendo un solo producto');
});



app.listen(3000);
console.log('Servidor esta funcionando en el puerto 3000');