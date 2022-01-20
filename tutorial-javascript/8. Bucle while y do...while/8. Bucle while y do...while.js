

//                                  _____Bucle while_____

/* Es bucle indeterminado devido a que no sabemos cuantas veces exactas se va a repetir dicho bucle. Solo se detendra cuando
   cuando la condicion sea false */

//      while (condición){
//          Codigo a ejecutar;              
//      }


// Como ejemplo, vamos a crear una contraceña:
// (Por algun motivo no funciona con la extencion "Live server")

let contracena = "";

while (contracena != "hola"){
    contracena = prompt("Introduzca su contraceña")             // Hace aparecer un cartel que me permite ingresar datos. Funciona de forma similar al imput() de Python
}
console.log('Fin del bucle "while"')








//                                  _____Bucle do while_____ 

// Funciona exactamente igual que el bucle while, con la diferencia de que "ejecuta el bucle por lo menos UNA vez"    

//      do{
//          Codigo a ejecutar 
//      }while (condición)
//


let contracena_2 = "";

do{
    contracena_2 = prompt("Introduzca su crontraceña")
}while (contracena_2 != "hola")

console.log('Fin del bucle "do...while"')
