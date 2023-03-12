/*
                                                _____Metodo all()_____


 - El metodo all() es un metodo el cual hace todas las mismas funciones que los metodos get(), post(), push(), delete(), patch(), etc
   pero en un solo metodo. Se puede decir que este metodo es una esopecie de comodin.

 - ¿Para que se usa?
   Segun el tutorial, su uso principal es de testeo. Ya que en vez de usar varios metodos distintos en una sola ruta, se puede usar 
   este unico metodo para testear cosas

*/




/* 
 - A modo de ejercicio, vamos probar estos dos metodos en todas las opciones del Thunder Client. El metodo get() por obvias razones
   solamente funcionara en la opcion GET del Thunder Client, mientras que en las demas opciones nos dara un error. Por otra part,
   el metodo all() funcionara en todas las opciones del Thunder Client.
*/


const express = require('express');
const app = express();





// _____Metodo get():_____
app.get('/get', (req, res) => {
    res.send('Solo funciono con la opcion GET, si me prueban con la opcion POST me da amsiedaddd');
});


// _____Metodo all():_____
app.all('/all', (req, res) => {
    res.send('Funciono con cualquier opcion :3');
});





app.listen(3000);
console.log('El servidor esta funcionando en el puerto 3000');