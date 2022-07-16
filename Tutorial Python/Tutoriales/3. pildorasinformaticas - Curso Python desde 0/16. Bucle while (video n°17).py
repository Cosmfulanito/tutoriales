

# while.

# El el while es un bucle que funciona igual que una condicon if
# Esto significa que mientras se siga dando la funcion, el bucle va a seguir funcionando. Solo se detendra cuando la condicion sea falsa (tener en cuenta esto ultimo porque por un error podria probocar un bucle infinito y el programa no leeria el resto del codigo ya que estaria atrapado en dicho bucle)


numerin = 5

while numerin <= 10 :            # Basicamente este programa lee si el numero que ingrese es igual o menor que 10. De ser afirmativo/True entra en el ciclo siguiendo el instructivo de abajo, el cual es imprimir dicho numero y sumarle 1 a la variable. Este siclo se acabara cuando el numero sea mayor a 10
    print (numerin)
    numerin += 1




# Ejemplo 1 de un bucle while mal aplicado y por ende infinito:
"""                              # si se ejecuta este codigo no se podra acceder al resto de los apuntes
numerin = 5

while numerin <= 10 :            # Como ahora no sumo ningun numero a mi variable, esta va a ser siempre igual a 5. Y por ende siemnpre va a ser menor o igual a 10. Esto hace que mi programa este en un bucle infinito donde no para de imprimirse "5"
    print (numerin)              
"""
# Ejemplo 2 de un bucle while mal aplicado:
"""
numerin = 5                      # En este caso, la condicion dice que el bucle while se ejecutara mientras el numero sea menos a 10 y que a su vez a dicho numero se le sera restado 1. Por ende dicho numero nunca lograra crecer hasta 10 para detener el bucle, al contrario, decrecera de forma infinita
                                  
while numerin < 10 :            
    print (numerin)
    numerin -= 1
"""


# Programa que estringe la edad:

# Hecho por mi:
# (Yo ta tenia conocimiento acerca del while True: antes de llegar a esta parte del tutorial)
"""
while True:

    edad = int(input ("Introduzca su edad: "))
    if edad < 18 :
        print ("No puede ingresar a esta paguina") 
    else:
        break

print ("Bienvenido")
print ("La edad del usurio es de", edad, "años")
"""

# Hecho por el profesor:
# El del profesor tiene menos lineas de codgo. El que sabe, sabe
"""
edad = (int (input ("Introduce una edad: ")))
while edad < 18 :
    print ("Edad no valida, vuelve a intentarlo") 
    edad = (int (input ("Introduce una edad: ")))
    
print ("Bienvenido")
print ("La edad del usurio es de", edad, "años")
"""


# Como hacer para que un bucle deje de ser infinito
# Basicamente evitar que el usuario ponga siempre mal la edad como en el ejercicio anterior

import math                    # Llama a la libreria math. Osea que la puedo usar

input ("Programa de calculo de raiz cuadrada")

numero = int (input ("Introduce un numero, pero recuerda, solo tienes 3 intentos si pones un numero negativo: "))

intentos = 0

while numero < 0 :
    print ("No puedes hallar una raiz con un numero negativo ")
    if intentos == 2 :
        print ("Haz usado demaciados intentos. El programa ha finalizado")
        break

    numero = int (input ("Introduce un numero"))
    if numero < 0 :
        intentos = intentos + 1

if intentos <= 2 :
    solucion = math.sqrt(numero)      #Esto hace una raiz cuadrada con el numero ingresado
    print ("La raiz  cuadrada de", numero, "es", solucion)


