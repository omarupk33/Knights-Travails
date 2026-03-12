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
        let queue = [[startLocation]]
        // Change according to this
        let visited = new Set()

        while(queue.length !== 0){
            let path = queue.shift()
            let current = path[path.length - 1]

            for(let vertex of board[current[0]][current[1]].vertices){
                if (!visited.has(vertex)) {
                    visited.add(vertex)
                    const newPath = [...path, vertex]
                    queue.push(newPath);
                }   
            }
            if(current[0] === goalLocation[0] &&
               current[1] === goalLocation[1]){
               console.log(`You made it in ${path.length - 1} moves!`)
               console.log('Here is your path:')
               path.map((location)=>{
                console.log(location)
               })

            }      
        }
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

    return {knightMoves}

}

kinghtTravails().knightMoves([0,0],[7,7])
