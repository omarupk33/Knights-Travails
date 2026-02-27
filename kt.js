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

    // Something is wrong here
    function bestRoute(bunchOfLocations, goalLocation){
        if(!Array.isArray(bunchOfLocations)){return }
        if(!positionExists(goalLocation)){return }

        let nearestX 
        let nearestY
        let listOfXs = []
        let listOfYs = []

        function nearest(goal, arr){
            return arr.reduce((prev, curr)=>{
            return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
            })
        }

        for(let i = 0; i < bunchOfLocations.length; i++){
            
            listOfXs.push(bunchOfLocations[i][0])
        }
        if(!listOfXs.length!== 0) nearestX = nearest(goalLocation[0],listOfXs)


        for(let pairs of bunchOfLocations){
            if (pairs.at(0) === nearestX){
                listOfYs.push(pairs.at(1))
            }
        }
        if(listOfYs.length !== 0) nearestY = nearest(goalLocation[1], listOfYs)

     
        return [nearestX, nearestY]
    }
    //  Something is wrong
    function traverseTo(startLocation= [0,0], goalLocation){
        // Worked yet it might not give me the shortest path
         if(!positionExists(goalLocation)){throw Error("doesn't exist")}
         if(!positionExists(startLocation)){return}

         let queue = []
        queue.push(startLocation)
        let bestRoutePair

        while(queue){
            let current = queue[0]
            bestRoutePair = bestRoute(board[current[0]][current[1]].vertices, goalLocation)
            if(bestRoutePair === goalLocation){
                break
            }

            queue.push(bestRoutePair)
            queue.shift()

        console.log(bestRoutePair)
        console.log(goalLocation)

        }
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

    // console.log(bestRoute([2,3], board[0][0].vertices))
    // printBoard()
    traverseTo([0,0],[4,3])

}

kinghtTravails()