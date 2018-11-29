// zib(0) = 1
// zib(1) = 1
// zib(2) = 2
// zib(2n+1) = zib(n) + zib(n-1) + 1, odd values 3 and higher
// zib(2n) = zib(n) + zib(n+1) + 1, even values 4 and higher

function zib(n){
    if(n == 0 || n == 1){
        return 1;
    }
    if(n == 2){
        return 2;
    }
    if(n % 2 == 0){
        return zib(n/2) + zib(n/2 + 1) + 1
    }

    let x = (n-1)/2;
    return zib(x) + zib(x - 1) + 1;
}
console.log(zib(1)) // 1
console.log(zib(2)) // 2
console.log(zib(3)) // 3
console.log(zib(4)) // 6
console.log(zib(5)) // 4
console.log(zib(6)) // 10
console.log(zib(7)) // 6
console.log(zib(8)) // 11
console.log(zib(9)) // 10
console.log(zib(10)) // 15
console.log(zib(11)) // 11
console.log(zib(12)) // 17
console.log(zib(13)) // 15
console.log(zib(14)) // 18
console.log(zib(15)) // 17
console.log(zib(16)) // 22
console.log(zib(17)) // 18
console.log(zib(18)) // 26
console.log(zib(19)) // 22
console.log(zib(20)) // 27
console.log(zib(100)) // 128
console.log(zib(200)) // 255
console.log(zib(2467)) //3186

function bestZib(n){
    var passed = 0;
    var x = 0;
    while(passed < 2){
        if(zib(x) > n ){
            passed++;
        }
        if(zib(x)== n && passed == 1){
            return x;
        }
        x++;
    }
    if(passed >=2){
        return null;
    }
}

console.log("Best zib", bestZib(3183))

