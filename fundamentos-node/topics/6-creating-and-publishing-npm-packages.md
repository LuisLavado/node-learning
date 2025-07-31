**[Curso de Fundamentos de Node.js](./../README.MD)**
# Creación y Publicación de Paquetes NPM para Manejo de Fechas

### Resumen
La creación de paquetes en NPM es una habilidad fundamental para cualquier desarrollador de Node.js que desee compartir sus soluciones con la comunidad. Aprender a construir, probar y publicar un paquete no solo mejora tu perfil profesional, sino que también contribuye al ecosistema de JavaScript, permitiendo que otros desarrolladores aprovechen tu código para resolver problemas comunes.

### ¿Cómo crear un paquete para NPM desde cero?
Crear un paquete para NPM requiere seguir una serie de pasos estructurados que garanticen que nuestro código sea accesible y utilizable por otros desarrolladores. En este caso, vamos a construir un paquete llamado "platzi-date" que nos permitirá manejar fechas en dos formatos específicos: timestamp y formato largo.

### Inicialización del proyecto
Para comenzar a crear nuestro paquete, debemos seguir estos pasos iniciales:

1. Crear un directorio para nuestro paquete:
```
mkdir platzi-date
cd platzi-date
```
2. Inicializar Git para control de versiones:
```
git init
```
3. Inicializar el proyecto NPM con configuración por defecto:
```
npm init -y
```
Este último comando generará automáticamente un archivo `package.json` con la configuración básica que posteriormente modificaremos según nuestras necesidades.

## Estructura y desarrollo del código fuente
Una vez inicializado el proyecto, es momento de crear la estructura de archivos y desarrollar la funcionalidad del paquete:

1. Crear la carpeta `src` para el código fuente
2. Crear el archivo principal `index.js` dentro de la carpeta `src`

En nuestro archivo `index.js`, implementaremos las dos funciones principales:
```
// Función para obtener el timestamp actual
function getTimeStamp() {
  return Date.now();
}

// Función para obtener la fecha en formato largo
function getLongTime(locale = 'es') {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short'
  };
  
  return new Date().toLocaleDateString(locale, options);
}

// Exportar las funciones
module.exports = {
  getTimeStamp,
  getLongTime
};
```
**La función** `getTimeStamp()` simplemente retorna el valor actual de tiempo en milisegundos desde el 1 de enero de 1970, utilizando el método nativo `Date.now()`.

La función `getLongTime()` es más compleja y nos permite formatear la fecha actual en un formato extenso, especificando el idioma mediante el parámetro `locale` (que por defecto es español). Esta función utiliza el método `toLocaleDateString()` de JavaScript, que acepta opciones de formato para personalizar la salida.

### Documentación del paquete
Un buen paquete siempre debe incluir documentación clara. Crearemos un archivo README.md:
```
# platzi-date

Una utilidad para manejar fechas en formato timestamp y long time.

## Install

```bash
npm install platzi-date
```

Esta documentación básica explica el propósito del paquete y cómo instalarlo. En un paquete real, sería recomendable añadir ejemplos de uso, API detallada y cualquier otra información relevante.

### Configuración del package.json
El archivo `package.json` es crucial para la publicación de nuestro paquete. Debemos modificarlo para incluir información importante:
```
{
  "name": "platzi-date",
  "version": "1.0.0",
  "description": "Una utilidad para manejar fechas en formato timestamp y long time",
  "main": "src/index.js",
  "keywords": ["date", "time", "timestamp"],
  "author": "Tu Nombre",
  "license": "MIT"
}
```
Los campos más importantes son:
* __name:__ El nombre único de nuestro paquete
* __description:__ Una breve descripción de la funcionalidad
* __main:__ La ruta al archivo principal del paquete
* __keywords:__ Palabras clave para facilitar la búsqueda
* __author:__ Tu nombre o identificador
* __license:__ El tipo de licencia (MIT es común para proyectos de código abierto)

### ¿Cómo probar un paquete NPM localmente?
Antes de publicar nuestro paquete, es fundamental probarlo localmente para asegurarnos de que funciona correctamente. NPM proporciona una herramienta llamada `npm link` que nos permite crear un enlace simbólico a nuestro paquete local.

### Creación del enlace simbólico
Para crear el enlace, seguimos estos pasos:

1. Dentro del directorio de nuestro paquete, ejecutamos:
```
npm link
```
2. En el proyecto donde queremos probar el paquete, ejecutamos:
```
npm link platzi-date
```
Esto crea un enlace simbólico en la carpeta `node_modules` de nuestro proyecto, apuntando al paquete local que estamos desarrollando.

### Prueba del paquete
Para probar nuestro paquete, creamos un archivo de prueba en nuestro proyecto principal:
```
// date.js
const dateFormatter = require('platzi-date');

// Obtener timestamp actual
console.log(dateFormatter.getTimeStamp());

// Obtener fecha en español (formato por defecto)
console.log(dateFormatter.getLongTime());

// Obtener fecha en inglés
console.log(dateFormatter.getLongTime('en-US'));
```
Al ejecutar este archivo con Node.js:
```
node date.js
```
Deberíamos ver tres salidas:
1. Un número que representa el timestamp actual
2. La fecha actual en formato largo en español
3. La fecha actual en formato largo en inglés

Si todo funciona correctamente, significa que nuestro paquete está listo para ser publicado.

### ¿Qué consideraciones debemos tener antes de publicar?
Antes de publicar nuestro paquete en NPM, es importante realizar algunas verificaciones finales:

1. Revisar el código: Asegurarnos de que no hay errores, tipos o elementos extraños.
2. Verificar la documentación: Comprobar que el README.md es claro y contiene toda la información necesaria.
3. Comprobar el package.json: Verificar que todos los campos están correctamente configurados.
4. Probar exhaustivamente: Asegurarnos de que todas las funcionalidades funcionan como se espera.

**Es fundamental realizar estas comprobaciones** porque una vez publicado el paquete, aunque se pueden publicar nuevas versiones, la versión original quedará registrada en NPM y podría ser descargada por otros desarrolladores.

La creación y publicación de paquetes en NPM es una excelente manera de contribuir a la comunidad de desarrollo y compartir soluciones útiles. Con este proceso, has aprendido a crear un paquete simple pero funcional para el manejo de fechas. ¿Qué otro tipo de utilidades crees que podrías desarrollar y compartir con la comunidad?