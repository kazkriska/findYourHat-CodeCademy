function inputLogic(input) {
    let row = 0;
    let col = 0;
    switch(input) {
        case 'w': { //UP
            row -= 1;
            return [row, col];
        }
        case 's': { //DOWN
            row += 1;
            return [row, col];
        }
        case 'a': { //LEFT
            col -= 1;
            return [row, col];
        }
        case 'd': { //RIGHT
            col += 1;
            return [row, col];
        }
        default: {
            return [row, col];
        }
    }
};

module.exports.inputLogic = inputLogic;

// console.log(inputLogic('w'));
// console.log(inputLogic('a'));
// console.log(inputLogic('s'));
// console.log(inputLogic('d'));