const http = require('http');


http.createServer((req, resp) => {

        resp.writeHead(200, { 'Content-Type': 'application/json' });
        // resp.write('Hola Mundo');
        let salida = {
            nombre: 'Cristian',
            edad: 25,
            url: req.url
        }
        resp.write(JSON.stringify(salida));
        resp.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');