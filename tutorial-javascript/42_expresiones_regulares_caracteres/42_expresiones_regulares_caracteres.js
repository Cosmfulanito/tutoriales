/*

														_____Expresiones Regulares - Caracteres_____



 - Este tema es muy complejo y por ende se recomienda volver a ver el video tutorial:
   https://www.youtube.com/watch?v=MdpydedFiKk&list=PLROIqh_5RZeBAnmi0rqLkyZIAVmT5lZxG&index=48
   https://www.udemy.com/course/draft/2834790/learn/lecture/18205776#overview



 - Los caracteres especiales, como su nombre lo indica, son caracteres que tienen determinadas funciones
 


 - Hay muchos tipos de caracteres especiales, pero estos son los más importantes:
	
		\s				Coincide con un carácter de espacio, entre ellos incluídos espacio, tab, salto de página, salto de linea y retorno de carro 
							Ej: ^[a-zA-Z]+\s[a-zA-Z]+$		Con esto podemos validar el conjnto de nombres y aprellidos. Ya que usuario debera poner su nombre, luego 
															un espacio y por ultimo su apellido para que el navegador me devuelva un "true". De poner una sola palabra
															me devolvera un "false", lo mismo si pongo 3 o más palabras separadas por un espacio
															David Bowie 		Es totalmente valido

		\S				Coincide con todo menos con los caracteres de espacio. Esto se puede utilizar en un campo de formulario para validar de que no haya "espacios".
							Ej: ^\S{5}$						Le digo al navegador que solamente esta permitido las palabras de 5 letras y sin espacios 	


		\d				Coincide con un caracter de numero. Equivale a [0-9]. Puede ser utilizado para validar numeros de telefono, tarjeta, DNI, etc
							Ej: ^\d{5}$						Le estamos diciendo al navegador que nos devuelva un "true" solamente cuando haya 5 digitos. Si metemos
															otra cantidad de numeros, un espacio o una letra, me devolvera "false"
															85674				Es totalmente valido


		\D				Coincide con cualquier caracter, menos con los de numero
							Ej: ^\d{5}$						Le estamos diciendo al navegador que para devolverme un "true" debo ingresar 5 caracteres y que ninguno 
															sea un numero 
															qyhdg				Es totalmente valido


		\w: 			Coincide con cualquier caracter alfanumérico, incluyendo al guión bajo 
							Ej: ^\w+@$						Le estamos diciendo al navegador que para que nos devuelva un "true", podemos escribir cualquier conjunto 
															de caracteres alfanumericos (incluido el guión bajo) seguido de un @    
															asdas_52@    		Es totalmente valido


		\W  			Coincide con todo menos con los caracteres de palabra
							Ej: ^\w+$						le estamos diciendo al navegador que solamente nos devuelva "true" si el texto NO tiene caracteres 
															alfanumericos o un guión bajo. Osea, que me devuelva "true" si el texto tiene solamente caracteres extraños
															."+@&%$?				Es totalmente valido	
*/