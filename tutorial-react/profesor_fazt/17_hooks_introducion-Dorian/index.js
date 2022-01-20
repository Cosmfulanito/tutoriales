/*

															_____Hooks: Introducción - Dorian Desings_____


															
 - En este apunte veremos lo que son los "Hooks" pero desde el tutorial de youtube de Dorian Desings. 
   Este consta de dos videos: 
   https://www.youtube.com/watch?v=ClrsNDaarXM&list=PLROIqh_5RZeDk04YvFLZfHuTuA4q5OOI5&index=17	
   https://www.youtube.com/watch?v=KXqntWt2RFY&list=PLROIqh_5RZeDk04YvFLZfHuTuA4q5OOI5&index=15

 - Esos dos videos son un fragmento del tutotial de Udemy (que es de pago). Al tutorial de youtube a diferencia de el de Udemi, le faltan videos de por medio, y no 
   se si a esta parte de "hooks" le incluyo todo el contenido que esta en Udemy.
   




 _____¿Que son los "Hooks"?_____   

 - Los "hooks" son una nueva herramienta de Reack que vienen a reemplazar a las clases. class{}  

 - Básicamnete nos permiten usar el estado y otras características de React sin escribir una clase.

 - El motivo por el cual se desea hacer este reemplazo se debe a que las clases dentro de un proyecto mediano o grande son dificiles de mantener debido al quilombo 
   de codigo que se hace. 
    También se debe a que las clases afectan el rendimiento de las maquinas ya que a estas se le dificulta leerlas. Esto se debe a que la clases como tal no existen   
   en los navegadores y por ende para que estas puedan ser leidas es necesario el uso de compiladores que las transformen en algo que si pueda ser leido por la 
   maquin, esto genera mucho más codigo del que ya habiamos escrito
 
 - Los "hooks" solucionan todos esos problemas y por eso son el reemplazo de las "clases". Ademas de ser menos codigo, es mucho más intuitivo y facil de depurar  

 - Antiguamente para usar un "State" (estado) en una función, era obligatorio declararlo en una clase, lo que se traduce a codigo extra. 
   Con los Hooks esto se acabo, ya que hay podemos crear "states" directamente dentro de las funciones con un Hook llamado useState()

 - La historia de los "Hooks" se resume en que básicamente los creadores de React se dieron cuenta de que dicha libreria, si bien estaba buena, las clases y sus 
   herramientas les habian quedado para el culo. Entonces para reemplazarlas inventaron los Hooks, los cuales funcionan mejor que las clases y necesitan menos codigo.
    Los creadores de React se dieron cuenta de que si hacian "borron y cuenta nueva" y llegaban a borrar las clases y todas sus herramientas, las personas que ya 
   habian hecho proyectos con las clases se podrian poner iracundos. Por eso optaron por ofrecer a los Hooks como una herramaienta opcional mucho más recomendable 
   la cual no afecta a lo ya creado con las antiguas clases, peeeero en caso de crear un proyecto nuevo aconsejan usar Hooks.
    Tal cual ellos dijeron: "Pretendemos que Hooks cubra todos los casos de uso existentes para las clases, pero seguiremos soportando los componentes de clase en 
                             un futuro previsible."




							 

 _____¿Como reconocerlos?_____  

 - Todos los Hooks comienzan con el prefijo "use" seguido de un sufijo que describe lo que hace
   Ej: useState()				- Hook que se utiliza en reemplazo de los "states"  	



   


 _____¿Que ponemos como función en vez de las clases?_____

 - Ponemos simplemente una función de flecha comun y corriente. Con su variable declarada con un const y todo lo demas

 - RECORDAR: Las funciones que antes estaban dentro de las clases por algun motivo no iban declaradad. Ahora deben ser declaradas como toda funcion comun y corriente
 
 


 _____Tip:_____

 - Recordar de que siempre debemos importar los hooks que vamos a usar

*/