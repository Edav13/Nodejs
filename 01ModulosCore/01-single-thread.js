/*single thread*/
'use strict'
function singleThread() {
	process.argv.push('Estamos aprendiendo Node.js');
	process.argv.push(19);
	process.argv.push(null);
	process.argv.push(true);

	console.log('=====================================');
	console.log('		EL PROCESO DE NODE.JS');
	console.log('Id del proceso............. ' + process.pid);
	console.log('Titulo..................... ' + process.title);
	console.log('Directorio de Node......... ' + process.execPath);
	console.log('Directorio actual.......... ' + process.cwd());
	console.log('Versión de Node............ ' + process.version);
	console.log('Versiones Dependencias..... ' + process.versions);
	console.log('Plataforma (S.O.).......... ' + process.platform);
	console.log('Arquitectura (S.O.)........ ' + process.arch);
	console.log('Tiempo activo de Node...... ' + process.uptime());
	console.log('Argumentos del proceso..... ' + process.argv);
	console.log('--------------------------------------------');
	console.log(process.argv[0], process.argv[1]);
	process.argv.forEach(function(single){
		console.log(single);
	});
}

singleThread();
