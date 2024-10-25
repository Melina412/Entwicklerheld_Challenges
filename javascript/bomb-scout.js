function annotate(rows) {
  return rows.map((row, rowIndex, board) => {
    return row.split('').reduce((acc, cell, index) => {
      if (cell === ' ') {
        let bombCount = 0;
        const rowLength = row.length;

        // check row index +/-1
        if (index > 0 && row[index - 1] === '*') bombCount++;
        if (index < rowLength - 1 && row[index + 1] === '*') bombCount++;

        // check row above
        if (rowIndex > 0) {
          const aboveRow = board[rowIndex - 1];
          if (aboveRow[index] === '*') bombCount++;
          if (index > 0 && aboveRow[index - 1] === '*') bombCount++;
          if (index < rowLength - 1 && aboveRow[index + 1] === '*') bombCount++;
        }

        // check row below
        if (rowIndex < board.length - 1) {
          const belowRow = board[rowIndex + 1];
          if (belowRow[index] === '*') bombCount++;
          if (index > 0 && belowRow[index - 1] === '*') bombCount++;
          if (index < rowLength - 1 && belowRow[index + 1] === '*') bombCount++;
        }

        bombCount === 0 ? (acc += ' ') : (acc += bombCount);
      } else {
        acc += cell;
      }
      return acc;
    }, '');
  });
}

//
//
//
//
//
//
//

let sampleRows = ['***', '* *', '***'];
sampleRows = ['***', '***', '** '];
sampleRows = [];
sampleRows = ['***', '***', '***'];
sampleRows = ['*', '', '', '', '*'];

console.log(annotate(sampleRows));
