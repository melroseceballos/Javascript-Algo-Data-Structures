
/********* DFS 
visits an vertex
after a vertex has been visited
 it is crossed as being visited and will no longer need to visit the same node the loop continues to go through the graph 
until all the vertices has been visited
*/

// RECURSIVE DFS TRAVERSAL
depthFirstRecursive(start) {
    // stores the result of the vertex here
    // that you are searching for
    const result = [];
    //stores all the visited vertices
    const visited = {};
    const adjacencyList = this.adjacencyList;
(function dfs(vertex){
    // checks if there's even a vertex
    // if there's no vertex return null
            if(!vertex) return null;
            // if the vertex 
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor)
                }
            });
        })(start);

        return result;
}