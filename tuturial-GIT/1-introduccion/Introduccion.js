/*
																	_____GIT: Introducción_____


 Tutorial: 	https://www.youtube.com/watch?v=HiXLkL42tMU&t=28s
																	



 _____¿Que es GIT?_____															
 - GIT es un es un "Vercion control system" (VCS) traducido como "sistema de control de verciones". 
   Básicamente controla o daministra las distintas versiones de un programa
   Esto es necesario debido a que a medida de que pasa el tiempo, nuestro proyecto va a crecer y vca a tener distintas versiones del mismo. Con GIT controlamos esas 
   distintas versiones

 


 _____Instalación:_____  
 - Descargarlo desde este link_
   https://git-scm.com/





 _____Repositorios:_____
 - Los repositorios es una computadora que administra nuestro codigo. Es decir, voy a guardar ese codigo en una computadora y luego ese codigo va a ser accesible 
   para varios desarrolladores si así lo deseo  




 _____Estados de GIT:_____
 	- Working directory: 		Es donde vamos a estar trabajando con nuestros archivos
 	- Stagin area: 				Es donde vamos a estar agregando todos los archivos para el guardado 
 	- Repository:				Cuando ya estemos decidos en guardar un cambio, lo vamos a pasar al repositorio




 _____Comados basicos:_____
	git init					- Le estamos diciendo al sistema operativo que en este proyecto nuevo vamos a usar GIT

	git status					- Nos dice en que estado estan los archivos, si estan en "Workin directory", "Stagin area" o en "repository"	

	git add <file>  			- Pasa los archivos del "Workin directory" al "Stagin area"
	
	git commit					- Pasa los archivos "Stagin area" al "Repository". Sirve para crear un primer snatshot	

	git push					- Sube nuestro archivo a un repositorio remoto. Por ejemplo, cuando ya tenemos listo nuestro codigo, lo vamos a subir a un servidor para que 
								  pueda ser accedido a los desarrolladores que tienen permiso de modificar el codigo

	git pull					- En caso de que estemos trabajando con multiples desarrolladores, te trae los cambios que han hecho los otros desarrodores

	git clone					- Crea una copia desde el servidor central hasta tu computadora que puedas comenzar a trabajar



*/
