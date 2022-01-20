

//                            _____Bucles: "for of" y "for un"_____

// Simplifican el bucle "for" tradicional si tener que darle un numero de repeticiones ni realizar un incremento.
// Son utilizados para recorres los Arrays y los Objetos 






// _____Bucle "for of":_____
// Devuelve el valor del indice de un Array. Osea, me devuelve todos los valores de un Array


let nombres = ["Nikin", "Pedro", "Paula", "Maria", "Juan"];

for (nombrecito of nombres){                    // Tengo que poner una variable nueva como si fuese el "i". No hace falta declararla, el bucle "for of" lo hace solo
    console.log(nombrecito);
}



// Imprime todas las letras del Sting por separado (Esta linea de codigo esta hecho por mi)
// Esta es la logica del tutorial de Python la Geekipedia de Ernesto 
for (letra of "nikin"){             // Cada digito del String corresponde a un valor de i (letra en este caso) 
    console.log(letra);
}





// _____Bucle "for in":_____
// Devuelve la posicion numerica del indice de un Array
// Recordar que su uso habitual es para Objetos (tema que se vera mas adelante), mo para Arrays


let frutas = ["Manzana", "Uva", "Pera", "Mango", "Naranja"];

for (indexin in frutas){                        // Tengo que poner una variable nueva como si fuese el "i". No hace falta declararla, el bucle "for in" lo hace solo
    console.log(indexin);
}



// Hacer funcionar un bucle "for in" como si fuera un "for of" 
let frutas = ["Manzana", "Uva", "Pera", "Mango", "Naranja"];

for (indexin in frutas){                        
    console.log(frutas[indexin]);               // Es la misma logica que cuando quiero acceder a un unico dato de un Array
}



//-------------------------------------------------------------------------------------------------------------------------




//                                      _____Sentencias "break" y "continue"_____

// _____break_____
// Como ya se vio antes, esta sentencia lo que hace es "romper" el bucle. Osea, una vez que el programa lee esta palabra, se da fin a la repeticion de bucles aunque falten ejecutarse algunos

// En este caso, haremos que el programa escriba todos los nombres del Array hasta que llegue al nombre "Paula". Una vez ocurra esto el programa dejara de escribir los nombres faltantes
// Como no llegara a leer la linea de console.log() tampoco se escribira el nombre "Paula" 

let nombres_2 = ["Nikin", "Pedro", "Paula", "Maria", "Juan"];


// Ejemplo en un bucle "for":
for (let i=0; i<nombres_2.length; i++){
    if(nombres_2[i]==="Paula"){
        break
    }
    console.log(nombres_2[i])
}

// Ejemplo en un bucle "for of":
for (nombrecito of nombres_2){                    
    if(nombrecito==="Paula"){               // En este caso tengo usar la variable "nombresito" en vez de "nombres_2"
        break
    }
    console.log(nombrecito);
}







// _____CONTINUE_____
// Lo que hace esta sentencia es volver al inicio del bucle, pasando de largo todas las lineas de codigo que hay abajo de esta palabra

// En esta caso, haremos que el programa escriba todos los nombres del Array. Pero una vez llegue al nombre "Paula", no leera lo que esta abajo a causa del "continue" (console.log()) y volvera al inicio. Esto hara que se escriban todos los nombres exepto "Paula" 

let nombres_3 = ["Nikin", "Pedro", "Paula", "Maria", "Juan"];


// Ejemplo en un bucle "for":
for (let i=0; i<nombres_3.length; i++){
    if(nombres_3[i]==="Paula"){
        continue
    }
    console.log(nombres_3[i])
}


// Ejemplo en un bucle "for in":
//(Se va a saltear una posicion de la iteracion)
for(let index in nombres_3){
    if(nombres_3[index]==="Paula"){
        continue
    }
    console.log(index);
}