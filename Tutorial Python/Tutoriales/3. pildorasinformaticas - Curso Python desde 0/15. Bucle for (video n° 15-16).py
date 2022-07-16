

# for 

# Este es un bucle que me permite hacer barias cosas de las cuales destacan 2:
    # Imprimir los datos de una lista.
    # Repetir una orden las veces que yo quiera.
# El for en python tiene la caracteristica de que se escribe diferente a los demas lenguajes de programacion. 
# Por eso puede resultar raro implementarlo por primera vez si ya se tiene experiencia en otros lenguajes

# El bucle for esta compuesto por 3 partes:
    # 1. Palabra reservada for, seguido de de una variable. Por convencion se pone una letra i de "indice" (Ya que lee el indice de una lista). Aunque cualquier otra variable es igual de valida
    # 2. Palabra reserbada in, seguido de un cuerpo a recorrer (lista, tupla, cadena de texto, etc.) y dos puntos (:).
    # 3. Dentro del bucle for (Osea, abajo y un tab. Tambien llamado "identacion"), va el cuerpo del bucle. Son las linias de codigo que van adentro del bucle, que seran repetidas un numero determinado de veces.


for i in [1, 2, 3] :                # Hay 3 valores por ende me va a repetir el bucle 3 veces
    print ("Hola mundo")            # Me deberia impimir 3 veces "Hola mundo"






for i in ["tomate", "papa", "fideos"]  :     # Aqui ocurre lo mismo, en el indice hay 3 valores, por ende me va a repetir "Holiwis" 3 veces.                
    print ("Holiwis")





compras = ["tomate", "papa", "fideos"]       # Esto funciona exactamente igual que el ejemplo anterio, solo que uso una lista ya declarada
for i in compras :                        
    print ("Holi Nikinnn")







#------------------------------------------------------------------------------------------------------------------




#_____Imprimir los valores que tengo en la lista:_____")
# Esto se logra con el print (i). Ya que la variable i dentro de un bucle for, representa el indice de la lista, y por ende imprimiria dato alojado en dicho indice numerico
# En este caso declare la variable como i, pero si lo hago con otro nombre obiamente adentro del print() voy a tener que poner esta otra variable en vez de i
compras = ["tomate", "papa", "fideos"]     
for i in compras :                        
    print (i)




#------------------------------------------------------------------------------------------------------------------




#_____Imprimir los valores en horizontal:_____
compras = ["tomate", "papa", "fideos"]     
for i in compras :                        
    print (i, end=" ",)                 # El end=" "  une los datos que estan en la lista. Las comillas tienen que estar separadas por un espacio que de esta manera los datos imprimidos tambien esten separados por un "espacio". Tambien se puede ingresar cualquier otra palabra o numero para que sea impresa entre los datos de la lista en vez del "espacio" 


print ("")                              # El end=" "  une lo que esta arriba con lo que esta abajo. Por ende me va a unir tambien el codigo que tengo abajo. Para evitar eso, uso un prin("") (que no contiene nada) para que lo una.




#------------------------------------------------------------------------------------------------------------------




#____Imprimir algo segun la cantidad de "caracteres" que tenga el dato:_____
# Esto se logra poniendo un numero o un strig en lugar de una lista. Lo que ocurre es que el print() se va a ejecutar tantas veces como caracteres tenga el dato de arriba
compras = "tomate"                    # Tomate tiene 6 caracteres/letras, por ende me va imprimir "Hola mundo" 6 veces.  
for i in compras :                        
    print ("Hola mundo")              




#------------------------------------------------------------------------------------------------------------------





#_____Repetir una orden especificamente las veces que yo quiera:_____
# Repetir una orden:
for i in range (5) :                                # Ahora deveria imprimirme "Nikin" 5 veces.
    print ("Nikin")


# Repetir el valor de una variable o del indice: 
for i in range (5) :                                # Me va a imprimir del 0 al 4. Devido a que cuenta a partir del 0 y siempre pone uno de menos
    print (i)



#------------------------------------------------------------------------------------------------------------------




#_____Concatenar/unir el valor de la variable con un texto:_____
for i in range (5) :
    print (f"El valor de la variable es {i}")           # La variable notacion f me permite concatenar el texto con la i o variable. Dicha i o variable tiene que estar entre llaves {} y dentro de las comillas del string y la f 




#------------------------------------------------------------------------------------------------------------------




#_____Imprimir desde un indice especifico hasta otro indice especifico_____
# Se logra agregando un segundo valor al range
for i in range (50, 60) :                               #  Ahora va a contar desde el 50 hasta el 59 (debido a que siempre cuenta uno de menos)                 
    print (i)




#------------------------------------------------------------------------------------------------------------------




#_____Imrimir pero haciendo saltos de tanto en tanto_____
# Se logra agregando un tercer valor al range
for i in range (0, 31, 3) :                             # Ahora tendria que contar desde el 0 hasta el 30, de 3 en 3. Osea: 0, 3, 6, 9, 12, 15, ... 27, 30
    print (i)




#------------------------------------------------------------------------------------------------------------------



"""

#_____Ejercicio:_____
# Debo crear un porgrama que verifique si el texto ingresado es un mail valido utilizadoel bucle for
# Para ello solamente tengo que chequear si en dicho string hay un @. 
# Esto lo copie tal cual del tutorial:            


# Metodo 1:

#email = False                                                # Declare una variable booleana con un False guardado
                                                              # Si tengo esta linea de codigo desactivada igual funciona
                                                              # Me hace ruido que exista, ya que a pesar de declaralo como boleano eso se borra con el imput() de abajo que me lo combierte en un string(). Es como escribir esta linea de codigo al pedo
                                                              # O por lo menos asi lo entiendo yo, igual apenas estoy arrancando y no se un choto 
                                                              # Recien probe poniendo un str() sobre el input y sigue como si nada

mail = input ("Ingrese su mail: ")

for i in mail :                                               # Esto lee el string que le mande indice por indice y por lo tanto letra por letra.
    if i == "@" :                                             # Si un indice llega hasta un "@" se activa el if.
        mail = True                                           # Una vez que se activa el if, la variable mail pasa a ser True.

if mail == True :                                             # Si la variable mail es True imprime este mensaje
    print ("Entendible, tenga un buen dia.")
else:                                                         # De lo contrario, imprime este otro
    print ("Cuchame una cosa, master. Eso no es un mail")       
    
    




# Metodo 2:

valido = False

email = input ("Introduce tu email: ")

for i in range (len (email)) :                               #len(email) devuelve 4 (las 4 letras de email).      range me devuelve cuatro elementos: [0, 1 , 2, 3]         Esto hace que haga 4 vueltas de bucle, chequendo 4 veces si la palabra tiene un @
    if email[i] == "@" :
        valido = True

if valido :
    print ("Email correcto")
else:
    print ("Email incorrecto")




"""





