// link to the challange :https://leetcode.com/problems/reverse-integer

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x === 0) return 0;
    let xPos = Math.abs(x);
    let sign = x / xPos;
    let res = 0;
    while (xPos > 0) {
        res += xPos % 10;
        xPos = Math.floor(xPos / 10);
        if (xPos) res *= 10;
    }
    return outOfRange(res * sign) ? 0 : res * sign;
};

var outOfRange = (x) => x < - (2**31) || x > 2**31 - 1;
