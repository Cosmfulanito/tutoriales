

/*                              			_____Programacion orientada a objetos (POO)_____


- Es un paradigma de la programacion que actualiza la forma de programar anterior

- Algunos de los conceptos fundamentales son:
    - Clase
    - Herencia
    - Objeto
    - Metodo
    - Evento
    - Etc

*/


//-------------------------------------------------------------------------------------------------------------------------



// _____Crear un objeto:_____

// Vamos a tratar de crear los objetos "juan" y "marta"




// Primero se crea una clase:                       // Las clases nos sirve de molde para crear objetos similares    
class Persona{                                      // Para crear un objeto primero tenemos que declarar una "clase".       // El nombre de la clase siempre lleva la primera letra en mayuscula. Esto se hace por convencion
    constructor (nombre, apellido, edad){           // La funcion constructura posee los parametros que va a tener el objeto como base. Luego abrimos llaves para asignar las propiedades de los objetos a los parametros
        this.nombre = nombre                        // Aqui asignamos las propiedades de los objetos a los parametros
        this.apellido = apellido
        this.edad = edad
                                                    // Si queremos agregar otra propiedad, se hace de la misma manera
        this.datos = `Me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`       //  Es obligatorio poner this. dentro de las "clases"       // Investigar por que
    }        
                                                    // Por fuera del constructor es donde podemos crear todos los metodos que nos de la ganas 
    saludar(){                                      // Los metodos dentro de un objeto se crean de esta manera
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años`
    }
}                                                   // La "clase" persona ya esta creada, esto me va a servir de molde para crear distintos objetos


// Luego se se crea el objeto en base a la clase:
const juan = new Persona("Juan", "Garcia", 25)      // Se acaba de crear el objeto "juan", que usa como molde la clase "persona". Y dentro del parentesis se agregaron los parametros
                                                    // El operador "new" es el que crea el objeto, luego es guardado en la constante juan

const marta = new Persona("Marta", "Ramirez", 35)   // Y ya que estamos, creamos un segundo objeto llamado "marta" con sus propios parametros en base al molde de la clase "persona"






// Ahora solo queda llamar al objeto y a sus propiedades como ya se vio en el tutorial anterior de introduccion a objetos:  11. Objetos {} (introduccion).js

console.log(juan);              // Aqui estoy llamando al objeto "juan". Por ende se me va a mostrar todas las propiedades y parametros que posee

console.log(juan.saludar());    // En este caso estoy llamando especificamento al "metodo" que esta dentro del objeto "juan" 

console.log(marta.saludar());


