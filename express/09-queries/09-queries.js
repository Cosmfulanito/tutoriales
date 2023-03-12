/*

                                                        _____Queries:_____



 - Una "Query" es informacion extra que el cliente puede enviar al servidor para que este ultimo haga una operacion con la 
   informacion adicional que recibio. 
   Recordar que esta es INFOMACION ADICIONAL que acompaña a la URL y que no afecta a esta

 - Las queries funcionan como un objeto de JavaScript, donde muchas queries que constan de una key y su respectivo valor, son 
   encapsuladas en un objeto.

 - Al igual que cualquier objeto, las queries pueden ser sometidas a operaciones matematicas, condicionales if, bucles for, 
   metodos propios de JavaScript, etc


 - ¿Como enviamos una Query?
   El clienten debe su URL un y al final de esta un "?" acompañado de una key y su respectivo valor
   Recordar que esta es INFOMACION ADICIONAL que acompaña a la URL y que no afecta a esta
   Ej: http://localhost:3000/inicio?animal=gato                         En este caso la query es "animal"y su valor es es "gato"       
                                                                        Apesar de que es una sola key con su respectivo valor, esta
                                                                        estara dentro de un objeto

 - ¿Como enviar más de una Querie?
   Al final de una querie simplemente escribiremos & seguido de la siguiente quierie
   Ej: http://localhost:3000/usuario?nombre=juan&apellido=perez         Estas dos keys con sus respectivos valores estaran dentro un
                                                                        objeto    

                                                                    
 - ¿Que pasa si repito una querie pero con otro lavor?
   Lo que ocurre es que dentro de una key habra un array con todos los distintos valores
   Ej: http://localhost:3000/mercado?fruta=manzana&fruta=pera&fruta=naranja         Lo que vere es el siguiente objeto:
                                                                                    { fruta: ['manzana', 'pera', 'naranja'] }

 - ¿Como acceder a las queries?
   Mediante la linea de codigo:     "req.query"
*/


const express = require('express');
const app = express();






// _____Enviando una Querie:_____
// Para que funcione, ingresaremos a la siguiente URL: http://localhost:3000/inicio?animal=gatito
// Desde la terminal prodremos apreciar un objeto el cual tiene una key llamada "animal" con su respectivo valor "gatito" 
app.get('/inicio', (req, res) => {                 
    console.log(req.query);
})




// _____Enviando más de una Querie y acceder a cada una de ellas de forma individual:______
// Para que funcione, ingresaremos a la siguiente URL: http://localhost:3000/dos?fruta=manzana&verdura=papa
// Desde la terminal podre observar un objeto con sus respectivos valores
app.get('/dos', (req, res) => {                 
    console.log(req.query);
    console.log(req.query.fruta);
    console.log(req.query.verdura);
})





// _____Repetir queries pero con distinto valor_____
// Lo que vamos a apreciar es que dentro de una key habra un array con todos los distintos valores 
// Para que funcione, ingresaremos a la siguiente URL: http://localhost:3000/repetir?fruta=manzana&fruta=pera&fruta=naranja
app.get('/repetir', (req, res) => {                 
    console.log(req.query);
})





// _____Condicionales if con Queries:_____
// En este caso vamos a unsar un condicional if con nuestra query
// Para que funcione, ingresaremos a la siguiente URL: http://localhost:3000/if?nombre=nikin
// Segun el valor de nuestra que "nombre"sea o no "nikin" vamos a recivir uno u otro mensaje en la terminal 
app.get('/if', (req, res) => {                 
    if(req.query.nombre === 'nikin') {
        console.log('Eres Nikin :3')

    } else {
        console.log('No eres Nikin :c')
    }
})




// _____Operaciones con queries:_____
// En este caso vamos a hacer una sumatoria con dos queries
// Para que funcione, ingresaremos a la siguiente URL: http://localhost:3000/suma?x=5&y=10
// Desde la terminal podre observar como se realizo dicha suma
app.get('/suma', (req, res) => {                 
    console.log(req.query);

    let sumatoria = parseInt(req.query.x) + parseInt(req.query.y);
    console.log(`${req.query.x} + ${req.query.y} = ${sumatoria}`);
})





app.listen(3000);
console.log('El servidor esta funcionando en el puerto 3000');

