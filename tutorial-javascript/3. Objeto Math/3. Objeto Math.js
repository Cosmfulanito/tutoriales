


//_____Objeto Math:_____

// Math es un objeto que se utiliza para operaciones matemáticas más complejas 
// Es un objeto "estatico". Eso quiere decir que tendremos que poner su nombre para utilizarlo
// Al ser un objeto tambien utiliza la nomenclatura del punto
// Es equivalente a la libreria Math de Python


// Propiedades:

console.log(Math.PI);                       // Me devuelve el numero PI. Osea: 3.14...
console.log(2*Math.PI);

console.log(Math.E);                        // Me devuelve el numero E. Osea: 2.71...
console.log(2*Math.E);



// Metodos:

console.log(Math.abs(5));                   // Me devuelve el valor absoluto de un numero. Osea, lo que me enseñaron en la escuela lo era un Modulo
console.log(Math.abs(-5));

console.log(Math.ceil(7.50));               // Redondea el numero hacia arriba

console.log(Math.floor(7.50));              // Redondea el numero hacia abajo

console.log(Math.round(7.75));              // Redondea hacia el numero entero más cercano
console.log(Math.round(7.35));

console.log(Math.pow(5, 3));                // Es una "potencia". Me eleva el numero del primer parametro, a la potencia del numero del segundo parametro. En este cazo es 5 elevado a la 3

console.log(Math.sqrt(25));                 // Me devuelve la raíz cuadrada del numero ingresado

console.log(Math.random());                 // Genera un numero random entre 0 y 1. 
console.log(Math.random()*10);              // Si queremos que nos de un numero entre 0 y otro numero. Solamente tenemos que multiplicar Math.random() por ese numero
console.log(Math.random()*100);
console.log(Math.random()*(50-30)+30);      // Me va a devolver los numeros ramdon entre 30 y 50. Para que me devuelva los numeros random entre un margen minimo y maximo de numeros, tengo que multiplicar este metodos de la siguiente manera: Math.random()*(numero_max - numero_min)+ numero_min)

console.log(Math.sign(10));                 // Me dice si el signo del numero ingresado es positivo o negativo, devolviendome un +1 o un -1 respectivamente. En caso de que dicho numero no tenga signo (por ser el numero 0) me devolvera un 0
console.log(Math.sign(-10));
console.log(Math.sign(0));





