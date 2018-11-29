// Given a positive integer, successfively print squares of integers up to that integer, first ascending odds, then descending evens.
// eg rRisingSquares(8) returns "1, 9, 25, 49, 64, 36, 16, 4"
function rRisingSquares(number, current, returnstr, direction){
    if(current === undefined){
        return rRisingSquares(number, 3, "1", "up");
    }
    if(current <= number && current > 0){
    
        returnstr += ", " + current * current;
        
        if(direction == "up"){
            return rRisingSquares(number, current + 2, returnstr, direction);
        }
        else {
            return rRisingSquares(number, current - 2, returnstr, direction);
        }
    
    }
    if(current > number){
        if(number % 2 == 0){
            return rRisingSquares(number, current-1, returnstr, "down");
        }
        else {
            return rRisingSquares(number, current - 3, returnstr, "down");
        }
    }
    
    return returnstr;
}

console.log(rRisingSquares(5));