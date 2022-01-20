
let texto = "Hola Mundin!";                         //String de referencia.
console.log(texto);


// Link con todas las propiedades y metodos de JavaScript 
// https://www.w3schools.com/jsref/jsref_obj_string.asp



//-------------------------------------------------------------------------------------------------------------------------




//_____Propiedades:_____

console.log(texto.length);                          // Devuelve la longitud del string. En este caso es 12 porque "Hola mundin!" tiene 12 caracteres




//-------------------------------------------------------------------------------------------------------------------------




//_____Metodos:_____

console.log(texto.toUpperCase());                   // Me devuelve la cadena en mayúsculas

console.log(texto.toLowerCase());                   // Me devuelve la cadena en minusculas

console.log(texto.indexOf("mundin"));               // Me devuelve la posicion de la palabra que busco. Si no encuentro nada me devuelve un -1

console.log(texto.replace("mundin","a todos"));     // Reemplaza una palabra del string por otra

console.log(texto.substring(3));                    // Me estrae los caracteres desde la posicion marcada (en numero) hasta el final que le marque. Si agrego un solo valor, me va a extraer los caracteres desde esa posicion hasta el final del texto. Si agrego dos valores, me va a estraer solamente la parte de texto que le marque como principio y fin.
console.log(texto.substring(3,7));

console.log(texto.slice(3));                        // Funciona igual que el anterior pero con la diferencia de que admite valores negativos. Ej: si pongo un -3, va a empezar a extraer desde los 3 ultimos caracteres. Tambien puedo agregar dos valores como en el metodo anterior
console.log(texto.slice(-3));
console.log(texto.slice(0,-4));

let texto_2 = "        Hola mundooooo         ";
console.log(texto_2)
console.log(texto_2.trim());                        // Elimina los espacios al principio y al final de string

console.log(texto.startsWith("H"));                 // Me dice si el texto comienza con la palabra que le ingrese, devolviendome un "true" o un "false" dependiendo si dicha afirmacion es positiva o negativa respectivamente.
console.log(texto.startsWith("h"));
console.log(texto.startsWith("M",5));               // Si ingreso un segundo parametro opcional (valor numerico), le estoy diciendo que la palabra que busco esta ubicada en esa posicion

console.log(texto.endsWith("in!"));                 // Me dice si el texto termina con la palabra que le ingrese, devolviendome un "true" o un "false" dependiendo si dicha afirmacion es positiva o negativa respectivamente.
console.log(texto.endsWith("to"));
console.log(texto.endsWith("a", 4));                // A diferencia del metodo anterior, este segundo parametro opcional NO ES DE INICIO, ES DE "LONGITUD". Eso quiere decir que va a buscar dicha palabra desde el principio hasta la pocicion marcada (hasta la cuarta pocicion este caso)

console.log(texto.includes("Mundin!"));             // Me dice si la palabra esta o no en el texto. Devolviendome un "true" o un "false" respectivamente  
console.log(texto.includes("mundin!"));
console.log(texto.includes("a",5));                 // Tambien tiene un parametro adicional que me dice a partir de donde buscar

console.log(texto.repeat(3));                       // Repite el string la cantidad de veces que le indiquemos




//-------------------------------------------------------------------------------------------------------------------------



//_____Template strings:_____

let nombre = "Mateo";
let apellido = "Perez";
let edad = 20;

console.log("Hola " + nombre+ " " + apellido + ". Tienes " + edad + " años.");

// Hacer esto es una paja. Por suerte hay un metodo mas facil mediante los "Template strings":
console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años.`);                                    // Recordar que hay que utilizar las comillas gruesas  ``  y que las variables van dentro de esto ${}
console.log(`Hola ${nombre} ${apellido}. El año que viene tendrás ${edad+1} años.`);




