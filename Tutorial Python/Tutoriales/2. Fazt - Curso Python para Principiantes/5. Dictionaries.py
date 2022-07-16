

# Dictionaries:
# Es un conjunto de datos que puedo describir utilizandos "claves"/"llaves". Y esas claves tienen un valor, el dato que quiero colocar adentro
# La principal caracteristica de los diccionarios es que los datos se almacenan asociados a una clave de tal forma que se crea una asociacion del tipo clave:valor para cada elemento almacenado
# Los elementos almacenados no estan ordenados. 

producto = { "nombre"   :  "libro",              # Termina en coma porque se entiende que a continuacion se lee la linia de codigo de abajo como si estubiera al lado
             "cantidad" :  3,
             "precio"   :  4.99                  # Este ultimo dato no lleva coma, ya que a que no hay ningun otro dato despues de este
             } 

print (producto)
print (type(producto))                           # Demuestra que es un dictionarie devolviendome un dict


# Segunda forma de declarar un diccionarie
# Es exactamente lo mismo pero se hace en una sola linea de codigo. El problema es que es menos legible para el programador

producto = {"nombre" : "libro", "cantidad" : 3, "precio" : 4.99} 
print (producto)





#------------------------------------------------------------------------------------------------------------------





#_____ACCEDER A INFORMACION ESPECIFICA DENTRO DE UN DICCIONARIO:_____

capital = {"Alemania" : "Berlin",
           "Argentina": "Buenos Aires",
           "España"   : "Madrid"
          } 

print (capital ["Alemania"])





#------------------------------------------------------------------------------------------------------------------





#_____AGREGAR MAS INFORMACION A UN DICCIONARIO YA CONSTRUIDO:_____

capital = {"Alemania" : "Berlin",
           "Argentina": "Buenos Aires",
           "España"   : "Madrid"
          } 

capital ["Francia"]= "París"        # Sep, es rarisimo pero se hace así
print (capital)





#------------------------------------------------------------------------------------------------------------------





#_____CORREGIR INFORMACION ERRONEA DE UN DICCIONARIO:_____

capital = {"Alemania" : "Berlin",
           "Argentina": "Bogota"
          } 

capital ["Argentina"]= "Buenos Aires"
print (capital)





#------------------------------------------------------------------------------------------------------------------





#_____Saber que las propiades, metodos/palabras clave que tengo disponibles en mi dictionarie:_____
# La mayoria de las palabras claves que voy a ver mas abajo en este apunte se pueden chequear con esta funcion. Tambien funciona para otro tipo de variables.

producto = { "nombre"   :  "libro",              
             "cantidad" :  3,
             "precio"   :  4.99                  
             }
print (dir(producto))





#------------------------------------------------------------------------------------------------------------------





#_____¿Como obtener las "llaves" de un dictionarie?_____
# Las llaves son las "claves" donde se van a guardar un valor especifico 
# En este caso, esta funcion me deberia devolver el nombre de las llaves. Osea, las palabras "nombre", "cantidad", "precio"  

producto = { "nombre"   :  "libro",              
             "cantidad" :  3,
             "precio"   :  4.99                  
             }

print (producto.keys())




#------------------------------------------------------------------------------------------------------------------





#_____¿Como obtener los "valores" de un dictionarie?_____
# Los valores es la informacion almacenada en las keys

producto = { "nombre"   :  "libro",              
             "cantidad" :  3,
             "precio"   :  4.99                  
             }

print (producto.values())





#------------------------------------------------------------------------------------------------------------------





#_____Obtener la longuitud de un diccionario_____


producto = { "nombre"   :  "libro",              
             "cantidad" :  3,
             "precio"   :  4.99                  
             }

print (len (producto))       # Ahora me aclara que este diccionario tiene 3 valores





#------------------------------------------------------------------------------------------------------------------





#_____¿Como obtener los items de un  dictionarie?_____
# Los items son la informacion guardada asociada en las llaves
# En este caso, esta funcion me deberia devolver los items junto con sus respectivas keys. Cada conjunto de key-item esta dentro de una tupla separandolo de otro conjunto. Y todo eso a su vez etro de un [ ]

producto = { "nombre"   :  "libro",              
             "cantidad" :  3,
             "precio"   :  4.99                  
             }

print (producto.items())





#------------------------------------------------------------------------------------------------------------------





#_____Limpiar la informacion almacenada adentro de un dictionarie:_____

producto = { "nombre"   :  "libro",              
             "cantidad" :  3,
             "precio"   :  4.99                  
             }

producto.clear()
print (producto)                           # Al quitar todos los valores, solamente me tendria que aparecer {}





#------------------------------------------------------------------------------------------------------------------





#_____Eliminar un diccionario completamete:_____

producto = { "nombre"   :  "libro",              
             "cantidad" :  3,
             "precio"   :  4.99                  
             }

del (producto)
#print (producto)                          # Me apareceria un error, ya que no se puede imprimir algo que no existe 





#------------------------------------------------------------------------------------------------------------------





#_____ELIMINAR UNA CLAVE ESPECIFICA DE UN DICIONARIO:_____

producto = { "nombre"   :  "libro",              
             "cantidad" :  3,
             "precio"   :  4.99                  
             }

del (producto["precio"])
print (producto)





#------------------------------------------------------------------------------------------------------------------





#_____Agrupar diccionarios adentro de una lista:_____

producto = [{"nombre" : "libro", "precio" : 4.99},
            {"nombre" : "mouse", "precio" : 24.99},
            {"nombre" : "smartphone", "precio" : 500}
            ]
print (producto)





#------------------------------------------------------------------------------------------------------------------





#_____AGREGAR VALORES DE UNA TUPLA A UN DICCIONARIO_____

mi_tupla = ["España", "Francia", "Reino Unido", "Alemania"]
mi_diccionario = {mi_tupla[0]:"Madrid", mi_tupla[1]:"París", mi_tupla[2]:"Londres", mi_tupla[3]:"Berlín"}

print (mi_diccionario)




#------------------------------------------------------------------------------------------------------------------





#_____GUARDAR UNA TUPLA DENTRO DE UN DICCIONARIO:_____

jugador_nba = {"Nombre"  : "Michael",
               "Equipo"  : "Chicago",
               "Numero"  : 23,
               "Anillos" : [1991, 1992, 1993, 1996, 1997, 1998]
              }

print (jugador_nba["Anillos"])





#------------------------------------------------------------------------------------------------------------------





#_____GUARDAR UNA DICCIONARIO DENTRO DE UN DICCIONARIO:_____

jugador_nba = {"Nombre"  : "Michael",
               "Equipo"  : "Chicago",
               "Numero"  : 23,
               "Anillos" : {"Temporadas" : [1991, 1992, 1993, 1996, 1997, 1998]}
              }

print (jugador_nba["Anillos"])