

/* 
 - En el codigo tenemos la propiedad "this.props.task.done" que representa si la tarea esta hecha o no. En su interior contiene el valor "true" o "false".
   Dependiendo de este valor, nuestro componente va a tener un estilo u otro. Osea, si la tarea esta completada o no, el componente va a tener un estilo u otro 

 - Recordar que estos valore vienen de la base de datos que esta en el archivo "tareas.json" que esta dentro de la carpera "datos"

 - Para hacer esto, vamos a crear una función 



- Para cambiar los estilos de de forma dinamica nos valdremos de una función la cual sera pasada al atributo style={}

 - ¿Por que necesitamos de una función si podemos usar un objeto?
   La razon de usar una función se debe a que gracias a esta podemos usar condicionales o hacer otras interesantes con JavaScript

*/
   



import React from 'react'



class Task extends React.Component {

	StyleCompleted () {															// Esta funcion nos va a retornar un objeto con estilos. Gracias a que estamos usando una función, podemos hacer que dichos estilos respondan a que si "this.props.task.done" almacena como valor un true o un false. En otras palabras, el estilo del componente va a cambiar dependiendo de que si la tarea esta hecha o no  	
		return{															
			fontSize: '20px',
			color: this.props.task.done ? 'gray' : 'black',						// Este es un "operador ternario" (tema ya visto en el tutorial de JavaScrip). Es un condicional que basicamente dice que si "this.props.task.done" es igual true, que el color del texto sea gris, caso contrario que sea negro
			textDecoration: this.props.task.done ? 'line-through' : 'none'
		}
	}

	render(){
		return(
			<div style={this.StyleCompleted()}>								   	{/* Al atributo style={} le estamos dando la funcipon que dentro tiene los estilos */}							
				{this.props.task.title} - {this.props.task.description} - {this.props.task.done} - {this.props.task.id}	
				<input type="checkbox"/>
				<button>X</button>					
			</div>
		)
	}
}



export default Task;
