// link to the challange: https://leetcode.com/problems/add-binary

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if (a === '0' && b === '0') return '0';
    let len = Math.max(a.length, b.length);
    let res = '';
    let move = 0;
    let get_char = (str, i) => {
        return str.charAt(str.length - 1 - i) || '0';
    }
    
    for(let i = 0; i < len; i++) {
        switch (+get_char(a, i) + +get_char(b, i) + move) {
            case 0:
                res = '0' + res;
                move = 0;
                break;
            case 1:
                res = '1' + res;
                move = 0;
                break;
            case 2:
                res = '0' + res;
                move = 1;
                break;
            case 3:
                res = '1' + res;
                move = 1;
                break;
        }
    }
    if (move === 1) {
        res = '1' + res;
    }
    return res;
};
