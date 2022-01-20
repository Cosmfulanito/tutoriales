/*
																_____Hooks: useState() - Dorian_____

	

	useEffect()									- Este hook se implemento para emular (y por lo tanto reemplazar) los "ciclos de vida" que teniamos en las clases

												- Estos son los ciclos de vida que useEffect puede emular: 
													- componentDidMount
													- componentDidUpdate
													- componentWillUnmount

												- Se debe ejecutar como una función de flecha

*/



/*
 - Como practica, crearemos una aplicación que muestra la hora a tiempo real, la cual se actualiza a cada segundo que pasa
*/


import React, {useState, useEffect} from 'react'



const App = () => {

	const [date, setDate] = useState(new Date().toLocaleTimeString())							// Este hook ya lo vimos en el apunte anterior. Básicamente estamos guardando en una variable la hora de mi computadora. La hora que se va a guardar es la hora de cuando habri la página web, esto quiere decir que si tengo la página web abierta durante media hora, la hora guardada va a ser de hace media hora atras 



	useEffect(() =>{

		//componetDidMount
		console.log('MOUNTED')

		//componentDidUpdate
		const time = setInterval(() => setDate(new Date().toLocaleTimeString()), 1000)			// Estamos creando un intervalo de tiempo que me actualiza la hora guardada cada un segundo

		//comoponentWillUnmount
		return ()=> {																			// Cada vez que montamos el componente nuevamente (actualizamos la hora) se genera un interbalo de tiempo nuevo que se suma con el anterior y me genera bugs. Con esto hago que se borre dicho intervalo luego de que montamos el nuevo componente para siempre haya un solo intervalo y por ende no se sumen
			clearInterval(time)
		}
	})

  	return (
    	<div>
			<h1>{date}</h1>
    	</div>
  	);
}

export default App;
