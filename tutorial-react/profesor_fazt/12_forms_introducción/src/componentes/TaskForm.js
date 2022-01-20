
/* 
 - En este archivo veremos el funcionamiento del form.  
 - Tambien es aquí donde estaran toda la informacion de este apunte


 - Como actividad vamos a crear un form que contengan dos elementos. Un <input/> para almacenar el titulo de la tarea que vamos a agregar y un <textarea/> que va a 
   almacenar el contenido de dicha tarea. Luego guardaremos toda información el "State" (tema ya visto en su respectivo apunte)


 - Resumen del funcionamiento de este componente:  
   - Basicamente hay dos "values", uno es la información escrita a tiempo real dentro del <input/> o del <textarea/> y el otro es el atributo value="" HTML con el 
     valor que notros queremos darle.
   - Primero accedemos a la información del primer tipo de value que guarda la información en tiempo real de lo escrito dentro del dentro del <input/> o del 
     <textarea/> mediante la función "obtenerInformacion". Luego guardamos la información de esos elementos en sus respectivas "keys" dentro del "State"	
   - Luego  dentro del segundo "value" (el atributo HTML) de su respectivo elemento, le declaramos como valor el mismo valor que esta dentro del de su respectiva 
     "key" del "State". ¿Cual es la funcion de este segundo atributo value=""? Por el momento no lo usamos para nada. Posiblemente le demos utilidad en proximo apunte  	 
*/





import React from 'react'


class TaskForm extends React.Component{

	noRecargar = (e) => {																												// Esta funcion es necesaria para poder crear el evento que contiene el metodo preventDefault(), necesario para que no se recargue la pagina cuando enviamos información. Este metodo ya lo conocemos desde el tutorial de JavaScript. Esta funcion luego sera utilizada en el evento "onSubmit" más abajo, dicho evento se activa cuando escucha que se ha anviado información (osea, cuando se preciono el boton). El motivo por el cual debemos crear esta funcion para luego enviarlo al evento en vez de hacerlo todo en el mismo evento se debe a que necesitamos el segundo parameto "e" (tambien llamado "event" o "evento"), y por algun motivo JSX no permite ponerle segundos parametros a los eventos   
		e.preventDefault()

		console.log(this.state)																											// Esto se puso a ultimo momento, vasicamenete nos permite acceder a la información del "State", la cual se actualiza cada vez que escribimos en el <input> o el <textarea/> 
	} 
	
	obtenerInformacion = (e) => {																										// Esta funcion va a obtener la informacion del elemento en el cual sea aplicada. Vamos a usar esta misma funcion para elementos <input/> y <textarea/>   
		this.setState({																													// Este metodo es propio de React, lo que hace es cambiar el valor del "State". Básicamente estamos obteniendo el valor (información escrita) del <input> o del <textarea/> y lo estamos guardando es su respectiva "key" del "state" 																													
			// titulo: e.target.value
			[e.target.name]: e.target.value																								// La sintaxis de arriba que esta comentada si bien seria la logica, da un problema ya que el navegador no sabe reconocer de donde viene la información dada, si es que viene del <input> o del <textarea/>. Para solucionar eso, le pondremos a cada elemento un atributo name="" (atributo ya visto en el apunte de HTML) para poder reconocerlo. Dicho atributo tendra como valor (nombre), el mismo nombre que lleva su respectiva "key" del state, de lo contrario no funciona. Osea <input name="titulo"/>  y <textarea name="descipcción"/>. 	Luego en en esta misma función reconoceremos a cada elemento segun el valor de su atributo name="". Por algun motivo que dezconozco esto tiene que estar entre []
		})
		console.log(e.target.name, e.target.value)																						// Esto me permite ver el nombre del elemento y su respectivo valor
	}
	
	state = {																															// En este "state" guardaremos la información proveniente del <input/> (titulo:) y del <textarea/> (descripcion:)  
		titulo: '',
		descripcion:''
	}

	render(){
		return (
			<form onSubmit={this.noRecargar}>																							{/* "onSubmit" es un evento que se activa cuando escucha que se ha enviado información. Adentro le pusimos una funcion la cual tiene adentro el metedo preventDefault() para evetitar que se recargue la página cuando envie información (tema ya visto en el tuturial de JavaScript) */}		
				<input type="text" placeholder="Escribe una tarea" onChange={this.obtenerInformacion} name="titulo" value={this.state.titulo}/>		{/* Como se puede apreciar, de la misma manera que lo haria en HTML, acabo de craer un elemento del <input> del tipo "text" con un atributo "placeholder" para que se visualice ese texto en el <input>. Todo tal cual lo harian HTML     // En este elemento aplicaremos el "evento onClange" (se ejecuta cuando escucha un cambio) el cual al activarse ejecutara la función "obtenerInformacion". De esta manera obtendremos la información que esta escrita en el. Recordar que reclicaremos la misma función en el elemento <textarea/>     // El atributo name="" (atributo ya visto en el tutorial de HTML) lo tenemos que utilizar para solucionar un problema que nos da la función "obtenerInformacion". En dicha función se explica esto con más detalle pero básicamente lo utilizamos para poder reconer de que elemento proviene la información cuando la ingresamos. Dicho atributo tiene que tener como valor/nombre, el mismo nombre de su respectiva "key" del "State" de lo contario no funciona   // Hay dos tipos de "value", el primero es la información escrita en este elemento. Luego esta esta este atributo value="" que lo que hace es guardar como "valor" el valor que esta en la key "titulo" del "State". La información de dicha key proviene del primer "value" del que hablamos recien que tiene como valor lo escrito en el <input/> (lo se, esto da más vueltas que la celesita) ¿Cual es la funcion de este segundo atributo value=""? Por el momento no lo usamos para nada. Posiblemente le demos utilidad en proximo apunte  */}
				<br />																													{/* Esta es una etiqueta <br> comun y corriente. RECORDAR que en JSX todas las etiquetas deben tener una etiqueta de cierre. Pero hay casos como este ejemplo o como con la etique <input> las cuales no tiene una segunda etiqueta de cierre, en estos casos debemos ponerle un un "/" al final antes de cerrala */}	
				<br />
				<textarea placeholder="Escribe una descripcion de la tarea" onChange={this.obtenerInformacion} name="descripcion" value={this.state.descripcion}></textarea>	{/* Este elemento <textarea/> ya lo vimos en el tutorial de HTML    // En este elemento aplicaremos el "evento onClange" (se ejecuta cuando escucha un cambio) el cual al activarse ejecutara la función "obtenerInformacion". De esta manera obtendremos la información que esta escrita en el. Recordar que reclicaremos la misma función en el elemento <input/> */}		
				<input type="submit"/>																									{/* Este es un <input> del tipo "submit". Basicamente es un boton. Este tema ya lo vimos en el tutorial de HTML */}
			</form>
		)
	}
}

export default TaskForm



