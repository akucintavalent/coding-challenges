// link to the challange: https://leetcode.com/problems/longest-palindromic-substring

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    for (let len = s.length; len >= 0; len --) {
        for (let l = 0; l <= s.length - len; l ++) {
            r = l + len - 1;
            if (isPalindrome(s, l, r)) {
                return s.slice(l, r + 1);
            }
        }
    }
};

var isPalindrome = function(s, l, r) {
    while (l < r) {
        if (s.charAt(l) !== s.charAt(r)) return false;
        l ++;
        r --;
    }
    return true;
}
