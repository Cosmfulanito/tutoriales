
# Funciones: 
# Es basicamente guardar una porcion de codigo en una simple y pequeña funcion creada por mi que puedo llamar cuando quiera

# Ejemplo de funciones propias phython:

print ("Nikin")
dir ("x")
type (15)




# CREAR UNA FUNCION PROPIA:
def hola():                          # Mediante def, puedo crear una funcion. 
    print ("Hello word")             # No confundirse. Esta funcion solo se ejecutara solo cuando la llame. Como se mostrara mas abajo

hola()                               # Hora mismo se esta ejecutando. Por ende se escribira "Hello word"
                                     # Como se puede apreciar, usando la funcion hola() puedo acceder a las linias de codigo de arriba las veces que quira



#------------------------------------------------------------------------------------------------------------------




# INGRESAR INFORMACION DENTRO DE LOS PARENTESIS DE LA FUNCION RECIEN CREADA:
def saluda(nombre) :                              # Ademas de crear la funcion saluda, tambien creamos la variable nombre, que sera usada mas abajo.
    print ("Holisss", nombre)

saluda ("Gustabo")
saluda ("Marcelo")


# Si no ingreso ningun tipo de dato dentro dentro de los parentesis en este tipo de casos donde se me pide que ingrese un valor, voy a producir un error
#saluda ()               # Como ingrese nada adentro de los parentesis, me sale un error


# Una forma de evitar este error diciendole al programa que si no hay un dato adentro, que escriba otra cosa:
# Esto se llama "Parametro por defecto"
def holiwi(name="Señor/a") :                   # En caso de cuando llame a la funcion y cometa e error de no ingresar un nombre, se escribira Señor/a
    print ("Buenas tardes,", name)

holiwi ("Fabian")
holiwi ()




#------------------------------------------------------------------------------------------------------------------




# COMBINAR LO ANTERIOR CON UN input():
def ciudad (palabra):
    print ("La mejor ciudad del mundo es: ", palabra)                 # Hasta aca todo es tal cual lo veniamos viendo

algo = input ("Ingrese el nombre de una ciudad: ")                    # Hago que la variable algo me guarde informacion de lo que escriba en el input()
ciudad (algo)




#------------------------------------------------------------------------------------------------------------------




# RETORNAR UNA FUNCION:
def suma (numero_uno,numero_dos):
    return numero_uno + numero_dos                      # Cuando cree una funcion con el def, la cual haga un calculo matematico y nesecite que me "guarde" el resultado y luego cuando le pida lo "retorne"/devuelva para luego usarlo como se me antoje. Para eso uso el return escribiendolo como ultima linia de codigo
                                                        # Basicamnte si no existiera el return, adelante de esa ecuacion tendria que declarar una variable y ponerle un igual. Pero eso no tendria sentido, por ende existe el return que sirve de variable para guardar esa ecuacion
                                                        # Ahora tengo una funcion que me calcula el promedio con tan solo agregar dos numeros en los parentesis
print (suma(5,2))                                       # Me tendria que dar 7


# Digamos que quiero ingresar numeros con el teclado usando esa misma funcion recien creada:
a = int (input ("Ingrese un numero: "))
b = int (input ("Ingrese un segundo numero: "))
print (suma(a,b))




#------------------------------------------------------------------------------------------------------------------



# FUNCION lambda:
# Son funciones anonimas que toman un numero de argumentos, pero solo puede ser escrita en una sola linea de codigo

sumatoria = lambda number_one, number_two: number_one + number_two            # La funcion se llama sumatoria, toma dos parametros y luego los suma. Todo esto en una sola linea de codigo y sin usar return
                                                                              # Basicamente es exactamente igual que todo lo anterior ya visto
print (sumatoria(10,20))             # Me tendria que dar 30
