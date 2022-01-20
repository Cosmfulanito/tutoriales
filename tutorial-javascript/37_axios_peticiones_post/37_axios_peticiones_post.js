/*

															_____Axios - peticiones - POST_____



 - Su funcionamiento es igual que con el metodo GET ya visto en el apunte anterior. Pero en la key "method:" obviamente debemos poner como valor "POST" 															
 
 - Tambien debemos poner una tercera key que se llame "data:". En ella iran todos los valores que desiemos enviarle a la base de datos 
 
 - Una de las ventajas de axios que no hace falta que convirtamos la información que le vamos a pasar a la base de datos a "string" como se hacia con 
   "XMLHttpRequest" o "fetch". Axios lo hace automaticamente por nosotros
   A su vez la respuesta que nos va a delvolver la base de datos, tampoco hace falta convertirla de formato JSON a objeto debido a que axios tambien hace ese trabajo
   por nosotros 

 - RECORDAR que tener acceso a la libreria de axios, hay que entrar al link de la página axios y en la parte de "Using unpkg CDN:", copiar el link que nos da. Luego 
   ese link hay que pegarlo en una etiqueta <script> dentro del archivo .html. Recordar que dicha etiqueta siempre debe estar arriba de nuesto <script> principal en 
   el cual programamos para evitar que haya problemas de sobreescritura															

*/




/* - En este ejemplo vamos a hacer el mismo ejercicio que en el apunte "33_ajax_fetch_post" pero en este caso usaremos Axios en vez de fetch
   - Usaremos una una base de datos falsa de prueba para enviar información. Esta sacado de esta página (la misma que nos da la API falsa): 
     https://jsonplaceholder.typicode.com/guide/   */

const button = document.getElementById('button')

button.addEventListener('click', () => {
	axios({
		method: 'POST',																	// En "method:" obviamente tenemos que poner POST como valor" 													
		url: 'https://jsonplaceholder.typicode.com/users'
	}).then(res => console.log(res.data))												// Esta es la respuesta que me devuelve el servidor. De toda información que nos va a devolver, a nosotros nos interesa el .data. Básicamente es la misma informacíon que le enviamos PERO con un valor extra que es el "id". Dicho id me va a mostar el numero 101. Esto significa que fuí la persona numero 101 en enviarle un información a este servidor (obviamente este numero es simbolico porque el servidor es falso, y debido a eso siempre me va a devolver ese mismo numero, pero es una forma de saber si el programa funciona correctamente)    // Lo interesante aquí es que no hace falta convertir la respuesta de formato JSON a objeto ya que el Axios lo hace por nosotros
	  .catch(err => console.log(err))													// Este es el mensaje de error que me a saltar en caso de que la url este mal escrita
})


