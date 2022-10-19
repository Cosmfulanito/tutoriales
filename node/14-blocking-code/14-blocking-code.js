/*

                                                    _____Blocking Code_____


 - El "Blocking Code" esta estrechamente relacionado con el "Event Loop". Se le llama así cuando un evento "asincrono", al tardar 
   mucho tiempo en ejecutarse, no permite la ejecución de otros eventos asincronos.

 - En Node esto es muy peligroso ya que nos puede bloquear el acceso a las distintas rutas. 
   Esto puede ocurrir porque un cliente puede hacer una peticion que tome mucho tiempo en una ruta, mientras esta peticion se
   ejecuta, puede ocurrir que un segundo cliente haga otra petición en otra ruta. El problema vendria porque esta segunda peticion 
   en esta segunda ruta no comenzaria a ejecutarce hasta que se termine de ejecutar la primer peticion del primer cliente.

*/






/* 
 - Para demostar esto, vamos a hacer dos rutas, una que funciona de forma normal y otra que no solamene va a demorar en ejecutarse,
   sino que ademas una vez que se ejecute, tambien va a demorar a los demas a las demas rutas  que se habran despues de esta ya 
   que estaran en la fila de espera.  
   
 - Para ello tendremos crearemos una ruta llamada "/demorador" la cual va a ejecutar una funsión tan pesada que va a tardar mucho 
   tiempo en finalizar su ejecución. Lo interesante es que una vez se ejecute, las demas rutas que se habran despues de esta, 
   tambien tardaran en ejecutarse ya que estan en la fila de espera
   
 - Para chequear esto, solamente tendremos que ver el icono que esta en la pestaña. Ya que aparecera un circulo de carga que 
   tardara bastante tiempo en desaparecer, ya que se tendra que haber ejecutado la petición de la ruta "/demorador".
*/

const http = require('http');


const server = http.createServer((req, res) => {

    if(req.url === '/'){                                                    // Esta ruta se ejecutara con normalidad, a no ser que previamente se entre a la ruta "/demorador", si este es el caso, esta ruta tardara en cargarse ya que estara en cola esperando a que se ejecute la petició de la ruta "/demorador"
        res.write('Si en accedo a esta o a cualquier otra ruta luego de entrar a la ruta "/demorador" esta y las demas páginas van a tardar en cargar ya que las peticiones de "/demorador" todavia se estan ejecutando');
        return res.end()
    };
    


    if(req.url === '/demorador'){
      res.write('Este servidor va a demorar a los demas')
      
        // Bloquing code													Este es el codigo bloqueante. // Basicamente estoy ejecutando un bucle for unas mil millones de veces. Osea eque esta funcion se va ademorar un poquito en completarse...
        for(let i = 0; i < 100000000 ; i++) {                               
            console.log(Math.random() * i)
        }

        return res.end()
    };
    
});

server.listen(3000);

console.log('Servidor funcionando en el puerto 3000');