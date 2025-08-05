**[Curso de Fundamentos de Node.js](./../README.MD)**
# Procesamiento de Streams de Archivos Grandes en Node.js

### Resumen
La programación con streams en Node.js representa una poderosa herramienta para manejar grandes volúmenes de datos sin sobrecargar la memoria del sistema. Esta técnica resulta especialmente útil cuando necesitamos procesar archivos extensos, transmisiones de video o audio, permitiéndonos trabajar con fragmentos de información en lugar de cargar todo el contenido a la vez.

### ¿Qué son los streams en Node.js y por qué son importantes?
Los streams en Node.js son colecciones de datos que pueden ser procesados por partes o "chunks", en lugar de tener que cargar todo el contenido en memoria. Esto resulta extremadamente eficiente cuando trabajamos con archivos de gran tamaño, ya que nos permite:

* __Optimizar el uso de memoria__ al procesar datos por fragmentos.
* __Mejorar el rendimiento__ de aplicaciones que manejan grandes volúmenes de información.
* __Facilitar operaciones de entrada/salida__ sin bloquear la ejecución del programa.

En esencia, los streams funcionan como tuberías que permiten que los datos fluyan desde un origen hasta un destino, procesándolos en el camino según nuestras necesidades.

### ¿Cómo implementar streams para lectura y escritura de archivos?
Para trabajar con streams en Node.js, utilizaremos el módulo `fs` (file system), que nos proporciona métodos específicos para crear flujos de lectura y escritura. Veamos cómo implementarlo paso a paso:

## Configuración inicial del proyecto
Primero, necesitamos importar el módulo fs y configurar nuestros streams de lectura y escritura:
```
const fs = require('fs');

// Crear un stream de lectura
const readStream = fs.createReadStream('js.txt', {
    encoding: 'utf8'
});

// Crear un stream de escritura
const writeStream = fs.createWriteStream('output-js.txt');
```

En este código estamos:

1. Importando el módulo `fs` para trabajar con archivos
2. Creando un stream de lectura con `createReadStream()`, especificando el archivo fuente y la codificación UTF-8
3. Configurando un stream de escritura con `createWriteStream()` para el archivo de destino

### Manejo de eventos en streams
Los streams en Node.js funcionan con un sistema de eventos. Los principales eventos que debemos manejar son:
```
// Evento para procesar cada fragmento de datos
readStream.on('data', (chunk) => {
    console.log('Leyendo chunk');
    writeStream.write(chunk);
});

// Evento cuando finaliza la lectura
readStream.on('end', () => {
    console.log('Terminó la lectura del archivo');
    writeStream.end();
});

// Manejo de errores en la lectura
readStream.on('error', (err) => {
    console.log('Error de lectura del archivo', err);
});
// Manejo de errores en la escritura
writeStream.on('error', (err) => {
    console.log('Error en escritura del archivo', err);
});
```

Este código establece:

* Un manejador para el evento `'data'` que se activa cada vez que se lee un fragmento del archivo
* Un manejador para el evento `'end'` que se activa cuando se completa la lectura
* Manejadores de errores para ambos streams
Comportamiento de los streams en ejecución

Al ejecutar nuestro programa con `node strings.js`, ocurrirá lo siguiente:

1. El archivo de origen se leerá por fragmentos (chunks)
2. Cada fragmento se procesará individualmente
3. Los fragmentos se escribirán en el archivo de destino
4. Al finalizar, se mostrará un mensaje de confirmación

**Es importante notar** que cada vez que ejecutamos el programa, se crea un nuevo archivo de destino vacío. Si el programa falla antes de procesar datos (por ejemplo, si el archivo de origen no existe), el archivo de destino quedará vacío.

### ¿Qué consideraciones debemos tener al trabajar con streams?
Al implementar soluciones basadas en streams, debemos tener en cuenta varios aspectos importantes:

* __Manejo de errores__: Siempre debemos implementar manejadores para los eventos de error, tanto en lectura como en escritura.
* __Estado de los archivos__: Cada ejecución del programa crea un nuevo archivo de destino, borrando cualquier contenido previo.
* __Codificación__: Es crucial especificar la codificación correcta (como UTF-8) para evitar problemas con caracteres especiales.
* __Memoria__: Aunque los streams son eficientes, debemos considerar el tamaño de los chunks para optimizar el rendimiento.

Los streams son particularmente útiles cuando:

* Procesamos archivos muy grandes
* Trabajamos con transmisiones de audio o video
* Necesitamos transformar datos en tiempo real
* Queremos implementar operaciones de entrada/salida no bloqueantes

Los streams en Node.js representan una herramienta fundamental para el desarrollo de aplicaciones eficientes que manejan grandes volúmenes de datos. Dominar esta técnica te permitirá crear soluciones más robustas y optimizadas. 

## Lecturas recomendadas

* Eloquent JavaScript: https://eloquentjavascript.net/