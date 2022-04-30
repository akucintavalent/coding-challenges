// link to the challenge: https://leetcode.com/problems/remove-duplicates-from-sorted-list

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let help = head;
    while (help) {
        if (help.next && help.next.val === help.val) {
            help.next = help.next.next;
        } else {
            help = help.next
        }
    }
    return head;
};
