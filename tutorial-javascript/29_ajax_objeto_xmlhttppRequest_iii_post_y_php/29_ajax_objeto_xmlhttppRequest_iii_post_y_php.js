/*

														_____AJAX - Objeto XMLHttpRequest - POST + PHP_____


 - Se recomienda ver el video original de la clase:
   https://www.youtube.com/watch?v=iUX-8Z4x6r8&list=PLROIqh_5RZeBAnmi0rqLkyZIAVmT5lZxG&index=37
														
 - Este es un tema muy complejo para porder hacerlo caragar el navegador, ya que los archivos .php y .sql complican todo
 
 - Para poder hacerlo funcionar hay que seguir los mismos pasos que en el apunte anterior:




 ____Extracto del apunte anterior_____
 - Este tema es muy complejo ya debemos descragar otros programas y usar archivos como .php y .sql
   Se RECOMIENDA volver a ver el video tutorial:
   https://www.youtube.com/watch?v=uVcdSRphS4o&list=PLROIqh_5RZeBAnmi0rqLkyZIAVmT5lZxG&index=36



 - Para este apunte se debe usarel programa "WampServer", este es link con el tutorial de instalación:
   https://www.youtube.com/watch?v=Y3yOtPZgrWU&list=PLROIqh_5RZeBzit_KQRsBNpRDA-vSH1VT&index=7


 - TIPS: - Para poder habrir esta base de datos, tengo que guardar todos los archivos en la carpeta   C:\wamp64\www\clase33  (tiene este nombre por que es video n°33)
		   Osea, si bien esta este archivo en la carpeta "curso JavaScript". Tengo que ejecutar su copia que esta en la carpeta C:\wamp64\www\clase33
         - A su vez NO tengo que habrir el archivo .html con el liveServer. En cambio tengo que usar el programa descargado WampServer / local server. Para ello tengo 
           que unir la carperta al siguiente link: 	
		   Quedaria así: http://localhost/28_ajax_objeto_xmlhttpRequest_ii_get_y_php 

		 - Tambien tengo que ir a la siguiente pagína para que el .sql funcione: http://localhost/phpmyadmin  => Usuario: root   pass: (no lleva contraceña)

  





 



 _____Enviar información al servidor_____
 
 - Como lo dice el titulo, en este apunte vamos a enviar información al servidor

 - Los pasos son los siguientes:																														

 - RECORDAR que esto solo envia informacion al servidor. Para que dicha información sea revida y agregada al servidor hay que ver el tutorial de "crud"   */


const form = document.getElementById('form');

form.addEventListener('submit', (evento) => {
	evento.preventDefault();
	sendData(form)
});

const sendData = (data) => {
	let xhr
	if (window.XMLHttpRequest) xhr = new XMLHttpRequest()
	else xhr = new ActiveXObject("Microsoft.XMLHTTP");

	xhr.open('POST', 'marvel.php')								// Recordar que usams el metodo "POST"
	const formData = new FormData(data)							// Este es un objeto que puede recibir como parametro datos

	xhr.send(formData)											// Aquí le estamos enviando el formData
}



