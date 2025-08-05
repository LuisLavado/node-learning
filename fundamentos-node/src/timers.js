// Marcamos la hora actual para ver el flujo de ejecución
console.log("Hora actual", new Date().toLocaleTimeString());

// setTimeout - ejecuta código después de un tiempo específico (una sola vez)
const timeOut = setTimeout(() => {
    console.log("Este mensaje aparece después de dos segundos");
    console.log("Hora actual", new Date().toLocaleTimeString());
}, 2000);

// setImmediate - ejecuta código en la próxima iteración del bucle de eventos
setImmediate(() => {
    console.log("Éste mensaje aparece en la próxima iteración del bucle.")
})

// setInterval - ejecuta código repetidamente con un intervalo de tiempo
const intervalID = setInterval(() => {
    console.log("Éste mensaje aparecerá cada tres segundos")
}, 3000);

// Cancelar el intervalo después de 10 segundos
setTimeout(() => {
    console.log("Cancelar el intervalo después de diez segundos");
    clearInterval(intervalID);
}, 10000);

// Crear un timeout que nunca se ejecutará porque lo cancelamos inmediatamente
const timeOutID = setTimeout(() => {
    console.log("Éste mensaje nunca aparecerá");
}, 10000);
clearTimeout(timeOutID);

console.log("Hora final", new Date().toLocaleTimeString());