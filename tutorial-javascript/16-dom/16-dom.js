/*

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
			

	
*/



