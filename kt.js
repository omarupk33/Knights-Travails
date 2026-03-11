class node{
    constructor(value){
        this.value = value
        this.location = null
        this.vertices = []
        }
    }


function kinghtTravails(){
    let board = []
    for(let i = 0; i < 8; i++){
        let ls = []
        for (let j = 0; j < 8;j++){
            let position =new node(0)
            position.location = [j,i]
            savePossibleMovement(position)
            ls.push(position)
         }
         board.push(ls)
    }

    function knightMoves(startLocation= [0,0], goalLocation){
         if(!positionExists(goalLocation)){throw Error("doesn't exist")}
         if(!positionExists(startLocation)){return}

        let queue = [startLocation]
        // Change according to this
        let visited = new Set()

        let predecessor = []
        while(queue.length !== 0){
            let current = queue[0]

            for(let vertex of board[current[0]][current[1]].vertices){
                if (!visited.has(vertex)) {
                    visited.add(vertex)
                    const newPath = [...path, neighbor]
                    queue.push(newPath);
                }
                
            }
            
            if(current[0] === goalLocation[0] &&
               current[1] === goalLocation[1]){
                break
            }


            visited.push(current)
            queue.shift()            
        }

        saveRoute.forEach(route => {
               console.log(route)
        })

        printBoard()
    }

    function printBoard(){
        let printBoard = []
        for(list of board){
            let row = []
            for (theNode of list){
                row.push(theNode.value)
            }
            printBoard.push(row)
        }

        console.table(printBoard)
    }
    function positionExists(values){
        if (0 <= values[0] && values[0] <= 7 &&
            0 <= values[1] && values[1] <= 7){
            return true
        }
        return false
    }

 
    function savePossibleMovement(node){
        let potentialMoves =[[node.location[0]+2,node.location[1]+1],
                             [node.location[0]+1,node.location[1]+2],
                             [node.location[0]+2,node.location[1]-1],
                             [node.location[0]+1,node.location[1]-2],
                             [node.location[0]-2,node.location[1]+1],
                             [node.location[0]-1,node.location[1]+2],
                             [node.location[0]-2,node.location[1]-1],
                             [node.location[0]-1,node.location[1]-2],]

        for(let potentialMove of potentialMoves){
            if(positionExists(potentialMove)){
                node.vertices.push(potentialMove)
            }
        }
    }

    knightMoves([0,0],[2,2])

}

kinghtTravails()



// /**
//  * Finds the shortest path between a start and end node in an unweighted graph,
//  * handling multiple connected components.
//  * @param {Object} graph - The graph represented as an adjacency list.
//  * @param {string} start - The starting node.
//  * @param {string} end - The destination node.
//  * @returns {Array|null} The shortest path as an array of nodes, or null if no path exists.
//  */
// function shortestPathInGraph(graph, start, end) {
//     // A global set to keep track of all visited nodes across all components
//     const globalVisited = new Set(); 

//     // Helper function to perform a single BFS traversal within a component


    // Try to copy the functionality of this function and add it to the code
    function bfs(startNode, endNode) {
        // Queue stores paths, not just individual nodes, to reconstruct the final path
        const queue = [[startNode]];
        const localVisited = new Set([startNode]); // Visited within current component's BFS

        while (queue.length > 0) {
            const path = queue.shift();
            const currentNode = path[path.length - 1];

            if (currentNode === endNode) {
                return path; // Path found
            }

            // Mark node as visited globally
            globalVisited.add(currentNode); 

            // Explore neighbors
            const neighbors = graph[currentNode] || [];
            for (const neighbor of neighbors) {
                if (!localVisited.has(neighbor)) {
                    localVisited.add(neighbor);
                    const newPath = [...path, neighbor]; // Create a new path by appending the neighbor
                    queue.push(newPath);
                }
            }
        }
        return null; // Path not found in this component
    }