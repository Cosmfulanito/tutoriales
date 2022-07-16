print ("\nPrograma de evalucacion de examenes.\n")

def debaluacion (nota):
    if nota < 0 or nota > 10 :
        valoracion = "Numero no valido"    # No pongo print() porque tal vez quiera hacer otra cosa con ese dato en vez de imprimirlo. Si mas adelante lo imprimo es otra cosa, pero así tengo mas caminos abiertos
    elif nota >= 7 and nota <= 10 :
        valoracion = "Promocionado"
    elif nota >= 4 and nota < 7 :
        valoracion = "Aprobado"
    elif nota >= 0 and nota < 4 :
        valoracion = "Desaprobado"
    return  valoracion               # Este es el valor que me debe devolver la funcion cuando la ejecute mas adelante


nota = float (input ("Ingrese la calificacion: "))

print (debaluacion (nota))
