/*
Streams
	'Chorros' de informacion que se transmiten en 'pedazos' (chunks)
	3 tipos: lectura/escritura/duplex
	instancias de eventEmitter
	acceso asincrono
	es raro crear streams directamente
	pero muchos recursos nos ofrecen este interfaz
	detras de muchos mecanismos de Node.js
		stdin/stdout
		request de HTTP
		Sockets
		Manipulacion de ficheros/imagenes
*/
'use strict'

var fs = require('fs'),
	readStream = fs.createReadStream('assets/nombres.txt'),
	writeStream = fs.createWriteStream('assets/nombres_copia.txt');

	readStream.pipe(writeStream);
	readStream
		.on('data', function(chunk) {
			console.log('He leido: ', chunk.length, ' caracteres');
		})
		.on('end', function() {
			console.log('Terminé de leer el archivo.');
		});


