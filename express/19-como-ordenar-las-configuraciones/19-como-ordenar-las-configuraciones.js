/*

                                            _____Como ordenar las configuraciones:_____


 - Para que algunas algunas herramientas de Express funcionen correctamente, es necesario ordenarlar en una determinada manera. 
   Un ejemplo de esto son los "middlewares" y los "settings" los cuales pueden no funcionar si no estan en un determinado orden


 - Orden de escritura:
    1- Settings
    2- Middlewares
    3- Rutas

*/




const express = require('express');
const app = express();

                            
// 1- Settings
app.set('servidor', 'Curso de express');                    
app.set('puerto', 3000);
app.set('case sensitive routing', true);                    

                                               
// 2- Middlewares
app.use(express.json());
app.use(morgan("dev"));


// 3- Rutas
app.get('/products', (req, res) => {
    res.send('Productos en minusculas');
});

app.get('/Products', (req, res) => {                        
    res.send('PRODUCTOS EN MAYUSCULAS');
});



app.listen(app.get('puerto'));                            
console.log(`El servidor "${app.get('servidor')}" esta funcionando en el puerto ${app.get('puerto')}`);

