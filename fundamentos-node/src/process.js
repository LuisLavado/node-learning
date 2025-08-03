console.log(`ID del proceso (PID): ${process.pid}`);
console.log(`Directorio Actual: ${process.cwd()}`);
console.log(`Versión de Node.js: ${process.version}`);
console.log("Plataforma:", process.platform);
console.log("Arquitectura:", process.arch);
console.log(`Tiempo de ejecución: ${process.uptime()} segundos\n`);

console.log(`PATH: ${process.env.PATH}`);
console.log(`User Profile: ${process.env.HOME || process.env.USERPROFILE}`);
console.log(`NODE_ENV: ${process.env.NODE_ENV || 'No definido'}`);
// console.log(process.env);

const memory = process.memoryUsage();
console.log(memory);

process.on('exit', code => {
    console.log('El proceso esta terminando', code);
});

process.on('SIGINT', () => {
    console.log('Se recibió la señal de Interrupción Ctrl+C');
    process.exit(0);
});

console.log('Escribe algo y presiona ENTER o Ctrl+C para salir');

process.stdin.on('data', data => {
    const input = data.toString().trim();
    if (input.toLowerCase() === 'salir') {
        console.log('Comando de salida recibido');
        process.exit(0);
    } else {
        console.log(`Mensaje: ${input}`);
        console.log('Escribe "Salir" para terminar o escribe algo más.')
    }
})

