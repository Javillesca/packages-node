const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('show', 'Muestra por consola la tabla de multiplicar', options)
    .command('create', 'Generación de archivo txt con tabla de multiplicación', options)
    .help()
    .argv;

module.exports = {
    argv
}