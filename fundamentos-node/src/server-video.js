const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3500;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {

    if (req.url === '/video') {
        // Ruta del archivo de video
        const videoPath = path.join(__dirname, 'video.mp4');

        // Obtener información del archivo
        const stat = fs.statSync(videoPath);

        res.writeHead(200, {
            'content-type': 'video/mp4',
            'content-length': stat.size
        });

        // Crear un stream de lectura
        const readStream = fs.createReadStream(videoPath); // buffer

        // Contador para monitorear los chunks
        let chunkCounter = 0;

        // Evento para cada chunk de datos
        readStream.on('data', (chunk) => {
            chunkCounter++;
            console.log(`Chunk ${chunkCounter}: ${chunk.length} bytes leídos y enviados`);
        });

        // Conectar el stream de lectura con la respuesta
        readStream.pipe(res);
    } else {
        // Respuesta para rutas no encontradas
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not found');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
});