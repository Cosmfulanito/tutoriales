
//                                                              _____Piedra, papel o tijeras!_____


// El mejor de 2 de 3 gana


prompt('--Juego de piedra, papel o tijera-- \n  El mejor de 2 de 3 gana');
const mano = ["piedra", "papel", "tijera"];         // Esto solamente sera de utilidad para programnar al bot. Para el jugador elija una opción puse un promp() más abajo 

let puntos_jugador = 0; 
let puntos_bot = 0;


for (let i=0; i<3; i++){

    // El Juego termina cuando uno de los dos gana 2 partidad de 3
    if(puntos_jugador == 2 || puntos_bot == 2){
        break
    }

    // Jugada del jugador y la del bot
    let opcion_jugador = prompt('Elija la opción deseada:\n    - Piedra\n    - Papel\n    - Tijera');
    let opcion_bot = mano[Math.trunc(Math.random()*3)];     // Esto me genera un numero ramon entre el 0 y el 2. AL ir dentro de [] funciona como un iterador. De esta manera selecciona una de las tres opciones de la lista "opciones_bot"
                                                            // Math.trunc quita la coma dejando el numero entero. Si pruebo el metodo con Math.round * 2 en progragama estadistico me sale un 50% veces el papel. Con Math.trunc * 3 me sale más omogenio todo

    // Si hay empate
    if(opcion_jugador == opcion_bot){
        console.log(`Jugador: ${opcion_jugador} --- Bot: ${opcion_bot}`);
        console.log(`Empate`);
        console.log(`Puntaje jugador: ${puntos_jugador} --- Puntos bot: ${puntos_bot}`);
        console.log(`--------------------`)
        i--                                                                                           // Este i-- le descuenta una vuelta al bucle for. Esto ocurre porque cuando hay un empate hay que tirar de nuevo y yo solamente tengo  vueltas de bucle 

    // Si gana el jugador
    }else if(opcion_jugador == "piedra" && opcion_bot == "tijera" ){
        console.log(`Jugador: ${opcion_jugador} --- Bot: ${opcion_bot}`);
        console.log(`Gana Jugador!!!`);
        puntos_jugador++
        console.log(`Puntaje jugador: ${puntos_jugador} --- Puntos bot: ${puntos_bot}`);
        console.log(`----------`)
        
    }else if(opcion_jugador == "papel" && opcion_bot == "piedra" ){
        console.log(`Jugador: ${opcion_jugador} --- Bot: ${opcion_bot}`);
        console.log(`Gana Jugador!!!`);
        puntos_jugador++
        console.log(`Puntaje jugador: ${puntos_jugador} --- Puntos bot: ${puntos_bot}`);
        console.log(`----------`)
        
    }else if(opcion_jugador == "tijera" && opcion_bot == "papel" ){
        console.log(`Jugador: ${opcion_jugador} --- Bot: ${opcion_bot}`);
        console.log(`Gana Jugador!!!`);
        puntos_jugador++
        console.log(`Puntaje jugador: ${puntos_jugador} --- Puntos bot: ${puntos_bot}`);
        console.log(`----------`)
        
    // Si gana el bot    
    }else{
        console.log(`Jugador: ${opcion_jugador} --- Bot: ${opcion_bot}`);
        console.log(`Gana Bot!!!`);
        puntos_bot++
        console.log(`Puntaje jugador: ${puntos_jugador} --- Puntos bot: ${puntos_bot}`);
        console.log(`----------`)
    }   
}

// ¡¡¡Y el ganador es: !!!! 
if (puntos_jugador > puntos_bot){
    console.log("////////////////");
    console.log("//Gana Jugador//");
    console.log("////////////////");

}else{
    console.log("////////////");
    console.log("//Gana Bot//");
    console.log("////////////");
}
