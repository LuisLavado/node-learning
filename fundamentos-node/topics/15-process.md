**[Curso de Fundamentos de Node.js](./../README.MD)**
# Control de Procesos y Variables de Entorno en NouGS

### Resumen
La gestión de procesos en Node.js es fundamental para desarrollar aplicaciones robustas y eficientes. El módulo `process` nos proporciona información valiosa y control sobre el proceso que se está ejecutando, permitiéndonos crear scripts más inteligentes y adaptables a diferentes entornos. Dominar este módulo es esencial para cualquier desarrollador que busque aprovechar al máximo las capacidades de Node.js.

### ¿Qué es el módulo process y por qué es importante?
El módulo `process` es uno de los más importantes en Node.js, ya que proporciona información y control sobre el proceso que se está ejecutando. Este módulo global nos permite acceder a información del sistema, manejar eventos del proceso, controlar la entrada y salida estándar, y mucho más.

Para comenzar a explorar este módulo, creemos un archivo llamado `process.js` y veamos algunas de sus funcionalidades básicas:
```
console.log("ID del proceso:", process.pid);
console.log("Directorio actual:", process.cwd());
console.log("Versión de Node:", process.version);
```
Al ejecutar este código, obtendremos información como:

* El ID del proceso (PID)
* El directorio de trabajo actual
* La versión de Node.js que estamos utilizando

Además, podemos acceder a información sobre la plataforma, arquitectura y tiempo de ejecución:
```
console.log("Plataforma:", process.platform);
console.log("Arquitectura:", process.arch);
console.log(`Tiempo de ejecución: ${process.uptime()} segundos\n`);
```
**Esta información es extremadamente útil para crear scripts que se comporten de manera diferente según el entorno en el que se ejecuten**.

### ¿Cómo acceder a las variables de entorno?
Una de las funcionalidades más utilizadas del módulo process es el acceso a las variables de entorno a través de process.env. Esto nos permite almacenar información sensible fuera de nuestro código:
```
console.log(process.env); // Muestra todas las variables de entorno
console.log("PATH:", process.env.PATH);
console.log("USER PROFILE:", process.env.USER_PROFILE);
console.log("NODE_ENV:", process.env.NODE_ENV || "No definido");
```
Las variables de entorno son fundamentales para la configuración de aplicaciones en diferentes entornos (desarrollo, pruebas, producción) sin cambiar el código.

### ¿Cómo monitorear el uso de memoria?
El módulo process también nos permite monitorear el uso de memoria de nuestra aplicación:
```
const memory = process.memoryUsage();
console.log(memory);
```
Este código nos mostrará información detallada sobre el uso de memoria, incluyendo:

* `rss`: Resident Set Size (cantidad de memoria asignada en RAM)
* `heapTotal`: Memoria total del heap
* `heapUsed`: Memoria utilizada del heap
* `external`: Memoria utilizada por objetos externos a V8
* `arrayBuffers`: Memoria utilizada por los ArrayBuffers

## ¿Cómo manejar eventos del proceso?
El módulo `process` nos permite escuchar y responder a diferentes eventos del proceso, como su finalización o señales de interrupción.

### Evento de salida (exit)
Podemos ejecutar código cuando el proceso está a punto de terminar:
```
process.on('exit', (code) => {
  console.log("El proceso está terminado", code);
});
```
### Señales de interrupción
También podemos capturar señales de interrupción (como `Ctrl+C`) y realizar acciones antes de que el proceso termine:
```
process.on('SIGINT', () => {
  console.log("Se recibió la señal de interrupción");
  // Limpiar recursos, cerrar conexiones, etc.
  process.exit(0);
});
```
**Manejar estos eventos es crucial para garantizar que nuestras aplicaciones se cierren correctamente, liberando recursos y completando tareas pendientes.**

### ¿Cómo interactuar con el usuario a través de la consola?
El módulo `process` nos permite interactuar con el usuario a través de la entrada estándar (stdin):
```
console.log("Escribe algo y presiona Enter o Control+C para salir");

process.stdin.on('data', (data) => {
  const input = data.toString().trim();
  
  if (input.toLowerCase() === 'salir') {
    console.log("Comando de salida recibido");
    process.exit();
  } else {
    console.log("Escribiste:", input);
    console.log("Escribe 'salir' para terminar o escribe algo más");
  }
});
```
Este código crea una interfaz simple donde:

* El usuario puede escribir texto en la consola
* Si escribe "salir", el programa termina
* Si escribe cualquier otra cosa, el programa muestra el texto y continúa esperando entrada

**Esta funcionalidad es perfecta para crear herramientas de línea de comandos interactivas o scripts que requieran entrada del usuario.**

El módulo `process` es una herramienta poderosa en el arsenal de cualquier desarrollador de Node.js. Dominar sus funcionalidades te permitirá crear aplicaciones más robustas, seguras y adaptables a diferentes entornos.