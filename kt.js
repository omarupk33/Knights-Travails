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
                ls.push(0)
         }
         board.push(ls)
    }

    console.table(board)
}

kinghtTravails()