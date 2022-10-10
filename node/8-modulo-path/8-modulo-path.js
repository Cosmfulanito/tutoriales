/*
                                                _____ Modulo path: _____
                                                
                   
                                                
 - ¿Para que sirve modulo "path"? 
    - El modulo "path" nos permite ejecutar determina logica sin importar el sistema operativo en el que estemos.    

    - Esto importante porque no cuando estemos trabajando en distintos sistemas operativos como Linux, Windows, MacOS, no siempre 
      vamos a acceso a las mismas configuraciones.
      Un ejemplo de esto es cuando queramos importar un archivo, ya que dependiendo de nuestro sistema operativo, la ruta que usemos
      va a ser distinta. Pero esto se soluciona con el modulo "path".

    - Ejemplo de rutas con distintos sistemas operativos:
        - Windows:          c:\\Users\\nicopc\\Desktop
        - Linux / Mac:      home/nicopc/desktop

    - Esto es algo a tener en cuenta porque por más que trabajemos con Windows, cada vez que desplegemos nuestra aplicación, esta 
      se va a estar ejecutando en servidores linux

*/



// _____Llamar a "path":_____ 
// Lo llamamos de la misma manera que llamamos a cualquier modulo propio de node.

const path = require('path');

console.log(path);                    	// Podemos ver el objeto "path" completo con todas sus keys (propiedades, metodos y funciones).



/* 
 _____Contenido del objeto path:_____

  	- path.sep 								Me devuelve un: \

	- path.join()							Este objeto recibe como parametro todos los directorios/carpetas o rutas de 
											directorios/carpetas que queramos y los une tenieniendo en cuenta sistema operativo 
											en el que estamos trabajando. De esta manera, las rutas entre carpetas estran divididas 
											un / o \\ segun sea nuestro sistema operativo

	- path.basename()						Me devuelve el archivo de toda un ruta de carpetas/url	
											Ej: /public/disk/styles/main.js    	 =>		main.js	
											
	- path.dirname()						Me devuelve la ruta pero sin el ultimo archivo. Osea, al revez que "path.basename()""
											Ej: /public/disk/styles/main.js      =>     /public/disk/styles

	- path.parse()					 		Espera una ruta como parametro y me la devuelve como formato .json (osea, un objeto)										

	- path.resolve()						Espera como parametro el nombre de un archivo y este objeto me crea una ruta para ese 
											parametro. Dicha va a ser la misma que la ruta donde se esta ejecuntado el programa. 
											En este caso seria:			/Users/nicolynch/Desktop/node/8-modulo-path/...(archivo)
											Ej: archivo.js      =>      /Users/nicolynch/Desktop/node/8-modulo-path/archivo.js

*/




console.log(path.sep);

console.log(path.join('/public', 'disk', '/styles', 'main.css'));				// Como se puede apreciar, no inporta si hay o no una barra, esta propiedad me va a crear una ruta sin problemas y las barras van a ser en función del sistemas operativo en el que trabaje 

console.log(path.basename('/public/disk/styles/main.js'));

console.log(path.dirname('/public/disk/styles/main.js'));

console.log(path.parse('/public/disk/styles/main.js'));

console.log(path.resolve('archivo.js'));