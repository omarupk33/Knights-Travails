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

    function bestRoute(goalLocation, bunchOfLocations){
        let nearestX 
        let nearestY
        let listOfXs = []
        let listOfYs = []

        function nearest(goal, arr){
            return arr.reduce((prev, curr) => {
            return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
            })
        }

        for(let i = 0; i < bunchOfLocations.length; i++){
            listOfXs.push(bunchOfLocations[i][0])
        }
        nearestX = nearest(goalLocation[0],listOfXs)
        console.log(nearestX)

        for(let pairs of bunchOfLocations){
            if (pairs.at(0) === nearestX){
                listOfYs.push(pairs.at(1))
            }
        }
        nearestY = nearest(goalLocation[1], listOfYs)

        return [nearestX, nearestY]
    }

    function traverseTo(goalLocation){
         if(!positionExists(goalLocation)){throw Error("doesn't exist")}
        //  insert vertices into best route then go to that vertex until goalLocation is found
         let queue = board.vertices
         while(queue){
          for (movementSet of queue.at(-1)){
            return null
          }  
         }
    }

    function printBoard(){
        let printBoard = []
        for(list of board){
            let row = []
            for (theNode of list){
                row.push(theNode.location)
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
                             [node.location[0]+1,node.location[1]-1],
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

    console.log(bestRoute([2,3], board[3][3].vertices))
    // printBoard()
    
    
}

kinghtTravails()