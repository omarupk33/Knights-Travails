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
             board[queue[0][0]][queue[0][1]].value = 1
            console.log(current)

                queue.shift()
            }

                for(let vertex of board[current[0]][current[1]].vertices){
                    queue.push(vertex)
                }



            if(current[0] === goalLocation[0] && 
               current[1] === goalLocation[1]){
                board[current[0]][current[1]].value = 2
                break
            }


        visited.push(queue.shift())
        }

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