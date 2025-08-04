const fs = require('fs');
const path = require('path');

const filename = 'js.txt';
const filePath = path.join(__dirname, filename);
const outputFilename = 'output-js.txt';
const outputPath = path.join(__dirname, outputFilename);

// Crear un stream de lectura
const readableStream = fs.createReadStream(filePath, { encoding: 'utf8' });
// Crear un stream de escritura
const writableStream = fs.createWriteStream(outputPath);

// Evento para procesar cada fragmento de datos
readableStream.on('data', chunk => {
    console.log('Chunk', chunk);
    writableStream.write(chunk);
});

// Evento cuando finaliza la lectura
readableStream.on('end', () => {
    console.log('Termino la lectura del archivo');
    writableStream.end();
});

readableStream.on('error', err => {
    console.log('Error de lectura del archivo', err);
});

writableStream.on('error', err => {
    console.log('Error en la escritura del archivo', err);
})