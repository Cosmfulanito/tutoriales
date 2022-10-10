/*

                                                _____ HTTP request: _____



 - Como como ya vimos en el apunte anterior, el parametro "request" representa la peticion que hace cliente (usuario) al servidor.
   Lo interesante es que me mediante ese parametro, nosotros podemos acceder al objeto http



 - TIP: Cuando queramos ver por consola el objeto http que proviene del parametro "request" o cualquier otra de sus keys como puede
        ser "request.url", antes devemos cargar la pagina (ej: http://localhost:3000/), esto se debe a que la funcion createServer()
        se ejecuta cada vez que alguien ingresa a dicha página web. 
   


 - request.ur       Nos devuelve dos valores al mismo tiempo:
                        - 1º    Es la url a la cual ingreso el usuario. No es la url completa, sino que muestra desde el 
                                primer "/". Osea, si el usuario ingreso a http://localhost:3000/ me va a devolver un "/", 
                                pero en cambio, si el usuario ingreso a http://localhost:3000/perrito, me va a devolver 
                                "/perrito"   
                        - 2º    Me devuelve el favicon. Osea, el icono d la pagina web que esta en la pestaña 


 - Esta herramienta es muy interesante ya que nos permite crear distintas rutas de para nuestro URL con las cual podemos enviar
   archivos y contenido HTML
   Hay que tener en cuenta que a pesar de aprender esta herramienta, ya existen modulos que hacen este trabajo. Un ejemplo de 
   esto es el "React router" de React 


*/



const http = require('http')



http.createServer((request, response) => {      
    
    //console.log(request)                                          // Cada vez que cargo la pagina web me devuelve el objeto html que lo llamo desde el parametro "request"

    console.log(request.url)                                        // Cada vez que entro a la pagina web, me devuelve la url a la cual ingrese. Inclusive cuando ingreso mediante con rutas de acceso como http://localhost:3000/perrito 
    

    if (request.url === "/gatito") {                                // Este if signica que si el usuario entra este link http://localhost:3000/gatito le aparecera el siguiente mensaje  
        response.write('Los gatitos lo mejor del mundo :3');
        return response.end();                                      // Por que ponemos un return? Como sabemos el return finaliza la funsión, y debajo de este if con este response.write() hay otro con otro mensaje que me lo va a sobre escribir. Con este return me evito ese problema             
    }

    if (request.url === "/perrito") {
        response.write('Los perritos tambien son tiernos');
        return response.end();   
    }

    if (request.url === "/") {                                      // Si el usuario entra solamente a http://localhost:3000/ va a ver este mensaje
        response.write('Soy la pagina de inicio');
        return response.end();   
    }

    if (request.url === "/etiqueta") {                              // En este caso, estamos enviando una etiqueta html cuando el usuario ingrese a este link
        response.write(`
                        <h1>Esto es una etiqueta<h1/>
                        <p>Sep, claramente es una esto tambien es una etiqueta</p>
                        <p style="color:red;">Y esto es un texto en rojo :3</p>
                        <a href="/">Ir a la pagina principal (hasta me hice un link!)</a>
                    `);
        return response.end();   
    }

    response.write('Esta pagina no exite');                         // Si el usuario entra a cualquier otra página, le va a aparecer este mensaje          
    response.end()               
    
}).listen(3000)                                                     


console.log('Servidor escuchando en el puerto 3000')