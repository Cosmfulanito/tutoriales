/*

														_____Introducción a AJAX_____




 - Antes de explicar que es AJAX, primero debemos saber como funciona la transmición de datos deentre un navegador y un servidor:

	- Básicamente el navegador le manda una petición a través del "protocolo HTTP" a un "dominio". Esto quiere decir que cuando nosotros ingresamos una dirección web 
	  (Ej: https://www.netflix.com/) lo que estamos haciendo es solicitar a un servidor cierta información. Luego dicho servidor nos devuelve información, esta 
	  información no es más que la misma página web (archivos .html, .css, .js, imagens, audio, etc).
	
	- Así funciona toda página web comun y corriente que no tenga AJAX. Obviamente estas peticiones hacen que se recargue la página.




	
 - ¿Como funciona AJAX?
	 
	- Cuando nosotros utilizamos "AJAX" lo que hacemos es interceptar la respuesta del servidor para evitar que la página se recarge. De esta forma nosotros en lugar
	  de solicitar todos los datos (archivos .html, .css, .js, imagens, audio, etc), solamente solicitamos ciertos que nos interezan. Luego estos datos son 
	  convertidos en un "objeto".
	  De esa forma obtenemos los datos del servidor pero no recargamos la página porque no estamos cargando eso datos al navegador. En su lugar los tenemos un objeto 
      con el cual podemos trabajar con el como desiemos 

	- Un ejemplo del uso de AJAX es "Google Maps" del navegador. Ya que desde una página web solicitamos informacion a los servidores de Google, y estos nos la 
	  devuelven en forma de "mapa". Todo esto sin recargar la página 
 
	- También se utiliza para que no se realentice la página. Esto de debe a que solamente se puede interactuar con una página cuando esta cargo pro completo, pero 
	  con AJAX podemos descargar el resto de los elementos no tan elevantes en segundo plano.De esta manera el ususario puede interacctuar con la páina ientras esta
	  esta cargado.

	  Un ejemplo de esto es "Youtube". Lo que hace youtube es cargar la página con solamente sus elementos más importantes, el resto de la informacion es enviada 
	  por medio de AJAX. De esta manera podemos interactuar con la página a medida que van apareciendo sus elementos 

	  
 - RECORDAR que todo esto es una simplificación extrema del fucionnamiento de una página web y de AJAX. Todo este mundo es mucho más complejo  


*/