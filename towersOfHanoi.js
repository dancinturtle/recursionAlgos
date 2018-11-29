// Towers of Hanoi game: There are three poles and a stack of disks that fit onto the poles. The disks range from largest on the bottom to smallest on to, currently all on pole A. Moving only one disk at a time, move the stack to pole C. You can use any of the three poles you wish. A larger disk can never be placed on top of a smaller isk. How many moves does it take to relocate six disks from pole A to pole C? What is the first move?

var tower = [6,5,4,3,2,1];

function towers(a, b, c, length, turns){
    if(b===undefined){
        length = a.length;
        turns = 1;
        b = [];
        c = [];
        c.push(a.pop());
        towers(a, b, c, length, turns);
    }
    if(c.length == length){
        return turns;
    }
    turns++;
    return "done";
    ///saaaaasdfghjkl

}
console.log(towers([1]))
