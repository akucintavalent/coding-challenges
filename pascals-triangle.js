// link to the challenge: https://leetcode.com/problems/pascals-triangle

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 1) return [[1]]
    let res = [[1], [1,1]];
    for (let i = 2; i < numRows; i++) {
        res.push([1]);
        for (let j = 0; j < i - 1; j++) {
            res[i].push(res[i - 1][j] + res[i - 1][j + 1])
        }
        res[i].push(1);
    }
    return res;
};
