/*
* Requireds
*/
const fs = require('fs');
const colors = require('colors');

let showTable = (base, limit) => {
    console.log('========================='.green .bgMagenta);
    console.log(`Table * ${ base } to ${ limit }`.green .bgMagenta);
    console.log('========================='.green .bgMagenta);
    return new Promise((resolve, reject) => {
        if(!Number(base)) return reject(`El valor base ${base} no es un número valido.`);
        if(!Number(limit)) return  reject(`El valor limite ${limit} no es un número valido.`);
        let data = '';

        for(let y = 1; y <= limit; y++) {
            data += `${ base } * ${ y } = ${base * y} \n`;
        }
        resolve(data);
    });
};

let createBase = (base, limit) => {
    return new Promise((resolve, reject) => {
        if(!Number(base)) return reject(`El valor base ${base} no es un número valido.`);
        if(!Number(limit)) return  reject(`El valor limite ${limit} no es un número valido.`);

        let data = '';
        for(let y = 1; y <= limit; y++) {
            data += `${ base } * ${ y } = ${base * y} \n`;
        }
       
        fs.writeFile(`multiply/data/TableX${base}-to-${limit}.txt`, data, (err) => {
            if(err) {
                reject(err);
            } else {
                resolve(`TableX${base}-to-${limit}.txt`.green .bgMagenta);
            }
        });
    });
};

module.exports = {
    createBase,
    showTable
};
