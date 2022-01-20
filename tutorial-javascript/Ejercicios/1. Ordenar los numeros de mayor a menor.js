

// En este ejercicio el programa debe ordenar 3 que se le ingresen de mayor a menor. Utilizando el condicional if
// Se utlilizaran los conocimientos vistos hasta el apunte:  "4. Condicinales.js"





//Para interactuar con la pagina web en vez de la consola, agregue estas etiquetas al archivo .html:

//        <div id="number"></div>
//        <div id="result"></div>





// Vercion del profesor:


const numbers = document.getElementById('numbers');                 // Investigar que hace esto. Creeeeeo que crea una variable la cual esta asociada con el .html:  <div id="numbers"></div>   De esta forma, la informacion guardada en esta constante se enlaza al .html y es mostrada en la pagina web
const result = document.getElementById('result');

let a = prompt('Introduzca el primer numero: ');                    // Crea una constante la cual guarda informacion ingresa por teclado mediante un cartel qe aparece en la pagina web
let b = prompt('Introduzca el segundo numero: ');
let c = prompt('Introduzca el tercer numero: ');

numbers.textContent = `Los numeros introducidos son: ${a}, ${b} y ${c}`;         // Esta asociado con la primer linea de codigo, hace aparecer en la pagina web el texto ingresado


a = Number (a);         // Hago esto porque los datos que ingresados son strings, incluidos los numeros. De esta menera logro convertir los numeros en verdaderos numeros. De lo contrario, los datos ingresados no se ordenarian correctament; no podria ingresar numeros de dos cifras o más, ya que compararia unicamente la primera cifra. Ej:  81 seria mas grande que 125, porque el primer numero comienza con 8 y el segundo con 1  
b = Number (b);         // Esto fue idea mia y no del profesor. Chi chi chiiiiiiiiii
c = Number (c);



if (a>=b && a>=c){
    if(b>c){
        result.textContent = `El orden es: ${a} -- ${b} -- ${c}`;
    }else{
        result.textContent = `El orden es: ${a} -- ${c} -- ${b}`;
    }

}else if (b>=a && b>=c){
    if(a>c){
        result.textContent = `El orden es: ${b} -- ${a} -- ${c}`;
    }else{
        result.textContent = `El orden es: ${b} -- ${c} -- ${a}`;
    }

}else if (c>=a && c>=b){
    if (a>b){
        result.textContent = `El orden es: ${c} -- ${a} -- ${b}`;
    }else{
        result.textContent = `El orden es: ${c} -- ${b} -- ${a}`;
    }
}






//-------------------------------------------------------------------------------------------------------------------------





// Vercion propia: 
// En esencia es lo missmo. Pero mi error fue no usar el operador de igualacion >=  Devido a esto tube que escribir más lineas de codigo.


/*
const numbers = document.getElementById('numbers');                 // Investigar que hace esto. Creeeeeo que crea una variable la cual esta asociada con el .html:  <div id="numbers"></div>   De esta forma, la informacion guardada en esta constante se enlaza al .html y es mostrada en la pagina web
const result = document.getElementById('result');

let a = prompt('Introduzca el primer numero: ');                    // Crea una constante la cual guarda informacion ingresa por teclado mediante un cartel qe aparece en la pagina web
let b = prompt('Introduzca el segundo numero: ');
let c = prompt('Introduzca el tercer numero: ');

a = Number (a);         // Los datos que ingreso son strings, incluidos los numeros. De esta menera logro convertir los numeros en verdaderos numeros. De lo contrario, los datos ingresados no se ordenarian correctamento
b = Number (b);
c = Number (c);

numbers.textContent = `Los numeros introducidos son: ${a}, ${b} y ${c}`;         // Esta asociado con la primer linea de codigo, hace aparecer en la pagina web el texto ingresado



if (a > b && b > c){
    result.textContent = `El orden es: ${a} -- ${b} -- ${c}`;           // Esta asociado con la segunda linea de codigo, hace aparecer en la pagina web el texto ingresado

}else if(a > c && c > b){
    result.textContent = `El orden es: ${a} -- ${c} -- ${b}`;

}else if(b > a && a > c){
    result.textContent = `El orden es: ${b} -- ${a} -- ${c}`;

}else if(b > c && c > a){
    result.textContent = `El orden es: ${b} -- ${c} -- ${a}`;

}else if(c > a && a > b){
    result.textContent = `El orden es: ${c} -- ${a} -- ${b}`;

}else if(c > b && b > a){
    result.textContent = `El orden es: ${c} -- ${b} -- ${a}`;

}else if(a > b && b == c){
    result.textContent = `El orden es: ${a} -- ${b} -- ${b}`;

}else if(b > a && a == c){
    result.textContent = `El orden es: ${b} -- ${a} -- ${c}`;

}else if(c > a && a == b){
    result.textContent = `El orden es: ${c} -- ${a} -- ${b}`;

}else if(a == b && a > c ){
    result.textContent = `El orden es: ${a} -- ${b} -- ${c}`;

}else if(a == c && c > a ){
    result.textContent = `El orden es: ${c} -- ${a} -- ${b}`;

}else if(b == c && b > a ){
    result.textContent = `El orden es: ${b} -- ${c} -- ${a}`; 

}else if (a == b && a ==c){
    result.textContent = `El orden es: ${a} -- ${b} -- ${c}`;
}

*/



