
# Programa que simula dados.

#//////// REVISAR POR QUE NO PUEDO PONER ESAS DOS LINIAS DEL IF ARRIBA MAS ARRIBA DEL TODOO
  

import random

enter = input ('Precione la tecla "enter" para tirar el dado:')     # Esto no esta conectado con nada en el codigo, es un paso extra que puse para llegar al resultado del dado. "Para que se sienta que estoy tirando los dados"
                                                                    # Tranquilamente podria quitarlo o ponerlo al principio y daria igual 

while enter == enter:                                   # Si la condicion que pongo es que el valor que ponga sea exactamnte el valor que ponga, me da como resultaldo un True ponga lo que ponga y por ende entro al bucle while.
        d6 = list (range(1,7))                          # Estas dos lines de codigo tendrian que estar arriba, pero por algun motivo solo funcionan si las pongo abajo del if...
        d6_ramdon = random.choice (d6)

        print ("\n                 .:: ",d6_ramdon," ::.\n")
        enter = input ('\nPrecione la tecla "enter" para tirar el dado:')






