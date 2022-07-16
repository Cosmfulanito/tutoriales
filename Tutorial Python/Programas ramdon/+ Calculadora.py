
# Me falta agregar las raices

while True:
    
    try:

        #Calculadora:
        print ("\n")
        calculadora = (eval (input("Ingrese su cuanta: ")))   # eval(input()) funciona como un input, con la diferencia de que no guarda el texto tal cual como lo hace el input(), sino que a su vez lo calcula en caso de ser una cuenta
                                                              # Ej:  eval (input (5+5)) ---> 10        input(5+5) ---> 5+5            
                                                              # Esto es la calculadora, el esto son caprichos 

        #Quita los .0 que son a causa de usar el float:
        calculadora_str = str (calculadora)         # No quiero que aparezca el .0 de los numeros flotantes/decimales. Mi idea es pasarlo a string y pedirle que si los ultimos digitos son .0, borrarlos. Sin este capricho el codigo seria mucho mas corto 
        if calculadora_str.endswith(".0") :         # Traducido al español seria. Sí calculadora_str termina con .0 ...
            print ("\n" + "    Resultado: ", calculadora_str.replace (".0", ""))       # Esto reemplaza el .0 por lo que esta adentro del "". Osea que lo quita y no le pone nada
        else:
            print ("\n" + "    Resultado: ", calculadora_str)


    except:
        print ("\n    Valor no valido")

