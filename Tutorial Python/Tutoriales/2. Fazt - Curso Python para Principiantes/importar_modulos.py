

# Este tutorial es una continuacion del archivo "crea_modulo".




# LLAMAR UNA BIBLIOTECA CREADA POR MI:
# Se le llama "modulo" a la funcion creada que vamos a llamar desde otro archivo. Y biblioteca al archivo donde fueron creados dichos modulos.
# Tener en cuenta que tanto el archivo donde fue creado el modulo como el archivo que lo llama, tienen que estar en la misma carpeta. Incluso en esa carpeta sera creado automaticamente un archivo que permite llamar a dicho modulo una vez que se lo llame por primera vez, llamado _pycache_

# Para llamar a un modulo creado por nosotros. Primero tenemos que llamar al archivo donde fue creado de la misma manera que llamamos a una biblioteca propia de Python, luego llamamos al modulo/funcion de la misma manera que se aprendio en el archivo "7.Modules"

import crea_modulos


print (crea_modulos.sumatoria (5,10))

print (crea_modulos.resta (10,7))

print (crea_modulos.promedio (50,100))







# Tambien es valida la otra de forma de llamar a una libreria que ya vimos anterirmente en el archivo "7.Modules"

from crea_modulos import sumatoria, resta, promedio     # En este caso, le pido especificamente que modulos importar de la libreria crea_modulos


print (sumatoria (20,20))

print (resta (25, 10))

print (promedio (1000,1500))







