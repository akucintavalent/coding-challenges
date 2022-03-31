/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let save = x;
    if (x < 0) return false;
    let reverse = x % 10;
    while (x) {
        x = Math.floor(x / 10);
        reverse *= 10;
        reverse += x % 10;
    }
    reverse /= 10;
    if (reverse == save) return true;
    return false;
};
