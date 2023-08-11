function generateField(rows, columns, percentOfHoles) {
    const fieldCharacter = '░';
    const maze = new Array(rows).fill(null).map(() => new Array(columns).fill(fieldCharacter));
  
    maze[0][0] = '*';
  
    const totalCells = rows * columns;
    const numHoles = Math.floor((percentOfHoles / 100) * totalCells);
  
    let hatPlaced = false;
    let holesPlaced = 0;
  
    while (hatPlaced === false || holesPlaced < numHoles) {
      const randomRow = Math.floor(Math.random() * rows);
      const randomColumn = Math.floor(Math.random() * columns);
  
      if (maze[randomRow][randomColumn] === fieldCharacter) {
        if (!hatPlaced) {
          maze[randomRow][randomColumn] = '^';
          hatPlaced = true;
        } else {
          maze[randomRow][randomColumn] = 'O';
          holesPlaced++;
        }
      }
    }
  
    return maze;
  };

module.exports.generateField = generateField;
