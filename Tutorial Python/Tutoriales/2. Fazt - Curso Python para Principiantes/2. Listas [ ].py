
# Lista []:

# Se definen con: []





#_____Formas de llamar a una lista:_____

# Forma tradicional:
colores = ["rojo", "amarillo", "verde"]


# Utilizando el constructor:
# Es una especie de funcion que nos permite definir a una lista usando la palabra clave list() y poniendo nosotros adentro los datos
number_list = list((1, 2, 3, 4))           # ¿Por que el doble (()) ? Si solamente le pongo uno, me salta un error que dice "La lista esperaba un argumento y recibio 4". Para que la lista pueda soportar los 4 argumentos utilizo otra tupla/tuple extra. Osea (()). La funcion de esa tupla es la de agrupar esos 4 argumentos en uno solo. Osea, estoy utilizando una tupla para crear una lista 
print (number_list)
print (type(number_list))                  # Para demostrar que es una lista y no una tupla/tuple




#------------------------------------------------------------------------------------------------------------------





# _____Sublista:_____
# Lista adentro de otra lista
lista = [1, "Hello", 1.5, True, [1,3,5]]




#------------------------------------------------------------------------------------------------------------------





#_____Conocer todos los metodos/palabras claves que tengo disponible para mi lista:_____
# La mayoria de las palabras claves que voy a ver mas abajo en este apunte se pueden chequear con esta funcion. Tambien funciona para otro tipo de variables.
colores = ["rojo", "amarillo", "verde"]
print (dir (colores))




#------------------------------------------------------------------------------------------------------------------




# _____Lista basada en un rango:_____
# Digamos que quiero crear una lista del 1 al 100. Es una paja escribir numero por numero, para eso utilizo la palabra clabe range( , )
r = list (range (1, 101))                 # Tengo que agregar un numero extra porque porque se detiene un numero antes

print (r)



# Imprimir un rango de valores de una lista:
print (r [5:15])                     # Va a iniciar con el numero 6 por que en la posicion 0 se encuentra el numero 1.

print (r [ :15])                     # Va iniciar desde la posicion 0 hasta la 15

print (r [5: ])                      # Va a iniciar desde la posicion 5 hasta la ultima



#------------------------------------------------------------------------------------------------------------------




#_____Obtener un dato especifico de una lista:_____
#Digamos que quiero obtener el dato de la segunda posicion de una lista de colores
colores = ["rojo", "amarillo", "verde"]
print (colores[1])                           # Si quiero que me devuelva el amarillo (segunda posicion) tengo que poner [1], ya que cuenta a partir del cero.
print (colores[-1])                          # [-1] me sive para que me devuelva el ultimo valor. Osea verde. Tambien puedo poner [-2] para el anteultimo y asi seguidamente



#------------------------------------------------------------------------------------------------------------------




#_____Saber si un valor esta en una lista:_____
colores = ["rojo", "amarillo", "verde"] 
print ("rojo" in colores)                    # Esto me dice que si el valor "rojo" esta dentro de la lista colores, de ser o no así, me devuelva un True o un False.




#------------------------------------------------------------------------------------------------------------------




#_____Cambiar los datos de una lista:_____

colores = ["rojo", "amarillo", "verde"] 
colores [0] = "azul"                         #Ahora el valor "rojo" va a ser intercambiado por "azul"
print (colores)



#------------------------------------------------------------------------------------------------------------------




#_____Agregar un nuevo elemento a la lista:_____

colores = ["rojo", "amarillo", "verde"] 
colores.append("violeta")                    # .append ( ) agrega "un solo" valor extra a la lista
print (colores)

colores = ["rojo", "amarillo", "verde"] 
colores.append(("violeta", "marron"))        #Si quiero agregar una lista dentro de otra tengo que usar la tupla/tuple (()). Aqui lo que logro es que esos dos valores van a transformarser en una lista y luego esa lista va a ser enviada dentro de otra
print (colores)

colores = ["rojo", "amarillo", "verde"] 
colores.extend(["violeta", "marron"])        #Asi es como se agregan realmente varios tipos de datos a una lista
print (colores)





#------------------------------------------------------------------------------------------------------------------





#_____Saber cuantos datos hay en una lista:_____
colores = ["rojo", "amarillo", "verde"] 
print (len(colores))                         # Me tiene que devolver un 3. Por los 3 colores.




#------------------------------------------------------------------------------------------------------------------




#_____Insertar un elemento en una posicion dada:_____
# Dentro de una lista, inserta un valor en la posicion que yo quiera
colores = ["rojo", "amarillo", "verde"] 
colores.insert (1, "negro")
print (colores)

# Si quiero que me inserte un valor al ultimo la logica me diria que use el -1, pero no. Si hago eso por algun motivo me manda al anteultimo
colores = ["rojo", "amarillo", "verde"] 
colores.insert (len (colores), "negro")     #Esto se resuelve con el len (). Mide la longitud de la lista (en esta caso 3) y me inserta el dato violetnegro al ultimo
print (colores)                             #La verdad, este metodo me parece una paja sabiendo que hay dos mas que hacen lo mismo mas arriba




#------------------------------------------------------------------------------------------------------------------




#_____Remover valores de una lista:_____

# Remover un valor por indice: 
colores = ["rojo", "amarillo", "verde"]
colores.pop(2)                               # De no poner ningun numero, me quita el ultimo valor. Para que funcione correctamente hay que usar el print() aparte
print (colores)

# Remover un valor en particular:
colores = ["rojo", "amarillo", "verde"]
colores.remove ("amarillo")
print (colores)                              # Para que funcione correctamente hay que usar el print() aparte

# Remover todos los valores de una lista:
colores = ["rojo", "amarillo", "verde"]
colores.clear()
print (colores)                              # Para que funcione correctamente hay que usar el print() aparte




#------------------------------------------------------------------------------------------------------------------




#_____Ordenar valore en una lista:_____

# Ordena los valores de una lista alfabetica y numeralmente:
colores = ["rojo", "amarillo", "verde"]
colores.sort()                               # Me ordena los valores de una lista alfabetica y numeralmente
print(colores)                               # Para que funcione correctamente hay que usar el print() aparte

numeros = [9, 85, 3]
numeros.sort()                               
print(numeros)

# Ordenar los valores de forma inversa:
numeros = [9, 85, 3]
numeros.sort(reverse=True)                   # Me ordenar los valores de forma inversa                   
print(numeros)




#------------------------------------------------------------------------------------------------------------------





#_____Obtener el indice de un valor de una lista:_____

colores = ["rojo", "amarillo", "verde"]
print (colores.index("amarillo"))            # Me dice en que parte del indice esta el valor "amarillo" en la lista. En este caso me tendria que dar el numero 1, ya que cuenta a partir del 0       
                                             # Parecido al ---> print (colores[1]) 




#------------------------------------------------------------------------------------------------------------------




#_____Contar cuantas veces esta repetido un valor en una lista_____

colores = ["rojo", "rojo", "amarillo", "rojo", "verde", "rojo"]
print (colores.count("rojo"))                # Me tiene que devolver el numero 3, ya que hay 3 "rojos"



#------------------------------------------------------------------------------------------------------------------



#_____Sumar dos o más listas diferentes_____

lista_1 = ["Maria", 50, True]
lista_2 = ["Emilio", "Juan"]
lista_3 = lista_1 + lista_2

print (lista_3)




#------------------------------------------------------------------------------------------------------------------



#_____Repertir/multiplicar listas_____

numerines = [1, 2, 3, 4, 5]*3
print (numerines)



