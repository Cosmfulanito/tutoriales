

#_____in:_____
# Se utiliza para aclarar que estamos habando de un valor que esta "dentro" (in) en una lista especifica, no de cualquier otra.


# Vamos a hacer un programa donde un alumno tiene que eleguir materias optativas que estan dentro de una lista.
# Una vez eleguidas las materias, estas les seran mostradas al alumno.
# Si el alumno eligue una materia que esta fuera de esa lista, el programa señalara el error.
# Las materias obtativas que puede eleguir son unicamente de de Ciencias Biologicas.



# Primer metodo:

print ("\nMaterias Cs. Biologuicas:    Anatomia, Biogeografia, Bioinstrumentacion" )
print ("Materias Abogacia:           Leyes, Codigo penal, Salarial")


eleguir = input ("\nEligue una materia de la carrera Cs. Biologicas: ")


if eleguir in ("Anatomia", "Biogeografia", "Bioinstrumentacion") :
    print ("Usted ingreso:", eleguir)
else:
    print ("Esta materia no pertenece a la carrera de Ciencias Biologicas")









# Segundo metodo:
# Creando una lista fuera del if

print ("\nMaterias Cs. Biologuicas:    Anatomia, Biogeografia, Bioinstrumentacion" )
print ("Materias Abogacia:           Leyes, Codigo penal, Salarial")


materias_optativas_biologia = ["Anatomia", "Biogeografia", "Bioinstrumentacion"]
materias_optativas_abogacia = ["Leyes", "Codigo penal", "Salarial"]


eleguir = input ("\nEligue una materia de la carrera Cs. Biologicas: ")


if eleguir in materias_optativas_biologia :
    print ("Usted ingreso:", eleguir)
else:
    print ("Esta materia no pertenece a la carrera de Ciencias Biologicas")







