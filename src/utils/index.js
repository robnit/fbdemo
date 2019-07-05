export function toggle(row, cell, arr) {
  if (row > arr.length || (arr[row] && cell > arr[row].length)) return arr;

  const grid = [...arr];
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

export function generateRow(size) {
  const row = Array(size).fill(false);
  let output = Array(size).fill([]);
  output = output.map(() => row.slice());

  for (let i = 0; i < 200; i += 1) {
    const randoX = Math.floor(Math.random() * size);
    const randoY = Math.floor(Math.random() * size);
    output = toggle(randoX, randoY, output);
  }

  return output;
}
