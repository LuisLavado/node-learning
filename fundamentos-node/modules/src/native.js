const fs = require('fs');

const data = fs.readFileSync('modules/example.txt', 'utf8');
console.log('File Content:', data);