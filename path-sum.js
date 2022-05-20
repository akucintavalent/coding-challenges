// link to the challange: https://leetcode.com/problems/path-sum

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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (isLeaf(root)) return root.val === targetSum;
    if (root === null) return false;
    if (root.left === null && isLeaf(root.right)) return root.right.val === targetSum - root.val;
    if (root.right === null && isLeaf(root.left)) return root.left.val === targetSum - root.val;
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};
    
var isLeaf = function(vertex) {
    return vertex && vertex.left === vertex.right && vertex.left === null;
}
