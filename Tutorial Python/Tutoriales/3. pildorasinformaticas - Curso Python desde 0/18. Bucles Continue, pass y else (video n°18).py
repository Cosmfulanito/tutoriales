

# _____continue:_____
# Escribir esta sentencia hace que vuelva hacia el inicio del bucle. Esto hace que no se lea todo lo que esta por debajo de esta linea de codigo

numero = 0

while numero < 10:                             
    numero += 1                       # Acabo de crear una funcion que va a escribir numeros hasta el 10
 
    if numero == 5:                
        continue                      # Con esta funcion anidada vuelvo al principio del bucle while. Esto probaca que no se lea las lineas decodigo que estan por debajo de del continue
                                      # Por ende, cuando se ejecute este programa, no se va a imprimir el numero 5 porque nunca se leyo la linea de codigo print(numero)
    print (numero)




# Ejercicio:
# Quiero poder ingresar un texto y que se cuenten las letras que hat dentro
# El problema a solucionar es que el "espacio" tambien cuenta como un caracter y yo solo quiero las letras
# Solucionar este inconveniente aplicando el continue.

texto = "Un gatito subio al arbor"            # Hay un total de 20 letras sin contar los espacios

letras = 0

for i in texto :                 # Basicamente va a contar caracter por caracter y al final del bucle por cada caracter va a sumar una unidad a la variable "letras"
    if i == " " :                # Si un caracter es un "espacio". Se vuelve al inicio del bucle, santando la linia de codigo "letras += 1". Por ende, no se me sumara una unidad a la variable "letras"
        continue
    letras += 1

print (letras)




#------------------------------------------------------------------------------------------------------------------




# _____pass:_____
# Basicamente devuelve un "nule". Un nulo (nada de informacion)
# oon muy contadas las veces que se utiliza.

# Ejemplo 1:
while True :
    pass            # Esto mantiene al programa en bucle hasta que el usuario apriete "Ctrl + c". Esta convinacion de teclas lo que hace es salir de un bucle infinito
                    # Investigar más de esto


#Ejemplo 2: 
class Miclase :     # Acabo de crear una clase. Investigar que carajo es esto porque el profesor lo puso de la nada sin mostrarlo anteriormente
    pass            # Gracias a este pass, esta clase no guarda informacion. Supongo que sirve como el # en estos casos. Como para dejar el trabajo a medias para completar más tarde





#------------------------------------------------------------------------------------------------------------------




# _____else:_____
# Importante. Este else no va a estar a la altura del if, sino a la altura del bucle for
# Cuando se utiliza de esta manera, el else no se ejecuta hasta que se leyo toda la informacion almacenada del bucle for
# La unica manera que no se ejecute el "else" es haciendo que el for no lea toda la informacion. Para eso utilizamos el "break"

email = input ("Introduce tu email: ")         # Este programa chequea que el email ingresado tenga un @
                                               
for i in email :
    if i == "@" :
        arroba = True
        break                                  # Una vez se encuentre el @ en dicho texto, se ejecuta el "break" haciendo que no se siga leyendo la parte faltante del texto alojado en el for. Si la informacion del "for" no se lee completamente, no se ejecuta el "else". Y con eso consigo que el True del if no se combierta en False por culpa del "else".  
else:                                          # El else se ejecutara siempre y cuando el bucle for pueda leer completamente el texto. Para ello no se tiene que ejecutar el "break" del if. 
    arroba = False

print (arroba)










