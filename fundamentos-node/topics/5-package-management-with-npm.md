**[Curso de Fundamentos de Node.js](./../README.MD)**
# Gestión de Paquetes con NPM: Instalación y Uso Básico

### Resumen
La gestión de paquetes con NPM es una habilidad fundamental para cualquier desarrollador JavaScript moderno. Este sistema no solo facilita la incorporación de código de terceros en nuestros proyectos, sino que también nos permite compartir nuestras propias creaciones con la comunidad global de desarrolladores, fomentando así un ecosistema colaborativo y eficiente.

### ¿Qué es NPM y por qué es tan importante?
NPM (Node Package Manager) es la herramienta que nos permite instalar, desinstalar y administrar los paquetes que la comunidad construye para incorporarlos en nuestros proyectos. Funciona como una inmensa biblioteca de recursos que facilita el desarrollo, evitándonos "reinventar la rueda" constantemente.

El sitio web `npmjs.com` es el punto central donde podemos encontrar esta vasta colección de recursos. Desde validadores simples hasta frameworks completos, prácticamente cualquier funcionalidad que necesitemos probablemente ya existe como un paquete NPM.

La mayoría de estos paquetes son de código abierto (open source), lo que significa que podemos:

* Acceder al código fuente.
* Entender cómo funciona internamente.
* Implementarlo según nuestras necesidades.
* Aprender analizando el código de otros desarrolladores.

### ¿Cómo empezar a usar NPM?
NPM viene instalado por defecto cuando instalamos Node.js en nuestro sistema. Podemos verificar su presencia y versión con un simple comando:
```
npm -v
```
Para inicializar un proyecto con NPM, debemos ejecutar:
```
npm init
```
Este comando inicia un proceso interactivo que nos pedirá información para configurar nuestro proyecto:

* Nombre del proyecto
* Versión
* Descripción
* Punto de entrada (entry point)
* Comandos de prueba
* Repositorio
* Palabras clave
* Autor
* Licencia

Toda esta información se almacenará en un archivo llamado `package.json`, que funcionará como la configuración central de nuestro proyecto.

### ¿Cómo instalar y utilizar paquetes?
Una vez inicializado nuestro proyecto, podemos comenzar a instalar paquetes. Por ejemplo, si queremos instalar un paquete para validar si un valor es numérico:
```
npm install is-number
# o de forma abreviada
npm i is-number
```
Este comando realiza varias acciones importantes:
1. Descarga el paquete y lo guarda en la carpeta `node_modules`
2. Actualiza el archivo `package.json` añadiendo la dependencia
3. Crea o actualiza el archivo `package-lock.json` que mantiene un registro exacto de las versiones instaladas

### Implementando el paquete en nuestro código
Una vez instalado, podemos usar el paquete en nuestro código:
```
const isNumber = require('is-number');

console.log(isNumber(5)); // true
console.log(isNumber('hola')); // false
```
## Buenas prácticas al trabajar con NPM
### Ignorar node_modules en el control de versiones
La carpeta `node_modules` puede volverse extremadamente grande, ya que contiene todos los paquetes instalados y sus dependencias. Por esta razón, es una práctica estándar excluirla de nuestro repositorio Git.

Para hacerlo, creamos un archivo `.gitignore` en la raíz de nuestro proyecto. Podemos usar herramientas como `gitignore.io` para generar un archivo adecuado para proyectos Node.js.

### Crear scripts para facilitar tareas comunes
NPM nos permite definir scripts en nuestro `package.json` para ejecutar tareas frecuentes:
```
"scripts": {
  "start": "node main.js"
}
```
Estos scripts se pueden ejecutar con:
```
npm run start
```
**Los scripts son una forma poderosa de estandarizar comandos** que se utilizan frecuentemente en el desarrollo, pruebas o despliegue de nuestras aplicaciones.

NPM es una herramienta fundamental en el ecosistema de JavaScript que facilita enormemente el desarrollo de aplicaciones modernas. Dominar su uso te permitirá aprovechar el trabajo de miles de desarrolladores y contribuir con tus propias creaciones a esta vibrante comunidad. 

## Lecturas recomendadas
* [gitignore.io](https://www.toptal.com/developers/gitignore/)
* [Open Source Guides](https://opensource.guide/)
* [npm | Home](https://www.npmjs.com/)