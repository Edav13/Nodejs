/*
Buffers
	una tira de butes 
	Similar a un array de enteros
	tamaño fijo
	manipular datos directamente
		sockets
		streams
		implementar protocolos complejos
		manipulacion de ficheros/imagenes
		criptografia
*/
'use strict'

var buf = new Buffer(100),
	buf2 = new Buffer(26),
	str = '\u00bd + \u00bc = \u00be';
buf.write('abcd', 0, 4, 'ascii');
console.log(buf, buf.toString('ascii'), str, str.length, Buffer.byteLength(str, 'utf8') + 'bytes');
for(var i = 0; i < buf2.length; i++) {
	buf2[i] = i + 97;
}
console.log(buf2.toString('ascii'));