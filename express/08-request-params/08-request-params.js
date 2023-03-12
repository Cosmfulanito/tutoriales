/*

                                                    _____Request Params:_____



 - Los "Request Params" como su nombre lo indica, son request (peticiones del cliente al servidor) por medio de los parametros de 
   la URL. 
   Osea, usamos esos mismo parametros como variables de toda la vida

 - Para poder usar un parametro de una URL como variable, solamente debemos escribilo con un ":" como prefijo. 
    Ej: /usuario/:nombre        Si el cliente entra a una URL que diga www.gatito.com.usuario/nico, la palabra "nico" va a ser el
                                valor de la variable "nombre"
                                
 - Para acceder a estas variables debemos utilizar el objeto req.params.<nombre de la variable>

 - Estas variables se funcionan al igual que cualquier otra variable comun y corriente. Por ende las podemos sumeter a operaciones 
   matematicas de suma, resta multiplicacion, etc. A condicionales if, a bucles for, a metos de JavaScript y demas

 - Recordar que el tipo de valor de estas variables es el "string".


*/




const express = require('express');

const app = express();





// _____Acceder a un Request Params:_____
app.get('/hello/:nombre', (req, res) => {                                   // Si accedo a una URL como por ejemplo http://localhost:3000/hello/nico voy a recibir un mesaje que diga "Holis nico"                    
    console.log(req.params);                                                // EUna vez que ingrese a una URL especifica como http://localhost:3000/hello/nico, esto me va a mostrar desde la terminal todos los parametros/variables que hay en esta URL. En este caso hay uno solo que es "nombre"
    console.log(req.params.nombre);                                         // Me muestra especificamente el parametro/variable "nombre"
    res.send(`Holis ${req.params.nombre}`);
});




// _____Acceder a mas de un solo parametro:_____                            
app.get('/animal/:especie/:sonido', (req, res) => {                        // En este caso tengo dos parametros/variables, "especie" y "sonido". Si  en a una URL como por ejemplo http://localhost:3000/animal/gato/miauuuu voy a obtener un mensaje que diga "El gato hace miauuuu"   
    console.log(req.params);
    res.send(`El ${req.params.especie} hace ${req.params.sonido}`);
});




// _____Operaciones con parametros:_____
app.get('/add/:x/:y', (req, res) => {                                       // Como sabemos, los parametros funcionan como variables comunes y corrientes, por ende podemos someterlos a operaciones matematicas y demas. En este caso haremos una suma donde si ingresamos si ingresamos a una url como http://localhost:3000/add/100/50 nos devolvera un mensaje que dice "La suma es de 100 + 50 = 150"
    console.log(req.params.x);
    console.log(req.params.y);

    const add = parseInt(req.params.x) + parseInt(req.params.y);            // Usamos el metodo de Javascript parseInt() que convierte los numeros de un string en numeros reales
    console.log(add);
    res.send(`La suma es de ${req.params.x} + ${req.params.y} = ${add}`);
});




// _____ Condicionales if con parametros:_____                                 // Como sabemos, los parametros funcionan como variables comunes y corrientes, por ende podemos someterlos "condicionales if". En este casi si el cliente ingresa a la URL http://localhost:3000/usuario/nico/photo devolvera la foto de gatito, en caso de poner otro nombre, aparecera el mensaje "Usuario incorrecto".       
app.get('/usuario/:username/photo', (req, res) => {
    if(req.params.username === 'nico') {
        res.sendFile('./archivos/gatito-tierno.jpeg', {
            root: __dirname
        });

    } else {
        res.send('Usuario incorrecto');
    }
});




app.listen(3000);
console.log('El servidor esta funcionando en el puerto 3000');