
/*

Para crear este programa, me voy a basar en la ecuacion de Harris-Benedict. Es una ecuación empírica para estimar el metabolismo basal de una persona 
en función de su peso corporal, estatura y edad, y es utilizado en conjunto con factores de actividad física, para calcular la recomendación de consumo 
diario de calorías para un individuo.       

Estas ecuaciones están tabuladas para valores de peso entre 25 y 124.9 kg, estatura entre 151 y 200 cm, y edad entre 21 y 70 años.

TMB = Tasa metabolica basal

Hombres:	TMB = 66.4730 + (13.7516 x peso en kg) + (5.0033 x altura en cm) - (6.7550 x edad en años)

Mujeres:	TMB = 655.0955 + (9.5634 x peso en kg) + (1.8449 x altura en cm) - (4.6756 x edad en años)

Poco o ningún ejercicio:	                                                 Calorías diarias necesarias   =  TMB x 1,2
Ejercicio ligero (1-3 días a la semana):	                                 Calorías diarias necesarias   =  TMB x 1,375
Ejercicio moderado (3-5 días a la semana):	                                 Calorías diarias necesarias   =  TMB x 1,55
Ejercicio fuerte (6-7 días a la semana):	                                 Calorías diarias necesarias   =  TMB x 1,725
Ejercicio muy fuerte (dos veces al día, entrenamientos muy duros):	         Calorías diarias necesarias   =  TMB x 1,9


*/




// Todo el programa va a estar dentro de esta funcion:
function RecogerValores(){
	// Declarando las variables:
	let peso = Number (document.getElementById("peso").value);
	let altura = Number (document.getElementById("altura").value);
	let edad = Number (document.getElementById("edad").value);
	let sexo = document.getElementById("sexo").value;
	let ejercicio = Number (document.getElementById("ejercicio").value);

	const resultado= document.getElementById('resultado');

	
	

	// Ecuacion que calcula el tmb segun el sexo:
	let tmb_hombre = Math.round (66.473 + (13.7516 * peso) + (5.0033 * altura) - (6.755 * edad));      
	let tmb_mujer = Math.round (655.0955 + (9.5634 * peso) + (1.8449 * altura) - (4.6756 * edad));


	

	// Mete cualquiera de las dos ecuaciones que se utilice a esta variable, de esta manera me ahorro escribir el switch (ejercio) dos veces segun el segun el sexo. 
	// Basicamente esto hace que el programa sea mas legible
	let tmb;

	switch (sexo){
		case "masculino": tmb = tmb_hombre;
		break
		case "femenino": tmb = tmb_mujer;
		break
	}




	// Calcula la cantidad de calorias necesarias segun la cantidad de ejercicio realizado:
	switch (ejercicio){
		case 1: resultado.textContent = (`${Math.round (tmb * 1.2)} calorias diarias.`);
		break

		case 2: resultado.textContent = (`${Math.round (tmb * 1.375)} calorias diarias.`);
		break
		
		case 3: resultado.textContent = (`${Math.round (tmb * 1.55)} calorias diarias.`);
		break

		case 4: resultado.textContent = (`${Math.round (tmb * 1.725)} calorias diarias.`);
		break

		case 5: resultado.textContent = (`${Math.round (tmb * 1.9)} calorias diarias.`);
		break
	} 

	

	/* En caso de no ingresar ningun numero, el navegador cree que los inputs estan mandando un valor igual a "0", haciendo se haga la ecuacion normalmente
	   y que dandome como resultado un valor que no tiene nada que ver. Mediante esta condición soluciono este problema */
	if(peso == 0 || altura == 0 || edad == 0){
		resultado.textContent = (` `)		// Básicamente sobreescribo el número erroneo con literalmente un espacio vacío  
	}
	   

}


