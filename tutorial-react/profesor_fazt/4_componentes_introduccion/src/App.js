/*

														_____Componentes - introducción_____



 _____¿Que son los componentes?_____
 
 - Los componentes que encontramos en una página web o aplicación. Son un conjunto de muchas cosas (etiquetas HTML, etilos CSS y JavaScrit) que 
   conforman algo mucho más grande. Pueden ser botones, cuadros de videos recomendados junto con u corespondente titulo, tweets, publicaciones de facebook, 
   comentarios de youtube con su respecivo nombre e usuario y foto, peliculas recomendadas de Netflix con su respectivas descripciones, etc

 - Como se puede apreciar, son partes individuales que tienen su propia estructura y que se repiten constantemente 

 - ¿Por que se llaman componentes? 
   Se llaman así porque pueden estas pequeñas partes pueden encapsular tanto codigo como HTML, CSS y JavaScript 

 - Dato de color: En la practica, cuando escribamos codigo, estos componentes van a lucir como etiquetas HTML    
   En otras palabras, el crear "comopenentes" es como si estuviésemos creando nuestras propias etiquetas HTML. La razon de crearlas es que luego podremos 
   reutilizarlas en otras aplicaciones o páginas web y que funcione exactamente igual
   
   


 _____Archivo con el que trabajaremos:_____

 - Iremos a la carpeta "src" y luego al archivo "app.js" 

 - App.js			- Aquí adentro esta lo queremos pintar por pantalla. Osea, una función que representa a nuestro componente/elemento. Dicha función esta escrita en
 					  codigo JSX

					- El codigo que esta aquí adentro parece raro ya que se ve como codigo HTML entro de dentro de un archivo JavaScript pero este codigo es en 
					  realidad codigo "JSX". Si prestamos atencion podremos notar las diferencias en el nombre las propiedades. 
					  Por ejemplo, en las etiquetas en vez de haber una propiedad class="" hay una propiedad	llamada className="". 

					- Recordar que el codigo JSX aunque parezca codigo HTML es en realidad codido JS. Esto lo podemos ver en la pagina oficial de "Babel rpl" que nos 
					  permite convertir codigo de JSX a JS. (Verificar con el siguiente ejemplo 	<h1>Hello Word</h1> 	en la pagina https://babeljs.io/repl     
					  esto me va a devolver: React.createElement("h1", null, "Hello word!"); Si nos fijamos, esto es codigo JS comun y corriente) 

					- Basicamente JSX es lo mismo que crear elementos en JS pero con una sintaxis más simple  




 _____Crear una funcion que crea a nuestro componente:_____					

 	function NombreDeLaFuncion() {					- Esta funcion esta dentro del archivo App.js. Dicha función me retorna el componente/elemento que cree adentro 
  		return (									  con codigo JSX. Por convencion el nombre de dicha función comienza con mayuscula  		
			(elemento creado con codigo JSX)		- El nombre de la funcion debe por norma debe comenzar en mayuscula
		);
  	} 						




 _____Utilizar componente:_____ 	
 
 - Para ello, dentro del componente principal "app" ponemos dentro el nombre de nuestra función recien creada como si fuera una etiqueta
 	Ej:		function App() {																	
				return (													
					<div>Compoenete pricipal: <NombreDeLaFuncion/> </div>			
				);
			}   

 - Esto es muy util debido a que nos permite reutilizar componentes cuantas veces queramos. Si queremos que un componente vuelva a aparecer, simplemete copiamos y 
   pegamos esta etiqueta. Asi funcionan los componentes de pagínas más grandes como Instagram, donde simplemente reutilizan los componentes como el conjunto de
   imagen-usuario-opcion de like   





// _____Escribir la misma función principal de otras maneras:_____

// Mediante la forma clasica. Una función de JavaScript simple:
   Ej:			function App() {																	
					return (													
						<div>Compoenete pricipal: <HelloName/> <HelloName/> <HelloName/></div>				
					);
				}

// Mediante una función de flecha
	Ej:			const App = () => <div>Compoenete pricipal: <HelloName/> <HelloName/> <HelloName/></div>

// Mediante una clase
	Ej:			class App extends React.Component{
					render() {
						return <div>Compoenete pricipal: <HelloName/> <HelloName/> <HelloName/></div>
				}
} 




 ____Darle estilos a nuestros componentes_____ 

 - Cuando creamos un componente, obviamente debemos darle un atributo class="" para luego darle estilos con CSS. 
   Recordar que en vez de usar el atributo class="" en el caso de JSX debemos poner className="". Es lo mismo pero con otro nombre 
 
 - Luego iremos a al archivo "App.css" y le daremso los estilos que desiemos por medio
   de CSS como hacemos siempre
   




*/ 







import './App.css';

function HelloName(){																// Acabo de crear esta función que detro tiene un componente
	return (
		<div className="nombre">Hola Nikin</div>									// Este es el componente que cree solamente con un <div>. Si metiera más elementos dentro del <div> este componente seria mucho más complejo
	);																				// Recordar que dentro del archivo App.js, cuando le declaremos una clase a un componente/elemento en lenguaje JSX no usaremos el artibuto class="", en su lugar usaremos la palabra className="". Es exactamente lo mismo pero con otro nombre. Recordar que estos cambios tambien se aplican en el resto de atributos
}


function App() {																	// Esta funcion app() es el componente principal que aparece en nuestra página web por defecto. Dentro le meteremos nuestra función HelloNombre() que acabamos de crear	
  return (													
	<div>Compoenete pricipal: <HelloName/> <HelloName/> <HelloName/></div>			// Esta es la forma de poner un componente dentro de otro. Simplemente lo tratamos como si fuera una etiqueta más. Podemos poner tantos de ellos como deciemos	
  );
}

export default App;







