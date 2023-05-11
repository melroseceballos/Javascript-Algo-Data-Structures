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
    // create a variable for slow pointer
    let slow = head
    // creating a variable for fast points
    let fast = head
    // make sure that there is a value for the fast and fast.next
    while(fast && fast.next !== null){
        // incrementing slow pointer by 1
        slow = slow.next
        // incrementing fast point by 2
        fast = fast.next.next
        // if they catch up to each other that means that there is a 
        // cycle going on
        if(slow === fast){
            return true
        }
    }
    // if they don't catch up to each other
    // that means there's no cycle 
    return false
};

console.log(head ([3,2,0,-4]))