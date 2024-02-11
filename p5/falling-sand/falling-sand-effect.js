function make2DArray(cols, rows) {
  let arr = new Array(cols);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);

    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = 0;
    }
  }

  return arr;
}

let grid;
let w = 10;
let cols, rows;
let hueValue = 200;

function withinCols(i) {
  return i >= 0 && i <= cols - 1;
}

function withinRows(j) {
 return j >= 0 && j <= rows - 1;
}

function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 255, 255);
  cols = width / w;
  rows = height / w;
  grid = make2DArray(cols, rows);
}

function mouseDragged() {
  const mouseCol = floor(mouseX / w);
  const mouseRow = floor(mouseY / w);

  const matrix = 2;
  const extent = floor(matrix / 2);

  const updateCell = (col, row) => {
    if (random(1) < 0.75 && withinCols(col) && withinRows(row)) {
      grid[col][row] = hueValue;
    }
  };

  for (let i = -extent; i <= extent; i++) {
    for (let j = -extent; j <= extent; j++) {
      const col = mouseCol + i;
      const row = mouseRow + j;
      updateCell(col, row);
    }
  }

  hueValue += 0.8;

  if (hueValue >= 360) {
    hueValue = 1;
  }
}

function draw() {
  background(0);
  drawGrid();
  updateGrid();
}

function drawGrid() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      noStroke();
      if (grid[i][j] > 0) {
        fill(grid[i][j], 255, 255);
        let x = i * w;
        let y = j * w;
        square(x, y, w);
      }
    }
  }
}

function updateGrid() {
  let nextGrid = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let state = grid[i][j];

      if (state > 0) {
        let below = grid[i][j + 1];

        let dir = 1;
        if (random(1) < 0.5) {
          dir *= -1;
        }

        let belowA = -1;
        let belowB = -1;

        if (withinCols(i + dir)) {
          belowA = grid[i + dir][j + 1];
        }

        if (withinCols(i - dir)) {
          belowB = grid[i - dir][j + 1];
        }

        if (below === 0) {
          nextGrid[i][j + 1] = state;
        } else if (belowA === 0) {
          nextGrid[i + dir][j + 1] = state;
        } else if (belowB === 0) {
          nextGrid[i - dir][j + 1] = state;
        } else {
          nextGrid[i][j] = state;
        }
      }
    }
  }
  grid = nextGrid;
}
