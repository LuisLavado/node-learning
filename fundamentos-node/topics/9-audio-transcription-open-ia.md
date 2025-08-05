**[Curso de Fundamentos de Node.js](./../README.MD)**
# Script para Transcripción de Audio con OpenAI Whisper y Node.js

### Resumen
La manipulación de archivos es una habilidad fundamental para cualquier desarrollador de `Node.js`. En este artículo, exploraremos cómo crear un script robusto que se comunica con la API de OpenAI para transcribir archivos de audio utilizando el modelo Whisper. Este proceso no solo demuestra el poder del módulo File System (FS) de Node.js, sino que también ilustra cómo interactuar con APIs externas para crear aplicaciones prácticas y útiles.

### ¿Cómo crear un script para transcribir audio con Node.js y OpenAI?
Antes de sumergirnos en el código, es importante entender que estaremos construyendo un script que realizará las siguientes tareas:

1. Leer un archivo de audio desde nuestro sistema de archivos.
2. Enviar ese archivo a la API de Whisper de OpenAI.
3. Recibir la transcripción del audio.
4. Guardar esa transcripción en un archivo de texto.

Para comenzar, necesitarás registrarte en OpenAI y obtener una API key. Esta clave es esencial para autenticar tus solicitudes a la API de Whisper.

### ¿Qué módulos necesitamos importar?
Para nuestro script, necesitaremos dos módulos principales:
```
const fs = require('fs');
const path = require('path');
```
El módulo FS (File System) nos permite leer y escribir archivos, mientras que el módulo Path nos proporciona utilidades para manejar rutas de archivos y directorios de forma independiente al sistema operativo. Esto es crucial para garantizar que nuestro script funcione correctamente en diferentes plataformas como Windows, macOS o Linux.

### ¿Cómo estructurar la función principal de transcripción?
Nuestra función principal será asíncrona y recibirá dos parámetros: la ruta del archivo de audio y la API key de OpenAI.
```
async function transcriptAudio(audioFilePath, apiKey) {
  try {
    // Verificar si el archivo existe
    if (!fs.existsSync(audioFilePath)) {
      throw new Error('El archivo de audio no existe o no tienes un archivo de audio');
    }

    // Leer el archivo de audio
    const audioFile = fs.readFileSync(audioFilePath);

    // Crear FormData para la solicitud
    const formData = new FormData();
    
    // Crear un blob con el contenido del archivo
    const blob = new Blob([audioFile]);
    
    // Añadir el archivo y el modelo a FormData
    formData.append('file', blob, audioFilePath);
    formData.append('model', 'whisper-1');

    // Realizar la solicitud a la API de Whisper
    const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`
      },
      body: formData
    });

    // Verificar si la respuesta es correcta
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error en la API: ${JSON.stringify(errorData)}`);
    }

    // Obtener los datos de la respuesta
    const data = await response.json();
    const transcription = data.text;

    // Crear la ruta para el archivo de salida
    const outputFilePath = path.join(
      path.dirname(audioFilePath),
      path.basename(audioFilePath, path.extname(audioFilePath)) + '_transcription.txt'
    );

    // Guardar la transcripción en un archivo
    fs.writeFileSync(outputFilePath, transcription);

    console.log(`Transcripción guardada en ${outputFilePath}`);
    return transcription;

  } catch (error) {
    console.error('Error durante la transcripción:', error.message);
  }
}
```
### ¿Cómo verificamos la existencia del archivo de audio?
Antes de proceder con la transcripción, es crucial verificar si el archivo de audio existe:
```
if (!fs.existsSync(audioFilePath)) {
  throw new Error('El archivo de audio no existe o no tienes un archivo de audio');
}
```
Esta verificación nos permite manejar errores de manera elegante y proporcionar información útil al usuario.

### ¿Cómo preparamos los datos para enviarlos a la API?
Para enviar el archivo de audio a la API de Whisper, necesitamos formatear los datos correctamente:
```
const audioFile = fs.readFileSync(audioFilePath);
const formData = new FormData();
const blob = new Blob([audioFile]);
    
formData.append('file', blob, audioFilePath);
formData.append('model', 'whisper-1');
```
Primero, leemos el archivo de audio utilizando `fs.readFileSync()`. Luego, creamos un objeto `FormData` y un `Blob` con el contenido del archivo. Finalmente, añadimos el archivo y especificamos el modelo de Whisper que queremos utilizar.

### ¿Cómo realizamos la solicitud a la API de Whisper?
La solicitud a la API se realiza utilizando `fetch`:
```
const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${apiKey}`
  },
  body: formData
});
```
Es importante incluir la API key en el encabezado de autorización y enviar el `FormData` como cuerpo de la solicitud.

### ¿Cómo guardamos la transcripción en un archivo?
Una vez que recibimos la transcripción de la API, la guardamos en un archivo de texto:
```
const outputFilePath = path.join(
  path.dirname(audioFilePath),
  path.basename(audioFilePath, path.extname(audioFilePath)) + '_transcription.txt'
);

fs.writeFileSync(outputFilePath, transcription);
```
Utilizamos el módulo `path` para construir una ruta de archivo que sea independiente del sistema operativo. La transcripción se guarda en un archivo con el mismo nombre que el archivo de audio original, pero con el sufijo "_transcription.txt".

### ¿Cómo manejar errores en nuestro script?
El manejo de errores es una parte crucial de cualquier aplicación robusta. En nuestro script, utilizamos un bloque try-catch para capturar y manejar cualquier error que pueda ocurrir durante el proceso de transcripción:
```
try {
  // Código para la transcripción
} catch (error) {
  console.error('Error durante la transcripción:', error.message);
}
```
También incluimos verificaciones específicas para manejar errores de la API:
```
if (!response.ok) {
  const errorData = await response.json();
  throw new Error(`Error en la API: ${JSON.stringify(errorData)}`);
}
```
### ¿Por qué es importante el módulo Path?
El módulo `path` es esencial para garantizar que nuestro script funcione correctamente en diferentes sistemas operativos. Proporciona métodos para trabajar con rutas de archivos de manera consistente:

* `path.dirname():` Obtiene el directorio de una ruta de archivo.
* `path.basename():` Obtiene el nombre base de un archivo (sin la ruta).
* `path.extname():` Obtiene la extensión de un archivo.
* `path.join():` Une segmentos de ruta en una sola ruta.

Estos métodos nos permiten construir rutas de archivo que funcionarán correctamente en Windows, macOS y Linux.

La combinación del módulo File System (FS) y el módulo Path nos proporciona herramientas poderosas para trabajar con archivos en Node.js. En este artículo, hemos visto cómo utilizar estas herramientas para crear un script que transcribe archivos de audio utilizando la API de Whisper de OpenAI. Este ejemplo demuestra cómo los conceptos básicos de Node.js pueden aplicarse para crear aplicaciones prácticas y útiles. ¿Has utilizado alguna vez estas técnicas en tus proyectos? Comparte tu experiencia en los comentarios.