/*

														_____API's - Intersection Observer I_____



 - La API "Intersection Observer" nos sirve para saber cuando un elemento se ve y cuando esta oculto
   
 - Esto nos ayuda entre muchas otras cosas, para hacer "Lazy load" (carga perezosa). Es decir, no cargamos elementos que no vemos, hasta que no lo vayamos a ver no 
   los cargamos. De esta manera ahorramos muchisimos recursos. Un ejemplo del uso "Lazy load" es instagram, ya que va cargando las fotos a medida que vamos haciendo 
   scroll.
   Esto muy util para compania/aplicaciones que manejan grandes volumenes de datos. Ya que no conviene para el usuario hacerle cargar 10000 imagenes de un saque, se
   le tildaria el navegador
   Solamente tendriamos que cargar 10/15 iamgenes que son las que se ven en la pantalla, y a medida que vamos haciendo scroll se van cargando el resto de a poco 





 - En Este apunte crearemos una página web donde habrá varias cajas <divs>. Estos cajas tendran una separación de un "viewport" (pantalla del navegador). Cuando 
   alguna de estas cajas aparezca en la pantalla mientras scrollemos, aparecera su nombre en la consola

*/


const boxes = document.querySelectorAll('.box')					// Esto ya lo vimos en el apunte 17-seleccionar-elementos-del-dom.      // Para refrezcar:   document.querySelectorAll(.selectorCSS)   Nos permite acceder a todos los elementos que coincidan con el nombre del selecctor CSS. Devuelve un nodeList. Recordar que como todo elemento CSS, su nombre debe llevar un punto "." al principio, de lo contrario no funcionara		

const callback = (entries) => {									// Este es el "callback" que usaremos como primer parametro para el constructor "IntersectionObserver" que esta más abajo.  Este callback recibe como parametro los elementos que tiene que vigilar, en este caso van a ser cada una de las cajas, por convención recibe el nombre de "entries"
	// console.log(entries)										// Esto nos vas a devolver un array con mucha información. Ya que cada caja va a ser un objeto guardado como un valor del array. Lo importante aquí entre toda es informcaión es la key "isIntersecting", ya que ella nos dice si la caja es "visible o no" por medio de los valores true o false  
	entries.forEach(entry => {									// Esto lo vimos en el apunto "14. Arrays - Métodos II". Básicamente ejecuta la función una vez por cada elemento del array, funciona como un "bucle for".  // Recordar que "boxes" es un array de cajas.   
		if(entry.isIntersecting){								// Estamos preguntando si estamos iterceptando ese elemento. Osea, si lo estamos viendo
			console.log(`${entry.target.id} Esta siendo visto`)
		}
	})
}

const options = {												// Este objeto lo usaremos como segundo parametro para para el constructor "IntersectionObserver" que esta más abajo. 
	// root:									    			// Es el elemento padre que vamos a estar vigilando. Lo normal (y por defecto) es que estemos vigilando el "viewport" (pantalla de nuestro navegador). Pero también se puede eleguir otro elemento si así lo deseamos  
	//rootMargin: "200px"										// Funciona igual que el "margin:" en CSS y le podemos pasar de 1 a 4 parametros (al igual que el margin de CSS). En este caso que tenemos como valor 200px, siginifica que estamos escuchando todo lo que esta en el "viewport" (pantalla del navegador) más 200px extras que no se ven. Por ende estamos interceptando a los elemento 200px antes 
	//threshold: 0.25                                           // Esto recibe valores entre 0 y 1, donde 0 es el valor por defecto. Este caso tengo un "0.25", eso significa que interceptaremos la caja cuando la veamos un 25% de esta caja.  // Si pueramos como valor "1" significaria que no estamos interceptando la caja hasta que se vea la caja por completo
}

const observer = new IntersectionObserver(callback, options)	// Estamos creando nuestro "Intersection Observer". Este constructor que recibe dos parametros. El primero es la funcion que se va a ejecurar cuando entre en nuestro rango de visión. Osea, que es lo que queremos que haga. En este caso pusimos "callback" porque es un calbacka  la espera que se ejecute algo. Este callback hay que crearlo con antelación; El segundo paramentro es opcional y en este caso lleva el nombre de "options", es un objeto que lleva dentro 3 propiedades que son opcionales. Este parametro debe ser creado con anterioridad  
boxes.forEach(element => observer.observe(element))				// Para que el "console.log(entries) de arriba se ejecute, necesitamos de esta linea de codigo. Esto lo vimos en el apunto "14. Arrays - Métodos II". Básicamente ejecuta la función una vez por cada elemento del array, funciona como un "bucle for".  // Recordar que "boxes" es un array de cajas.   // .observe() es un metodo que sirve para observar   // Con esto le decimos al navegador que "observe" a todas las cajas 
																