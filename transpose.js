const transpose = function (matrix) {
  const newMatrix = [];
  const rows = matrix[0].length;
  const columns = matrix.length;
  let count = 1;
  while (count <= rows) {
    newMatrix.push([]);
    count++;
  }
  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
      newMatrix[rowIndex].push(matrix[columnIndex][rowIndex]);
    }
  }
  return newMatrix;
};

module.exports = transpose;
