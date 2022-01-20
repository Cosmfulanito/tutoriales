/*

														_____Transpilación de código - Babel_____


 - Este es un temamuy compljo y se recomienda volver a ver el video														
   https://www.youtube.com/watch?v=KhBvyH8CzWw&list=PLROIqh_5RZeBAnmi0rqLkyZIAVmT5lZxG&index=73
   https://www.udemy.com/course/draft/2834790/learn/lecture/18205946#overview
 
 - También recomienda complementar esto con el curso de "Gulp"														

 - Esto no me funciono en mi caso. Deberia revsar el curso de Gulp 






 - Esta es la parte más importante del curso, ya que aprenderemos a convertir nuestro codigo a codigo valido para subirlo a un servidor 														

 - Todo el codigo hemos estado escribiendo en todos estos apuntes es "codigo de desarrollo". Todo este codigo si lo ejecutamos en un navegador nuevo va a funcionar
   sin ningun problema. Pero si subimos ese codigo a un servidor va a haber muchos navegadores que no reconozcan parte del codigo que estamos escribiendo
   Por ese motivo tenemos que convertir ese codigo a lo que llamamos "codigo de producción". Es decir, el codigo que va a ver el usuario



 - Para ello vamos a seguir una serie de pasos:  
	- Hay que crear doscarpetas. 
	  - Dev: 		En esta carpeta van los archivos con los cuales trabajamos
	  - public:		En esta carpeta iran las copias transpiladas de nuestros archivos. Los archivos de esta carpeta son 
	                los que subiremos a internet

	- Luego hay que instalar "Node"

	- Luego hay que ir a la terminal. Podemos usar la terminal integrada de "Visual Studio Code"
	  La ventaja de usar la terminal integrada de "Visual Studio Code" es que se nos habre automaticamente en el directorio donde estamos trabajando. De usar otra 
	  terminal deberiamos ingresar al proyecto seleccioando de forma manual

	- Iniciamos Node en la terminal, en el proyecto. Esto se hace escribibiendo: 
	  npm init -y 
	  Esto va a crear un archivo llamado "package.jason". 

	- Una vez que tenemos ese archivo instalado, vamos a la terminal y pegamos la siguiente linea de codigo. Básicamente son paquetes que necesitamos para convertir 
	  el codigo que estamos escribiendo que basicamente es "ECMAScript 2016" a "ECMAScript 5". ECMAScript 5 es la verción que soportan todos los navegadores por más 
	  viejos que sean. 
	  Esta instalación va a tardar un tiempo largo
      npm install @babel/cli @babel/core @babel/polyfill @babel/preset-env @babel/register gulp gulp-babel gulp-concat gulp-plumber gulp-uglify --save-dev
	  
	- Una vez terminada la instalacion vamos a tener dos cosas nuevas en nuestra carpeta
	  - La primera es una carpeta con el nombre "node_modules" que viene a ser el nucleo de node más todos los paquetes que acabamos de instalar 
	  - El segundo es el archivo "package-lock.jason", ete archivo no hay que tocarlo, es el historial de lo mque ha hecho node. Si toco este archivo me va a dar 
	    errores     

	- Luego tenemos que crear 2 archivos que deben estar en la raiz del proyecto
	  - El primer archivo se llama "gulp.file.babel.js"
	    Este va a ser nuestro archivo de configuración para "gulp". Gulp es una utomatizador de tareas que va a convertir nuestro codigo, de codigo nuevo a codigo
		viejo cada vez que nosostros guardemos. De esta forma ahorramos muchisimo trabajo
		En ese archivo de gulp hay que pegar un codigo. Dicho cogido esta en la cuenta de "GitHub" de Dorian
	  - El segundo archivo que debemos crear se llama ".babelrc". Este es el archivo e configuración de "babel" 
	    En ese archivo de hay que pegar un codigo. Dicho cogido esta en la cuenta de "GitHub" de Dorian
 

		


    - Una vez ya hecho esto, podemos convertir codigo

	- En la consola debemos escribir: gulp
	  Esto instalara gulp
	  	- En caso de tener algun error, debemos escribir: npm install -g gulp
	      Esto instala gulp de manera global y solamente se hace una vez porque el comando "-g" instala en el equipo gulp. Se usa una vez porque se instala en el 
		  equipo, no en el proyecto
		- Si observamos, se creara una archivo nuevo. Esa carpeta es una copia de nuestro archivo .js original convertido a la verción de "ECMAScript 5". Este nuevo 
		  archivo es el que subimos a internet. (similar a como hacemos con "Prepos")

	- Ahora simplemente escribimos codigo como de costumbre, cuando guardemos los cambios producidos tambien se efectuaran en el nuevo archivo	  





	- Si queremos hacer un cambio en cuanto a la distribución de archivos y carpetas, ver el video tutorial porque es complejo




*/







