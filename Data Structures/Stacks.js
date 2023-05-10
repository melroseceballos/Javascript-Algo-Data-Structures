// LIFO IN LINKEDLIST IS PUSH/POP when using stacks

// push
/***** DO LINKEDLIST SKELETON HERE
 * WHICH INCLUDES CREATING A NODE CLASS
 * AND A SINGLYLINKEDLIST CLASS
 */
push(val)   {
    let newNode = new Node(val)
    if(this.length === 0){
        this.first = newNode
        this.last = newNode
    }else(this.length === 1){
        let firstProp = this.first
         this.first = newNode
        this.first.next = firstProp
    }
    return ++this.size

}