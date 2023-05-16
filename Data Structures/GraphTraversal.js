
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
    // looks through the adjancency list
    const adjacencyList = this.adjacencyList;
(function dfs(vertex){
    // checks if there's even a vertex
    // if there's no vertex return null
            if(!vertex) return null;
            // if the vertex 
            visited[vertex] = true;
            result.push(vertex);
            // goes through the array or loops through the array
            // of the adjancency list of selected vertex
            adjacencyList[vertex].forEach(neighbor => {
                // checks if the neighbor of the vertex has been visited
                // if visited it ignores it and goes to the array vertex
                // that has not been visited
                if(!visited[neighbor]){
                    // if it's not visited it calls the function
                    // recursively until every node is visited
                    return dfs(neighbor)
                }
            });
        })(start);
        // returns the result
        return result;
}