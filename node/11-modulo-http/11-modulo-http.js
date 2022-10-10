/* 

                                                    _____Modulo http:_____ 


 - Bibliografia recomendada:
   https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers



 - Antes de explicar este modulo, hay que tener en cuenta lo que son las peticiones clientes-servidor. 
   Como ya sabemos, cuando un usuario (al cual llamaremos "cliente") ingrasa a una pagina web, desde su computadora le hace una 
   peticion (request) al servidor (osea, envia informacion al servidor pidiendole algo). Por su parte, el servidor luego de recibir 
   la peticion, procede a enviar la informacion solicitada al cliente (esponse). Esta informacion pueden ser desde textos hasta 
   archivos .html, .css, .js, .json, etc 
   En esta misma carpeta hay un imagen que ejemplifica esto mismo 




 - ¿Para que sirve modulo http?
   Este modulo nos permite crear servidores con node, la cual es una principales funciones de node
   
   - Para llama a este modulo lo llamaremos de la misma manera a la que llamamos a cualquier modulo nativo de node:
     - require('https')
     


    
 - Recordar que los servidores no son mas que "funciones" que estan SIEMRE FUNCIONANDO y que estan a la espera/escucha de una 
   peticion (request) por parte del cliente

 - ¿Como llamar a esta funcionar esta funcion?
   - http.createServer()                        - Esta funcion lleva como parametro otra función que a su vez tiene dos parametros:
                                                    1º parametro: Es la palabra request, que es basicamente la peticion que hace el cliente hacia el servidor
                                                    2º parametro: Es la palabra response, que es basicamente el la respuesta que da el servidor 



 - ¿Que puerto usar?
   - El puerto no es más que un numero que se usa a modo de url. Recordar que hay puertos (numeros) que ya esta reservado por el 
     sistemas para hacer determinados procesos y por ende no podemos utilizar estos puesrtos. Por este motivo se recomienda 
     utilizar numeros muy grandes como por ejemplo el 3000

   - Lista de puertos recervados:
     https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers

   - Esto se hace mediante el siguiente metodo que va al final de la funcion:
     .listen()              Ejemplo: .listen(3000)



  
   



 - ¿Como habrir el servidor desde mi navegador?
   - Desde el navegador debemos escribir http://localhost:<numero del puerto que ingresamos>
     Ej: http://localhost:3000
   - Recordar que esto se abrira de manera local
   - Si se observa, el proceso es similar a cuando habrimos de manera local un archivo de React

*/ 


const http = require('http')



http.createServer((request, response) => {                              
    response.write('Soy un super texto :3');                        // En la pagina web voy a visualizar este mensaje
    response.end();                                                 // Debo poner este metodo cada vez que el servidor termina de hacer una respuesta. esto es algo que me obliga node a ponerlo      
}).listen(3000)                                                     // Este es el numero de puerto que elegí poner. Osea, este servidor se funcionara en la url http://localhost:3000/ 


console.log('Servidor escuchando en el puerto 3000')                // Este mensaje solamente lo uso para chequear en la terminal que este archivo se ejecuto 

/* Para ver que este servidor esta funcionando correctamente, solamente tengo que ejecutar este archivo como lo haria normalmente y
   luego ir al link: http://localhost:3000/                 */