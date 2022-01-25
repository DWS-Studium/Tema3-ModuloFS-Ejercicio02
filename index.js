//Creamos el servidor
var http = require('http');
var url = require('url');
var fs = require('fs');
var server = http.createServer();
server.on('request', function(peticion, respuesta) {
    //Obtenemos la URL y la descomponemos
    var url_peticion = url.parse(peticion.url, true);
    //Guardamos el pathname
    var nombreFichero = "./todasLasTablas.html";
    if (url_peticion.pathname == "/tablas") {
        fs.readFile(nombreFichero, function(err, dato) {
            if (err) {
                respuesta.writeHead(404, { 'Content-Type': 'text/html' });
                return respuesta.end("404 Not Found");
            }
            respuesta.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8 ' });
            respuesta.write(dato);
            return respuesta.end();
        });
    } else if (url_peticion.pathname == "/creartabla") {
        if (!fs.existsSync('./tablas')) {
            // Crear el directorio
            fs.mkdir('./tablas/', function(err) {
                if (err) {
                    throw err;
                }
                console.log('Carpeta creada');
            });
            respuesta.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8 ' });
            respuesta.write('Carpeta Creada');
            return respuesta.end();
        } else {
            respuesta.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8 ' });
            respuesta.write('Ya existe la carpeta');
            return respuesta.end();
        }

    } else if (url_peticion.pathname == "/") {
        respuesta.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8 ' });
        respuesta.write('<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Inicio</title><link href="http://fonts.googleapis.com/css?family=Amarante" rel="stylesheet" type="text/css"><body><h1>Inicio</h1></body></html>');
        return respuesta.end();
    } else {
        respuesta.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8 ' });
        respuesta.write('<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>404 Page Not Found</title><link href="http://fonts.googleapis.com/css?family=Amarante" rel="stylesheet" type="text/css"><body><h1>404 Page Not Found</h1></body></html>');
        return respuesta.end();
    }

}).listen(8080);
console.log('Servidor ejecutándose en http://127.0.0.1:8080/');