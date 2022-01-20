/*

															_____Props (propiedades) - Introduccion_____



 - Los "Props" traducido como "Propiedades", son objetos que contienen que contienen información y pueden ser agregados a cada copia de un mismo "Componente" 
   Gracias a esto, podemos a hacer que las copias de un mismo componente tengan diferencias propias y por ende, se vuelvan unicas

 - Basicamente los Props nos permiten ingresarle informacion a los componentes desde fuera
*/








import './App.css';

function Hello (props) {										// Para que "Props" funcione debemos ponerlo como parametro 
	console.log(props)											// Esto es para ver esos valores en la consola 		
	return (													// Props funciona como un objeto. Este componente nos va a devolver esta key especifica del objeto props. En este caso la key se llama "texto". La forma de declararlo es poniendo dentro de unos corchetes {}  el parametro "props" segido de un punto y luego la key que queramos crear. Ej {props.texto}		// Luego tendremos que usar es misma key a modo atributo más abajo en el componente principal. De esta forma le daremos el valor que deciemos
		<div className="name">
			<h3>{props.titulo}</h3>
			<p>{props.carita}</p>
		</div>				
	)
}



function App() {
  	return (													// Desde este Componente principal estamos llamando a nuestro componente (tal cual lo hicimos en apuntes anteriores). Pero aquí para poder aplicar los "props" lo que haremos es poner la key que declaramos más arriba como si fuera un atributo. Como valor de dicha key ira lo que nosotros deciemos  
		<div>Compoenete pricipal: 								
			<Hello titulo="Primer titulo"/> 				
			<Hello titulo="Segundo titulo"/> 
			<Hello titulo="Tercer titulo" carita="(っ◕‿◕)っ"/>
		</div>													// Como podeos apreciar, en el tercer componente pusimos 2 props para un mismo componente
 	);
}

export default App;
