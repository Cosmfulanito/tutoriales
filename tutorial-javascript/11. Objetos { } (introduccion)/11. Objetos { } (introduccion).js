

/*                                                       ___Objetos {}___

_____Introducción:_____ 
 Solamente vamos a ver una pequeña introcción a objetos {} con los conceptos más basicos, debido a que este tema se tiene que ver en conjunto con el tema 
 de "funciones", vamos a ver una una introduccuión de ambos. Una vez hechas esas dos introducciones, se veran ambos temas en profundidad. 




- Son estructuras de datos que representan propiedades, valores y acciones que puede realizar un objeto.

- Todos los objetos tienen propiedades o atributos y comportamientos o acciones represntados por pares de     clave (key): valor (value)

- Básicamente es un array, pero en lugar de tener un numero de iteracion "i", tiene cuna palabra creada por nosotros donde iria el valor deseado. Dicha palabra es 
  el "key". El cual reemplaza al nuemro de iteracion

*/




//-------------------------------------------------------------------------------------------------------------------------





// _____Crear un objeto:_____

// Ej1:           
const computer = {
    screenSize  :   17,                       // Recordar poner una coma al final siempre y cuando abajo haya un par (key) : (value)
    model       :   `MacBook pro` 
}

// Ej2: 
const table = {
    material    :   `wood`,
    width       :   160,
    height      :   110
}

/* Los objetos tambien contienen "comportamientos" los cuales se representran a traves de "funciones". Como funciones es un tema que vamos a ver más
adelante, no puse ejemplos de eso ahora.   */      





//-------------------------------------------------------------------------------------------------------------------------

// Objeto de demostracion:
const persona = {
  nombre  :   "Juan",
  edad    :   36,
  hijos   :   ["Laura", "Diego", "Pepe", "Rosa", "Tomas"] 
}

console.log(persona);

   



//_____Acceder a un objeto:_____
// Para acceder a las propiedades y acciones del objeto de forma separada se utiliza la nomenclatura del punto

// Metodo 1:                            // Este es el metodo más intuitivo
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.hijos[0]);
console.log(persona.hijos[1]);
console.log(persona.hijos[2]);
console.log(persona.hijos[3]);
console.log(persona.hijos[4]);

// Metodo 2:  
console.log(persona["nombre"]);         // En los objetos, "key" funcionaria como "i" de un bucle for generico. Pero el "numero de iteracion" en vez de representarse en numeros del 0 en adelante, se representan con los atributos/keys de los objetos. Osea:   i --> 0, 1, 2 ...    ;     key --> nombre, edad, hijos       
console.log(persona["edad"]);
console.log(persona["hijos"]);




// _____Bucle para acceder a todas las keys de un objeto:_____

for (const key in persona){             // Misma logica que en los bucles "for in"
  console.log(key);                     // En los objetos, "key" funcionaria como "i" de un bucle for generico. Pero el "numero de iteracion" en vez de representarse en numeros del 0 en adelante, se representan con los atributos/keys de los objetos. Osea:   i --> 0, 1, 2 ...    ;     key --> nombre, edad, hijos     
}                                 




// _____Bucle para acceder a todos los valores:_____

for (const key in persona){
  console.log(persona[key]);            // Sigue la misma logica de arriba (leerla con atencion), en vez de poner "i" pongo "key"
}                                     





// _____Bucles para recorrer espcificamente el Array de un Objeto:_____
// Para ello utilizamos los bucles "for of" y "for in" de la misma manera que se vienron en apuntes anteriores 

// "for of" para acceder a todos los valores del Arrey que esta dentro del Objeto 
for (const hijo of persona.hijos){
  console.log(hijo);
}


// "for in" para acceder a el numero de iteración "i" del Array que esta dentro del Objeto
for (const hijo in persona.hijos){
  console.log(hijo);
}


// Acceder especificamente a un valor de un Array que esta dentro de un Objeto:
console.log(persona.hijos[2]);          // Me deveria mostrar la palabra "Pepe". Como se puede ver, se accede de la misma manera que se accederia a un valor de un Array generico. Con la diferencia de que hay que respetar la "nomenclatura del punto" propio de un objeto.







//-------------------------------------------------------------------------------------------------------------------------





// Como ejercicio, voy a imprimir todos los valores del objeto en una sola frase:

console.log(`Hola! Me llamo ${persona.nombre}. Tengo ${persona.edad} años. Mis hijos se llaman ${persona.hijos.join(", ")}`);
