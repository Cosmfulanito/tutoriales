/*

                                                        _____Settings:_____

 - Hay dos tipos de Settins:
    - Variables:    Basicamente estamos escribiendo una variable comun y corriente que luego usaremos más adelante. Esta 
                    variable sera guardada dentro de "const app = express();"
                    Su forma de implementación es similiar al useState() de REACT
                        Ej: El numero 3000. Esta variable la utilizaremos como numero de puerto y como mensaje en el console.log()


    - Configurar:   Esto me permte configurar el funcionamiento de los valores por defecto de express. En este caso, no vamos
                    a trabajar con variables sino con palabras reservadas.
                        Ej: Por defecto, las rutas/url leen todos los caracteres como si fueran letras minusculas. Por ende, es lo 
                        mismo decir "www.gatito.com/bitotes" que "www.gatito.com/BIGOTES". Pero con los setings podemos hacer que 
                        que estas dos rutas sean diferentes ya que discriminaria los caracteres mayusculas de los minusculas
    

*/


const express = require('express');
const app = express();

                            

app.set('servidor', 'Curso de express');                    // Estoy creando una variable llamada "servidor" que almacena el string 'Curso de express'. Recordar que para acceder a esta variable debo utilizar el metodo get, ej: app.get('puerto');
app.set('puerto', 3000);
app.set('case sensitive routing', true);                    // Estoy configurando en enrutamiento de express para que sea "key sensitive", osea, que me respeta las minusculas y las mayusculas. Recordar que "case sensitive routing" son palabras reservadas      // Tener en cuenta que esto no funciona en Chrome, hay que usar Firefox            

                                               




app.get('/products', (req, res) => {
    res.send('Productos en minusculas');
});

app.get('/Products', (req, res) => {                        // Ahora me respeta el key sensitive. Sin el setting anterior esto no funcionaria       // Tener en cuenta que esto no funciona en Chrome, hay que usar Firefox            
    res.send('PRODUCTOS EN MAYUSCULAS');
});




app.listen(app.get('puerto'));                              // Aqui estoy accediendo a la variable "puerto"
console.log(`El servidor "${app.get('servidor')}" esta funcionando en el puerto ${app.get('puerto')}`);

