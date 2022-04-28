// link to the challange: https://leetcode.com/problems/implement-strstr/submissions/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === '') {
        return 0;
    }
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        let j;
        for (j = 0; j < needle.length; j++) {
            if (haystack.charAt(i + j) !== needle.charAt(j)) {
                break;
            }
        }
        if (j === needle.length) {
            return i;
        }
    }
    return -1;
};
