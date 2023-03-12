/*

                                                        _____Middlewares:_____



 - ¿Que son los middlewares?
   Como sabemos, hay una comunicacion directa entre el cliente y el servidor, pero tambien podemos agregar funciones entre medio de
   ellos dos cuando el cliente manda informacion al servidor. Este paso intermedio se llama "Middleware".

 - ¿Para que sirven?
   Los Middlewares tiende distintas funciones, entre ellas la mas destacada es la de registrar la informacion que va directo al 
   servidor, de esta manera podemos validarla antes de que llegue al servidor y alguien mal intencionado haga alguna cagada
   Las funciones que registran los datos que van llegando se llaman "logger"

 - Recordar que podemos agregar tantos middlewares como deseemos
 

*/



const express = require('express');
const app = express();



// _____Crear un Middleware:_____                                               // Como podemos apreciar, penemos el Middleware antes que cualquier ruta. Esto tiene sentido porque la informacion debe pasar primero por el Middleware y luego por el servidor
app.use((req, res, next) => {                                                   // Este Middleware no es más que una funcion comun y corriente. Para que que funcione debemos usar la funcion "app.use()"       // Ademas de poder usar las variables "req y res, tambien vamos a usar una nueva variable llamada "next". ¿Para que sirve "next"? Más a delante vamos a tener que llamarla por medio una funcion() que vamos a explicar más adelante

    console.log('Paso por aquí');                                               // Antes de que la informacion del cliente llegue al servidor, se va a mostar esto en la terminal
    console.log(`Ruta: ${req.url} --- Metodo: ${req.method}`)                   // En esta logica, estamos aprobechando la informacion que obtenemos como el "req". ahora en la terminal nos aparecera el nombre de la tuta visitada y su metodo empleado

    next();                                                                     // Los Middleware son funciones que tienen un problema, este problema no no permite seguir leyendo codigo más alla del Middleware, por ende todo lo que esta abajo de exto practicamente no existe. Este problema se soluciona mediante la funcion next(), el cual le dice al programa: "Flaco, segui leyendo el resto del codigo"  
});





app.get('/loging', (req, res) => {
    res.send('Pagina de loging');
});

app.get('/profile', (req, res) => {
    res.send('Pagina de profile');
});


app.listen(3000);
console.log("El servidor esta funcionando en el puerto 3000");