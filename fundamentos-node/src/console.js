// Método básico para mostrar información
console.log("Hola mundo");

// Similar a log, pero específicamente para información
console.info("Similar a .log, pero para mostrar información");

// Para mostrar advertencias (aparece en amarillo en algunas terminales/navegadores)
console.warn("Para advertencias");

// Para mostrar errores (aparece en rojo en algunas terminales/navegadores)
console.error("Para errores, para el manejo de errores");

const usuarios = [
  { nombre: "Juan", edad: 25, rol: "Desarrollador" },
  { nombre: "María", edad: 30, rol: "Diseñadora" },
  { nombre: "Carlos", edad: 28, rol: "Product Manager" }
];

// Mostrar todos los datos en formato tabla
console.table(usuarios);

// Mostrar solo columnas específicas
console.table(usuarios, ["nombre", "rol"]);

// Iniciar el temporizador
console.time("operación");

// Código que queremos medir
// Por ejemplo, un bucle o una operación costosa
for (let i = 0; i < 1000000; i++) {
  // Operación que consume tiempo
}

// Finalizar el temporizador y mostrar el resultado
console.timeEnd("operación");