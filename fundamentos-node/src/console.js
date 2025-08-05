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

// Clear
console.clear();

// Count
console.count('contador');
console.count('contador');
console.count('contador');
console.count('contador');
console.countReset('contador');
console.count('contador');

//
console.group('Grupo principal');
console.log('Información uno');
console.group('Subgrupo de información');
console.log('Información subgrupo uno');
console.group('Otro nivel');
console.log('Información subgrupo dos');
console.groupEnd();
console.groupEnd();
console.log('Final del grupo');
console.groupEnd();

// 
console.assert(1 === 1, "Esto no se muestra");
console.assert(1 === 2, "Esto sí se mostrará");

// console.clear();
console.clear();

//
console.trace("Mostrar la pila de llamadas actual");