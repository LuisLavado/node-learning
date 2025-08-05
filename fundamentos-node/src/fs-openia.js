const fs = require('fs');
const path = require('path');

const apiUrl = 'https://api.openai.com/v1/audio/transcriptions' // OpenIA

async function transcribeAudio(audioFilePath, apiKey) {
    try {
        if (!fs.existsSync(audioFilePath)) {
            throw new Error('El archivo de audio no existe');
        }

        const audioFile = fs.readFileSync(audioFilePath);
        const formData = new FormData();

        const blob = new Blob([audioFile]);

        formData.append('file', blob, path.basename(audioFilePath))
        formData.append('model', 'whisper-1');

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                Authorization: `Token ${apiKey}`,
            },
            body: formData
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error en la API: ${JSON.stringify(errorData)}`);
        }

        const data = await response.json();
        const transcription = data.text;

        const pathDirname = path.dirname(audioFilePath);
        console.log('pathDirname', pathDirname);

        const outputFilePath = path.join(
            path.dirname(audioFilePath),
            `${path.basename(audioFilePath, path.extname(audioFilePath))}_transcription.txt`
        );

        fs.writeFileSync(outputFilePath, transcription);
        console.log(`Transcripción guardada en: ${outputFilePath}`);
        return transcription;
    } catch (error) {
        console.log('Error durante la transcripción', error.message);
        throw error;
    }
}

const audioPath = './audio.mp3';
const myApiKey = '';

transcribeAudio(audioPath, myApiKey)
    .then(transcription => {
        console.log('Transcripción completada con éxito');
        console.log(transcription);
    })
    .catch(error => {
        console.log('Falló la transcripción', error);
    });

