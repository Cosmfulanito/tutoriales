/*

															_____Expresiones Regulares - Comodines_____



 - Es un tema complejo, por ese motivo se recomienda volver a ver el video tutorial: 
   https://www.youtube.com/watch?v=_k23uURHKoo&list=PLROIqh_5RZeBAnmi0rqLkyZIAVmT5lZxG&index=47



   

 - Los "comodines" son reglas de busqueda. Dichos comodines deben ser escritos dentro del "patron de busqueda" 
   Hay varios comodines pero estos son los más importantes 															

	- Sustitución: 								Define un comodín dentro del patron. El simbolo es "."  Básicamente si no sabemos que letra estamos buscando, 
	  											ponemos un punto. 
												  
												  	Ej: |imagen N°...| 		Esto buscara todas las palabras "imagen N°" incluido 3 caracteres a la derecha. Como 
													  						"imagen N°001", "imagen N°002", "imagen N°003", etc.

																			Si realmente queremos buscar un "punto" en el texto, tendremos que poner "\." 
																		 	Ej: |imagen...\.jpg|  Esto nos devolvera palabras como "imagen001.jpg", "imagen002.jpg", 
																			                      etc

																		

	- Listado de caracteres válidos: 			Entre corchetes se pone una lista de los caracteres válidos. De esta manera solamente se buscarian esos caracteres.
												Recordar que dichos caracteres deben ir juntos, aunque parezca que forman una palabra, el navegador solamente buscara 
												los caracteres por separados

	  												Ej: [aeiou5]			Con esto solamente se buscaran todas las vocales en el texto y el numero 5  

													Ej: [10]				En este caso se buscara el numero "1" y el numero "0" por separado. No se buscara el 
																			numero 10



	- Rangos: 									Entre corchetes, si ponemos un guión entre dos caracteres establecemos un rango. Recordar que este rango es en base 
												al orden en el que estan enumerados los caracteres en codigo ASCII, por ende, entre letras y numeros puede haber 
												simbolos extraños 

	  												Ej: [a-z]  				Con esto solamente buscariamos las letras de la "a" a la "z" (en minúscula). Recordar 
													  						que en el codigo ASCII, entre esos dos caracteres no esta la "ñ"  



	- Mezcla entre rangos y listas: 			Podemos unir los dos anteriores en una sola expreción.

													Ej:	[0-5ou]		 		El navegador buscara los numeros del 0 al 5 y por otro lado la letra "o" y la letra "u" 



	- Cadenas completas: 						Sirve buscar mas de una palabra al mismo tiempo. Para establecer una cadena completa debe ir entre paréntesis, si 
												queremos más palabras irán separadas por un pipe "|"

	  												Ej: (auto|perro|casa) 	Con esto solamente buscariamos las palabras "auto", "perro" y "casa". 
													  						Tener cuidado con los espacios porque también cuentan 
	  

*/


