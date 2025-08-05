**[Curso de Fundamentos de Node.js](./../README.MD)**
# Acceso y uso del módulo OS en Node.js para monitoreo del sistema

### Resumen
La comprensión del sistema operativo en el que se ejecuta nuestra aplicación es fundamental para desarrollar software robusto y eficiente. El módulo OS de Node.js nos brinda acceso a información valiosa del sistema que puede ser crucial para monitoreo, optimización y compatibilidad. Descubramos cómo implementar este módulo para obtener datos relevantes del entorno de ejecución.

### ¿Cómo utilizar el módulo OS en Node.js?
El módulo OS proporciona utilidades e información relacionada con el sistema operativo donde se ejecuta nuestra aplicación. Para comenzar a utilizarlo, primero debemos importarlo en nuestro proyecto. Creamos un nuevo archivo llamado `OS.js` e incluimos el módulo:
```
const os = require('os');
```
Con esta simple línea, ya tenemos acceso a todas las funcionalidades que nos ofrece este módulo. Para organizar nuestro código, podemos crear una función que muestre la información del sistema:
```
function showSystemInfo() {
  console.log("Sistema operativo:", os.type());
  console.log("Plataforma:", os.platform());
  console.log("Arquitectura:", os.arch());
  console.log("Versión del sistema operativo:", os.release());
}

showSystemInfo();
```
Al ejecutar este código con `node OS.js`, obtendremos información básica sobre nuestro sistema. Por ejemplo, en una MacBook, podríamos ver algo como:
```
Sistema operativo: Darwin
Plataforma: darwin
Arquitectura: arm64
Versión del sistema operativo: 24.3
```
**Es importante destacar que los resultados variarán dependiendo del sistema operativo** que estés utilizando. Si ejecutas el mismo código en Windows o Linux, verás información correspondiente a esos sistemas.

### ¿Qué información adicional podemos obtener?
El módulo OS nos permite acceder a muchos más datos sobre nuestro sistema. Podemos ampliar nuestra función para incluir:
```
function showSystemInfo() {
  console.log("Sistema operativo:", os.type());
  console.log("Plataforma:", os.platform());
  console.log("Arquitectura:", os.arch());
  console.log("Versión del sistema operativo:", os.release());
  console.log("Memoria total:", os.totalmem());
  console.log("Memoria libre:", os.freemem());
  console.log("CPUs disponibles:", os.cpus().length);
  console.log("Directorio principal:", os.homedir());
  console.log("Nombre del host:", os.hostname());
}
```

Esta información ampliada nos proporciona datos valiosos como:

* La memoria total y libre del sistema
* El número de núcleos de CPU disponibles
* El directorio principal del usuario
* El nombre del host de la computadora

### ¿Para qué casos de uso es útil el módulo OS?
La información que obtenemos a través del módulo OS puede ser extremadamente útil en diversos escenarios:

### Monitoreo de aplicaciones
Podemos crear herramientas que supervisen el uso de recursos del sistema y alerten cuando se alcancen ciertos umbrales. Por ejemplo:
```
function monitorResources() {
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const usedMemoryPercentage = ((totalMemory - freeMemory) / totalMemory) * 100;
  
  console.log(`Uso de memoria: ${usedMemoryPercentage.toFixed(2)}%`);
  
  if (usedMemoryPercentage > 90) {
    console.log("¡Alerta! Uso de memoria crítico");
  }
}
```
### Aplicaciones IoT
En dispositivos de Internet de las Cosas, conocer la arquitectura y recursos disponibles es crucial para optimizar el rendimiento:
```
function checkIoTCompatibility() {
  const cpus = os.cpus();
  const architecture = os.arch();
  const memory = os.totalmem() / (1024 * 1024 * 1024); // Convertir a GB
  
  console.log(`Dispositivo con ${cpus.length} núcleos, arquitectura ${architecture} y ${memory.toFixed(2)}GB de RAM`);
  
  // Lógica para determinar qué funcionalidades habilitar según los recursos
}
```
### Análisis de datos
Para aplicaciones de procesamiento de datos, es importante conocer los recursos disponibles para optimizar la carga de trabajo:
```
function configureDataProcessing() {
  const availableCores = os.cpus().length;
  const recommendedWorkers = Math.max(1, availableCores - 1); // Dejar un núcleo libre
  
  console.log(`Configurando procesamiento con ${recommendedWorkers} workers`);
  
  // Configurar el número de workers para procesamiento paralelo
}
```
El módulo OS de Node.js es una herramienta poderosa que nos permite adaptar nuestras aplicaciones al entorno en que se ejecutan. Ya sea para monitoreo, optimización o compatibilidad, conocer el sistema operativo y sus recursos disponibles nos ayuda a crear software más eficiente y robusto.