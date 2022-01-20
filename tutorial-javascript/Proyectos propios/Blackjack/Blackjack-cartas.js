/* 

Este es un archivo que tendria que ir en conjunto con el de Blackjack.html 

En este archivo creare las cartas con POO del maso frances para el juego de BlackJack


*/



class Carta{
    constructor (nombre, valor_1, valor_2, imagen){
        this.nombre = nombre
        this.valor_1 = valor_1
        this.valor_2 = valor_2
        this.imagen = imagen
    }
}



const c_1 = new Carta ("1 de Corazones", 11, 1, false);
const c_2 = new Carta ("2 de Corazones", 2, 0, false);
const c_3 = new Carta ("3 de Corazones", 3, 0, false);
const c_4 = new Carta ("4 de Corazones", 4, 0, false);
const c_5 = new Carta ("5 de Corazones", 5, 0, false);
const c_6 = new Carta ("6 de Corazones", 6, 0, false);
const c_7 = new Carta ("7 de Corazones", 7, 0, false);
const c_8 = new Carta ("8 de Corazones", 8, 0, false);
const c_9 = new Carta ("9 de Corazones", 9, 0, false);
const c_10 = new Carta ("10 de Corazones", 10, 0, false);
const c_jota = new Carta ("Jota de Corazones", 10, 0, false);
const c_reina = new Carta ("Reina de Corazones", 10, 0, false);
const c_rey = new Carta ("Rey de Corazones", 10, 0, false);


const d_1 = new Carta ("1 de Diamantes", 11, 1, false);
const d_2 = new Carta ("2 de Diamantes", 2, 0, false);
const d_3 = new Carta ("3 de Diamantes", 3, 0, false);
const d_4 = new Carta ("4 de Diamantes", 4, 0, false);
const d_5 = new Carta ("5 de Diamantes", 5, 0, false);
const d_6 = new Carta ("6 de Diamantes", 6, 0, false);
const d_7 = new Carta ("7 de Diamantes", 7, 0, false);
const d_8 = new Carta ("8 de Diamantes", 8, 0, false);
const d_9 = new Carta ("9 de Diamantes", 9, 0, false);
const d_10 = new Carta ("10 de Diamantes", 10, 0, false);
const d_jota = new Carta ("Jota de Diamantes", 10, 0, false);
const d_reina = new Carta ("Reina de Diamantes", 10, 0, false);
const d_rey = new Carta ("Rey de Diamantes", 10, 0, false);


const t_1 = new Carta ("1 de Trebol", 11, 1, false);
const t_2 = new Carta ("2 de Trebol", 2, 0, false);
const t_3 = new Carta ("3 de Trebol", 3, 0, false);
const t_4 = new Carta ("4 de Trebol", 4, 0, false);
const t_5 = new Carta ("5 de Trebol", 5, 0, false);
const t_6 = new Carta ("6 de Trebol", 6, 0, false);
const t_7 = new Carta ("7 de Trebol", 7, 0, false);
const t_8 = new Carta ("8 de Trebol", 8, 0, false);
const t_9 = new Carta ("9 de Trebol", 9, 0, false);
const t_10 = new Carta ("10 de Trebol", 10, 0, false);
const t_jota = new Carta ("Jota de Trebol", 10, 0, false);
const t_reina = new Carta ("Reina de Trebol", 10, 0, false);
const t_rey = new Carta ("Rey de Trebol", 10, 0, false);


const p_1 = new Carta ("1 de Picas", 11, 1, false);
const p_2 = new Carta ("2 de Picas", 2, 0, false);
const p_3 = new Carta ("3 de Picas", 3, 0, false);
const p_4 = new Carta ("4 de Picas", 4, 0, false);
const p_5 = new Carta ("5 de Picas", 5, 0, false);
const p_6 = new Carta ("6 de Picas", 6, 0, false);
const p_7 = new Carta ("7 de Picas", 7, 0, false);
const p_8 = new Carta ("8 de Picas", 8, 0, false);
const p_9 = new Carta ("9 de Picas", 9, 0, false);
const p_10 = new Carta ("10 de Picas", 10, 0, false);
const p_jota = new Carta ("Jota de Picas", 10, 0, false);
const p_reina = new Carta ("Reina de Picas", 10, 0, false);
const p_rey = new Carta ("Rey de Picas", 10, 0, false);




let mazo = [c_1, c_2, c_3, c_4, c_5 , c_6 , c_7 , c_8, c_9, c_10, c_jota, c_reina, c_rey, d_1, d_2, d_3, d_4, d_5 , d_6 , d_7 , d_8, d_9, d_10, d_jota, d_reina, d_rey, t_1, t_2, t_3, t_4, t_5 , t_6 , t_7 , t_8, t_9, t_10, t_jota, t_reina, t_rey, p_1, p_2, p_3, p_4, p_5 , p_6 , p_7 , p_8, p_9, p_10, p_jota, p_reina, p_rey];


// Testeando el funcionamiento
for (cartita of mazo){
    console.log (cartita.nombre);
}

