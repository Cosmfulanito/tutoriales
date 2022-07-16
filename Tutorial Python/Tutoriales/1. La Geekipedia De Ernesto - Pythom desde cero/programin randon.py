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




"""



#_____INGRESO DE CONTRASEÑA_____

# En este programa trato de enterder el "while" por mi cuenta

print ('Tip: La contaseña es "123". Pero se lo digas a nadie, shhhh') 


codigo = input ("Ingrese el codigo: ")



while codigo != "123" :
    print ("Codigo incorrecto")
    codigo = input ("Ingrese el codigo nuevamente: ")
else:
    print ("Bienvenido")

   


    






















