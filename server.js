const express = require('express')
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))


hbs.registerPartials(__dirname + '/views/parciales/');
app.set('view engine', 'hbs');

app.get('/', function(req, res) {

    res.render('home', {
        nombre: 'cristiaN paredES',
        anio: new Date().getFullYear(),
        theme: 'Home',

    });
});

app.get('/about', function(req, res) {

    res.render('about', {
        nombre: 'Cristian Paredes',
        anio: new Date().getFullYear(),
        theme: 'About',

    });
});

app.get('/data', function(req, res) {
    res.send('Hola mundo desde data')
})

app.listen(port, () => console.log(`Escuchando peticiones en el puerto ${port}`))