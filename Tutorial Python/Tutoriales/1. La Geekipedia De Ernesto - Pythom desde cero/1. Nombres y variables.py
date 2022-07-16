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



"""





print ("Hola mundo")    #Le dije al programa que me escriba "Hola mundo"




int = "A"    #Le dije al programa que ahora hay una lista de numeros enteros llamada "A"
int = "B"

A = 2        #En esta lista llamada "A" tengo guardado un numero, el numero "2"   
B = 3

print (A+B)  #Le dije al  programa que me sume todos los numeros almacenados en "A" Y "B" y que luego los escriba
             #Si la cosa salio bien me tiene que dar 5.   




print ("--------------------------------------------------------------------------------")







# _____ASIGNACION:_____


# ¿Como unir dos textos separados en uno solo?

# Para suma mas texto uso el comando " += "

print ("_____ASIGNACION:_____")


mensaje = "Hola"      #Primera parte del texto
mensaje += " "        #El " " es el espacio que quiero dejar entre texto y texto, sino estaria todo pegado
mensaje += "Nikin"    #Segunda parte del texto que quiero pegar

print (mensaje)       #Si sale bien tendria que aparecer "Hola Nikin"




print ("--------------------------------------------------------------------------------")






# _____CONCATENACION:_____


# Es lo mismo que lo anterior pero de otra forma

print("_____CONCATENACION:_____")


mensaje = "Holiwis"
espacio = " "
nombre = "Nico"

print (mensaje + espacio + nombre)




# ¿Como concatenar numeros con texto?

# Basicamente es imposible, solamente se puede concatenar numeros con numeros y texto con texto
# A no ser queeeeee combierta a uno en el otro. Entonces ahora voy a tener dos valores del mismo tipo

int = "C"
C = A + B    # De lo anterior, A=2 y B=3 ;  Me tendria que dar 5
C = str (C)  # Basicamente le digo al programa que tiene que sustituir el valor de la variable "C" por un nuevo valor
             # "str" en una variable para almacenar texto
             # Lo que estoy haciendo es convertir los valores numericos en texto

print (C + espacio + nombre + espacio + "Hola mundo!" )





print ("--------------------------------------------------------------------------------")








#_____LA BUSQUEDA:_____

# Busca un la palabra clave dentro de un texto, y me indica a cuantos caracteres esta alejada dicha palabra
# Ejemplo: Tengo que buscar la palabra "Nikin" en el texto "La computadora de Nikin".
# "La computadora de Nikin"   tiene 23 caracteres, pero la palabra "Nikin comienza a partir del caracter 18. Si el programa sale bien, me deberia devolver el numero 18.
#  012345678901234567890123
# Se le llama "Cadena" al texto completo y "Subcadena" a una parte de este


print ("_____LA BUSQUEDA:_____")



mensaje = "La computadora de Nikin"         # Texto de prueba
buscar_subcadena = mensaje . find("Nikin")  # .find sirve para buscar la posicion de una palabra especifica en el texto. "Nikin" es la palabra que estoy buscando en dicho texto para ubicar su posicion que seria 18
print (buscar_subcadena)                     # Ahora me va a imprimir la posicion de la palabra "Nikin"




print ("--------------------------------------------------------------------------------")




#_____LA EXTRACCION:_____


# Basicamente es un copiar y pegar.
# Para que funcione tengo que indicarle al programa desde que posicion del texto y hasta que otra posicion tengo que extraer
# Ej: Quiero extraer la frace "in esta progra" del texto "Nikin esta programando"
#                                                         0123456789012345678901
# Para ello tengo que usar las posiciones 3 a la 17. ¿Por que 17 y no 16? Porque el ultimo valor lo cuenta con uno menos 


print ("_____LA EXTRACCION:_____")




mensaje = "Nikin esta programando"   #Texto de prueba
extaer_subcadena = mensaje[3:17]     #Quiero extraer la frace "in esta progra" del texto "Nikin esta programando". Para ello tengo que usar las posiciones 3 a la 17 

print (extaer_subcadena)




print ("--------------------------------------------------------------------------------")





#_____LA COMPARACION:_____


# Basicamente compara dos variables. De ser iguales me devuelve un "True". De ser diferentes me devuelve un "False"
# " == " es el operador de comparacion utilizado para dicho trabajo.
# En la primera comparacion quiero que me de "True" y en la segunda "False".

print ("_____LA COMPARACION:_____")


mensaje_uno = "Hola"                #Tanto el uno como el dos son los mensajes que voy a comparar
mensaje_dos = "Hola"
print (mensaje_uno==mensaje_dos)    # Uso == para comparar. En este caso me deberia dar como resultado True porque ambos valores son iguales (Hola)


mensaje_tres = "Hola"    
mensaje_cuatro = "Chau"
print (mensaje_tres==mensaje_cuatro)  #En este caso los mensajes son diferentes. Por ende me deberia devolver un "False"




print ("--------------------------------------------------------------------------------")






#_____OPERADORES ARITMETICOS:_____

print ("_____OPERADORES ARITMETICOS:_____")



# Suma:

numero_uno = 5
numero_dos = 4

resultado = numero_uno + numero_dos

print ("El resultado de la suma entre 5 y 4 es: " + str(resultado)) #Esta es otra forma concatenar numeros con texto



# Resta:

numero_uno = 5
numero_dos = 4

resultado = numero_uno - numero_dos

print ("El resultado de la resta entre 5 y 4 es: " + str(resultado))



# Multiplicacion:

numero_uno = 5
numero_dos = 4

resultado = numero_uno * numero_dos

print ("El resultado de la multiplicacion entre 5 y 4 es: " + str(resultado))



# Divicion:

numero_uno = 5
numero_dos = 4

resultado = numero_uno / numero_dos

print ("El resultado de la divicion entre 5 y 4 es: " + str(resultado))



# Divicion entera: (Sin decimales)

numero_uno = 5
numero_dos = 4

resultado = numero_uno // numero_dos

print ("El resultado sin decimales de la divicion entre 5 y 4 es: " + str(resultado)) 



# Exponente:

numero_uno = 5
numero_dos = 4

resultado = numero_uno ** numero_dos

print ("El resultado del exponente entre 5^4 es: " + str(resultado))



# Modulo/resto: (no es el modulo que to tengo entendido)

numero_uno = 30
numero_dos = 8

resultado = numero_uno % numero_dos

print ("El resultado del modulo/resto entre 30 y 8 es: " + str(resultado))




print ("--------------------------------------------------------------------------------")





#_____TIPOS DE DATOS:_____

print ("_____TIPOS DE DATOS:_____")


# Enteros y Largos (int)(long):

# EN este ejercicio quiero determinar que tipo de variable estoy usando
# (En Pyton no hace falta declarar. Este lenguaje determina automaticamente que tipo de lenguaje es)
# Si el ejercicio sale bien, me tiene que indicar que es una variable del tipo "int


numero = 15  

print(numero, type (numero))   #Separar con coma me permite hacer dos acciones a la vez
                                #"type" me indica a que tipo de dato o variable pertenece la informacion que le pongo adentro 


# Flotantes (float):

numero_flotante = 15.5

print(numero_flotante, type (numero_flotante))



# Numero complejos (compex):

numero_complejo = 5 + 6j

print(numero_complejo , type(numero_complejo))



# Cadenas/strings (str):

nombre = "Nikin"

print(nombre, type(nombre))



# Boleanos (bool):

verdadero_falso = 3 == 3

print (verdadero_falso , type(verdadero_falso))
















