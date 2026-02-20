class node{
    constructor(values){
        this.values = values
        this.vertices = []
    }
}



function kinghtTravails(){
    let board = []
    for(let i = 0; i < 8; i++){
        let ls = []
        for (let j = 0; j < 8;j++){
                ls.push(0)
         }
         board.push(ls)
    }

    function positionExists(values){
        if (values[0] <= 7 && values[1] <= 7){
            return true
        }
        return false
    }
    // I should find a better idea  
    function movementOptionsKinght(knight){
        // if(positionExists(knight.values)){
        //     if(positionExists(knight.values[0],knight.values[1]))
        //     if(positionExists())
        //     if(positionExists())
        //     if(positionExists())
            
        // }
        return 
    }

    console.table(board)
    
    
}

kinghtTravails()