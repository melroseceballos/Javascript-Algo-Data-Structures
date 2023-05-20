/**
* one of the most famous and widely used algo
* use to find shortest distance between nodes
*/


// Weighted Graph Ex:
class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    // this is where the weighted portion goes
    addEdge(vertex1,vertex2, weight){
        this.adjacencyList[vertex1].push({node:vertex2,weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }
}

// this is what sorts to find the lowest
class PriorityQueue {
  constructor(){
    this.values = [];
  }
  // everytine a new value is added
  enqueue(val, priority) {
    this.values.push({val, priority});
    // it sorts through it
    this.sort();
  };
  dequeue() {
    return this.values.shift();
  };
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}

/** PSEUDOCODE for Dijkstra's Algo
* create a function that takes the starting and ending vertex
* create a variable to store visited vertex
* begin to store the visited vertex in visited variable
* create another variable that temporarily hold the sum of edges
* create a loop that visits neighbor vertices
* make sure to take the vertex with least amount of weight/distance
* add sum of distance and update the temp variable with lower number
*
*/


