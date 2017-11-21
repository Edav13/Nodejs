/*single thread*/
'use strict'
function singleThread() {
	conosle.log('=====================================');
	conosle.log('		EL PROCESO DE NODE.JS');
	conosle.log('Id del proceso............. ' + process.pid);
	conosle.log('Titulo..................... ' + process.title);
	conosle.log('Directorio de Node......... ' + process.execPath);
	conosle.log('Directorio actual.......... ' + process.cwd());
	conosle.log('Versión de Node............ ' + process.version);
	conosle.log('Versiones Dependencias..... ' + process.versions);
	conosle.log('Plataforma (S.O.).......... ' + process.platform);
	conosle.log('Arquitectura (S.O.)........ ' + process.arch);
	conosle.log('Tiempo activo de Node...... ' + process.uptime());
	conosle.log('Argumentos del proceso..... ' + process.argv);
	conosle.log('--------------------------------------------');
}

singleThread();