// link to the challange: https://leetcode.com/problems/linked-list-cycle

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let s = new Set();
    while (head) {
        if (s.has(head)) {
            return true;
        }
        s.add(head);
        head = head.next;
    }
    return false;
};
