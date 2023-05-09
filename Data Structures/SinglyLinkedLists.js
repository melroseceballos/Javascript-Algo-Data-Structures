/**** CREATING NODES:
 * contains data/value
 * points to the next node
 */

class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

let first = new Node ('Hi')
first.next = new Node ('How are you?')
first.next.next = new Node ('How do you like the weather?')
first.next.next.next = new Node ('It\'s pretty hot here!')

console.log(first)