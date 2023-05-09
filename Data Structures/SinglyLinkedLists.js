/**** CREATING NODES:
 * contains data/value
 * points to the next node
 */
// piece of data - val
//reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        // defining head, tail, and length
        // basics to a node
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")



/***** NODE PUSHING */
// this is the class to create a node
// and always you to push value
// instead of have to do first.next.next.next etc
push(val){
    var newNode = new Node(val);
    if(!this.head){
        this.head = newNode;
        this.tail = this.head;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }
    //increments this by one
    this.length++;
    // this returns the whole list
    return this;
}
