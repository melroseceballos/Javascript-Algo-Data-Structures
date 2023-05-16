
/********* DFS 
visits an vertex
after a vertex has been visited
 it is crossed as being visited and will no longer need to visit the same node the loop continues to go through the graph 
until all the vertices has been visited
*/

// RECURSIVE DFS TRAVERSAL
(function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor)
                }
            });
        })(start);

        return result;
    