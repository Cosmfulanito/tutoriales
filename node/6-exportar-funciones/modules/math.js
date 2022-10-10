// En este modulo crearemos y exportaremos diversos funciones matematicas



const suma = (a, b) => {
    return a + b;
};

const resta = (a, b) => {
    return a - b;
};

const multiplicacion = (a, b) => {
    return a * b;
};

const division = (a, b) => {
    return a / b;
};



module.exports = {
    suma,
    resta,
    multiplicacion,
    division
}