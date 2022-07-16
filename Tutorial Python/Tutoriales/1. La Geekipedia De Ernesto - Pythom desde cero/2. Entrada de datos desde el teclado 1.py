# , "" , """ son los // de pytom.

"""

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



"""






#_____ENTRADA DE DATOS DESDE EL TECLADO:_____
#En este programa se creara varias entradas de textos interactivas con el teclado.


print("_____ENTRADA DE DATOS DESDE EL TECLADO:_____")




palabra = input("Introduce una palabra: ")  #La función input() permite obtener texto escrito por teclado. Dentro de los parentesis va el mensaje que el usuario va a ver
                                            #Luego se guarda dicho texto escrito por el usario en la variable "palabra"
numeros_enteros = int (input ("Introduce un numero entero: ")) #Lo mismo que lo anterior. Con el paso extra de que me convierte dicho texto en un numero entero
numeros_flotantes = float (input("Introduce un numero real: "))
numeros_complejos = complex (input("Introduce un numero complejo: "))

print ("String: " , palabra)               #Este sprint() me va a escribir la palabra "String" Y al ladova a poner el texto que excribi en el teclado, que esta almacenado en la variable "palabra" 
print ("Entero: " , numeros_enteros)
print ("Reales: " , numeros_flotantes)
print ("Complejos: " , numeros_complejos)












