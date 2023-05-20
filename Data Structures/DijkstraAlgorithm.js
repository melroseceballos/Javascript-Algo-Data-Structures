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

/** PSEUDOCODE for Dijkstra's Algo
* create a function that takes the starting vertex
* create a variable to store visited vertex
* begin to store the visited vertex in visited variable
* create another variable that temporarily hold the sum of edges
* create a loop that visits neighbor vertices
* make sure to take the vertex with least amount of weight/distance
* add sum of distance and store in temp variable
*
*/
