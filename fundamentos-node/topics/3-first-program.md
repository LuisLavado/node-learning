**[Curso de Fundamentos de Node.js](./../README.MD)**
# Primer Programa en Node.js: Generador de Números Aleatorios

### Resumen

La programación con Node.js abre un mundo de posibilidades para desarrolladores que desean llevar sus habilidades de JavaScript más allá del navegador. Crear aplicaciones del lado del servidor se vuelve una tarea accesible y potente cuando dominas los fundamentos de este entorno de ejecución.

### ¿Cómo crear tu primer programa en Node.js?
Ahora que tienes tu entorno de trabajo configurado, es momento de crear tu primer programa en Node.js. Este proceso implica más que solo escribir código; requiere organización y buenas prácticas desde el inicio. **La estructura de carpetas y la inicialización adecuada del proyecto son fundamentales** para mantener un desarrollo ordenado y escalable.

Para comenzar, es recomendable tener un espacio de trabajo dedicado donde clasificar tus proyectos según su naturaleza (personales, laborales o experimentales). Esta organización te ayudará a mantener todo en orden mientras avanzas en tu aprendizaje.

### ¿Cómo inicializar correctamente un proyecto de Node.js?
El primer paso es crear una carpeta específica para tu proyecto:
```
mkdir nodejs
cd nodejs
```
Una vez dentro de la carpeta, es una buena práctica inicializar un repositorio Git:
```
git init
```
Esto no significa que debas subir inmediatamente tu código a GitHub, sino que **mantendrás un historial de cambios** que te permitirá recordar qué modificaciones realizaste y por qué las hiciste.

A continuación, inicializa tu proyecto de Node.js:
```
npm init
```
Este comando te guiará a través de una serie de preguntas para configurar tu proyecto:
* Nombre del proyecto (por defecto toma el nombre de la carpeta)
* Versión (generalmente 1.0.0)
* Descripción (por ejemplo: "nodejs examples")
* Punto de entrada (index.js)
* Comandos de prueba
* Repositorio Git
* Palabras clave
* Autor
* Licencia (MIT es recomendable para proyectos que quieras compartir)

### ¿Cómo estructurar tu primer programa en Node.js?
Una vez inicializado el proyecto, es momento de crear la estructura de archivos:

1. Crea una carpeta `src` (source) para almacenar tu código
2. Dentro de esta carpeta, crea un archivo `index.js`
```
mkdir src
touch src/index.js
```
O puedes usar tu editor de código favorito (como Visual Studio Code) para crear estos archivos:
```
code .
```

### ¿Cómo crear un generador de números aleatorios en Node.js?
Para nuestro primer programa, crearemos algo más interesante que un simple "Hola Mundo". **Desarrollaremos un generador de números aleatorios** con las siguientes características:

* Si no se proporcionan argumentos, generará un número aleatorio entre 1 y 100
* Si se proporcionan dos argumentos, generará un número aleatorio entre esos valores
* Incluirá validaciones para manejar entradas incorrectas

### ¿Cómo capturar argumentos de línea de comandos en Node.js?
El primer paso es capturar los argumentos que el usuario proporciona al ejecutar el programa:
```
const args = process.argv.slice(2);
```
La propiedad `process.argv` contiene todos los argumentos de línea de comandos, pero los primeros dos elementos son la ruta de Node.js y la ruta del archivo que se está ejecutando. Por eso usamos `slice(2)` para obtener solo los argumentos que nos interesan.

### ¿Cómo implementar la lógica del generador aleatorio?
Definimos valores por defecto para cuando no se proporcionen argumentos:
```
let min = 1;
let max = 100;
```
Luego verificamos si se proporcionaron al menos dos argumentos:
```
if (args.length >= 2) {
  const parseMin = parseInt(args[0], 10);
  const parseMax = parseInt(args[1], 10);
  
  if (!isNaN(parseMin) && !isNaN(parseMax) && parseMin < parseMax) {
    min = parseMin;
    max = parseMax;
  } else {
    console.log("🚫 Rango inválido, usando valores por defecto del 1 al 100");
  }
}
```
Finalmente, generamos y mostramos el número aleatorio:
```
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`🎲 Número aleatorio generado entre ${min} y ${max}: ${randomNumber}`);
```

### ¿Cómo ejecutar y probar nuestro programa?
Para ejecutar el programa, usamos el comando node seguido de la ruta al archivo:
```
node src/index.js
```
Esto generará un número aleatorio entre 1 y 100. Si queremos especificar un rango, proporcionamos dos argumentos:
```
node src/index.js 10 50
```
Esto generará un número aleatorio entre 10 y 50.

### ¿Cómo manejar errores en programas de Node.js?
Los errores son nuestros amigos en el desarrollo. Cuando ocurre un error, Node.js proporciona información valiosa sobre lo que salió mal y dónde ocurrió el problema.

Por ejemplo, si cometemos un error tipográfico como escribir `arx` en lugar de `argv`:
```
const args = process.arx.slice(2); // Error: arx no existe en process
```
Node.js mostrará un mensaje de error indicando exactamente dónde está el problema, lo que facilita la depuración.

Es importante implementar validaciones para manejar entradas incorrectas. En nuestro programa, verificamos que:

1. Los argumentos se puedan convertir a números
2. El valor mínimo sea menor que el máximo
3. Se proporcione un mensaje claro cuando los argumentos no sean válidos

La programación en Node.js te permite aplicar tus conocimientos de JavaScript en un entorno de servidor, ampliando enormemente las posibilidades de lo que puedes crear. Este primer programa es solo el comienzo de tu viaje con Node.js. ¿Te animas a modificarlo para que no muestre un número aleatorio cuando el rango proporcionado es inválido?