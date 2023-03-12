/*

                                                        _____Static files:_____



 - Las carpetas "static" y "public" como su nombre lo indica, contienen archivos publicos los cuales no importan sin son accedidos
   por los usuarios ya que no contienen informacion "secreta"
   
 - Express no da una herramienta para poder a estos archivos desde el navegador

 - Podemos acceder a la carpeta completa o a los archivos individuales
    http://localhost:3000/               Nos mostrara la carpeta "public"
    http://localhost:3000/index.js       Nos mostrara el archivo "style.css"

*/



const express = require('express');
const app = express();

                      
app.use(express.static('./public'));                            // Aquí estoy llamando a la carpeta "public". Recordar que esta carpeta puede tener cualquier otro nombre, solo que en este caso decidi que se llame public


app.get('/products', (req, res) => {
    res.send('Productos');
});



app.listen(3000);                            
console.log("El servidor esta funcionando en el puerto 3000");

