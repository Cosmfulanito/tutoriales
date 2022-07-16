

# Este programa sirve para crear un promedio de todos los valores que agregue.
# El reto fue determinarle al programa cuando es que termino de ingresar numeros para que este cree el promedio total de los valores ingresados




print("\n------------")
print("  PROMEDIO  ")
print("------------\n")

print('Ingrese los numeros y precione la tecla "enter".')
print('Una vez finalizado, presione la tecla "s" (stop) para crear el promedio.\n')


while True:


    lista = []


    while True:                                                     # Crea un bucle para ingresar numeros a la lista de forma continua, este buble se detendra solamente cuando aprete la tecla "s" (stop)
        try:                                                        # En caso de que agregue una letra que no sea una "s". Me saltara un error. Para evitar eso puse esta linea dee codigo
            numero = str (input("\nIngrese un numero: "))           # Utilice un str() y no un int() o float() porque quiero parar de ingresar numeros y que me de el promedio total una vez ingresada la tecla "s"
            if numero == "s" :
                break
            else: 
                numero = float(numero)                              # Convierte a los string en verdaderos numeros       
                lista.append(numero)                                # Esta palabra reservada agrega los numeros a la lista                  
        except:
            print("\n --Valor no valido, vuelva a ingresarlo--")


    sumatoria = 0
    for i in lista:                                                
        sumatoria += (i)                                    # Recordar que "i" es la iteracion (el espacio de la lista donde se guarda su respectiva informacion). Y que (i) es la verdadera informacion que esta guardada dentro de su respectiva iteracion                       

    promedio = sumatoria / len(lista)                       # len() me dice la cantidad de valores que hay en una lista


    promedio = str(promedio)                                # Por causa del float() los numeros enteros terminan con .0 y eso es antiestetico, con esto lo arrego. Pero antes tengo que convertir los numeros a "string".
    if promedio.endswith (".0") :                           # Traducido al español seria. Sí promedio termina con .0 ...
        promedio = promedio.replace (".0", "")              # Esto reemplaza el .0 por lo que esta adentro del "". Osea que lo quita y no le pone nada

    print ("\nEl promedio total es: " , promedio , "\n")
    print ("----------------------------------")