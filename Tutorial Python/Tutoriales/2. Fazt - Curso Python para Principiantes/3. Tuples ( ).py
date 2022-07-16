

# Tuples ():  

# Se definen con: ()
# Son listas cuyos datos no se pueden cambiar
# Tienen la ventaja de ser mas rapidas que las listas
# Al no poder ser alteradas podrian ser mas seguras que las listas





#_____Formas de llamar a una tupla:_____ 

# Forma tradicional:
x = (1, 2, 3)
print (x)

print (type (x))                  #Demuesta que este tipo de variable es una tupla

meses = ("Enero", "Febrero", "Marzo", "Abril", "...")


# Mediante un constructor:
y = tuple((1, 2, 3))              # ¿Por que el doble (()) ? Si solamente le pongo uno, me salta un error que dice "La lista esperaba un argumento y recibio 3". Para que la lista pueda soportar los 3 argumentos utilizo otra  tupla/tuple extra. Osea (()). La funcion de esa tupla es la de agrupar esos 4 argumentos en uno solo. Osea, estoy utilizando una tupla para crear una lista 
print (y)




#------------------------------------------------------------------------------------------------------------------




#_____Conocer todos los metodos/palabras claves que tengo disponible para mi tuple:_____
# La mayoria de las palabras claves que voy a ver mas abajo en este apunte se pueden chequear con esta funcion. Tambien funciona para otro tipo de variables.
# La tupla tiene menos metodos que una lista, esto se debe a que los datos de una tupla no pueden ser cambiados
x = (1, 2, 3)
print (dir (x))




#------------------------------------------------------------------------------------------------------------------




#_____Una tupla con un unico valor es un int()_____
# Una tupla tiene que ser de multiples datos. Si pongo uno solo se transforma en un int 
x = (1)
print(x)
print (type(x))                            # Me va a devolver un int. Porque una tupla de un unico valor deja de ser una tupla y se convierte en un entero  


# Para crear una tupla de un unico elemento tengo que agregar una coma:
x = (1,)
print(x)
print (type(x))                            # Ahora si me va a devolver una tupla a pesar de que agregre un solo dato. Gracias a la coma




#------------------------------------------------------------------------------------------------------------------




#_____Acceder a un dato desde un numero del indice_____
colores = ("rojo", "azul", "amarillo")
print (colores[0])                         # Me tiene que devolve el valor "rojo"




#------------------------------------------------------------------------------------------------------------------




#_____Borrar una tupla:_____
x = (1, 2, 3)
del (x)
#print (x)                                 # Me apareceria un error ya que no se puede imprimir algo que no existe   




#------------------------------------------------------------------------------------------------------------------




#_____Desempaquetado de tupla:_____
# Consiste en asignarle a cada valor de una tupla, una variable.
mi_tupla = ("Juan", 1, 8, 1985)
nombre, dia, mes, anio = mi_tupla           # anio=año  no se aconseja usar letras latinas 

print (anio)
print (nombre)



#------------------------------------------------------------------------------------------------------------------




#_____¿Donde utilizamos una tupla en una aplicacion real?_____
# Se podrian utilizar dentro de listas[] o diccionarios (Consepto que veremos mas adelante).
# Ejemplo de diccionario que utiliza una tupla: Queremos guardar las longitudes y las latitudes de diferentes ciudades 
ciudades = {
            (35.788, 98.521) : "Tokio",
            (89.356, 24.728) : "New York",
            (78.658, 89,364) : "Buenos Aires"
            } 







