# , "" , """ son los // de pytom.

"""

(=): Significa "asignacion". Mete lo que esta a la derecha del signo dentro de la variable que se escribe a su izquierda  
(==): Compara lo que esta a la izquierda con lo que esta a la derecha. De ser iguales devuelve un "true" y de diferentes devuelve un "false". Cuando se trabaja con "if" signica "igual"
(!=):  Significa "No es gual".


 VARIABLES: (Es donde se guardan los datos; y son de tres tipos)
(El contenido almacenado en estas variables tiene que estar entre comillas)

int   = Numeros enteros
float = Numeros decimales
str   = Texto

(Para que estas variables funcionen tienen que estar declaradas. Osea, tienen que tener nombre)
(En Pyton no hace falta declarar. Este lenguaje determina automaticamente que tipo de lenguaje es. Pero no esta de mas saber esto)


 PALABRAS RESERVADAS:
Son 28 palabras que Pyton las reserva para programar ya que cumplen una funcion especifica. Por ende, no se pueden ser declaradas.
 - and         - del         - for        - is         - raise        - assert
 - if          - else        - elif       - from       - lambda       - return
 - break       - global      - not        - try        - class        - except
 - or          - while       - continue   - exec       - import       - yield
 - def         - finally     - in         - print



 OPERADORES ARITMETICOS:
 - Suma (+)                 - Divicion (/)             - Modulo/resto (%) 
 - Resta (-)                - Division entera (//)     
 - Multiplicacion (*)       - Exponente (**)



 TIPOS DE DATOS:
1. Enteros y Largos (int) (long): Son aquellos que no tienen decimales. Se pueden representar mediante el tipo "int" (entero) o el tipo "long" (largo).
2. Flotantes (float): Son los numeros reales, aquellos numeros con decimales.
3. Numeros complejos (compex): Son los numeros que tienen una parte real y otra imaginaria
4. Cadenas (string): Son texto encerrado entre comillas. "Hola mundo!"
5. Booleanos (bool): Pueden tener dos valores "true" para verdadero y "false" para los falsos. Estos valores son importantes para expreciones condicionales y los bucles.



 ENTRADA DE DATOS DESDE EL TECLADO:

input(): La función input() permite obtener texto escrito por teclado. Dentro de los parentesis va el mensaje que el usuario va a ver
         Basicamente es un print() con el cual el usuario pude interactuar escribiendo 


 CONDICIONES:
if = Es una condicion. De ser verdadera se aplica el codigo que esta escrito por debajo y a la derecha del if. De ser falsa, se pasa al "elif" al "else" segun corresponda.
elif = Es la segunda condicion que se aplica si el "if" resulto falso. Funciona exactamente igual que un "if". Si la condicion del "elif" resulto falsa, se pasa a un segundo "elif" o al "else" segun corresponda. Puede haber "elif" infinitos hasta llegar al "else".  
else = No es una condicion, pero en caso de que la ultina condicion sea falsa, se aplica el codigo escrito por debajo y a la derecha del "else"
Sentencias condicionales anidadas: basicamente es un "if" dentro de otro if

while = Funciona igual que el "if" con la diferencia de que funciona en bucle. Ya que vuelve a repetir infinitamente el codigo escrito dentro del "while" hasta que la condicion sea cambiada a "false"  
  while True: = En este caso "la condicion simpre va a ser verdadera". Entrando en un bucle infinito del que no se puede salir. Esto es util si lo pongo al principio del programa, ya que no tengo que reiniciarlo para provarlo de nuevo. Se reinicia solo   

try: = Funciona en conjunto con el "except:" . Su funcion es hacer que una vez funciones el programa, no me aparezcan carteles de error por equivocaciones del usuario. Solamente se aplica en lo programado dentro del "try:" De ocurrir algun error, en vez de cerrarse el programa, se ejecuta lo programado dentro del "exept: que esta debajo del "try:"
except: = Funciona en conjunto con el "try" . Cuando se da un error dentro del "try:" , se ejecuta todo lo programado dentro del "exept:". De ese modo me ahorro el cartel de error y que se me cierre el programa.


"""


print ("\n")
print ("===============================")
print ("     Comparador de numeros     ")
print ("===============================\n")
# Este programa compara si los numeros son "mayores", "menores", "iguales", "direntes", "mayor e igual" y "mato y menor" que otro numero.


print ("Introduce los numeros a comparar:\n")

while True:

    try:

        primero = int (input ("Introduce el primer numero: "))
        segundo = int (input ("Introduce el segundo numero: "))
        

        if primero == segundo :
            print ("\n  ", primero, "es igual que", segundo) # Pongo el /n solamente en el ">" y en "<" porque son las primeras variables que van a aparecer en el programa cuando se ejecute, y como son totalmente distintas una de la otra, solamente va a aparecer una de las dos.               

        if primero != segundo :
            print ("\n  ", primero, "es diferente a", segundo)

        if primero > segundo :
            print ("  ", primero, "es mayor que", segundo)  

        if primero < segundo :
            print ("  ", primero, "es menor que", segundo)

        if primero >= segundo :
            print ("  ", primero, "es mayor o igual que", segundo)

        if primero <= segundo :
            print ("  ", primero, "es menor o igual que", segundo)


        print ("\n")
        print ("Fin.")
        print ("\n")    

    except:
        print ("\n")
        print ("   Opcion inexistente")
        print ("\n") 

















