

#Set {}:
# Se definen con {}
# A diferencia de una lista o un tuple, los set son una coleccion desordenada de datos
# Osea, no tienen un indice. Por ende, tego que acceder a esos datos de otra forma que no sea por medio de un indice
# ¿Cuando me conviene usar un set? Basicamente cuando no me procupa que los datos esten ordenados. Cada vez que llame al set, me va a devolver los datos ordenados de diferente manera
# Ojo, esto ultimo solo se aplica a los strings. No funciona si guardo numeros

colores = {"rojo", "azul", "amarillo", "verde", "ranja"}
print (colores)
print (type (colores))                        # Demuesta que es una variable del tipo set




#------------------------------------------------------------------------------------------------------------------



#_____Conocer todos los metodos/palabras claves que tengo disponible para mi set:_____
# La mayoria de las palabras claves que voy a ver mas abajo en este apunte se pueden chequear con esta funcion. Tambien funciona para otro tipo de variables.
colores = {"rojo", "azul", "amarillo", "verde", "ranja"}
print (dir(colores))



#------------------------------------------------------------------------------------------------------------------




#_____Formas de acceder a los valores del set:_____
colores = {"rojo", "azul", "amarillo", "verde", "ranja"}
print ("rojo" in colores)                   # Esto me dice que si el valor "rojo" esta dentro del set de colores, de ser o no así, me devuelva un True o un False.



#------------------------------------------------------------------------------------------------------------------




#_____Agregar un valor al set:_____
# La logica me diria que me agregaria dicho valor al final, pero no. Lo agrega en ubicaciones ramdons
colores = {"rojo", "azul", "amarillo"}
print (colores)
colores.add ("violeta")
print (colores)



#------------------------------------------------------------------------------------------------------------------




#_____Remover datos:_____

# Remover un dato especifico:
colores = {"rojo", "azul", "amarillo"}
print (colores)
colores.remove("rojo")
print(colores)

# Limpiar el set completo:
colores = {"rojo", "azul", "amarillo"}
print (colores)
colores.clear()                             # Al quitar todos los valores, solamente me tendria que aparecer set()
print(colores)

# Eliminar el set:
colores = {"rojo", "azul", "amarillo"}
del (colores)                               
#print(colores)                             # Me apareceria un error, ya que no se puede imprimir algo que no existe   
