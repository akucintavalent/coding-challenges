// link to the challange: https://leetcode.com/problems/zigzag-conversion

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s;
    let res = '';
    for (let row = 0; row < numRows; row++) {
        let i = row;
        while (s.charAt(i) != '') {
            res += s.charAt(i);
            i = getNext(i, numRows);
        }
    }
    return res;
};

var getNumLettersInZig = function(numRows) {
    return 2 * numRows - 2;
};

var isOnVerticalLine = function(i, numRows) {
    return i % getNumLettersInZig(numRows) < numRows;
};

var isAngle = function(i, numRows) {
    return i % getNumLettersInZig(numRows) == 0 || i % getNumLettersInZig(numRows) == numRows - 1;
};

var getFirstAngleIndex = function(i, numRows) {
    return Math.floor(i / getNumLettersInZig(numRows)) * getNumLettersInZig(numRows);
};

var getSecondAngleIndex = function(i ,numRows) {
    return getFirstAngleIndex(i, numRows) + numRows - 1;
};

var getNext = function(i, numRows) {
    if (isAngle(i, numRows)) {
        return i + getNumLettersInZig(numRows);
    }
    if (isOnVerticalLine(i, numRows)) {
        return 2 * getSecondAngleIndex(i, numRows) - i;
    } else {
        return 2 * getFirstAngleIndex(i + getNumLettersInZig(numRows), numRows) - i;
    }
}
