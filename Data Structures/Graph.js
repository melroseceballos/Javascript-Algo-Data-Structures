// basic graph class
class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    // creating a vertex method
    addVertex(vertex){
        // to check if there's already an adjanceny list for vertex
        if(!this.adjacencyList[vertex])  this.adjacencyList[vertex] = []
       
    }
}