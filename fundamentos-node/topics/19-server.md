**[Curso de Fundamentos de Node.js](./../README.MD)**
# Creación de un Servidor HTTP con NodeJS y Flagwatch

### Resumen
La creación de servidores web es una habilidad fundamental para cualquier desarrollador que trabaje con Node.js. El módulo HTTP nativo de Node.js proporciona las herramientas necesarias para construir aplicaciones web robustas sin depender de frameworks externos. Dominar este módulo te permitirá entender mejor cómo funcionan las comunicaciones cliente-servidor y te dará una base sólida para trabajar con frameworks más avanzados en el futuro.

### ¿Cómo crear un servidor básico con el módulo HTTP de Node.js?
El módulo HTTP es una parte fundamental de Node.js que nos permite crear servidores web de manera nativa. Para comenzar a trabajar con él, primero debemos importarlo en nuestro proyecto:
```
const http = require('http');
```
Una vez importado, podemos crear un servidor utilizando el método `createServer()`. Este método acepta una función callback que recibe dos parámetros: `request` y `response`, que representan la solicitud entrante y la respuesta que enviaremos al cliente:
```
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World');
});
```
En este código:

* `res.writeHead(200, { 'Content-Type': 'text/plain' })` establece el código de estado HTTP (200 significa éxito) y el tipo de contenido que enviaremos.
* `res.end('Hello World')` envía la respuesta al cliente y finaliza la conexión.

Para que nuestro servidor comience a escuchar peticiones, debemos indicarle un puerto y opcionalmente una dirección:
```
server.listen(3000, 'localhost', () => {
  console.log('Server running');
});
```
El puerto 3000 es comúnmente utilizado en desarrollo, aunque puedes elegir cualquier puerto que no esté en uso en tu sistema.

### ¿Cómo probar nuestro servidor HTTP?
Una vez que el servidor está en ejecución, podemos acceder a él a través de un navegador web. Si hemos configurado el servidor para escuchar en localhost:3000, simplemente navegamos a esa dirección:
```
http://localhost:3000
```
Alternativamente, podemos usar la dirección IP `127.0.0.1`, que es equivalente a `localhost`:
```
http://127.0.0.1:3000
```

### ¿Cómo mejorar el flujo de desarrollo con el flag --watch?
Uno de los desafíos al desarrollar servidores en Node.js es que tradicionalmente necesitábamos reiniciar manualmente el servidor cada vez que hacíamos un cambio en el código. Herramientas como Nodemon solucionaban este problema, pero ahora Node.js incluye una funcionalidad nativa para esto.

A partir de la versión 18 de Node.js (y actualmente en la versión 23), se introdujo el flag --watch en modo beta, que permite a Node.js detectar cambios en los archivos y reiniciar automáticamente la aplicación:
```
node --watch server.js
```
Este comando ejecutará nuestro servidor y lo reiniciará automáticamente cada vez que detecte cambios en el archivo `server.js`. Esto **elimina la necesidad de utilizar herramientas externas como Nodemon** durante el desarrollo.

### Ventajas del flag --watch
* __Desarrollo más eficiente:__ No es necesario detener y reiniciar manualmente el servidor.
* __Retroalimentación inmediata:__ Los cambios se reflejan instantáneamente.
* __Sin dependencias externas:__ No necesitas instalar paquetes adicionales.

Para verificar la versión de Node.js que estás utilizando, puedes ejecutar:
```
node -v
```
Si tienes la versión 18 o superior, puedes aprovechar esta funcionalidad.

### ¿Cuándo avanzar a frameworks más robustos?
Aunque el módulo HTTP de Node.js es potente y flexible, para aplicaciones más complejas puede resultar más práctico utilizar frameworks que abstraen muchas de las tareas repetitivas.

**Express.js** es uno de los frameworks más populares para Node.js, que facilita la creación de APIs y aplicaciones web. Proporciona una capa de abstracción sobre el módulo HTTP nativo, ofreciendo:

* Manejo de rutas más intuitivo
* Middleware para procesar solicitudes
* Integración sencilla con motores de plantillas
* Gestión de errores mejorada

Si estás comenzando a construir APIs más complejas, considerar el uso de frameworks como Express puede ahorrarte tiempo y esfuerzo, mientras mantienes el control sobre tu aplicación.

El dominio del módulo HTTP nativo de Node.js es fundamental para entender cómo funcionan las comunicaciones web, incluso si posteriormente decides utilizar frameworks más avanzados. Esta base de conocimiento te permitirá resolver problemas complejos y optimizar tus aplicaciones cuando sea necesario. ¡Te animamos a seguir explorando y practicando con estos conceptos para convertirte en un desarrollador Node.js más competente!