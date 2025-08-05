const luigidate = require('luigidate');

// Obtener timestamp actual
console.log(luigidate.getTimeStamp());

// Obtener fecha en español (formato por defecto)
console.log(luigidate.getLongTime());

// Obtener fecha en inglés
console.log(luigidate.getLongTime('en-US'));
