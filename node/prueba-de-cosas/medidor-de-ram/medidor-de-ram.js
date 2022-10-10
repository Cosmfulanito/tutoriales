const os = require('os');



setInterval(() => {
    let total = os.totalmem() / 1000000000;
    let disponible = os.freemem() / 1000000000;
    let ocupado = total - disponible;
 
    console.log(`Tienes ocupados ${ocupado}GB de ${total}GB`);

}, 1000);

