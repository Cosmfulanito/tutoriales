/*

                                            _____Middleware Interceptor:_____



 - Los Middlewares pueden ser descargados de npm como cualquier otra libreria, lo que nos facilita el trabajo ya que seria una 
   funcion como cualquier otra, creada por alguien más

 - Esto nos permite poder tener a nuestro alcance Middleware que funcionen como validadores que ya esten testeados y que hagan 
   trabajos especificos

*/





/*

 - En este apunte vamos a descargar una libreria/Middleware por medio de npm llamada "Morgan" para usarla como ejemplo. 
   Dicha libreria nos va a dar informacion acerca de la hora en la que ingreso el cliente a nuestro servidor, el dia, el 
   navegador, el tipo de metodo, etc.

 - Para instalar el Middgare "Morgan"vamos a usar el siguiente comando: 
   npm i morgan

*/


const express = require('express');
const morgan = require('morgan');                   // Aquí estamos requiriendo a "Morgan" como a cualquier otro paquete 

const app = express();





// _____Usando el middleware Morgan:_____
app.use(morgan());                                  // Este es el Middleware de "morgan". Cuando ingresemos a alguna ruta, la terminal nos brindara informacion como la hora en la que ingreso el cliente a nuestro servidor, el dia, el navegador, el tipo de metodo, etc.

app.use(morgan('dev'));                             // Si leemos la documentacion, podemos ver que podemos agregar distintos parametros que hacen que la informacion mostrada en la terminal sea diferente. En este caso con el parametro "dev"vamos a recibir parte de la informacion resumida y en colores

                   




app.get('/landing', (req, res) => {
    res.send('Vienvenido a la landing!!!');
});

app.get('/dashboard', (req, res) => {
    res.send('Vienvenido al dashboard!!!');
});


app.listen(3000);
console.log("El servidor esta funcionando en el puerto 3000");
