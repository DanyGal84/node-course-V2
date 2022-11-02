const chalk = require('chalk');
const getNotes = require('./notes.js');

const notes = getNotes();

console.log(notes);
console.log(chalk.blue.bold.inverse('Success!'));

// const add = require('./utils.js');
// const sum = add(4, -2);
// console.log(sum);
