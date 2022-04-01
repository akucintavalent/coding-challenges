// link to the challenge: https://leetcode.com/problems/add-two-numbers/submissions/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2, addOne = false) {
    if (!l1) {
        if (addOne) {
            return addTwoNumbers(new ListNode(1), l2);
        } else {
            return l2;
        }
    }
    if (!l2) {
        if (addOne) {
            return addTwoNumbers(new ListNode(1), l1);
        } else {
            return l1;
        }
    }
    let val = l1.val + l2.val + addOne;
    return new ListNode(val % 10, addTwoNumbers(l1.next, l2.next, Math.floor(val / 10)))
};
