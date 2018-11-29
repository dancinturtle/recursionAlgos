// IS CHESS MOVE SAFE:
// pass intendedMove and Queen, return true if square is threatened, else false.

// [[0,0,0,0,0,0,0,0],
//  [0,0,0,0,0,0,0,0],
//  [0,0,0,0,0,0,0,0],
//  [0,0,0,0,0,0,0,i],
//  [0,0,0,0,0,0,0,0],
//  [0,q,0,0,0,0,0,0],
//  [0,0,0,0,0,0,0,0],
//  [0,0,0,0,0,0,0,0]]
// q = b3, intended = h5
// 1 = [1, 5]
// given where the queen is and where the intended spot is, check out the vertical directions and horizontal directions, can we get there in a straight line or diagonal line?

// console.log(arrayIsSafe([3,3], [[2,5], [2,8], [4,4]]))


function arrayIsSafe(intended, arr){
    for(var i=0; i<arr.length; i++){
        if(!isSafe(intended, arr[i])){
            return false;
        }
    }
    return true;
}

function isSafe(intended, queen, right, left, up, down){
    
    
    if(intended[0] == queen[0] && intended[1] == queen[1]){
        
        return false;
    }
    if(right === undefined){
        if(intended[0] == queen[0] || intended[1] == queen[1]){
        
           return false;;
        }
        if(intended[0] > queen[0]){
            right = true;
            left = false;
        }   
         if(intended[0] < queen[0]){
            left = true;
            right = false;
        }
        if(intended[1] > queen[1]){
            down = true;
            up = false;
        }
        if(intended[1] < queen[1]){
            down = false;
            up = true;
        }
    }
  
    if(up && right){
        if(queen[0] > intended[0] || queen[1] < intended[1]){
            return true;
        }
        queen = [queen[0]+1, queen[1]-1];
    }
    else if(up && left){
  
        if(queen[0] < intended[0] || queen[1] < intended[1]){
            return true;
        }
       queen = [queen[0]-1, queen[1]-1];
    }
    else if(down && right){
        if(queen[0] > intended[0] || queen[1] > intended[1]){
            return true;
        }
        queen = [queen[0]+1, queen[1]+1];
    }
    else if(down && left){
        if(queen[0] < intended[0] || queen[1] > intended[1]){
            return true;
        }
        queen = [queen[0]-1, queen[1]+1];
    }
    return isSafe(intended, queen, right, left, up, down);
}

// all safe chess squares: Returns all chessboard squares not threatened by a given queen

function safeSquares(queen, board, original, directions, currentDir, newqueen){
    if(board === undefined){
        currentDir = 4;
        original = queen.slice();
        directions = [1,2,3];
        board = [ [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0] ]
        board[queen[1]-1][queen[0]-1] = 1;
        for(var i=0; i<board.length; i++){
            if(board[i][queen[0]-1] != 1){
                board[i][queen[0]-1] = 2;
            }
        }
        for(var j=0; j<board[queen[1]-1].length; j++){
            if(board[queen[1]-1][j] != 1){
                board[queen[1]-1][j] = 2;
            }
        }
        queen = [queen[0]-1, queen[1]-1];
        // console.log(board);
    }
    if(newqueen){
        newqueen = false;
        board[queen[1]-1][queen[0]-1] = 1;
        for(var i=0; i<board.length; i++){
            if(board[i][queen[0]-1] != 1){
                board[i][queen[0]-1] = 2;
            }
        }
        for(var j=0; j<board[queen[1]-1].length; j++){
            if(board[queen[1]-1][j] != 1){
                board[queen[1]-1][j] = 2;
            }
        }
    }
    if(queen[0] >= 1 && queen[0] <= 8 && queen[1] >= 1 && queen[1] <= 8){
        if(board[queen[1]-1][queen[0]-1] != 1 ){
            board[queen[1]-1][queen[0]-1] = 2;
        }
        if(currentDir == 4) {
            queen = [queen[0]-1, queen[1]-1];
        }
        else if(currentDir == 3){
            queen = [queen[0]+1, queen[1]-1];
        }
        else if(currentDir == 2){
            queen = [queen[0]+1, queen[1]+1];
        }
        else {
            queen = [queen[0]-1, queen[1]+1];
        }
        return safeSquares(queen, board, original, directions, currentDir);
    }
    else if(directions.length > 0){
        currentDir = directions.pop();
        queen = original.slice();
        return safeSquares(queen, board, original, directions, currentDir);
    }
    else {
        return board;
    }

   
}

// console.log(safeSquares([3,5]));
function arraySafeSquares(queens){
    var board = safeSquares(queens[0]);
    for(var i=1; i<queens.length; i++){
        board = safeSquares(queens[i], board, queens[i], [1,2,3], 4, true);
    }
    return board;
}

// console.log(arraySafeSquares([[1,1], [4,3], [2,8]]));

//Eight queens: return all arrangements of eight queens on an 8x8 chessboard so no queen threatens any other.

function eightQueens(queen, board, number, startQueen, possibleBoards){
    // console.log("starting 8", number)
    if(queen === undefined){
        possibleBoards = [];
        queen = [1,1];
        board = safeSquares(queen);
        number = 1;
        startQueen = queen.slice();
    }
    else {
        console.log("182", queen);
        board = safeSquares(queen, board, queen, [1,2,3], 4, true);
    }
    
    // console.log("185", number)    
    if (number < 2){
        // replace the loops with a hunt for the next 0
        var nextqueen = queen.slice();
        while(board[nextqueen[1]-1][nextqueen[0]-1] != 0 && nextqueen[0]<9 && nextqueen[1]<9){
            if(nextqueen[0] < 8){
                nextqueen[0] = nextqueen[0]+1; 
            }
            else {
                nextqueen[0] = 1;
                nextqueen[1] = nextqueen[1] + 1;
            }
        }
        if(nextqueen[0]>=9 || nextqueen[0] >=9 ){
            console.log("could not find a next queen")
            return false
        }
        else {
            number++;
            board = safeSquares(nextqueen, board, nextqueen.slice(), [1,2,3], 4, true);
        }
       
      
        for(var i=0; i<board.length; i++){
            for(var j=0; j<board[i].length; j++){
                if(board[i][j]==0){
                    console.log("board on 192", board)
                    // console.log("line 188")
                    var result = eightQueens([j+1, i+1], board, number + 1, startQueen, possibleBoards);
                    console.log("a possible board", result)
                    // console.log("number", number)
                    // if(result){
                        
                    //     possibleBoards.push(result);
                    //     console.log("array of possibilities", possibleBoards);
                    // }
                    // else {

                    // }
                }   
            }
        }
    }
    if(number == 2){
        console.log("returning", board)
        // possibleBoards.push(board);
        return board;
    }
    else {
        if(startQueen[1] < 8){
            queen[0] = startQueen[0];
            queen[1] = startQueen[1] + 1;
           
        }
        else if(startQueen[0] < 8){
            queen[0] = startQueen[0] + 1;
            queen[1] = 1;
        }
        else {
            // console.log("End of the line")
            if(possibleBoards.length > 0){
                return possibleBoards
            }
            return false;
        }
        
        // return eightQueens(queen, safeSquares(queen), 1, queen, possibleBoards);
    }
    
    

}

eightQueens();
// we're going to place a queen and find the safe squares
// place a queen on one of the safe squares