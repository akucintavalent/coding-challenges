// link to the challenge: https://leetcode.com/problems/valid-parentheses/submissions/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    var isOpening = function(ch) {
        return ['(', '{', '['].includes(ch);
    };
    var getClosing = function(ch) {
        switch (ch){
            case '(': return ')';
            case '{': return '}';
            case '[': return ']';
            default: return ch;
        }
            
    }
    for(let i = 0; i < s.length; i++) {
        if (isOpening(s.charAt(i))) {
            stack.push(s.charAt(i));
        } else {
            if (getClosing(stack.pop()) !== s.charAt(i))
                return false;
        }
    }
    if (stack.length > 0) return false;
    return true;
};
