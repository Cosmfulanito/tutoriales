/*
														_____Hooks: useState() - Dorian_____




 useState()				- Es un Hook que sirve de reemplazo para los "states" que ya conocimos antes y que quedaron obsoletos
						
 						- Su función es básicamnete la de almacenar información como si fuera una variable (como se hacian con los states obsoletos)							

						- Antes de ser usado debe ser importado:
							import React, { useState } from 'react'	

						- Cuando lo usemos, declararemos 3 cosas distintas:
						  const [*variable, *setVariable] = useState(*valor) 

								- Variable: 	- Es el nombre de la variable la cual almacenara el valor. Es el equivalente a la "key" del "state". 
								            	- Cuando la usemos simplemente ponemos su nombre. No hace falta ponerle un this. al frente como se hacia antes con
												  los states. Lo cual lo hace mucho más comodo  

								- setVariable:  - Es un metodo el cual sirve para actualizar el valor de la variable. Al utilizarlo le pondremos unos parentesis al 
								                  al final y adentro el nuevo valor. Es el equivalente al setState(). 
												- Siempre debe tener como prefijo la palabra "set", seguido de la misma palabra con la cual declaramos la variable
													Ej: variable = gato     =>     setGato       =>	      setGato()  	

								- valor			- Corresponde simplemente al valor de la variable			
*/




/*
 - En este apunte vamos a aprender los conseptos del "hooks" useState() mediante la practica. 
 - Usaremos como referencia una App de React ya creada en el tutorial de Dorian que esta en Udemy y en base a ella borraremos las clases incluidas sus herramientas 
   y luego le seran agragados los "Hooks". Simplemente copie pegue la App para luego trabajar con ella
 - Esta App que estamos usando consta unicamente del archivo App.js, nada más. Su función es mostrar el numero 10, por debajo tiene 3 botones: El primero es para 
   sumar una unidad, el segundo es para restar una unidad y el tercero es para recetear los numeros a 0.
 - En base a esta App, quitaremos las "clases" y agregaremos los "Hooks" y su funcionamiento sera exactamente igual. Pero con con menos codigo, más intuitivo y más
   eficiente incluso para el navegador     
 - En este apunte vamos a comentar a las partes reemplazadas o eliminadas mediante un /////. Pero en las partes donde esto se repita, simplemente se eliminara el 
   codigo sin comentarlo
*/






//// import React, { Component } from 'react'
import React, { useState } from 'react'							// Ahora importamos el hook "useState" (reemplazo de "state"). Esto nos permite usar un estado en funciones // Tip: Todos los Hooks comienzan por el prefijo "use" y luego le sigue un sufijo que describe lo que hace  // Antes importabamos la palabra Components


//// class App extends Component {
const App = () => {												// Esto antes era una "clase". Ahora es una "función de flecha"

    /*state = {
		number: 10 
	}*/		
	const [number, setNumber] = useState(10)					// Esta es la nueva manera manera de declara los states. utilizando el Hook useState()  // Básicamente tenemos una variable llamada "number" con la que vamos a trabajar cuyo valor es 10. (al igual que con el state origuinal). También acabamos de crear un metodo llamado setNumber() con el cual trabajaremos más adelante, cuya funcion es actualizar el valor de su correspondiente variable "nombre" (es el equivalente del obsoleto setState()). El nombre de este metodo se los dimos nosotros y es acorde al nombre de la variable "number". Si la variable se llamara "perro" este metodo se llamaria setPerro()  



    ///// handleIncrement = () => {
	const handleIncrement = () => {								// La funcion que estaba antes ahora debemos declararla 
        // this.setState({
        //     number: this.state.number + 1
        // })
		setNumber(number + 1)									// Utilizamos este metodo que creamos más arriba para actualizar el valor de su variabloe correspondiente "number". El nombre de este metodo se los dimos nosotros y es acorde al nombre de la variable "number". Si la variable se llamara "perro" este metodo se llamaria setPerro()  			
    }

    const handleDecrement = () => {
		setNumber(number - 1)
    }

    const handleReset = () => {
		setNumber(0)
    }

    ///// render() {																		// El metodo render era propio de las clases. Al no usarlas este metodo ya no hace falta
        return (
            <>
                {/* ///// <h1>Number: {this.state.number}</h1> */}
                <h1>Number: {number}</h1>													{/* Gracias al hook setState, simplemente ponemos la variable que declaramos, en este caso number.  // Es this.state.number es propio de los antiguos states que ya estan obsoletos  */}
                {/* <button onClick={this.handleIncrement}>Increment</button> */}
                <button onClick={handleIncrement}>Increment</button>						{/* Eliminamos el this. por que al no estar en una clase ya no hace falta */}
                <button onClick={handleDecrement}>Decrement</button>
                <button onClick={handleReset}>Reset</button>
            </>
        );
    
}

App.defaultProps = {
    number: 0
}


export default App;