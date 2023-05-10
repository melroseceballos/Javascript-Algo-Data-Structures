class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }

    //inserting the node
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    // this is where the node gets compared
    // and then bubbles up if the value suggests
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

