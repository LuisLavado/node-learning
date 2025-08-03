const os = require('os');

function showSystemInfo() {
    console.log(`Sistema Operativo: ${os.type()}`);
    console.log(`Plataforma: ${os.platform()}`);
    console.log(`Arquitectura: ${os.arch()} `);
    console.log(`Versión OS: ${os.release()}`);
    const uptime = os.uptime();
    console.log(`System Uptime: ${uptime} seconds`);
    const totalMem = os.totalmem();
    console.log(`Total Memory: ${totalMem / 1024 / 1024} MB`);
    const freeMem = os.freemem();
    console.log(`Free Memory: ${freeMem / 1024 / 1024} MB`);
    const cpus = os.cpus();
    console.log("CPUs Available:", cpus.length);
    console.log('CPU Info:');
    cpus.forEach((cpu, index) => {
        console.log(`  Core ${index + 1}: ${cpu.model} @ ${cpu.speed / 1000} GHz`);
    });
    console.log(`Home Directory: ${os.homedir()}`);
    console.log(`Hostname: ${os.hostname()}`);
}

showSystemInfo();

// Monitoreo de aplicaciones
function monitorResources() {
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();
    const usedMemoryPercentage = ((totalMemory - freeMemory) / totalMemory) * 100;

    console.log(`Uso de memoria: ${usedMemoryPercentage.toFixed(2)}%`);

    if (usedMemoryPercentage > 90) {
        console.log("¡Alerta! Uso de memoria crítico");
    }
}

// Aplicaciones IoT
function checkIoTCompatibility() {
    const cpus = os.cpus();
    const architecture = os.arch();
    const memory = os.totalmem() / (1024 * 1024 * 1024); // Convertir a GB

    console.log(`Dispositivo con ${cpus.length} núcleos, arquitectura ${architecture} y ${memory.toFixed(2)}GB de RAM`);

    // Lógica para determinar qué funcionalidades habilitar según los recursos
}

// Análisis de datos
function configureDataProcessing() {
    const availableCores = os.cpus().length;
    const recommendedWorkers = Math.max(1, availableCores - 1); // Dejar un núcleo libre

    console.log(`Configurando procesamiento con ${recommendedWorkers} workers`);

    // Configurar el número de workers para procesamiento paralelo
}