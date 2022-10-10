/*

                                            _____ Repl: Read Eval Print Loop _____

 - Este tutorial es del profesor Fazt
   Link: https://www.youtube.com/watch?v=i3OdKwuBjeM&t=35s


                                            
    
    
 - ¿Que es el Repl?
   	Repl no es más que el interprete/termianl propia de node. Osea, es el equivalente a la consola del navegador / terminal.
   	Esto nos da ventajas sobre javaScript, ya que al no estar ejecutandoce sobre un navegador, nos permite tener información del sistema operativo. La desventaja es que al no ejecutrse sobre un navegador, hay propiedades que se vuelven inservibles como la que permite saber el ancho de viewport del navegador


 - ¿Como abrir node?
   	Solamente tengo que escribir "node" en la terminal y ya esta listo para funcionar!


 - ¿Como abrir un arhivo .js con node?
  	Desde la terminal, me posiciono en la carpeta que contiene el archivo deseado y abro node. Luego escribo ".load archivo.js"
	

 - ¿Como ejecutar un archivo .js con node pero sin usar el Repl? Osea, dese la terminal del sistema operativo 	
	Desde la terminal, me posiciono en la carpeta que contiene el archivo deseado y escribo "node archivo.js"


	
 - Comandos propios del Repl:
   	.break              Sometimes you get stuck, this gets you out
   	.clear              Alias for .break
   	.editor             Enter editor mode
   	.exit               Exit the REPL
   	.help               Print this help message
   	.load               Load JS from a file into the REPL session
   	.save               Save all evaluated commands in this REPL session to a file    

 - Atajos de teclado:
   	Ctrl + l            Limpia la pantalla.
   	Ctrl + c            Termina la ejecucion de un programa. Esto es util por si queremos forzar la detencón una función que no para de ejecutarse. Usar esto es comun en srvidores, ya que son programas que se ejecutan automaticamente
   	Ctrl + c   x2       Sale de node. Equivalente a escribir .exit      


     
 - Objetos:  Estos son algunos ejemplos
   process             Me devuelve un objeto que me da informnación acerca mi sistema operativo
   process.cwd()       Me dice donde esta ubicado el archivo en el que estoy trabajando
   os.userInfo()       Me devuelve información de mi usuario de sistema



*/