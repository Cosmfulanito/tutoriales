

/*


                                									_____Introducción_____

 - Para poder correr un programa en JavaScript tenemos que hacerlo desde la consola de nuestro navegador. Osea que primero tenemos que crear una pagina web en HTML 
   y este archivo .html asociarlo con nuestro archivo .js que es donde programaremos 
   en JavaScipt. 
 
 - Para poder ver nuestro programa de JavaScript tenemos arrastar nuestro archivo .html al navegador como si fuera una pagina web comun y corriente y luego hacer 
   click derecho ==> "inspeccionar elementos" ==> "consola". Dentro de la consola podremos
   ver nuestro programa. Similar a la terminal de Python.






---------------------------------------------------------------------------------------------------------------------------------------------------------------------- 





                                							_____Formas de hacer comentarios:_____
 


   //           Para una unica linea
   */ /*       Para varias lineas de codigo




---------------------------------------------------------------------------------------------------------------------------------------------------------------------- 



                                                            _____Páginas web recomendadas:____


	- Link con todas las propiedades y metodos de JavaScript
		https://www.w3schools.com/jsref/jsref_obj_string.asp

	- Páginas con una lista de todos los eventos disponibles. Es la misma página pero en español e ingles respectivamente
		https://developer.mozilla.org/es/docs/Web/Events
		https://developer.mozilla.org/en-US/docs/Web/Events

	- Protocolo HTTP:   														
   	  	https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto

 	- Códigos de estado de respuesta HTTP: 
	  	https://developer.mozilla.org/es/docs/Web/HTTP/Status
			 
	- Página para obtener APIS de prueba con informacion falsa. Esto sirve para hacer peticiones normales o peticiones AJAX: (Se recomienda entrar con Firefox, ya que con Opera hay partes de la página que se pierden)
	  	https://jsonplaceholder.typicode.com/users	

	- Página para chequear las expreciones regulares:
   		https://regex101.com/


----------------------------------------------------------------------------------------------------------------------------------------------------------------------




                                                                 _____Vocabulario:_____


 - Callbacks		Son funciones dentro de otras funciones

 - Asincrono		Funciones que se ejecutan sin respetar el orden de declaración. Un ejemplo de esto son las "peticiones http" que hace el navegador a un servidor. Ya que de esta manera se puede caragar información mientras el navegador hace otra cosa






----------------------------------------------------------------------------------------------------------------------------------------------------------------------




                                                                _____Reglas generales_____


 - Todos los archivos incluidas las carpetas se deben escribir en minusculas, sin espacios y evitando letras que esten fuera del alfabeto ingles como la "ñ". El guion 
   y el guion bajo estan permitidos. Esto se debe a que las mayusculas, guiones y letras que estan fuera del ingles pueden probocar errores.   
   Ej de archivo bien escrito: pagina_web.html      La forma en la que yo creo los archivos de apuntes esta mal hecho. No se debe hacer
 
 - El archivo principal en el que se trabaja en HTML, por arbitrariedad lleva el nombre de: index.html

 - La etiqueta <script src=""></script> que es la que comunica al archivo .html con el .js, siempre se debe escribir en el <body> abajo de todo.
   La logica de esto es que el .js se lee a lo ultimo justo despues de haber recolectado toda la información del DOM





----------------------------------------------------------------------------------------------------------------------------------------------------------------------





                                							   _____Declarar variables:_____
 


	let      		Palabra recerbada para declarar variables. Solamente son validos en el bloque donde fueron declaradas (Ej: dentro de unas llaves {}). Fuera de ahí es como si no existieran

 	var      		Palabra rcerbada para declarar de forma global, ya que se puede declarar donde sea y seguira existiendo, a diferencia del "let". Antes se usaba esta palabra para declarar pero quedo obsoleta.
	 
 	const    		Palabra reservada para declarar constantes. Recordar que de dichas declaraciones se escriven en mayusculas por convencion. Ej:  const PI = 3.14;





----------------------------------------------------------------------------------------------------------------------------------------------------------------------



                                								_____Scope: (Ambito)_____



 - Es la zona donde "existe" nuestra variable o constante. Cuando nosotros declaramos nuestra variable y luego la queremos llamar, dependiendo de donde la guardemos 
   la vamos a poder usar o no.

 - Si tenemos bloques y declaramos una variable ahí adentro. Esa variable solo va a existir dentro de ese bloque, si queremos 
   acceder a ella fuera del bloque nos va a dar un error porque la variable no exite.




---------------------------------------------------------------------------------------------------------------------------------------------------------------------- 




                                								_____Tipos de datos:_____


																
Primitivos:
    Numeros:      			Son todos los numeros, tanto enteros como decimales
                    			Number()

    Strings:      			Palabras

    Boolean:      			true o false

    Undefined: 

    Null:

    Symbol:



---------------------------------------------------------------------------------------------------------------------------------------------------------------------- 




                                								_____Tipos de operadores:_____


	Matematicos:
		+       Suma/Concatenación
		-       Resta     
		*       Multiplicacion
		/       División
		%       Módulo
		**      Exponente


	Asignacion:
		=       Asignación                          
		+=      Suma y asignación                   (a += 3)  Es equivalente a: (a = a + 3)
		-=      Resta y asignación  
		*=      Multiplicación y asignación
		/=      Divición y asignación
		%=      Modulo y asignación


	Incremento/Decremento:
		a++     Post-incremento en 1                 Me suma una unidad a la variable, pero no la voy a ver cambiada hasta que la llame por segunda vez. Esto se debe a que primero me muestra la variable y luego me suma una unidad
		++a     Pre-incremento en 1                  Aqui ocurre en el orden inverso de lo anterior. Primero me suma una unidad a la variable y luego me la muestra.
		a--     Post-decremento en 1                 Es lo mismo que ya se vio anteriormente pero en este caso resto en vez de sumar
		--a     Pre-decremento en 1                  Es lo mismo que ya se vio anteriormente pero en este caso resto en vez de sumar


	Comparacion:
		==      Igual
		!=      Diferente
		>       Mayor
		<       Menor
		>=      Mayor o igual
		<=      Menor o igual 

	Logicos:
		&&      Significa: "and"                     Me permite agregar dos o más condiciones, donde "todas" se tienen que dar para ingresar al if.
		||      Significa: "or"                      Me permite agregar dos o más condiciones, donde "al menos una" se tiene que dar para ingresar al if 
		!       Significa: "not"                     Funciona como el "not" de python       if (!(condicion)){}     





----------------------------------------------------------------------------------------------------------------------------------------------------------------------





                                									_____Tipos de listas:_____

    Arrays [] 





----------------------------------------------------------------------------------------------------------------------------------------------------------------------





                              										_____Condicionales:_____

	if:
		if(condición){}
		else if (condición){}                        Equivalente al "elif" de Python 
		else{}


	switch:    
		switch (valor){}                             Esta es la declaracion switch, dentro del parentesis va la informacion a evaluar
		case "valor": "Orden a ejecutar"             Esta declaracion significa "En caso de... Hacer esto..."
		break;                                       Una vez que el programa elige un case/camino, debo poner un break; que corte con el programa. De lo contrario, por algun motivo el programa ejecutara los demas "case"
		default: "Orden a ejecutar"                  Es el equivalente al "else" del if.  


    
----------------------------------------------------------------------------------------------------------------------------------------------------------------------





                                									_____Bucles:_____

	while:
		while (condición){
			Codigo a ejecutar;              
		}


	do...while:
	(Funciona exactamente igual que el bucle while, con la diferencia de que "ejecuta el bucle por lo menos UNA vez")
		do{
			Codigo a ejecutar 
		}while (condición)






	for:
		for (let i=0; i<=10; i++){
			Código a ejecutar
		}


	for of:
	(Devuelve el valor del indice de un Array)
		for (i/variable of Array){
			Codigo a ejecutar
		}


	for in:
	(Devuelve la posicion numerica del indice de un Array. Recordar que su uso habitual es para Objetos (tema que se vera mas adelante), mo para Arrays)
		for (i/variable in Array){
			Codigo a ejecutar
		}



----------------------------------------------------------------------------------------------------------------------------------------------------------------------
 								                            


																
									
																	_____Sentencias:_____



    break           Lo que hace es "romper" el bucle. Osea, una vez que el programa lee esta palabra, se da fin a la repeticion de bucles aunque falten ejecutarse algunos                            

    continue        Lo que hace esta sentencia es volver al inicio del bucle, pasando de largo todas las lineas de codigo que hay abajo de esta palabra




----------------------------------------------------------------------------------------------------------------------------------------------------------------------	





                                									_____Objetos {}:_____



 - Son estructuras de datos que representan propiedades, valores y acciones que puede realizar un objeto.
 - Todos los objetos tienen propiedades o atributos y comportamientos o acciones represntados por pares de     clave (key): valor (value)

    const computer = {
        screenSize  :   17,                       // Recordar poner una coma al final siempre y cuando abajo haya un par (key) : (value)
        model       :   `MacBook pro` 
    }



----------------------------------------------------------------------------------------------------------------------------------------------------------------------




									                                _____Funciones:_____



 - Las funciones son fragmentos de codigo que escribimos para ejecutar una tarea y no volver a escribir el mismo codigo más de una vez.

 - Basicamente es un mini programa compactado en una muy comoda y practica frase. 

 - Digamos que tengo un programa donde se repite mucho unas lineas de codigo que sacan el promedio. En vez de copiar y pegar esas 30 lineas de codigo una y otra vez (generando un codigo espagueti), simplemente creo una funcion que me devuelva el promedio. Ahora simplemente tengo que copiar y pegar una sola linea de codigo (que vendria a ser el nombre la funcion "promedio") en vez de 30. Obviamente eso es mucho mas intuitivo

    Ej metodo actual:
            const nombre_funcion = (parametro1, parametro2) =>{                     // Se pusieron 2 parametros de ejemplo pero no hay un limite en cuanto a su cantidad. Pueden se un parametro, dos, 55 o incluso un numero indefinido
                codigo a ejecutar 
            }

    Ej metodo obsoleto:
            function nombre_funcion (parametro1, parametro2){
                codigo a ejecutar
            }






----------------------------------------------------------------------------------------------------------------------------------------------------------------------






                                						_____Metodos y propiedades en los string:_____



 - Link con todas las propiedades y metodos de JavaScript:
   https://www.w3schools.com/jsref/jsref_obj_string.asp



	Metodo: 				Es todo aquello los objetos o los string (en este caso) pueden hacer por el hecho de ser strings.
							Ej: Convertirse en mayúsculas.
		
	Propiedades: 			Son caracteristicas que el string tiene por ser string.
				 			Ej: Longitud.



 - Para utilizar estos metodos y propiedades se utiliza el la numenclatura del punto: Significa que ponemos el nombre del string seguido de un punto y luego del 
   metodo o propiedad
    Ej:     string.metodo()             Los metodos llevan parentesis
            string.propiedad





---------------------------------------------------------------------------------------------------------------------------------------------------------------------- 




																	_____DOM_____



    DOM				- "Document Object Model", traducido como "Modelo de Objetos del Documento"

					- Se considera "DOM" a toda la estructura HTML del documento.

					- No es JavaScript, es una API (Application Programming Interface), creado por World Wide Web Consortium (W3C).

					-  A través del DOM, los programas pueden acceder y modificar el contenido, estructura y estilo de los documentos HTML y XML, que es para lo que 
					   se diseñó principalmente.

					- Los "Nodos" es el nombre que le da el DOM a cada parte del archivo .html. Entre ellos estan las "etiquetas", "texto", "id", "class", etc.
					




	Nodos			- Los "Nodos" es el nombre que le da el DOM a cada parte del archivo .html. Entre ellos estan las "etiquetas", "texto", "id", "class", etc.

					- Los nodos al ser etiquetas, texto, id, class, etc que estan dentro de otras etiquetas, conforman algo llamado "Árbol de Nodos"
					  Mientras más grande y compeja sea la página, obviamente más grande y más partes va a tener el archivo .html, y por ende más grande y complejo
					  sera el árbol de nodos.  

					- El "Árbor de Nodos" es la representación del DOM
					
					- Existen 12 tipos de nodos diferentes, los cuales cada uno tiene su propio numero para identificarlo. 
					  Estos numeros son muy utiles ya que gracias a ellos podemos seleccionar un nodo desconocido y este nos devolvera un numero, discho numero nos 
					  dira el tipo de nodo que es.
					
					- Los tipos de nodos más importantes son los siguientes: (tienen incluido su numero de identificación)
							- 1				Element node 			Cualquier etiqueta HTML
							- 3 			Text node				El contenido de la etiqueca 
							- 8   			Commnet node 			Cualquier comentario en HTML (Osea, los comentarios que comunes y corrientes como //, /*, <!-- -->, etc)

					- Los nodos cuando trabajamos en el DOM tienen su nombre en mayusculas.
					  Ej: La etiqueyta <h1> pasa a ser el nodo "H1" 






 - Acceder a elementos del DOM mediante el "inspector de elementos":
		- Esto es muy util debido a que podemos obtener toda la información de un elemento/etiqueta mediante el inspector de elementos. 

		- Cada etiqueta tiene una cantidad enorme de informacion debido a que esta conformada por diversas propiedades, las cuales cada uno tiene un valor propio.
		  Cada elemento funciona como un "objeto" (como los ya vistosen apuntes anteriores)

		- ¿Como hago para acceder a esta informacion?
			1- Vamos al "insector de elementos" del navegador y dentro de "elements" se seleccionamos la etiqueta/elemento deseado. Osea, simplemente hacemos clic 
			   sobre esa etiqueta

			2- Luego nos dirigimos a "console" y escribimos "$0". 
			   Recordar que $0 solo funciona si anteriormente seleccionamos un elemento, de lo contrario el navegador no sabra cual es el elemento/etiqueta en la 
			   que estamos interesados

			3- Presionamos la tecla "enter" y automaticamente se nos mostrara la etiqueta deseada

			4- - Para ver toda la información de esa etiqueta/elemento simplemente tenemos que hacer clic en el "desplegable" (la flechita que apunta para abajo) y de 
			     esta manera se desplegara todo el contenido que tiene dicha etiqueta.
			   - Esto funciona bien para algunos navegadores como Firefox, pero en Chrome y Opera. En estas ocaciones es necesario escribir console.dir($0)
			   
			   
		- Si queremos acceder especificamente a una propiedad es necesario escribir $0 junto con un punto y luego la propiedad deseada de la cual queremos 
		  saber su valor. No hay que preocuparse por saber el nombre de estas propiedades debido a que el navegador las tiene enlistada y las autocompleta
			Ej1: $0.nodeType		Con esto vamos a saber cual de los 12 tipos de nodo que es nuestro elememto dependiendo el valor que nos de (tema ya visto
									más arriba en este mismo apunte)	
			Ej2: $0.onclick    		Con esto podremos saber si dicha etiqueta reacciona ante el evento "onclick" (Osea, si la pagína hace algo cuando se hace 
									click ahí)
			
		- Recordar que estas propiedades funcionan como objetos/arrays, por ende podemos acceder a nodos desde otros nodos.
		  	Ej: $0.childNodes[0].nodeType			Básicamente le dije al navegador que me mostrara que "tipo de nodo" es el nodo hijo que esta en posición [0] del 
			  										array de mi etiqueta/elemento seleccionado 
			



													  
----------------------------------------------------------------------------------------------------------------------------------------------------------------------




                                									_____Palabras reservadas:_____



 - console.log()                            		- Me muestra lo que esta adentro de los parentesis, en la consola del navegador web. Es el equivalene del print() de Python
 
 - console.dir()									- Funciona exactamente igual que un concole.log() pero solucionas problemas que este otro nos puede dar a veces. Hay ocaciones donde necesitamos desplegar un elemento del DOM y el console.log() no muestra dicho desplegable, en esos casos usamos console.dir() 
 


 																		  _____Propiedades:_____


    .length                                 		- Devuelve la longitud del string. Osea, la cantidad de caracteres

    Math.PI                                 		- Me devuelve el numero PI. Osea: 3.14...

    Math.E                                  		- Me devuelve el numero E. Osea: 2.71...





																			_____Metodos:_____


    .toUpperCase()                          		- Me devuelve la cadena en mayúsculas

    .toLowerCase()                          		- Me devuelve la cadena en minusculas

    .indexOf()                              		- Me devuelve la posicion de la palabra que busco. Si la palabra se repite, me va a devolver la posicion del primero. Si no encuentro nada me devuelve un -1

    .replace(" "," ")                       		- Reemplaza una palabra del string por otra

    .substring(X,X)                         		- Me estrae los caracteres desde la posicion marcada (en numero) hasta el final que le marque. Si agrego un solo valor, me va a extraer los caracteres desde esa posicion hasta el final del texto. Si agrego dos valores, me va a estraer solamente la parte de texto que le marque como principio y fin

    .slice(X,X)                             		- Funciona igual que el anterior pero con la diferencia de que admite valores negativos. Ej: si pongo un -3, va a empezar a extraer desde los 3 ultimos caracteres. Tambien puedo agregar dos valores como en el metodo anterior

    .trim()                                 		- Elimina los espacios al principio y al final de string

    .startsWith(" ",X)                      		- Me dice si el texto comienza con la palabra que le ingrese, devolviendome un "true" o un "false" dependiendo si dicha afirmacion es positiva o negativa respectivamente. Si ingreso un segundo parametro opcional (valor numerico), le estoy diciendo que la palabra que busco esta ubicada en esa posicion

    .endsWith(" ",X)                        		- Me dice si el texto termina con la palabra que le ingrese, devolviendome un "true" o un "false" dependiendo si dicha afirmacion es positiva o negativa respectivamente. A diferencia del metodo anterior, este segundo parametro opcional NO ES DE INICIO, ES DE "LONGITUD"; Eso quiere decir que va a buscar dicha palabra desde el principio hasta la pocicion marcada

    .includes(" ",X)                        		- Me dice si la palabra esta o no en el texto. Devolviendome un "true" o un "false" respectivamente. Tambien tiene un parametro adicional que me dice a partir de donde buscar

    .repeat(X)                              		- Repite el string la cantidad de veces que le indiquemos

    .toString()                             		- Convierte cualquier tipo de dato en un String
	
	eval()											- Calcula una cuenta/función que este a modo de "string" como si fuera una ecuacion con numeros normales. Luego devuelve un numero como resultado	   Ej: eval("10*3") 	=>  	30 





    .toFixed(X)                             		- Limita la cantidad de decimales que le indique despues de la coma 

    Math.abs(X)                             		- Me devuelve el valor absoluto de un numero. Osea, lo que me enseñaron en la escuela lo era un Modulo

    Math.ceil(X)                            		- Redondea el numero hacia arriba
	
    Math.floor(X)                           		- Redondea el numero hacia abajo

    Math.round(X)                           		- Redondea hacia el numero entero más cercano
	
    Math.pow(X,X)                           		- Es una "potencia". Me eleva el numero del primer parametro, a la potencia del numero del segundo parametro

    Math.sqrt(X)                            		- Me devuelve la raíz cuadrada del numero ingresado

    Math.random()                           		- Genera un numero random entre 0 y 1. Si queremos que nos de un numero entre 0 y otro numero. Solamente tenemos que multiplicar Math.random() por ese numero. Para que me devuelva los numeros random entre un margen minimo y maximo de numeros, tengo que multiplicar este metodos de la siguiente manera: Math.random()*(numero_max - numero_min)+ numero_min)

    Math.sign(X)                            		- Me dice si el signo del numero ingresado es positivo o negativo, devolviendome un +1 o un -1 respectivamente. En caso de que dicho numero no tenga signo (por ser el numero 0) me devolvera un 0

    parseInt()                              		- Convierte todo string que este adentro en un "numero entero", sacandole incluso las letras y los decimales que tenga al rededor.  Ej: 25.8ABC  -->  25

	parseFloat()									- Convierte todo string, y devuelve un número de punto flotante. Osea, numero con coma ","

    Math.max([valor1[, valor2[, ...]]])     		- Devuelve el numero más "grande" de todos los numeros agregados

    Math.min([valor1[, valor2[, ...]]])     		- Devuelve el numero más "pequeño" de todos los numeros agregados

	eval()											- Calcula una cuenta/función que este a modo de "string" como si fuera una ecuacion con numeros normales. Luego devuelve un numero como resultado	   Ej: eval("10*3") 	=>  	30 





    Array.isArray(Variable)                         - Me permite saber si una variable es un Array  
	
    .shift(X/"")                                    - Hace dos cosas al mismo tiempo. Elimina el primer elemento de un Array y lo devuelve
	
    .pop(X/"")                                      - Hace dos cosas al mismo tiempo. Elimina el ultimo elemento de un Array y lo devuelve
	
    .push(X/"")                                     - Hace dos cosas al mismo tiempo. Agrega un elemento extra al final del Array y lo devuelve

    .unshift(X/"")                                  - Hace dos cosas al mismo tiempo. Agrega un elemento extra al comienzo del Array y "devuelve la logitud" del Array actual

    .push(X/"")                                     - Hace dos cosas al mismo tiempo. Agrega un elemento extra al final del Array y "devuelve la logitud" del Array actual

    .indexOf(X/"")                                  - Me devuelve la posicion del indice del dato que busco en el Array. Si tengo varios datos iguales, me va a devolver la posicion del primero. Si no encuentro nada me devuelve un -1

    .lastIndexOf(X/"")                              - Me devuelve la posicion del indice del dato que busco en el Array. Si tengo varios datos iguales, me va a devolver la posicion del ultimo dato. Si no encuentra nada me devuelve un -1

    .reverse()                                      - Invierte el orden de los datos del Array

    .join(" ")                                      - Me separa los datos de un Array y entre medio me pone lo que yo quiera. A su vez me muestra los datos como un string. En cazo de no ingresar nada, me colocara entre medio una coma "," de forma predeterminada

    .splice(a, b, item)                             - Cambia el contenido de un Array eliminando elementos existentes y/o agregando elementos existentes. (Ademas de todo esto, tambien me devuelve los datos borrados)
	
    .slice(a,b)                                     - Copia los elemetos de un Array desde el índice "a" hasta el índice "b". Si no existe un indice "b" lo hace desde "a" hasta el final. Si no existe "a" ni "b" hace una copia completa del original
	
    .split()                                        - Convierte las palabras de un String en valores de un Array                                 

    .includes()                                     - Determina si un Array incluye un determinado elemento, devuelve true o false según corresponda.




    Array.from()                                    - Convierte en Array al elemento iterable (iterable viene de i). Un elemento iterable es todo aquel que se puede recorrer, como lo son los Strings, Arrays, etc. Funciona de una manera parecida a split() aunque son dos cosas distintas (basicamente con el callback le desimos como queremos que ordene los elementos en caso de que no nos interese de que esten en orden alfabetico)

    .sort([callback])                               - Ordenas los elementos de un Array alfabeticamente (valor unicode). Si le pasamos un callback (funcion dentro de otra funcion), ordenas las letras en funcion del algoritmo que le pasemos
                                                      .sort((a,b)=>a-b)      Necesito agregar este callback para poder ordenar los numeros de menor a mayor. De lo contrario me los ordenaria segun el "valor unicode"
                                                      .sort((a,b)=>b-a)      Lo mismo que lo anterior, pero ordena los numeros de mayor a menor                 




    .forEach(callback(currentValue, [hindex]))      - Ejecuta la función indicada una vez por cada elemento del array. Esto es util porque me ahorro de tener que usar un "bucle for" para tener que recorrer los elementos de un Array aplicarles una funcion de forma individual a cada elemento

    .some(callback)                                 - Comprueba si al menos un elemento del Array cumple con la condicion (funcion que iria donde esta callback), devolviendome un "True" o "False"
	
    .every(callback)                                - Comprueba si "todos los elementos del Array" cumplen cumplen con la condicion, devolviendome un "True" o "False"

    .map(callback)                                  - Transforma todos los elemtos de un Array y devuelve un nuevo Array. Basicamente, me permite modificar los valores que estan dentro sin tener que recurrir a la ayuda de un "bucle for" y una funcion en conjunto

    .filter (callback)                              - Filtra todos los elementos del Array que cumplan con la condicion y devuelve un nuevo Array. Basicamente como lo dice su nombre, es un filtro

    .reduce(callback)                               - Reduce todos los elementos del Array a un unico valor. Se puede utilizar en funciones que suman un numero indeterminado de numeros de un array (basicamente reducimos todos esos numeros a uno solo)


	Object.values()									- Convierte a los objetos en arrays


	



 Palabras claves:

 	alert(" ")										- Hace aparecer un cartel con un mensaje
	 
	prompt(" ")                             		- Hace aparecer un cartel con un mensaje que me permite ingresar datos. Funciona de forma similar al imput() de Python

	condirm(" ")									- Hace aparecer un cartel con un mensaje y dos botones, "Aceptar" y "Cancelar". Dependiendo donde haga click el usuario, guarda un valor "true" en caso de aceptar o un "false" en caso de cancelar




*/



