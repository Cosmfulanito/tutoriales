/*

                                                        _____ Modulo OS ____


 - Documentación donde podremos encontrar modulos propios de node:
   https://nodejs.org/api/modules.html

 - Node provee de funciones por medio de su propio modulo que proviene de su propia API.
 
 - Para acceder a estas funciones debemos llamar al modulo del que provienen de la misma manera que nosotros llamariamos a un modulo propio. Osea, mediante la 
   función "require()"

 - El modulo OS nos devuelve un objeto que nos da información acerca de nuestro sistema operativo.

*/


// _____LLamar al modulo os: _____ 
const  os = require('os');                          // Estamos llamando al modulo "os" propio de node de la misma forma que lo hariamos al llamar a un modulo creado por nosotros



 
// _____ Objeto os: _____
// Me muestra el objeto "os" completo
console.log(os);




/* _____Función propias del modulo OS: _____        
 Estas son algunas funciones funciones que vienen en el modulo os. Se recomienda ir a la bibliografia que esta al principio del apunte para ver más de estas funciones. 


 - os.userInfo()                    Me devuelve la información de usuario.


 - os.uptime()                      Me devuelve el tiempo en segundos que ha transcurrido desde que he ecendido la pc.   
                           

 - os.platform()                    Me devuelve el sistema operativo en el que estoy ejecutando node.
                        

 - os.totalmem()                    Me devuelve la memoria RAM total de mi PC. Este numero esta en bits.
                        

 - os.freemem()                     Me devuelve la memoria RAM disponible que hay en el momento en el que se ejecuta. Este numero esta en bits.
                
*/


console.log(os.userInfo());

console.log(os.uptime()); 

console.log(os.platform()); 

console.log(os.totalmem());

console.log(os.freemem());
