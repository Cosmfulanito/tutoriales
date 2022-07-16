"""

# , "" "" , """ """ , son los // de pytom.


(=): Significa "asignacion". Mete lo que esta a la derecha del signo dentro de la variable que se escribe a su izquierda  
(==): Compara lo que esta a la izquierda con lo que esta a la derecha. De ser iguales devuelve un "true" y de diferentes devuelve un "false". Cuando se trabaja con "if" signica "igual"
(!=):  Significa "No es gual".


Paguina para descargar modulos/bibliotecas/frameworks:   https://pypi.org/

-----------------------------------------------------------------------------------------------------------------


 VARIABLES / TIPOS DE DATOS :
Es donde se guardan los datos

 - int     (Enteros): Son aquellos numeros que no tienen decimales. Se pueden representar mediante el tipo "int" (entero).
 - long    (Largos): Funcionan como los "int" pero estos numeros son tan largos que misma computadora no tiene la capacidad de almacenarlos
 - float   (Flotantes): Son los numeros reales, aquellos numeros con decimales.
 - compex  (Numeros complejos): Son los numeros que tienen una parte real y otra imaginaria
 - str     (String o tambien llamadas cadenas): Son texto encerrado entre comillas. "Hola mundo!"
 - bool    (Booleanos): Pueden tener dos valores "true" para verdadero y "false" para los falsos. Estos valores son importantes para expreciones condicionales y los bucles.

 - None    (None): Significa que no hay ningun tipo de dato. Funciona igual que el "True" y el "False" 

 - []      (List): Es basicamente una lista de datos, que pueden ser numeros enteros, decimales, strings, etc. Ej:   [1, 5, 8]
 - ()      (Tuples): Funciona como una lista pero con la diferencia de que los datos que guarda no pueden ser modificados  Ej: (1, 5, 8)  
 - {}      (Set): A diferencia de una lista o un tuple, los set son una coleccion desordenada de datos
                (Dictionaries): Permite agrupar datos, pero que pertenecen a una misma entidad. Osea, son como varios tipos distintos de datos en uno solo Ej :  Documento = {
                                                                                                                                                                               "Nombre": "Cosme",         
                                                                                                                                                                               "Apellido": Fulanito,
                                                                                                                                                                               "Edad": 35
                                                                                                                                                                              }                                                       
Para que estas variables funcionen tienen que estar declaradas. Osea, tienen que tener nombre
Pero en Pyton no hace falta declarar. Este lenguaje determina automaticamente que tipo de lenguaje es. Pero no esta de mas saber lo anterior

 
 Convenciones:
Son las formas correctas de declarar una variable. Si bien se pueden usar palabras totalmente ramdon que esten conformadas por un conjunbto de letras mayusculas, minusculas y numeros. Hay normas totalmente arbitrarias en cuanto a como se deben escribir.
Esto se debe a que facilita su lectura entre un equipo de programadores.
 Ejemplo de tipos de convenciones de variables: 
     cosme_fulanito      Esto es una "Snake Case"      (Esta es la forma usal de escribir una variable en Pythom) 
     cosmeFulanito       Esto es una "Camel Case"
     CosmeFulanito       Esto es una "Pascal Case"


Por convencion, las variables que guardan constantes van en MAYUSCULA. Es una norma que se da entre programadores, aunque a Python esto le chupe 3 pingos.
Basicamente son valores que no deverian ser cambiados
 Ej:
    PI = 3.1416
    NOMBRE = Roberto     (En este caso doy a entender que no quiero que el string Roberto sea cambiado por otro)

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

input()                 La función input() permite obtener texto escrito por teclado. Dentro de los parentesis va el mensaje que el usuario va a ver
                        Basicamente es un print() con el cual el usuario pude interactuar escribiendo 
eval(input())           Funciona como un input(), con la diferencia de que no guarda el texto tal cual como lo hace el input(), sino que a su vez lo calcula en caso de ser una cuenta      Ej:  eval (input (5+5)) ---> 10        input(5+5) ---> 5+5


-----------------------------------------------------------------------------------------------------------------


 CONDICIONES:
 - if       Es una condicion. De ser verdadera se aplica el codigo que esta escrito por debajo y a la derecha del if. De ser falsa, se pasa al "elif" al "else" segun corresponda.
 - elif     Es la segunda condicion que se aplica si el "if" resulto falso. Funciona exactamente igual que un "if". Si la condicion del "elif" resulto falsa, se pasa a un segundo "elif" o al "else" segun corresponda. Puede haber "elif" infinitos hasta llegar al "else".  
 - else     No es una condicion, pero en caso de que la ultina condicion sea falsa, se aplica el codigo escrito por debajo y a la derecha del "else"

Sentencias condicionales anidadas: Basicamente es un "if" dentro de otro if



-----------------------------------------------------------------------------------------------------------------


 SOLUCION DE ERRORES: (No es especifico a errores en particular, seguir investigando)     
 - try:        Funciona en conjunto con el "except:" . Su funcion es hacer que una vez funciones el programa, no me aparezcan carteles de error por equivocaciones del usuario. Solamente se aplica en lo programado dentro del "try:" De ocurrir algun error, en vez de cerrarse el programa, se ejecuta lo programado dentro del "exept: que esta debajo del "try:"
 - except:     Funciona en conjunto con el "try" . Cuando se da un error dentro del "try:" , se ejecuta todo lo programado dentro del "exept:". De ese modo me ahorro el cartel de error y que se me cierre el programa.



-----------------------------------------------------------------------------------------------------------------


 OPERADORES LOGICOS:
En ocaciones es necesario utilizar mas de dos condiciones logicas dentro de una misma condicion. Para lograr la union de dos o mas condiciones logicas, se utlizan los "operadores logicos". Estos son:

 - and  (Operador logico de "Conjuncion"): Se utiliza para sumar dos o mas condiciones logicas para crear una sola mas compleja. Para que se ejecute correctamente, ambas condiciones tienen que ser "true".  Ej: Quiero crear una condicion donde solamente se tomen los numeros 1 al 10, para eso tengo que utilizar dos funciones, una es "if numero >= 1" y la otra "numero <= 10" . Al fucionar las dos, la condicion final quedaria así --->   if numero >= 1 and numero <= 10 :
 - or   (Operador logico de "Disyuncion"): Se utiliza cuando nesecito que al menos una de las dos o mas condiciones sea "true".   Ej: Solamente quiero comprar una moto que sea roja o alta, o ambas cosas si tengo suerte. La condicion quedaria así --->  if color = rojo or tamaño = alta :
 - not  (Operador logico de "Negacion"):   Se utiliza para indicarle al programa que agarre los valores que no cumplen con la condicion. Osea, que haga lo contrario.   Ej: Quiero que  la condicion "No" me agarre los numeros mayores que 5. La condicion quedaria así --->   if not numero < 5 :    


-----------------------------------------------------------------------------------------------------------------
 
 
 BUCLES:
 Recordar que la iteracion es la repeticion de un segmento de codigo dentro de un programa. Osea esto

 - for               Me permite hacer barias cosas de las cuales destacan 2: Imprimir los datos de una lista y repetir una orden las veces que yo quiera.
 - while             El el while es un bucle que funciona igual que una condicon if. Esto significa que mientras se siga dando la funcion, el bucle va a seguir funcionando. Solo se detendra cuando la condicion sea falsa (tener en cuenta esto ultimo porque por un error podria probocar un bucle infinito y el programa no leeria el resto del codigo ya que estaria atrapado en dicho bucle)
    while True:      Este bucle es un while que se repetira siempre que haya un true dentro del ciclo. Es posible romperlo si en alguna parte escribo break

 SENTENCIAS:
 - break             Escribir esta sentencia finaliza automaticamnte cualquier bucle, incluido el while True.
 - continue          Escribir esta sentencia, dentro de una condicion anidada del while (un if dentro del while), hace que vuelva hacia el inicio del bucle. Esto hace que no se lea todo lo que esta por debajo de esta linea de codigo


-----------------------------------------------------------------------------------------------------------------


 PALABRAS QUE PUEDEN RESULTAR INTERESANTES:

 - abs()                           Me da el valor absoluto de un numero, basicamente es el modulo de un numero que nos enseñaron en la escuela             
 - eval(input())                   Funciona como un input, con la diferencia de que no guarda el texto tal cual como lo hace el input(), sino que a su vez lo calcula en caso de ser una cuenta      Ej:  eval (input (5+5)) ---> 10        input(5+5) ---> 5+5
 - palabra = palabra.lower()       Hace que toda palabra que escriba se pase a minuscula. Hago esto porque mas abajo tengo los numeros escritos en minuscula y si alguien escribe la palabra en mayuscula el programa no va a encontar la coincidencia. Ej: combierte la palabra "CuaTro" en "cuatro"  
 - .upper()                        Combierte mi string en mayusculas.
 - numero = round (numero , 2)     La funcion "round" redondea los decimales de una variable "float".    El " , 2" son la cantidad de decimales maximos que quiero ver, puede ser cualquier otro numero.    Ej: Es mas agradable ver 3.33 que 3.3333333333333333333333  
 - print (dir (palabra))           La funcion dir () me permite saber las propiedades y los metodos de la funcion que tiene adentro. Basicamente me muestra las palabras claves que pueden ser utilizadas en dicha variable
 - palabra.replace (" ", " ")      En una oracion o palabra, reemplaza lo que esta en el primer par de comillas por lo que esta en el segundo. Ej:   palabra = "Hello word"  --->  print (palabra.replace ("Hello", "Bye")) ---> Bye world
 - .starswith(" ")                 Chequea si la primera palabra comienza con lo que esta entre parentesis, devolviendome un True o un False. Ej:   palabra = "Hello word"  --->  print (palabra.starwith ("Hello")) ---> True
 - .endswith(" ")                  Chequea si la ultima palabra comienza con lo que esta entre parentesis, devolviendome un True o un False.
 - .append (" ")                   Agrega "un solo valor" extra a una lista. Pero solo se puede agregar un valor a lavez.                
                                        Si quiero agregar una lista dentro de otra tengo que recurrir a la tupla/tuple  (()) --->     .append ((" ", " "))       Aqui lo que logro es que esos dos valores van a transformarser en una lista y luego esa lista va a ser enviada dentro de otra Ej: [1, 2, 3, (4, 5)]
 - .extend ([" ", " ", " "])       Asi es como se agregan realmente varios tipos de datos a una lista
 - .insert (8, " ")                Dentro de una lista, inserta un valor en la posicion que yo quiera. Ej:  colores = ["rojo", "amarillo", "verde"]  --->   colores.insert (1, "negro")  --->  ["rojo", "negro", "amarillo", "verde"]     
 - len (lista)                     Me dice cuantos datos hay en una lista
 - .pop(8)                         Quita un valor de la lista desde su numero de indice. Si no coloco ningun numero, me quita el ultimo. Para que funcione correctamente hay que usar el print() aparte
 - .remove(" ")                    Quita un valor en especial. Para que funcione correctamente hay que usar el print() aparte
 - .clear()                        Remueve todos los valores de una lista. Para que funcione correctamente hay que usar el print() aparte
 - .sort()                         Me ordena los valores de una lista alfabetica y numeralmente. Para que funcione correctamente hay que usar el print() aparte
                                        .sort(reverse=True)     Me ordenar los valores de forma inversa
 - .index(" ")                     Me dice en que parte del indice esta el valor " " en la lista  
 - .count(" ")                     Me dice cuantas veces esta repetido un valor en una lista
 - range(3, 8)                     Se utiliza para indicar desde que valor hasta que otro valor trabajar con los datos de una lista
                                        Tambien se utiliza en los for para determinar la cantidad de veces que voy a repetir una orden. En ese caso solamente escribo un solo numero que es la cantidad de veces a repetir la orden. Ej:  for in range(5) :
 - break                           Escrito asi sin mas, corta un bucle while
 
 - def                             Significa "definicion". Sirve para crear funciones.
 - return                          Cuando cree una funcion con el def, de la cual nesesite un valor sujeto a una variable (Ya sea un numero o string) para obtenerlo mas adente, necesito poner return y al lado el nombre de la variable que guarda dicho valor. De esta forma voy a poder obtenerla mas adelante 
 - yield                           Funciona como un return, pero convierte a la funcion en generador
 - next                            Funciona en conjunto con el yield. Una vez escrito en la linia de codigo, se genera unicamente el primer valor del generador. Si lo vuelvo a escribir me da el siguien y asi sucesivamente.

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


------------------------------------------------------------------------------------------------------------------


 PARAMETOS PARA LA FUNCION print()

 - end=""   Me permite unir el print() que esta arriba con otro print() que esta abajo de la linea de codigo. Tambien cuenta con comillas que me permiten escribir dentro, se puede poner un "espacio" para que la ultima palabra del texto de arriba no este pegado a la primera de abajo
                Tambien me permite imprimir los datos de una lista de forma horizontal utilizando el bucle for como si fuera un sep="". El unico inconveniente es que tambien me a unir el print que tenga abajo    Ej: print (i, end=" ")   
 - sep=""   Me permite decidir que va a haber entre medio de cada texto dento de un mismo print() . Ej: print ("1", "2", "3", "3", "4", "5", sep="+") me muestra ---> 1+2+3+3+4+5
                Tambien me permite imprimir los datos de una lista de forma horizontal utilizando el bucle for.   Ej: print (i, sep=" ")   


------------------------------------------------------------------------------------------------------------------


 NOTACION:
 - /n       Deja un renglon entre texto y texto. De lo contrario estaria todo pegado
 - f        Concatena/une lo dos string diferentes
                En los bucles for tiene la funcion de unir un string con los valores del i del for. Recordar escribir la el i o la variable entre {} de esta forma.  Ej: print (f"El valor de la variable es {i}")



------------------------------------------------------------------------------------------------------------------

"""





