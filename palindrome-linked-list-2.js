/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
let isPalindrome = function(head) {
    if (!head) return true;
    let getEndOfFirstHalf = (head) => {
        let fast = head;
        let slow = head;
        
        while (fast.next && fast.next.next) {
            fast = fast.next.next
            slow = slow.next;
        }
        return slow;
    }
    let reverseList = (head) => {
        let prev = null;
        let curr = head;
        while (curr) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
    let halfHead = getEndOfFirstHalf(head);
    let revHalfHead = reverseList(halfHead);
    while(head && revHalfHead) {
        if (head.val != revHalfHead.val) {
            return false;
        }
        head = head.next;
        revHalfHead = revHalfHead.next;
    }
    return true;
};
