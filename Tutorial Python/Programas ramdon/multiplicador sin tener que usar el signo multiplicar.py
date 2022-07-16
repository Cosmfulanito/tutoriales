# Como lo dice el titulo, para hacer este programa tengo que ingeniarmelas para hacer un programa que multiplique sin tener que usar en ningun momento el simbolo de mutiplicacion
# La forma correcta de hacer este programa es la segunda, pero con la primera entiendo la logica


# Primer intento: Forma incorrecta
# Aca no respete la consigna y programe con el simbolo de multilicar
"""
while True:

    a = int (input ("Ingrese el primer numero: "))
    b = int (input ("Ingrese el segundo numero: "))
    c= 0
    negativo = False          # Esta variable la voy a usar mas adelante

    if b < 0 :                # Si b es un numero negativo tengo problemas para aplicar el range() en el for. Por ende tengo que convertilo a positivo, logro esto multiplicandi dicho numero negativo por -1
        b = b * -1
        negativo = True       # Esta se da cuando el numero es negativo, la cree para usarla mas adelante
    
    for i in range (b) :      # Aca hago un rago de numeros que van va a ocupar las casillas de una lista. Recordar que cada casilla es una repeticion en el bucle for
        c += a

    if negativo == True:      # Por un problema con el for, tube que transformar los numeros negaticvos en positivos. Pero eso hace que las multiplicaciones siempre den positivas. para solucionar eso multiplico el numero por -1 para volverlo negativo  
        c = c * -1
        print ("Resultado:",c)
        print ("-----------------------------\n")

    else:
        print ("Resultado:",c)
        print ("-----------------------------\n")   
    
"""

# Segundo intento: Forma correcta
# Siguiendo exactamente la misma logica pero utilizando una funcion que combierte al numero en un valor absoluto. 
# Por ende no tengo que multiplicarlo por -1 y logro cumplir con la consigna


while True:
    a = int (input ("Ingrese el primer numero: "))
    b = int (input ("Ingrese el segundo numero: "))
    c = 0
    positivo = True        # Cree esta variable para usarla mas tarde
                            # Si b es un numero negativo tengo problemas para aplicar el range() en el for. Por ende tengo que convertilo a positivo, esto se resuelve mas adelante utilizando la funcion abs()
    if b < 0 :             
        positivo = False     # Si el numero es positivo, para logar la multiplicacion tengo que "sumar" a x veces. Si es negativo temgo que "restar" a n veces. Esta variable me determina si b es positivo o negativo para hacer eso mas adelante.

    b = abs (b)       # Esto me da el valor absoluto de un numero, basicamente es el modulo de un numero que nos enseñaron en la escuela

    if positivo == True :
        for i in range (b) :
            c += a

    else: 
        for i in range (b) :
            c -= a

    print (c)
    
     




