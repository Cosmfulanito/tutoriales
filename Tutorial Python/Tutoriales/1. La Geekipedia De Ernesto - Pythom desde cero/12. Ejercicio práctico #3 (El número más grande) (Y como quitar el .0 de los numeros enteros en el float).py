"""

# , "" "" , """ """ , son los // de pytom.


(=): Significa "asignacion". Mete lo que esta a la derecha del signo dentro de la variable que se escribe a su izquierda  
(==): Compara lo que esta a la izquierda con lo que esta a la derecha. De ser iguales devuelve un "true" y de diferentes devuelve un "false". Cuando se trabaja con "if" signica "igual"
(!=):  Significa "No es gual".

-----------------------------------------------------------------------------------------------------------------


 VARIABLES / TIPOS DE DATOS :
Es donde se guardan los datos)
El contenido almacenado en estas variables tiene que estar entre comillas

 - int     (Enteros): Son aquellos numeros que no tienen decimales. Se pueden representar mediante el tipo "int" (entero).
 - long    (Largos): Funcionan como los "int" pero estos numeros son tan largos que misma computadora no tiene la capacidad de almacenarlos
 - float   (Flotantes): Son los numeros reales, aquellos numeros con decimales.
 - compex  (Numeros complejos): Son los numeros que tienen una parte real y otra imaginaria
 - str     (string o tambien llamadas cadenas): Son texto encerrado entre comillas. "Hola mundo!"
 - bool    (Booleanos): Pueden tener dos valores "true" para verdadero y "false" para los falsos. Estos valores son importantes para expreciones condicionales y los bucles.

Para que estas variables funcionen tienen que estar declaradas. Osea, tienen que tener nombre
Pero en Pyton no hace falta declarar. Este lenguaje determina automaticamente que tipo de lenguaje es. Pero no esta de mas saber lo anterior

-----------------------------------------------------------------------------------------------------------------

 PALABRAS RESERVADAS:
Son 28 palabras que Pyton las reserva para programar ya que cumplen una funcion especifica. Por ende, no pueden ser declaradas.
 - and         - del         - for        - is         - raise        - assert
 - if          - else        - elif       - from       - lambda       - return
 - break       - global      - not        - try        - class        - except
 - or          - while       - continue   - exec       - import       - yield
 - def         - finally     - in         - print

