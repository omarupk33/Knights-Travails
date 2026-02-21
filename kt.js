class node{
    constructor(value){
        this.value = value
        this.vertices = []
    }
}



function kinghtTravails(){
    let board = []
    for(let i = 0; i < 8; i++){
        let ls = []
        for (let j = 0; j < 8;j++){
                ls.push(new node(0))
         }
         board.push(ls)
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
        if (values[0] <= 7 && values[1] <= 7){
            return true
        }
        return false
    }
    // I should find a better idea  
    function movementOptionsKinght(movement){
        if(positionExists([movement.values[0],movement.values[1]]))

            
        return 
    }
    board[1][0].value =1
    printBoard()
    
    
}

kinghtTravails()