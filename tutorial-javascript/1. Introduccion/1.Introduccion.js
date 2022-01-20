
//___Tipos de variables:___


//Numero:
let numero = 5;
console.log(numero);


//String:
let palabra = "Hola Mundo!";
console.log(palabra);


//Boolean:
let respuesta = true;
console.log(respuesta);


//Constant:
const PI = 3.14;                          //Por convencion las constantes van en "mayusculas"
console.log(PI);



//-------------------------------------------------------------------------------------------------------------------------


//___Tipos de operadores___


// Matematicos:
let a = 5;
let b = 2;
let usuario = "Nikin"

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b); 
console.log(a % b);
console.log(a ** b);

console.log("Hola " + usuario)



// Incremento/decremento:
let c = 7;
console.log(c);             // Va a imprimir el numero 7 
console.log(c++);           // Me suma una unidad a la variable, pero no la voy a ver cambiada hasta que la llame por segunda vez. Esto se debe a que primero me muestra la variable y luego me suma una unidad. Por ese motivo voy a ver un 7 sin cambio alguno aunque si me lo cambio a 8 
console.log(c);             // Debido a lo anterior, de ahora en adelante cada vez que llame a esta variable me va a mostrar un 8 

let d = 15;
console.log(d);             // Me va a mostrar un 15
console.log(++d);           // Aqui ocurre en el orden inverso de lo anterior. Primero me suma una unidad a la variable y luego me la muestra. Por eso voy a ver un 16 en vez de un 15
console.log(d);             // Debido a que la variable vale 16, cada vez que la llame me va a mostar 16.

let e = 7;
console.log(e);             
console.log(e--);           // Es lo mismo que ya se vio anteriormente pero en este caso resto en vez de sumar
console.log(e);

let f = 15;
console.log(f);              
console.log(--f);           // / Es lo mismo que ya se vio anteriormente pero en este caso resto en vez de sumar
console.log(f);              



// Asignacion:
let g = 10; 
console.log(g);

g += 3
console.log(g);

g -= 3;
console.log(g);

g *= 3;
console.log(g);

g /= 3;
console.log(g);

g %= 3;
console.log(g);







