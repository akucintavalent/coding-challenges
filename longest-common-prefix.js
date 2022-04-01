// link to the solution: https://leetcode.com/problems/longest-common-prefix/submissions/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let res = "";
    for (let i = 0; i < strs[0].length; i ++) {
        let char = strs[0].charAt(i);
        for (let str of strs) {
            if (str.charAt(i) !== char) return str.slice(0, i);
        }
        res += char;
    }
    return res;
};
