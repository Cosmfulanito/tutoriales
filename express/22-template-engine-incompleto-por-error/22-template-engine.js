const express = require('express');
const app = express(); 


require('ejs');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));            // Con esto ejs sabe que vamos a trabajar con los archivos de la carpeta "views"




app.get('/products', (req, res) => {                 
    res.render('index.ejs');                                // .render() es algo propio de ejs que nos permite acceder a los a los html que desiemos. En este caso, al archivo index.ejs de la carpeta views
});

app.get('/users', (req, res) => {
    res.send('Usuarios');
});




app.listen(3000);                            
console.log("El servidor esta funcionando en el puerto 3000");
