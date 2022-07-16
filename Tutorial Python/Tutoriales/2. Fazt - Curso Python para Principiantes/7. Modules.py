

# Modules:

# Basicamente un modulo es un codigo ya programnado por un tercero que hace parte del trabajo por nosotros.
# De esta manera ahorramos muchisimo tiempo en programar algo que ya existe y que a su vez ya esta testeado y perfeccionado.
# Es simplemente una biblioteca
# Recordar que cada modulo tiene sus propias funciones y reglas que estan fuera del mismo lenguaje, la cuales uno mismo debe investigar para entender como funciona


# Hay 3 tipos de modulos:
#   Los modulos/bibliotecas de Python
#   El creado por nosotros mismos: Esto es importante ya que si yo tengo una aplicacion muy grande, yo puedo puedo dividir dicha aplicacion en modulos
#   El descargado desde internet 




#------------------------------------------------------------------------------------------------------------------





# Modulos de Phyton:
# Digamos que quiero crear una aplicacion que me muestre la fecha actual. 
# Por suerte Python tiene una biblioteca la cual ya tiene programado como acceder al sistema operativo de windows y chequearla

# Ej:
import datetime                 # Ahora puedo utilizar las funciones de la bibioteca datetine

# Quiero saber que fecha es hoy:
print (datetime.date.today())                 # Ahora se imprimira el año, mes y día actual. Gracias a estas funciones procedentes de la biblioteca datetime


# Quiero convertir los minutos a hora
print (datetime.timedelta(minutes=70))               # Me tendria que imprimir una hora con 10 minutos ya que eso lo que valen 70 minutos
 

# Otra forma de importarlo:
from datetime import timedelta                       # En español significa: Desde datetime, importa su metodo timedelta. 

print (timedelta(minutes=70))                        # Al importar su metodo timedelta, puedo recortar parte del codigo. ¿Por que? Porque mas arriba estoy diciendo que traiga directamente el metodo timedelta de la biblioteca datetime. Entonces ahora no tengo que especificar de donde viene



from datetime import timedelta, date                 # Tambien pudo agregar otros metodos más

print (date.today())




#------------------------------------------------------------------------------------------------------------------




# Modulos descargados desde internet:
# Una paguina para descargar modulos/bibliotecas/frameworks:   https://pypi.org/



#------------------------------------------------------------------------------------------------------------------




# Crear mi propio modulo/biblioteca
# Lo interesante de esto es que voy a poder llamar a este modulo desde cualquier otro archivo!!!!!

# Tener en cuenta que para crear un modulo, el archivo NO tiene que tener numeros o puntos en el nombre (salvo por .py, obvio)
# Tambien, para que esto funcione, tanto el archivo donde fue creado el modulo como el archivo que lo llama, tienen que estar en la misma carpeta. Incluso en esa carpeta sera creado automaticamente un archivo que permite llamar a dicho modulo una vez que se lo llame por primera vez, llamado _pycache_
# Como este mismo archivo "7.modules" contiene por nombre un numero y un punto, no se podra crear un modulo
# Debido a esto, para seguir con este apunte, ir al siguiente archivo de este tutorial: "crea_modulos" y luego a "importar_modulos".
# Se le llama "modulo" a la funcion creada que vamos a llamar desde otro archivo. Y biblioteca al archivo donde fueron creados dichos modulos.






