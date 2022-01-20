


//                                          _____Bucle for:_____

// Es un "blucle determinado", ya que hay que especificar cuantas repeticiones dara durante su ejecución.

// Su sintanxis consta de 3 partes:
//      Inciación de variable           Ej:  let i=0;               Comienza a contar a partir de 0. Esto es convencion, pero puede ser cualquier otro numero
//      Número de vueltas               Ej:  i<=10;                 No va dejar de dar repeticiones hasta que i mientras sea menor o igual que 10. En este caso habra 11 repeticiones porque cuenta al 0 y al 10. A no ser que "let i=1;"" o "i<10;""
//      Incremento o decremento         i++ / ++i / i-- / --i       Por cada repetición de bucle, a i se le sumara o restara una unidad. Tambien puedo hacer i+2 y sumara 2 unidades (haciendo la mitad de las repeticiones)


//      for (let i=0; i<=10; i++){
//          Código a ejecutar
//      }



// Este programa de demostracion me mostrara la cantidad de veces que se repite un bucle y mostrando a su vez como aumenta/decrementa i

// Bucle en aumento:
for (let i=0; i<=10; i++){
    console.log("A.",i);
}


// Bucle en decremento:
for (let i=10; i>=0; i--){
    console.log("B.",i);
}


// Usando un if:
for (let i=0; i<=10; i++){
    if(i==5){
        console.log("C.",i);
    }
}


for (let i=0; i<=10; i++){
    if(i!==5){
        console.log("D.",i);
    }
}


// Repetir un bucle segun la cantidad de datos de un Array y mostrarlos:

let numeros = ["Manzana", "Pera", "Uva", "Limon", "Naranja", "Mango"];

for(i=0; i<numeros.length; i++){
    console.log(`i vele ${i} y el valor de su posicion en el Array es ${numeros[i]}`);
}



//-------------------------------------------------------------------------------------------------------------------------

// Programa hecho por mí:
// Saluda las veces que yo le indique

let nikines = Number(prompt ('¿Cuantos "Hola Nikin" quieres?'));

for(let i=1; i<=nikines; i++){
    console.log(`Hola Nikin N°${i}`);
}
