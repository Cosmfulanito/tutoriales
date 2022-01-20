/*

Ejercicio de lo visto hasta el apunte "13. POO - Clases.js"


1) Crea una clase Libro
   - La clase libro tendrá título, autor, año y género.
   - Crea un método que devuelva toda la información del libro
2) Pide 3 libros y guárdalos en un array
   - Los libros se introducirán al arrancar el programa pidiendo los datos con prompt.
   - Validar que los campos no se introduzcan vacíos
   - Validar que el año sea un número y que tenga 4 dígitos
   - Validar que el género sea: aventuras, terror o fantasía
3) Crea una función que muestre todos los libros
   - Crea una función que muestre los autores ordenados alfabéticamente
   - Crea una función que pida un género y muestre la información de los libros que pertenezcan a ese género usando un el método que devuelve la información

*/


// 1)

class Libro{
    constructor(titulo, autor, ano, genero){
        this.titulo = titulo
        this.autor = autor
        this.ano = ano
        this.genero = genero
    }
    informacion(){
        return `Titulo: ${this.titulo} \nAutor:  ${this.autor} \nAño:    ${this.ano} \nGenero: ${this.genero}`
    }
}





// 2)

let libros = [];            // Este el Array que me pide anunciado

let numerin = 1;            // Esta constante la uso para tener enumerados los libros que ingreso en el prompt. De esta manera no me pierdo. Luego más abajo al terminar el bucle le sumo una unidad para enumerar al siguiente libro 

while (libros.length < 3){                              // Mientras la cantidad de libros sea menor a 4 (el cero tambien cuenta), va a pedirme que agregue otro libro a la lista. De esta forma puedo agregar los 3 libros
    let titulo = prompt(`Ingrese el titulo del libro N° ${numerin}`);
    while (titulo.length < 1){
        titulo = prompt(`El campo "Titulo" esta vacio. Ingreselo nuevamente`);
    }

    let autor = prompt(`Ingrese el autor del libro N° ${numerin}`);
    while (autor.length < 1){
        autor = prompt(`El campo "Autor" esta vacio. Ingreselo nuevamente`);
    } 
 
    let ano = prompt(`Ingrese el año de publicación del libro N° ${numerin}`);
    while (ano.length != 4){
        ano = prompt(`El año de publicacion del libro debe tener por lo menos cuatro digitos. Ingreselo nuevamente`);
    }

    let genero = prompt(`Ingrese el genero del libro N° ${numerin}`);
    while (genero != "aventura" && genero != "terror" && genero != "fantasia"){
        genero = prompt(`El genero ingresado debe ser: aventura, terror o fantasía. Ingreselo nuevamente`);
    }
    

    numerin += 1;

    libros.push(new Libro(titulo, autor, ano, genero));         // Con el operador "new" acabo de crear un objeto llamado "Libro". Este objeto tiene el mismo nombre que la "clase" que le sirvio de molde. Ya que toda esa informacion fue guardada en un Array y no en una "constante" como se vio en el apunte "13. POO - Clases.js"
                                                                // Recordar que a causa de este blucle, habra 3 objetos "Libro" dentro del Array. Cada uno alojando informacion diferente
}




// 3)
// Funcion que muestra los libros:
const mostrar_libros = () => {
    console.log (libros);
}

mostrar_libros();       // Aqui estoy llamando a la funcion creada (la hago funcionar).




// Funcion que muestra a los autores ordenados alfabeticamente:
const ordenar_autores = () => {
    let autores = [];

    for (let i=0; i<(libros.length); i++){
        autores.push(libros[i].autor);                          // Basicamente, dentro del Array "libros" se chequea uno por uno de los elementos dentro gracias al bucle for y a su numero de iteracion. Una vez seleccionado el elemento, se chequea su la informacion que aloja la clave "autor" que esta dentro de ese elemento. Esa informacion es guardada a una lista
    }
    
    console.log(autores.sort());                                // .sort() ordena alfabeticamente los elementos de un Array 
}     

ordenar_autores ();





// Función que pida un género y muestre la información de los libros que pertenezcan a ese género:
const mostrar_genero = () => {
    
    let tipo_de_genero = prompt(`Escriba un genero para poder ver libros con esa tematica:`);
    let contador_ausencia = 0;                                  // Cuenta las veces que no aparece este genero. Cuando la cantidad de veces que este genero no aparece es igual a la cantidad de libros en el Array (Osea, que este genero no esta en la lista), va a aparecer un cartel diciendo que este genero no esta en la lista 

    for (let i=0; i<(libros.length); i++){
        if (libros[i].genero == tipo_de_genero){                // Sigue la misma logica que la funcion anterior. Hace un bucle for de chequeando uno por uno los elementos (objeto) del Array. Si el "genero" de ese objeto coincide con el "genero" buscado, el programa me ejecutara la funcion "informacion()" que esta dentro del objeto. Tal cual me indica el enunciado. Caso contrario se me agregara una unidad al contador de ausencia
            console.log(libros[i].informacion());

        }else{
            contador_ausencia += 1;
        }
    } 

    if (contador_ausencia == libros.length){
        console.log(`El genero "${tipo_de_genero}" no esta en la lista`);
    }

}

mostrar_genero();
