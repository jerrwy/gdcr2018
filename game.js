const ALIVE = 1
const DEAD = 0
const LIVE_KEEP_STATUS_COUNT = [2, 3]
const DEAD_TURN_LIVE_COUNT = 3

module.exports = {
  init(num) {
    return this.getDDArray(num).map((row) => {
      return row.map(() => {
        return Math.round(Math.random());
      })
    })
  },

  getDDArray(num) {
    return Array.from({length: num}).map(() => Array.from({length: num}))
  },

  run() {
    let cells = this.init(20)
    while (1) {
      this.sleep(1000)
      cells = this.refresh(cells)
      this.draw(cells)
    }
  },

  sleep(delay) {
    var start = (new Date()).getTime();
    while ((new Date()).getTime() - start < delay) {
      continue;
    }
  },

  draw: (cells) => {
    console.log('################################')
    console.log(cells)
    console.log('################################')
  },

  refresh(cells) {
    return cells.map((row,x) => {
      return row.map((_,y) => {
        return this.refreshCell(x, y, cells);
      })
    })
  },

  refreshCell(x, y, cells) {
    return this.calCellStatus(cells[x][y], this.calAroundAliveCellCount(x, y, cells))
  },

  calCellStatus(status, aroundAliveCellsCount) {
    return (status && this.isLiveCellKeepStatus()) ||
    (!status && this.isDeadCellTurnLive(aroundAliveCellsCount)) ? ALIVE : DEAD
  },

  isDeadCellTurnLive(count) {
    return count === DEAD_TURN_LIVE_COUNT
  },

  isLiveCellKeepStatus(count) {
    return LIVE_KEEP_STATUS_COUNT.includes(count)
  },

  getAroundCells(x, y) {
    return [
      [x - 1, y - 1],
      [x - 1, y],
      [x - 1, y + 1],
      [x, y - 1],
      [x, y + 1],
      [x + 1, y - 1],
      [x + 1, y],
      [x + 1, y + 1]
    ]
  },

  calAroundAliveCellCount(x, y, cells) {
    return this.getAroundCells(x, y).reduce((l, r) => l + this.isAlive(r[0], r[1], cells), 0)
  },

  isAlive: (x, y, cells) => {
    return (x < 0 ||
      x >= cells.length ||
      y < 0 ||
      y >= cells.length) ? 0 : cells[x][y];
  }
}
