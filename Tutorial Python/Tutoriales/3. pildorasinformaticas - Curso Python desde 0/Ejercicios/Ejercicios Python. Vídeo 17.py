
print ("Ejercicio 1:")
# Crea un programa que pida números infinitamente. Los números introducidos deben ser cada vez mayores El programa finalizará cuando se introduce un número menor que el anterior.
# (Funciona correctamente)

numero_uno = int (input ("Ingrese un numero: "))
numero_dos = int (input ("\nIngrese un numero mas grande que " + str(numero_uno) + ": "))

while numero_dos > numero_uno :
    print ("\nCorrecto!")
    numero_uno = numero_dos
    numero_dos = int (input ("\nIngrese un numero mas grande que " + str(numero_uno) + ": "))
    
print ("\nDevio ingresar un numero mayor. Adios master\n")









print ("Ejercicio 2:")
# Crea un programa que pida números positivos indefinidamente. El programa termina cuando se introduce un número negativo. Finalmente el programa muestras la suma de todos los números introducidos
# (Funciona correctamente)

numero = int (input ("Solamente ingrese numeros positivos: "))
sumatoria = 0

while numero >= 0 :
    sumatoria += numero
    print ("\nBien\n")
    numero = int (input ("Vuelva a ingresar un numero positivo: "))

print ("\nDevio ingresar un numero positiv. Esta es la suma total de los numeros ya ingresados:", sumatoria, "\n")


