/*
                                                    _____Api Rest: Get y Post_____



 - En este apunte, vamos a hacer una Api Rest al igual que en el apunte anterior, pero en este caso vamos a trabajar especificamente
   con los metodos GET y POST.
   Para ellon vamos a utilizar un array como base de datos


                                                    
 - IMPORTANTE: Para que nodemon funcione en la terminal, en ves de ejecutar el comando clasico de node para abrir el archivo, vamos 
   a escribir: "npm run dev"
*/






const express = require('express');
const morgan = require('morgan');

const app = express();



const productos = [              // Este es el Array que va servir como base de datos, en el vamos a guardar los "productos". Ya viene con un "producto" por defecto pero le vamos a agregar más
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




// _____Metodo POST:_____                                               En el Thunder Client, dentro mediante la peticion post, dentro del body vamos a enviar el siguiente json para que se una al jason ya creado y la base de datos se haga más grande agregando más productos:    {"nombre": "tablet", "precio": 400 }
app.post('/products', (req, res) => {
    const nuevoProducto = {...req.body, id: productos.length + 1};      // Basicamenete estoy a agregando el producto al array con su id correspoente, el cual es igual a la cantidad de productos + 1
    productos.push(nuevoProducto);

    res.send(nuevoProducto);
});







// _____Hayar un producto especifico de la lista:_____                  Para que esto funcione en el "Thunder Client" tengo que ingresar el url http://localhost:3000/products/1, este ultimo numero representa el id del producto que busco. Como en el array solamente tengo un solo producto por defecto, antes debo agregar productos con el metodo post                     
app.get('/products/:id', (req, res) => {                                 
    console.log(req.params.id);
    const productoHayado = productos.find( producto =>  producto.id === parseInt(req.params.id));       // Le estoy diciendo que dentro del array de la lista de productos, que me encuentre el producto cuyo "id" coincida con el id que busco. Por ejemplo, si busco al producto con el id 5, tengo que poner en el Thunder Cliente http://localhost:3000/products/5          

    if (!productoHayado) {                                                                              // Si dicho id no existe (y por ende el producto), que me devuelva el siguiente tetxo
        return res.send('No se encontro su producto');
    }

    console.log(productoHayado);
    res.json(productoHayado);
});






app.listen(3000);
console.log('Servidor esta funcionando en el puerto 3000');
