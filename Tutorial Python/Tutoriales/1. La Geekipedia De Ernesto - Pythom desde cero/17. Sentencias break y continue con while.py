

# break:
# Escribir esta sentencia finaliza automaticamnte cualquier bucle, incluido el while True.

numero = 0

while numero < 10:                             
    numero += 1                       # Acabo de crear una funcion que va a escribir numeros hasta el 10
 
    if numero == 5:                
        break                         # Con esta funcion anidada, corto con este bucle en el numero 5 cuando tendria que hacerlo en el 10 
    
    print (numero)




#-----------------------------------------------------------------------------------------------------------------




# continue:
# Escribir esta sentencia hace que vuelva hacia el inicio del bucle. Esto hace que no se lea todo lo que esta por debajo de esta linea de codigo

numero = 0

while numero < 10:                             
    numero += 1                       # Acabo de crear una funcion que va a escribir numeros hasta el 10
 
    if numero == 5:                
        continue                      # Con esta funcion anidada vuelvo al principio del bucle while. Esto probaca que no se lea las lineas decodigo que estan por debajo de del continue
                                      # Por ende, cuando se ejecute este programa, no se va a imprimir el numero 5 porque nunca se leyo la linea de codigo print(numero)
    print (numero)


