const fs = require('fs');

// Definimos el nombre del archivo
const fileName = 'fs_example.txt';

// Creamos un archivo y escribimos contenido en él
fs.writeFileSync(fileName, 'Hola, este es un archivo de ejemplo.');
console.log('Archivo creado correctamente');

// Leemos el contenido del archivo
const content = fs.readFileSync(fileName, 'utf8');
console.log('File content:', content);

// Actualizar
fs.appendFileSync(fileName, '\n\nEsta es una nueva línea.\n');
console.log('Archivo actualizado correctamente');

// Eliminamos el archivo
fs.unlinkSync(fileName);
console.log('Archivo eliminado correctamente');