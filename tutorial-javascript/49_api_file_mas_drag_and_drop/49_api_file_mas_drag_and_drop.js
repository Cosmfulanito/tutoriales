/*

															_____API File + Drag & Drop_____



 - Atributos:
	- enctype="multipart/form-data"				Este atributo va dentro del <form>. Este atributo es necesario siempre y cuando vayamos a enviar datos multimedia (imagenes, videos, audios, etc)				
												Todo lo que no sea parte de un formulario normal de texto tiene que ir con este atributo para que el navegador pueda interpretarlo



 - En esta practica guiada, como lo dice el titulo, haremos una página web utilizando "API File" + "Drag & Drop". APIs que ya fueron vistas anteriormente
 
 - Como objetivo tenemos que crear una pagína web que nos permita cargar imagenes haciendo click sobre un cuadro o arrastrando las imagenes hacia el.  
   Ej: Tengo una imagen en el el escritorio. Y la cargo en mi página web haciendo simplemente arrastrandola hacia mi página web y soltandola en el cuadro de carga.


*/


const fileInput = document.getElementById('file')				// Este es el <input> file al cual le cargamos la iformación 
const dropZone = document.getElementById('drop-zone')			// Este es el <div> que hara de zona de carga. Es hacia donde arrastraremos los archivos



// Hacer click en el cadro y que se active el <input>:
dropZone.addEventListener('click', () => fileInput.click())		// Con este evento, al hacer click en el cuado, fingimos que estanos haciendo click en el <input> file para enviar información		





// Arrastrar y enviar informacion al <input> file 
dropZone.addEventListener('dragover', (e) => {					// Este evento hace que cuando arrastre un archivo hacia el, cambie el estilo de la caja con agregarle un atributo class=""
	e.preventDefault()											// Esto evita que el elemento haga eventos que vienen por defecto en el, como hacer que se reinicie la página
	dropZone.classList.add('drop-zone--active')
})

dropZone.addEventListener('dragleave', (e) => {					// Este evento hace que cuando arrastre un archivo hacia el y luego lo quite, el estilo de la caja vuelva a su estilo orignal removiendo el atributo class="" que le fue agregado cuando se le arrastro adentro un archivo
	e.preventDefault()
	dropZone.classList.remove('drop-zone--active')
})

dropZone.addEventListener('drop', (e) => {						// Con este evento obtenemos toda la información del archivo que estamos arrastrando   
	e.preventDefault()
	console.log(e.dataTransfer.files)							// Este objeto contiene toda la información de la cosa que estamos arrastrando. Esto se aprecia mejor con firefox
	fileInput.files = e.dataTransfer.files						// Estamos guardando en nuestro elemento toda la información proveniente de ese evento. Osea, la información de esa imagen 
})																// Ahora simplemente hacemos lo que queremos con la imagen que subimos ya que la tenemos almacenada en la constante "fileInput", más precisamente en "fileInput.files" 






/* ¿Que hacmo ahora? Ahora hacemos lo que queremos. Podemos poner mianuras de los archivos, poner una barra de carga o lo que deciemos
   Como se puede apreciar, es muy poco codigo y la mitad de todo esto es solamente para darle estilos al <div> */