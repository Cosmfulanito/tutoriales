/*


                                             Arrays - Metodos II                                


- Estos son más metodos para trabajar con los Arrays. No fueron vistos juntos con los demas metodos en el apunte
  "7. Arrays [] (listas).js" porque para ver estos metodos hace falta haber aprendido previamente "funciones"  */



// Array.from()
// Convierte en Array al elemento iterable (iterable viene de i). Un elemento iterable es todo aquel que se puede recorrer, como lo son los Strings, Arrays, etc. Funciona de una manera parecida a split() aunque son dos cosas distintas
let frase = "Hola mundo";
console.log(Array.from(frase));             // Me convirtio la variable "frase" en un array. Y el String que estaba dentro "Hola mundo", ahora esta dividido en 10 letras, ubicadas en su respectivo "i"




// .sort([callback])
// Ordenas los elementos de un Array alfabeticamente (valor unicode). Si le pasamos un callback (funcion dentro de otra funcion), ordenas las letras en funcion del algoritmo que le pasemos (basicamente con el callback le desimos como queremos que ordene los elementos en caso de que no nos interese de que esten en orden alfabetico)
let letras = ["h", "a", "n", "z"];
console.log(letras.sort());

let numeros = [1, 8, 100, 300, 3];
console.log(numeros.sort());                        // Con numeros esto no funciona, ya me que devuelve [1, 100, 3, 300, 8]. Como se apreciar, esto no esta ordenado de menor a mayor, sino que esta ordenado segun el "valor unicode". Para que funcione como queremos, tenemos que agregarle una funcion a modo de "callback"
console.log(numeros.sort((a,b)=>a+b));              // Ahora si muestra los numeros ordenados correctamente [1, 3, 8, 100, 300], gracias al callback. Hay una explicacion del funcionamiento, se puede ver poniendo el cursor sobre .sort(), ahí se mostrara una breve explicacion de la logica de esa funcion. Tambien esto es explicado en este video:    https://www.youtube.com/watch?v=Be4i1N09XzQ&list=PLROIqh_5RZeBAnmi0rqLkyZIAVmT5lZxG&index=24
console.log(numeros.sort((a,b)=>b-a));              // Esto es lo mismo que lo anterior, pero me los ordena de mayor a menor [300, 100, 8, 3, 1]




// .forEach(callback(currentValue, [hindex]))
//  Ejecuta la función indicada una vez por cada elemento del array. Esto es util porque me ahorro de tener que usar un "bucle for" para tener que recorrer los elementos de un Array aplicarles una funcion de forma individual a cada elemento
numeros = [12, 25 , 47, 84, 98];                                // Lo que quiero hacer es mostrar cada elemento del Array con un console.log() de forma individual
numeros.forEach(element => console.log(element));               //  El parametro "element" representa a los elementos del Array. Se usa esa palabra por convencion pero se podria usar cualquier otra palabra tranquilamente 

numeros.forEach((element, index) => console.log(`${element} esta en la posicion ${index}`));        // Este segundo parametro representa el indice "i"




// .some(callback)
// Comprueba si "al menos uno de los elemento del Array" cumple con la condicion, devolviendome un "True" o "False"
let palabras = ["HTML", "CSS", "JavaScript", "PHP"];
console.log(palabras.some(elemet => elemet.length > 4));        // Basicamente le pregunte al programa si "alguno" de los elemetos del Array tiene más de 4 letras. El programa de devolvio un "True" porque el elemeto "JavaScript" cumple con esa condición"




// .every(callback)
// Comprueba si "todos los elementos del Array" cumplen cumplen con la condicion, devolviendome un "True" o "False"
palabras = ["HTML", "CSS", "JavaScript", "PHP"];
console.log(palabras.every(element => element.length > 4));       // Basicamente le pregunte al programa si "todos" los elemetos del Array tienen más de 4 letras. El programa de devolvio un "False" porque solamente el elemento "JavaScript" cumplio con esa condición, el resto de los elementos no la cumplio"




// .map(callback)
// Transforma todos los elemtos de un Array y devuelve un nuevo Array. Basicamente, me permite modificar los valores que estan dentro sin tener que recurrir a la ayuda de un "bucle for" y una funcion en conjunto
numeros = [1, 2, 3, 4, 5];
console.log(numeros.map(element => element*2));                 // Basicamente le ordene al programa que me multiplicara X2 cada elemento del Array y me devolviera el Array nuevo [2, 4, 6, 8, 10]

numeros.map(element => console.log(element*2));                 // Lo mismo que lo anterior, pero en este caso le pido al programa me muestre los numeros multiplicados uno por uno. De forma similar a como funciona el .forEach()

let numero_2 = numeros.map(element => element*2);               // En este caso cree un segundo Array donde toda la informacion modificada va a ser guardada
console.log(numero_2);




// .filter(callback)
// Filtra todos los elementos del Array que cumplan con la condicion y devuelve un nuevo Array. Basicamente como lo dice su nombre, es un filtro
numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log (numeros.filter(element => element > 50));          // Le dije al programa que me filtre todos los numeros mayores a 50. Por ende me va a devolver [60, 70, 80, 90, 100]

numero_2 = numeros.filter(element => element > 50);             // Acabo de crear un un segundo Array que va a almacenar toda la informacion filtrada
console.log(numero_2);




// .reduce(callback)
// Reduce todos los elementos del Array a un unico valor.
numeros = [1, 2, 3, 4, 5];
console.log(numeros.reduce((a,b) => a+b));                      // Basicamente le pedi al programa que me sumara todos los elementos del Array. Me tiene que devolver el numero 15

// Ejemplo real del uso del .reduce() en objetos:
// El objetivo de este programa es determinar la cantidad de usuarios online
const users =  [
    {
        name: "user 1",
        online: true
    },
    {
        name: "user 2",
        online: true
    },
    {
        name: "user 3",
        online: false
    },
    {
        name: "user 4",
        online: true
    },
    {
        name: "user 5",
        online: false
    },
    {
        name: "user 6",
        online: true
    }
]

const users_Online = users.reduce((cont, user) => {             // "user" va a ser el elemento que este recorriendo reduce. Y "cont" va a ser el contador donde vamos a ir sumando a los usuarios Online
    if (user.online) cont++                                     // Osea, si usuarios online es == true. Que el contador sume una unidad
    return cont                                                 // Quiero que la funcion me devuelva este resultado
},0)     // Esta coma "," que esta entre medio de la llave y el parentesis es el "initialValue". Le da un valor inicial al cont (en este caso 0) para que el programa pueda funcionar. De lo contrario, el programa en vez de devolverme un numero me devolveria un "Nan" (Not a number). ¿Por que esto funciona así? No tengo idea, hay que investigar                                               

console.log(`Hay ${users_Online} usuarios conectados`)