-----------------------------------------------------------------------------------------------------------------

 OPERADORES ARITMETICOS:
 - Suma (+)                 - Divicion (/)             - Modulo/resto (%) 
 - Resta (-)                - Division entera (//)     
 - Multiplicacion (*)       - Exponente (**)

-----------------------------------------------------------------------------------------------------------------

 ENTRADA DE DATOS DESDE EL TECLADO:

input(): La función input() permite obtener texto escrito por teclado. Dentro de los parentesis va el mensaje que el usuario va a ver
         Basicamente es un print() con el cual el usuario pude interactuar escribiendo 

-----------------------------------------------------------------------------------------------------------------

 CONDICIONES:
 - if       Es una condicion. De ser verdadera se aplica el codigo que esta escrito por debajo y a la derecha del if. De ser falsa, se pasa al "elif" al "else" segun corresponda.
 - elif     Es la segunda condicion que se aplica si el "if" resulto falso. Funciona exactamente igual que un "if". Si la condicion del "elif" resulto falsa, se pasa a un segundo "elif" o al "else" segun corresponda. Puede haber "elif" infinitos hasta llegar al "else".  
 - else     No es una condicion, pero en caso de que la ultina condicion sea falsa, se aplica el codigo escrito por debajo y a la derecha del "else"

Sentencias condicionales anidadas: Basicamente es un "if" dentro de otro if

 - while              Funciona igual que el "if" con la diferencia de que funciona en bucle. Ya que vuelve a repetir infinitamente el codigo escrito dentro del "while" hasta que la condicion sea cambiada a "false"  
 - while True:        En este caso "la condicion simpre va a ser verdadera". Entrando en un bucle infinito del que no se puede salir. Esto es util si lo pongo al principio del programa, ya que no tengo que reiniciarlo para provarlo de nuevo. Se reinicia solo   
     break            Cuando el programa lee la palabra "break", rompe el loop infinito del "while True" y pasa a la siguiente parte del programa que esta fuera del "while True:".  Solamente hay que escribir "brake" sin mas en la parte del programa donde creo oportuno romper el loop infinito del while True 

    
 - try:        Funciona en conjunto con el "except:" . Su funcion es hacer que una vez funciones el programa, no me aparezcan carteles de error por equivocaciones del usuario. Solamente se aplica en lo programado dentro del "try:" De ocurrir algun error, en vez de cerrarse el programa, se ejecuta lo programado dentro del "exept: que esta debajo del "try:"
 - except:     Funciona en conjunto con el "try" . Cuando se da un error dentro del "try:" , se ejecuta todo lo programado dentro del "exept:". De ese modo me ahorro el cartel de error y que se me cierre el programa.



 OPERADORES LOGICOS:
En ocaciones es necesario utilizar mas de dos condiciones logicas dentro de una misma condicion. Para lograr la union de dos o mas condiciones logicas, se utlizan los "operadores logicos". Estos son:

 - and  (Operador logico de "Conjuncion"): Se utiliza para sumar dos o mas condiciones logicas para crear una sola mas compleja. Para que se ejecute correctamente, ambas condiciones tienen que ser "true".  Ej: Quiero crear una condicion donde solamente se tomen los numeros 1 al 10, para eso tengo que utilizar dos funciones, una es "if numero >= 1" y la otra "numero <= 10" . Al fucionar las dos, la condicion final quedaria así --->   if numero >= 1 and numero <= 10 :
 - or   (Operador logico de "Disyuncion"): Se utiliza cuando nesecito que al menos una de las dos o mas condiciones sea "true".   Ej: Solamente quiero comprar una moto que sea roja o alta, o ambas cosas si tengo suerte. La condicion quedaria así --->  if color = rojo or tamaño = alta :
 - not  (Operador logico de "Negacion"):   Se utiliza para indicarle al programa que agarre los valores que no cumplen con la condicion. Osea, que haga lo contrario.   Ej: Quiero que  la condicion "No" me agarre los numeros mayores que 5. La condicion quedaria así --->   if not numero < 5 :    

-----------------------------------------------------------------------------------------------------------------

 PALABRAS QUE PUEDEN RESULTAR INTERESANTES:

 - palabra = palabra.lower()       Hace que toda palabra que escriba se pase a minuscula. Hago esto porque mas abajo tengo los numeros escritos en minuscula y si alguien escribe la palabra en mayuscula el programa no va a encontar la coincidencia. Ej: combierte la palabra "CuaTro" en "cuatro"  
 - numero = round (numero , 2)     La funcion "round" redondea los decimales de una variable "float".    El " , 2" son la cantidad de decimales maximos que quiero ver, puede ser cualquier otro numero.    Ej: Es mas agradable ver 3.33 que 3.3333333333333333333333  


"""


print ("\n=======================================================")
print ("Programa para determinar ¿Cual es el numero mas grande?")
print ("=======================================================\n")




while True:
    try:

        # El codigo es muchoooo mas simple, pero me molestaba que cuando ponia un numero entero, el "float" me mostraba ese mismo numero pero con un .0 al final. Ej: pongo 5 y me muestra 5.0 
        # Para solucionar ese problema "uso 2 declaraciones", donde una es una copia de los valores de la otra. Osea, las dos tienen los mismos numeros adentro.
        # La primera es una "str", esta funcion la voy a llamar para cuando necesite que me muestre los numeros, ya que no me agrega un .0 al final de los numeros enteros como el "float". La desventaja es que no puedo hacer un calculos aritmetico con dichos datos porque son literalmente texto. Para eso tengo que usar el "float".
        # La segunda variable que utilizo es el "float", esta funcion es una copia del "str" ya que tiene guardados los mismos valore. Esta funcion la voy a llamar unicamente para hacer calculos aritmeticos.
        # De esta manera puedo utilizar numeros decimales sin que se me ponga el molesto ".0" atras de los numeros enteros.
        
        numero_uno_str = input ("Introduce el primer numero: ")
        numero_uno_float = float (numero_uno_str)

        numero_dos_str = input ("Introduce el segundo numero: ")
        numero_dos_float = float (numero_dos_str)

        numero_tres_str = input ("Introduce el tercer numero: ")
        numero_tres_float = float (numero_tres_str)
        


                
        if numero_uno_float > numero_dos_float and numero_uno_float > numero_tres_float :   # Aca comparo al numero 1 con cada uno de los demas numeros por separado para ver si es el mas grande.   
            print ("\n   El numero" , numero_uno_str , "es el mas grande.\n")

        elif numero_dos_float > numero_tres_float :   # Como mas arriba se descarto al numero 1 como el numero mas grande, ahora toca ver si el numero 2 es mas grande que el numero 3. 
            print ("\n   El numero" , numero_dos_str , "es el mas grande.\n")

        else:   # Como los otros dos numeros estan descartados, el numero 3 es el mas grande.
            print ("\n   El numero" , numero_tres_str , "es el mas grande.\n")
       

               
    except:
        print ("\nIntroduzca un numero valido\n")



















