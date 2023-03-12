/*
                                                            _____Async Code:_____


 - Ya sabemos lo que es el Async y await mediante tutoriales anteriores de JavaScript acerca de codigo asincrono. Ahora lo vamos
   a implementar en Express

 -  Para este ejemplo vamos a hacer una peticion a la ya conocida base de datos de prueba "jsonplaceholder" y para acceder a esos
    datos vamos a usar la tambien ya conocida libreria "axios" la cual nos permite hacer esas peticiones a las bases de tatos

*/




const express = require('express');
const app = express(); 





const axios = require('axios');                                                             // Aqui estamos llamando a axios, recoradar que ya lo instalamos previamente por medio de npm

app.get('/post', async (req, res) => {                                                      // Estamos usando "async". Basicamente estamos definiendo a esta funcion como a una funcion asyncrona
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');         // Estamos usando "await". Basicamente le estamos diciendo a esta constante que guarde estos valores recien cuando los descarge     
    res.send(response.data);
});





app.listen(3000);                            
console.log("El servidor esta funcionando en el puerto 3000");
