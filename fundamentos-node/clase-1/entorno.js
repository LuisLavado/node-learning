let nombre = process.env.NOMBRE || 'Sin nombre';
let web = process.env.WEB || 'No tengo web';

console.log('Hola ' + nombre);
console.log('Mi web es ' + web);
// node entorno.js
// NOMBRE=Luigi node entorno.js
// NOMBRE=Luigi WEB=luislavado.com node entorno.js