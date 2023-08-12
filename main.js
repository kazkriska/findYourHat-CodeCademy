const prompt = require('prompt-sync')({sigint: true});
const { Field } = require('./Field.js');
const { generateField } = require('./generateField.js');

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);
  
const generatedField = new Field(generateField(30,60,20));

generatedField.playGame();


