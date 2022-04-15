// link to the problem: https://leetcode.com/problems/length-of-last-word/submissions/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let k = s.length - 1;
    let len = 0;
    while (k >= 0 && s.charAt(k) === ' ') {
        k--;
    }
    while(k >= 0 && s.charAt(k) !== ' ') {
        len++;
        k--;
    }
    return len;
};
