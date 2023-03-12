/*
                                                    _____Api Rest: Put y Delete_____



 - En este apunte, vamos a hacer una Api Rest al igual que en el apunte anterior, pero en este caso vamos a trabajar especificamente
   con los metodos PUT y DELETE. Van a aparecer los metodos GET y POST pero esto se debe a que reutilizamos codigo del apunte anterior
   Para ellon vamos a utilizar un array como base de datos


                                                    
 - IMPORTANTE: Para que nodemon funcione en la terminal, en ves de ejecutar el comando clasico de node para abrir el archivo, vamos 
   a escribir: "npm run dev"
*/






const express = require('express');
const morgan = require('morgan');

const app = express();



let productos = [                                                     // Este es el Array que va servir como base de datos, en el vamos a guardar los "productos". Ya viene con un "producto" por defecto pero le vamos a agregar más
    {
        id: 1,
        nombre: "phone",
        precio: 300
    }
];                                

app.use(morgan('dev')); 
app.use(express.json());                                                // Llamo a este middleware para que mi codigo pueda leer json



app.get('/products', (req, res) => {
    res.json(productos)
});



app.post('/products', (req, res) => {                                                   // En el Thunder Client, dentro mediante la peticion post, dentro del body vamos a enviar el siguiente json para que se una al jason ya creado y la base de datos se haga más grande agregando más productos:    {"nombre": "tablet", "precio": 400 }
    const nuevoProducto = {...req.body, id: productos.length + 1};      
    productos.push(nuevoProducto);

    res.send(nuevoProducto);
});



app.get('/products/:id', (req, res) => {                                                                                // Para que esto funcione en el "Thunder Client" tengo que ingresar el url http://localhost:3000/products/1, este ultimo numero representa el id del producto que busco. Como en el array solamente tengo un solo producto por defecto, antes debo agregar productos con el metodo post
    const productoHayado = productos.find( producto =>  producto.id === parseInt(req.params.id));       

    if (!productoHayado) {                                                                             
        return res.send('No se encontro su producto');
    }

    res.json(productoHayado);
});






// _____Metodo DELETE:_____                                                                                 // Para que esto funcione en el "Thunder Client" tengo que ingresar el url http://localhost:3000/products/1, este ultimo numero representa el id del producto que quiero eliminar. Como en el array solamente tengo un solo producto por defecto, antes debo agregar productos con el metodo post
app.delete('/products/:id', (req, res) => {
    const productoHayado = productos.find( producto =>  producto.id === parseInt(req.params.id));           // Chequea que el producto a eliminar exista

    if (!productoHayado) {                                                                             
        return res.send('No se encontro su producto');
    }

    productos =  productos.filter(producto => producto.id !== parseInt(req.params.id));                     // Esto es un filtro el cual hace solamente deja en la lista los "id"que son diferentes al id del producto que vamos a eliminar  
    console.log(productos);

    res.json("Producto eliminado");
});





// _____Metodo PUT:_____                                                                    // Para que esto funcione en el "Thunder Client" tengo que ingresar el url http://localhost:3000/products/1, este ultimo numero representa el id del producto que quiero modificar. Como en el array solamente tengo un solo producto por defecto, antes debo agregar productos con el metodo post
app.put('/products/:id', (req, res) => {

    const productoHayado = productos.find( producto =>  producto.id === parseInt(req.params.id));       
    if (!productoHayado) {                                                                             
        return res.send('No se encontro su producto');
    }
    

    const newData = req.body;                                                               // Aquí obtenemos la informacion que agrego el usuario y la guardamos en esta variable

    productos =  productos.map(producto => producto.id === parseInt(req.params.id) ? {...producto, ...newData} : producto);     // En este map() lo que hacemos es buscar el producto de nuestralista cuyo id coincida con el id del del producto modificado por el usuario. Luego, los datos que estan dentro del producto de nuestra lista seran modificados por los datos nuevos. Caso contrario de que el id no coincida, simplemente nos devuelve nos producto sin modificar
    console.log(productos);

    res.send('Este producto fue modificado');
});




app.listen(3000);
console.log('Servidor esta funcionando en el puerto 3000');
