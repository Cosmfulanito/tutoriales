

# Este tutorial es una continuacion del archivo "7.Modules.py"


# CREAR MI PROPIA BIBLIOTECA:
# Lo interesante de esto es que voy a poder llamar a este modulo desde cualquier otro archivo!!!!!

# Se le llama "modulo" a la funcion creada que vamos a llamar desde otro archivo. Y biblioteca al archivo donde fueron creados dichos modulos.
# Tener en cuenta que para crear una biblioteca/modulo, el archivo NO tiene que tener numeros o puntos en el nombre! (salvo por .py, obvio)
# Tambien, para que esto funcione, tanto el archivo donde fue creado el modulo como el archivo que lo llama, tienen que estar en la misma carpeta. Incluso en esa carpeta sera creado automaticamente un archivo que permite llamar a dicho modulo una vez que se lo llame por primera vez, llamado _pycache_
# Como el archivo archivo anterior "7.modules" contiene por nombre un numero y un punto, no pudo ser utilizado para esta parte del tutorial.
# Devido a esto, se creo este mismo archivo "crea_modulos" y "usar_modulos" para continuar con el tutorial



# Basicamente creamos una funcion como se explico en el tutorial "Funciones.py" y ya esta.
# En este caso cree 3 funciones diferentes.

def sumatoria (n1,n2):
    return n1 + n2

def resta (n1, n2):
    return n1 - n2

def promedio (n1, n2):
    return (n1 + n2)/2


# Recordar que para poder llamar estas funciones como se haria en una "biblioteca", solamente es posible en un archivo diferente al creado. Por ende, se creo el archivo "usar_modulos" para continuar con este tutorial




