

/*																_____Introduccion:_____



 - Todo este tutorial proviene del siguiente link:
   https://youtu.be/zIY87vU33aA



 _____¿Que es React?_____

 - React es una biblioteca de JavaScript que nos permite diseñar interfaces de usuario

 - ¿Que son las interfaces de usuario?
   - Estas son todos los componentes que encontramos en una página web o aplicación. Son un conjunto de muchas cosas (etiquetas HTML, etilos CSS y JavaScrit) que 
     conforman algo mucho más grande. Pueden ser botones, cuadros de videos recomendados junto con u corespondente titulo, tweets, publicaciones de facebook, 
	 comentarios de youtube con su respecivo nombre e usuario y foto, peliculas recomendadas de Netflix con su respectivas descripciones, etc
   - Como se puede apreciar, son partes individuales que tienen su propia estructura y que se repiten constantemente 
   
 - Básicamente React nos permite crear estas interfaces de usuario de una forma mucho más comoda y automatica. De lo contrario se deberian declarar en el archivo 
   .html una infinidad de componentes que se repiten constantemente (también se podría hacer con JavaScript puro pero también es tedioso)  





 _____Ventajas:______

 - Es creado, mantenido y utilizado por Facebook. Por ende tiene el respaldo de que va a ser constantemente actualizado por una empresa grande, ya que ademas de ser 
   su producto, tambien es su herramienta de trabajo

 - También tiene el respaldo de otras empresas que lo utulizan como Netflix, Airbnb o Feedly

 - Es de las bibliotecas más utilizadas. Esto es bueno ya que hay disponible mucho codigo "open source" (codigo abierto) creado por la comunidad 
   Por ejemplo, puedo necesitar una interfaz para los comentarios de los usuarios que leen mi blog persona. Con React puedo encontar una biblioteca con una buena 
   cantidad de ejemplos de interfaces como la que busco que incluso son utilizadas por empresas grandes 

 - Se ejecuta de manera veloz ya utiliza algo llamado "Virtual DOM"  
   Básicamente cuando hacemos un cambio en el DOM por más minusculo que sea, el DOM se borra y se vuelve a crear desde cero con ese cambio. Esto consume muchos 
   recursos, ya que por un cambio minusculo estamos haciendo que se vuelva crear el DOM completo desde cero. El "Virtual DOM" hace que solamente se cambie y se 
   renderice unicamente esa parte en concreto 

 - Funciona con "Vistas declarativas". Osea, lo que quemos mostrar en pantalla lo vamos a ver en el codigo 

 - Nos permite crear "componentes", como ya digimos más arriba. Los componentes un conjunto de muchas cosas (etiquetas HTML, etilos CSS y JavaScrit) que conforman 
   algo mucho más grande. Pueden ser botones, cuadros de videos recomendados junto con u corespondente titulo, tweets, etc
   Estos coponentes luego los podremos reutilizar cuantas veces queramos 

 - También puede ser utilizado en el servidor, permitiendonos hacer "Server Side Renderin" (renderizado del lado del servidor)
   Estos nos permite desde el lado del servidor, enviar pequeñas porciones de la interfaz a medida que el usuario lo va pidiendo




 _____¿Que son los componentes?_____
 
 - Los componentes que encontramos en una página web o aplicación. Son un conjunto de muchas cosas (etiquetas HTML, etilos CSS y JavaScrit) que 
   conforman algo mucho más grande. Pueden ser botones, cuadros de videos recomendados junto con u corespondente titulo, tweets, publicaciones de facebook, 
   comentarios de youtube con su respecivo nombre e usuario y foto, peliculas recomendadas de Netflix con su respectivas descripciones, etc

 - Como se puede apreciar, son partes individuales que tienen su propia estructura y que se repiten constantemente 

 - ¿Por que se llaman componentes? 
   Se llaman así porque pueden estas pequeñas partes pueden encapsular tanto codigo como HTML, CSS y JavaScript 

 - Dato de color: En la practica, cuando escribamos codigo, estos componentes van a lucir como etiquetas HTML    
   En otras palabras, el crear "comopenentes" es como si estuviésemos creando nuestras propias etiquetas HTML. La razon de crearlas es que luego podremos 
   reutilizarlas en otras aplicaciones o páginas web y que funcione exactamente igual





 _____Herramientas relacionadas:_____

 - Redux:				Es una biblioteca que nos permite administrar el estado de la aplicación 

 - React Native: 		Nos permite aplicar lo aprendido de React en aplicaciones movil

 - Next.js:			 	Es un framework de "Server side rendering" (renderizado del lado del servidor), tema ya menciona más arriba. Este framework nos facilita este
                        trabajo

  - GraphQL:			Es un lenguaje que nos permite solicitar datos. Nos permite especificar que es lo que necesitamos y a su vez que es lo que queremos enviar						

 - MERN:				MongoDB - Express - React - NodeJS. Es un strack de tecnologuias que se deben de conocer para ser "full stack" orientado en MERN. Nos da 
                                                            conocimiento tanto "front end" como "back end" 

 - Ionic4				Es un framework con el que podemos crear aplicacion para android o iOS con tecnologias web como HTML, CSS y JavaScript. En su versión 4 se 
                        volvio un "framework agnostico", esto esto significa que puede ser utilizado tanto por React como por Angular, View.js o incluso JavaScript 
						puro 													



						



 _____Escribir comentarios en JSX:_____

 - {/* Esto es un comentario en JSX */}																																		/*																									  







 _____Escribir un "string" o cadena de texto en JSX:_____   

 - Dentro de JSX cuando queremos poner texto simplemente lo escribimos, no hace falta ponerle comillas
   	Ej: <h1>Hola Mundo</h1>






 _____Llamar a una constante / función / etc en JSX:_____   

 - Normalmente JavaScript simplemente se pone el nombre de la variable o función sin comillas "" '' porque esas son para los string. En JSX los string son los que se 
   escriben sin comillas, por ende para diferenciarlos de las constantes o funciones, estos ultimos deben escribirse entre corchetes. Ya que de esta manera estariamos
   usando el JavaScript puro
   	Ej1: {variable}
	Ej2: {funcion()}   
	
 - Tambien podemos hacer operaciones matemaricas Ya que de esta manera estariamos usando el JavaScript puro	
    Ej1: {2 + 5}           Resultado: 7
	Ej2: {variable + 5}






 _____Crear e insertar elementos:_____

 - Las etiquetas/elementos se crean tal cual las creamos HTML y su forma de insertarla en otra etiqueta es exactamente igual. Esta es la ventaja de React sobre 
   JavaScrip puro a la hora crear e insertar elementos
	Ej: <div>
			<h1>Hello word!</h1>
		</div>

 - RECORDAR que en JSX todas las etiquetas deben tener una etiqueta de cierre. Pero hay casos como con la etique <input> o la etiqueta <br> las cuales no tiene una segunda etiqueta de cierre, en estos casos debemos ponerle un un "/" al final antes de cerrala
	Ej: <input/>







 _____Crear e inserta atributos propios de HTML:_____

 - Los atributos se colocan tal cual lo hariamos en una etiqueta HTML
	Ej: <input tipe="text">

 - Tener en cuenta que hay atributos los cuales en JSX tienen otro nombre. Un ejemplo de esto es el atributo class="" el cual es reemplazado por classname="" 	
   Es exactamente lo mismo pero con otro nombre

*/