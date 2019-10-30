// https://leetcode-cn.com/problems/unique-paths-ii/

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = function(obstacleGrid) {
  const getXY = (obstacleGrid) => {
    return {
      x: obstacleGrid.length,
      y: typeof obstacleGrid[0] !== 'undefined' ? obstacleGrid[0].length : 0,
    }
  }
  const { x, y } = getXY(obstacleGrid)
  if (x === 2 && y === 2) {
    if ((obstacleGrid[x - 2][y - 1] + obstacleGrid[x - 1][y - 2]) === 2 ||
  (obstacleGrid[x - 1][y - 1] === 1) ||
  (obstacleGrid[x - 2][y - 2] === 1)
    ) {
      return 0
    }
    if ((obstacleGrid[x - 2][y - 1] + obstacleGrid[x - 1][y - 2]) === 1) {
      return 1
    }
    if (obstacleGrid[x - 2][y - 1] !== 1 && obstacleGrid[x - 1][y - 2] !== 1) {
      return 2
    }
  }
  if (x === 1 || y === 1) {
    if (obstacleGrid[x - 1].includes(1)) {
      return 0
    }
    const columnHas1 = !obstacleGrid.every((arr) => {
      if (arr[arr.length - 1] === 1) {
        return false
      }
      return true
    })
    if (columnHas1) {
      return 0
    }

    return 1
  }
  const arrLine = obstacleGrid.slice(1)
  const arrColumn = obstacleGrid.map((arr) => arr.slice(1))
  return uniquePathsWithObstacles(arrLine) + uniquePathsWithObstacles(arrColumn)
}


const grid = [
  [0, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0],
]

console.log(uniquePathsWithObstacles(grid))

