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

    // the issue is here
    function tracker(node, listOfLocations){
        // It's here
        let added = false
        if(listOfLocations.length === 0 || listOfLocations === undefined){
            for(let vertex of node.vertices) listOfLocations.push([node.location, vertex])
            return listOfLocations
        }
        for(let i = 0; i < listOfLocations.length;i++){
            if(node.location[0] === listOfLocations[i][listOfLocations[i].length - 1][0]&&
               node.location[1] === listOfLocations[i][listOfLocations[i].length - 1][1]){
            //  console.log(listOfLocations[i][])

               listOfLocations[i].push(node.location) 
                // added = true
            }
        }

        if(added === false){
            listOfLocations.push([node.location])
        }
        return listOfLocations
    
    }

    // Focus here
    function knightMoves(startLocation= [0,0], goalLocation){
        // Worked yet it might not give me the shortest path
         if(!positionExists(goalLocation)){throw Error("doesn't exist")}
         if(!positionExists(startLocation)){return}


        let queue = [startLocation]
        let visited = []
        let saveRoute = []
        while(queue.length !== 0){
            let current = queue[0]
        
            if(visited.includes(queue[0])){
                queue.shift()
            }

                for(let vertex of board[current[0]][current[1]].vertices){
                    queue.push(vertex)
                }
  
            saveRoute = tracker(board[current[0]][current[1]], saveRoute)
            
            if(current[0] === goalLocation[0] &&
               current[1] === goalLocation[1]){
                // board[current[0]][current[1]].value = 2
            break
            }

            visited.push(current)
            queue.shift()            
        }

        // saveRoute.forEach(route => {
        //     if(route[-1] === goalLocation){
        //         console.log(route)
        //     }
        // })

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

    knightMoves([0,0],[4,2])

}

kinghtTravails()