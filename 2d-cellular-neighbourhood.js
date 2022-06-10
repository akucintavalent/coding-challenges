// link to the challange: https://www.codewars.com/kata/5b2e5a02a454c82fb9000048/train/javascript

function getNeighbourhood(type, matrix, coordinates) {
  let [x, y] = coordinates;
  if (matrix[x] === undefined || matrix[x][y] === undefined) return [];
  let res = new Set();
  switch (type) {
      case "moore":
        res.add(matrix[x-1] ? matrix[x-1][y-1] : undefined)
        res.add(matrix[x-1] ? matrix[x-1][y] : undefined)
        res.add(matrix[x-1] ? matrix[x-1][y+1] : undefined)
        res.add(matrix[x] ? matrix[x][y-1] : undefined)
        res.add(matrix[x] ? matrix[x][y+1] : undefined)
        res.add(matrix[x+1] ? matrix[x+1][y-1] : undefined)
        res.add(matrix[x+1] ? matrix[x+1][y] : undefined)
        res.add(matrix[x+1] ? matrix[x+1][y+1] : undefined)
        res.delete(undefined)
        return Array.from(res)
        break;
      case "von_neumann":
        res.add(matrix[x-1] ? matrix[x-1][y] : undefined)
        res.add(matrix[x] ? matrix[x][y-1] : undefined)
        res.add(matrix[x] ? matrix[x][y+1] : undefined)
        res.add(matrix[x+1] ? matrix[x+1][y] : undefined)
        res.delete(undefined)
        return Array.from(res)
        break;
      default:
        return [];
  }
}
