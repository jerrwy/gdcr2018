const expect = require('expect');
const game = require('./game');

describe('game', () => {
  describe('isAlive', () => {
    const cells = [[1,1,1,],[1,1,1],[1,1,1]]
    let x = 0, y = 0;

    it('should return xxx when given xxx ', async () => {
      x = -1
      y = 0
      expect(game.isAlive(x,y,cells)).toEqual(0)
    })

    it('should 0', async () => {
      x = 5
      y = 0
      expect(game.isAlive(x,y,cells)).toEqual(0)
    })


    it('should 0', async () => {
      x = 1
      y = -1
      expect(game.isAlive(x,y,cells)).toEqual(0)
    })


    it('should 0 when y&x ', async () => {
      x = -1
      y = -1
      expect(game.isAlive(x,y,cells)).toEqual(0)
    })


    it('should 0', async () => {
      x = 1
      y = 2
      expect(game.isAlive(x,y,cells)).toEqual(1)
    })
  })

  describe('calAroundAliveCellCount', () => {
    it('should ok', async () => {
      const cells = [[1,1,1,],[1,1,0],[0,0,0]]
      expect(game.calAroundAliveCellCount(0,1,cells)).toEqual(4)
    })
  })

  describe('refreshCell', () => {
    it('should ok', async () => {
      const cells = [[1,1,1,],[1,1,0],[0,0,0]]
      expect(game.refreshCell(0,1,cells)).toEqual(0)
    })
  })

  describe('refresh', () => {
    it('should ok', async () => {

    })
  })
})
