/* Este archivo es un modulo que contiene un codigo que va a ser exportado y reutilizado en distintas partes de la aplicación principal, especialmente en el 
   archivo principal "5-exports-individuales" */

const texto = "Hola, soy un texto perteneciente a este modulo que va a ser exportado al archivo principal :3"

const numero = 25;

const lista = ['manzana', 'pera', 'zandia']

const persona = {
    name: 'Juanito',
    lastName: 'Perez'
}


module.exports.text = texto;                   // Aquí estamos enviando cada variable con su respectiva información una por una. Cada propiedad representa una nueva key en el objeto
module.exports.number = numero;
module.exports.list = lista;
module.exports.person = persona;
