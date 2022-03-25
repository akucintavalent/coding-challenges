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
var isPalindrome = function(head) {
    var reverse = (head) => {
        if (head == null) {
            var node = new ListNode();
            node.end = node;
            return [0, node]
        }
        [i, node] = reverse(head.next);
        node.end.next = new ListNode();
        node.end = node.end.next;
        node.end.val = head.val;
        return [i+1, node];
    };
    [length, node] = reverse(head);
    var isIdentical = (head1, head2) => {
        if ((head1 === null && head2 !== null) 
                || (head1 !== null && head2 ===null)) {
            return false;
        }
        if (head1 === null && head2 === null) return true;
        if (head1.val === head2.val) return isIdentical(head1.next, head2.next);
    }
    return isIdentical(node.next, head);
};
