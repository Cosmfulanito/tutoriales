/*

                                                        _____Routing:_____


 - El "Routing" hace refrencia a las distintas rutas de de una sitio web. Tema en cual ya tuvimos un acercamiento en el tutorial de 
   "react router" de React.
   

 - La ventaja de Express es que a la hora de hacer routing, este no tiene que usar condicionales "if" como lo hace Node. En su lugar 
   usaremos funciones independientes para cada ruta.




*/


const express = require('express');

const app = express(); 

// _____Ruta principal:_____
app.get('/', (req, res) => {                                                    // '/' significa que cuando entre a la ruta principal: http://localhost:3000/, me va a aparecer el siguiente mensaje
  	res.send('Holiwisss :3');                                                   // El metodo send() es un metodo propio de Express. Es equivalente al end() de Node         
})


// _____Rutas secundarias:_____
app.get('/gatito', (req, res) => {                                              // '/gatito' significa que cuando entre a la siguiente ruta: http://localhost:3000/gatito, me va a aparecer el siguiente mensaje            
    res.send('Los gatitos son geniales!!!');         
})

app.get('/music', (req, res) => {                      
    res.send('Pun pun pin pin (alto ritmo perri)');         
})


// _____Error 404: No se encontro su página/ruta_____
app.use((req, res) => {                                                         // Como se puede apreciar, estoy aplicando el metodo use() y a su vez no coloco ninguna ruta. Esto es para que cuando el usuario en ingrese una ruta inexistente, el sitio web le devuelva un mensaje de error 404       
    res.status(404).send('No se encontro tu página. Alto error 404 amego');     // Tecnicamente, la pagina esta respondiendo correctamente y ante la falta de una ruta, envia este mensaje, por ende el dentro del inspector de elemento el codigo de status es "200" (todo salio bien). Pero lo que yo quiero transmitir es que que hay un error 404 (pagina no encontrada). Por ende fuerzo a mostrar dicho mensaje usando la propiedad .status(404)
})


app.listen(3000);
console.log('El servidor esta funcionando en el puerto 3000');