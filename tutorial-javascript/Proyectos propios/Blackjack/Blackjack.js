
// p=picas; c=corazon; r=rombo; t=trebol 

let mazo = ["1p", "2p", "3p", "4p", "5p", "6p", "7p", "8p", "9p", "10p", "10p", "10p", "10p", "1c", "2c", "3c", "4c", "5c", "6c", "7c", "8c", "9c", "10c ", "10c", "10c", "10c", "1r", "2r", "3r", "4r", "5r", "6r", "7r", "8r", "9r", "10r", "10r", "10r", "10r", "1t", "2t", "3t", "4t", "5t", "6t", "7t", "8t", "9t", "10t", "10t", "10t", "10t"];

let mano = [];                  // Guarda mis cartas
let total = 0;                  // Suma total de mis cartas

let pedir_carta = "";           // Es una constante que cree para que se pidan cartas de forma automatica y que solo se detanga cuando aperto la tecla "s" en el prompt()

let mano_crupier = [];          // Guarda las cartas del crupier
let total_crupier = 0;          // Suma total de las cartas del crupier




// Repartidor de cartas 3000!!!
// Me reparte una carta del mazo
mano.push(mazo.splice(Math.round(Math.random()*((mazo.length)-1)),1));                 // Quita una carta ramdon del Array "mazo" y la agrega a la variable "mano".      //Puse mazo.length en vez de 52 porque a medida que voy quitando cartas, el numero total de cartas restantes va a disminuir. Osea, si quito la ultima carta del Array (i=51) y me de casualidad me vuelve salir i=51, me va a tirar "dato nulo" porque no hay nada ahi. Con esto soluciono ese problema, ya que nunca me va a tirar un numero más grande que el Array actual.   // El -1 esporque el Array comienza a contar a partir del 0  // El 1 es algo propio del .splice(), significa que solo saca una carta    
total += parseInt ((mano[(mano.length)-1]));                                           // Selecciona la ultima carta del Array "mano". Luego con el metodo parseInt() le quita las letras dejando solamente el numero que a su vez lo convierte en un tipo de dato numerico. Por ultimo suma ese numero al total

// Le reparte al crupier un acarta del mazo
mano_crupier.push(mazo.splice(Math.round(Math.random()*((mazo.length)-1)),1));
total_crupier += parseInt ((mano_crupier[(mano_crupier.length)-1]));

// Repito el codigo para que me reparata la segunda carta que me corresponde al inicio de la partida
mano.push(mazo.splice(Math.round(Math.random()*((mazo.length)-1)),1));
total += parseInt ((mano[(mano.length)-1]));

// Lo mismo de arriba pero con el crupier
mano_crupier.push(mazo.splice(Math.round(Math.random()*((mazo.length)-1)),1));
total_crupier += parseInt ((mano_crupier[(mano_crupier.length)-1]));










// Mi turno de jugar:
while (total<=21){
    console.log (`\nMazo: ${mazo} \n \nMano: ${mano} \n \nTotal: ${total}`);
    console.log("------------------------------")
    pedir_carta = prompt (`Presione el boton "Aceptar" para pedir una carta. \nPresione "s" para detener (Stop)`);

    if (pedir_carta == "s"){
        break
    }else{
        mano.push(mazo.splice(Math.round(Math.random()*((mazo.length)-1)),1));
        total += parseInt ((mano[(mano.length)-1]));
    }
}


if (total > 21){
    console.log (`\nMazo: ${mazo} \n \nMano: ${mano} \n \nTotal: ${total}`);
    console.log(`Su numero es mayor a 21. :c `)
    console.log("------------------------------")
    
}else{
    console.log (`\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`);         // El resultado ya me lo mostro más arriba, esto es solo para separar mis cartas a las del crupier
    console.log (`\nMazo: ${mazo} \n \nMano crupier: ${mano_crupier} \n \nTotal crupier: ${total_crupier} `);

    








    // Turno del crupier:

    //console.log (`\nMazo: ${mazo} \n \nMano crupier: ${mano_crupier} \n \nTotal Crupier: ${total_crupier - parseInt ((mano_crupier[(mano_crupier.length)-1]))}`);          // A diferencia de mi mano y mi total, a los del crupier le tengo que poner todo ese choclo para que no se vea la ultima carta (aunque sus valores si existen) 
    
    while (total_crupier <= 16){            // El por reglas del casino, el crupier solamente levanta cartas cuando su total es menor a 17 

        mano_crupier.push(mazo.splice(Math.round(Math.random()*((mazo.length)-1)),1));
        total_crupier += parseInt ((mano_crupier[(mano_crupier.length)-1]));
        console.log (`\nMazo: ${mazo} \n \nMano crupier: ${mano_crupier} \n \nTotal crupier: ${total_crupier} `);
    }






    // Ganador!!!

    if (total == total_crupier){
        console.log(`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx \n___Empate___  \n \nMano: ${mano} \nTotal: ${total} \n \nMano crupier: ${mano_crupier} \nTotal crupier: ${total_crupier} \nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`);
 
    
    }else if (total > total_crupier){
        console.log(`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx \n___Ganaste!!!___ \n \nMano: ${mano} \nTotal: ${total} \n \nMano crupier: ${mano_crupier} \nTotal crupier: ${total_crupier} \nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`);

    }else{

        console.log(`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx \n___Gano el crupier___ \n \nMano: ${mano} \nTotal: ${total} \n \nMano crupier: ${mano_crupier} \nTotal crupier: ${total_crupier} \nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`);
    }
}










