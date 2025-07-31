**[Curso de Fundamentos de Node.js](./../README.MD)**
# Tipos de Módulos en NodeJS: CommonJS y ESModules

## Resumen
Los módulos en NodeJS son fundamentales para construir aplicaciones robustas y mantenibles. Al igual que las piezas de Lego, estos bloques de código encapsulado con funcionalidades específicas nos permiten crear estructuras complejas a partir de componentes simples y reutilizables. Esta modularidad no solo facilita el mantenimiento del código, sino que también evita conflictos en aplicaciones de gran escala.

### ¿Qué son los módulos en NodeJS y cuáles son sus tipos?
Los módulos en NodeJS son bloques de código encapsulado que cumplen una función específica. Esta encapsulación permite **reutilizar el código** en diferentes partes de nuestra aplicación, facilitar su **mantenimiento y evitar conflictos** en proyectos complejos. Existen diferentes tipos de módulos que podemos implementar en nuestras aplicaciones:

## Sistemas de módulos en NodeJS
En NodeJS encontramos principalmente dos sistemas de módulos:

1. __CommonJS (CJS):__ Es el sistema original de NodeJS, que utiliza:

* Sintaxis: `require()` para importar y `module.exports` para exportar
* Extensión de archivo: `.js`
* Ejecución: síncrona
* Es el sistema predeterminado desde los inicios de NodeJS

2. __ES Modules (ESM):__ Es el sistema moderno, compatible con ECMAScript 6+:

* __Sintaxis:__ `import` y `export`
* __Extensión de archivo:__ `.mjs` (aunque también puede usarse `.js` con configuración adecuada)
* __Ejecución:__ asíncrona por diseño
* Disponible de forma experimental desde la versión 12 de NodeJS y estable desde la versión 14

### Opciones de módulos disponibles
Además de los sistemas de módulos, existen diferentes tipos según su origen:

1. __Módulos nativos:__ Vienen incorporados en NodeJS:
    * `fs:` para manejo del sistema de archivos
    * `http:` para crear servicios HTTP
    * `path:` para acceder a rutas de archivos
    * `os:` para interactuar con el sistema operativo

2. __Módulos de terceros:__ Se instalan desde NPM (Node Package Manager):

    * Se agregan al proyecto mediante `npm install nombre-del-modulo`
    * Amplían las funcionalidades de nuestras aplicaciones

## ¿Cómo implementar módulos en NodeJS?
La implementación de módulos varía según el sistema que utilicemos. Veamos ejemplos prácticos de cada uno:

### Implementando CommonJS
Para crear un módulo con CommonJS, debemos exportar las funcionalidades que queremos compartir:
```
// math.js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = { add, subtract };
```
Para utilizar este módulo en otro archivo:
```
// main.js
const math = require('./math');

console.log(`Suma: ${math.add(5, 3)}`);
console.log(`Resta: ${math.subtract(5, 3)}`);
```
Al ejecutar `node src/main.js`, obtendremos:
```
Suma: 8
Resta: 2
```
### Implementando ES Modules
Para crear un módulo con ES Modules, utilizamos la sintaxis de `export`:
```
// math.mjs
export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  return a / b;
}
```
Para utilizar este módulo:
```
// main.mjs
import { multiply, divide } from './math.mjs';

console.log(`Multiplicación: ${multiply(5, 3)}`);
console.log(`División: ${divide(6, 2)}`);
```
Al ejecutar `node src/main.mjs`, obtendremos:
```
Multiplicación: 15
División: 3
```
### Utilizando módulos nativos
Los módulos nativos están disponibles sin necesidad de instalación adicional:
```
// native.js
const fs = require('fs');

const data = fs.readFileSync('example.txt', 'utf8');
console.log(`File content: ${data}`);
```
Si el archivo `example.txt` contiene "Hello World", al ejecutar este código veremos:
```
File content: Hello World
```
### Implementando módulos de terceros
Para utilizar módulos de terceros, primero debemos instalarlos:
```
npm install is-odd
```
Luego podemos utilizarlos en nuestro código:
```
// third-party.js
const isOdd = require('is-odd');

console.log(isOdd(1)); // true
console.log(isOdd(3)); // true
```
### ¿Cuál sistema de módulos debo usar?
La elección entre CommonJS y ES Modules depende de varios factores:

* __Para proyectos nuevos:__ Se recomienda usar ES Modules (import/export), especialmente si trabajas con versiones de Node superiores a la 18.
* __Para proyectos existentes:__ Muchos proyectos siguen utilizando CommonJS (require/module.exports), por lo que es importante conocer ambos sistemas.

**Lo más importante es mantener consistencia** en todo el proyecto, eligiendo un solo sistema de módulos para evitar confusiones y problemas de compatibilidad.

La modularización del código es una práctica fundamental en el desarrollo con NodeJS que te permitirá construir aplicaciones más organizadas, mantenibles y escalables. Te animo a experimentar con los diferentes tipos de módulos y a encontrar el enfoque que mejor se adapte a tus necesidades. ¿Has trabajado con módulos en NodeJS?