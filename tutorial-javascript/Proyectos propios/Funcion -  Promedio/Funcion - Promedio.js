
// Esta funcion clacula el promedio de todos los datos que se le ingrese, no importa cuantos sean




// Funcion que calcula el promedio:
// Devuelve el promedio

const promedio = (...numerines) => {
    let sumatoria = numerines.reduce((a,b) => a+b);                // Estoy usando el metodo .reduce() para sumar todos los valores. Metodo ya visto en el apunte "14. Arrays - Metodos.js"
    let promedio = sumatoria / numerines.length;                   // El .length me sirve para medir la cantidad de datos ingresados
    return promedio
} 


//-------------------------------------------------------------------------------------------------------------------------


// Funcion que pide numeros mediante un prompt() y luego guarda esos numeros en un Array.
// El bucle se detiene agregando una "s"
// Devuelve un Array con todos los numeros ingresados

 
const pedir_numeros = () =>{
    let numero = prompt(`Calculadora de promedio: \n - Ingrese el numero deseado y luego presione enter. \n - Si quiere finalizar, ingrese "s" (stop) y le sera entregado el promedio de los numeros ingresados`);
    let lista_numeros = [];
    
    while (numero != "s"){
        lista_numeros.push(Number(numero));
        numero = prompt(`Calculadora de promedio: \n - Ingrese el numero deseado y luego presione enter. \n - Si quiere finalizar, ingrese "s" (stop) y le sera entregado el promedio de los numeros ingresados`);
    }

    return lista_numeros
}




//-------------------------------------------------------------------------------------------------------------------------

// Resultado final:
// Esto se logra fucionando las dos funciones creadas, la que pide los numeros y la que crea un promedio con esos numeros

console.log(promedio(...pedir_numeros()));              // Necesito el spread operator (...) porque estoy ingresando un Array y debido a eso me salta un error 