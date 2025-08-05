const { Buffer } = require('buffer');

const bufferFromString = Buffer.from('Hello World', 'utf8');
console.log(bufferFromString);

const bufferAlloc = Buffer.alloc(10);
console.log(bufferAlloc);

bufferAlloc.write('node.js');
console.log(bufferAlloc);

const bufferToString = bufferAlloc.toString('utf8', 0, 7);
console.log(bufferToString);

bufferAlloc.write('si la cadena que intentamos escribir es más grande que el tamaño del buffer, solo se escribirá lo que quepa en él');
console.log(bufferAlloc);

const bufferToString2 = bufferAlloc.toString('utf8');
console.log(bufferToString2); 