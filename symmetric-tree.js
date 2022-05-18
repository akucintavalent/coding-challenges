// link to the challenge: https://leetcode.com/problems/symmetric-tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    let mirrors = function(a, b) {
        if (a === null && b === null) {
            return true;
        }
        if (a === null || b === null) {
            return false;
        }
        if (a.val !== b.val) {
            return false;
        }
        return mirrors(a.left, b.right) && mirrors(a.right, b.left);
    }
    if (root === null) return true;
    return mirrors(root.left, root.right);
};
