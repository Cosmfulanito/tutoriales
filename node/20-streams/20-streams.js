/*

                                                    _____Streams:_____


 - Los "Streams"son herramientas que nos ayudan a enviar un archivo muy pesado dividiendolo en multiples partes y enviandolas de a 
   poco para que puedan ser transmitidos facilmente. Funciona de forma similar a los servivios de streaming como Netflix, ya que en 
   este caso, a medida que voy viendo la pelicula, voy descargando partes del archivo que necesito.

 - Las partes en las que se dividen los archivos se llaman "chunks" y pesan aproximadamente 65000 bytes (aunque esto ultimo puede 
   ser modificado. Para ello chequear la bibliografia oficial)

*/





/* 
   Vamos a abrir observar el contenido de un archivo que pesa 9MB en varias partes llamados chunks que pesan aproximadamente 
   65000 bytes. 
   Desde la terminal observaremos como esa partes estan estan codificadas como buffer, esto es intencional, no lo coficamos 
   como utf-8 porque perdemos la posibilidad de ver como el contenido del archivo esta divido.
*/


const {createReadStream} = require('fs');

const stream = createReadStream('./archivos/archivo-pesado.txt');                   // Estamos creando un "stream" de datos. Esta constante me va a devolver un evento (identico al que vimos en los apuntes anteriores), y como todo evento, accederemos a el mediante la funcion .on()
// const stream = createReadStream('./archivos/archivo-pesado.txt', 'utf-8');       // Esto es lo mismo que lo anterior, pero como sabemos, el "utf-8" me permite ver las porciones de datos en el idioma original en vez de codificación buffer. La desventaja es que no puedo ver como es que esta dividido por chunks


stream.on('data', (chunk) => {                                                      // Cuando empieces a recibir el evento "data" (osea, cuando me estes enciando estos datos), yo voy a estar reciviendo estas porciones de datos "chunks" y voy a trabajar con ellos. En este caso los voy a mostar
    console.log(chunk);
});


stream.on('end', () => {                                                            // Cuando termine de cargar todas las porciones de datos, que me muestre el siguiente texto 
    console.log('Ya termine de leer el archivo');
});


stream.on('error', (error) => {                                                     // En caso de de error al cargar los datos, que me lo muestre
    console.log(error);
});