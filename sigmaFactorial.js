function rMultiplication(n, m){
    var returnProduct = 1;
    if(n>m){
        var intN = Math.trunc(n)
        var prevProduct = rMultiplication(intN - 1, m);
        returnProduct = prevProduct * intN;
    }
    else if (m>n) {
        var intM = Math.trunc(m);
        var prevProduct = rMultiplication(n, intM-1);
        returnProduct = prevProduct * intM;
    }
    return returnProduct;
}
// console.log(rMultiplication(13,11));

function rSigma(n){
    var returnVal = 0;
    if (n >=1){
        var intNum = Math.trunc(n);
        var prevVal = rSigma(intNum-1);
        returnVal = prevVal + intNum;
    }
    return returnVal;
}

function rsigmaf(n){
    if(n >= 1){
        return rsigmaf(n-1)+n;
    }
    return 0;
}
console.log("rsigmaf", rsigmaf(5))
// console.log(rSigma(5));

// rsigma(5)
// returnval = 0
// preval = rsigma(4) = 10
// returnval = 10 + 5
// return 15

// rsigma(4)
// returnval = 0
// preval = rsigma(3) = 6
// returnval = 6 + 4
// return 10

// rsigma(3)
// returnval = 0
// preval = rsigma(2) = 3
// returnval = 3 + 3
// return 6

// rsigma(2)
//returnval = 0
// preval = rsgima(1) = 1
// returnval = 1 + 2
// return 3

// rsigma(1)
// returnval = 0
// preval = rsigma(0) = 0
// returnval = 0 + 1
// return 1

// risgma(0)
// returnval = 0
// return 0

function rFactorial(n){
    var returnProduct = 1;
    if(n>1){
        var intNum = Math.trunc(n);
        var prevProduct = rFactorial(intNum-1);
        returnProduct = prevProduct * intNum;
    }
    return returnProduct;

}
// console.log(rFactorial(6.5));

function fac(n){
    var product = 1;
    for(n; n>0; n--){
        product *= n;
    }
    return product;
}
// console.time("fac");
// fac(1050);
// console.timeEnd("fac");

console.time("rfac");
rFactorial(1050);
console.timeEnd("rfac");