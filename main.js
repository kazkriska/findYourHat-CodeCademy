const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this.field = field;
    }

    print() {
        let fieldPrint = this.field.map((rowArray) => rowArray.join(''));
        console.log(fieldPrint.join('\n'));
    }
};

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);
  
//myField.print();