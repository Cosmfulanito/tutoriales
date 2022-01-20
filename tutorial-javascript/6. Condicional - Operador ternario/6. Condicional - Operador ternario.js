

//_____Operador ternario:_____
/* - No es un condicional, es un "operador". Pero lo agrego a esta categoria porque se podría interpretar como un if/else resumido
   - Se utiliza cuando un acondicion va a ser "true" o "false". Al igual que un if
   - Su ejecucion puede tener una o varias sentencias. En este segundo caso irán separados por comas y entre parentesis 
   
Caso de tener una sentencia:

    (condición) ? "Sentencia en caso de ser true" : "Sentencia en caso de ser false";



Caso de tener varias sentencias:
   
    (condición) ?
        (primera sentencia true,
        segunda sentencia true,
        ...
        ultima sentencia true)
        :
        (primera sentencia false,
        segunda sentencia false,
        ...
        ultima sentencia false);

*/





// En caso de una unica sentencia true y false:
    
let numero = 3;

(numero % 2 == 0) ? console.log(`El numero "${numero}" es "par"`) : console.log(`El numero "${numero}" es "impar"`);





// En caso de tener varias sentencias true y false:

numero = 8;

(numero % 2 == 0) ?
            (                                                                       // En realidad no hace falta que este par de parentesis esten en lineas aparte. Lo puse de esta forma a modo de ejemlo para que se notaran más. Mas abajo en las sentencias "false" estan colocados correctamente
            console.log(`El numero "${numero}" es "par"`),
            console.log(`Así es, el "${numero}" es un hermoso numero "par"`)
            )
            :
            (console.log(`El numero "${numero}" es "impar"`),
            console.log(`Así es, el "${numero}" es un hermoso numero "impar"`));



