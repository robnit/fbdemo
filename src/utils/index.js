export function toggle(row, cell, grid) {
  if (row > grid.length || (grid[row] && cell > grid[row].length)) return grid;

  const newGrid = [...grid];
  function flip(x, y) {
    newGrid[x][y] = !newGrid[x][y];
  }

  newGrid[row][cell] = !newGrid[row][cell];
  if (row > 0) flip(row - 1, cell);
  if (cell > 0) flip(row, cell - 1);
  if (row < newGrid.length - 1) {
    flip(row + 1, cell);
  }
  if (cell < newGrid[row].length - 1) {
    flip(row, cell + 1);
  }

  return grid;
}

export function generateGrid(size) {
  const row = Array(size).fill(false);
  let output = Array(size).fill([]);
  output = output.map(() => row.slice());

  for (let i = 0; i < (size * 10); i += 1) {
    const randoX = Math.floor(Math.random() * size);
    const randoY = Math.floor(Math.random() * size);
    output = toggle(randoX, randoY, output);
  }

  return output;
}
