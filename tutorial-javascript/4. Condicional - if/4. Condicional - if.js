


//_____Condicioales simples:_____
// Es cuando hay una sola condicion (if)

let numero_1 = 5;

if (numero_1 > 0){
    console.log(`El numero ${numero_1} es mayor que 0`)
}




//_____Condicional compuesto:_____
// Es cuando hay dos condiciones (if, else)

let numero_2 = -5;

if (numero_2 > 0){
    console.log(`El numero ${numero_2} es mayor que 0`);

}else{
    console.log(`El numero ${numero_2} es menor que 0`);
}




//_____Condicional compuesto_____
// Es cuando hay multiples condicionales (if, else if, else )

let numero_3 = 0;

if (numero_3 > 0){
    console.log(`El numero ${numero_3} es mayor que 0`);

}else if (numero_3 < 0){
    console.log(`El numero ${numero_3} es menor que 0`);

}else{
    console.log(`El numero ${numero_3} es igual a 0`);
}



//_____if dentro de otro if:_____

let numero_x = 7;
let numero_y = 0;

if (numero_x > 0){
    if (numero_y > 0){
        console.log("Ambos numeros son mayores que 0");
    }else if (numero_y < 0){
        console.log(`El primer numero "${numero_x}" es mayor que 0 y el segundo numero "${numero_y}" es menor que 0`);
    }else{
        console.log(`El primer numero "${numero_x}" es mayor que 0 y el segundo numero es igual a 0`);
    }

}else if (numero_x < 0){
    if (numero_y > 0){
        console.log(`El primer numero "${numero_x}" es menor que cero y el segundo numero ${numero_y} es mayor que 0`);
    }else if (numero_y < 0){
        console.log(`Ambos numeros son menores que 0`);
    }else{
        console.log(`El primer numero "${numero_x}" es menor que 0 y el segundo es igual a 0`);
    }

}else{
    if (numero_y > 0){
        console.log(`El primer numero es igual a 0 y el segundo numero "${numero_y}" es mayor que 0`);
    }else if (numero_y < 0){
        console.log(`El primer numero es igual a cero y el segundo numero "${numero_y}" es menor que 0`);
    }else{
        console.log("Ambos numeros son iguales a 0");
    }
}


//-------------------------------------------------------------------------------------------------------------------------



//_____Operadores logicos:_____

//  &&      Significa: "and"                Me permite agregar dos o más condiciones, donde "todas" se tienen que dar para ingresar al if.
//  ||      Significa: "or"                 Me permite agregar dos o más condiciones, donde "al menos una" se tiene que dar para ingresar al if 
//  !       Significa: "not"                Funciona como el "not" de python        if (!(condicion)){}


let numero_a = 5;
let numero_b = 7;
if (numero_a > 0 && numero_b > 0){                                                                  // Es español sería: Si el numero_a es mayor que 0 "y" el numero_b es mayor que 0, hacer lo siguiente...
    console.log(`Los numeros ${numero_a} y ${numero_b} son mayores que 0`);
}



let numero_c = -3;
let numero_d = 8;
if (numero_c > 0 || numero_d > 0){                                                                  // Es español sería: Si el numero_c es mayor que 0 "o" el numero_d es mayor que 0, hacer lo siguiente...
    console.log(`Al menos alguno de los dos numeros ${numero_c} o ${numero_d} es mayor que 0`);
}



let numero_e = -5;                                                                  
if (!(numero_e > 0)){                                                                               // Es español sería: Si el numero_e "no es" mayor que 0, hacer lo siguiente...
    console.log(`El numero ${numero_e} no es mayor que 0`);
} 



//-------------------------------------------------------------------------------------------------------------------------



//_____Usar if con pripiedades y metodos:___

// Programa para verificar si la palabra comienza con "H":
let palabra_1 = "Hola";

if (palabra_1.startsWith("H")){                                                     // Es español sería: Sí la palabra comienza con "H", hacer lo siguiente...
    console.log(`La palabra: "${palabra_1}" comienza con "H"`);

}else{
    console.log(`La palabra "${palabra_1}" no comienza con "H"`);
}



// Programa contador de letras:
let palabra_2 = "Mundo";

if (palabra_2.length > 4){                                                          // Es español sería: Si la palabra mide más de 4 caracteres, hacer lo siguiente...
    console.log(`La palabra "${palabra_2}" tiene más de 4 letras.`);

}else if(palabra_2.length < 4){
    console.log(`La palabra "${palabra_2}" tiene menos de 4 letras.`);

}else {
    console.log(`La palabra "${palabra_2}" tiene exactamente 4 letras.`);
}



// Programa que trabaja con booleanos:
// Hay dos formas de trabajar con los boobleanos en un if. Ambas son correctas y funcionan, pero el segundo metodo es el mas usado/standarizado por los programadores

let respuesta = true;

if (respuesta == true) console.log('Respuesta tiene el valor "true"')           // Metodo 1
if (respuesta == false) console.log('Respuesta tiene el valor "false"')

if (respuesta) console.log('Respuesta tiene el valor "true"')                   // Metodo 2: El metodo standar 
if (!respuesta) console.log('Respuesta tiene el valor "false"')