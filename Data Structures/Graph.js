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
    // to create edges/connections between vertices/vertex
    addEdge(v1, v2){
        // called the vertex list first and the push info to other vertex
          this.adjacencyList[v1].push(v2)
          // vise versa
          this.adjacencyList[v2].push(v1)
    }
  
}