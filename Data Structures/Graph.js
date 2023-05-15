// basic graph class
class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex){
        // to check if there's already an adjanceny list for vertex
        
        this.adjacencyList[vertex] = []
    }
}