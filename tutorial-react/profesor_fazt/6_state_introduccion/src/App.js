/*

															_____State: Estado de componente_____



 - Los "States" tarducidos como "Estados" son datos internos que tienen los componentes. 
   Son diferentes a los "props" (propiedades) que vimos anteriormente ya que estos ultimos reciben datos de afuera



 - Dentro de una funcion o uan clase (tema ya visto en el apunte 4_componentes_introduccion) podemos crear una propiedad llamada "state", etso es basicamenete un 
   objeto. Este objeto lo que hace es guardar datos del componente creado




	     

*/






/* Vamos a crear un State que guarde informacion. En este caso sera una key llamada "mostrar" que almacenara un valor que puede ser true o false. Dependiendo cual sea
   ese valor, nuestro componente sera mostrado o no en el navegador */  

import React from 'react'
import './App.css';



class Hello extends React.Component {							// Aqui en vez de usar una funcion, usaremos clase de JavaScript para crear nuestro componente. Es lo mismo pero hecho de otra manera. Esto ya lo vimos en el apunte:  4_componentes_introduccion.   // Recordar que para que props funcione en una clase, es nesesario usar la palabra clave "this" como esta más abajo. Esto se debe a que antes al estar en funcion podiamos usar props como un parametro, pero ahora al estar en una clase, uso a props como una propiedad y por ende tengo que poner "this"

	state = {
		mostrar: true											// Cambiar entre "true" y "false" para apreciar su funcionamiento  
	}

	render() {
		if(this.state.mostrar){
			return (													
				<div className="name">								
					<h3>{this.props.titulo}</h3>					
					<p>{this.props.carita}</p>
				</div>				
			)
		} else{
			return(
				<h1>No hay elementos</h1>
			)
		}
	}
}




function App() {
  	return (
		<div>Compoenete pricipal: 								
			<Hello titulo="Primer titulo"/> 				
			<Hello titulo="Segundo titulo"/> 
			<Hello titulo="Tercer titulo" carita="(っ◕‿◕)っ"/>
		</div>													
 	);
}

export default App;

