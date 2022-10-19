/*

                                _____ Timers: _____


    Como sabemos, los timers son funciones ya vistas en el curso de javaScript

    - setInterval       Ejecuta un codigo de forrma periodica cada sierto tiempo 

    - setTimeout        Ejecuta un codigo luego de que pasa un determinado tiempo


*/

setInterval(() => {
    console.log('Este setInterval se ejecuta cada 2 segundos!');
}, 2000);


setTimeout(() => {
    console.log('Este setrTimeout se ejecutara cuando pasen 3 segundos y solamente una vez');
}, 3000);