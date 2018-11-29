// tarai(x,y,z) = y if x <=y, otherwise see next rule
// tarai(x,y,z) = tarai((tarai(x-1, y, z), tarai(y-1, z, x), tarai(z-1, x,y)))
var count = 0;
function tarai(x,y,z){
    count++;
    console.log(count);
    if(x <= y){
        return y;
    }
    return tarai(tarai(x-1, y, z), tarai(y-1, z, x), tarai(z-1, x, y))
}

console.log(tarai(10,2,9))