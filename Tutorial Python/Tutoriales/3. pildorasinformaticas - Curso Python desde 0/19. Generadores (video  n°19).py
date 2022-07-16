

#_____Generadores:_____

# Los generadores son funciones que en vez de devolverme todos los valores juntos. Me los va dando de uno en uno a medida que voy volviendo a llamar al generador
# Por ejemplo, quiero hacer un programa que me solamente me devuelva los numeros "par" del cero al 10. Una foncion normal me daria todos los numeros en un solo momento. En cambio un generador me daria solamente el numero 2 y para que me devuelva el 4 tendria que volver a ejecutarlo. Y asi seguidamente con el resto de los numeros faltantes

# La unica diferencia entre una funcion y un generador, es que la funcion utiliza el "return" y el generador el "yield"
# Ademas del yiel, los generadores cuentan con el metodo "next()". Que nos brinda el primer numero. Si escribimos una segunda linia de codigo con dicho metodo, nos daria el segundo numero y asi seguidamente
# De esta manera se generan los numeros de uno en uno y la computadora gasta menos recursos que crear toda la lista entera de la nada
# Esto es util si quiero hacer una lista de numeros infinitos y no quiero que me los cargue todos juntos en un solo momento realentizandome la computadora




# Ejemplo de una funcion tradicional ya vista que genera numeros pares:

def numero_par_funcion():

    numero = 1
    mi_lista = []
    while numero <= 10 :
        par = numero % 2
        if par == 0 :
            mi_lista.append(numero)       # Si el numero es par, lo guardo en esta lista
        numero += 1

    return mi_lista                       

print (numero_par_funcion ())









# Ejemplo de lo mismo pero aplicado como un "Generador":
# Las aplicaciones para esto serian mas grandes si se lo aplicara con un bucle for o while

def numero_par_funcion():

    numero = 1
                                               # Quite la lista porque no vamos a usarla
    while numero <= 10 :
        par = numero % 2
        if par == 0 :
            yield numero                       # Quite el return que es propio de las funciones y puse un "yield numero" para que la funcion numero se guarde ahí
        numero += 1

                      
devuelve_pares = numero_par_funcion ()         # Hago esto para poder aplicar el metodo "next"

print (next (devuelve_pares))                  # Next me devuelve el primer valor que tiene almacenado en su interior. Osea un 2

print (next (devuelve_pares))                  # Ahora me va a devolver el siguiente valor, que es un 4. Y asi seguidamente

# Las aplicaciones para esto serian mas grandes si se lo aplicara con un bucle for o while








# Esto es exactamente lo mismo que lo anterior, pero ahora esta lista es infinita y solo funciona apretando enter (o ingresando cualquier otro caracter)

def numero_par_funcion():

    numero = 1
                                               
    while numero >= 0 :
        par = numero % 2
        if par == 0 :
            yield numero                       
        numero += 1


devuelve_pares = numero_par_funcion ()         

iniciador = input ("Precione enter para iniciar: ")

while True :
    if iniciador == iniciador :            # Esto hace que cualquier caracter que ingrese (incluso un enter). Al ser igual a si mismo, se iniciaria el bucle while
        print (next (devuelve_pares))
        iniciador = input ()               # Esto hace que tenga que volver a precionar el enter para que se genere un nuevo numero. En realidad sin esto, se generarian automaticamente de forma infinita, pero con esto yo puedo controlarlo y que se generen de uno en uno. Basicamente, es un paso extra que solo se activa cuando yo presione enter






