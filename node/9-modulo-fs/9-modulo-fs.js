/*

                                                _____Modulo FS: File Sistem_____


 - El modulo "fs" nos permite trabajar archivos, viendo que tienen en su interior, creandolos, editantandolos, etc.

*/





// _____ Llamar al modulo "fs": _____
//  Lo llamamos a acualquier otro modulo de node 
const fs = require('fs')





/*
_____Algunos metodos de "fs":_____

 - fs.readFileSync()                    - Nos permite leer el contenido de un archivo. Admite 2 parametros 
                                            - 1° parametro: Es la ruta donde esta ubicado el archivo
                                            - 2° parametro: Es el formato de lectura de dicho archivo. De no especificarlo, 
                                              la informacion me la va a devolver como si fuera un "buffer" (es el dato crudo como si 
                                              fuera en exadecimal).
                                              En caso de leer archivos .txt debemos poner como segundo parametro "utf-8"  
                                              En caso de no poner este segundo parametro, tambien podemos leerlo usando la 
                                              propiedad .toString(). Esto es una alternativa


 
 - fs.writeFileSync()                   - Nos permite crear archivos reescribir archivos. En caso de crear un archivo existente, 
                                          basicamente lo estariamos editando/reemplazando. Admite 3 parametros
                                            - 1° Parametro: Es la ruta completa, incluyendo el nombre del archivo que estamos 
                                              creando y su formato.
                                            - 2° Parametro: Es el contenido del archivo.
                                            - 3° Parametro: Es un objeto con el cual puedo darle opciones. 
                                                - {flag: a}     "a" significa "append" (añadir). En caso de reescribir un archivo, su 
                                                                contenido no es borrado por el actual. Sino que el contenido nuevo se le suma al viejo

*/


// Leer archivos:
const primeroCrudo = fs.readFileSync('./archivos/primero.txt');                     // Me devuelve el contenido de este archivo .txt, pero al no tener el segundo parametro, este contenido se me mostrara como si fuera en formato buffer (parecido al exadecimal)
console.log(primeroCrudo);
console.log(primeroCrudo.toString());                                               // Al usar el metodo toString, convierto el buffer en un string y soluciono ese problema


const primero = fs.readFileSync('./archivos/primero.txt', 'utf-8');                 // Al tener tener el segundo parametro 'uft-8' me devuelve el contenido del archivo .txt como si fuera un string
console.log(primero);



// Crear archivo nuevo:
fs.writeFileSync('./archivos/tercero.txt', 'Soy un archivo creado con node :3');    // Estamos creando un tercer archivo con su respectivo contenido    


// Editar archivo:
fs.writeFileSync('./archivos/cuarto.txt', '     Estoy siendo editado :D', {         // Estamos editando este archivo con contenido nuevo
    flag: 'a'
});   