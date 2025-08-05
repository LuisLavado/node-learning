**[Curso de Fundamentos de Node.js](./../README.MD)**
# Manipulación de Archivos con Node.js y Módulo FS

### Resumen

El módulo FS de Node.js es una herramienta poderosa que permite manipular archivos directamente desde tu código. Esta funcionalidad es esencial para cualquier desarrollador que necesite interactuar con el sistema de archivos, ya sea para guardar configuraciones, procesar datos o gestionar recursos. Dominar estas operaciones te dará un control completo sobre cómo tu aplicación maneja la información persistente.

### ¿Cómo trabajar con el sistema de archivos en Node.js?
El módulo FS (File System) de Node.js nos permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) con archivos en nuestro sistema. Estas operaciones son fundamentales para cualquier aplicación que necesite persistencia de datos sin necesidad de una base de datos.

Para comenzar a utilizar este módulo, primero debemos importarlo en nuestro archivo JavaScript:
```
const fs = require('fs');
```
Una vez importado, tendremos acceso a todas las funciones que nos permitirán manipular archivos de manera sencilla y eficiente.

### ¿Cómo crear y escribir en un archivo?
La creación de archivos es una de las operaciones más básicas que podemos realizar. Para esto, utilizamos la función `writeFileSync()` que nos permite escribir contenido en un archivo y crearlo si no existe.
```
// Definimos el nombre del archivo
const fileName = 'example.txt';

// Crear archivo
fs.writeFileSync(fileName, 'Hola, este es un archivo de ejemplo.');
console.log('Archivo creado correctamente');
```
Este código creará un archivo llamado "example.txt" en la raíz de nuestro proyecto con el contenido especificado. Si el archivo ya existe, su contenido será reemplazado por el nuevo.

### ¿Cómo leer el contenido de un archivo?
Para leer el contenido de un archivo, utilizamos la función `readFileSync()`. Esta función nos devuelve el contenido del archivo como un buffer, que podemos convertir a string especificando la codificación.
```
// Leer
const content = fs.readFileSync(fileName, 'utf8');
console.log('File content:', content);
```
Es importante especificar la codificación (generalmente 'utf8') para que el contenido se muestre correctamente como texto.

### ¿Cómo actualizar un archivo existente?
Para actualizar un archivo, podemos utilizar la función `appendFileSync()` que nos permite agregar contenido al final del archivo sin eliminar lo que ya existe.
```
// Actualizar
fs.appendFileSync(fileName, '\n\nEsta es una nueva línea.\n');
console.log('Archivo actualizado correctamente');
```
El `\n` representa un salto de línea, lo que nos permite organizar mejor el contenido del archivo. Si queremos verificar que la actualización se realizó correctamente, podemos leer nuevamente el archivo.

### ¿Cómo eliminar un archivo?
Finalmente, para eliminar un archivo utilizamos la función `unlinkSync()`:
```
// Eliminar
fs.unlinkSync(fileName);
console.log('Archivo eliminado correctamente');
```
Esta función eliminará el archivo especificado del sistema de archivos. Es importante manejar posibles errores, ya que si el archivo no existe, se lanzará una excepción.

### ¿Qué consideraciones debemos tener al trabajar con archivos?
**Al trabajar con el módulo FS**, es importante entender cómo se ejecuta nuestro código. Si ejecutamos todas las operaciones CRUD en secuencia, como en el ejemplo anterior, el archivo pasará por todos los estados (creación, lectura, actualización y eliminación) en una sola ejecución.

Es crucial tener en cuenta que las operaciones de escritura sobrescriben el contenido existente a menos que utilicemos específicamente métodos para agregar contenido. Si queremos mantener el contenido original y solo añadir nueva información, debemos usar `appendFileSync()` en lugar de `writeFileSync()`.

También es importante considerar que estas operaciones son síncronas, lo que significa que bloquean la ejecución del programa hasta que se completen. Para aplicaciones que requieren alto rendimiento, Node.js también ofrece versiones asíncronas de estas funciones que no bloquean el hilo principal.

El módulo FS de Node.js es una herramienta versátil que te permite manipular archivos y carpetas con facilidad, abriendo un mundo de posibilidades para tus aplicaciones. Desde guardar configuraciones hasta procesar grandes volúmenes de datos, dominar estas operaciones te dará un control completo sobre cómo tu aplicación interactúa con el sistema de archivos.
