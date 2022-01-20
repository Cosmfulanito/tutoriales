
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



let sexo = Number (prompt(`Ingrese la opcion segun su sexo biologico: \n 1. Hombre \n 2. Mujer`));
let peso = Number(prompt(`Ingrese su peso en kg`));
let altura = Number(prompt(`Ingrese su altura en cm`));
let edad = Number(prompt(`Ingrese su edad`));
let ejercicio = Number (prompt`Ingrese la opcion segun su nivel de ejercicio: \n 1. Poco o ninguno \n 2. Ejercicio ligero (1-3 días a la semana) \n 3. Ejercicio moderado (3-5 días a la semana) \n 4. Ejercicio fuerte (6-7 días a la semana) \n 5. Ejercicio muy fuerte (dos veces al día, entrenamientos muy duros)`)


// Ecuacion que calcula el tmb segun el sexo:
let tmb_hombre = Math.round (66.473 + (13.7516 * peso) + (5.0033 * altura) - (6.755 * edad));      
let tmb_mujer = Math.round (655.0955 + (9.5634 * peso) + (1.8449 * altura) - (4.6756 * edad));


// Mete cualquiera de las dos ecuaciones que se utilice a esta variable, de esta manera me ahorro escribir el switch (ejercio) dos veces segun el segun el sexo. Basicamente esto hace que el programa sea mas legible
let tmb;

switch (sexo){
    case 1: tmb = tmb_hombre;
    break
    case 2: tmb = tmb_mujer;
    break
}


switch (ejercicio){
    case 1: console.log (`Su tasa metabolica basal es de: ${tmb} calorias. \n \nSu ingesta optima de calorias diarias es de: ${Math.round (tmb * 1.2)} calorias.`);
    break

    case 2: console.log (`Su tasa metabolica basal es de: ${tmb} calorias. \n \nSu ingesta optima de calorias diarias es de: ${Math.round (tmb * 1.375)} calorias.`);
    break
    
    case 3: console.log (`Su tasa metabolica basal es de: ${tmb} calorias. \n \nSu ingesta optima de calorias diarias es de: ${Math.round (tmb * 1.55)} calorias.`);
    break

    case 4: console.log (`Su tasa metabolica basal es de: ${tmb} calorias. \n \nSu ingesta optima de calorias diarias es de: ${Math.round (tmb * 1.725)} calorias.`);
    break

    case 5: console.log (`Su tasa metabolica basal es de: ${tmb} calorias. \n \nSu ingesta optima de calorias diarias es de: ${Math.round (tmb * 1.9)} calorias.`);
    break
} 








