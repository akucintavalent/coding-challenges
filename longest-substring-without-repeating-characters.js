// link to the challange: https://leetcode.com/problems/longest-substring-without-repeating-characters

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return 0;
    let length = 1;
    for (let len = 2; len <= s.length; len ++) {
        let found = false;
        for (let i = 0; i <= s.length - len; i++) {
            if (!containsRepeats(s.slice(i, i + len))) {
                length = len;
                found = true;
                break;
            }
        }
        if (!found) break;
    }
    return length;
};

var containsRepeats = function(s) {
    return new Set(s.split('')).size < s.length;
}
