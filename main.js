const prompt = require('prompt-sync')({sigint: true});
const { Field } = require('./Field.js');

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);
  

let isNextMovePossible = true;

while (isNextMovePossible) {

    myField.print();
    let move = prompt('Which way? ');

    if (myField.isMoveWithinBoundary(move)) {

        if (myField.elementAtNextPosition(move) === hole){
            console.log('You fell thru a hole, GAME OVER');
            isNextMovePossible = false;
        } else if (myField.elementAtNextPosition(move) === hat) {
            console.log('You found the hat, GAME WON');
            isNextMovePossible = false;
        } else if (myField.elementAtNextPosition(move) === fieldCharacter) {
            myField.updateField(myField.updatePosition(move));
            console.clear();
            isNextMovePossible = true;
        } else {
            console.log('ERROR');
        }
        
    } else {

        console.log('You went out of the field, GAME OVER')
        isNextMovePossible = false;
    }   
};