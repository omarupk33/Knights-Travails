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
        let visited = {[queue[0]]:true}

        let predecessor = []
        while(queue.length !== 0){
            let current = queue[0]

            for(let vertex of board[current[0]][current[1]].vertices){
                if(visited.includes(vertex)){
                    continue
                }
                else{queue.push(vertex)}
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