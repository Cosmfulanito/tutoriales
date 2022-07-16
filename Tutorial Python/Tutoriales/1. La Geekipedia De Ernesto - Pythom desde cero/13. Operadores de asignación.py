"""

# , "" "" , """ """ , son los // de pytom.


(=): Significa "asignacion". Mete lo que esta a la derecha del signo dentro de la variable que se escribe a su izquierda  
(==): Compara lo que esta a la izquierda con lo que esta a la derecha. De ser iguales devuelve un "true" y de diferentes devuelve un "false". Cuando se trabaja con "if" signica "igual"
(!=):  Significa "No es gual".

-----------------------------------------------------------------------------------------------------------------


 VARIABLES / TIPOS DE DATOS :
Es donde se guardan los datos

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

------------------------------------------------------------------------------------------------------------------

 OPERADORES DE ASIGNACION:
Como su nombre lo indica, se encarga de asignar un valor a la variable de la izquierda basado en el valor de la derecha

 -  =    (Operdador de asignacion): Es el mas importaten ya que se usa siempre. Asigna a la variable de la izquierda cualquier variable o valor del lado derecho. Ej: numero = int numero
 -  -=   (Asiganacin de resta): Asigna en forma de resta a la variable de la izquierda, valor del dalo derecho. En ningun momento la variable es reemplazada por otra como en el cazo de arriba. Solamente se aplica una cuenta matematica  Ej: (La variable numero tiene guardado el numero 10) --->  numero -= 3   ---> (Ahora numero vale 7, ya que se le resto 3 al 10)  ////   Es lo mismo que hacer --> numero = numero - 3
 -  +=   (Asignacion de suma): Este y el resto de los operadores siguen la misma loguica que el operador de resta, pero con su respectivo signo.
 -  *=   (Asignacion de multiplicacion):
 -  /=   (Asignacion de divicion):
 -  //=  (Asignacion divicion entera):
 -  **=  (Asignacion de exponente):
 -  %=   (Asignacion de modulo/resto):




"""




print ("\n")
print ("     =========================")
print ("     OPERADORES DE ASIGNACION:")
print ("     =========================\n")




nombre = "Hola "
nombre += input ("Escribe tu nombre: ")

print (nombre, ", esto es el incremento y decremento de una variable\n" )


print ("incremento o aumento:")
x = 1
print ("El valor inicial de x es:", x)

x+=1
x+=1
x+=1
x+=1

print ("El valor final de x es: ", x, "\n")


print ("Decremento o disminucion:")
print ("El valor inicial de x es:", x)

x-=1
x-=1
x-=1
x-=1

print ("El valor final de x es:", x)




