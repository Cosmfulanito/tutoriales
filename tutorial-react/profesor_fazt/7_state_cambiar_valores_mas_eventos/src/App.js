/*

													_____Cambiar los valores de los "States" + "Eventos"_____


 _____Cambiar los valores de los States:_____

 	- setState(key: valorX)			- Con este metodo cambiamos el valor de las keys que estan dentro del state ={}
									- La logica nos dice que podriamos hacerlo de la forma tradicional, donde simplemente ponemos "state.key = valorX", pero React
									  no nos permite hacer eso  



 
 _____Eventos:_____
 
  - Simplemete ponemos los eventos como si fueran un atributo dentro del elemento/etiqueta deseado de nuestro componente
    Ej: <div onClick={() => div.stile.backGroundColor = red} ></div>


*/








/* Vamos a usar como referencia el codigo del apunte anterior, donde al cambiar el valor de la key "mostar" del state de true a false, hacia aparecer o desaparecer al 
   componente respectivamente. Pero en este caso vamos a cambiar el valor de los states/estados desde el navegador. 
   Esto lo haremos mediante el uso de un evento onClick */  


import React from 'react'
import './App.css';



class Hello extends React.Component {							

	state = {
		mostrar: true											 
	}

	render() {
		if(this.state.mostrar){
			return (																											// Con este evento onClick le estamos cambiando el valor de la key "mostar" del "State" (ya visto en apuntes anteriores) a false
				<div className="name">																												
					<h3>{this.props.titulo}</h3>					
					<p>{this.props.carita}</p>
					<button onClick={() => this.setState({mostrar: false})}>Cambiar el state/estado de true a false</button>
				</div>																												
			)
		} else{
			return(																												// Cuando el componente desaparezca, vamos a poder hacerlo volver a apaerecer mediante el mismo proceso, pero ahora camviamos el false por un true 
				<div>
					<h1>No hay elementos</h1>																				
					<button onClick={() => this.setState({mostrar: true})}>Cambiar el state/estado de true a false</button>
				</div>		
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




