

# EJERCICIO 1:
#Crea un programa que pida dos números por teclado. El programa tendrá una función
#llamada “DevuelveMax” encargada de devolver el número más alto de los dos
#introducidos.

def DevuelveMax (n1,n2) :
    if n1 > n2 :
        numero_mayor = n1
    elif n2 > n1 :
        numero_mayor = n2
    else:
        numero_mayor = "Ambos numeros son iguales"
    return numero_mayor

n1 = int (input ("Ingrese el primer numero: "))
n2 = int (input ("Ingrese el segundo numero: "))

print ("El numero mas grande es:", DevuelveMax(n1,n2))





#------------------------------------------------------------------------------------------------------------------




# EJERCICIO 2:
# Crea un programa que pida por teclado “Nombre”, “Dirección” y “Tfno”. Esos tres datos
# deberán ser almacenados en una lista y mostrar en consola el mensaje: “Los datos
# personales son: nombre apellido teléfono” (Se mostrarán los datos introducidos por
# teclado).

nombre = input("Ingrese su nombre: ")
direccion= input("Ingrese su direccion: ")
telefono = input("Ingrese su telefono: ")

lista = [nombre, direccion, telefono]

print ("Los datos personales son:","", "Nombre: " + lista[0], "", "Direccion: " + lista[1], "", "Telefono: " + lista[2]) # Esos "" y + son para jugar con la cantidad de espacios, que tipo codigo spagetti pero que se le va a hacer




#------------------------------------------------------------------------------------------------------------------




# EJERCICIO 3.
# Crea un programa que pida tres números por teclado. El programa imprime en consola
# la media aritmética de los números introducidos.

n1 = int (input ("Ingrese el primer numero: "))
n2 = int (input ("Ingrese el segundo numero: "))
n3 = int (input ("Ingrese el segundo numero: "))

promedio = (n1 + n2 + n3) / 3

print ("La media aritmetica (promedio) es:", promedio) 
