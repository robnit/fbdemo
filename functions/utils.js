function toggle(x, y, grid) {
  const row = Number(x);
  const cell = Number(y);
  if (row > grid.length || (grid[row] && cell > grid[row].length)) return grid;

  function flip(x, y) {
    grid[x][y] = !grid[x][y];
  }

  grid[row][cell] = !grid[row][cell];
  if (row > 0) flip(row - 1, cell);
  if (cell > 0) flip(row, cell - 1);
  if (row < grid.length - 1) {
    flip(row + 1, cell);
  }
  if (cell < grid[row].length - 1) {
    flip(row, cell + 1);
  }

  return grid;
}

module.exports = toggle;
