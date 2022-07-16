


palabrin = "Hello word"




#---------------------------------------------------------------------------------




print (dir (palabrin))                     # La funcion dir () me permite saber las propiedades y los metodos de la funcion que tiene adentro. Basicamente me muestra las palabras claves que pueden ser utilizadas en dicha variable




#---------------------------------------------------------------------------------





print (palabrin.startswith("Hello"))       # Chequea si la primera palabra comienza con lo que esta entre parentesis, devolviendome un True o un False. Ej:   palabra = "Hello word"  --->  print (palabra.starwith ("Hello")) ---> True


# Ejercicio donde si escribo una oracion que comience con "Hello", me escriba "waka" (?)
while True:

    palabrin = input ("Escriba aqui una oracion: ")

    if palabrin.startswith("Hello") :
        print ("waka")
    else:
        print ("Eso no es Hello")



#---------------------------------------------------------------------------------







