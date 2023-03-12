/* 
 - En este router vamos a almacenar unicamente las rutas de nuesta aplicacion. 

 - Recordar que puedo usar routers para modulular lo que desee, incluso puedo tener un router que se encarge de guardar unicamente
   funciones matematicas
*/


const express = require('express');



const router = express.Router();                        // Este middleware es un objeto el cual puede almacenar keys para exportarlas. Las keys son funciones/variables que se llaman igual que este middleware, en este caso lo llamamos "router" pero puede tener otro nombre




router.get('/products', (req, res) => {                 // Para que estas funciones puedan exportarse correcatmente, deben llamarse igual que el middleware que las exporta, en este caso "router"
    res.send('Productos');
});

router.get('/users', (req, res) => {
    res.send('Usuarios');
});




module.exports = router;                                // Con esto exportamos las funciones anteriores. Similar a como se hace con React