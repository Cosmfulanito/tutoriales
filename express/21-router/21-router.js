/*
                                                            _____Router:_____


 - El "Router" (no confundir con routing) es el proceso el cual nos permiter dividir nuestro codigo en más archivos .js
   La ventaja de esto en proyectos más granes, es que nos permite tener un codigo más limpio y modulado. Algo similar a los visto 
   con React

*/


const express = require('express');
const app = express();

                      

const rutas = require('./routers/rutas');                         // Guardamos el archivo exportado en esta variable


app.use(rutas);                                                   // Llamamos a las funciones del archivo exportado


app.listen(3000);                            
console.log("El servidor esta funcionando en el puerto 3000");

