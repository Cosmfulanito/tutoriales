

/* 
 - En esta página vamos aponer imagenes de gatitos al azar. 
   Esto se hara mediante la información obtenida desde una API. Dicha API nos da una imagen al azar de gatitos sacados de tumblr */


const body = document.getElementById('body')
const imagen = document.createElement('IMG')					// Creamos el elemento/etiqueta img para luego pasarle el url con la imagen del gatito


axios({															// Para acceder a la API usamos axios
	method: 'GET',
	url: 'https://api.thecatapi.com/v1/images/search'
}).then(res => {												// En caso de salga todo bien, agarramos el link de la imagen y se la metemos en el atributo src="" de la etiqueta/elemento imagen
	imagen.src = res.data[0].url
	body.children[0].after(imagen)								// Le dije al navegador que ponga el elemento imagen recien creado, justo por debajo de su primer hijo. Osea, por debajo de la etiqueta <h1>. De esta manera, la imagen del gatito queda debajo del titulo pero arriba de las etiquetas <scritp>  
}).catch(err => console.log(err))								// En caso de que el link este mal escrito/caido aparecera un cartel de error en la consola

