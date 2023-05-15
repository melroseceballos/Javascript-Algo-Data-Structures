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
    addEdge(v1, v2){
          this.adjacencyList[v1].push(v2)
          this.adjacencyList[v2].push(v1)
    }
  
}