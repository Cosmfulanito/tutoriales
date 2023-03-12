/*

                                                _____Validaciones con middlewares:_____



 - En este tutorial vamos a usar un middleware como validador. Osea, para ingresar a una determinada ruta, el cliente debe de 
   ingresar un password valido. Esto lo haremos con la ayuda de una "query, tema ya visto en apuntes anteriores


*/




const express = require('express');
const app = express();



// _____Middleware como validador de password:_____                     Para que funcione, tengo que ingresar la url http://localhost:3000/dashboard?pass=gatito123     // Si la contraseña esta bien escrita, me redirecionara al dashboard, caso contrario me aparecera un mensaje de contraseña incorrecta                       
app.use((req, res, next) => {
    if(req.query.pass === "gatito123") {
        next()

    } else {
        res.send('Contraseña incorrecta')
    }
});


app.get('/dashboard', (req, res) => {
    res.send('Contraseña correcta, vienvenido al dashboard!!!');
});





app.listen(3000);
console.log("El servidor esta funcionando en el puerto 3000");
