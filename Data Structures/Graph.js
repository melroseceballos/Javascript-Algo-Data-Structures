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
    // removing an edge
        // create removeEdge method that accepts specific vertex
        // you want to remove
       removeEdge(vertex1,vertex2){
        // reassining vertex 1 without the value of vertex2
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        // reassigning vertex2 without the value of vertex 1
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
  // removing a vertex
  removeVertex(vertex){
    while(this.adjacencyList[vertex].length){
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex]
}
}