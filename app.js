
const { argv } = require('./config/yargs');
const colors = require('colors');

const { createBase, showTable } = require('./multiply/multiply');

let comand = argv._[0];
let vBase, vLimit;

console.log('====DATA=====');
console.log(argv);

if(argv.base !== undefined) {
    vBase = argv.base;
} else if(argv.b !== undefined) {
    vBase = argv.b;
}
if(argv.limit !== undefined) {
    vLimit = argv.limit;
} else if(argv.l !== undefined) {
    vLimit = argv.l;
}

switch(comand) {
    case 'show':
        showTable(vBase, vLimit)
            .then(data => console.log(data))
            .catch(err => console.log(err));
        break;
    case 'create':
        createBase(vBase, vLimit)
            .then(name => console.log(`Archivo ${name} creado correctamente.`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}
//