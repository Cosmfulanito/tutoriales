/*

														_____Expresiones Regulares - Operadores_____



 - Este es un tema muy complejo y se recomienda ir al video tutorial
 	https://www.youtube.com/watch?v=Dym1Q1gr0FI&list=PLROIqh_5RZeBAnmi0rqLkyZIAVmT5lZxG&index=50
 	https://www.udemy.com/course/draft/2834790/learn/lecture/18205772#content														





 - Las expreciones regulares son reglas especificas que deben respetarse para cumplir la busqueda



 - Hay varios tipos de operadores, pero estos dos son los más importantes:

		- Delimitadores: 			^		- Antes de este símbolo no puede haber nada escrito. De lo contrario el navegador me devolvera un "false"
												Ej: 	/^hola/			Para que el navegador me devuelva un "true", no debe haber nada escrito antes de la palabra 
																		"hola"
		

									$ 		- Despues de este símbolo no puede haber escrito. De lo contrario el navegador me devolvera un "false"
												Ej: 	/.com$/			Para que el navegador me devuelva un "true", no debe haber nada despues del ".com" 

								


		- Cantidad:					{}		- Antes de las llaves va el patron de busqueda. Dentro de las llave va el numero de veces que se debe debe repetir ese 
											  patron para que el navegador me devuelva un "true"
 											- Hay 3 convinaciones posibles:
												{n}	 			El patron se tiene que repetir "n" cantidad de veces para que sea valido
												{min,max}		El primer valor es la cantidad minima de repeticiones del patron y el segundo es la cantidad maxima 
												                para que sea valido
												{min, }			Hay una cantidad minima de repeticiones del patron para que la exprecion regular sea valida. Mientras 
												                que la cantidad máxima es indefinida

												Ej: 	^[a-zA-Z]{1,3}@{1}$ 	Para que navegador me devuelva true, tengo que poner la misma letra antes del @ entre 
																				1 y 3 veces. Y solamente puede haber un solo @   ==>  aaa@

													
									*		Lo que está antes del asterisco puede estar, puede no estar y se puede repetir.
												Ej:		A[1-9]*					Para que el navegador me devuelva true, debo poner una palabra que tenga la letra A, a
																				su vez de forma opcional puedo poner numeros que puede o no repetirse 
																				A	;	A5	 ;	A452385			Estas tres opciones son igual de validas


									?		Lo que esta antes de la interrogación puede no estar, pero de llegar a estar, solo puede aparecer una vez
												Ej :	^[ae]?$					Le estoy diciendo al navegador que el texto solo puede tener una "a" o una "e". Si 
																				pongo cualquier otra letra o las repito, el navegador me va a adevolver un "false" 

																				
									+ 		Lo que esta antes del simbolo + tiene que estar una vez como mínimo
												Ej: 	A[1-9]+					Le estamos diciendo al navegador que como mínimo tiene que haber un numero para que me
																				devuelva un true. 
																				A5   ;   A82    ;   A7523946  	Estas tres opciones son igual de validas. Lo que no 
																												seria valido es poner solamente la letra "A"  		

*/