/*

                                                        _____Events:_____


 - Los eventos de node estan relacionado con los datos, esto quiere decir que se activan cuando haga una coneccion, cuando te 
   conectes a un determinado lugar, cuando recibas un dato, cuando respondas algo, etc.

 - Para esto node me da un modulo para administrar mis propios evento llamado simplemente "events"


 - Funciones más usadas:
    
    - emit              Sirve para "emitir" un evento. Es decir, que se esta ejecutando un determinado evento, como puede ser enviar 
                        un dato. Es el equivalente a cuando realizavamos un evento onClick cualquier otro evento. 

    - on                Sirve para escuchar un determinado evento. Osea, cuando ocurra una determinada cosa, escucha ese evento

*/

const EventEmitter = require('events');                         // Por norma,la constante que llama al module 'events' le pondremos el nombre de "EventEmitter" (emisor de eventos). Esto es totalmente arbitrario y puede llevar cualquier otro nombre

const customEmitter = new EventEmitter();                       // Este es un nuevo manejador de eventos. Cuando llame a esta función, automaticamente el visual studio me va a autocompletar con funciones para eventos de node



customEmitter.on('respuesta', (data) => {                       // Esta función espera dos parametros, el primero es el nombre del evento y el segundo "data" es la informacion que enviaremos en forma de funcion, recordar que la "data" se la daremos más adelante con la función "on". "respuesta" es el nombre que le puse a este evento en particular. Puede llamarse de cualquier manera 
    console.log(data);
})

customEmitter.emit('respuesta', 'Holiwis :3');                  // Aquí estamos emitiendo un evento. LLeva dentro dos parametros. El primero es el nombre del evento el cual queremos emitir. Y el segundo parametro es la "data" de dicho evento 
customEmitter.emit('respuesta', 'Nico');
customEmitter.emit('respuesta', 123);
customEmitter.emit('respuesta', ['manzana', 'pera', 'sandia']);
customEmitter.emit('respuesta', {name: 'Nikin'});





// _____Colocar mas de una "data" en un evento_____

customEmitter.on('nuevoEvento', (data1, data2) => {                         // Este nuevo evento esta eperando dos datas diferentes que se las enviaremos con la funcion "on"     
    console.log(data1);
    console.log(data2);
})

customEmitter.emit('nuevoEvento', 'Gatito :3', 124);                        // El primer parametro es el nombre del evento el cual queremos emitir. El segundo parametro corresponde a la primera data que enviaremos (Gatito :3 -> data1) y el tercer parametro corresponde a la segunda data que enciaremos (123 -> data2)
